import React, { useRef, useEffect } from 'react';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { gsap } from 'gsap';
// REDUX
import { useSelector, useDispatch } from 'react-redux';

import "./Intro.css"

function Intro() {
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
    gsap.to(circle.current, {duration: 1, scale: 20 });

    const pullPhrase = () => {
        const action = {
          type: 'PULL_PHRASE',
          payload: 'Salam',
        };
        dispatch(action);
      }

    console.log(Mark.phrase);
  }
 
  return (
    <div className='center'>
      <Brightness1Icon
        ref={circle}
        style={{ color: "white"}}
        onClick={expand}
      />
    </div>
  );
}

export default Intro;
