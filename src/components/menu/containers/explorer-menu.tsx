import { useAppContext } from "../../../contexts/openMenu";
import { MenuItem, MenuItemDescription, ButtonIcon, MenuContainer, MenuTitles } from "../menu-style";
import Popular from '../../../assets/menu/containers/explorer-menu/fogo.png'
import Shopping from '../../../assets/menu/containers/explorer-menu/sacola.png'
import Music from '../../../assets/menu/containers/explorer-menu/musica.png'
import Films from '../../../assets/menu/containers/explorer-menu/filme.png'
import Live from '../../../assets/menu/containers/explorer-menu/live.png'
import Games from '../../../assets/menu/containers/explorer-menu/joystick.png'
import News from '../../../assets/menu/containers/explorer-menu/news.png'
import Sports from '../../../assets/menu/containers/explorer-menu/troféu.png'
import Learn from '../../../assets/menu/containers/explorer-menu/lampada.png'

const items = [
  {icon: Popular, description: 'Em alta'},
  {icon: Shopping, description: 'Shopping'},
  {icon: Music, description: 'Música'},
  {icon: Films, description: 'Filmes'},
  {icon: Live, description: 'Ao vivo'},
  {icon: Games, description: 'Jogos'},
  {icon: News, description: 'Notícias'},
  {icon: Sports, description: 'Esportes'},
  {icon: Learn, description: 'Aprender'}
]

function ExplorerMenu() {

  const { openMenu } = useAppContext();

  return (
    <MenuContainer>
      <MenuTitles>
        <span>Explorar</span>
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

export default ExplorerMenu;