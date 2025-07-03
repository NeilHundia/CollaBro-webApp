import React, { useState, useEffect } from 'react';
import TabBar from './TabBar';
import Post from './Post';
import Project from './Project';
import '../styles/ProfileFeed.css';

const MainFeed = ({ posts = [], projects = [] }) => {
  const [activeTab, setActiveTab] = useState('posts');

  useEffect(() => {
  }, [activeTab]);

  return (
    <div className="main-feed-wrapper">
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} postCount={posts.length} projectCount={projects.length} />
      <div className="feed-content">
        {activeTab === 'posts' && (
          <>
            <h3 className="pinned-heading">Pinned Posts</h3>
            {posts.map((post, idx) => <Post key={idx} {...post} />)}
          </>
        )}
        {activeTab === 'projects' && (
          <>
            <h3 className="pinned-heading">Pinned Projects</h3>
            {projects.map((project, idx) => <Project key={idx} {...project} />)}
          </>
        )}
      </div>
    </div>
  );
};
export default MainFeed;
