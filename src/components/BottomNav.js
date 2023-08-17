import React from 'react'
import { Link } from 'react-router-dom'

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <div className="userRoutess">
        <ul>
          <li>
            <Link to="/">
              <i className="faIcon fa-solid fa-house"></i>
            </Link>
          </li>
          <li>
            <a href="/" onClick={(e) => e.preventDefault()} >
            {<i className="faIcon fa-solid fa-film"></i>}
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
                style={{marginTop:"3px"}}
              />
            </a>
          </li>
        </ul>
      </div>
      </div>
  )
}

export default BottomNav