import React from "react";

const Nav = ({ name, handler = () => false }) => {
  return (
    <div style={{ float: "left" }}>
      <span>
        <button className="btn btn-secondary" onClick={handler}>
          {name}
        </button>
      </span>
      <br />
      <br />
    </div>
  );
};

export default Nav;
