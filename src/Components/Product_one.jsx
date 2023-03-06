import React from 'react'
import { Link } from 'react-router-dom';
import rasm from "../assets/images.png";
import "../SASS/Main_one.scss"

const Product_one = () => {
  return (
    <div className="container mt-4">
      <div className="container cards ">
        <div className="row   pt-4">
          <div className="col-md-4 p-4 col-lg-3 col-sm-6">
            <div className="card   ">
              <img src={rasm} alt="rasm" />
              <Link className="btn btn-info mt-4">Reading</Link>
            </div>
          </div>
          <div className="col-md-4 p-4 col-lg-3 col-sm-6">
            <div className="card   ">
              <img src={rasm} alt="rasm" />
              <Link className="btn btn-info mt-4">Reading</Link>
            </div>
          </div>
          <div className="col-md-4 p-4 col-lg-3 col-sm-6">
            <div className="card   ">
              <img src={rasm} alt="rasm" />
              <Link className="btn btn-info mt-4">Reading</Link>
            </div>
          </div>
          <div className="col-md-4 p-4 col-lg-3 col-sm-6">
            <div className="card   ">
              <img src={rasm} alt="rasm" />
              <Link className="btn btn-info mt-4">Reading</Link>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Product_one
 