const Menu = ({children}) => {
  const a = ["name", 'number', "surname"]
  return(
    <div className="menu__icon_container">
      <img src="/right-menu-bars.svg" alt="nav-menu"/>
      <div className="menu__bar">
        {a.map((btn, index) => (
          <button key={index}>{btn}</button>
        ))}
      </div>
      <style jsx>
          {
            `
            .menu__icon_container {
              display:block;
              position: relative;
              height: 40px;
              width: 40px;
            }
            img {
              height: 40px;
              margin: 15px 0;
              padding: 5px;
              border-radius: 5px;
              background:rgba(155, 153, 153, 0.5);
            }
            .menu__bar {
              z-index: 500;
              position: absolute;
              top:70px;
              right: 0;
              width: 0;
              height: 0;
              transition: all 0.5s;
              transition-timing-function: linear;
              overflow-x: hidden;
              overflow-y:auto;
              -moz-box-shadow: 0 0 5px #888;
              -webkit-box-shadow: 0 0 5px#888;
              box-shadow: 0 0 5px #888;
              background: var(--background-beta);
            }
            .menu__icon_container:hover .menu__bar {
              width: 300px;
              height: 30vh;
            }
            button {
              font-size: 18px;
              padding: 10px 20px; 
              width: 100%;
              margin: 0;
              display: block;
              border: none;
              text-align: right;
              cursor:pointer;
              background: var(--background-beta);
              color: var(--text-beta);
            }
            button:hover {
              -moz-box-shadow:    inset 0 0 3px #000000;
              -webkit-box-shadow: inset 0 0 3px #000000;
              box-shadow:         inset 0 0 3px #000000;
            }
            button:focus {
              outline: none;
            }
            `
          }
        </style>
      </div>
  )
}

export default Menu;