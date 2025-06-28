import React, { useState } from 'react';
import '../styles/Post.css';
import { FaHeart, FaComment, FaBookmark, FaShare } from 'react-icons/fa';

const Post = ({ userImage, userName, hashtag, title, description, image, likes = 0 }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="post-box">
      <div className="post-header">
        <div className="user-info">
          <img className="user-image" src={userImage} alt="User" />
          {userName}
        </div>
        <div className="hashtag">{hashtag}</div>
      </div>

      <h3>{title}</h3>

      <p className="description">
        {expanded ? description : `${description.slice(0, 100)}...`}
        {description.length > 100 && (
          <button className="read-more" onClick={() => setExpanded(!expanded)}>
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </p>

      {image && (
        <div className="post-image">
          <img src={image} alt="Post" />
        </div>
      )}

      <div className="post-actions">
        <button>
          <FaHeart />
          <span>{likes}</span>
        </button>
        <button>
          <FaComment />
          <span>Comment</span>
        </button>
        <button>
          <FaBookmark />
          <span>Save</span>
        </button>
        <button>
          <FaShare />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
