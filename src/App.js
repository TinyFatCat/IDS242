import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './style/css_animation.css';
import Header from './component/Header';
import Dictionary from './pages/Dictionary';
import Home from './pages/Home';
import Start from './pages/Start';
import CheckPage from './pages/CheckPage';
import Making from './pages/Making';
import Final from './pages/Final';
import Mbti from './component/Mbti';
import Birth from './component/Birth';
import Zodiac from './component/Zodiac';
import Constell from './component/Constell';
import Popup from './component/Popup';
// import AutoRefresh from './component/AutoRefresh';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Start" element={<Start />} />
        <Route path="/Dictionary" element={<Dictionary />} />
        <Route path="/Mbti" element={<Mbti />} />
        <Route path="/Birth" element={<Birth />} />
        <Route path="/Zodiac" element={<Zodiac />} />
        <Route path="/Constell" element={<Constell />} />
        <Route path="/CheckPage" element={<CheckPage />} />
        <Route path="/Making" element={<Making />} />
        <Route path="/Final" element={<Final />} />
        <Route path="/Popup" element={<Popup />} />
      </Routes>
    </div>
  );
}

export default App;
