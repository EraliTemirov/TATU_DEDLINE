import React from 'react'
import { Link } from 'react-router-dom';

const Not_found = () => {
  return (
    <div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-12 text-center mt-5">
            <h1 class="display-1 text-danger">404 Not Found</h1>
            <p class="lead">
              Sorry, the page you are looking for could not be found.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <Link to={"/"} className="btn btn-light ">
              <i className="fa-solid fa-arrow-left"></i>Go back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Not_found
