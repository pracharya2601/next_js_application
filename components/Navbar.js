import {useState} from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';
import Menu from './shared/menu';
import MenuItem from './shared/menu/MenuItem';
import navbar_style from './Navbar.module.css';

const navItems = [
  {id: 0, name: "Home", link: "/"},
  {id: 1, name: "About", link:"/about"},
  {id: 2, name: "Team", link: '/team'},
  {id: 3, name: "Career", link: '/career'},
  {id: 4, name: "Contact", link: '/contact'},
]


const Navbar = ({title, imageLink}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [customPath, setCustomPath] = useState(router.pathname);
  return(
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={imageLink} />
        <link rel="stylesheet" href="/customdefaultstyle.css" />
      </Head>
      <header className={navbar_style.header}>
        <h1 style={{overflowY: "hidden", cursor: "pointer"}}>Logo Cocoon Tech Lab</h1>
        <ul className={navbar_style.nav_item_container}>
          {navItems.map(({id, name, link}) => (
            <li key={id} className={[navbar_style.nav_items, customPath == link ? navbar_style.active_nav_items: null].join(" ")} onClick={() => router.push(link)}>{name}</li>
          ))}
          <li className={navbar_style.nav_items} onClick={() => setIsOpen(!isOpen)}>
            <Menu open={isOpen}>
            {navItems.map(({id, name, link}) => (
              <MenuItem key={id}>
                <li className={navbar_style.nav_items} onClick={() => router.push(link)}>{name}</li>
              </MenuItem>
            ))}
            </Menu>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Navbar;