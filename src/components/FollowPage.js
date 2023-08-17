import React, { useState } from "react";
import BottomNav from "./BottomNav";

const suggestions = [
  {
    id: 2,
    name: "User Name 2",
    userid: "user2",
    image:
      "https://ik.imagekit.io/satzz/Insta%20Clone%20/default-image.jpg?updatedAt=1689661689773",
    isFollowing: "Follow",
  },
  {
    id: 3,
    name: "User Name 3",
    userid: "user3",
    image:
      "https://ik.imagekit.io/satzz/Insta%20Clone%20/baby.jpg?updatedAt=1689665679047",
    isFollowing: "Follow",
  },
  {
    id: 4,
    name: "User Name 4",
    userid: "user4",
    image:
      "https://ik.imagekit.io/satzz/Insta%20Clone%20/batman.jpg?updatedAt=1689664867928",
    isFollowing: "Follow",
  },
  {
    id: 5,
    name: "User Name 5",
    userid: "user5",
    image:
      "https://ik.imagekit.io/satzz/Insta%20Clone%20/iron-man.webp?updatedAt=1689664863210",
    isFollowing: "Follow",
  },
  {
    id: 6,
    name: "User Name 6",
    userid: "user6",
    image:
      "https://ik.imagekit.io/satzz/Insta%20Clone%20/thor.webp?updatedAt=1689664864064",
    isFollowing: "Follow",
  },
  {
    id:7,
    name: "User Name 7",
    userid: "user7",
    image:
      "https://ik.imagekit.io/satzz/Insta%20Clone%20/cA.jpg?updatedAt=1689677324876",
    isFollowing: "Follow",
  },
  {
    id:8,
    name: "User Name 8",
    userid: "user8",
    image:
      "https://ik.imagekit.io/satzz/Insta%20Clone%20/superman.jpeg?updatedAt=1689677324117",
    isFollowing: "Follow",
  },
  {
    id: 9,
    name: "User Name 9",
    userid: "user9",
    image:
      "https://ik.imagekit.io/satzz/Insta%20Clone%20/ant.jpeg?updatedAt=1689677324187",
    isFollowing: "Follow",
  },
  {
    id: 10,
    name: "User Name 10",
    userid: "user10",
    image:
      "https://ik.imagekit.io/satzz/Insta%20Clone%20/2.JPG?updatedAt=1689686677658",
    isFollowing: "Follow",
  },
  {
    id: 11,
    name: "User Name 11",
    userid: "user11",
    image:
      "https://ik.imagekit.io/satzz/Insta%20Clone%20/3.png?updatedAt=1689686677504",
    isFollowing: "Follow",
  },
  {
    id: 12,
    name: "User Name 12",
    userid: "user12",
    image:
      "https://ik.imagekit.io/satzz/Insta%20Clone%20/nat2.jpg?updatedAt=1689686130241",
    isFollowing: "Follow",
  },
  {
    id: 13,
    name: "User Name 13",
    userid: "user13",
    image:
      "https://ik.imagekit.io/satzz/Insta%20Clone%20/kang.jpeg?updatedAt=1689685774130",
    isFollowing: "Follow",
  },
];

function FollowPage() {
  const [followStatus, setFollowStatus] = useState(
    suggestions.map(() => "Follow")
  );

  const handleFollowClick = (index) => {
    const newFollowStatus = [...followStatus];
    newFollowStatus[index] =
      newFollowStatus[index] === "Follow" ? "Following" : "Follow";
    setFollowStatus(newFollowStatus);
  };

  return (
    <>
      <div className="suggestion-fp">
      <div className="searchBox-fp">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="  Search..." />
      </div>
        {/* <button className="btn-see-all">See All</button> */}
      </div>
      <p className="sugs-fp" style={{textAlign:"center"}}>Suggestions for you</p>
      {suggestions.map((suggestion, index) => (
        <div className="suggestion-block-fp" key={suggestion.id}>
          <div className="block-left">
            <div className="block-img">
              <img
                src={suggestion.image}
                alt="follow-suggestion-userImg"
                height="32"
                width="32"
              />
            </div>
            <div className="sugg-Detaisl">
              <p className="sugg-name">{suggestion.name}</p>
              <p className="sugg-surname">{suggestion.userid}</p>
            </div>
          </div>
          <div className="block-right">
            {/* <button className="btn-follow"> */}
            {/* <p>{suggestion.isFollowing}</p> */}
            {/* </button> */}
            <button
              className="btn-follow"
              onClick={() => handleFollowClick(index)}
            >
              <p>{followStatus[index]}</p>
            </button>
          </div>
        </div>
      ))}
      <BottomNav/>
    </>
  );
}

export default FollowPage;
