import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
// import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header_one from "../Components/Header_components/Header_one";


const Regester = () => {


  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    cource: "",
    faculty_id: "",
    password: "",
    passwordConfirm: "",
  });

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();

    if (values.password !== values.passwordConfirm)
      return toast("Paswords do not match ", { type: "error" });

    try {
      let {
        data: { token, message },
      } = await axios.post(
        "https://azizjon003.jprq.live/api/v1/auth/signup",
        values
      );

      localStorage.setItem("token", token);
      toast(message, { type: "success" });
      navigate("/");
      toast("Success", { type: "success" });
    } catch (error) {
      console.log(error);
      // toast(error.response.data.errors[0].msg, { type: "error" });
    }
    
  }

  function handelInputChange(e) {
    setValues((oldValues) => ({
      ...oldValues,
      [e.target.name]: e.target.value,
    }));
  }


  
 const [data, setData] = useState([]);

 useEffect(() => {
   fetch(`https://azizjon003.jprq.live/api/v1/faculties`)
     .then((res) => res.json())
     .then((json) => setData(json));
   setData(data);

 }, []);
      console.log(data)



  return (
    <div className="bg-font">
      <Header_one />
      <div style={{ position: "absolute" }}>
        <Link to="/">Home</Link>
        <br />
        <Link to="/Regester2">Regester2</Link>
      </div>
      <form onSubmit={handleRegister} className="container regester_width">
        <h1 className="text-secondary mt-4">Sign up</h1>
        <input
          className="d-block form-control mt-5 "
          type="text"
          placeholder="Name..."
          name="name"
          id="name"
          required
          min={3}
          values={values.name}
          onChange={handelInputChange}
        />
        <input
          className="d-block form-control mt-3 "
          type="text"
          placeholder=" Last Name..."
          name="lastname"
          id="Lastname"
          required
          min={4}
          values={values.name}
          onChange={handelInputChange}
        />
        <input
          type="email"
          className="form-control mt-3 "
          placeholder="...@gmail.com"
          name="email"
          id="email"
          required
          min={12}
          values={values.email}
          onChange={handelInputChange}
        />
        <p className="text-light mt-1 thisemail">
          This site uses Gravatar so if you want a profile image, use a Gravatar
          email
        </p>
        <select
          name="cource"
          id="cource"
          className="form-control"
          required
          values={values.cource}
          onChange={handelInputChange}
        >
          <option value="0">Kursni tanlang</option>
          <option value="1">1-kurs</option>
          <option value="2">2-kurs</option>
          <option value="3">3-kurs</option>
          <option value="4">4-kurs</option>
        </select>
        <select
          name="faculty_id"
          id="faculty_id"
          required
          values={values.faculty_id}
          className="form-control mt-3"
          onChange={handelInputChange}
        >
          <option value="">Fakultetni tanlang</option>
          {Array.isArray(data.data) &&
            data.data?.map((el) => <option value={el._id}>{el.name}</option>)}
        </select>
        <input
          type="password"
          placeholder="Create password..."
          className="form-control mt-3"
          name="password"
          id="password"
          required
          min={4}
          values={values.password}
          onChange={handelInputChange}
        />
        <input
          type="password"
          placeholder="Confirm password..."
          className="form-control mt-3"
          name="passwordConfirm"
          id="passwordConfirm"
          required
          min={4}
          values={values.passwordConfirm}
          onChange={handelInputChange}
        />
        <div className="mt-5 ">
          <button className="btn btn-info w-50 ">Register</button>
          <div className="d-flex">
            <p className="paragraph">Already have an account?</p>
            <Link to="/Login" className="signup-signin text-decoration-none">
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Regester;
