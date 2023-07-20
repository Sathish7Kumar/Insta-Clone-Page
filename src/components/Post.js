import React, { useState } from 'react';

const posts = [
  {
    id: 1,
    username: 'User Name 1',
    userid: 'user1',
    location: 'Chennai',
    dpimage: 'https://ik.imagekit.io/satzz/Dp.jpg?updatedAt=1689662139862',
    postimage: 'https://ik.imagekit.io/satzz/user1.webp?updatedAt=1689664863765',
    likes: 100,
    comments: 25,
    timeAgo: '20 HOURS AGO',
  },
  {
    id: 2,
    username: 'User Name 2',
    userid: 'user2',
    location: 'Canada',
    dpimage: 'https://ik.imagekit.io/satzz/default-image.jpg?updatedAt=1689661689773',
    postimage: 'https://ik.imagekit.io/satzz/user2.webp?updatedAt=1689664863310',
    likes: 90,
    comments: 22,
    timeAgo: '2 HOURS AGO',
  },
  {
    id: 3,
    username: 'User Name 3',
    userid: 'user3',
    location: 'Royapuram',
    dpimage: 'https://ik.imagekit.io/satzz/baby.jpg?updatedAt=1689665679047',
    postimage: 'https://ik.imagekit.io/satzz/spidy.webp?updatedAt=1689664864413',
    likes: 10,
    comments: 2,
    timeAgo: '2 DAYS AGO',
  },
  {
    id: 4,
    username: 'User Name 4',
    userid: 'user4',
    location: 'Gotham City',
    dpimage: 'https://ik.imagekit.io/satzz/batman.jpg?updatedAt=1689664867928',
    postimage: 'https://ik.imagekit.io/satzz/darkknight.webp?updatedAt=1689666195919',
    likes: 10,
    comments: 2,
    timeAgo: '10 MINUTES AGO',
  },
  {
    id: 5,
    username: 'User Name 5',
    userid: 'user5',
    location: 'Marina Beach',
    dpimage: 'https://ik.imagekit.io/satzz/iron-man.webp?updatedAt=1689664863210',
    postimage: 'https://ik.imagekit.io/satzz/picc.avif?updatedAt=1689665910734',
    likes: 1000,
    comments: 90,
    timeAgo: '20 MINUTES AGO',
  },
  {
    id: 6,
    username: 'User Name 6',
    userid: 'user6',
    location: 'Tokyo',
    dpimage: 'https://ik.imagekit.io/satzz/thor.webp?updatedAt=1689664864064',
    postimage: 'https://ik.imagekit.io/satzz/spd.webp?updatedAt=1689685284682',
    likes: 500,
    comments: 50,
    timeAgo: '1 DAY AGO',
  },
  {
    id: 7,
    username: 'User Name 7',
    userid: 'user7',
    location: 'New York',
    dpimage: 'https://ik.imagekit.io/satzz/cA.jpg?updatedAt=1689677324876',
    postimage: 'https://ik.imagekit.io/satzz/bp.jpg?updatedAt=1689685283332',
    likes: 200,
    comments: 30,
    timeAgo: '3 HOURS AGO',
  },
  {
    id: 8,
    username: 'User Name 8',
    userid: 'user8',
    location: 'Paris',
    dpimage: 'https://ik.imagekit.io/satzz/superman.jpeg?updatedAt=1689677324117',
    postimage: 'https://ik.imagekit.io/satzz/nature.jpg?updatedAt=1689685284194',
    likes: 800,
    comments: 70,
    timeAgo: '12 MINUTES AGO',
  },
  {
    id: 9,
    username: 'User Name 9',
    userid: 'user9',
    location: 'Sydney',
    dpimage: 'https://ik.imagekit.io/satzz/ant.jpeg?updatedAt=1689677324187',
    postimage: 'https://ik.imagekit.io/satzz/groot.jpg?updatedAt=1689686129963',
    likes: 300,
    comments: 40,
    timeAgo: '5 HOURS AGO',
  },
  {
    id: 10,
    username: 'User Name 10',
    userid: 'user10',
    location: 'London',
    dpimage: 'https://ik.imagekit.io/satzz/2.JPG?updatedAt=1689686677658',
    postimage: 'https://ik.imagekit.io/satzz/spidy.jpg?updatedAt=1689685283693',
    likes: 150,
    comments: 20,
    timeAgo: '6 DAYS AGO',
  },
  {
    id: 11,
    username: 'User Name 11',
    userid: 'user11',
    location: 'Berlin',
    dpimage: 'https://ik.imagekit.io/satzz/3.png?updatedAt=1689686677504',
    postimage: 'https://ik.imagekit.io/satzz/doc.jpg?updatedAt=1689685282710',
    likes: 450,
    comments: 60,
    timeAgo: '2 WEEKS AGO',
  },
  {
    id: 12,
    username: 'User Name 12',
    userid: 'user12',
    location: 'Los Angeles',
    dpimage: 'https://ik.imagekit.io/satzz/nat2.jpg?updatedAt=1689686130241',
    postimage: 'https://ik.imagekit.io/satzz/loki.jpg?updatedAt=1689685774366',
    likes: 120,
    comments: 15,
    timeAgo: '4 HOURS AGO',
  },
  {
    id: 13,
    username: 'User Name 13',
    userid: 'user13',
    location: 'Barcelona',
    dpimage: 'https://ik.imagekit.io/satzz/kang.jpeg?updatedAt=1689685774130',
    postimage: 'https://ik.imagekit.io/satzz/1.jpg?updatedAt=1689686678303',
    likes: 250,
    comments: 35,
    timeAgo: '1 DAY AGO',
  },
  {
    id: 14,
    username: 'User Name 14',
    userid: 'user14',
    location: 'Rome',
    dpimage: 'https://ik.imagekit.io/satzz/nat.jpeg?updatedAt=1689685774021',
    postimage: 'https://ik.imagekit.io/satzz/4.jpg?updatedAt=1689686678169',
    likes: 50,
    comments: 10,
    timeAgo: '6 HOURS AGO',
  },
  {
    id: 15,
    username: 'User Name 15',
    userid: 'user15',
    location: 'Amsterdam',
    dpimage: 'https://ik.imagekit.io/satzz/Rocket.jpeg?updatedAt=1689686130440',
    postimage: 'https://ik.imagekit.io/satzz/abd-vk.webp?updatedAt=1689686678463',
    likes: 80,
    comments: 18,
    timeAgo: '3 DAYS AGO',
  },
];

function PostList() {
  const [likedPosts, setLikedPosts] = useState([]);

  const handleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };
  return (
    <div>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="post-title">
            <div className="post-left">
              <div className="post-img">
                <img
                  src={post.dpimage}
                  alt={`${post.username}-avatar`}
                  height="32"
                  width="32"
                />
              </div>
              <div className="post-details">
                <p className="user-name">{post.username}</p>
                <p className="user-location">{post.location}</p>
              </div>
            </div>
            <div className="post-right">
              <i className="fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <div className="post-content">
            <img src={post.postimage} alt="post-imgs" height="600" width="600" />
          </div>
          <div className="post-footer">
            <div className="action">
            <button
                className={`heart-btn ${likedPosts.includes(post.id) ? 'liked' : ''}`}
                onClick={() => handleLike(post.id)}
              >
                <i className="far fa-heart"></i>
              </button>
              <i className="far fa-comment"></i>
              <i className="far fa-paper-plane"></i>
            </div>
            <div className="save">
              <i className="far fa-bookmark"></i>
            </div>
          </div>
          <div className="reactions">
            <p className="user-like">{post.likes + (likedPosts.includes(post.id) ? 1 : 0)} Likes</p>
            <p className="user-name">{post.userid}</p>
            <p className="comments">view all {post.comments} comments</p>
            <p className="post-time">{post.timeAgo}</p>
          </div>
          <div className="addComments">
            <div className="left-comment">
              <i className="far fa-smile-beam"></i>
              <input type="text" placeholder="Add a Comment..." />
            </div>
            <div className="right-comment">
              <p className="c-post">Post</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
