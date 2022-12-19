import React from 'react'
import PrimaryButton from '../../cpmponents/button/Button'
import './Hero.css'
export default function Hero() {
  return (
    <div className='hero-main  '>
         <div className='hero-text  ml-1 '>
         <h6 className='hero-subtitle '> Welcome To Cyborg</h6>
         <h4 className='hero-title'><em>Browse</em> Our Popular Games Here</h4>
         <PrimaryButton> Browse Now</PrimaryButton>
        </div>
        </div>
  )
}
