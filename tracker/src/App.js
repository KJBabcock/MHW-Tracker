import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Forrest from './components/Forrest';
import Highlands from './components/Highlands';
import Vale from './components/Vale';
import Waste from './components/Waste';
import Monster from './components/Monster';

function App() {
  
  const URL = "https://mhw-db.com/monsters";
  const [monsters, setMonsters] = useState(null)

  const getMonsters = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setMonsters(data);
};

useEffect(() => {
  getMonsters();
}, []);

  return (
    <div className="App">
      <nav><a href = "/">MHW Monster-Tracker</a></nav>
      <Outlet />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/forrest' element={<Forrest monsters = {monsters}/>} />
        <Route path='/highlands' element={<Highlands monsters = {monsters}/>} />
        <Route path='/vale' element={<Vale monsters = {monsters}/>} />
        <Route path='/waste' element={<Waste monsters = {monsters}/>} />
        <Route path='/:monster' element={<Monster monsters = {monsters}/>} />
      </Routes>
    </div>
  );
}

export default App;