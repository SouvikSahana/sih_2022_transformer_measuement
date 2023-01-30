import React, { useEffect, useState } from 'react'
import GraphTemplate from './GraphTemplate'
import './GraphData.css'
import db from './firebase'

const Grapher=({color, label, value, total,parameter})=>{
    return(
<div className="graphSeparate">
            <div className="graphName">
                <h2>{label}</h2>
            </div>
            <div className='middle'>
        <GraphTemplate color={color} label={label} value={value} total={total}/>
        </div>
        <div className="graphValue">
                <span className='value1'>{value}</span>
                <span className='value2'>{parameter}</span>
            </div>
        </div>
    )
}
const GraphData = () => {
    const [humidity,setHumidity]=useState(0)
    const [temp,setTemp]=useState(0)

useEffect(()=>{
    db.Humidity.on("value", function (snapshot) {
        var data = snapshot.val();
        setHumidity(data)
    })
    db.Temp.on("value", function (snapshot) {
        var data = snapshot.val();
        setTemp(data)
    })
})
  return (
    <div className='graphData'>
        <Grapher color="Green" label="tempC" value={temp} total={100} parameter="°C"/>
        <Grapher color="Blue" label="tempF" value={(temp*9/5)+32} total={180} parameter="°F"/>
        <Grapher color="red" label="Humidity" value={humidity} total={100} parameter=""/>
    </div>
  )
}

export default GraphData