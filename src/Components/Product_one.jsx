import React from 'react'
import { Link } from 'react-router-dom';
import rasm from "../assets/images.png";
import "../SASS/Main_one.scss"

const Product_one = () => {
  return (
    <div className="container mt-4">
      <div className="container cards ">
        <div className="row   pt-4">
          <div className="card col-md-4 p-4 col-lg-3 col-sm-6  ">
            <img src={rasm} alt="rasm" />
            <Link className="btn btn-info mt-4">
              Reading
            </Link>
          </div>
          <div className="card col-md-4 p-4 col-lg-3 col-sm-6 ">
            <img src={rasm} alt="rasm" />
            <button className="btn btn-info">Reading</button>
          </div>
          <div className="card  col-md-4 p-4 col-lg-3 col-sm-6 ">
            <img src={rasm} alt="rasm" />
            <button className="btn btn-info">Reading</button>
          </div>
          <div className="card  col-md-4 p-4 col-lg-3 col-sm-6 ">
            <img src={rasm} alt="rasm" />
            <button className="btn btn-info">Reading</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_one
 