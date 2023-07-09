import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word:" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            As a boss, as a CEO, as a creative director, as a chef,
          </p>
        </div>
        <p className="p__opensans">
          {" "}
          I've learned that failure will always come. I've learned to give it a
          big squeeze, smile at it, humble myself to it and then use it as a
          springboard to send me on my way to strength, success, and
          fulfillment..
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Christina Tosi</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
