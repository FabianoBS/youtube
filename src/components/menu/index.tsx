import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonIcon, Container, MenuItem } from './styles';
import Home from '../../assets/menu/home.png';
import HomeFill from '../../assets/menu/home-fill.png';
import Shorts from '../../assets/menu/shorts.png';
import ShortsFill from '../../assets/menu/shorts-fill.png';
import SubscriptionsIcon from '../../assets/menu/subscriptions.png'; // Importe o ícone para Assinaturas
import SubscriptionsIconFill from '../../assets/menu/subscriptions-fill.png'; // Importe o ícone para Assinaturas
import YouIcon from '../../assets/menu/you.png'; // Importe o ícone para "Você"
import YouIconFill from '../../assets/menu/you-fill.png'; // Importe o ícone para "Você"

const icons = [HomeFill, ShortsFill, SubscriptionsIconFill, YouIconFill];
const inactiveIcons = [Home, Shorts, SubscriptionsIcon, YouIcon];

const items = [
    { name: 'Home', link: '/' },
    { name: 'Shorts', link: '/shorts' },
    { name: 'Subscriptions', link: '/subscriptions' },
    { name: 'You', link: '/you' }
];


function Menu({ openMenu }: { openMenu: boolean }) {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);

    const handleMenuItemClick = (index: number, link: string) => {
        setActiveIndex(index);
        navigate(link);
    };

    return (
        <Container openMenu={openMenu}>
            {items.map((item, index) => (
                <div key={index}>
                    <MenuItem openMenu={openMenu} onClick={() => handleMenuItemClick(index, item.link)}>
                        <ButtonIcon alt="" src={activeIndex === index ? icons[index] : inactiveIcons[index]} />
                        <span>{item.name}</span>
                    </MenuItem>
                </div>
            ))}
            <hr />
        </Container>
    )
}

export default Menu;