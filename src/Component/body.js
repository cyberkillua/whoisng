import React, { useState } from "react";
import styled from "styled-components";
import Displaytable from "./displayTable";

const Bodysection = styled.section`
  margin-top: 50px;
  .pp {
    margin: 10px;
    height: 38px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 37px;
    color: #3b3d2d;
    text-align: center;

    @media (max-width: 768px) {
      height: 15px;
      border-radius: nullpx;
      font-size: 10px;
      line-height: 15px;
    }
  }
  .box {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
    }
    input {
      width: 50%;
      height: 70px;
      background: #f1f8ee;
      border: 0.4px solid #c0c0c0;
      box-sizing: border-box;
      border-radius: 5px;
      @media (max-width: 768px) {
        height: 50px;
        width: 60%;
        border-radius: 5px;
      }
      ::placeholder {
        height: 29.076923370361328px;
        width: 241px;
        font-family: Poppins;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: left;
        padding-left: 10px;
        color: #838282;
        @media (max-width: 768px) {
          height: 15px;
          width: 134px;
          border-radius: nullpx;
          font-size: 10px;
          line-height: 15px;
        }
      }
    }
    button {
      width: 154px;
      height: 70px;
      background: #89c93d;
      border-radius: 5px;
      border: 0px;
      margin-left: 20px;
      @media (max-width: 768px) {
        height: 50px;
        width: 100px;
        margin-left: 5px;
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
      <div className="pp">
        Domain Names Search, Registration and Availability in Nigeria.
      </div>
      <div className="box">
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Enter domain or IP address"
        />
        <button
          onClick={() => {
            getData();
          }}
        >
          <span className="xx">Search</span>
        </button>
      </div>

      <Displaytable data={data} />
    </Bodysection>
  );
};

export default Body;
