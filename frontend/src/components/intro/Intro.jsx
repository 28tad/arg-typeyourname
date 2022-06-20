import React, { useRef, useState, useEffect } from 'react';
import Draggable  from 'react-draggable'; 


import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { pullPhrase } from '../../storeToolkit/markSlice';

import "./Intro.css"

// MUI 
import Brightness1Icon from '@mui/icons-material/Brightness1';
import AlarmIcon from '@mui/icons-material/AccessAlarm';
import Moon from '@mui/icons-material/Brightness3';
import Sun from '@mui/icons-material/WbSunny';
import CircleOutlined from '@mui/icons-material/CircleOutlined';

function Intro() {

  const [day, setDay ] = useState(true)
  const [click, setClick] = useState(false);
  const [count, setCount] = useState(0);
  const [phraseBuff, setPhraseBuff] = useState('zzzzzz.....');
  
  const dispatch = useDispatch();
  
  const circle = useRef(null);
  const circleOutIcon = useRef(null);
  const circleOutIcon1 = useRef(null);
  const circleOutIcon2 = useRef(null);
  const placeHolderRef = useRef(null);
  const alarm = useRef(null);
  const moonIcon = useRef(null);
  const sunIcon = useRef(null);
  
  const Mark = useSelector((state) => state.mark);
  // console.log(Mark);


  function expand(e) {

      gsap.fromTo(alarm.current, { scale: 3 },{ scale: 1 });
      gsap.fromTo(circleOutIcon.current, { scale: 2 },{ scale: 1, duration: 1 });
      gsap.fromTo(circleOutIcon1.current, { scale: 5 },{ scale: 1, duration: 1 });
      gsap.fromTo(circleOutIcon2.current, { scale: 10 },{ scale: 1, duration: 1});
      setCount((prev) => prev + 1)
   
      dispatch(pullPhrase('Эй, зачем ты меня разбудил?'))

      if(count === 2) {
        gsap.to(moonIcon.current, {rotation: 360, duration: 1} )
        setTimeout(() => {
          setTimeout(() => {
            
            gsap.to(sunIcon.current, {rotation: 360})
          }, 1000);
          setDay(false);
          setPhraseBuff(Mark.phrase);
          gsap.to(circle.current, {x: 50, duration: 1})
          gsap.to(placeHolderRef.current, {x: 50, duration: 1})
        }, 1000);
        
      }
  }

  let clickCount = -1;
  function dialogue() {
    const phrases = ['Ты кто такой? ', 'Я тебя не знаю', 'Иди нахуй']
    clickCount += 1
    console.log(clickCount);
    if (clickCount <= 3) {

  
      gsap.fromTo(circle.current, {scale: 2}, {scale: 1, duration: 1})
      // dispatch(pullPhrase('SUCK MY DICK'))
      setPhraseBuff(phrases[clickCount])

    }
  }

  return (
    <>
    {
      day 
      ?
      <div className='center'>
      <Draggable>
      <Moon
        ref={moonIcon}
        style={{ color: "white"}}
        sx={{
          position: 'absolute',
          top: 40,
          left: '75%',
          fontSize: '100px'
          // width: '75%'
        }}
      />
      </Draggable>
      <div>
      <Draggable>
      <AlarmIcon
        style={{ color: "white"}}
        onClick={expand}
        ref={alarm}
        sx={{
          position: 'absolute',
          top: '150px',
          left: '49%'
        }}
        />
      </Draggable>
      </div>
        <h2
          className='placeHolder'
          ref={placeHolderRef}
          style={{ color: "white", fontSize: "20px", width: "fit-content", margin: "auto"}}>
          {phraseBuff}
        </h2>

        <Brightness1Icon
          style={{ color: "white"}}
          // ref={circle}
          sx={{
            position: 'absolute',
            left: '49%'
          }}
        />


      <CircleOutlined 
        ref={circleOutIcon}
        style={{ color: "white"}}
        sx={{
          position: 'absolute',
          left: '49%'
        }}
      />
      <CircleOutlined 
        ref={circleOutIcon1}
        style={{ color: "white"}}
        sx={{
          position: 'absolute',
          left: '49%'
        }}
      />
      <CircleOutlined 
        ref={circleOutIcon2}
        style={{ color: "white"}}
        sx={{
          position: 'absolute',
          left: '49%'
        }}
      />
        
    </div>
      :
      <div className='center'>
      <Draggable>
      <Sun
        ref={sunIcon}
        style={{ color: "white"}}
        sx={{
          position: 'absolute',
          top: 40,
          left: '75%',
          fontSize: '100px'
          // width: '75%'
        }}
      />
      </Draggable>
        <h2 
          className='placeHolder'
          ref={placeHolderRef}
          style={{ color: "white", fontSize: "20px" ,width: "fit-content", margin: "auto"}}>
          {phraseBuff}
        </h2>

        <Brightness1Icon
          style={{ color: "white"}}
          ref={circle}
          sx={{
            position: 'absolute',
            left: '49%'
          }}
          onClick={dialogue}
        />
        
    </div>
      
        
    }
    </>
    
  );
}

export default Intro;
