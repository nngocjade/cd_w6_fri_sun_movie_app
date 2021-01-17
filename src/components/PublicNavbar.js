import React from "react";
import { Link } from "react-router-dom";

const PublicNavbar = () => {
  return (
    <div>
      <ul>
        <li as={Link} to="/">
          Home
        </li>
        <li as={Link} to="/login">
          Login
        </li>
        <li as={Link} to="/signup">
          Sign Up
        </li>
      </ul>
    </div>
  );
};

export default PublicNavbar;
