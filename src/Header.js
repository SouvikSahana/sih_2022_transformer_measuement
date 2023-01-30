import React from 'react'
import './Header.css'
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import { Chip } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Header = () => {
  return (
    <div className='header'>
        <div className="logoBox">
            <ViewInArOutlinedIcon className='logo'/>
        </div>
        <div className="ardinoDetails">
            <div className="heading">
                <h5>Transformer Monitoring</h5>
                <Chip icon={<CloseOutlinedIcon className='statusLogo'/>} label="Connected" className='statusChecker'/>
            </div>
            <div className="intitutionName">
                <h6>Techno Group</h6>
            </div>
        </div>
    </div>
  )
}

export default Header