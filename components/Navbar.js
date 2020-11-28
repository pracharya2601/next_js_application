import Head from 'next/head';
import Menu from './shared/menu';
import navbar_style from './Navbar.module.css';


const Navbar = ({title, imageLink}) => {
  return(
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={imageLink} />
        <link rel="stylesheet" href="/customdefaultstyle.css" />
      </Head>
      <header className={navbar_style.header}>
        <h1 style={{overflowY: "hidden", cursor: "pointer"}}>Home</h1>
        <ul className={navbar_style.nav_item_container}>
          <li className={navbar_style.nav_items}>About</li>
          <li className={navbar_style.nav_items}>Contact</li>
          <li className={navbar_style.nav_items}>Portfolio</li>
          <li className={navbar_style.nav_items}>
            <Menu/>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Navbar;