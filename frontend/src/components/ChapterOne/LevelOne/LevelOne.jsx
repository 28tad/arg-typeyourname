import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './LevelOne.css';
import 'animate.css';

function LevelOne() {

  const navigate = useNavigate()
  const [chapter, setChapter] = useState(false)

  setTimeout(() => {
    setChapter(true)
  }, 5000);

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      if(event.target.value.toLowerCase() === 'Академия Художеств'.toLowerCase()) {
        setTimeout(() => {
          navigate('/chapterone/leveltwo')
        }, 3000);
        console.log('Молорик');
      } else {
        console.log('Давай по новой');
      }
    }
  }


  return (

    <>

      {!chapter ?
    
        <div className='row'>
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

              CHAPTER ONE <br />
              Level One

            </Typography>
          </Box>
        </div>
      
  :
        <div className='row'>
          <Box className='animate__animated animate__backInUp' >
            <Typography variant="h2" style={{
      color: 'white', 
      fontSize: '25px',
      fontFamily: 'Source Sans Pro, sans-serif',
      textAlign: 'center',
      letterSpacing: '5px',
      fontWeight: '1000',
      marginTop: '300px'
      }} gutterBottom component="div"> 
      
              35 39 B0 20 42D 442 43E 20 43C 435 441 442 43E 20 441 432 44F 437 430 <br />
              43D 43E 20 441 20 43C 43E 435 439 20 434 435 44F 442 435 43B 44C 43D <br />
              43E 441 442 44C 44E 20 432 20 43F 440 43E 448 43B 43E 43C 2E 20 35 36 <br />
              27 20 41E 442 43A 443 434 430 20 44F 20 44D 442 43E 20 437 43D 430 <br />
              44E 3F 20 411 435 437 20 43F 43E 43D 44F 442 438 44F 2E 20 31 35 22 4E <br />
              20 412 43D 443 442 440 43D 435 435 20 43E 449 443 449 435 43D 438 <br />
              435 20 442 43E 433 43E 2C 20 33 30 B0 20 447 442 43E 20 44F 20 43A 43E <br />
              433 434 430 20 442 43E 20 437 434 435 441 44C 20 431 44B 43B 20 <br />
              438 20 447 435 43C 20 442 43E 20 437 430 43D 438 43C 430 43B 441 44F <br />
              20 31 37 27 20 43D 435 20 43F 43E 43A 438 434 430 435 442 20 43C 435 <br />
              43D 44F 2E 20 32 33 22 45

            </Typography>
          </Box>

          <input 
      onKeyPress={handleKeyPress}
      className='inputAnsw animate__animated animate__backInUp' 
      type="text" 
      placeholder='ANSWER'
      />
        </div>
  }
    </>

  );
}

export default LevelOne;
