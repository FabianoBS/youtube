import { useAppContext } from "../../../contexts/openMenu";
import { 
  MenuItem,
  MenuItemDescription,
  ButtonIcon,
  MenuContainer,
  MenuTitles
} from "../menu-style";
import Premium from '../../../assets/menu/containers/most-menu/premium.png'
import Studio from '../../../assets/menu/containers/most-menu/studio.png'
import Music from '../../../assets/menu/containers/most-menu/music.png'
import Kids from '../../../assets/menu/containers/most-menu/kids.png'

const items = [
  {icon: Premium, description: 'YouTube Premium'},
  {icon: Studio, description: 'YouTube Studio'},
  {icon: Music, description: 'YouTube Music'},
  {icon: Kids, description: 'YouTube Kids'},
]

function MostMenu() {

  const { openMenu } = useAppContext();

  return (
    <MenuContainer>
      <MenuTitles>
        <span>Mais do YouTube</span>
      </MenuTitles>
      {items.map((item, index) => (
        <MenuItem key={index} openMenu={openMenu}>
          <ButtonIcon alt="Ícone" src={item.icon}/>
          <MenuItemDescription openMenu={openMenu}>{item.description}</MenuItemDescription>
        </MenuItem>
      ))}
    </MenuContainer>
  )
}

export default MostMenu;