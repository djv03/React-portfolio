

import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

//checking git updation

function App() {
   const [theme, setTheme] = useState('light');

   const toogleMode = () => {
     localStorage.setItem('theme', theme);
        if (theme === 'light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      };
    useEffect(() => {
          document.body.className = theme;
        }, [theme]);
  

  return (
    <div className={`App ${theme}`}>
    <button id='darkmodebtn' onClick={toogleMode}>
      change theme
    </button>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/'  element={<Hero/>} ></Route>
      <Route path='/about'  element={<About/>}> </Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/contact'  element={<Contact/>}></Route>
    </Routes>
</BrowserRouter>
    </div>
   
  )
}

export default App
