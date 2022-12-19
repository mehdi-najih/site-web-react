import React from 'react'
import './FeatturedGames.css'
import {FeatturedGamesCard, SectionHeader, Sectionwrapper } from '../../cpmponents'
import FeatturedGamesData from '../../Data/FeatturedGamesData'
 const FeatturedGames = () => {
  const Featur = FeatturedGamesData.map(card =>{
    return <FeatturedGamesCard  key= {card.id} image= {card.image}  title={card.title}
     category={card.category} date_addet ={card.date_addet} 
      hour_played ={card.hour_played} dowload={card.dowload} />
 })
   
return (

<> 
<Sectionwrapper> 
<SectionHeader> 
Feattured Games

</SectionHeader>
<div className='FeatturedGames'>
{Featur}
</div>
</Sectionwrapper>
 </>

  )
}
export default FeatturedGames ;