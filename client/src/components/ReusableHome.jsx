import React from "react";
import tv from "../images/tv.png";
function ReusableHome({topic,desc,image,reverse,video,diff}) {
  return (
    <div className={`home-container ${reverse && 'reverse'}`}>
      <div className="description">
      
        <h1>{topic}</h1>
        <p>
          {desc}
        </p>
      </div>
      <div className={`image ${diff && 'separate_container'}`}>
        <div className={`imagecontainer ${diff && 'seperate_video'}`}>
        <img src={image} alt="" />
        {video && <video  src={video}  autoPlay loop >
   
          </video>}
        </div>
      </div>
    </div>
  );
}

export default ReusableHome;
