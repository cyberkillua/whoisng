import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Displaytable from "./displayTable";

const Bodysection = styled.section`
  .pp {
    position: absolute;
    width: 799px;
    height: 38px;
    left: 331px;
    top: 355px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 37px;
    color: #3b3d2d;

    @media (max-width: 768px) {
      height: 15px;
      width: 320px;
      left: 22px;
      top: 198px;
      border-radius: nullpx;
      font-size: 10px;
      line-height: 15px;
    }
  }
  input {
    position: absolute;
    width: 691px;
    height: 70px;
    left: 293px;
    top: 428px;
    background: #f1f8ee;
    border: 0.4px solid #c0c0c0;
    box-sizing: border-box;
    border-radius: 5px;
    @media (max-width: 768px) {
      height: 50px;
      width: 331px;
      left: 22px;
      top: 226px;
      border-radius: 5px;
    }
    ::placeholder {
      position: absolute;
      height: 29.076923370361328px;
      width: 241px;
      left: 318px;
      top: 448.46154022216797px;

      font-family: Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0em;
      text-align: left;
      color: #838282;
      @media (max-width: 768px) {
        height: 15px;
        width: 134px;
        left: 36px;
        top: 244px;
        border-radius: nullpx;
        font-family: Poppins;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }
  button {
    position: absolute;
    width: 154px;
    height: 70px;
    left: 994px;
    top: 428px;
    background: #89c93d;
    border-radius: 5px;
    border: 0px;
    @media (max-width: 768px) {
      height: 50px;
      width: 193px;
      left: 21px;
      top: 291px;
      border-radius: 5px;
    }
    .xx {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      color: #ffffff;
    }
  }
`;

const Body = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  function getData() {
    console.log(q);
    fetch("https://whoisngapi.herokuapp.com/api/v1/whois/" + q)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        console.log(result);
      });
  }

  return (
    <Bodysection>
      <span className="pp">
        Domain Names Search, Registration and Availability in Nigeria.
      </span>
      <input
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Enter domain or IP address"
      />
      <button
        onClick={() => {
          getData();
        }}>
        <span className="xx">Search</span>
      </button>
      
      <Displaytable data={ data } />
    </Bodysection>
    
  );
};

export default Body;
