import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, MapPin, Building2 } from 'lucide-react';

function BasicInfo() {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    navigate('/onboarding/category');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center ring-4 ring-white/20">
              <User className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white">Let's Get Started! 🚀</h2>
          <p className="text-gray-300 mt-2">First, tell us a bit about yourself</p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg animate-fade-in hover:bg-gray-100 transition-colors">
              <User className="w-5 h-5 text-blue-500" />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg animate-fade-in hover:bg-gray-100 transition-colors">
              <MapPin className="w-5 h-5 text-blue-500" />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current City
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="New York"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg animate-fade-in hover:bg-gray-100 transition-colors">
              <Building2 className="w-5 h-5 text-blue-500" />
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  University/Company
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Stanford University"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600">Step 1 of 4</div>
            <button
              onClick={handleContinue}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transform transition hover:scale-105 shadow-md"
            >
              Continue →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicInfo