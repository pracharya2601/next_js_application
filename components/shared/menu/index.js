import {useState} from 'react';
import menu_style from './Menu.module.css';

const Menu = ({children, open}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);

  const a = ["name", 'number', "surname"]
  const clickHandle = () => {
    setIsOpen(!isOpen);
    setActive(true);
  }
  console.log(active);
  return(
    <div className={menu_style.menu__icon_container}>
     {!isOpen ? <img onClick={clickHandle} className={menu_style.menu__icon} src="/right-menu-bars.svg" alt="nav-menu"/> :
      <img onClick={clickHandle} className={menu_style.menu__icon} src="/cross-mark.svg" alt="nav-menu"/>}
      <div className={[isOpen ? menu_style.menu__bar_open : menu_style.menu__bar, active ? menu_style.activate : null].join(" ")}>
        {a.map((btn, index) => (
          <button className={menu_style.menu__list_button} key={index}>{btn}</button>
        ))}
      </div>
      </div>
  )
}

export default Menu;