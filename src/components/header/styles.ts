import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 56px;
    background-color: #fff;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;

    @media (max-widht: 768px) {
        height: 50px;
    }

    @media (max-width: 480px) {
        height: 45px;
    }
`;

export const LogoContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        width: auto;
        margin-left: -14px;
    }
    `;

export const LogoHeader = styled.div`
    width: 123px;
    height: 56px;
    cursor: pointer;
    display: flex;

    #img-header {
        height: auto;
        
    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 480px) {
        width: 60%;
    }
    }
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
    width: 40px;
    height: 40px;
    margin: ${({ margin }) => margin? margin : 0};
    cursor: pointer;
    transition: background-color 1s ease;

    &:hover {
        background-color: #d3d3d3;
    }

    @media (max-width: 768px) {
        width: 35px;
        height: 35px;
        margin: 0;
    }

    @media (max-width: 480px) {
        width: 25px;
        height: 25px;
    }
`;

export const ButtonContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`;

export const ButtonIcon = styled.img`
    width: 20px;
    border-radius: 0;
    
    @media (max-width: 768px) {
        width: 18px;
    }

    @media (max-width: 480px) {
        width: 16px;
    }
`;

export const SearchContainer = styled.div`
    display: flex;
    height: 40px;
    
    @media (max-width: 768px) {
        height: 35px; /* Ajusta a altura em telas menores */
    }

    @media (max-width: 480px) {
        height: 30px; /* Ajuste adicional */
    }
`;

export const SearchInputContainer = styled.div`
    width: 536px;
    height: 40px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding-left: 16px;

    @media (max-width: 1080px) {
        width: auto;
    }

    @media (max-width: 890px) {
        width: auto;
    }

    @media (max-width: 768px) {
        width: auto;
        height: 35px;
    }

    @media (max-width: 610px) {
        width: 30px;
    }

    @media (max-width: 480px) {
        height: 30px;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
    font-size: 16px;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 40px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    &:hover {
        background-color: #d3d3d3;
    }

    @media (max-width: 768px) {
        height: 35px;
        width: 60px;
    }

    @media (max-width: 480px) {
        height: 30px;
        width: 50px;
    }
`;

export const MicButtonContainer = styled(ButtonContainer)`
    border-radius: 50%;
    height: 40px;
    background-color: #f0f0f0;
    width: 40px;
    
    &:hover {
        background-color: #d3d3d3;
    }

    @media (max-width: 768px) {
        height: 35px;
        width: 35px;
    }

    @media (max-width: 480px) {
        height: 30px;
        width: 30px;
    }
`;

export const HeaderButtons = styled.div`
    display: flex;
    padding: 8px;

    img {
        width: 24px;
    }

    #user-photo {
        width: 32px;
        border-radius: 50%;
    }

    @media (max-width: 768px) {
        padding: 4px;

        img {
            width: 20px;
        }

        #user-photo {
            width: 28px;
        }
    }

    @media (max-width: 480px) {
        padding: 4px;

        img {
            width: 18px;
        }

        #user-photo {
            width: 24px;
        }
    }
`;