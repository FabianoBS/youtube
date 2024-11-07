import React, { useState } from 'react';
import { ModalContainer, ModalContent, CloseButton } from './styles';


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddVideo: (thumbnailUrl: string, title: string, description: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onAddVideo }) => {
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const handleAddVideo = () => {
        if (!thumbnailUrl || !title) {
            alert("Título e URL são obrigatórios.");
            return;
        }
        onAddVideo(thumbnailUrl, title, description);
        onClose();
    }
        
    const handleClearFields = () => {
        setThumbnailUrl('');
        setTitle('');
        setDescription('');
    };


    if (!isOpen) return null;

    return (
        <ModalContainer onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>X</CloseButton>
                <h2>Upload de Vídeo</h2>
                <div>
                    <label>URL da Imagem:</label>
                    <input
                        type="text"
                        value={thumbnailUrl}
                        onChange={(e) => setThumbnailUrl(e.target.value)}
                        placeholder='Insira a URL da imagem'
                        required
                    />
                </div>
                <div>
                    <label>Título do Vídeo:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Insira o título do vídeo'
                        required
                    />
                </div>
                <div>
                    <label>Descrição do Vídeo:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Insira a descrição do vídeo'
                        required
                    />
                </div>
                <button onClick={handleAddVideo}>Adicionar Vídeo</button>
                <button onClick={handleClearFields}>Limpar Campos</button>
            </ModalContent>
        </ModalContainer>
    );
};

export default Modal;
