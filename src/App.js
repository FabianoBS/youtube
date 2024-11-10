import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserStorage } from "./context/userContext";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home";
import Shorts from "./pages/shorts";
import Subscriptions from "./pages/subscriptions";
import You from "./pages/you";
import Login from "./pages/login";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <BrowserRouter>
      <UserStorage>  
        <Routes>
          {/* Página de login sem header e menu */}
          <Route path="/login" element={<Login />} />
          {/* Páginas com header e menu */}
          <Route
            path="*"
            element={
              <div className="App">
                <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
                <div style={{ width: '100%', display: 'flex', height: 'calc(100vh - 56px)' }}>
                  <Menu openMenu={openMenu} />
                  <div style={{ width: '100%', boxSizing: 'border-box', overflowY: 'auto' }}>
                    <Routes>
                      <Route path="/" element={<Home openMenu={openMenu} />} />
                      <Route path="/shorts" element={<Shorts />} />
                      <Route path="/subscriptions" element={<Subscriptions />} />
                      <Route path="/you" element={<You />} />
                    </Routes>
                  </div>
                </div>
              </div>
            }
          />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

// fazer a tela de login;  ---Check!
// dropdown menu user; ---Check!
// criar tela e integração para cadastro de usuário;
// criar tela e integração para cadastro de vídeo;
// implementação de pesquisa

export default App;