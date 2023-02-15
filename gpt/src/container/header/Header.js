import React from "react";
import people from "../../assets/assets/people.png";
import ai from "../../assets/assets/ai.png";
import "./header.css";
const Header = () => {
  return (
    <div className="gpt_header section__padding" id="home">
      <div className="gpt_header-content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
      
      <div className="gpt_header-content-input">
        
        <input type="mail" placeholder="Your Email Address"></input>
        <button>Get Started</button>
      </div>
      <div className="gpt_header-content-comment">
        <img src={people} alt="people" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
      
    </div>
    <div className='gpt_header-image'>
   <img src={ai} alt="ai"/>
    </div>
    </div>
  );
};

export default Header;
