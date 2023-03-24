import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Status.css'
const Status = (props) => {
    return(
        <p className='mb-0'><span className='applied'>{props.applied} applied</span><span className='capacity'> of {props.capacity} capacity</span></p>
    )
}
export default Status;