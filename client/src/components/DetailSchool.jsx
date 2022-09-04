import React from 'react'
import { NavLink } from 'react-router-dom'
import data1 from "../utils/data"

export const DetailSchool = () => {
  let data=data1
  return (
    <div>
        {
            data ? data.map((elemento,index)=>{
                let name=elemento.name
                 return (
                    <div key={index}>
                        <NavLink className="hover:bg-gray-600 hover:text-white"  to="/courses" state={name=name}>{elemento.name}</NavLink>
                    </div>
                 )
            }):
            <span>Error</span>
        }

    </div>
)}
