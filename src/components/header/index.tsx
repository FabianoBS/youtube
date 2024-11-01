import {
    Container,
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
import HamburguerIcon from "../../assets/header/hamburger.png";
import Logo from '../../assets/header/YouTube-Logo.png';
import SearchIcon from '../../assets/header/search.png';
import MicIcon from '../../assets/header/microfone-gravador.png';
import VideoIcon from '../../assets/header/video.png';
import NotificationIcon from '../../assets/header/sino.png';
import UserPhoto from '../../assets/header/user-photo.png';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

interface IProps {
    openMenu: boolean;
    setOpenMenu: (openMenu: boolean) => void;
}

function Header({ openMenu, setOpenMenu }: IProps) {
    const { login } = useContext(UserContext);

    const navigate = useNavigate();

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

                    <span style={{ fontSize: '10px', alignSelf: 'baseline', marginTop: '8px' }}>
                        BR
                    </span>
                </LogoHeader>
                
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

                {login ? 
                    <ButtonContainer margin='0 0 0 10px'>
                        <ButtonContent>
                            <img
                                id="user-photo"
                                src={UserPhoto}
                                alt=''
                            />
                        </ButtonContent>
                    </ButtonContainer>

                :

                <button onClick={() => navigate('/login')}>Fazer Login</button>
                }
                
            </HeaderButtons>

        </Container>
    )
}

export default Header;