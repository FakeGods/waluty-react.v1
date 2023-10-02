import React from "react";
import "./Loader.css";

function Loader({ loading }) {
  return loading && <div className="loader">Loading...</div>;
}

export default Loader;
