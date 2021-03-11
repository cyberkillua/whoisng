import React, { useState } from "react";
import styled from "styled-components";
import Displaytable from "./displayTable";
import Load from "./Loader";

const Bodysection = styled.section`
  margin-top: 50px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    width: 100%;
    align-content: flex-start;
    margin-left: 10px;
  }
  .pp {
    margin: 10px;
    height: 38px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 37px;
    color: #ffffff;
    text-align: center;
    .purple {
      color: #ba7cd1;
    }
    @media (max-width: 768px) {
      margin-left: 0;
      height: 15px;
      border-radius: nullpx;
      font-size: 10px;
      line-height: 15px;
      text-align: left;
    }
  }
  .box {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
      width: 100%;
      margin-top: 20px;
      margin-left: auto;
      margin-right: auto;
      justify-content: space-between;
    }

    input {
      width: 45%;
      height: 70px;
      background: #f1f8ee;
      padding: 10px 20px;
      border: 0.4px solid #c0c0c0;
      box-sizing: border-box;
      border-radius: 5px;
      font-family: Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0em;

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
      background: linear-gradient(180deg, #7590d4 0%, #ce77d1 100%);
      border-radius: 5px;
      border: 0px;
      margin-left: 10px;
      @media (max-width: 768px) {
        height: 50px;
        width: 100px;
        margin-left: 0;
        margin-right: 20px;
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
  const [loaded, setLoaded] = useState(false);

  function getData() {
    console.log(q);
    setLoaded(true);
    fetch("https://whoisngapi.herokuapp.com/api/v1/whois/" + q)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoaded(false);
        console.log(result);
      });
  }

  return (
    <Bodysection>
      <div className="pp">
        Domain Names Search, <span className="purple">Registration</span> and{" "}
        <span className="purple">Availability</span> in Nigeria.
      </div>
      <div className="box">
        <input
          type="search"
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
      {loaded ? <Load /> : <Displaytable data={data} />}
    </Bodysection>
  );
};

export default Body;
