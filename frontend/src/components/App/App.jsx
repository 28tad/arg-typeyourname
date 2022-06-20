import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from '../../store';
import Home from '../register/Home.jsx';
import LevelTwo from '../ChapterOne/LevelTwo/LevelTwo.jsx';
import Intro from '../intro/Intro';
import LevelOne from '../ChapterOne/LevelOne/LevelOne';
import store from '../../storeToolkit/index.js';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/intro" element={<Intro/>}/>
      <Route path="/chapterone" element={<LevelTwo/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/chapterone/levelone" element={<LevelOne/>}/>
          

          {/* Названия рутов и компонентов прописать самостоятельно  */}
          {/* <Route path="restlist" element={<RestList/>}/>
        <Route path="restlist/:id" element={<RestInfo />}/>
        <Route path="newrest" element={<ModalTop />}/>*/}

        </Routes>
      </div>
    </Provider>
  );
}

export default App;
