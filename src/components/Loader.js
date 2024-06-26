import React from "react";

const Loader = ({ loading }) => {
  return loading ? <div className="loader"></div> : <div></div>;
};

export default Loader;
