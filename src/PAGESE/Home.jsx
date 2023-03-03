import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Main from '../Components/Main';

const Home = () => {
  return (
    <div>
      <Link to="/Regester">Regester</Link>
      <Header/>
      <Main/>
    </div>
  )
}

export default Home
