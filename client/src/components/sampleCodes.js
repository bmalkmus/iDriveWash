
            // -------API CAMERA CALL--------
            // 
            // API.downCameras()
            // .then (res => {
            //    let CamInfo = res.data
            //     CamInfo
            //       .filter(Camera => Camera.CameraOwner !== "WSDOT Aviation")
            //       .forEach(e => {
            //         let LatLng = {
            //                   lat: e.CameraLocation.Latitude,
            //                   lng: e.CameraLocation.Longitude
            //               };
        
            //         const marker = new window.google.maps.Marker({
            //               position: LatLng,
            //               title: e.Title
            //           });
        
            //         cameraMarks.push(marker)
            //         console.log(cameraMarks.length)
        
                    
                    
            //       })

            // -----------------Camera Post--------------------

            // API.postCamera({
                    //   CameraID:e.CameraID,
                    //   Latitude:e.CameraLocation.Latitude,
                    //   Longitude:e.CameraLocation.Longitude,
                    //   Image:e.ImageURL,
                    //   title:e.Title,
                    //   description:e.Description
                    // })
                    // .then((res) => {
                      //     console.log("Camera Loaded")
                      // })
                      // .catch((err) => console.log(err));
                      // });
                      
                      
                      
                      
                      
                      
                      // }

                    //   ---------------MONGODB FUNCTIONS-----------------------

                    // function clearDB() {
                    //     API.clearCam()
                    //     .then (res => {
                    //         console.log("Cam Cleared!");
                    //         this.apiCameras();
                    //     })
                    //     .catch((err) => console.log(err));
                    //     API.clearAlerts()
                    //     .then (res => {
                    //         console.log("Alerts Cleared!");
                    //         this.apiAlerts();
                    //     })
                    //     .catch((err) => console.log(err));
                    //     API.clearWeather()
                    //     .then (res => {
                    //         console.log("Weather Cleared!");
                    //         this.apiWeather();
                    //     })
                    //     .catch((err) => console.log(err));
                    // }
                
                    // function apiWeather() {
                    //     API.downWeath()
                    //     .then (res => {
                    //         for (let i=0; i<res.data.length; i++){
                                
                    //             API.postWeath({
                    //               ID: res.data[i].StationID,
                    //               Lat:res.data[i].Latitude,
                    //               Long:res.data[i].Longitude,
                    //               Humidity:res.data[i].RelativeHumidity,
                    //               Temp:res.data[i].TemperatureInFahrenheit,
                    //               WindDirect:res.data[i].WindDirectionCardinal,
                    //               WindSpeed:res.data[i].WindSpeedInMPH  
                    //             })
                    //             .then((res) => {
                    //                 console.log("weather station " +res)
                    //             })
                    //             .catch((err) => console.log(err));
                    //         }
                    //     })
                    // }
                
                    // function apiCameras() {
                    //     API.downCameras()
                    //     .then (res => {
                    //         console.log(res.data)
                    //         const mapId = document.getElementById(this.props.id);
                    //         const map = new window.google.maps.Map(mapId, this.props.options);
                    //         for (let i = 0; i < res.data.length; i++){
                    //             while (!res.data[i].CameraOwner === "WSDOT Aviation"){
                    //                 console.log("not airport")
                    //             let LatLng = {
                    //                 lat: res.data[i].CameraLocation.Latitude,
                    //                 lng: res.data[i].CameraLocation.Longitude
                    //             };
                
                    //             const marker = new window.google.maps.Marker({
                    //                 position: LatLng,
                    //                 title: res.data[i].Description
                    //             });
                
                    //             marker.setMap(map);
                    //         }
                    //         //     API.postCamera({
                    //         //         CameraID:res.data[i].CameraID,
                    //         //         Latitude:res.data[i].CameraLocation.Latitude,
                    //         //         Longitude:res.data[i].CameraLocation.Longitude,
                    //         //         Image:res.data[i].ImageURL,
                    //         //         title:res.data[i].Title,
                    //         //         description:res.data[i].Description
                    //         //     })
                    //         //     .then((res) => {
                    //         //         console.log("Camera Loaded")
                    //         //     })
                    //         //     .catch((err) => console.log(err));
                            
                            
                
                                    
                               
                    //         }
                    //     })
                    // }
                
                    // function apiAlerts() {
                    //     API.downAlerts()
                    //     .then (res => {
                    //         for (let i=0; i<res.data.length; i++){
                
                    //             API.postAlerts({
                    //                 AlertID:res.data[i].AlertID,
                    //                 Start: {
                    //                     Lat:res.data[i].StartRoadwayLocation.Latitude,
                    //                     Long:res.data[i].StartRoadwayLocation.Longitude,
                    //                     RoadName:res.data[i].StartRoadwayLocation.RoadName
                    //                 },
                    //                 End: {
                    //                     Lat:res.data[i].EndRoadwayLocation.Latitude,
                    //                     Long:res.data[i].EndRoadwayLocation.Longitude,
                    //                     RoadName:res.data[i].EndRoadwayLocation.RoadName
                    //                 },
                    //                 Priority:res.data[i].Priority,
                    //                 EventCatergory:res.data[i].EventCatergory
                    //             })
                    //             .then((res) => {
                    //                 console.log("alerts " +res)
                    //             })
                    //             .catch((err) => console.log(err));
                
                                    
                    //         }
                    //     })
                    // }

// -------------------------------------Markers code ---------------------
 // .forEach(e => {
          //   let LatLng = {
          //             lat: e.CameraLocation.Latitude,
          //             lng: e.CameraLocation.Longitude
          //         };

          //   // const marker = new window.google.maps.Marker({
          //   //       position: LatLng,
          //   //       title: e.Title
          //   //   });

// ----------------------------------- API call----------------------------
        // function apiCalls() {
            
             
                  
                  
                  
        //             API.downWeath()
        //             .then (res => {
        //               let WeatherInfo = res.data
        //               WeatherInfo
        //                 .forEach( e => {
        //                   if (e.TemperatureInFahrenheit){
        //                   let temp = e.TemperatureInFahrenheit.toString()
        //                   let LatLng = {
        //                     lat: e.Latitude,
        //                     lng: e.Longitude
        //                 };
        
        //                   const marker = new window.google.maps.Marker({
        //                         position: LatLng,
        //                         title: temp
        //             });
        
        //           weatherMarks.push(marker)
        //                   }
        
        //                 })
        //             })
        
        //             API.downAlerts()
        //             .then (res => {
        //               let WeatherInfo = res.data
        //               WeatherInfo
        //                 .forEach( e => {
        //                   let LatLng = {
        //                     lat: e.StartRoadwayLocation.Latitude,
        //                     lng: e.StartRoadwayLocation.Longitude
        //                 };
        
        //                   const marker = new window.google.maps.Marker({
        //                         position: LatLng,
        //                         title: e.EventCatergory
        //             });
        
        //           alertMarks.push(marker)
        
        //                 })
        //             })
        //     }

        // ---------------------------------------------------------------------
        function camDots(){
          //     if (camState) {
          //         console.log("camera is " + camState)
          //         Cameras(googleMap)
          //         // for (var i = 0; i < cameraMarks.length; i++) {
          //         //     console.log(i)
          //         //     cameraMarks[i].setMap(googleMap);
          //         //   }
          //         // cameraMarks.forEach(e => {
          //         //     e.setMap(googleMap)
          //         // })
          //     }
          //     else {
          //         console.log(camState)
          //         Cameras(null)
          //         // cameraMarks.forEach(e => {
          //         //     e.setMap(null)
          //         // })
          //     }
          // }
          // function alertDots(){
          //     if (alertState) {
          //         console.log("Alerts are " + alertState)
          //         Alerts(googleMap)
          //         // alertMarks.forEach(e => {
          //         //     e.setMap(googleMap)
          //         // })
          //     }
          //     else {
          //         console.log(alertState)
          //         Alerts(null)
          //         // alertMarks.forEach(e => {
          //         //     e.setMap(null)
          //         // })
          //     }
          // }
          // function weatherDots(){
          //     if (weatherState) {
          //         console.log(weatherMarks.length)
          //         // weatherMarks.forEach(e => {
          //         //     console.log(e)
          //         //     e.setMap(googleMap)
          //         // })
          //         Weather(googleMap)
          //     }
          //     else {
          //         console.log(weatherState)
          //         Weather(null)
          //         // weatherMarks.forEach(e => {
          //         //     e.setMap(null)
          //         // })
          //     }
          // }