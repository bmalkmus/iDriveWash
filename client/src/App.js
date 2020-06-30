import React, { Component } from "react";
import "./App.css";
import Map from './components/googlemap'
// import GoogleApiWrapper from './components/googlemap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map
          id="myMap"
          options={{
              center: { lat: 47.411293, lng: -120.55627 },
              zoom: 8
          }}
          // onMapLoad={map =>{
          //   var trafficLayer = new window.google.maps.TrafficLayer();
          //   trafficLayer.setMap(map);
          // }}
        />
      </div>
    );
  }
}

export default App;
