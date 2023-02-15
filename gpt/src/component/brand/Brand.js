import React from 'react'
import './brand.css'
import { google,slack,atls,dropbox,shopify } from './import'
const Brand = () => {
  return (
    <div className='gpt_brand section_padding '>
      <div>
        <img src={google} alt="google"/>
      </div>
      <div>
        <img src={slack} alt="slack  "/>
      </div><div>
        <img src={atls} alt="atls"/>
      </div><div>
        <img src={dropbox} alt="dropbox"/>
      </div><div>
        <img src={shopify} alt="shopify"/>
      </div>
    </div>
  )
}

export default Brand