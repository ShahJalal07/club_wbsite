import React from "react";

import "./ourSucess.css";
import Title from "../Title/Title";
import Sccuess from "../Sucess/Sucess";
const OurSucess = () => {
  return (
    <section id="sucess" className="section_gap">
      <div className="container">
        <Title main="আমাদের সাফল্য" />

        <div className="all_sucess">
          <Sccuess img="logo.jpg" title="২০০২ টুর্নামেন্ট" />
          <Sccuess img="logo.jpg" title="২০০২ টুর্নামেন্ট" />
          <Sccuess img="Group 1.png" title="২০০২ টুর্নামেন্ট" />
          <Sccuess img="logo.jpg" title="২০০২ টুর্নামেন্ট" />
          <Sccuess img="logo.jpg" title="২০০২ টুর্নামেন্ট" />
          <Sccuess img="logo.jpg" title="২০০২ টুর্নামেন্ট" />
          <Sccuess img="logo.jpg" title="২০০২ টুর্নামেন্ট" />
          <Sccuess img="logo.jpg" title="২০০২ টুর্নামেন্ট" />
        </div>
      </div>
    </section>
  );
};

export default OurSucess;
