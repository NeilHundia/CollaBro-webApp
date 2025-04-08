import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';

function Resume() {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    validateAndSetFile(droppedFile);
  };

  const handleFileInput = (e) => {
    const selectedFile = e.target.files[0];
    validateAndSetFile(selectedFile);
  };

  const validateAndSetFile = (file) => {
    if (file) {
      if (file.type === 'application/pdf') {
        setFile(file);
        setError('');
      } else {
        setError('Please upload a PDF file');
        setFile(null);
      }
    }
  };

  const handleComplete = () => {
    localStorage.setItem('onboardingCompleted', 'true');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white">Last Step! 🎉</h2>
          <p className="text-gray-300 mt-2">Upload your resume to complete your profile</p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-6">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`
              border-2 border-dashed rounded-lg p-8 text-center
              transition-colors cursor-pointer
              ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400 bg-gray-50'}
              ${file ? 'bg-blue-50 border-blue-500' : ''}
            `}
          >
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileInput}
              className="hidden"
              id="resume-upload"
            />
            <label htmlFor="resume-upload" className="cursor-pointer">
              {file ? (
                <div className="space-y-2">
                  <CheckCircle className="w-12 h-12 text-blue-500 mx-auto" />
                  <p className="text-blue-600 font-medium">{file.name}</p>
                  <p className="text-sm text-gray-600">File uploaded successfully!</p>
                </div>
              ) : (
                <div className="space-y-2">
                  <Upload className="w-12 h-12 text-blue-500 mx-auto" />
                  <p className="text-gray-700">
                    Drag and drop your resume here or <span className="text-blue-500">browse</span>
                  </p>
                  <p className="text-sm text-gray-500">Supports PDF files</p>
                </div>
              )}
            </label>
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-50 rounded-lg flex items-center space-x-2 text-red-600">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          )}

          <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-4">
            <button
              onClick={() => navigate('/onboarding/domains')}
              className="text-gray-300 hover:text-white"
            >
              ← Back
            </button>
            <div className="text-sm text-gray-300">Step 4 of 4</div>
            <button
              onClick={handleComplete}
              className={`
                px-6 py-2 rounded-lg transform transition
                ${file
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 hover:scale-105 shadow-md'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
              `}
              disabled={!file}
            >
              Complete →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume