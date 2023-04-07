import React from "react";
import "./Saidbar.css";
import "../SASS_admin/Saidbar_admin.scss";




function Admin_home_saidbar() {

  return (

    <div className="sidebar">
      <h2><button className="btn btn-light">Menu</button></h2>
      <ul>
        <li>Asosiy sahifa</li>
        <li>Xizmatlar</li>
        <li>Biz haqimizda</li>
        <li>Bog'lanish</li>
      </ul>
    </div>
  );
}

export default Admin_home_saidbar;
