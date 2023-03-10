import { toast } from "react-toastify";
import Cookies from "universal-cookie";
import Header_one from "../Components/Header_components/Header_one";
import "../SASS/Upload_file.scss"
import { useState } from "react";

const handleSubmit = (event) => {



  



  event.preventDefault();
  const fileInput = document.querySelector("#fileInput");
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
    
        toast.success("Muvaffaqiyatli amal bajarildi!");
        
    })
    .catch((error) => {
       console.log(error);
      
    });
};




const File_upload = () => {
  return (
   <div className="bacground_img">
    <Header_one/>
     <form onSubmit={handleSubmit} className="container upload_file text-center">
      <p>Faqat quyidagi fayllarni yuklash mumkin: docx, pdf, zip, rar</p>
      <label htmlFor="fileInput "className="input_file" >
        <input type="file"  id="fileInput"  className="input" />
      </label>
      <br />
      <button  className="btn btn-primary button_input">Fayl yuklash</button>
    </form>
   </div>
  );
};

// ReactDOM.render(<File_upload />, document.getElementById("root"));
export default File_upload;
