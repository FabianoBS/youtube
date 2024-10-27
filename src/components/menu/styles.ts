import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: ${({ openMenu }) => openMenu? '240px' : '76px' };
    height: calc(100vh - 56px);
    box-sizing: border-box;
    padding: 4px 4px;
    display: flex;
    align-content: center;
    flex-direction: column;
    overflow-y: auto;

    hr {
        display: ${({ openMenu }) => openMenu? 'block' : 'none' };
        border: 0;
	    border-top: 1px solid red;

    }
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
    min-height: ${({ openMenu }) => openMenu? '44px' : '70px' };
    padding-top: ${({ openMenu }) => openMenu? '0' : '16px'};
    padding-bottom: ${({ openMenu }) => openMenu? '0' : '14px'};
    cursor: pointer;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: ${({ openMenu }) => openMenu? 'flex-start' : 'center' };
    flex-direction: ${({ openMenu }) => openMenu? 'row' : 'column' };
    background-color: #fff;

    span {
        font-weight: ${({ openMenu }) => openMenu? '600' : '400' };
        margin-left: ${({ openMenu }) => openMenu? '20px' : 'none' };
        font-size: ${({ openMenu }) => openMenu? '14px' : '10px' };
        line-height: 20px;
    }

    &:hover {
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 0;
`;