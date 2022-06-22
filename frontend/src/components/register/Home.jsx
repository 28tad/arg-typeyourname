import React, { useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Draggable  from 'react-draggable'; 
import '../register/Home.css';
import 'animate.css';


function Home() {

  const [username, setUsername] = useState('')
  const [userpass, setUserpass] = useState('')

  const fade = useRef()
  const navigate = useNavigate()

  const handleInputOne = (event) => {
    setUsername(event.target.value)
  }

  const handleInputTwo = (event) => {
    setUserpass(event.target.value)     
  }

  const goFetch = () => {
    if(username && userpass) {
      fetch('http://localhost:4000/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          username: username,
          password: userpass
        }),
      })
      fade.current.className = 'row animate__fadeOut animate__delay-3s'
      setTimeout(() => {
        navigate('/intro')
      }, 3000);
    }
  }

  return (

    <div ref={fade} className='row animate__fadeIn animate__delay-3s' style={{margin: 'auto'}}>

      <Draggable>
        <img className='tree' src='tree.jpg' alt='tree'/>
      </Draggable>

      <Draggable>
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
      </Draggable>

      <Draggable>
        <input 
      onClick={goFetch}
      type="button" 
      className='input' 
      value={'tap me'}
      />
      </Draggable>

      <Draggable>
        <input 
      onChange={handleInputOne}
      className='inputone' 
      type="text" 
      placeholder='name'
      />
      </Draggable>

      <Draggable>
        <input 
      onChange={handleInputTwo}
      className='inputone' 
      type="text" 
      placeholder='password'
      />
      </Draggable>

      <Draggable>
        <input 
      className='inputone' 
      type="text"  
      readOnly="readonly"
      />
      </Draggable>

      <Draggable>
        <input 
      className='inputone' 
      type="text"  
      readOnly="readonly"
      />
      </Draggable>

      <Draggable>
        <input 
      className='inputone' 
      type="text"  
      readOnly="readonly"
      />
      </Draggable>
  
      <Draggable>
        <input 
      className='inputone' 
      type="password" 
      readOnly="readonly"
      />
      </Draggable>

    </div>
  );
}

export default Home;
