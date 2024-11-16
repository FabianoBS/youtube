import {
    ButtonContainer,
    ButtonIcon,
    Container,
    Logo,
    LogoContainer,
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButtons,
    LinkLogo,
    LoginContainer,
    LoginButton,
    Span,
    LoginIcon,
    DropDownMenu,
    DropDownMenuContent,
    LogOutButton,
    UserInfoContainer,
    UserName,
    ClearButton,
    CloseImg,
    SearchButtonResponsive,
    BackButton
  } from "./header-style";
import { useAppContext } from "../../contexts/openMenu";
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { useSearchContext } from "../../contexts/searchContext";
import { useCategoryContext } from "../../contexts/searchCategories";
import Menu from "../../assets/header/menu.png";
import LogoYT from '../../assets/header/YouTube-Logo.png';
import SearchIcon from '../../assets/header/search.png';
import MicIcon from '../../assets/header/microfone-gravador.png';
import NotificationIcon from '../../assets/header/sino.png';
import Video from '../../assets/header/video.png';
import logout from '../../assets/header/logout.png';
import LoginIconPng from '../../assets/header/login.png';
import VideoIcon from '../../assets/header/video.png';
import CloseIcon from '../../assets/header/close.png';
import BackButtonIcon from '../../assets/header/back-button.png';


const Header: React.FC = () => {
    const { openMenu, setOpenMenu } = useAppContext();
    const [clearButton, setClearButton] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const { login, logOut, user, openDropDownMenu, setOpenDropDownMenu } = useContext(UserContext);
    const { setSearch } = useSearchContext();
    const [inputValue, setInputValue] = useState('');
    const { setCategoryId } = useCategoryContext()
    
    const Search = () => {
        setOpenSearch(true);
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }
    
    const handleMenuClick = () => {
        setOpenMenu(!openMenu);
    };
    
    const handleDropDownMenu = () => {
        setOpenDropDownMenu(!openDropDownMenu);
    }

    function handleInput (inputValue: string) {
        setInputValue(inputValue)
        if (inputValue === '') {
            setClearButton(false)
        } else {
            setClearButton(true)
        }
    }

    const clearInput = () => {
        setInputValue('')
        setClearButton(false)
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }
    
    const goOut = () => {
        logOut()
        handleDropDownMenu()
        navigate('/')
    }
    
    const goYourVideos = () => {
        navigate('/yourvideos')
        handleDropDownMenu()
    }

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={handleMenuClick} margin='0 14px 0 0'>
                    <ButtonIcon alt="" src={Menu} />
                </ButtonContainer>

                <LinkLogo to='/' onClick={() => setCategoryId('0')}>
                    <Logo alt="logo youtube" src={LogoYT} />
                    <span style={{ fontSize: '10px', alignSelf: 'baseline', marginTop: '8px' }}>
                        BR
                    </span>
                </LinkLogo>
            </LogoContainer>

            <SearchButtonResponsive onClick={Search}>
                <ButtonIcon alt="ícone lupa" src={SearchIcon} />
            </SearchButtonResponsive>

            <SearchContainer openSearch={openSearch}>
                <BackButton  openSearch={openSearch} onClick={() => setOpenSearch(false)}>
                    <img alt="Botão voltar" src={BackButtonIcon} style={{ width: '20px' }} />
                </BackButton>


                <SearchInputContainer>
                    <SearchInput
                        ref={inputRef}
                        value={inputValue}
                        placeholder="Pesquisar"
                        onChange={(e) => {
                        handleInput(e.target.value)
                        }}
                        onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setSearch(inputValue)
                            navigate('/search')
                            setOpenSearch(false)
                        }
                        }}
                    />
                    <ClearButton
                        clearButton={clearButton}
                        onClick={clearInput}
                    >
                        <CloseImg src={CloseIcon} />
                    </ClearButton>
                </SearchInputContainer>

                <SearchButton
                    onClick={() => {
                        if (inputValue.trim() === '') {
                        alert('Digite alguma palavra chave antes de tentar pesquisar')
                        return;
                        }
                        setSearch(inputValue)
                        navigate('/search')
                    }}
                >
                    <ButtonIcon alt="ícone lupa" src={SearchIcon} />
                </SearchButton>

                <ButtonContainer margin='0 0 0 10px' >
                    <ButtonIcon alt="ícone microfone" src={MicIcon} />    
                </ButtonContainer>
            </SearchContainer>

            {login ?
                <HeaderButtons>
                    <ButtonContainer onClick={() => navigate('/yourvideos')}>
                        <ButtonIcon alt="ícone vídeo" src={Video} />
                    </ButtonContainer>

                    <ButtonContainer margin='0 0 0 10px' >
                        <ButtonIcon alt="ícone notificação" src={NotificationIcon} />
                    </ButtonContainer>

                    <ButtonContainer margin='0 0 0 10px' onClick={handleDropDownMenu} >
                    {user && user.nome ? user.nome.charAt(0).toUpperCase() : ''}
                    </ButtonContainer>

                    <DropDownMenu openDropDownMenu={openDropDownMenu}>
                        <UserInfoContainer>
                            <ButtonContainer
                                margin='0 0 0 10px'
                                onClick={handleDropDownMenu}
                                style={{ backgroundColor: '#f2f2f2' }}
                            >
                                {user && user.nome ? user.nome.charAt(0).toUpperCase() : ''}
                            </ButtonContainer>
                            <UserName>{user && user.nome ? user.nome : ''}</UserName>
                        </UserInfoContainer>

                        <DropDownMenuContent onClick={goOut}>
                            <ButtonIcon alt="ícone logout" src={logout} />
                            <LogOutButton>
                                Sair
                            </LogOutButton>
                        </DropDownMenuContent>

                        <DropDownMenuContent onClick={goYourVideos}>
                            <ButtonIcon alt="ícone logout" src={VideoIcon} />
                            <LogOutButton>
                                Seus vídeos
                            </LogOutButton>
                        </DropDownMenuContent>
                    </DropDownMenu>
                </HeaderButtons>
                :
                <LoginContainer onClick={() => navigate('/login')}>
                    <LoginButton>
                        <LoginIcon alt="ícone login" src={LoginIconPng} />
                        <Span>
                            Fazer login
                        </Span>
                    </LoginButton>
                </LoginContainer>   
            }
  
            {/* <ModalVideo isOpen={isModalOpen} onClose={handleCloseModal} onAddVideo={handleAddVideo} /> */}
        </Container>
    )
}

export default Header;