import React from "react";
import "../App.css";
import Instagram_logo from "./Instagram_logo.png"
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="logo">
        <a href="https://www.instagram.com" target="_blank">
          <img src = {Instagram_logo} alt="insta-logo" />
          </a>
      </div>
      <div className="searchBox">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="  Search..." />
      </div>
      <div className="userRoutes">
        <ul>
          <li>
            <Link to="/">
              <i className="faIcon fa-solid fa-house"></i>
            </Link>
          </li>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()} >
              <i className="faIcon fa-solid fa-film"></i>
            </a>
          </li>
          <li>
            <Link to="/follow-friends">
              <i className="faIcon fa-solid fa-square-plus"></i>
            </Link>
          </li>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>
            <i className="faIcon fa-brands fa-facebook-messenger"></i>
            </a>
          </li>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>
              <i className="faIcon fa-solid fa-heart"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              <img
                src="https://ik.imagekit.io/satzz/Insta%20Clone%20/Dp.jpg?updatedAt=1689662139862"
                alt="DP"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
