import {useContext, useState} from 'react';
import fetch from 'isomorphic-unfetch';


import {themeContext} from '../context/ThemeProvider';

//navbar
import Navbar from '../components/Navbar';
//view
import View from '../components/view';
import Button from '../components/button';
import Footer from '../components/footer';

//caurosel
import Caurosel from '../components/shared/caurosel';

//activelink
import ActiveLink from '../components/shared/activelink';

export default function Home({data}) {
  const {theme, themeChange} = useContext(themeContext);
  return (
      <View>
      <Navbar title="Cocoon Tech Lab" imageLink="/logo.svg" />
      <main>
        <Caurosel />
        <div style={{minHeight: '70vh'}}></div>
        <div style={{minHeight: '70vh'}}></div>
        <div style={{minHeight: '70vh'}}></div>
        <div style={{minHeight: '70vh'}}></div>
        <Button onClick={() => themeChange()} title={`${theme} theme`} custonclass={"red bgblue small"}/>
      </main>

      <Footer />
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
