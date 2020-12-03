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
//grid
import Grid from '../components/shared/grid';

//activelink
import ActiveLink from '../components/shared/activelink';

export default function Home({data}) {
  const {theme, themeChange} = useContext(themeContext);
  const content = <div style={{width: "100%", height: '100%', border: "1px solid black", display: "flex", justifyContent: 'center', lineHeight: '100px'}}>
    helo
  </div>
  return (
      <View>
      <Navbar title="Cocoon Tech Lab" imageLink="/logo.svg" />
      <main style={{position: "relative", zIndex: '1', maxHeight: "60vh", height: "60vh", width: "100vw"}}>
        <Caurosel showDot autoSlide="4000">
          <img src="/image_1.jpg" alt="Image one sdkjshdsh aksjksjdksd alkdjlksdjsd skljslkdjs sdkjslkdj " content={content}/>
          <img src="/image_2.jpg" alt="Image two"/>
          <img src="/image_3.jpg" alt="Image three"/>
        </Caurosel>
      </main>
      <main style={{position: "relative", zIndex: '1', width: "100vw"}}>
        <Grid container>
          <Grid sm={12} md={6} lg={4}>
            <div style={{height: "100px", width: "100%", border: '1px solid yellow'}} />
          </Grid>
          <Grid sm={12} md={6} lg={4}>
          <div style={{height: "100px", width: "100%", border: '1px solid yellow'}} />
          </Grid>
          <Grid sm={12} md={6} lg={4}>
          <div style={{height: "100px", width: "100%", border: '1px solid yellow'}} />
          </Grid>
        </Grid>
      </main>
      <div style={{minHeight: '70vh'}}></div>
        <div style={{minHeight: '70vh'}}></div>
        <div style={{minHeight: '70vh'}}></div>
        <div style={{minHeight: '70vh'}}></div>
        <Button onClick={() => themeChange()} title={`${theme} theme`} custonclass={"red bgblue small"}/>
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
