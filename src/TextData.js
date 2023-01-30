import React, { useEffect, useState } from 'react'
import './TextData.css'
import { LinearProgress } from '@mui/material';
import db from './firebase'

const Template=({name,value,parameter,progress})=>{
    return (
        <div className="template">
            <div className="templateName">
                <h2>{name}</h2>
            </div>
            <div className="templateValue">
                <span className='value1'>{value}</span>
                <span className='value2'>{parameter}</span>
            </div>
            <div className="templateProgrees">
            <LinearProgress value={progress} variant="determinate" className='linearProgress'/>
            </div>
        </div>
    )
}
const TextData = () => {
    const [oillevel,setOillevel]=useState(0)
    const [current,setCurrent]=useState(0)
    const [voltage,setVoltage]=useState(0)

useEffect(()=>{
    db.Current.on("value", function (snapshot) {
        var data = snapshot.val();
        setCurrent(data)
    })
    db.Oillevel.on("value", function (snapshot) {
        var data = snapshot.val();
        setOillevel(data)
    })
    db.Voltage.on("value", function (snapshot) {
        var data = snapshot.val();
        setVoltage(data)
    })
})

  return (
    <div className='textData'>
        <Template name="Oil Level" value={oillevel.toFixed(2)} parameter="cm" progress={(oillevel/1500)*100}/>
        <Template name="Current" value={current.toFixed(4)} parameter="A" progress={(current/5)*100}/>
        <Template name="Voltage" value={voltage.toFixed(2)} parameter="V" progress={(voltage/240)*100}/>
    </div>
  )
}

export default TextData