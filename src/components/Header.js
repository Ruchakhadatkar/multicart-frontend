import React from "react";
import styled from "styled-components";
import "./Header.css";
import { MdCall } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { RiGiftFill } from "react-icons/ri";
import multikart from "./../Assets/multicart.png";
import { FiHeart } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
    <header className="" style={{ backgroundColor: "#394868", color: "white" }}>
      <div className="top-header d-flex ">
        <div className="container-head">
          <div className="row">
            <div className="col-lg-6 d-flex justify-start">
              <div className="header-contact  " style={{ padding: "15px 0px" }}>
                <ul className="d-flex">
                  <li style={{ paddingRight: "25px" }}>
                    Welcome to Our store Multikart
                  </li>
                  <li className="d-flex">
                    <i>
                      <MdCall />
                    </i>
                    Call Us: 123 - 456 - 7890
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-end">
              <div className="header-contact" style={{ padding: "15px 0px" }}>
                <ul className="d-flex">
                  <li className="d-flex" style={{ paddingRight: "25px" }}>
                    <i>
                      <FaTruck />
                    </i>
                    Track Order
                  </li>
                  <li className="d-flex">
                    <i>
                      <RiGiftFill />
                    </i>
                    Gift Cards
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="middle-header d-flex ">
        <div className="container-head" style={{ padding: "19px 15px" }}>
          <div className="row">
            <div className="col-sm-12">
              <div className="main-menu d-flex justify-content-between">
                <div className="brand-logo py-2">
                  <img src={multikart} alt="" />
                </div>
                <form class="d-flex" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search any Device or Gadgets..."
                    aria-label="Search"
                    style={{
                      fontSize: "18px",
                      borderColor: "transparent",
                      backgroundColor: "#ffffff",
                      color: "darkgrey",
                      margin: "0px",
                    }}
                  />
                  <button className="search-btn">
                    <i style={{ fontSize: "23px", paddingTop: "6px" }}>
                      <IoSearch />
                    </i>
                  </button>
                </form>
                <div className="icon-end d-flex">
                  <div
                    className="icon-nav d-flex"
                    style={{ paddingTop: "8px" }}
                  >
                    <div className="like-user">
                      <ul className="d-flex gap-4">
                        <li>
                          <i>
                            <FiHeart />
                          </i>
                        </li>
                        <li>
                          <i>
                            <HiOutlineUser />
                          </i>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="setting-cart"
                      style={{ marginLeft: "18px" }}
                    >
                      <ul className="d-flex gap-4 ">
                        <li>
                          <i>
                            <IoSettingsOutline />
                          </i>
                        </li>
                        <li>
                          <i>
                            <BsCart3 />
                          </i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-header">
        <div className="row"  style={{ padding: "4px 30px" , paddingBottom:"13px"}}>
          <div className="col-xl-3" style={{width:"25%"}}>
            <div className="toggle-sidebar d-flex justify-center">
              <i>
                <FaBars />
              </i>
              <h5>Shop By Category</h5>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-9 position-unset">
            <div className="bottom-nav-center">
              <nav className="d-flex justify-content-between" >
                <ul class="nav nav-pills">
                  <li class="nav-item">
                    <a>Home</a>
                  </li>
                  <li class=" dropdown">
                    <a
                      class=" dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-expanded="false"
                    >
                      SHOP
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Tab Style <span style={{ color: "orange" }}>NEW</span>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Top Filter
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Modern
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          No Sidebar
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Sidebar Popup
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Metro
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Full Width
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Infinite Scroll
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Three Grid
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Six Grid
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          List View
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class=" dropdown">
                    <a
                      class=" dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-expanded="false"
                    >
                      PRODUCT
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          360 View <span style={{ color: "orange" }}>NEW</span>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Video Thumbnail{" "}
                          <span style={{ color: "orange" }}>NEW</span>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Sidebar
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Thumbnail Image
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Three Column
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Four Image
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Sticky
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Accordian
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Bundle
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Image Swatch
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Vertical Tab
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class=" dropdown">
                    <a
                      class=" dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-expanded="false"
                    >
                      PAGES
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Vendor
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Account
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          search
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Review
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Compare
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Collection
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Lookbook
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Site Map
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          404
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Coming Soon
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          FAQ
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class=" dropdown">
                    <a
                      class=" dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-expanded="false"
                    >
                      BOLG
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Left Sidebar
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Right Sidebar
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          No Sidebar
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Blog details
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-xxl-3 d-none d-xxl-inline-block"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
