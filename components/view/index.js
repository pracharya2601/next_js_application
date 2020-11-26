import {useContext} from 'react';
import {themeContext} from '../../context/ThemeProvider';

const View = ({children}) => {
  const {theme} = useContext(themeContext);
  console.log(theme);
  return (
    <div className={`container  ${theme == "dark" ? 'theme_dark' : 'theme_light' } `}>
      {children}
      <style jsx>
        {`
        :root {
          --text-alpha: rgb(26, 26, 26);
          --text-beta: rgb(51, 49, 63);
        
          --background-alpha: rgb(255, 255, 255);
          --background-beta: rgb(182, 182, 182);
        
          --color-red: rgb(219, 0, 0);
        }
        .theme_dark {
          --background-alpha: rgb(26, 26, 26);
          --background-beta: rgb(51, 49, 63);
        
          --text-alpha: rgb(255, 255, 255);
          --text-beta: rgb(182, 182, 182);
        
          --color-red: rgb(255, 162, 162);
        }
        .container {
          box-sizing:border-box;
          min-height: 100vh;
          min-width:100vw;
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          // background-color: rgb(255, 255, 255);
          // color: rgb(26, 26, 26);
          background-color: var(--background-alpha);
          color: var(--text-alpha);
          position: relative;
          overflow-x: hidden;
          overflow-y:auto;
        }

        
        // .theme_light {
        //   --text-alpha: rgb(26, 26, 26);
        //   --text-beta: rgb(51, 49, 63);
        
        //   --background-alpha: rgb(255, 255, 255);
        //   --background-beta: rgb(182, 182, 182);
        
        //   --color-red: rgb(219, 0, 0);
        // }

        .theme_dark {
          background-color: var(--background-alpha);
          color: var(--text-alpha);
        }

        `}
      </style>
    </div>
  )
}

export default View;