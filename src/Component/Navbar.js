import React from "react";
import styled from "styled-components";
import whoisng from "../imgs/whois.ng.png"
import { animateScroll as scroll } from "react-scroll";
const Nav = styled.nav`
  position: absolute;
  width: 1440px;
  height: 163px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  @media (max-width: 768px) {
    position: absolute;
    
    height: 84px;
    width: 375px;
    left: 0px;
    top: 44px;
    border-radius: 0px;
    left: 0%;
    right: 0%;
    top: 5.42%;
    bottom: 84.24%;

  }
  .logo {
    position: absolute;
    width: 215.34px;
    height: 49.77px;
    left: 102.2px;
    top: 59.7px;
    
    @media (max-width: 768px) {
        position: absolute;
        left: 5.6%;
        right: 67.73%;
        top: 9.11%;
        bottom: 88.04%;
        
        img {
            height: 23.112464904785156px;
            width: 100px;
            left: 21px;
            top: 74px;
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
        }}>
        <img src={whoisng} alt="logo" />
      </div>
    </Nav>
  );
};

export default Navbar;
