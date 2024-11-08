import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginBox = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #d3d3d3;
    border-radius: 28px;
    padding: 24px 32px;
`;

export const Logo = styled.img`
    width: 64px;
    height: 64px;
    margin-bottom: 16px;
`;

export const Title = styled.span`
    font-size: 36px;
    font-weight: 400;
    color: #202124;
    margin-bottom: 16px;
`;

export const SubTitle = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #202124;
    margin-bottom: 24px;
`;

export const Input = styled.input`
    width: 100%;
    max-width: 400px;
    padding: 12px 16px;
    margin-bottom: 16px;
    border: 1px solid #dadce0;
    border-radius: 4px;
    font-size: 14px;
    color: #202124;
    
    &:focus {
        outline: none;
        border-color: #1a73e8;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
`;

export const CheckboxContainer = styled.div`
    width: 100%;
    max-width: 400px;
    margin-bottom: 10px;  
`;

export const CheckboxLabel = styled.label`
    margin-left: 8px;
    font-size: 14px;
    color: #202124;
`;

export const SubmitButtonContainer = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 12px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.button<{ primary?: boolean }>`
    width: 100px;
    max-width: 400px;
    padding: 12px;

    background-color: ${({ primary }) => (primary ? '#1a73e8' : 'transparent')};  // Transforma em transparente se não for primário
    border: none;
    border-radius: 4px;
    color: ${({ primary }) => (primary ? 'white' : '#1a73e8')}; // Cor branca se primário, azul se não
    transition: background-color 0.3s;
    
    font-size: 14px;
    white-space: nowrap;

    cursor: pointer;

    &:hover {
        background-color: ${({ primary }) => (primary ? '#155ab6' : 'transparent')}; // Muda a cor do hover
        color: #155ab6; // Cor do texto no hover
    }

    &:disabled {
        background-color: #b3d7ff;
        cursor: not-allowed;
    }

    @media (max-width: 720px) {
        white-space: normal;
    }
`;

export const ErrorMessage = styled.div`
    color: red;
    margin-top: 12px;
    font-size: 12px;
`;
