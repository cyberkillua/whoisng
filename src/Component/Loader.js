import React from "react";
import Loader from "react-loader-spinner";

const Load = () => {
  return (
    <div className="loadd">
      <Loader type="BallTriangle" color="#94AA0F" height={150} width={150} />
    </div>
  );
};

export default Load;
