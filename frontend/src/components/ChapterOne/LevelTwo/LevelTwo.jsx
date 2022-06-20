import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import './LevelTwo.css';
import { useState } from 'react';
import { gsap } from 'gsap';
import { useRef } from 'react';

function ChapterOne() {

  

  // const marks = [
  //   {
  //     value: 0,
  //     label: '0°C',
  //   },
  //   {
  //     value: 0,
  //     label: '20°C',
  //   },
  //   {
  //     value: 75,
  //     label: 'SOSI HUY)',
  //   },
  //   {
  //     value: 100,
  //     label: 'SLAVA UKRAINE',
  //   },
  // ];

  const el = useRef(null);
  const badgeEl = useRef(null);

  const [ placeholder, setPlaceholder ] = useState('TEST');
  const [value, setValue ] = useState();
  const [notify, setNotify ] = useState();

  // function valueLabelFormat(value) {
  //   return marks.findIndex((mark) => mark.value === value) + 1;
  // }

  useEffect( () => {
    if(value >= 70 && value <= 80 ) {
      setNotify(1)
      gsap.to(badgeEl.current, {duration: 1, scale: 2 });
      gsap.to(el.current, {duration: 1,color: 'green'});

    } else {
      gsap.to(badgeEl.current, {duration: 1, scale: 1});
      gsap.to(el.current, {duration: 1,color: 'white'});
      setNotify(0)
    }
  }, [value])


  return (
    <div className='row'>
      <Box sx={{ width: 500 }}>
        <Slider
          style={{ color: "white"}}
          // aria-label="Restricted values"
          defaultValue={20}
          // valueLabelFormat={valueLabelFormat}
          getAriaValueText={setValue}
          step={1}
          valueLabelDisplay="off"
        />
      </Box>
        <Badge ref={badgeEl} badgeContent={notify} style={{ color: "white"}}>
         <MailIcon ref={el} style={{ color: "white"}}/>
        </Badge>
        <h1 style={{ color: "white"}}>
          {placeholder}
        </h1>
    </div>
  );
}

export default ChapterOne;
