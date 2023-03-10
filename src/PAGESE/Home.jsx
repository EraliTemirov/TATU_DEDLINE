import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Main from '../Components/Main';

const Home = () => {
  return (
    <div>
      
      <Header />
      <Main />
      <Link to="/upload">Upload</Link>
    </div>
  );
}

export default Home
