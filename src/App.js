import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './pages/Home';
import Start from './pages/Start';
import SelectPage from './pages/SelectPage';
import CheckPage from './pages/CheckPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Start" element={<Start />} />
        <Route path="/SelectPage" element={<SelectPage />} />
        <Route path="/CheckPage" element={<CheckPage />} />
      </Routes>
    </div>
  );
}

export default App;
