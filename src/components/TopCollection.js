import React from "react";
import "./TopCollection.css";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import product1 from "./../Assets/ShoppingItem/product1.jpg";
import product2 from "./../Assets/ShoppingItem/product2.jpg";
import product3 from "./../Assets/ShoppingItem/product3.jpg";
import produc4 from "./../Assets/ShoppingItem/product4.jpg";
import product5 from "./../Assets/ShoppingItem/product5.jpg";
import product6 from "./../Assets/ShoppingItem/product6.jpg";
import product7 from "./../Assets/ShoppingItem/product7.jpg";
import product8 from "./../Assets/ShoppingItem/product8.jpg";
import product9 from "./../Assets/ShoppingItem/product9.jpg";
import product10 from "./../Assets/ShoppingItem/product10.jpg";
import product11 from "./../Assets/ShoppingItem/product11.jpg";
import product12 from "./../Assets/ShoppingItem/product12.jpg";

const TopCollection = () => {
  return (
    <div className="div" style={{ paddingBottom: "70px", margin: "0 auto" }}>
      <div className="heading-cotainer">
        <h2>TOP COLLECTION</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <div className="products d-flex flex-wrap">
        <div class="card products" style={{ border: "none" }}>
          <img src={product1} class="card-img-top" alt="..." />
          <div class="card-body">
            <div className="rating d-flex justify-center">
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="gray-start">
                <FaStar />
              </i>
            </div>
            <div className="name">
              <h6>Apple Phone</h6>
              <h4>$500.00</h4>
            </div>
            <button type="button" class="btn d-flex justify-center">
              <i>
                <IoCartOutline />
              </i>
              Add To Cart
            </button>
          </div>
        </div>

        <div class="card products" style={{ border: "none" }}>
          <img src={product2} class="card-img-top" alt="..." />
          <div class="card-body">
            <div className="rating d-flex justify-center">
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="gray-start">
                <FaStar />
              </i>
            </div>
            <div className="name">
              <h6>Laptop</h6>
              <h4>$800.00</h4>
            </div>
            <button type="button" class="btn d-flex justify-center">
              <i>
                <IoCartOutline />
              </i>
              Add To Cart
            </button>
          </div>
        </div>

        <div class="card products" style={{ border: "none" }}>
          <img src={product3} class="card-img-top" alt="..." />
          <div class="card-body">
            <div className="rating d-flex justify-center">
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="gray-start">
                <FaStar />
              </i>
            </div>
            <div className="name">
              <h6>Pawerbank</h6>
              <h4>$100.00</h4>
            </div>
            <button type="button" class="btn d-flex justify-center">
              <i>
                <IoCartOutline />
              </i>
              Add To Cart
            </button>
          </div>
        </div>

        <div class="card products" style={{ border: "none" }}>
          <img src={produc4} class="card-img-top" alt="..." />
          <div class="card-body">
            <div className="rating d-flex justify-center">
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="gray-start">
                <FaStar />
              </i>
            </div>
            <div className="name">
              <h6>Beauty Pack</h6>
              <h4>$50.00</h4>
            </div>
            <button type="button" class="btn d-flex justify-center">
              <i>
                <IoCartOutline />
              </i>
              Add To Cart
            </button>
          </div>
        </div>

        <div class="card products" style={{ border: "none" }}>
          <img src={product5} class="card-img-top" alt="..." />
          <div class="card-body">
            <div className="rating d-flex justify-center">
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="gray-start">
                <FaStar />
              </i>
            </div>
            <div className="name">
              <h6>Women Sports Wear</h6>
              <h4>$10.00</h4>
            </div>
            <button type="button" class="btn d-flex justify-center">
              <i>
                <IoCartOutline />
              </i>
              Add To Cart
            </button>
          </div>
        </div>

        <div class="card products" style={{ border: "none" }}>
          <img src={product6} class="card-img-top" alt="..." />
          <div class="card-body">
            <div className="rating d-flex justify-center">
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="gray-start">
                <FaStar />
              </i>
            </div>
            <div className="name">
              <h6>Sport Shoes</h6>
              <h4>$50.00</h4>
            </div>
            <button type="button" class="btn d-flex justify-center">
              <i>
                <IoCartOutline />
              </i>
              Add To Cart
            </button>
          </div>
        </div>

        <div class="card products" style={{ border: "none" }}>
          <img src={product7} class="card-img-top" alt="..." />
          <div class="card-body">
            <div className="rating d-flex justify-center">
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="gray-start">
                <FaStar />
              </i>
            </div>
            <div className="name">
              <h6>Ladies Sandle</h6>
              <h4>$30.00</h4>
            </div>
            <button type="button" class="btn d-flex justify-center">
              <i>
                <IoCartOutline />
              </i>
              Add To Cart
            </button>
          </div>
        </div>

        <div class="card products" style={{ border: "none" }}>
          <img src={product8} class="card-img-top" alt="..." />
          <div class="card-body">
            <div className="rating d-flex justify-center">
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="gray-start">
                <FaStar />
              </i>
            </div>
            <div className="name">
              <h6>Wooden Chair</h6>
              <h4>$20.00</h4>
            </div>
            <button type="button" class="btn d-flex justify-center">
              <i>
                <IoCartOutline />
              </i>
              Add To Cart
            </button>
          </div>
        </div>
        <div class="card products" style={{ border: "none" }}>
          <img src={product9} class="card-img-top" alt="..." />
          <div class="card-body">
            <div className="rating d-flex justify-center">
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="gray-start">
                <FaStar />
              </i>
            </div>
            <div className="name">
              <h6>Ladies Purse</h6>
              <h4>$25.10</h4>
            </div>
            <button type="button" class="btn d-flex justify-center">
              <i>
                <IoCartOutline />
              </i>
              Add To Cart
            </button>
          </div>
        </div>
        <div class="card products" style={{ border: "none" }}>
          <img src={product10} class="card-img-top" alt="..." />
          <div class="card-body">
            <div className="rating d-flex justify-center">
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="gray-start">
                <FaStar />
              </i>
            </div>
            <div className="name">
              <h6>Laptop</h6>
              <h4>$800.00</h4>
            </div>
            <button type="button" class="btn d-flex justify-center">
              <i>
                <IoCartOutline />
              </i>
              Add To Cart
            </button>
          </div>
        </div>
        <div class="card products" style={{ border: "none" }}>
          <img src={product11} class="card-img-top" alt="..." />
          <div class="card-body">
            <div className="rating d-flex justify-center">
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="gray-start">
                <FaStar />
              </i>
            </div>
            <div className="name">
              <h6>Men's Sport Wear</h6>
              <h4>$12.00</h4>
            </div>
            <button type="button" class="btn d-flex justify-center">
              <i>
                <IoCartOutline />
              </i>
              Add To Cart
            </button>
          </div>
        </div>
        <div class="card products" style={{ border: "none" }}>
          <img src={product12} class="card-img-top" alt="..." />
          <div class="card-body">
            <div className="rating d-flex justify-center">
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="star">
                <FaStar />
              </i>
              <i className="gray-start">
                <FaStar />
              </i>
            </div>
            <div className="name">
              <h6>Remote Control Car</h6>
              <h4>$135.50</h4>
            </div>
            <button type="button" class="btn d-flex justify-center">
              <i>
                <IoCartOutline />
              </i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCollection;
