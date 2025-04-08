import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Palette, Database, Globe, Cpu, LineChart, Smartphone, Camera } from 'lucide-react';

function Domains() {
  const navigate = useNavigate();
  const [selectedDomains, setSelectedDomains] = useState([]);

  const domains = [
    { id: 'web', icon: Globe, label: 'Web Development', color: 'blue' },
    { id: 'mobile', icon: Smartphone, label: 'Mobile Development', color: 'blue' },
    { id: 'ui', icon: Palette, label: 'UI/UX Design', color: 'blue' },
    { id: 'backend', icon: Database, label: 'Backend Development', color: 'blue' },
    { id: 'ai', icon: Cpu, label: 'AI/ML', color: 'blue' },
    { id: 'data', icon: LineChart, label: 'Data Science', color: 'blue' },
    { id: 'blockchain', icon: Code, label: 'Blockchain', color: 'blue' },
    { id: 'ar', icon: Camera, label: 'AR/VR', color: 'blue' },
  ];

  const toggleDomain = (domainId) => {
    setSelectedDomains(prev => 
      prev.includes(domainId)
        ? prev.filter(id => id !== domainId)
        : [...prev, domainId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white">What's Your Expertise? 🎯</h2>
          <p className="text-gray-300 mt-2">Select all domains that interest you</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {domains.map(({ id, icon: Icon, label }) => {
            const isSelected = selectedDomains.includes(id);
            return (
              <button
                key={id}
                onClick={() => toggleDomain(id)}
                className={`
                  p-4 rounded-xl transition-all transform hover:scale-105 bg-white/95 backdrop-blur-sm
                  ${isSelected 
                    ? 'ring-2 ring-blue-500 shadow-lg scale-105' 
                    : 'hover:bg-gray-50'}
                `}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isSelected 
                      ? 'bg-blue-500' 
                      : 'bg-blue-50'
                  }`}>
                    <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-blue-500'}`} />
                  </div>
                  <span className={`text-sm font-medium ${isSelected ? 'text-blue-600' : 'text-gray-700'}`}>
                    {label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={() => navigate('/onboarding/category')}
            className="text-gray-300 hover:text-white"
          >
            ← Back
          </button>
          <div className="text-sm text-gray-300">Step 3 of 4</div>
          <button
            onClick={() => navigate('/onboarding/resume')}
            className={`
              px-6 py-2 rounded-lg transform transition
              ${selectedDomains.length > 0
                ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 hover:scale-105 shadow-md'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
            `}
            disabled={selectedDomains.length === 0}
          >
            Continue →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Domains