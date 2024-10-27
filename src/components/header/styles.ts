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
`;

export const LogoContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    `;

export const LogoHeader = styled.div`
    height: 100%;
    width: auto;
    cursor: pointer;
    display: flex;

    #img-header {
    width: 100%;
    }
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
    width: 40px;
    height: 40px;
    margin: ${({ margin }) => margin? margin : 0};
    cursor: pointer;
    transition: background-color 1s ease;

    :hover {
        background-color: #d3d3d3;
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
    border-radius: 0; /* Garante que o ícone não tenha border-radius */
`;

export const SearchContainer = styled.div`
    display: flex;
    height: 40px;
`;

export const SearchInputContainer = styled.div`
    width: 536px;
    height: 40px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding-left: 16px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
    font-size: 16px;
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
`;

export const MicButtonContainer = styled(ButtonContainer)`
    border-radius: 50%;
    height: 40px;
    background-color: #f0f0f0;
    width: 40px;
    
    &:hover {
        background-color: #d3d3d3;
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
`;