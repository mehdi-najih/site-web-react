import React from 'react'
import './Card.css'
import {FaStar,FaDownload} from 'react-icons/fa'

export default function Card(props) {
  return (

    <div className='most-popular-item'>
    <div className='card-wrapper'>
    <img  className='most-popular-item-image' src= {props.image}  alt=""/>
    <div className='most-popular-item-content'> 
    <h4 className='most-popular-item-title'> 
   {props.title} <br/>
    <span> {props.category}</span>
    </h4>
    <ul>
    <li> <span className='mr-1' style={{"color":"yellow"}}> <FaStar /></span> <span>{props.rate}</span></li>
    <li> 
    <span className='mr-2' style={{"color":"red"}}> <FaDownload /></span>
    
    <span>{props.dowload}</span></li>
    </ul>
    </div>
    </div>
    </div>

  )
}
