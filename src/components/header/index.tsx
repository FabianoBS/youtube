import { useNavigate } from "react-router-dom";
import { useContext, useState, useRef, useEffect } from "react";
import { UserContext } from "../../context/userContext";
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
    LoginButtons,
    LogoHeader,
    MicButtonContainer,
    LoginButton,
    UserPhoto,
    UserPhotoBox,
    DropdownUserMenu,
    DropdownVideoMenu,
    DropdownList
} from "./styles";
import HamburguerIcon from "../../assets/header/hamburger.png";
import Logo from '../../assets/header/YouTube-Logo.png';
import SearchIcon from '../../assets/header/search.png';
import MicIcon from '../../assets/header/microfone-gravador.png';
import VideoIcon from '../../assets/header/video.png';
import NotificationIcon from '../../assets/header/sino.png';
import LoginIcon from '../../assets/header/login.png';


function Header({ openMenu, setOpenMenu }: { openMenu: boolean, setOpenMenu: React.Dispatch<React.SetStateAction<boolean>> }) {
    const { login, logOut, user } = useContext(UserContext);
    const navigate = useNavigate();
    const firstLetter = user.nome ? user.nome.charAt(0).toUpperCase() : '';

    const [showDropdownUser, setShowDropdownUser] = useState(false);
    const [showDropdownVideo, setShowDropdownVideo] = useState(false);

    const dropdownUserRef = useRef(null);
    const dropdownVideoRef = useRef(null);
    
    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;

        if (
            showDropdownUser && !target.closest('.dropdown-user-menu') &&
            showDropdownVideo && !target.closest('.dropdown-video-menu')
            ) {
                setShowDropdownUser(false);
                setShowDropdownVideo(false);
            }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdownUser = () => {
        setShowDropdownUser(prev => !prev);
    };
    
    const toggleDropdownVideo = () => {
        setShowDropdownVideo(prev => !prev);
    };

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin='0 14px 0 0'>
                    <ButtonContent>
                        <ButtonIcon alt="" src={HamburguerIcon} />
                    </ButtonContent>
                </ButtonContainer>
                <LogoHeader onClick={() => navigate('')}>
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

            <LoginButtons>
                <ButtonContainer margin='0 10px 0 0' onClick={toggleDropdownVideo}>
                    <ButtonContent>
                        <ButtonIcon alt="" src={VideoIcon} />
                        {showDropdownVideo && (
                                <DropdownVideoMenu ref={dropdownVideoRef} className="dropdown-video-menu">
                                    <DropdownList>
                                        <li onClick={() => navigate('/profile')}>Perfil</li>
                                        <li onClick={() => navigate('/settings')}>Configurações</li>
                                        <li onClick={() => { logOut(); setShowDropdownVideo(false); }}>Sair</li>
                                    </DropdownList>
                                </DropdownVideoMenu>
                            )}
                    </ButtonContent>
                </ButtonContainer>
                <ButtonContainer margin='0 10px 0 0'>
                    <ButtonContent>
                        <ButtonIcon alt="" src={NotificationIcon} />
                    </ButtonContent>
                </ButtonContainer>

                {login ? 
                    <ButtonContainer margin='0 20px 0 0' onClick={toggleDropdownUser}>
                        <ButtonContent>
                            <UserPhotoBox >
                                {firstLetter ? (
                                    <UserPhoto>{firstLetter}</UserPhoto>
                                ) : (
                                    <div>?</div>
                                )}
                            </UserPhotoBox>
                            {showDropdownUser && (
                                <DropdownUserMenu ref={dropdownUserRef}  className="dropdown-user-menu">
                                    <DropdownList className="setShowDropdownUser">
                                        <li onClick={() => navigate('/profile')}>Perfil</li>
                                        <li onClick={() => navigate('/settings')}>Configurações</li>
                                        <li onClick={() => { logOut(); setShowDropdownUser(false); }}>Sair</li>
                                    </DropdownList>
                                </DropdownUserMenu>
                            )}
                        </ButtonContent>
                    </ButtonContainer>
                    :   
                    <LoginButton onClick={() => navigate('/login')}>
                        <img id="login-img" src={LoginIcon} alt='' />
                        Fazer login
                    </LoginButton>
                }
                
            </LoginButtons>

        </Container>
    )
}

export default Header;