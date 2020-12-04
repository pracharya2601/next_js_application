import React, {useState, useCallback} from 'react';
import menu_style from './Menu.module.css';

const Menu = ({children}) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const handleClose = useCallback(() => setOpen(false));

  const a = ["name", 'number', "surname"]
  const clickHandle = () => {
    setActive(true);
    setOpen(!open);
  }
  return(
    <div className={menu_style.menu__icon_container} >
     {!open ? <img onClick={clickHandle} className={menu_style.menu__icon} src="/right-menu-bars.svg" alt="nav-menu"/> :
      <img onClick={clickHandle} className={menu_style.menu__icon} src="/cross-mark.svg" alt="nav-menu"/>}
      <div className={[open ? menu_style.menu__bar_open : menu_style.menu__bar, active ? menu_style.activate : null].join(" ")}>
        {children && React.Children.toArray(children).map((btn, index) => (
          <button className={menu_style.menu__list_button} key={index} onClick={handleClose}>{btn}</button>
        ))}
      </div>
      </div>
  )
}

export default Menu;