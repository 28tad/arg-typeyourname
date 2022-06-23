import React from 'react';
import { TailSpin, BallTriangle, Bars, Grid, Puff, Oval, ThreeDots, Circles, Rings} from  'react-loader-spinner'
import { useNavigate } from 'react-router-dom';

function Load() {

  const navigate = useNavigate()
  
    // setTimeout(() => {
    //   navigate('/')
    // }, 3000);

  return (

    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '450px',
      letterSpacing: '30px',
      }}>

     <TailSpin color="#d8d0ef" height={80} width={80} />
     <BallTriangle color="#dbdbdb" height={80} width={80} />
     <Bars color="#f6f6f6" height={80} width={80} />
     <Puff color="#dbdbdb" height={80} width={80} /> 
     <ThreeDots color="#dbdbdb" height={80} width={80} />
     <Circles color="#dbdbdb" height={80} width={80}/>
     <Rings color="#dbdbdb" height={80} width={80} />
    </div>
  );
}

export default Load;
