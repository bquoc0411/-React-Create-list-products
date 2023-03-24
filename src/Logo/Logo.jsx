import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Logo.css';

const Logo = (props) => {
  return (
    <div className="d-flex mb-5 ">
      <div className="d-inline-flex align-items-center justify-content-center bg-gradient fs-2">
        <i className={`icon fa-brands fa-${props.icon}`}></i>
      </div>

      <div className="status">
        <p className="brand-name mb-0">{props.name}</p>
        <p className="mb-0">{props.day} day ago</p>
      </div>

      <div className="job-tiltle ms-auto">{props.kind}</div>
    </div>)
}

export default Logo;