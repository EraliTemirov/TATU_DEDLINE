import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import Header_one from "../Components/Header_components/Header_one";
import "../SASS/Upload_file.scss"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const handleSubmit = (event) => {
  
  event.preventDefault();

  


  const formData = new FormData();

  

  formData.append("file", fileInput.files[0]);
  const cookies = new Cookies();
  const bearer_token = cookies.get("jwt");
  var bearer = "Bearer " + bearer_token;



  fetch("https://azizjon003.jprq.live/api/v1/upload", {
    method: "POST",
    body: formData,
    headers: {
      authorization: bearer,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("data", data.data);
     
  
     
   
    
    
    
  })
  .catch((error) => {
    alert("Bajarilmadi")
      
    });

};




const File_upload = () => {


  const [count, setCount]= useState("")
  const navigate =useNavigate();  
   
  function handlesubmet() {
    
  }

 useEffect(()=>{
  if(localStorage.getItem("data")){
    navigate("/fileregester");

  }
 }, [count])

  return (
   <div className="bacground_img">
    <Header_one/>
     <form onSubmit={handleSubmit} className="container upload_file text-center">
      <p>Faqat quyidagi fayllarni yuklash mumkin: docx, pdf, zip, rar</p>
      <label htmlFor="fileInput "className="input_file" >
        <input type="file"  id="fileInput"  className="input" />
      </label>
      <br />
      <button  onClick={handlesubmet} className="btn btn-primary button_input">Fayl yuklash</button>
    </form>
   </div>
  );
};
export default File_upload;
