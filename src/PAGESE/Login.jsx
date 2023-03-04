import React from 'react'
import { Link } from 'react-router-dom';
import Header_one from '../Components/Header_components/Header_one';
import "../SASS/Regester2.scss"

const Regester2 = () => {
  return (
    <div  className='Login'>
        {/* <div className="header_one">
          <Header_one/>
        </div> */}
       <div style={{position:'absolute'}}>
         <Link to="/">Home</Link>
         <br />
         <Link to="/Regester">Regester</Link>
       </div>
      <div className="container-fluit main">
        <div className="row container-fluit">
          <div className="col-6 main_one align-self-center">
            <img
              src="https://lms.tuit.uz/assets/images/study.svg"
              alt="Lms ni saytini qismi"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 main_two row justify-content-center container-fluit">
            <div className="row main_div container align-self-center">
              <div className="col-12 item header_login align-self-center text-center">
                MUHAMMAD AL-XORAZMIY NOMIDAGI <br />
                TOSHKENT AXBOROT TEXNOLOGIYALARI
                <br />
                UNIVERSITETI
              </div>
              <div className="col-12 text-center">
                <img
                  src="https://lms.tuit.uz/assets/images/logo-md.png"
                  alt=""
                  className="img-fluid item_logo"
                />
              </div>
              <div className="col-12 item login_lms text-center">
                LEARNING MANAGEMENT SYSTEM
              </div>
              <div className="col-12 item">
                <form className="form-group">
                  <label htmlFor="login_input" className="label_login">
                    Login
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="login_input input_control"
                    placeholder="Loginni kiriting"
                  />

                  <label htmlFor="password_input" className="label_login mt-3">
                    Parol
                  </label>
                  <input
                    type="password"
                    className="form-control input_control"
                    id="password_input"
                    placeholder="Parolni kiriting"
                  />

                  <button type="submit" className="btn_login mt-3 pt-2 pb-2">
                    Kirish
                  </button>
                </form>
              </div>
            </div>
            <div className="col-12 align-self-end text-center copyright">
              Copyright © 2021 of Tashkent University of Information
              Technologies
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Regester2
