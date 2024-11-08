import { Container, ChannelImage, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

function VideoComponent({ video }: any) {
    return (
        <Container>
            <ImageBanner src="https://cdns-images.dzcdn.net/images/cover/64e54e307bd5e2bdb27ffeb662fd910d/1900x1900-000000-80-0-0.jpg" />
            <TitleContainer>
                <ChannelImage>
                    FB
                </ChannelImage>
                <TextContainer>
                    <Title>{video.title}</Title>
                    <TextCard>{video.description}</TextCard>
                    <TextCard>{video.channel}</TextCard>
                    <TextCard>{video.views} views - {video.data} ago</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;