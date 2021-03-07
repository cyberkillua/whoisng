import React from "react";
import styled from "styled-components";
import whoisng from "../imgs/whoisng.svg";
import { animateScroll as scroll } from "react-scroll";
const Nav = styled.nav`
  width: 100%;
  height: 163px;
  margin-top: 50px;
  margin-left: 100px;
  background: #ffffff;
  @media (max-width: 768px) {
    margin-left: 10px;
    height: 84px;
    width: 100%;
    border-radius: 0px;
  }
  .logo {
    width: 215.34px;
    height: 49.77px;

    @media (max-width: 768px) {
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
