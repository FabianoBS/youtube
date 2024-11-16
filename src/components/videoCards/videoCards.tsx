import { Container, ChannelImage, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./videoCards-style";

interface Props {
    title: string,
    thumbnail: string,
    channelImage: string,
    channelName: string,
    details: string
}

function VideoCard(props: Props) {
    return (
        <Container>
            <ImageBanner alt="thumbnail" src={props.thumbnail} />
            <TitleContainer>
                <ChannelImage>
                    {props.channelImage}
                </ChannelImage>
                <TextContainer>
                    <Title>{props.title}</Title>
                    <TextCard>{props.channelName}</TextCard>
                    <TextCard>{props.details}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    );
}


export default VideoCard;