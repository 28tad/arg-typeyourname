import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
// REDUX
import { useSelector, useDispatch } from 'react-redux';

import "./Intro.css"

// MUI 
import Brightness1Icon from '@mui/icons-material/Brightness1';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

function Intro() {

  const [click, setClick] = useState(false)
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();
  const circle = useRef(null);

  const Mark = useSelector((state) => state.mark);


  // const pullPhrase = () => {
  //   const action = {
  //     type: 'PULL_PHRASE',
  //     payload: 'Salam',
  //   };
  //   dispatch(action);
  // }

  async function expand() {

    if (!click) {
      gsap.to(circle.current, { scale: 3 });
      setCount((prev) => prev + 1)
      setClick(true)
    } else {
      gsap.to(circle.current, { scale: 1 });
      setClick(false)
    }


    const pullPhrase = () => {
        const action = {
          type: 'PULL_PHRASE',
          payload: 'Salam',
        };
        dispatch(action);
      }

    pullPhrase()

    if(count === 5) {
      console.log(Mark.phrase);
    }

  }
 
  return (
    <div className='center'>
      <Brightness1Icon
        ref={circle}
        style={{ color: "white"}}
        onClick={expand}
      />

      <div style={{color: "white"}}>
      </div>
    </div>
  );
}

export default Intro;
