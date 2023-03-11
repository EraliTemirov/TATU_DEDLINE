import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';
import Header_one from '../Components/Header_components/Header_one';

const File_regester = () => {
const myData = localStorage.getItem("data");

  const [values, setValues] = useState({
    name: "",
    fan: "",
    course: "",
    variant:" ",
    file:myData
});










const cookies = new Cookies();
  const bearer_token = cookies.get("jwt");
  var bearer = "Bearer " + bearer_token;


  async function handleRegister(e) {
    e.preventDefault();


    try {
      let {
        data: { token, message },
      } = await axios.post(
        "https://azizjon003.jprq.live/api/v1/deadline",
        values,{
            headers:{
                Authorization: bearer
            }
        }
      );

      localStorage.setItem("token", token);
      toast(message, { type: "success" });
     
      toast("Success", { type: "success" });
    } catch (error) {
      console.log(error);
      // toast(error.response.data.errors[0].msg, { type: "error" });
    }
  }




    
  
 const [datafan, setDatafan] = useState([]);

 useEffect(() => {
   fetch(`https://azizjon003.jprq.live/api/v1/sciences`)
     .then((res) => res.json())
     .then((json) => setDatafan(json));
   setDatafan(datafan);
 }, []);





    
 const [datakurs, setDatakurs] = useState([]);

 useEffect(() => {
   fetch(`https://azizjon003.jprq.live/api/v1/cource`)
     .then((res) => res.json())
     .then((json) => setDatakurs(json));
   setDatakurs(datakurs);
 }, []);



 function handelInputChange(e) {
   setValues((oldValues) => ({
     ...oldValues,
     [e.target.name]: e.target.value,
   }));
 }


  return (
    <div>
      <Header_one/>
      <div className='container d-flex justify-content-center'>
      <form onSubmit={handleRegister} className="w-75 mt-5 d-flex regester_file_form justify-content-end">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          required
          className='form-control mt-3'
          values={values.name}
          onChange={handelInputChange}
        />
        <input
          type="number"
          id="variant"
          name="variant"
          placeholder="variant"
          required
          className='form-control mt-2'
          values={values.variant}
          onChange={handelInputChange}
        />

        <select
          name="course"
          id="course"
          className="form-control mt-2"
          required
          values={values.course}
          onChange={handelInputChange}
        >
          {Array.isArray(datakurs.data) &&
            datakurs.data?.map((el) => (
              <option key={el.name} value={el.id}>
                {el.name}
              </option>
            ))}
        </select>
        <select
          name="fan"
          id="fan"
          className="form-control mt-2"
          required
          values={values.fan}
          onChange={handelInputChange}
        >
          {Array.isArray(datafan.data) &&
            datafan.data?.map((el) => (
              <option key={el.name} value={el._id}>
                {el.name}
              </option>
            ))}
        </select>
        <br />
        <button type="submit" className='btn btn-primary mt-3 '>Submit</button>
      </form>
    </div>
    </div>
  );
}

export default File_regester
