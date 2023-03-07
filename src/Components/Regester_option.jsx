import { useEffect, useState } from "react";
const Regester_option = () => {    

  
  const [data, setData] =useState([])
        useEffect(() => {
          fetch(`https://azizjon003.jprq.live/api/v1/faculties`)
            .then((res) => res.json())
            .then((json) => setData(json));
            setData(data);
         }, []);
    console.log(data)
    
  return (
    <div>
      <select name="" id="" className="form-control mt-3">
        <option value="">Fakultetni tanlang</option>
        {Array.isArray(data.data) &&
          data.data?.map((el) => (
            <option key={el._id} >
              {el.name}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Regester_option
