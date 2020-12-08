import {useContext, useState} from 'react';
import {useRouter} from 'next/router';
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

//typography
import Typography from '../components/shared/typography';
//active link
import ActiveLink from '../components/shared/activelink';

import Loading from '../components/shared/loading';



export default function Home({data}) {
  const {theme, themeChange} = useContext(themeContext);
  const router = useRouter();
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
      <Box style={box}>
        <Grid container gap={3}>
          <Grid sm={12} md={6} lg={4}>
            <Box style={sub_box} >
              <Typography style={{color: "var(--color-red)"}} type="h1"  marginBottom="5px">For Farmer</Typography>
              <Typography type="p" marginBottom="20px">Scientific research and other primary goal</Typography>
              <Avatar src="/image_1.jpg" alt="first image" size={300}/>
            </Box>
          </Grid>
          <Grid sm={12} md={6} lg={4}>
            <Box style={sub_box} >
              <Typography type="h1"  marginBottom="5px">For Farmer</Typography>
              <Typography type="p" marginBottom="20px">Scientific research and other primary goal</Typography>
              <Avatar src="/image_1.jpg" alt="first image" size={300} />
            </Box>
          </Grid>
          <Grid sm={12} md={6} lg={4}>
            <Box style={sub_box} >
              <Typography type="h1"  marginBottom="20px">For Farmer</Typography>
              <Typography type="p" marginBottom="20px">Scientific research and other primary goal</Typography>
              <Avatar src="/image_1.jpg" alt="first image" size={300} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box style={box}>
        <Box style={sub_box_second}>
          <Typography type="h1" textAlign="center" >
            About Cocoon Tech Lab
          </Typography>
          <Typography type="p" textAlign="center" margin="15px 0 ">
          I guess we could discuss the implications of the phrase "meant to be." That is if we wanted to drown ourselves in a sea of backwardly referential semantics and other mumbo-jumbo. Maybe such a discussion would result in the determination that "meant to be" is exactly as meaningless a phrase as it seems to be, and that none of us is actually meant to be doing anything at all. But that's my existential underpants underpinnings showing. It's the way the cookie crumbles. And now I want a cookie
          </Typography>
          
          <ActiveLink href="/about">
            Learn more about us
          </ActiveLink>
        </Box>
      </Box>
      <Footer>
      <Button onClick={() => themeChange()} title={`${theme}`} color="red" outline loading/>
      <Loading type="spinner" size={100}/>
      </Footer>
      </View>
  )
}

const sub_box = {display: "flex", flexDirection: 'column', justifyContent: "center", textAlign : 'center'}
const sub_box_second = {display: "flex", flexDirection: 'column', justifyContent: "center", textAlign : 'center', boxShadow: 'var(--box-shadow_1)', margin: "0 auto", maxWidth: '70vw', minWidth: '300px', padding: '10vh 5vw', borderRadius: '10px'};
const box = {width: "100vw", display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5vh 0 5vh 0'};
Home.getInitialProps = async () => {
  let res = await fetch('http://localhost:3000/api/hello');
  let data = await res.json()
  return {
    data: data
  }
}
