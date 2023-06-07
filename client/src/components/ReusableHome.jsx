import React from "react";
import tv from "../images/tv.png";
function ReusableHome({topic,desc,image,reverse}) {
  return (
    <div className={`home-container ${reverse && 'reverse'}`}>
      <div className="description">
      
        <h1>{topic}</h1>
        <small>
          {desc}
        </small>
      </div>
      <div className="image">
        <div className="imagecontainer">
        <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ReusableHome;
