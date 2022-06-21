import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSpring, animated } from 'react-spring'
import Draggable  from 'react-draggable'; 
import '../LevelTwo/LevelTwo.css'

import { a } from '@react-spring/web'



function LevelTwo() {
  const [chapter, setChapter] = useState(false)
  const [flipped, set] = useState(false)

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  const handleFlip = () => {
    set(state => !state)
  }

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

<div className='rowtwo'>
       
          <Draggable>
            <img className='krik' src='../krik.jpg' alt='krik'/>
          </Draggable>

          <Typography variant="h2" style={{
              color: 'white', 
              fontSize: '20px',
              fontFamily: 'Source Sans Pro, sans-serif',
              textAlign: 'center',
              letterSpacing: '5px',
              fontWeight: '1000',
              marginTop: '30px'
              }} gutterBottom component="div">

              "Я переверну сей мир, <br />
              а потом перевяжем души"

          </Typography>

        </div>

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

              <br />
              Страх

            </Typography>
          </Box>
        </div>
    </animated.div>
}

</>
  );
}

export default LevelTwo;


 // <div className='rowtwo container' onClick={handleFlip}>
        //   <a.div
        //     className='c back'
        //     style={{ opacity: opacity.to(o => 1 - o), transform }}
        //      />
        //   <a.div
        //   className='c front'
        //   style={{
        //     opacity,
        //     transform,
        //     rotateX: '180deg',
        //   }}
        // />
