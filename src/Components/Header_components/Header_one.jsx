import React from 'react'
import Tatu from "../../assets/TD.png"
import "../../SASS/Header.scss";

const Header_one = () => {
  return (
    <div className="Header_one">
      <div className="container d-flex justify-content-between ">
       
        <img src={Tatu} alt="LOGO" className="TatuLogo" />
        <button className="btn btn-dark  fs-4">
          <span className="span_color">Donate</span>
          <i className="fa-regular fa-heart fs-5"></i>
        </button>
      </div>
    </div>
  );
}

export default Header_one
