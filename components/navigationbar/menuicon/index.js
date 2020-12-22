import {Container, BarOne, BarTwo, BarThree} from './index.styles';

const MenuButton = ({open, onClose, onOpen}) => {
    return(
        <Container onClick={open ? onClose : onOpen}>
            <BarOne transform={open ? "rotate(-45deg) translate(-9px, 6px)" : null }/>
            <BarTwo opacity={open ? 0 : ''}/>
            <BarThree transform={open ? "rotate(45deg) translate(-8px, -8px)" : null }/>
        </Container>
    )
}

export default MenuButton;