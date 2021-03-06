import React, { useState } from "react";
import styled from "styled-components";
import Displaytable from "./displayTable";
import Load from "./Loader";
import globe from "../imgs/globe.svg";

const Bodysection = styled.section`
  margin-top: 50px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
  .pp {
    margin: 30px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 37px;
    color: #ffffff;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .purple {
      color: #ba7cd1;
    }
    img {
      width: 35px;
      height: 35px;
      margin-left: 5px;
      @media (max-width: 768px) {
        display: none;
      }
    }
    @media (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
      width: 90%;
      border-radius: nullpx;
      font-size: 10px;
      line-height: 15px;
      text-align: left;
      display: block;
    }
  }
  .box {
    margin-top: 40px;

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 20px;
    }
    form {
      width: 100%;
      display: flex;
      justify-content: center;
      @media (max-width: 768px) {
        display: block;
      }
      input {
        width: 50%;
        height: 70px;
        background: #f1f8ee;
        padding: 0 20px;
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
          height: 45px;
          width: 90%;
          display: block;

          margin-left: auto;
          margin-right: auto;
          border-radius: 5px;
        }
        ::placeholder {
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
            padding-left: 1px;
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
          margin-top: 20px;
          text-align: center;
          border-radius: 5px;
          display: block;
          margin-left: auto;
          margin-right: auto;
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
  }
`;

const Body = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [loaded, setLoaded] = useState(false);

  function getData(e) {
    e.preventDefault();
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
        <div>
          Domain Names Search, <span className="purple">Registration </span>
          and <span className="purple"> Availability</span> Anywhere!
        </div>
        <div>
          <img src={globe} alt="globe" />
        </div>
      </div>
      <div className="box">
        <form onSubmit={getData}>
          <input
            required
            // type="url"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Enter domain or IP address"
          />
          <button>
            <span className="xx">Search</span>
          </button>
        </form>
      </div>
      {loaded ? <Load /> : <Displaytable data={data} />}
    </Bodysection>
  );
};

export default Body;
