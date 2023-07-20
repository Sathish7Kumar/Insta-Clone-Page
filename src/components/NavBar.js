import React from "react";
import "../App.css";
import Instagram_logo from "./Instagram_logo.png"

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
            <a href="/" onClick={(e) => e.preventDefault()} >
              <i className="faIcon fa-solid fa-house"></i>
            </a>
          </li>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()} >
              <i className="faIcon fa-brands fa-facebook-messenger"></i>
            </a>
          </li>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>
              <i className="faIcon fa-solid fa-square-plus"></i>
            </a>
          </li>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()}>
              <i className="faIcon fa-solid fa-search"></i>
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
                src="https://ik.imagekit.io/satzz/Dp.jpg?updatedAt=1689662139862"
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
