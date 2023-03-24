import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content.css'
const Content = (props) => {
    return (
        <>
            <h1 className="mb-5 title">{props.title}</h1>
            <div className="progress mb-4" role="progressbar" aria-label="Basic example" ariavaluenow={`${props.value}`} ariavaluemin="0" ariavaluemax="100">
                <div className="progress-bar" style={{width: "50%", backgroundColor: "red"}}></div>
            </div>
        </>

    )
}
export default Content;