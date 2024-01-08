import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../img/imdb.png";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img src={logo} alt="logo" className="header_icon" />
        </Link>
        <Link to="/movies/popular" src="" className="header_icon">
          Popular
        </Link>
        <Link to="/movies/top_rated" src="" className="header_icon">
          Top_Rated
        </Link>
        <Link to="/movies/upcoming" src="" className="header_icon">
          Upcoming
        </Link>
      </div>
    </div>
  );
};

export default Header;
