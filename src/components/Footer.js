import React from "react";
import "./Footer.css";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosWifi } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";
import visa from "./../Assets/visa.png";
import paypal from "./../Assets/paypal.png";
import discover from "./../Assets/discover.png";
import mastercard from "./../Assets/mastercard.png";
import americanExpress from "./../Assets/american-express.png";
import multikart from "./../Assets/multicart.png";

const Footer = () => {
  return (
    <footer className=" text-white  ">
      <div className=" footer-top md:flex gap-x-0 md:justify-between md:items-center sm:px-8  py-14 bg-[#394868]">
        <div className="multikart">
          <h1
            className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
          >
            <img src={multikart} alt="" className="mb-3" />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <ul className="contact-list">
            <li className="md:flex">
              <i>
                <FaLocationDot />
              </i>{" "}
              Multikart Demo Store, Demo Store India 345-659
            </li>
            <li className="md:flex">
              <i>
                <IoIosCall />
              </i>
              Call Us: 123-456-7898
            </li>
            <li className="md:flex">
              <i>
                <MdEmail />
              </i>{" "}
              Email Us: Support@Multikart.Com
            </li>
          </ul>
        </div>

        <div className="my-account">
          <h2>MY ACCOUNT</h2>
          <div className="sub-item">
            <ul>
              <li>Mens</li>
              <li>Womens</li>
              <li>Clothing</li>
              <li>Accessories</li>
              <li>Featured</li>
            </ul>
          </div>
        </div>

        <div className="information">
          <h2>INFORMATION</h2>
          <div className="sub-item">
            <ul>
              <li>Shipping & Return</li>
              <li>Secure Shopping</li>
              <li>Gallary</li>
              <li>Affiliates</li>
              <li>Contacts</li>
            </ul>
          </div>
        </div>

        <div className="follow">
          <h2>FOLLOW US</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="text-gray-800
           sm: w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5  px-2 focus:outline-none"
          />
          <button
            className=" hover:bg-white duration-300 px-5 py-2.5 font-[Poppins]
            text-white md:w-auto w-full"
          >
            SUBSCRIBE
          </button>
          <div className="social">
            <ul className=" social-ul md:flex">
              <li>
                <i className="icon-so">
                  <FaFacebookF />
                </i>
              </li>
              <li>
                <i className="icon-so">
                  <IoLogoGoogleplus />
                </i>
              </li>

              <li>
                <i className="icon-so">
                  <FaTwitter />
                </i>
              </li>

              <li>
                <i className="icon-so">
                  <FaInstagram />
                </i>
              </li>

              <li>
                <i>
                  <IoIosWifi className="icon-so" />
                </i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="end-footer d-flex">
        <div className="left-end d-flex">
          <div className="text-end d-flex align-items-center">
            <i className="d-flex">
              {/* <FaRegCopyright className="c-icon" /> */}
              <p>2023-24 themeforest powered by pixelstrap</p>
            </i>
          </div>
        </div>
        <div className="pay-cards d-flex justify-content-end">
          <ul className="d-flex justify-content-end gap-3  align-items-center">
            <li>
              <img src={visa} alt="" />
            </li>
            <li>
              <img src={mastercard} alt="" />
            </li>
            <li>
              <img src={paypal} alt="" />
            </li>
            <li>
              <img src={americanExpress} alt="" />
            </li>
            <li>
              <img src={discover} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
