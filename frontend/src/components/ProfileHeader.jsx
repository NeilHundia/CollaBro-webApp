import React from 'react';
import '../styles/ProfileHeader.css';

const profile = {
  image: 'https://randomuser.me/api/portraits/women/44.jpg',
  coverImage:'https://images.unsplash.com/photo-1503264116251-35a269479413',
  name: 'USERNAME',
  subtitle: 'Full Stack Developer & Open-source Enthusiast',
  rating: '4.8',
  status: 'Available',
  stats: [
    { label: 'Age', value: '27' },
    { label: 'Experience', value: '6 yrs' },
    { label: 'Collabs', value: '34' },
    { label: 'Connections', value: '141' },
    { label: 'Projects', value: '12' },
  ],
};

const ProfileHeader = () => {
  return (
    <div className="profile-header-container">
      <img
        src={profile.coverImage}
        alt="Cover"
        style={{ width: '100%', height: '180px', objectFit: 'cover' }}
      />

      <div className="profile-header-content">
        <div className="top-row">
          <div className="profile-pic-container">
            <img className="profile-pic" src={profile.image} alt="Profile" />
          </div>

          <div className="top-info">
            <div className="name-row">
              <h2 className="name">{profile.name}</h2>
              <span className="certified-badge">Certified</span>
              <span className="rating-badge">⭐ {profile.rating}</span>
            </div>
            <p className="subtitle">{profile.subtitle}</p>
          </div>

          <div className="profile-buttons">
            <button>Edit Profile</button>
            <button>View Profile</button>
          </div>
        </div>

        <div className="profile-stats">
          {profile.stats.map((stat, idx) => (
            <div key={idx}>
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
