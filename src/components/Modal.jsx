import React from 'react';
import  '../assets/styles/style.css';

function Modal({title, imgSrc, description, link, onClose}) {
    return ( 
    <div id="projectModal" className="modal">
        <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            <h2>{title}</h2>
            <img src={imgSrc} alt="Project Image" className="modal-image"/>
            <p>{description}</p>
            <a href={link}>View Project</a>
        </div>
    </div>
    );
}



export default Modal;