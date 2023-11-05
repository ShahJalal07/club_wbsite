import React from "react";
import "./footer.css";
import Title from "../Title/Title";
import {
  FaLinkedin,
  FaLocationDot,
  FaSquareFacebook,
  FaSquareInstagram,
} from "react-icons/fa6";
import { AiFillPhone } from "react-icons/ai";
import { MdOutgoingMail } from "react-icons/md";
const Footer = () => {
  return (
    <div>
      <Title main="যোগাযোগ" />
      <div className="container">
        <div className="address">
          <div className="logo">
            <img src="logo.jpg" alt="" />
          </div>
          <div>
            <div className="location">
              <FaLocationDot />
              <div>
                <p>দক্ষিণ লাঙ্গল মোড়া ক্রীড়া ও সামাজিক সংঘ</p>
                <p>দক্ষিণ লাঙ্গল মোড়া,</p>
                <p>শহীদ আলী হোসেন সড়ক</p>
                <p>দৌলতপুর, ছাগলনাইয়া, ফেনী</p>
              </div>
            </div>
            <div className="location conact">
              <AiFillPhone />
              <div>
                <p>+৮৮০ ১৮৭৬৯২০৮২২</p>
              </div>
            </div>
            <div className="location conact">
              <MdOutgoingMail />
              <div>
                <p>
                  <a href="mailto:slmsporting.socialclub@gmail.com">
                    slmsporting.socialclub@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="social_media">
            <a target="_blank" href="https://www.facebook.com/profile.php?id=61551009461068">
              <FaSquareFacebook />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
            <a href="">
              {" "}
              <FaSquareInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
