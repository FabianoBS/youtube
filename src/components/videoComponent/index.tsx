import { Container, ChannelImage, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

function VideoComponent() {
    return (
        <Container>
            <ImageBanner src="https://cdns-images.dzcdn.net/images/cover/64e54e307bd5e2bdb27ffeb662fd910d/1900x1900-000000-80-0-0.jpg" />
            <TitleContainer>
                <ChannelImage>
                    FB
                </ChannelImage>
                <TextContainer>
                    <Title>Arctic Monkeys - Do I Wanna Know? (Official Video)</Title>
                    <TextCard>Official Arctic Monkeys</TextCard>
                    <TextCard>1.6B views - 11 years ago</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoComponent;