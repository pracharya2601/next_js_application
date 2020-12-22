import {useState} from 'react';
import {StyledHeader, StyleNavItem} from './index.style';

import Drawer from './drawer';
import MenuIcon from './menuicon'


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <StyledHeader>
            <StyleNavItem>
                <MenuIcon 
                    open={open}
                    onOpen={() => setOpen(true)} 
                    onClose={() => setOpen(false)}
                />
            </StyleNavItem>
            <Drawer 
                onOpen={() => setOpen(true)} 
                onClose={() => setOpen(false)}
                open={open}
            />
        </StyledHeader>
    )
}

export default Navbar;