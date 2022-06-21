import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSpring, animated } from 'react-spring'


function LevelThree() {
  const [chapter, setChapter] = useState(false)

  setTimeout(() => {
    setChapter(true)
  }, 5000);

  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: '#ffaaee' },
      { opacity: 0, color: 'rgb(14,26,19)' },
    ],
    from: { opacity: 0, color: 'red' },
  })

  return (

<>

{ chapter ?

        <Typography variant="h2" style={{
            color: 'white', 
            fontSize: '55px',
            fontFamily: 'Source Sans Pro, sans-serif',
            textAlign: 'center',
            letterSpacing: '5px',
            fontWeight: '1000',
             marginTop: '400px'
            }} gutterBottom component="div">

           ХУЙ <br />
         </Typography>

:

    <animated.div style={styles}>
       <div className='row' style={{margin: 'auto'}}>
          <Box>
            <Typography variant="h2" style={{
      color: 'white', 
      fontSize: '55px',
      fontFamily: 'Source Sans Pro, sans-serif',
      textAlign: 'center',
      letterSpacing: '5px',
      fontWeight: '1000',
      marginTop: '400px'
      }} gutterBottom component="div">

              ГЛАВА ТРЕТЬЯ <br />
              'Страх'

            </Typography>
          </Box>
        </div>
    </animated.div>
}

</>
  );
}

export default LevelThree;
