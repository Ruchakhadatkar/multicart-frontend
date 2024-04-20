import React from "react";
import "./TopCollection.css";
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import product1 from "./../Assets/ShoppingItem/product1.jpg"
import product2 from "./../Assets/ShoppingItem/product2.jpg"
import product3 from "./../Assets/ShoppingItem/product3.jpg"
import produc41 from "./../Assets/ShoppingItem/product4.jpg"
import product5 from "./../Assets/ShoppingItem/product5.jpg"
import product6 from "./../Assets/ShoppingItem/product6.jpg"
import product7 from "./../Assets/ShoppingItem/product7.jpg"
import product8 from "./../Assets/ShoppingItem/product8.jpg"
import product9 from "./../Assets/ShoppingItem/product9.jpg"
import product10 from "./../Assets/ShoppingItem/product10.jpg"
import product11 from "./../Assets/ShoppingItem/product11.jpg"
import product12 from "./../Assets/ShoppingItem/product12.jpg"


const TopCollection = () => {
  return (
    <div className="div" style={{ paddingBottom: "70px" }}>
      <div className="heading-cotainer">
        <h2>TOP COLLECTION</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <div className="products">
        <div class="card products" >
          <img src={product1} class="card-img-top" alt="..." />
          <div class="card-body">
            <div className="rating d-flex">
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
              <i>
                <FaStar />
              </i>
            </div>
            <div className="name">
              <h6>Apple Phone</h6>
              <h4>$500.00</h4>
            </div>
            <button type="button" class="btn d-flex">
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
