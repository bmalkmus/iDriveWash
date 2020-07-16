import React from 'react';
import "./style.css"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

function Footer () {
    return (
        <Navbar className = "control">
            <Nav className= "mr-auto control">
                <Nav.Item>
                    
                        <button>Cameras</button>
            
                </Nav.Item>
                <Nav.Item>
                    
                        <button>Weather</button>
                    
                </Nav.Item>
                <Nav.Item>
                    
                        <button>Alerts</button>
                   
                </Nav.Item>
            </Nav>
        </Navbar>   
    )
}

export default Footer