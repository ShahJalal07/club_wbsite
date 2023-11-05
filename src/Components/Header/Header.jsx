import React, { useState } from "react";
import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="navbar">
        <nav className="container">
          <div className="navbar_content">
            {/* logo start */}
            <div className="logo">
              <img src="logo.jpg" alt="" />
            </div>
            {/* logo end */}

            <ul className={menu ? "navopen" : ""}>
              <li>
                <a onClick={()=>setMenu(!menu)} href="">হোম</a>
              </li>
              <li>
                <a onClick={()=>setMenu(!menu)} className="" href="#aboutus">
                  আমাদের সম্পর্কে
                </a>
              </li>
              <li>
                <a onClick={()=>setMenu(!menu)} href="#sucess">সাফল্য</a>
              </li>
              <li>
                <a onClick={()=>setMenu(!menu)} href="#ourwork">কার্যক্রম</a>
              </li>
              <li>
                <a onClick={()=>setMenu(!menu)} href="#comitte">পরিচালনা পরিষদ</a>
              </li>
              <li>
                <a onClick={()=>setMenu(!menu)} href="">সদস্য</a>
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

            {/* manu icon */}
            <div className="menu_icon">
              {menu ? (
                <AiOutlineClose
                  onClick={() => setMenu(!menu)}
                  className="menu_icon close"
                />
              ) : (
                <AiOutlineBars
                  onClick={() => setMenu(!menu)}
                  className="menu_icon bar"
                />
              )}
            </div>
            {/* manu icon */}
          </div>
        </nav>
      </div>
  );
};

export default Header;
