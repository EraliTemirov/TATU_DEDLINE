import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './PAGESE/Home';
import Regester from "./PAGESE/Regester"
import Regester2 from './PAGESE/Regester2';

function App() {

  return (
   <Routes>
    <Route path='/' element={ <Home/>} />
    <Route path='/Regester' element={ <Regester/>} />
    <Route path='/Regester2' element={ <Regester2/>} />
   </Routes>
  )
}

export default App;
