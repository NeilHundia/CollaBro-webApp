import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import BasicInfo from './pages/onboarding/BasicInfo';
import Category from './pages/onboarding/Category';
import Domains from './pages/onboarding/Domains';
import Resume from './pages/onboarding/Resume';
import Profile from './pages/Profile';

// Temporary Dashboard component
const Dashboard = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Welcome to Dashboard!</h1>
      <p className="text-gray-600">Your dashboard content will appear here.</p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/onboarding/basic-info" element={<BasicInfo />} />
        <Route path="/onboarding/category" element={<Category />} />
        <Route path="/onboarding/domains" element={<Domains />} />
        <Route path="/onboarding/resume" element={<Resume />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;