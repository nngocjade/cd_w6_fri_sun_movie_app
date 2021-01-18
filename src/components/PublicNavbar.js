import React from "react";
import { Link } from "react-router-dom";

const PublicNavbar = ({ handleOnSubmit, handleOnChange, searchTerm }) => {
  return (
    <div className="nav-container">
      <h2 className="logo">Now Playing</h2>
      <Link exact="true" to={`/upcoming`}>
        Upcoming
      </Link>
      <form onSubmit={handleOnSubmit}>
        <input
          className="search"
          type="search"
          placeholder="Search..."
          onChange={handleOnChange}
          value={searchTerm}
        />
      </form>
      <nav>
        <ul>
          <Link to={`/`}>Home</Link>
          <Link to={`/login`}>Login</Link>
          <Link to={`/signup`}>Sign Up</Link>
        </ul>
      </nav>
    </div>
  );
};

export default PublicNavbar;
