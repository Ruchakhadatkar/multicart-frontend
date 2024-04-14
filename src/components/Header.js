import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <header>
      <div className="top-header"></div>
      <div className="middle-header"></div>
      <div className="bottom-header"></div>
    </header>
   
  );
};

export default Header;

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
  .ok{
    font-size:70px;
  }
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
