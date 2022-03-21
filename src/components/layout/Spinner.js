import React from "react";
import spinner from "../../images/spinner.gif";

const Spinner = () => {
  return (
    <>
      <img
        src={spinner}
        id="results"
        style={{ width: "200px", margin: "auto" }}
        alt="Loading..."
      />
    </>
  );
};

export default Spinner;
