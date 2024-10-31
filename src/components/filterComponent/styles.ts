import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 56px;
    box-sizing: border-box;
    background-color: #fff;
    padding: 2px 24px 0 24px;
    position: sticky;
    top: 56;
`;

export const FilterContainer = styled.div`
`;

export const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CategoryContent = styled.div`
    width: auto;
    height: 32px;
    padding: 0 12px;
    margin: 12px 12px 12px 0;
    border-radius: 8px;
    display: flex;
    align-items: center;
    white-space: nowrap;
    background-color: rgba(0, 0, 0, 0.05);
    color: #000;
    cursor: pointer;

    font-family: "Roboto", "Arial", sans-serif;
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;

    &:first-child {
        background-color: #000;
        color: #fff;
    }
`;

export const NextButton = styled.div`

`;