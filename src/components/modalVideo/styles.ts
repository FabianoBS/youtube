import styled from "styled-components";

export const ModalContainer = styled.div`
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    width: 100%;
    max-width: 600px;
    background: white;
    padding: 20px;
    border-radius: 8px;
    position: relative;

    h2 {
        margin-bottom: 20px;
    }

    div {
        margin-bottom: 15px;

        label {
            display: block;
            margin-bottom: 5px;
        }

        input, textarea {
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }

        textarea {
            height: 80px; /* Altura do textarea */
            resize: none; /* Impede redimensionar */
        }
    }

    button {
        margin-right: 10px;
        padding: 10px 15px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;

        &:first-child {
            background-color: #4CAF50; /* Cor do botão adicionar */
            color: white;
        }

        &:last-child {
            background-color: #f44336; /* Cor do botão limpar */
            color: white;
        }
    }
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 18px;
    color: black;
    z-index: 1001;
`;
