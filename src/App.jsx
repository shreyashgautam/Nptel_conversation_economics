// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './components/user/layout';
import Dashboard from './pages/user/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import QuizPage1 from './pages/user/Quiz1';
import QuizPage2 from './pages/user/Quiz2';
import QuizPage3 from './pages/user/Quiz3';
import QuizPage4 from './pages/user/Quiz4';
import QuizPage5 from './pages/user/Quiz5';
import QuizPage6 from './pages/user/Quiz6';
import QuizPage7 from './pages/user/Quiz7';
import QuizPage8 from './pages/user/Quiz8';
import FullTest from './pages/user/FullTest';
import QuizPage9 from './pages/user/Quiz9';
import QuizPage10 from './pages/user/Quiz10';
import QuizPage11 from './pages/user/Quiz11';
import QuizPage12 from './pages/user/Quiz12';

function App() {


 
  return (
   
      <Routes>
      
        <Route path="/" element={ <UserLayout/>}>
        <Route path="dashboard" element={<Dashboard />} />

        
        </Route>
        <Route path='/week2' element={<QuizPage2 />} />
        <Route path='/week1' element={<QuizPage1 />} />
        <Route path='/week3' element={<QuizPage3 />} />
        <Route path='/week4' element={<QuizPage4 />} />
        <Route path='/week5' element={<QuizPage5 />} />
        <Route path='/week6' element={<QuizPage6 />} />
        <Route path='/week7' element={<QuizPage7 />} />
        <Route path='/week8' element={<QuizPage8 />} />
        <Route path='/week9' element={<QuizPage9 />} />
        <Route path='/week10' element={<QuizPage10 />} />
        <Route path='/week11' element={<QuizPage11/>} />
        <Route path='/week12' element={<QuizPage12 />} />
        <Route path='/FullTest' element={<FullTest />} />

        
      </Routes>
  
  );
}

export default App;
