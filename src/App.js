import './App.css';

import {HashRouter, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/navbar';
import Home from './components/home';
import About from './components/about';




function App() {
  return (
    
    <HashRouter>
    <MyNavbar backgroundColor="rgb(129 194 239)" />
    <Routes>
      <Route path="/" element={<Home />} />   
      <Route path="/about" element={<About />} />
      
    </Routes>
  </HashRouter>
 
  );
}

export default App;
