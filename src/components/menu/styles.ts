import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: ${({ openMenu }) => (openMenu ? '290px' : '76px')};
    height: calc(100vh - 56px);
    box-sizing: border-box;
    padding: ${({ openMenu }) => (openMenu ? '12px' : '7px 4px')};
    display: flex;
    align-content: center;
    flex-direction: column;
    overflow-y: auto;
    position: sticky;
    top: 57px;

    hr {
        display: ${({ openMenu }) => (openMenu ? 'block' : 'none')};
        border: 0;
	    border-top: 1px solid #E5E5E5;
        margin: 12px 0;

    }

    #content-box {
        background-color: red;
    }

    @media (max-width: 768px) {
        width: ${({ openMenu }) => (openMenu ? '200px' : '50px')};
        padding: ${({ openMenu }) => (openMenu ? '10px' : '5px')};
    }

    @media (max-width: 480px) {
        width: ${({ openMenu }) => (openMenu ? '150px' : '40px')};
        padding: ${({ openMenu }) => (openMenu ? '8px' : '4px')};
    }
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
    width: 98%;
    min-height: ${({ openMenu }) => openMenu? '40px' : '70px' };
    padding: 0 12px;
    cursor: pointer;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: ${({ openMenu }) => openMenu? 'flex-start' : 'center' };
    flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column' };
    
    img {
        margin-right: ${({ openMenu }) => openMenu? '24px' : 'none' };
        margin-left: ${({ openMenu }) => openMenu? '1px' : '0' };
    }

    span {
        font-weight: ${({ openMenu }) => openMenu? '400' : '400' };
        font-size: ${({ openMenu }) => openMenu? '14px' : '10px' };
        line-height: 20px;
        width: ${({ openMenu }) => openMenu? '100%' : 'auto' };;
    }

    &:hover {
        background-color: #f2f2f2;
    }

    @media (max-width: 768px) {
        min-height: ${({ openMenu }) => openMenu ? '35px' : '60px'};
        padding: 0 8px;
    }

    @media (max-width: 480px) {
        min-height: ${({ openMenu }) => openMenu ? '30px' : '50px'};
        padding: 0 5px;

        span {
            font-size: ${({ openMenu }) => (openMenu ? '12px' : '8px')};
        }
    }
`;

export const ButtonIcon = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 0;

    @media (max-width: 480px) {
        width: 18px;
        height: 18px;
    }
`;

