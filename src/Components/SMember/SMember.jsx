import React from "react";
import "./smember.css";
import { FaFacebookF } from "react-icons/fa";

import { BiLogoLinkedin } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
const SMember = ({nam, post, details, facebook, linkdin, instagram}) => {
  return (
    <>
      <div className="smember">
        <div className="sMan">
          <img src="man.avif" alt="" />
        </div>
        <div className="stitle">
          <h2>{nam}</h2>
          <h3>{post}</h3>
          <p>
            {details}
          </p>
        </div>
        <div className="sSocial">
          <a href={facebook}>
            <FaFacebookF className="facebook" />
          </a>
          <a href={linkdin}>
            <BiLogoLinkedin className="link_din" />
          </a>
          <a href={instagram}>
            <AiFillInstagram className="instagram" />
          </a>
        </div>
      </div>
    </>
  );
};

export default SMember;
