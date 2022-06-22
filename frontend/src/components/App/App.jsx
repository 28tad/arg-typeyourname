import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
// import { Provider } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSession } from '../../storeToolkit/sessionSlice';


// import store from '../../store';
import Home from '../register/Home.jsx';
import Prologue from '../ChapterOne/Prologue/Prologue.jsx';
import LevelOne from '../ChapterOne/LevelOne/LevelOne.jsx';
import BetweenTwo from '../ChapterOne/BetweenTwo/BetweenTwo.jsx';
import LevelThree from '../ChapterOne/LevelTwo/LevelTwo.jsx';
import Intro from '../intro/Intro';
import BetweenOne from '../ChapterOne/BetweenOne/BetweenOne.jsx';
import LevelTwo from '../ChapterOne/LevelTwo/LevelTwo.jsx';
import HiddenLevel from '../ChapterOne/HiddenLevel/HiddenLevel.jsx';
import Load from '../ChapterOne/load/Load';

function App() {
  const dispatch = useDispatch()
  const session = useSelector((state) => state.session)


  useEffect(() => {
    dispatch(fetchSession())
  
  }, [dispatch])

  return (

      <div className='App'>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/intro" element={'user' in session.session ? <Intro/> : <Load/>}/>
          <Route path="/chapterone/levelone" element={'user' in session.session ? <LevelOne/> : <Load/>}/>
          <Route path="/chapterone/betweenone" element={'user' in session.session ? <BetweenOne/> : <Load/>}/>
          <Route path="/chapterone/leveltwo" element={'user' in session.session ? <LevelTwo/> : <Load/>}/>
          <Route path="/chapterone/hiddenlevel" element={'user' in session.session ? <HiddenLevel/> : <Load/>}/>
          <Route path="/chapterone/betweentwo" element={'user' in session.session ? <BetweenTwo/> : <Load/>}/>
          <Route path="/chapterone/levelthree" element={'user' in session.session ? <LevelThree/> : <Load/>}/>
        </Routes>

      </div>
  );
}

export default App;
