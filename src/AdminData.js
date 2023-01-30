import React from 'react'
import './AdminData.css'
import { Chip ,Avatar} from '@mui/material';

const data=[
  {name:"prof. Arabinda Chandra", img:"https://www.w3schools.com/howto/img_avatar.png"},
    {name:"Anish Chakraborty", img:"https://www.w3schools.com/howto/img_avatar.png"},
    {name:"Arkaprava Sahana", img:"https://www.w3schools.com/howto/img_avatar.png"},
    {name:"Nakshatra Sarkar", img:"https://www.w3schools.com/howto/img_avatar.png"},
    {name:"Sabuj Chowdhury", img:"https://www.w3schools.com/howto/img_avatar.png"},
    {name:"Sayantan Biswas", img:"https://www.w3schools.com/howto/img_avatar.png"},
    {name:"Sammilita De", img:"https://www.w3schools.com/howto/img_avatar.png"},
]

const User=({img,name})=>{
    return(
        <Chip
                avatar={<Avatar alt="Natacha" src={img} className="adminAvatar"/>}
                label={name}
                 variant="outlined"
                 className='adminLogo'
            />
    )
}

const AdminData = () => {
  return (
    <div className='adminData'>
      <h6>Admins</h6>
          <div className="admins">
                {data.map((person)=>{
                   return  <User img={person.img} name={person.name}/>
                })}
            </div>
    </div>
  )
}

export default AdminData