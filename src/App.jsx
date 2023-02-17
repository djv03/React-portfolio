

import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/'  element={<Hero/>} ></Route>
      <Route path='/about'  element={<About/>}> </Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/contact'  element={<Contact/>}></Route>
    </Routes>
</BrowserRouter>
   
  )
}

export default App
