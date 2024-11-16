import { useAppContext } from "../../../contexts/openMenu";
import { MenuItem, MenuItemDescription, ButtonIcon, MenuContainer } from "../menu-style";
import Config from '../../../assets/menu/containers/config-menu/config.png'
import complaint from '../../../assets/menu/containers/config-menu/flag.png'
import Help from '../../../assets/menu/containers/config-menu/ajuda.png'
import Feedback from '../../../assets/menu/containers/config-menu/feedback.png'

const items = [
    {icon: Config, description: 'Configurações'},
    {icon: complaint, description: 'Histórico de denúncias'},
    {icon: Help, description: 'Ajuda'},
    {icon: Feedback, description: 'Enviar feedback'},
]

function ConfigMenu() {
    const { openMenu } = useAppContext();

    return (
        <MenuContainer>
            {items.map((item, index) => (
                <MenuItem key={index} openMenu={openMenu}>
                    <ButtonIcon alt="Ícone" src={item.icon} />
                    <MenuItemDescription openMenu={openMenu}>
                        {item.description}
                    </MenuItemDescription>
                </MenuItem>
            ))}
        </MenuContainer>
    )
}

export default ConfigMenu;