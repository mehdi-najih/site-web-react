import React from 'react'

 function FeatturedGamesCard(props) {
  return (
    <div className='FeatturedGamesCard'>


    <ul> 

  <li> <img src={props.image} alt=''/> </li>
  <li>  <h4>{props.title}</h4> <span>{props.category}</span> </li>
  <li><h4>Date Addet</h4> <span>{props.date_addet}</span> </li>
  <li><h4>Hours Played</h4> <span>{props.hour_played}</span> </li>
  <li><h4>Currenty</h4> <span>{props.dowload}</span> </li>
</ul> 
</div>
  )
}
export default FeatturedGamesCard ;