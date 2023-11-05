import React from "react";
import "./sucess.css";

const Sccuess = ({ img, title }) => {
  return (
    <>
      <div className="sucess_box">
        <img src={img} alt="" />

        <div className="sucess_title">
          <h1>{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Sccuess;
