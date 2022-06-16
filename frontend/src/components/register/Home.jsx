import React from 'react';
import '../register/Home.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import { makeStyles } from '@mui/styles';
// import { ThemeProvider, createTheme } from '@mui/material/styles';



function Home() {


  return (


    <div className='row'>
      <img className='tree' src='tree.jpg' alt='tree'/>
      <Box>
      <Typography variant="h2" style={{
      color: 'white', 
      fontSize: '100px',
      fontFamily: 'Source Sans Pro, sans-serif',
      textAlign: 'center',
      letterSpacing: '30px',
      fontWeight: '1000',
      

      }} gutterBottom component="div">

      TYPE YOUR NAME

      </Typography>
      </Box>
      {/* <p className='type'>TYPE YOUR NAME</p> */}
      <input className='input' type="text"  />
    </div>
  );
}

export default Home;
