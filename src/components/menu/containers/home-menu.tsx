import { useAppContext } from "../../../contexts/openMenu";
import { 
  MenuItem,
  MenuItemDescription,
  ButtonIcon,
  MenuContainer,
  Link 
} from "../menu-style";
import HomeIcon from '../../../assets/menu/containers/home-menu/botao-de-inicio.png';
import ShortsLogo from '../../../assets/menu/containers/home-menu/shorts-logo.png';
import LibraryIcon from '../../../assets/menu/containers/home-menu/biblioteca.png';
import SubscribeIcon from '../../../assets/menu/containers/home-menu/subscribe.png';

const items = [
  {icon: HomeIcon, description: 'Início', link: '/'},
  {icon: ShortsLogo, description: 'Shorts', link: '/shorts'},
  {icon: SubscribeIcon, description: 'Inscrições', link: '/subscribe'},
  {icon: LibraryIcon, description: 'Biblioteca', link: '/library'}
]

function HomeMenu() {

  const { openMenu, setOpenMenu } = useAppContext();

  return (
    <MenuContainer>
      {items.map((item, index) => (
        <Link key={index} to={item.link} onClick={() => setOpenMenu(false)}>
          <MenuItem openMenu={openMenu}>
            <ButtonIcon alt="Ícone" src={item.icon}/>
            <MenuItemDescription openMenu={openMenu}>{item.description}</MenuItemDescription>
          </MenuItem>
        </Link>
      ))}
    </MenuContainer>
  )
}

export default HomeMenu;