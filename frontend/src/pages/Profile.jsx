import React from 'react';
import '../styles/ProfilePage.css';
import Navbar from './Navbar';
import ProfileHeader from '../components/ProfileHeader';
import LeftSidebar from '../components/LeftSideBar';
import MainFeed from '../components/ProfileFeed';

const ProfilePage = () => {
  const dummyPosts = [
  {
    userName: 'Alice Shen',
    userImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    hashtag: '#photography',
    title: 'Exploring Light & Shadow',
    description: 'A recent experiment I did with natural light and portraits. The effects were beautiful and surprising!',
    image: 'https://source.unsplash.com/featured/?portrait',
    likes: 120,
    comments: 8
  },
  {
    userName: 'David Lin',
    userImage: 'https://randomuser.me/api/portraits/men/45.jpg',
    hashtag: '#machinelearning',
    title: 'My ML Journey So Far',
    description: 'Sharing my progress with machine learning and how I started building my first model!',
    image: 'https://source.unsplash.com/featured/?machinelearning',
    likes: 210,
    comments: 16
  }
];

const dummyProjects = [
  {
    title: 'EcoTracker App',
    description: 'A React Native app that tracks daily carbon footprint and suggests greener alternatives.',
    image: 'https://source.unsplash.com/featured/?app',
    contributors: [
      'https://randomuser.me/api/portraits/women/50.jpg',
      'https://randomuser.me/api/portraits/men/50.jpg'
    ]
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio showcasing projects, blog posts, and contact details. Built with Next.js.',
    image: 'https://source.unsplash.com/featured/?website',
    contributors: [
      'https://randomuser.me/api/portraits/men/60.jpg'
    ]
  }
];

  return (
    <>
      <Navbar />
      <ProfileHeader />
      <div className="profile-body-wrapper">
        <div className="profile-body">
          <div className="sidebar">
            <LeftSidebar title="Education" items={[
              { main: "IIM BANGALORE", sub: "MBA",icon: "https://placekitten.com/24/24" },
              { main: "IIT KHARAGPUR", sub: "B.Tech. Computer Science",icon: "https://placekitten.com/24/24" },
              { main: "DPS NOIDA", sub: "High School Certificate",icon: "https://placekitten.com/24/24" }
            ]} />

            <LeftSidebar title="Experience" items={[
              { main: "PROJECT MANAGER", sub: "MINDSPACE",icon: "https://placekitten.com/24/24" },
              { main: "SENIOR ANALYST", sub: "MINDSPACE",icon: "https://placekitten.com/24/24" },
              { main: "PROJECT INTERN", sub: "MINDSPACE",icon: "https://placekitten.com/24/24" }
            ]} />

            <LeftSidebar title="License & Certification" items={[
              { main: "IIM BANGALORE", sub: "MBA",icon: "https://placekitten.com/24/24" },
              { main: "IIT KHARAGPUR", sub: "B.Tech. Computer Science",icon: "https://placekitten.com/24/24" },
            ]} />
          </div>

          <div className="main-feed">
            <MainFeed posts={dummyPosts} projects={dummyProjects}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
