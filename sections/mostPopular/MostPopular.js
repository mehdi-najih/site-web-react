import React from 'react'
import './MostPopular.css'
import { Card, SectionHeader, Sectionwrapper } from '../../cpmponents'
import MostpopularData from '../../Data/MostpopularData'
 const MostPopular=()=> {


const cards = MostpopularData.map(card =>{
   return <Card   key= {card.id} image= {card.image}  
   title={card.title} category={card.category}
    rate ={card.rate} dowload={card.dowload} />
})
  return (
    <>

<Sectionwrapper> 
<SectionHeader>
 Most Popular
</SectionHeader>

<div className='most-popular-items'>

{cards}


</div>


</Sectionwrapper>
 
        
        </>
  )
}
export default MostPopular ;