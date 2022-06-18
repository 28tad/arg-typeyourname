import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../ChapterOne/LevelOne.css';
import 'animate.css';

function LevelOne() {

  const [chapter, setChapter] = useState(false)

  setTimeout(() => {
    setChapter(true)
  }, 5000);


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

              35 39 B0 20 42D 442 43E 20 43C 435 441 442 43E 20 441 432 44F 437 430 43D 43E 20 441 20 43C 43E 435 <br/>
              439 20 434 435 44F 442 435 43B 44C 43D 43E 441 442 44C 44E 20 432 20 43F 440 43E 448 43B 43E 43C <br/>
              2E 20 35 37 27 20 41E 442 43A 443 434 430 20 44F 20 44D 442 43E 20 437 43D 430 44E 3F 20 411 <br/>
              435 437 20 43F 43E 43D 44F 442 438 44F 2E 20 32 36 22 4E 20 412 43D 443 442 440 43D 435 <br/>
              435 20 43E 449 443 449 435 43D 438 435 20 442 43E 433 43E 2C 20 33 30 B0 20 447 442 <br/>
              43E 20 44F 20 43A 43E 433 434 430 20 442 43E 20 437 434 435 441 44C 20 431 44B <br/>
              43B 20 438 20 447 435 43C 20 442 43E 20 437 430 43D 438 43C 430 43B 441 44F <br/>
              20 31 38 27 20 43D 435 20 43F 43E 43A 438 434 430 435 442 441 44F 20 43C <br/>
              435 43D 44F 2E 20 33 33 2E 39 22 45

            </Typography>
          </Box>
          <input 
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
