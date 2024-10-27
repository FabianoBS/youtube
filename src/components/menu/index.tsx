import {
    ButtonIcon,
    Container, MenuItem,
} from './styles';
import Home from '../../assets/home.png';
import Shorts from '../../assets/youtube-shorts-logo.png';

const icons = [Home, Shorts];

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
    return (
        <Container openMenu={openMenu}>
            {items.map((item, index) => (
                <div key={index}>
                    <MenuItem openMenu={openMenu}  key={index}>
                        <ButtonIcon alt="" src={Home} />
                        <span>{item.name}</span>
                    </MenuItem>
                </div>
            ))}
            <hr />
        </Container>
    )
}

export default Menu;