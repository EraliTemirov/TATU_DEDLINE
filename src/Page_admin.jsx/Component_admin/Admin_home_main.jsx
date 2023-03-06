import React from 'react'
import { Link } from 'react-router-dom';
import rasm from "../../assets/images.png";

const Admin_home_main = () => {
  return (
    <div className='container'>
      <div className="row container ">
        <div className="card col-md-4 p-4 col-lg-3 col-sm-6  ">
          <img src={rasm} alt="rasm" />
          <Link to={"/Product"} className="btn btn-info mt-4">
            Reading
          </Link>
        </div>
        <div className="card col-md-4 p-4 col-lg-3 col-sm-6 ">
          <img src={rasm} alt="rasm" />
          <Link to={"*"} className="btn btn-info">Reading</Link>
        </div>
        <div className="card  col-md-4 p-4 col-lg-3 col-sm-6 ">
          <img src={rasm} alt="rasm" />
          <Link to={"*"} className="btn btn-info">Reading</Link>
        </div>
        <div className="card  col-md-4 p-4 col-lg-3 col-sm-6 ">
          <img src={rasm} alt="rasm" />
          <Link to={"*"} className="btn btn-info">Reading</Link>
        </div>
      </div>
    </div>
  );
}

export default Admin_home_main
