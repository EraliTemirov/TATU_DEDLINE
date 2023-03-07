import React from 'react';
import { Link } from 'react-router-dom';
import Main_one from './Main_components/Main_one';
   
const Main = () => {

   


  return (
    <div className="container">
      <div style={{ position: "absolute" }}>
        <Link to="/">Home</Link>
        <br />
        <Link to="/Regester">Regester</Link>
      </div>
      <Main_one />
    </div>
  );
}
export default Main;
