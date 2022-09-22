import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Forrest from './components/Forrest';
import Highlands from './components/Highlands';
import Vale from './components/Vale';
import Waste from './components/Waste';
import Monster from './components/Monster';
import Strategies from './components/Strategies';
import CreateStrategy from './components/CreateStrategy';
import StrategyShow from './components/StrategyShow';
import StrategyEdit from './components/StrategyEdit';

function App() {
  
  const URL = "https://mhw-db.com/monsters";
  const [monsters, setMonsters] = useState(null)

  const getMonsters = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data);
    setMonsters(data);
};

useEffect(() => {
  getMonsters();
}, []);

const URL2 = "https://mhw-backend.herokuapp.com/";
const [strategies, setStrategies] = useState(null)

const getStrategies = async () => {
    const response = await fetch(URL2);
    const data = await response.json();
    // console.log(data);
    setStrategies(data);
};

useEffect(() => {
    getStrategies();
}, []);

  return (
    <div className="App">
      <nav>
        <a href = "/">MHW Monster-Tracker</a>
        <a href = "/strategies">Strategy Discussion</a>
      </nav>
      <Outlet />
      <Routes>
        <Route path='/' element={<Home monsters = {monsters}/>} />
        <Route path='/forrest' element={<Forrest monsters = {monsters}/>} />
        <Route path='/highlands' element={<Highlands monsters = {monsters}/>} />
        <Route path='/vale' element={<Vale monsters = {monsters}/>} />
        <Route path='/waste' element={<Waste monsters = {monsters}/>} />
        <Route path='/:id' element={<Monster monsters = {monsters}/>} />
        <Route path='/strategies' element={<Strategies strategies = {strategies}/>} />
        <Route path='/create_strategies' element={<CreateStrategy />} />
        <Route path='/strategies/:id' element={<StrategyShow strategies = {strategies}/>} />
        <Route path='/strategies/:id/edit' element={<StrategyEdit strategies = {strategies}/>} />
      </Routes>
    </div>
  );
}

export default App;