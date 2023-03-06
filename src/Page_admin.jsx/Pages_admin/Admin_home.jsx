import React from 'react'
import Header_one from '../../Components/Header_components/Header_one'
import Header_two from '../../Components/Header_components/Header_two';
import Admin_home_main from '../Component_admin/Admin_home_main';
import Admin_home_saidbar from '../Component_admin/Admin_home_saidbar';
import "../SASS_admin/Saidbar_admin.scss"

const Admin_home = () => {
  return (
    <div>
      <Header_one />
      <Header_two/>
      <div className='d-flex container'>
        <Admin_home_main/>
        <Admin_home_saidbar/>
      </div>
    </div>
  );
}

export default Admin_home
