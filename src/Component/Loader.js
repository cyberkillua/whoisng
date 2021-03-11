import React from "react";
import Loader from "react-loader-spinner";

const Load = () => {
  return (
    <div className="loadd">
      <Loader type="BallTriangle" color="#BA7CD1" height={150} width={150} />
    </div>
  );
};

export default Load;
