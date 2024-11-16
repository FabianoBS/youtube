import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

interface ContainerProps {
    openDropDownMenu: boolean
}

interface ClearButtonProps {
    clearButton: boolean
}

interface SearchContainerProps {
    openSearch: boolean;
}

interface BackButtonProps {
    openSearch: boolean;
}

export const Container = styled.header`
    width: 100%;
    height: 56px;
    background-color: ${({theme}) => theme.colors.secondary};
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    position: fixed;
    
    z-index: 2;

    @media (max-width: 768px) {
        height: 50px;
    }

    @media (max-width: 480px) {
        height: 45px;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        width: auto;
        margin-left: -14px;
    }
`;

export const ButtonContainer = styled.button<{ margin?: string, responsive688?: boolean, responsive600?: boolean }>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ margin }) => margin? margin : 0};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: 0.4s;
    border: none;

    &:hover {
        background-color: ${({theme}) => theme.colors.bgColor};
    }

    ${props =>
        props.responsive688 &&
        css`
            @media (max-width: 688px) {
                display: none;
            }
        `
    }

    ${props =>
        props.responsive600 &&
        css`
            @media (max-width: 600px) {
                display: none;
            }
        `
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;
    
    @media (max-width: 768px) {
        width: 18px;
    }

    @media (max-width: 480px) {
        width: 16px;
    }
`;

export const Logo = styled.img`
    width: 100px;
    cursor: pointer;
        
    @media (max-width: 414px) {
        width: 80px;
    }
`;

export const LinkLogo = styled(NavLink)`
    width: 100px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SearchContainer = styled.div<SearchContainerProps>`
    display: flex;
    
    @media(max-width: 414px) {
    position: fixed;
    top: -100px;
    ${props => props.openSearch && css`
        // estilos condicionais quando openSearch for true
        top: 10px;
    `}
    left: 0;
    width: 95%;
    z-index: 6;
    background-color: #fff;
    height: 50px;
  }
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid ${({theme}) => theme.colors.borderColor};
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;

    @media(max-width: 834px) {
        width: 260px;
        margin-left: 10px;
    }

    @media(max-width: 688px) {
        width: 230px;
        margin-left: 10px;
    }

    @media(max-width: 600px) {
        width: 200px;
        margin-left: 10px;
    }

    @media(max-width: 414px) {
        width: 100%;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 70px;
    background-color: #f8f8f8;
    border: 1px solid ${({theme}) => theme.colors.borderColor};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const SearchButtonResponsive = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
    border: 1px solid ${({theme}) => theme.colors.borderColor};
    cursor: pointer;

    @media(max-width: 414px) {
        display: flex;
        border-radius: 50%;
        min-height: 40px;
        min-width: 40px;
        max-height: 40px;
        max-width: 40px;
    }
`;

export const BackButton = styled.button<BackButtonProps>`
    
    display: none;
    ${props => props.openSearch && css`
        display: flex;
    `}
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.4s;
    margin-left: 10px;

    &:hover {
        background-color: ${({theme}) => theme.colors.bgColor};
    }
`;

export const HeaderButtons = styled.div`
    width: 200px;
    display: flex;
    
    @media(max-width: 834px) {
        margin-left: 10px;
    }
    
    @media(max-width: 414px) {
        margin-left: 50px;
    }
`;

export const LoginContainer = styled.div`
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 7px;
    cursor: pointer;
`;

export const LoginButton = styled.div`
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    border: 1px solid ${({theme}) => theme.colors.borderColor};
    border-radius: 20px;

    &:hover {
        background-color: aliceblue;
    }
`;

export const LoginIcon = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 50%;
`;

export const Span = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: blue;
    opacity: 0.9;
`;

export const DropDownMenu = styled.div<ContainerProps>`
    width: 200px;
    background-color: ${({theme}) => theme.colors.secondary};
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 10 0px;
    box-sizing: border-box;
    box-shadow: 0px 5px 10px 5px rgba(0,0,0,0.1);
    position: absolute;
    top: 8px;
    right: ${({openDropDownMenu}) => openDropDownMenu ? '110px' : '-200px'};
    transition: 0.5s;

    @media(max-width: 375px) {
        right: ${({openDropDownMenu}) => openDropDownMenu ? '70px' : '-200px'};
    }
`;

export const UserInfoContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    column-gap: 10px;
`;

export const UserName = styled.span`
    font-size: 1.1rem;
    font-weight: 400;
`;

export const DropDownMenuContent = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    column-gap: 10px;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    cursor: pointer;
`;

export const LogOutButton = styled.button`
    border: none;
    outline: none;
    font-size: 0.9rem;
    font-weight: 300;
    background-color: inherit;
`;

export const ClearButton = styled.button<ClearButtonProps>`
    display: ${({clearButton}) => clearButton? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: 0.4s;
    background-color: ${({theme}) => theme.colors.secondary};

    &:hover{
        background-color: ${({theme}) => theme.colors.borderColor};
    }
`;

export const CloseImg = styled.img`
    width: 15px;
`;


// export const MicButtonContainer = styled(ButtonContainer)`
//     border-radius: 50%;
//     height: 40px;
//     background-color: #f0f0f0;
//     width: 40px;
    
//     &:hover {
//         background-color: #d3d3d3;
//     }

//     @media (max-width: 768px) {
//         height: 35px;
//         width: 35px;
//     }

//     @media (max-width: 480px) {
//         height: 30px;
//         width: 30px;
//     }
// `;

// export const LoginButtons = styled.div`
//     height: 40px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 0 12px;

//     img {
//         width: 24px;
//     }

//     @media (max-width: 768px) {
//         padding: 4px;

//         img {
//             width: 20px;
//         }

//         #user-photo {
//             width: 28px;
//         }
//     }

//     @media (max-width: 480px) {
//         padding: 4px;

//         img {
//             width: 18px;
//         }

        
//     }
// `;

// export const UserPhotoBox = styled.div`
//     width: 40px;
//     border-radius: 50%;
//     background-color: blue;
//     font-weight: 500;
//     color: #fff;
// `;

// export const UserPhoto = styled(LoginButtons)`
//     border-radius: 0;
//     font-size: 20px;
    
//     @media (max-width: 768px) {
//         width: 18px;
//     }

//     @media (max-width: 480px) {
//         width: 16px;
//     }
// `;

// export const DropdownList = styled.ul`
//     padding: 6px 0;
//     margin: 0;
//     list-style: none;

//     li {
//         padding: 8px 16px;
//         cursor: pointer;
//         &:hover {
//             background-color: #f5f5f5;
//         }
//     }
// `;

// export const ButtonContent = styled.div`
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
// `;