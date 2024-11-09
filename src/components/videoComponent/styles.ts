import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    `;

export const ImageBanner = styled.img<{ openMenu: boolean }>`
    width: ${({ openMenu }) => (openMenu ? '500px' : '382px')};
    height: ${({ openMenu }) => (openMenu ? '268px' : '210px')};
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        height: 180px;
    }

    @media (max-width: 480px) {
        height: 150px;
    }
`;

export const TitleContainer = styled.div<{ openMenu: boolean }>`
    display: flex;
    width: auto;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
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
        min-width: 28px;
        height: 28px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-left: 10px;

    @media (max-width: 768px) {
        margin-left: 8px;
    }
`;

export const Title = styled.span`
    font-weight: 600;
    color: #0f0f0f;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;

    @media (max-width: 768px) {
        font-size: 12px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
    }
`;