import React, {useState} from 'react'
import API from "../utils/API"
import "./style.css"

function Table (props) {
    const [sort, setSort] = useState({sortBy: (a, b) => a.distance - b.distance})
    const [consolidated, setConsol] = useState(true)

    function consolidation() {

        var row = document.getElementsByClassName("alertsRow");
        console.log(row)
        console.log(consolidated)
        if (consolidated === true) {
            setConsol(false)
            for (let i = 11; i < row.length; i++) {
                row[i].style.display = "table-row";
            }
        }
        else{
            setConsol(true)
            for (let i = 11; i < row.length; i++) {
                row[i].style.display = "none";
            }
        }
    }

        let data = props.alerts

        data.forEach(alert => {
            const alertCoord = {lat: alert.StartRoadwayLocation.Latitude , lng: alert.StartRoadwayLocation.Longitude}
            alert.distance = API.Distance(props.coord, alertCoord)
            
            switch (alert.Priority) {
                case "Highest":
                    alert.rating = 1;
                    break;
                case "High":
                    alert.rating = 2;
                    break;
                case "Medium":
                    alert.rating = 3;
                    break;
                case "Low":
                    alert.rating = 4;
                    break;
                case "Lowest":
                    alert.rating = 5;
                    break;
                default:
                    alert.rating = 6
            }
        })

        return (
           <div id = "tableDiv">
               <br></br>
               <br></br>
               <div className = "tableTitle" id ="alertTable" onClick={() => consolidation()}>
                    <h3>Alerts</h3>
                    <span>(Click for table expansion)</span>
               </div>
               <br></br>
               <table className = "table iDriveTab">
                    <thead>
                        <tr>
                            <th className = "alertHead" onClick ={() => setSort({sortBy: (a, b) => a.rating - b.rating})}>Priority</th>

                            <th className = "alertHead" onClick = {() => setSort({sortBy: (a, b) => a.EventCategory.localeCompare(b.EventCategory)})}>Category</th>

                            <th className = "alertHead" onClick = {() => setSort({sortBy: (a, b) => a.StartRoadwayLocation.RoadName.localeCompare(b.StartRoadwayLocation.RoadName)})}>Road Name</th>

                            <th className = "alertHead" onClick = {() => setSort({sortBy: (a, b) => a.HeadlineDescription.localeCompare(b.HeadlineDescription)})}>Description</th>

                            <th className = "alertHead" onClick ={() => setSort({sortBy: (a, b) => a.distance - b.distance})}>Distance from apprx location</th>

                            <th className = "alertHead" onClick ={() => setSort({sortBy: (a, b) => a.AlertID - b.AlertID})}>Alert ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...data].filter(alert => alert.StartRoadwayLocation.RoadName).sort(sort.sortBy).map(alert =>{ 
                            
                            
                        return (
                        <tr key = {alert.AlertID} id = {alert.AlertID} className="alertsRow">
                            <td>{alert.Priority}</td>
                            <td>{alert.EventCategory}</td>
                            <td>{alert.StartRoadwayLocation.RoadName}</td>
                            <td>{alert.HeadlineDescription}</td>
                            <td>{alert.distance}</td>
                            <td>{alert.AlertID}</td>
                        </tr>
                        )})}
                    </tbody>
                </table>
           </div> 
        )
    }

export default Table