import React from "react";
import Slideshow from "../ourWork/Ourwork";
import "./allworks.css";
import Title from "../Title/Title";
const Allworks = () => {
  return (
    <div id="ourwork" className="container">
      <Title main="কার্যক্রম" />
      <div className="allWork ">
        
        <Slideshow
          img1="Group 1.png"
          img2="gp2.png"
          img3="Group 1.png"
          img4="Group 1.png"
          img5="Group 1.png"
          img6="Group 1.png"
          title="shhshshsh"
          subTitle="০২/১০/২০২৩ ইং"
        />
        <Slideshow
          img1="Group 1.png"
          img2="Group 1.png"
          img3="Group 1.png"
          img4="Group 1.png"
          img5="Group 1.png"
          img6="Group 1.png"
          title="shhshshsh"
          subTitle="০২/১০/২০২৩ ইং"
        />
        <Slideshow
          img1="Group 1.png"
          img2="Group 1.png"
          img3="Group 1.png"
          img4="Group 1.png"
          img5="Group 1.png"
          img6="Group 1.png"
          title="shhshshsh"
          subTitle="০২/১০/২০২৩ ইং"
        />
        <Slideshow
          img1="Group 1.png"
          img2="Group 1.png"
          img3="Group 1.png"
          img4="Group 1.png"
          img5="Group 1.png"
          img6="Group 1.png"
          title="shhshshsh"
          subTitle="০২/১০/২০২৩ ইং"
        />
      </div>
    </div>
  );
};

export default Allworks;
