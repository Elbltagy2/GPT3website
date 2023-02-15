import React from 'react'

const Features = ({title,text}) => {
  return (
    <div className='gpt_features_container'>
      <div className='gpt_features_title'>
      <h1>
        <div/>
        {title}
      </h1>
      </div>
      <div className='gpt_features_text'>
      {text}

      </div>
    </div>
  )
}

export default Features