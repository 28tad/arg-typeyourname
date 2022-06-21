import React from 'react';
import './BetweenOne.css'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { style } from '@mui/system';
// import { Parallax, ParallaxLayer } from '@react-spring'

function BetweenOne() {
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const arrow = useRef(null);


  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ease: "none", duration: 2})
  setTimeout(() => {
    const tl = gsap.timeline();


    tl.to(text1.current, { xPercent: -100, x: 500, opacity: 1, scale: 3,})
      .to(text1.current, { x: 1000,opacity: 0})
      .to(text2.current, { xPercent: 100, x: 200, opacity: 1,scale: 3})
      .to(text2.current, { opacity: 1})


    ScrollTrigger.create({
      animation: tl,
      // start: "top top",
      trigger: ".container",
      end: "+=4000",
      onEnter: () => console.log('Enter'),
      onLeave: () => console.log('Leave'),
      pin: true,
      scrub: 1,
      // markers: true,
      anticipatePin: 1,
    })

    // gsap.from(text1.current, {
    //   scrollTrigger: {
    //     duration: 1,
    //     trigger: text1.current,
    //     start: "top top",
    //     // markers: true,
    //     scrub: 1,
    //     // toggleActions: "restart"
    //   },
    //   x: 500,
    //   scale: 3,
    //   opacity: 1,
    //   // duration: 2,
    // })

    // gsap.to(text2.current, {
    //   scrollTrigger: {
    //     trigger: text2.current,
    //     start: text1.current,
    //     pin: true,
    //     end: "-100px",
    //     markers: true,
    //     scrub: 4,
    //     // toggleActions: "restart"
    //   },
    //   duration: 3,
    //   xPercent: 100,
    //   x: 300,
    //   pin: true,
    //   scale: 3,
    //   opacity: 1,
    //   // duration: 2,
    // })
    
  }, 100);
  return (
    <div className="container" style={{ fontFamily: 'Source Sans Pro, sans-serif'}}>
    {/* <ArrowForwardIosIcon ref={arrow} sx={{ color: "white"}}/> */}

     <div ref={text1} style={{ fontFamily: 'Source Sans Pro, sans-serif' ,color: "white", opacity: 0, width: "300px", position: "absolute", top: "200px"}}>
      В этих воспоминаниях я часто рисую. Детские воспоминания самые радостные – в них я не задумываюсь, не сомневаюсь, не боюсь критики. 
      Меня хвалят и я счастлив, получается ярко и радостно. Более поздние воспоминания болезненные.
     </div>

     <div ref={text2} style={{ color: "white", opacity: 0, width: "300px", position: "absolute", top: "200px"}}>
      Более поздние воспоминания болезненные. У меня не получается то, что я задумал, 
      я смотрю на чужие работы и мне кажется, что я никогда не смогу сделать также. 
      Я сминаю бумагу и начинаю заново. И снова заново. И снова заново. И снова заново. … Заново. 
     </div>
   
     {/* <h1  style={{  position: "absolute", top: "2000px"}}>TEST</h1> */}

    
    </div>
   
  );
}

export default BetweenOne;

{/* <Box className='animate__animated animate__hinge animate__delay-3s'>
      <Typography variant="h2" style={{
          color: 'white', 
          fontSize: '55px',
          fontFamily: 'Source Sans Pro, sans-serif',
          textAlign: 'center',
          letterSpacing: '5px',
          fontWeight: '1000',
          marginTop: '400px'
          }} gutterBottom component="div">

             ГЛАВА ПЕРВАЯ <br />
             "Искусство"

      </Typography>
    </Box> */}
