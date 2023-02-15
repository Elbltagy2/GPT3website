import React from 'react'
import Featuer from '../../component/feature/Feature';
import './features.css'

const Features = ({title,text}) => {
  return (
    <div className='gpt_features' id ="features">
      <div className='gpt_features_content'>
        <div className='gpt_features_content_comment'>
        <h1 className='gradient__text'>
        The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.

        </h1>
        <p>Request Early Access to Get Started</p>

        </div>
        <div className='gpt_features_items'>
        <Featuer title="Improving end distrusts instantly " text="Improving end distrusts instantly "/>
        <Featuer title="Become the tended active" text="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."/>
        <Featuer title="Message or am nothing" text="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."/>
        <Featuer title="Really boy law county" text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."/>

        


        </div>


       </div>
    
    </div>
  )
}

export default Features