import {
    ButtonIcon,
    Container, MenuItem,
} from './styles';
import Home from '../../assets/menu/home.png';
import HomeFill from '../../assets/menu/home-fill.png';
import Shorts from '../../assets/menu/shorts.png';
import SubscriptionsIcon from '../../assets/menu/subscriptions.png'; // Importe o ícone para Assinaturas
import YouIcon from '../../assets/menu/you.png'; // Importe o ícone para "Você"
import { useNavigate } from 'react-router-dom';

const icons = [HomeFill, Shorts, SubscriptionsIcon, YouIcon];

const items = [
    { name: 'Home', link: '/' },
    { name: 'Shorts', link: '/shorts' },
    { name: 'Subscriptions', link: '/subscriptions' },
    { name: 'You', link: '/you' }
];

interface IProps {
    openMenu: boolean;
}

function Menu({ openMenu }: IProps) {
    const navigate = useNavigate();

    return (
        <Container openMenu={openMenu}>
            {items.map((item, index) => (
                <div key={index}>
                    <MenuItem openMenu={openMenu} onClick={() => navigate(item.link)}  key={index}>
                        <ButtonIcon alt="" src={icons[index]} />
                        <span>{item.name}</span>
                    </MenuItem>
                </div>
            ))}
            <hr />
        </Container>
    )
}

export default Menu;