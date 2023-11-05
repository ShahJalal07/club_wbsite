import React from "react";
import "./aboutus.css";
import Title from "../Title/Title";
const Aboutus = () => {
  return (
    <div className="container">
      <section className="section_gap aboutus" id="aboutus">

        <Title main="আমাদের সম্পর্কে" sub="dhhdhdh"/>
        <div className="aboutus_content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odit repellat rem voluptatem repellendus maiores voluptate illo, similique quo optio vitae veniam tempore iusto sint vel id? Eum, magnam quis.</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, temporibus id? Modi cupiditate aliquid possimus minima neque id iusto quis nobis, in commodi nemo a accusantium dolorum saepe maxime unde consectetur? Corporis, repudiandae! Ratione est atque nisi non esse omnis, molestias in, dolor explicabo, neque repudiandae totam asperiores placeat laborum?</p>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
