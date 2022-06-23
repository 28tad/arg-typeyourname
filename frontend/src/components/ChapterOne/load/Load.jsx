import React, { useRef } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FitbitIcon from '@mui/icons-material/Fitbit';
import gsap from "gsap"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Load() {
  const session = useSelector((state) => state.session)
  console.log(session.redirect);
  const navigate = useNavigate()

  const refEye = useRef()

  gsap.to(refEye.current, { scale: 10})

  // if(session == true) {
  //   // navigate('/')
  //   session = false
  //   console.log(session);
  // }

  
  return (
    <div style={{ color: "white"}}>
      <RemoveRedEyeIcon ref={refEye} sx={{ position: "absolute",top: "49%", left: "49%"}}/>
    </div>
  );
}

export default Load;
