import { Container, LoginBox, Logo, Title, SubTitle, Input, ForgotPassword, SubmitButtonContainer, LoginButton, CreateAccountButton, ErrorMessage } from "./styles"; // Importando os estilos
import { useState, useContext } from "react";
import { UserContext } from "../../context/userContext"; // Importando o contexto
import GLogo from "../../assets/login/g-logo.png";

const Login = () => {
  const { handleLogin } = useContext(UserContext); // Obtendo a função handleLogin do contexto
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    // Validando se os campos foram preenchidos
    if (email === "" || password === "") {
      setError("Por favor, preencha todos os campos.");
    } else {
      setError(null);
      handleLogin(email, password);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(); // Chama a função de login quando pressionar Enter
    }
  };

  return (
    <Container>
      <LoginBox>
        <Logo src={GLogo} alt="Google Logo" />
        <Title>Faça login</Title>
        <SubTitle>Com sua conta Google</SubTitle>

        <Input
          type="email"
          placeholder="Email ou telefone"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <ForgotPassword>Esqueceu a senha?</ForgotPassword>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <SubmitButtonContainer>
          <LoginButton primary onClick={handleSubmit}>Entrar</LoginButton>
          <CreateAccountButton>Criar conta</CreateAccountButton>
        </SubmitButtonContainer>
      </LoginBox>
    </Container>
  );
};

export default Login;
