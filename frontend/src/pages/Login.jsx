import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Laptop } from 'lucide-react';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if user has completed onboarding
    const hasCompletedOnboarding = localStorage.getItem('onboardingCompleted');
    
    if (hasCompletedOnboarding) {
      // Navigate to dashboard or home page
      navigate('/dashboard'); // You'll need to create this route
    } else {
      // First time login, go through onboarding
      navigate('/onboarding/basic-info');
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left side - Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <div className="flex items-center gap-2 mb-8">
            <Laptop className="h-8 w-8" />
            <span className="text-xl font-bold">COLLABRO</span>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl text-white font-semibold mb-6">Login to CollaBro</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="w-full px-3 py-2 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-3 py-2 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="text-right">
                <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
                  Forgot Password?
                </a>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              >
                SIGN IN
              </button>
              
              <div className="text-center text-gray-400 text-sm">
                or sign in with
              </div>
            </form>
          </div>
          
          <p className="mt-8 text-center text-gray-600">
            New to CollaBro?{' '}
            <Link to="/signup" className="text-blue-500 hover:text-blue-600">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      
      {/* Right side - Info */}
      <div className="hidden lg:flex lg:flex-1 flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold mb-2">WELCOME BACK,</h2>
          <h3 className="text-2xl mb-6">About CollaBro!</h3>
          
          <img
            src="/login.png"
            alt="Collaboration"
            className="w-96 h-96 object-cover mb-6"
          />
          
          <p className="text-gray-600">
            A platform designed to foster collaborative innovation by bringing together individuals from diverse streams and domains to work on impactful projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;