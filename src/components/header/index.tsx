import { Container,
    LogoContainer,
    ButtonContainer,
    ButtonIcon,
    ButtonContent,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButtons,
    LogoHeader,
    MicButtonContainer
} from "./styles";
import HamburguerIcon from "../../assets/hamburger.png";
import Logo from '../../assets/YouTube-Logo.png';
import SearchIcon from '../../assets/search.png';
import MicIcon from '../../assets/microfone-gravador.png';
import VideoIcon from '../../assets/video.png';
import NotificationIcon from '../../assets/sino.png';
import UserPhoto from '../../assets/user-photo.png';

interface IProps {
    openMenu: boolean;
    setOpenMenu: (openMenu: boolean) => void;
}

function Header({ openMenu, setOpenMenu }: IProps) {
    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 14px 0 0'>
                    <ButtonContent>
                        <ButtonIcon alt="" src={HamburguerIcon} />
                    </ButtonContent>
                </ButtonContainer>
                <LogoHeader>
                    <img
                        id="img-header"
                        src={Logo}
                        alt=''
                    />
                </LogoHeader>
                <span style={{ fontSize: '10px', alignSelf: 'baseline', marginTop: '8px' }}>
                    BR
                </span>
            </LogoContainer>

            <SearchContainer>
                    <SearchInputContainer>
                        <SearchInput placeholder="Search" />
                    </SearchInputContainer>
                    <SearchButton>
                        <ButtonIcon style={{ width: '24px', height: '24px' }} alt="" src={SearchIcon} />
                    </SearchButton>
                    <ButtonContainer margin='0 0 0 10px'>
                        <MicButtonContainer>
                            <ButtonContent>
                                <ButtonIcon alt="" src={MicIcon} />
                            </ButtonContent>
                        </MicButtonContainer>
                    </ButtonContainer>
            </SearchContainer>

            <HeaderButtons>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonContent>
                        <ButtonIcon alt="" src={VideoIcon} />
                    </ButtonContent>
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonContent>
                        <ButtonIcon alt="" src={NotificationIcon} />
                    </ButtonContent>
                </ButtonContainer>
                <ButtonContainer margin='0 0 0 10px'>
                    <ButtonContent>
                        <img
                            id="user-photo"
                            src={UserPhoto}
                            alt=''
                        />
                    </ButtonContent>
                </ButtonContainer>
            </HeaderButtons>

        </Container>
    )
}

export default Header;