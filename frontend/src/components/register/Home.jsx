import React from 'react';
import '../register/Home.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Draggable  from 'react-draggable'; 
// import { makeStyles } from '@mui/styles';
// import { ThemeProvider, createTheme } from '@mui/material/styles';

// Draggable.create('#inputone')


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

      <input 
      className='input' 
      type="text" 
      />

      <Draggable>
      <input 
      className='inputone' 
      type="text" 
      readonly="readonly"
      />
      </Draggable>

      <Draggable>
      <input 
      className='inputone' 
      type="text"  
      readonly="readonly"

      />
      </Draggable>

      <Draggable>
      <input 
      className='inputone' 
      type="text"  
      readonly="readonly"
      />
      </Draggable>

      <Draggable>
      <input 
      className='inputone' 
      type="text"  
      readonly="readonly"
      />
      </Draggable>

       
    </div>
  );
}

export default Home;
