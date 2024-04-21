import React from "react";
import "./HeroSection.css";
import cameraimg from "./../Assets/HeroSection/camera.jpg";
import laptopimg from "./../Assets/HeroSection/laptop.jpg";
import shoeimg from "./../Assets/HeroSection/shoe.jpg";
import headphonesimg from "./../Assets/HeroSection/headphones.jpg";

const HeroSection = () => {
  return (
    < div className="hero-container1">
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div
            class="carousel-item active hero-section-1"
            data-bs-interval="3000"
          >
            {/* <img src={drone} class="d-block w-100" alt="..." /> */}
            <div className="carousel-left">
              <h4 className="carousel-save">Save 30%</h4>
              <h1 className="carousel-heading">must have</h1>
              <button>shop now</button>
            </div>
          </div>
          <div class="carousel-item hero-section-2" data-bs-interval="3000">
            {/* <img src={laptop} class="d-block w-100" alt="..." /> */}
            <div className="carousel-left">
              <h4 className="carousel-save">Save 30%</h4>
              <h1 className="carousel-heading">special price</h1>
              <button>shop now</button>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="hero">
        <div
          className="container-hero"
          style={{
            height: "238px",
            // margin: " 2px 0px",
            cursor: "pointer",
          }}
        >
          <div class="row m-0 d-flex flex-wrap">
            <div class="col-lg-3 col-sm-6 p-0" style={{ position: "relative" }}>
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

            <div class="col-lg-3 col-sm-6 p-0" style={{ position: "relative" }}>
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

            <div class="col-lg-3 col-sm-6 p-0" style={{ position: "relative" }}>
              <a href="">
                <div className="image-div">
                  <img src={shoeimg} alt="" />
                </div>
                <div className="text-banner">
                  <div>
                    <h4>SAVE 60%</h4>
                    <h2 className="text-dark">WOMEN</h2>
                  </div>
                </div>
              </a>
            </div>

            <div class="col-lg-3 col-sm-6 p-0" style={{ position: "relative" }}>
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
    </div>
  );
};

export default HeroSection;
