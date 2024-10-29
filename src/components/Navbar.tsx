import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { PenSquare, LogOut } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Blog Platform</Link>
        <div className="flex items-center space-x-4">
          {currentUser ? (
            <>
              <Link 
                to="/new-post" 
                className="flex items-center space-x-2 hover:text-teal-400"
              >
                <PenSquare size={20} />
                <span>New Post</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 hover:text-teal-400"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:text-teal-400">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};