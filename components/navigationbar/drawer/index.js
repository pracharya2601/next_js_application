import {useState} from 'react'
import {StyledDrawer, DrawerContainer, StyleDrawback} from './index.styles';
const Drawer = ({
    onOpen,
    onClose,
    open,
    children
}) => {
    return (
        <DrawerContainer
        onClick={() => onClose()}
            transform={open ? "translateX(0%)" : "translateX(-100%)" }
            transition={open ? "transform 0.3s linear": "transform 1.2s linear;"}
        >
            <StyledDrawer
                transform={open ? "translateX(0%)" : "translateX(-100%)" }
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={() => onClose()}>close</button>
            </StyledDrawer>
        </DrawerContainer>

    )
}

export default Drawer;