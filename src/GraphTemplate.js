import React from 'react'
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import './GraphTemplate.css'

const GraphTemplate = ({color,label,value,total}) => {
  if(label=="tempF"){
    return (
      <div className='graphTemplate'>
       <Doughnut
  datasetIdKey='id'
  data={{
    labels: ["                        .",label, 'RMNG'],
    datasets: [
      {
        label: '',
        backgroundColor:["White",color,"lightGrey","White"] ,
        data: [16,value, 212-value,16],
      },
      {
        label: '',
        backgroundColor:[] ,
        data: [],
      },
    ],
  }}
/>
    </div>
    )
  }else{
  return (
    <div className='graphTemplate'>
       <Doughnut
  datasetIdKey='id'
  data={{
    labels: [label, 'RMNG'],
    datasets: [
      {
        label: '',
        backgroundColor:[color,"lightGrey"] ,
        data: [value, total-value],
      },
      {
        label: '',
        backgroundColor:[] ,
        data: [],
      },
    ],
  }}
/>
    </div>
  )
}
}

export default GraphTemplate