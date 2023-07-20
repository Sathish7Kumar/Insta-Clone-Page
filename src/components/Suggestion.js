import React from "react";

const suggestions = [
  {
    id: 2,
    name: "User Name 2",
    userid: "user2",
    image: 'https://ik.imagekit.io/satzz/default-image.jpg?updatedAt=1689661689773',
  },
  {
    id: 3,
    name: "User Name 3",
    userid: "user3",
    image: 'https://ik.imagekit.io/satzz/baby.jpg?updatedAt=1689665679047',
  },
  {
    id: 4,
    name: "User Name 4",
    userid: "user4",
    image: 'https://ik.imagekit.io/satzz/batman.jpg?updatedAt=1689664867928',
  },
  {
    id: 5,
    name: "User Name 5",
    userid: "user5",
    image: 'https://ik.imagekit.io/satzz/iron-man.webp?updatedAt=1689664863210',
  },
  {
    id: 6,
    name: "User Name 6",
    userid: "user6",
    image: 'https://ik.imagekit.io/satzz/thor.webp?updatedAt=1689664864064',
  },
  {
    id: 7,
    name: "User Name 7",
    userid: "user7",
    image: 'https://ik.imagekit.io/satzz/cA.jpg?updatedAt=1689677324876',
  }
];

function Suggestion() {
  return (
    <>
      <div className="suggestion">
        <p>Suggestions for you</p>
        <button className="btn-see-all">See All</button>
      </div>
      {suggestions.map((suggestion) => (
        <div className="suggestion-block" key={suggestion.id}>
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
            <button className="btn-follow"><p>Follow</p></button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Suggestion;
