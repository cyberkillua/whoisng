import React from "react";
import styled from "styled-components";

const Display = styled.section`
  position: absolute;
  width: 799px;
  height: 38px;
  left: 331px;
  top: 500px;
  font-family: Poppins;
  font-style: normal;

  line-height: 37px;
  color: #3b3d2d;
  @media (max-width: 768px) {
    height: 15px;
    width: 320px;
    left: 22px;
    top: 400px;
    border-radius: nullpx;
    font-size: 10px;
    line-height: 15px;
  }
  table {
    border: 0px;

    td {
      padding: 10px;
    }
  }
`;

const Displaytable = ({ data }) => {
  // console.log(data.body)
  // {data === undefined? <Displaytable />:  <Displaytable data={ data } />}
  const { status, body } = data;
  // const {domain, available } = body
  console.log(body);

  return (
    <Display>
      {body ? (
        <div>
          {body.available === true ? (
            <h1>This domain is Available </h1>
          ) : (
            <>
              <h1>This domain is already registered</h1>
              <h2>Registrant Contact Information:</h2>
              <table>
                <tr>
                  <td> Name</td>
                  <td> {body.registrant_name}</td>
                </tr>
                <tr>
                  <td>Organization</td>
                  <td>{body.registrant_org}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>{body.registrant_address}</td>
                </tr>
                <tr>
                  <td>Expires On</td>
                  <td>{body.expiry_date}</td>
                </tr>
                <tr>
                  <td>Registered On</td>
                  <td>{body.registration_date}</td>
                </tr>
                <tr>
                  <td>Updated On</td>
                  <td>{body.updated_date}</td>
                </tr>
              </table>
            </>
          )}
        </div>
      ) : (
        ""
      )}
    </Display>
  );
};

export default Displaytable;
