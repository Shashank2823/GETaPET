import React from 'react';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Pets from './components/Pets';
import Adopt from './components/Adopt';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <div className='content'>
          <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/> } />
          <Route path="/Pets" element={<Pets/>} />
          <Route path="/Adopt" element={<Adopt/> } />
          <Route path="/About" element={<About/>} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
