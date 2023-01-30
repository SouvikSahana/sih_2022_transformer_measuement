import React from 'react'
import './Dashboard.css'
import data from './transformerData'
import AdminData from './AdminData';
import { Link } from 'react-router-dom';
import avidipta from './avidipta.jpg'
import azadi from './azadi.jpg'

const DashboardTemplate=({transformerName,id, address})=>{
  return (
<div className="dashboardTemplate">
<Link to='/monitoring' >
          <div className="dashboardTemplateName">
            <h4>{transformerName}</h4>
            <p>Id: {id}</p>
          </div>
          <div className="dashboardTemplateLocation">
            {address}
          </div>
    </Link>
        </div>
  )
}

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="dashboardLogo">
        <div className="dashboardLogoLeft">
              <img src={avidipta} alt="" />
        </div>
        <div className="dashboardLogoMiddle">
              <img src="https://i0.wp.com/opportunitycell.com/wp-content/uploads/2022/03/SIH2.png?fit=327%2C345&ssl=1" alt="" />
            
        </div>
        <div className="dashboardLogoRight">
              <img src={azadi} alt="" />
            
        </div>
      </div>
        <div className="dashboardHeading dataHeading">
          {/* <h3>Transformer Monitoring</h3> */}
          <h3>Smart India Hackathon</h3>
          <h3>Department of Science and Technology</h3>
          <h3>IOT Based Transformer Condition Monitoring</h3>

        </div>

<div className="dashboardBody">
  {data.map((transformer)=>{
    return <DashboardTemplate transformerName={transformer.transformerName} id={transformer.id} address={transformer.address} />
  })}
        </div>

        <div className="dashboardBodyFooter">
              <AdminData/>
        </div>
    </div>
  )
}

export default Dashboard