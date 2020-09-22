import React from 'react';
import "./style.css"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

function Footer ({weatherState, camState, alertState, setCamState, setWeatherState, setAlertState}) {
    function stateCamera () {
        console.log("click")
        if (camState) {
            setCamState(false)
    
        }
        else {
            setCamState(true)
     
        }
    }
    function stateAlert () {
        console.log("click")
        if (alertState) {
            setAlertState(false)
       
        }
        else {
            setAlertState(true)
        
        }
    }
    function stateWeather () {
        console.log("click")
        if (weatherState) {
            setWeatherState(false)
           
        }
        else {
            setWeatherState(true)
            
        }
    }

    return (
        <Navbar className = "controlBar">
            <Nav className= "mr-auto controls">
                <Nav.Item>
                    
                        <button onClick = {stateCamera}>Cameras</button>
            
                </Nav.Item>
                <Nav.Item>
                    
                        <button onClick = {stateWeather}>Weather</button>
                    
                </Nav.Item>
                <Nav.Item>
                    
                        <button onClick = {stateAlert}>Alerts</button>
                   
                </Nav.Item>
            </Nav>
        </Navbar>   
    )
}

export default Footer