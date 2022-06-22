import React, { useState} from 'react'
import './LevelFour.css';

import { useForm } from 'react-hook-form';

function LevelFour() {
const videoArr = ['eve.mp4', 'str.mp4', 'commercial.mp4', 'metr.mp4', 'tz.mp4', 'static.mp4' ]

const {register, handleSubmit} = useForm()
  const [video, setVideo] = useState(0)
  const [deg, setDeg] = useState(0)
  const [turnOnOf, setTurn] =useState(false)
  const [hidden, setHidden] = useState(false)

 

  function handleVideoChange() {
    
   setVideo((video) => video = (video+1) % videoArr.length)
   setDeg(deg => deg + 60)
    console.log(videoArr[video])
  }

  function handleTurn() {
    setTurn(a => a= !a)
  }
  

function onSubmit(data) {
  let answer = ''
  for(let i=1; i<=3; i++) {
    answer = answer + data[`${i}`]
  }
  console.log(answer)
  return answer
}


  return (
    <> 
    <div className='everything'>
    <div className='holderForTV'>
    <div className='tv'>
      <img className='tv' src='../tv/tv_clear3.png' alt=''></img>
    </div>

   <div className='Holder'>
     <div className='container'>
      <div className='tv_little'>
        {turnOnOf && <video key={videoArr[video]} autoPlay="autoPlay" onEnded={handleVideoChange}>
          <source src={`../video/${videoArr[video]}`}></source>
        </video>}
        </div>
        </div>
        </div>
        <div className='button' style={{ transform: `rotate(${deg}deg)` }} onClick={handleVideoChange}>
    <img className='tv-button' src='../tv/tv_button.png' alt=''></img>
    </div>
    <div className='button' onClick={handleTurn}>
    <img className='tv-button' src='../tv/tv-button2.png' alt=''></img>
    </div>
    <div className='hiddenbutton' onClick={() => setHidden(true)}> 
    </div>

      {hidden && 
      <div className='form'>
      <form type='submit' onSubmit={handleSubmit(onSubmit)}>
      <div className='inputs'>
        <input {...register('1')} type='text' id='number1' className='inputNumber' maxLength={1}></input>
        <input {...register('2')} type='text' id='number1' className='inputNumber' maxLength={1}></input>
        <input {...register('3')} type='text' id='number1' className='inputNumber' maxLength={1}></input>
        <button className='buttonInput' type="submit">try</button>
      </div>
      
      </form>
      </div>
      }
      

        </div>
        </div>
      </>
  );
}

export default LevelFour;
