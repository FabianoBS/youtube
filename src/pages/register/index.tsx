import { Container, LoginBox, Logo, Title, SubTitle, Input, SubmitButtonContainer, LoginButton, CreateAccountButton, ErrorMessage } from "./styles"; // Importando os estilos
import { useState, useContext } from "react";
import { UserContext } from "../../contexts/userContext"; // Importando o contexto
import GLogo from "../../assets/login/g-logo.png";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const { handleCreateUser } = useContext(UserContext); // Obtendo a função handleLogin do contexto
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (name === "" || email === "" || password === "") {
            setError("Por favor, preencha todos os campos.");
        } else {
            setError(null);
            handleCreateUser(name, email, password);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSubmit(); // Chama a função de registro quando pressionar Enter
        }
    };

    return (
        <Container>
            <LoginBox>
                <Logo src={GLogo} alt="Google Logo" />
                <Title>Criar conta</Title>
                <SubTitle>Para melhor experiência no projeto</SubTitle>

                <Input
                type="text"
                placeholder="Nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={handleKeyPress}
                />
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

                {error && <ErrorMessage>{error}</ErrorMessage>}

                <SubmitButtonContainer>
                    <LoginButton primary onClick={handleSubmit}>Criar</LoginButton>
                <CreateAccountButton onClick={() => navigate("/login")}>Voltar</CreateAccountButton>
                </SubmitButtonContainer>
            </LoginBox>
        </Container>
    );
};

export default Register;