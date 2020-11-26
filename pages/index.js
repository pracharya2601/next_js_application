import {useContext} from 'react';
import fetch from 'isomorphic-unfetch';

import {themeContext} from '../context/ThemeProvider';

//navbar
import Navbar from '../components/Navbar';
//view
import View from '../components/view';
import Button from '../components/button';

export default function Home({data}) {
  const {theme, themeChange} = useContext(themeContext);
  console.log(data[0].name)
  return (
      <View>
      <Navbar title="Prakash Acharya" imageLink="/favicon.ico" />
      <main>
        <h2 style={{color: 'var(--color-red'}}>{theme}</h2>
        <Button onClick={() => themeChange()} title={`${theme} theme`} custonclass={"red bgblue small"}/>
      </main>

      <footer>
      </footer>
      </View>
  )
}

Home.getInitialProps = async () => {
  let res = await fetch('http://localhost:3000/api/hello');
  let data = await res.json()
  return {
    data: data
  }
}
