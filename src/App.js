import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/SideBar/SideBar';
import Home from './Components/Pages/Home/Home';
import UniAssist from './Components/Pages/UniAssist/UniAssist';
import VarsitySelection from './Components/Pages/VarsitySelection/VarsitySelection';


function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/uni-assist' element={<UniAssist />} />
          <Route path='/university-selection' element={<VarsitySelection /> } />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
