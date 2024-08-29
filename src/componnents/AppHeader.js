import React from 'react';
import Button from './Button';
import './AppHeader.css';

function AppHeader() {
  const handleLogout = () => {
    // Remove the token from localStorage (or sessionStorage/cookies)
    localStorage.removeItem('token');

    // Redirect to login page
    window.location.href = '/'; // Or use navigate('/') if inside a Router context
  };

  return (
    <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <div className="text-2xl font-bold">
        Model-T
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Button to="/Trend_child" className="hover:text-orange-400">
              Trend child
            </Button>
          </li>
          <li>
            <Button to="/Trainprogram" className="hover:text-orange-400">
              Training program
            </Button>
          </li>
          <li>
            <Button to="" className="hover:text-orange-400">
              Services
            </Button>
          </li>
          <li>
            <Button onClick={handleLogout} className="hover:text-orange-400">
              Logout
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
