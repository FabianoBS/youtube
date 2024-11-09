import styled from "styled-components";

interface ContainerProps {
    openMenu: boolean;
}

interface ButtonProps {
    isVisible: boolean;
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    max-width: 1600px;
    height: 56px;
    position: sticky;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 46px;
    background-color: #fff;
    z-index: 1;
`;

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
`;

export const CategoryContainer = styled.div`
    display: flex;
    gap: 8px;
    overflow-x: auto;
    overflow-y: hidden;
    flex: 1;
    white-space: nowrap;
    /* position: relative;
    z-index: 1; */
    
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const CategoryContent = styled.div`
    padding: 0 12px;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.05);
    color: #000;
    cursor: pointer;
    font-size: 14px;
    line-height: 32px;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
`;

export const BackButton = styled.button<ButtonProps>`
    width: 40px;
    height: 40px;

    /* position: absolute; */
    left: 6px;
    
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 50%;

    background-color: transparent;
    font-size: 24px;
    cursor: pointer;
    transition: 0.3s;
    z-index: 2; /* Garantindo que o botão tenha um z-index maior do que o filtro */

    &:hover {
        background-color: #d3d3d3;
    }
`;

export const NextButton = styled.button<ButtonProps>`
    width: 40px;
    height: 40px;

    /* position: absolute; */
    right: 6px;
    
    display: ${({ isVisible }) => (isVisible ? 'none' : 'flex')};
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 50%;

    background-color: transparent;
    font-size: 24px;
    cursor: pointer;
    transition: 0.3s;
    z-index: 2; /* Garantindo que o botão tenha um z-index maior do que o filtro */

    &:hover {
        background-color: #d3d3d3;
    }
`;

export const ImgBackButton = styled.img`
    width: 24px;
    height: 24px;
    object-fit: cover;
`;

export const ImgNextButton = styled.img`
    width: 24px;
    height: 24px;
    object-fit: cover;
`;

