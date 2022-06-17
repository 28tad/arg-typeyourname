import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Draggable  from 'react-draggable'; 
import '../register/Home.css';
import 'animate.css';


function Home() {

  const [username, setUsername] = useState('')
  const [userpass, setUserpass] = useState('')



  const handleInputOne = (event) => {
    if (event.key === 'Enter') {
      setUsername(event.target.value)
    }
  }
  const handleInputTwo = (event) => {
    if (event.key === 'Enter') {
      setUserpass(event.target.value)
      fetch('/', {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          password: userpass,
        }),
      headers: { 'Content-Type': 'application/json' },
      })
    }
  }

  return (


    <div className='row animate__fadeIn animate__delay-5s'>

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

      {!username ? 
        <>
          <input 
      onKeyPress={handleInputOne}
      className='input' 
      type="text" 
      placeholder='name'
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
        </>
       : 
        <>
          <input 
      onKeyPress={handleInputTwo}
      className='inputpass' 
      type="password" 
      placeholder='password'
      />
        </>

       }




       
    </div>
  );
}

export default Home;
