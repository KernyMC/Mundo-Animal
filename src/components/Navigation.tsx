
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Home, Users } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
              <Heart className="w-4 h-4 text-white" fill="currentColor" />
            </div>
            <span className="font-playfair font-bold text-xl text-primary group-hover:text-emerald-600 transition-colors">
              Mundo Animal
            </span>
          </Link>

          <div className="flex items-center space-x-1">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                isActive('/')
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Home className="w-4 h-4" />
              <span className="font-medium">Inicio</span>
            </Link>
            
            <Link
              to="/adopcion"
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                isActive('/adopcion')
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Users className="w-4 h-4" />
              <span className="font-medium">Adopción</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
