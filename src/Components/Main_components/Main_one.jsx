import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../SASS/Main_one.scss"

const Main_one = () => {

 
 const [datacourse, setDatacourse] = useState([]);

 useEffect(() => {
   fetch(`https://azizjon003.jprq.live/api/v1/cource`)
     .then((res) => res.json())
     .then((json) => setDatacourse(json));
   setDatacourse(datacourse);
 }, []);
 console.log(datacourse);



  return (
    <div className="container">
      <div className=" cards text-center ">
        <h2>Welcom to Open dedline</h2>
        <div className=" d-flex justify-content-center card-map gap-2  pt-4">
          {Array.isArray(datacourse.data ) &&
            datacourse.data?.map((el) =>
            
          <div className="card p-2 ">
            <img src={el.image} alt="rasm" />
            <span className='text-center fs-1'>{el.name}</span>
            <Link to={"/Product"} className="btn btn-primary mt-4">
              Reading
            </Link>
          </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default Main_one
