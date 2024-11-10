import styled from 'styled-components';


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
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
    color: #202124;
    margin-bottom: 16px;
`;

export const SubTitle = styled.span`
    font-size: 16px;
    color: #202124;
    margin-bottom: 16px;
`;

export const Input = styled.input`
    width: 100%;
    max-width: 400px;
    padding: 12px 16px;
    margin: 8px 0;
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

export const SubmitButtonContainer = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 12px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LoginButton = styled.button<{ primary?: boolean }>`
    width: 100px;
    max-width: 400px;
    padding: 12px;

    border: none;
    border-radius: 20px;
    
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 500;
    
    background-color: #4889f4;
    color: #fafafa; // Cor do texto no hover
    transition: background-color 0.3s;
    cursor: pointer;
    
    &:hover {
        background-color: #a8c7fa; // Muda a cor do hover
        color: #3961a2;
    }

    &:disabled {
        background-color: #2a4877;
        cursor: not-allowed;
    }
`;

export const CreateAccountButton = styled.button<{ primary?: boolean }>`
    width: 100px;
    max-width: 400px;
    padding: 12px;

    background-color:#f9f9f9;
    border: none;
    border-radius: 4px;
    color: #1a73e8;
    font-size: 14px;
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        color: #155ab6; // Cor do texto no hover
    }

    &:disabled {
        background-color: #b3d7ff;
        cursor: not-allowed;
    }
`;

export const ErrorMessage = styled.div`
    color: red;
    margin: 8px 0;
    font-size: 12px;
`;
