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
    top: 0;
    background-color: #fff;

    &::before {
        content: "";
        position: absolute;
        left: 40px;
        top: 0;
        width: 90px;
        height: 100%;
        background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.6) 66%);
        pointer-events: none;
    }

    &::after {
        content: "";
        position: absolute;
        right: 40px;
        top: 0;
        width: 150px;
        height: 100%;
        background: linear-gradient(to left, #fff, transparent);
        pointer-events: none;
    }
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
`;

export const BackButton = styled.button<ButtonProps>`
    width: 40px;
    height: 40px;

    position: absolute;
    z-index: 999999;
    left: 6px;
    
    display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 50%;

    background-color: transparent;;
    font-size: 24px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: #d3d3d3;
    }
`;

export const NextButton = styled.button<ButtonProps>`
    width: 40px;
    height: 40px;

    position: absolute;
    right: 6px;
    z-index: 999999;
    
    display: ${({ isVisible }) => (isVisible ? 'none' : 'flex')};
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 50%;

    background-color: transparent;
    font-size: 24px;
    cursor: pointer;
    transition: 0.3s;

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