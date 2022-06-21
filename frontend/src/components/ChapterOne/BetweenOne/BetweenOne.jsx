import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import { Parallax, ParallaxLayer } from '@react-spring'

function BetweenOne() {
  return (
    <Box className='animate__animated animate__hinge animate__delay-3s'>
      <Typography variant="h2" style={{
          color: 'white', 
          fontSize: '55px',
          fontFamily: 'Source Sans Pro, sans-serif',
          textAlign: 'center',
          letterSpacing: '5px',
          fontWeight: '1000',
          marginTop: '400px'
          }} gutterBottom component="div">

             ГЛАВА ПЕРВАЯ <br />
             "Искусство"

      </Typography>
    </Box>
   
  );
}

export default BetweenOne;
