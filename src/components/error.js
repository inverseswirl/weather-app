import React from "react";
import Neutral from "../style/neutral";
import Title from "./title";
import { BiErrorCircle } from "react-icons/bi";

const Error = () => {
  return (
    <div>
      <Neutral />
      <Title />
      <div className="search">
        <input
          className="search-input"
          type="search"
          placeholder="Enter place name here!"
          style={{ animation: "none" }}
        />
        <button className="search-btn"></button>
      </div>
      <div className="error">
        <h1>
          <BiErrorCircle size={19} /> Please try again.{" "}
        </h1>
      </div>
    </div>
  );
};

export default Error;
