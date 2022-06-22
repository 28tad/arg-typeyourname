import React, { useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Draggable  from 'react-draggable'; 
import '../register/Home.css';
import 'animate.css';

import { sessionAdd } from '../../storeToolkit/sessionSlice';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const [username, setUsername] = useState('')
  const [userpass, setUserpass] = useState('')

  const session = useSelector((state) => state.session)
  const dispatch = useDispatch()

  const fade = useRef()
  const navigate = useNavigate()

  const handleInputOne = (event) => {
    setUsername(event.target.value)
  }

  const handleInputTwo = (event) => {
    setUserpass(event.target.value)     
  }

  const goFetch = async () => {
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

      // const awaitSession = await response.json()


      fade.current.className = 'row animate__fadeOut animate__delay-3s'
      setTimeout(() => {
          navigate('/intro')
      }, 10000);
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
