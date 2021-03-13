import React from "react";
import styled from "styled-components";
import whoisng from "../imgs/whoisng.svg";
import { animateScroll as scroll } from "react-scroll";
const Nav = styled.nav`
  width: 100%;
  height: 150px;

  background: #131311;
  @media (max-width: 768px) {
    height: 84px;
    width: 100%;
    border-radius: 0px;
  }
  .logo {
    width: 215.34px;
    height: 49.77px;
    padding-top: 40px;
    padding-left: 100px;
    @media (max-width: 768px) {
      padding-left: 15px;
      img {
        height: 23.112464904785156px;
        width: 100px;
        border-radius: 0px;
      }
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div
        className="logo"
        onClick={() => {
          scroll.scrollToTop();
        }}
      >
        <img src={whoisng} alt="logo" />
      </div>
    </Nav>
  );
};

export default Navbar;
