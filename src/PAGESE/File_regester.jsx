import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';

const File_regester = () => {
const myData = localStorage.getItem("data");

  const [values, setValues] = useState({
    name: "",
    fan: "",
    course: "",
    file:myData
});

console.log(myData);

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
      <form onSubmit={handleRegister}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          required
          values={values.name}
          onChange={handelInputChange}
        />

        <select
          name="course"
          id="course"
          className="form-control"
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
          className="form-control"
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default File_regester
