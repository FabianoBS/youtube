import { Container, ChannelImage, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

interface VideoComponentProps {
    video: Video;
    openMenu: boolean;
}

interface Video {
    image: string;
    title: string;
    description: string,
    channel: string;
    views: string;
    data: string;
}

interface IProps {
}


function VideoComponent({ video, openMenu }: VideoComponentProps) {
    return (
        <Container openMenu={false}>
            <ImageBanner src={video.image} openMenu={openMenu} />
            <TitleContainer openMenu={openMenu}>
                <ChannelImage>FB</ChannelImage>
                <TextContainer>
                    <Title>{video.title}</Title>
                    <TextCard>{video.description}</TextCard>
                    <TextCard>{video.channel}</TextCard>
                    <TextCard>{video.views} views - {video.data} ago</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    );
}


export default VideoComponent;