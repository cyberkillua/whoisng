import React from "react";
import styled from "styled-components";

const Display = styled.section`
  height: 38px;
  font-family: Poppins;
  font-style: normal;
  line-height: 37px;
  color: #3b3d2d;
  text-align: center;
  margin-top: 100px;
  @media (max-width: 768px) {
    height: 15px;
    border-radius: nullpx;
    font-size: 10px;
    line-height: 15px;
  }
  table {
    margin-left: auto;
    margin-right: auto;
    
    text-align: start;
    td {
      padding: 10px;
      
     
    }
  }
`;

const Displaytable = ({ data }) => {
  // console.log(data.body)
  // {data === undefined? <Displaytable />:  <Displaytable data={ data } />}
  const { body } = data;
  // const {domain, available } = body
  // console.log(body);

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
                <tbody>
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
                    <td>{new Date(body.expiry_date).toDateString()}</td>
                  </tr>
                  <tr>
                    <td>Registered On</td>
                    <td>{new Date(body.registration_date).toDateString()}</td>
                  </tr>
                  <tr>
                    <td>Updated On</td>
                    <td>{new Date(body.updated_date).toDateString()}</td>
                  </tr>
                </tbody>
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
