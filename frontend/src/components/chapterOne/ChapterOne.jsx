import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import '../chapterOne/chapterOne.css';
import { useState } from 'react';
import { gsap } from 'gsap';
import { useRef } from 'react';
import { createTheme } from '@mui/material/styles';

function ChapterOne() {

  

  const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: 'SLAVA UKRAINE',
    },
  ];

  const el = useRef(null);

  const [value, setValue ] = useState();

  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

  useEffect( () => {
    if(value == 100) {
      gsap.to(el.current, {duration: 3, rotation: 360, scale: 0.5});
    } 
  }, [value])


  return (
    <div className='row'>
      <Box sx={{ width: 300}}>
        <Slider
          size="medium"
          style={{ color: "white"}}
          // aria-label="Restricted values"
          defaultValue={20}
          // valueLabelFormat={valueLabelFormat}
          getAriaValueText={setValue}
          step={1}
          valueLabelDisplay="off"
          marks={marks}
        />
      </Box>
        <Badge badgeContent={4}>
         <MailIcon ref={el} style={{ color: "white"}}/>
        </Badge>
    </div>
  );
}

export default ChapterOne;
