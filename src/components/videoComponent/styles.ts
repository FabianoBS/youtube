import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const ImageBanner = styled.img`
    width: 100%;
    height: 210px;
    object-fit: cover;
    border-radius: 12px;

    @media (max-width: 768px) {
        height: 180px; /* Ajusta a altura da imagem em telas menores */
    }

    @media (max-width: 480px) {
        height: 150px; /* Ajuste adicional para telas pequenas */
    }
    `;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column; /* Altera a direção para coluna em telas menores */
        align-items: flex-start; /* Alinha o conteúdo à esquerda */
    }
`;

export const ChannelImage = styled.div`
    background-color: beige;
    min-width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    @media (max-width: 768px) {
        min-width: 28px; /* Ajusta o tamanho em telas menores */
        height: 28px; /* Ajuste adicional para telas pequenas */
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;

    @media (max-width: 768px) {
        margin-left: 8px; /* Reduz o espaçamento em telas menores */
    }
`;

export const Title = styled.span`
    font-weight: 600;
    color: #0f0f0f;

    @media (max-width: 768px) {
        font-size: 14px; /* Ajusta o tamanho da fonte em telas menores */
    }

    @media (max-width: 480px) {
        font-size: 12px; /* Ajuste adicional para telas pequenas */
    }
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;

    @media (max-width: 768px) {
        font-size: 12px; /* Ajusta o tamanho da fonte em telas menores */
    }

    @media (max-width: 480px) {
        font-size: 10px; /* Ajuste adicional para telas pequenas */
    }
`;