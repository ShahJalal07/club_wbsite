import React from "react";
import "./ourwork.css";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";



const Slideshow = ({img1, img2, img3, img4, img5, img6, title, subTitle}) => {
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
      ];
  return (
    <>
      <div className="ourwork_slid">
        <div className="slide-container">
          <Zoom scale={0.4}>
            {images.map((each, index) => (
              <img key={index} style={{ width: "100%" }} src={each} />
            ))}
          </Zoom>
        </div>
        <div className="slid_title">
            <h2>{title}</h2>
            <p>{subTitle}</p>
        </div>
      </div>
    </>
  );
};
export default Slideshow;
