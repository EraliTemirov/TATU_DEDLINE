import React from 'react'
import Header_one from '../Components/Header_components/Header_one'
import Product_one from '../Components/Product_one'

const Product = () => {
  return (
    <div>
      <Header_one />
      <form className="form_input mt-4 d-flex justify-content-center">
        <div className=" w-50 input-group mb-3 ">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-describedby="basic-addon1"
          />
        </div>
      </form>
      <Product_one />
      profile
    </div>
  );
}

export default Product
