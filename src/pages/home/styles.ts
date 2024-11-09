import styled from "styled-components";

export const HomePage = styled.div`
    
`;

export const Container = styled.div<{ openMenu: boolean }>`
    width: 100%;
    max-width: 1600px;
    display: grid;
    grid-template-columns: ${({ openMenu }) => (openMenu ? 'repeat(2, 2fr)' : 'repeat(3, 1fr)')};
    column-gap: 20px;
    row-gap: 50px;
    padding: 20px 46px;

    @media (max-width: 1200px) {
        grid-template-columns: ${({ openMenu }) => (openMenu ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)')};
    }

    @media (max-width: 900px) {
        grid-template-columns: ${({ openMenu }) => (openMenu ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)')};
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr; /* Exibe uma coluna em telas pequenas */
    }
`;