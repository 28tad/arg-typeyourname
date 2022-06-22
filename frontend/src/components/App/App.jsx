import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
// import store from '../../store';
import Home from '../register/Home.jsx';
import Prologue from '../ChapterOne/Prologue/Prologue.jsx';
import LevelOne from '../ChapterOne/LevelOne/LevelOne.jsx';
import BetweenTwo from '../ChapterOne/BetweenTwo/BetweenTwo.jsx';
import LevelThree from '../ChapterOne/LevelTwo/LevelTwo.jsx';
import Intro from '../intro/Intro';
import store from '../../storeToolkit/index.js';
import BetweenOne from '../ChapterOne/BetweenOne/BetweenOne.jsx';
import LevelTwo from '../ChapterOne/LevelTwo/LevelTwo.jsx';
import HiddenLevel from '../ChapterOne/HiddenLevel/HiddenLevel.jsx';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/prologue" element={<Prologue/>}/>
          <Route path="/intro" element={<Intro/>}/>
          <Route path="/chapterone/levelone" element={<LevelOne/>}/>
          <Route path="/chapterone/betweenone" element={<BetweenOne/>}/>
          <Route path="/chapterone/leveltwo" element={<LevelTwo/>}/>
          <Route path="/chapterone/hiddenlevel" element={<HiddenLevel/>}/>
          <Route path="/chapterone/betweentwo" element={<BetweenTwo/>}/>
          <Route path="/chapterone/levelthree" element={<LevelThree/>}/>
        </Routes>

      </div>
    </Provider>
  );
}

export default App;
