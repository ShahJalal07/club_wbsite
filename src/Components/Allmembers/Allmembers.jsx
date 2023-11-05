import React from "react";
import Header from "../Header/Header";
import { Link, NavLink } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
const Allmembers = () => {
  return (
    <div>
      <div className="navbar">
        <nav className="container">
          <div className="navbar_content">
            {/* logo start */}
            <div className="logo">
              <Link to="/home">
                <img src="logo.jpg" alt="" />
              </Link>
            </div>
            {/* logo end */}

            <ul>
              <li>
                <Link to="/home">হোম</Link>
              </li>

              <li>
                <Link to="/allmembers">সদস্য</Link>
              </li>
            </ul>

            {/* social media start */}
            <div className="social">
              <a href="https://www.facebook.com/profile.php?id=61551009461068">
                <BsFacebook className="facebook" />
              </a>
              <a href="mailto:slmsporting.socialclub@gmail.com">
                <SiGmail className="gmail" />
              </a>
            </div>
            {/* social media end */}
          </div>
        </nav>
      </div>
      <h1 className="mf">all members</h1>
    </div>
  );
};

export default Allmembers;
