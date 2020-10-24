import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
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
        <Navbar.Collapse className="justify-content-end rightLinks">
            <Navbar.Text id="alertLink">
                <a href="#alertTable"> Alerts </a>
            </Navbar.Text>
            <Navbar.Text id="alertLink">
                <a href="https://www.wsdot.com/traffic/passes/camera.aspx" target="_blank" rel="noopener noreferrer"> Mountain Passes</a>
            </Navbar.Text>
        </Navbar.Collapse>
     
    </Navbar>
    )
}

export default Navigation