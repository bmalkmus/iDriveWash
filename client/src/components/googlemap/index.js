// import React from 'react';
// import {Map, GoogleApiWrapper} from 'google-maps-react'

// require('dotenv').config();


// const mapStyles = {
//     width: "100%",
//     height: "100%"
// };

// export class MapContainer extends Component {
//     render() {
//         var transitLayer = new google.maps.TransitLayer();
//         transitLayer.setMap(map);
//     return (
//         <Map
//         google = {this.props.google}
//         style = {mapStyles}
//         initialCenter ={{
//             lat:'47.411293',
//             lng: '-120.55627'
//         }}
//         zoom = {8}
//         />
//     );
//     }
// }



// export default GoogleApiWrapper({
//     // apiKey: `${process.env.GOOGLEAPI}`
//     apiKey: 'AIzaSyChh-ukRrOzr0fiPZrsIJkpHCWj6FZrQK8'
// })(MapContainer)

import React, { Component } from 'react';
import { render } from 'react-dom';

class Map extends Component {
    constructor(props) {
        super(props);
        this.onScriptLoad = this.onScriptLoad.bind(this)
    }

    onScriptLoad() {
        const mapId = document.getElementById(this.props.id);
        const map = new window.google.maps.Map(mapId, this.props.options);
        var trafficLayer = new window.google.maps.TrafficLayer();
            trafficLayer.setMap(map);

    }

    componentDidMount() {

        if (window.google) {
            this.onScriptLoad();
            return;
        }

        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = `https://maps.google.com/maps/api/js?key=KEY`;
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);

        s.addEventListener('load', e => {
            this.onScriptLoad()
        })
    }

    render() {
        return (
            <div  id={this.props.id} />
        );
    }
}

export default Map