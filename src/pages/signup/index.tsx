import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
// import { UserContext } from "../../context/userContext";
import { Container,
    LoginBox,
    Logo,
    Title,
    SubTitle,
    Input,
    CheckboxContainer,
    CheckboxLabel,
    SubmitButtonContainer,
    Button,
    ErrorMessage
} from "./styles";
import GLogo from '../../assets/login/g-logo.png';



function SignUp() {
    const navigate = useNavigate();
    // const { handleSignUp } = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    // const handleSubmit = () => {
    //     if (name && email && password) {
    //         handleSignUp(name, email, password);
    //     } else {
    //         setError('Por favor, preencha todos os campos.');
    //     }
    // };

    return (
        <Container>
            <LoginBox>
                <Logo src={GLogo} />
                    <Title>Crie sua conta nesse projeto!</Title>
                <SubTitle>Prosseguir no YouTube</SubTitle>
                <Input 
                    type="text" 
                    placeholder="Nome completo" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required
                />
                <Input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                />
                <Input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Senha" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required
                />
                <CheckboxContainer>
                    <input 
                        type="checkbox" 
                        id="show-password" 
                        checked={showPassword} 
                        onChange={() => setShowPassword(!showPassword)} 
                    />
                    <CheckboxLabel htmlFor="show-password">Mostrar senha</CheckboxLabel>
                </CheckboxContainer>
                <SubmitButtonContainer>
                    <Button onClick={() => navigate('/login')} primary={false}>Faça login ao invés disso</Button>
                    
                </SubmitButtonContainer>
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </LoginBox>
        </Container>
    );
}

export default SignUp;
