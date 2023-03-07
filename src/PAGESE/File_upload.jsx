import { toast } from "react-toastify";
import Cookies from "universal-cookie";

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="fileInput ">
        Choose a file:
        <input type="file" id="fileInput" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

// ReactDOM.render(<File_upload />, document.getElementById("root"));
export default File_upload;
