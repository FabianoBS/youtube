import { createContext, useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState<{ nome?: string; email?: string; id?: string }>({});
  const [userVideos, setUserVideos] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') as string);
  const [openDropDownMenu, setOpenDropDownMenu] = useState(false);
  const navigate = useNavigate();

  const getVideos = async (token: string, user_id: string) => {
    try {
      const response = await api.get(`/videos/get-videos/${user_id}`, { headers: { authorization: token } });
      if (response.status === 200) {
        setUserVideos(response.data.videos);
        console.log(response.data.videos);
      }
    } catch (error) {
      console.log('erro ao buscar vídeos', error);
    }
  };

  const createVideos = async (token: string, user_id: string, title: string, description: string, thumbnail: string, publishedAt: Date) => {
    try {
      const response = await api.post(`/videos/create-video/${user_id}`, { title, description, thumbnail, publishedAt },
        { headers: { authorization: token } });
      if (response.status === 200) {
        alert('Video enviado com sucesso!');
        getUser(token);
      }
    } catch (error) {
      alert('Não foi possível enviar o vídeo. Tente novamente.');
    }
  };

  const getUser = async (token: string) => {
    try {
        const response = await api.get('user/get-user', { headers: { authorization: token } });
        if (response.status === 200) {
            console.log("Resposta da API no getUser:", response.data.user);
            setUser(response.data.user);
            getVideos(token, response.data.user.id);
        }
    } catch (error) {
        console.log('Usuário não autenticado', error);
        setLogin(false);
        setToken('');
        setUser({}); // Resetando o estado de user em caso de falha
        localStorage.removeItem('token');
    }
};

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      getUser(storedToken); // Chama getUser para buscar o usuário
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem('token');
    setLogin(false);
    setToken('');
    setUser({});
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await api.post('user/sign-in', { email, password });
      if (response.status === 200) {
        setLogin(true);
        localStorage.setItem('token', response.data.token);
        setToken(response.data.token);
        getUser(response.data.token);
        navigate('/');
      }

    } catch (error: any) {
      setLogin(false);
      setToken('');
      localStorage.removeItem('token');
      if (error && error.response.status === 401) {
        alert(error.response.data.message);
      }
      if (error && error.response.status === 404) {
        alert(error.response.data.message);
      }
    }
  };

  const handleCreateUser = async (name: string, email: string, password: string) => {
    try {
      const response = await api.post('/user/sign-up', { name, email, password });
      if (response.status === 200) {
        alert('Usuário criado com sucesso.')
        handleLogin(email, password);
      }
    } catch (error: any) {
      if (error && error.response.status === 409) {
        alert(error.response.data.message);
      }
    }
  };

  return (
    <UserContext.Provider value={{
      login,
      user,
      token,
      userVideos,
      openDropDownMenu,
      setOpenDropDownMenu,
      createVideos,
      handleLogin,
      handleCreateUser,
      logOut
    }}>
      {children}
    </UserContext.Provider>
  )
}