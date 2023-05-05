import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "white",
            textDecoration:"none", 
          };
        }}
      >
        {children}
      </NavLink>
      ;
    </div>
  );
};

export default ActiveLink;
