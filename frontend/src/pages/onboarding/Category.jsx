import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Briefcase, Rocket } from 'lucide-react';

function Category() {
  const navigate = useNavigate();

  const handleContinue = (category) => {
    navigate('/onboarding/domains');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white">What's Your Journey? 🌟</h2>
          <p className="text-gray-300 mt-2">Select your current status</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => handleContinue('student')}
            className="w-full bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transform transition hover:scale-105 hover:bg-gray-50 group"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <GraduationCap className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800">Student</h3>
                <p className="text-gray-600">Currently pursuing education</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleContinue('fresher')}
            className="w-full bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transform transition hover:scale-105 hover:bg-gray-50 group"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <Rocket className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800">Fresher</h3>
                <p className="text-gray-600">Ready to start your career</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => handleContinue('professional')}
            className="w-full bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transform transition hover:scale-105 hover:bg-gray-50 group"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <Briefcase className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800">Working Professional</h3>
                <p className="text-gray-600">Experienced in the field</p>
              </div>
            </div>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={() => navigate('/onboarding/basic-info')}
            className="text-gray-300 hover:text-white"
          >
            ← Back
          </button>
          <div className="text-sm text-gray-300">Step 2 of 4</div>
        </div>
      </div>
    </div>
  );
}

export default Category