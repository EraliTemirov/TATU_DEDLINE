import React from 'react';
import Logos from "../../assets/Logos.png"
import "../../SASS/Header_two.scss"

const Header_two = () => {
  return (
    <div className=" container w-75 Header_Two bacground">
      <div className="d-flex align-items-center justify-content-between">
        <img src={Logos} alt="LOGO" className="library_Logo" />
        <form className='w-50 form_input'>
          <div className="input-group mb-3 ">
            <span className="input-group-text all" id="basic-addon1">
              All
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </form>
        <div className='w-25 d-flex justify-content-around pb-2 button_log_up'>
          <button className="btn btn-light login">Log in</button>
          <button className="btn btn-primary signup"> Sign up</button>
          <i className="fa-solid fa-bars fs-3 Hause"></i>
        </div>
      </div>
    </div>
  );
}

export default Header_two
