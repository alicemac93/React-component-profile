import React from "react";
import "./Stats.css"

function Stats(props){
    const statsList = props.stats.map((stat, i) => 
    <ul key={i}>
       <li className="statNumber">{stat[1]}</li>
       <li className="statName">{stat[0]}</li> 
    </ul>
    )
return (
    <div className="statsList">{statsList}</div>
    )

}

export default Stats;

// const statName = Object.keys(stats);
// const values = Object.values(stats);