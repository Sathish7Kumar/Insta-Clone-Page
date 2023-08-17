import React from "react";

const stories = [
  // {
  //   id: 1,
  //   user_id: "user1",
  //   username: 'User Name 1',
  //   image: 'https://ik.imagekit.io/satzz/Dp.jpg?updatedAt=1689662139862',
  // },
  {
    id: 2,
    user_id: "user2",
    username: 'User Name 2',
    image: 'https://ik.imagekit.io/satzz/Insta%20Clone%20/default-image.jpg?updatedAt=1689661689773',
  },
  {
    id: 3,
    user_id: "user3",
    username: 'User Name 3',
    image: 'https://ik.imagekit.io/satzz/Insta%20Clone%20/baby.jpg?updatedAt=1689665679047',
  },
  {
    id: 4,
    user_id: "user4",
    username: 'User Name 4',
    image: 'https://ik.imagekit.io/satzz/Insta%20Clone%20/batman.jpg?updatedAt=1689664867928',
  },
  {
    id: 5,
    user_id: "user5",
    username: 'User Name 5',
    image: 'https://ik.imagekit.io/satzz/Insta%20Clone%20/iron-man.webp?updatedAt=1689664863210',
  },
  {
    id: 6,
    user_id: "user6",
    username: 'User Name 6',
    image: 'https://ik.imagekit.io/satzz/Insta%20Clone%20/thor.webp?updatedAt=1689664864064',
  },
  {
    id: 7,
    user_id: "user7",
    username: 'User Name 7',
    image: 'https://ik.imagekit.io/satzz/Insta%20Clone%20/cA.jpg?updatedAt=1689677324876',
  },
  {
    id: 8,
    user_id: "user8",
    username: 'User Name 8',
    image: 'https://ik.imagekit.io/satzz/Insta%20Clone%20/superman.jpeg?updatedAt=1689677324117',
  },
  {
    id: 9,
    user_id: "user9",
    username: 'User Name 9',
    image: 'https://ik.imagekit.io/satzz/Insta%20Clone%20/ant.jpeg?updatedAt=1689677324187',
  },
];

function Story() {
  return (
    <>
      <div className="story">
      <div className="stories">
          <a href="/" onClick={(e) => e.preventDefault()}>
            <img
              src="https://ik.imagekit.io/satzz/Insta%20Clone%20/Dp.jpg?updatedAt=1690884839633"
              alt="user1"
              height="60"
              width="60"
            />
            {/* <p style={{fontWeight:'bold',fontSize:"15px",marginLeft:"25px",marginTop:0,textDecoration:"none",color:"red"}}>+</p> */}
            {/* <p style={{textAlign:'center',marginLeft:"4px",fontSize:"10px",textDecoration:"none"}}>Your Story</p> */}
          </a>
          <p style={{textAlign:'center',marginLeft:"4px",fontSize:"10px"}}>Your Story</p>
        </div>
        {stories.map((story) => (
        <div className="stories" key={story.id}>
          <a href="/" onClick={(e) => e.preventDefault()}>
            <img
              src={story.image}
              alt={`${story.username}-story`}
              height="60"
              width="60"
            />
          </a>
          <p>{story.user_id}</p>
        </div>
      ))}
      </div>
    </>
  );
}

export default Story;
