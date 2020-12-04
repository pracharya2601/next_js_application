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

//avatar component
import Avatar from '../components/shared/avatar';

//box component
import Box from '../components/shared/box';


export default function Home({data}) {
  const {theme, themeChange} = useContext(themeContext);
  return (
      <View>
      <Navbar title="Cocoon Tech Lab" imageLink="/logo.svg" />
      <Box style={{maxHeight: "60vh", height: "60vh", width: "100vw"}}>
        <Caurosel showDot autoSlide="4000">
          <img src="/image_1.jpg" alt="Image one sdkjshdsh aksjksjdksd alkdjlksdjsd skljslkdjs sdkjslkdj "/>
          <img src="/image_2.jpg" alt="Image two"/>
          <img src="/image_3.jpg" alt="Image three"/>
        </Caurosel>
      </Box>
      <Box style={{width: "100vw", minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5vh 0 5vh 0'}}>
        <Grid container gap={3}>
          <Grid sm={12} md={6} lg={4}>
            <Box style={sub_box} >
              <h1>For Farmer</h1>
              <h3>Scientific research and other primary goal</h3>
              <Avatar src="/image_1.jpg" alt="first image" size={400}/>
            </Box>
          </Grid>
          <Grid sm={12} md={6} lg={4}>
            <Box style={sub_box} >
              <h1>For Farmer</h1>
              <h3>Scientific research and other primary goal</h3>
              <Avatar src="/image_1.jpg" alt="first image" size={400} />
            </Box>
          </Grid>
          <Grid sm={12} md={6} lg={4}>
            <Box style={sub_box} >
              <h1>For Farmer</h1>
              <h3>Scientific research and other primary goal</h3>
              <Avatar src="/image_1.jpg" alt="first image" size={400} />
            </Box>
          </Grid>
        </Grid>
      </Box>
        <Button onClick={() => themeChange()} title={`${theme} theme`} custonclass={"red bgblue small"}/>
      <Footer />
      </View>
  )
}

const sub_box = {display: "flex", flexDirection: 'column', justifyContent: "center", textAlign : 'center'}

Home.getInitialProps = async () => {
  let res = await fetch('http://localhost:3000/api/hello');
  let data = await res.json()
  return {
    data: data
  }
}
