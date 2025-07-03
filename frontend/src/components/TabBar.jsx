import React from 'react';
import '../styles/TabBar.css';

const TabBar = ({ activeTab, setActiveTab, postCount, projectCount }) => (
  <div className="tab-bar">
    <button
      className={activeTab === 'posts' ? 'active' : ''}
      onClick={() => setActiveTab('posts')}
    >
      Posts ({postCount})
    </button>
    <button
      className={activeTab === 'projects' ? 'active' : ''}
      onClick={() => setActiveTab('projects')}
    >
      Projects ({projectCount})
    </button>
  </div>
);

export default TabBar;
