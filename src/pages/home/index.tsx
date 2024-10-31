import VideoComponent from "../../components/videoComponent";
import FilterComponent from "../../components/filterComponent/index";
import { Container } from "./styles";

interface IProps {
    openMenu: boolean;
}

function Home({ openMenu }: IProps) {
    console.log(openMenu); // Verifique o valor de openMenu

    return (
        <div>
            <FilterComponent />
            <Container openMenu={openMenu}>
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
                <VideoComponent />
            </Container>
        </div>
    )
}
export default Home;