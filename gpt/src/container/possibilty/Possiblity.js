import React from "react";
import imgage from "../../assets/assets/possibility.png";
import './possiblity.css'
const Possiblity = () => {
  return (
    <div className="gpt_possibility">
      <div className="gpt_possibility_content">
        <div className="gpt_possibility_img">
          <img src={imgage} />
        </div>
        <div className="gpt_possibility_content_heading">
          <p>Request Early Access to Get Started</p>
          <h1 className="gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <div className="gpt_possibility_content_comment">
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
          </div>
          <div className="gpt_possibility_content_comment2">
            <p>Request Early Access to Get Started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Possiblity;
