import React from 'react';
import rasm from "../../assets/images.png"
import "../../SASS/Main_one.scss"

const Main_one = () => {
  return (
    <div>
      <div className="container cards ">
        <h2>Welcom to Open lebrary</h2>
        <div className="row   pt-4">
          <div className="card col-md-4 p-4 col-lg-3 col-sm-6  ">
            <img src={rasm} alt="rasm" />
            <button className="btn btn-info">Reading</button>
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

export default Main_one