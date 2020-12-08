import {useContext} from 'react';
import {themeContext} from '../../context/ThemeProvider';

const View = ({children}) => {
  const {theme} = useContext(themeContext);
  return (
    <div className={`container  ${theme == "dark" ? 'theme_dark' : 'theme_light' } `}>
      {children}
      <style jsx>
        {`
        .theme_dark {
          --background-alpha: #14182b;
          --background-beta: #2c2f40;
          --background-lamda: #5e5e5e;
        
          --text-alpha: #ffffff;
          --text-beta: #ededed;
          --text-lamda: #c9c9c9;
        
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
          zindex: 100;
        }
        .container::-webkit-scrollbar {
          display: none;
        }

        `}
      </style>
    </div>
  )
}

export default View;