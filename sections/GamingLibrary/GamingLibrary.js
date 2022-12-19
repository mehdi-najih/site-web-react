import './GamingLibrary.css'
import {GamingLibraryCard, SectionHeader, Sectionwrapper } from '../../cpmponents'
import GamingLibraryData from '../../Data/GamingLibraryData'

const GamingLibrary = () => {

    const Gaming = GamingLibraryData.map(card =>{
        return <GamingLibraryCard   key= {card.id} image= {card.image}  title={card.title}
         category={card.category} date_addet ={card.date_addet} 
          hour_played ={card.hour_played} dowload={card.dowload} />
     })
  return (

<> 
    <Sectionwrapper> 
<SectionHeader> 
Gaming Library Card

</SectionHeader>
<div className='gaming-library-cards'>
{Gaming}
</div>
</Sectionwrapper>
 </>
  )
}
export default GamingLibrary;