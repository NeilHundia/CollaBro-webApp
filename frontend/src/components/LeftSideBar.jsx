import React, { useState, useEffect } from 'react';
import '../styles/LeftSidebar.css'; // if separated, or keep using ProfilePage.css

const LeftSidebar = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(true);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`sidebar-box ${open ? 'active' : ''}`}>
      <h4 onClick={() => setOpen(prev => !prev)}>
        {title}
        <span style={{ fontWeight: 'normal', fontSize: '18px' }}>
          {window.innerWidth <= 768 ? (open ? '−' : '+') : ''}
        </span>
      </h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.icon && <img src={item.icon} alt="" />}
            <div>
              <strong>{item.main}</strong>
              {item.sub && <span className="subtext">{item.sub}</span>}
              {item.date && <span className="subtext">{item.date}</span>}
            </div>
          </li>
        ))}
      </ul>
      {items.length > 2 && <button className="view-all" onClick={() => setOpen(true)}>View all</button>}
    </div>
  );
};

export default LeftSidebar;
