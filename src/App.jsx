import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './PAGESE/Home';
import Regester from "./PAGESE/Regester"
import Login from './PAGESE/Login';
import Product from './PAGESE/Product';
import Not_found from './PAGESE/Not_found';

function App() {

  return (
   <Routes>
    <Route path='/' element={ <Home/>} />
    <Route path='/Regester' element={ <Regester/>} />
    <Route path='/Login' element={ <Login/>} />
    <Route path='/Product' element={ <Product/>} />
    <Route path='/*' element={ <Not_found/>} />
   </Routes>
  )
}

export default App;
