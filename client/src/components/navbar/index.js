import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./style.css"



function Navigation () {
    return (
        <Navbar sticky="top" className= "navigation" collapseOnSelect expand="lg">
        <Navbar.Brand className="Brand">
            <img src={process.env.PUBLIC_URL + '/washingtonFlag.png'}
            alt="washington seal"
            height="50"
            width="50"
            />
            <p className="logo">iDriveWashington</p>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Collapse className="rightLinks" id="responsive-navbar-nav">
            <Nav>
                <Nav.Link eventKey="1" className="alertLink" href="#alertTable">Alerts</Nav.Link>
                <Nav.Link eventKey="2" className="alertLink" href="https://www.wsdot.com/traffic/passes/camera.aspx" target="_blank" rel="noopener noreferrer">Mountain Passes</Nav.Link>
                <Nav.Link eventKey="3" className="alertLink" href="#timeTable">Travel Times</Nav.Link>
                {/* <Navbar.Text className="alertLink">
                    <a href="#alertTable"> Alerts </a>
                </Navbar.Text>
                <Navbar.Text className="alertLink">
                    <a href="https://www.wsdot.com/traffic/passes/camera.aspx" target="_blank" rel="noopener noreferrer"> Mountain Passes</a>
                </Navbar.Text>
                <Navbar.Text className="alertLink">
                    <a href="#timeTable"> Travel Times</a>
                </Navbar.Text> */}
            </Nav>
        </Navbar.Collapse>
     
    </Navbar>
    )
}

export default Navigation