import React from "react";
import "./HeroSection.css";
import cameraimg from "./../Assets/HeroSection/camera.jpg";
import laptopimg from "./../Assets/HeroSection/laptop.jpg";
import shoeimg from "./../Assets/HeroSection/shoe.jpg";
import headphonesimg from "./../Assets/HeroSection/headphones.jpg";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="container-hero" style={{ height: "238px", margin:"50px 0px", cursor:"pointer" }}>
        <div class="row m-0 d-flex flex-wrap">
          <div class="col-lg-3 col-sm-6 p-0" >
            <a>
              <div className="image-div p-left">
                <img src={cameraimg} />
              </div>
              <div className="text-banner banner-4">
                <div class="d-block">
                  <h4>SAVE 60%</h4>
                  <h2 className="text-dark">WOMEN</h2>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-3 col-sm-6 p-0">
            <a href="">
              <div className="image-div">
                <img src={laptopimg} alt="" />
              </div>
              <div className="text-banner">
                <div>
                  <h4>SAVE 30%</h4>
                  <h2 className="text-dark">MEN</h2>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-3 col-sm-6 p-0">
            <a href="">
              <div className="image-div"><img src={shoeimg} alt="" /></div>
              <div className="text-banner">
                <div>
                  <h4>SAVE 60%</h4>
                  <h2 className="text-dark">WOMEN</h2>
                </div>
              </div>
            </a>
          </div>

          <div class="col-lg-3 col-sm-6 p-0">
            <a href="">
              <div className="image-div">
                <img src={headphonesimg} alt="" />
              </div>
              <div className="text-banner">
                <div>
                  <h4>SAVE 60%</h4>
                  <h2 className="text-dark">WOMEN</h2>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
