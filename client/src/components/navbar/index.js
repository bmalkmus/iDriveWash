import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import "./style.css"



function Navigation () {
    return (
        <Navbar className= "navigation" collapseOnSelect expand="lg">
        <Navbar.Brand className="Brand">
            <img src={process.env.PUBLIC_URL + '/washingtonFlag.png'}
            alt="washington seal"
            height="50"
            width="50"
            />
            <p className="logo">iDriveWashington</p>
        </Navbar.Brand>
     
    </Navbar>
    )
}

export default Navigation