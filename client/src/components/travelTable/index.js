import React from 'react';
import "./style.css"

function TravelTable(props) {
    const times = props.times;
    const longTimes = times.filter(item => item.CurrentTime > item.AverageTime)
    console.log(longTimes)
    return (
        <div id="timeTable">
            <br/>
            <br/>
            <div id="ttTable">
                <h3>Longer Travel Times</h3>
            </div>
            <br/>
            <table className="table iDriveTab">
                <thead>
                    <tr>
                        <th>Direction</th>
                        <th>Current Travel Time</th>
                        <th>Average Travel Time</th>
                    </tr>
                </thead>
                <tbody>
                    {[...longTimes].map(time => {
                        return (
                            <tr key = {time.TravelTimeID}>
                                <td>{time.Description}</td>
                                <td>{time.CurrentTime}</td>
                                <td>{time.AverageTime}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TravelTable