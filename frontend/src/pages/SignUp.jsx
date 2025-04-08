import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Laptop } from 'lucide-react';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    countryCode: '+91'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just navigate to onboarding
    navigate('/onboarding/basic-info');
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
            <h2 className="text-2xl text-white font-semibold mb-6">Sign Up to CollaBro</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-3 py-2 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  className="w-full px-3 py-2 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="w-full px-3 py-2 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full px-3 py-2 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-20 px-3 py-2 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="flex-1 px-3 py-2 rounded border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
              >
                SIGN UP
              </button>
              
              <div className="text-center text-gray-400 text-sm">
                or sign up with
              </div>
            </form>
          </div>
          
          <p className="mt-8 text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:text-blue-600">
              Sign in
            </Link>
          </p>
        </div>
      </div>
      
      {/* Right side - Info */}
      <div className="hidden lg:flex lg:flex-1 flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold mb-2">WELCOME, SIGN UP NOW!</h2>
          
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

export default SignUp;