import {useContext} from 'react';
import {themeContext} from '../../context/ThemeProvider';

const View = ({children}) => {
  const {theme} = useContext(themeContext);
  return (
    <div className={`container  ${theme == "dark" ? 'theme_dark' : 'theme_light' } `}>
      {children}
      <style jsx>
        {`
        :root {
          --text-alpha: #14182b;
          --text-beta: #2c2f40;
        
          --background-alpha: #ffffff;
          --background-beta: #ededed;
        
          --color-red: rgb(219, 0, 0);
        }
        .theme_dark {
          --background-alpha: #14182b;
          --background-beta: #2c2f40;
        
          --text-alpha: #ffffff;
          --text-beta: #ededed;
        
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
          flex: 1;
          min-height: 100vh;
          // background-color: rgb(255, 255, 255);
          // color: rgb(26, 26, 26);
          background-color: var(--background-alpha);
          color: var(--text-alpha);
          position: relative;
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