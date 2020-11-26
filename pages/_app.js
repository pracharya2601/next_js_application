import {ThemeProvider} from '../context/ThemeProvider';
import '../styles/globals.css';
import '../styles/button.css';

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
   
}

export default MyApp
