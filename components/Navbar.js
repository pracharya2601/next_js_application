import Head from 'next/head';
import Menu from './shared/menu';


const Navbar = ({title, imageLink}) => {
  let list = [
    "Prakash",
    "Hero"
  ]
  return(
    <header>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={imageLink} />
        <link rel="stylesheet" href="/customdefaultstyle.css" />
      </Head>
      <header>
        <h1 style={{overflowY: "hidden"}}>Prakash Acharya</h1>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Portfolio</li>
          <li>
            {/* <img src="/right-menu-bars.svg" alt="nav-menu"/>
            <div className="menu__bar">
                <button style={{width: '100%', textAlign: 'left'}}>{list[0]}</button>
                <button style={{width: '100%', textAlign: 'left'}}>{list[1]}</button>
            </div> */}
            <Menu/>
          </li>
        </ul>

        <style>
          {
            `
            header {
              position: absolute;
              height: 70px;
              line-height: 70px;
              padding: 0 20px 0 20px;
              top: 0;
              left: 0;
              width: 100%;
              background: var(--background-beta);
              color:var( --text-alpha);
              display: flex;
              justify-content: space-between;
            }
            ul {
              float: right;
              display: flex;
              list-style: none;
              display: flex;
            }
            li {
              padding: 0 20px;
              cursor: pointer;
              font-size: 18px;
              font-weight: 600;
              display: none;
            }
            li:last-child {
              display:block;
            }
            li:hover {
              background:rgba(155, 153, 153, 0.5);
            }
            li:last-child:hover {
              background: transparent;
            }

            @media only screen and (min-width: 640px)  {
              li {
                display: block;
              }
              li:last-child {
                display:none;
              }
            }
            `
          }
        </style>
      </header>
    </header>
  )
}

export default Navbar;