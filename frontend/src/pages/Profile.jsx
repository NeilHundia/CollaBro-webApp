import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Bell, 
  User, 
  Home, 
  Users, 
  UserPlus, 
  Heart, 
  Star, 
  History, 
  Archive,
  MessageSquare,
  Share2,
  Github,
  Linkedin
} from 'lucide-react';

function Profile() {
  const sidebarLinks = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { icon: UserPlus, label: 'Collabs', path: '/collabs' },
    { icon: Users, label: 'Groups', path: '/groups' },
    { icon: Heart, label: 'Favourite', path: '/favourites' },
    { icon: Star, label: 'Starred', path: '/starred' },
    { icon: History, label: 'History', path: '/history' },
    { icon: Archive, label: 'Archive', path: '/archive' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold">COLLABRO</h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for Projects"
                  className="pl-10 pr-4 py-2 w-80 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
                <span className="font-medium">Hello, User</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 bg-white rounded-lg shadow-sm p-4">
            <nav className="space-y-2">
              {sidebarLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center space-x-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Profile Card */}
            <div className="bg-gray-900 text-white rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div className="flex space-x-4">
                  <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h2 className="text-xl font-bold">UserName</h2>
                      <span className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current text-yellow-400" />
                        <span>4.9 (550)</span>
                      </span>
                    </div>
                    <a href="mailto:xyz@gmail.com" className="text-gray-400 text-sm">xyz@gmail.com</a>
                    <p className="mt-2 text-gray-300 max-w-2xl">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex space-x-8">
                  <div>
                    <span className="block text-2xl font-bold">08</span>
                    <span className="text-gray-400">connections</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold">08</span>
                    <span className="text-gray-400">Collab Posted</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold">27</span>
                    <span className="text-gray-400">Applied</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold">08</span>
                    <span className="text-gray-400">Collab Posted</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Posts Section */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Your Posts</h3>
              
              {/* Sample Post */}
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-gray-300" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">UserName</h4>
                    <p className="text-gray-400 text-sm">Place • Time</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="bg-gray-700 rounded-lg aspect-video"></div>
                </div>

                <p className="text-gray-300 mb-4">
                  Description about the post in a few sentences. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                <div className="flex items-center space-x-4 text-gray-400">
                  <button className="flex items-center space-x-2 hover:text-white">
                    <Heart className="h-5 w-5" />
                    <span>Fistbump</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-white">
                    <MessageSquare className="h-5 w-5" />
                    <span>Comment</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-white">
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;