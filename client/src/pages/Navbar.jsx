import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useClerk, useUser, SignedIn } from '@clerk/clerk-react';

const Navbar = () => {
  const { signOut } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate('/login');
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white bg-gradient-to-r from-blue-50 to-purple-100 shadow-lg">
      <div className=" min-h-screen bg-cover bg-center flex items-center gap-3">
        
        <span className="text-2xl font-bold text-blue-700 tracking-wide">Wrap It</span>
        <NavLink to="/dashboard" className={({isActive}) => isActive ? 'ml-6 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold transition' : 'ml-6 px-3 py-1 rounded-full text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition'}>Parse & Display Data</NavLink>
        <NavLink to="/dashboard?tab=charts" className={({isActive}) => isActive ? 'ml-4 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold transition' : 'ml-4 px-3 py-1 rounded-full text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition'}>Chart Visualization</NavLink>
        <NavLink to="/dashboard?tab=history" className={({isActive}) => isActive ? 'ml-4 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold transition' : 'ml-4 px-3 py-1 rounded-full text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition'}>Upload History</NavLink>
        <NavLink to="/dashboard?tab=download" className={({isActive}) => isActive ? 'ml-4 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold transition' : 'ml-4 px-3 py-1 rounded-full text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition'}>Download Charts</NavLink>
      </div>
      <div className="flex items-center gap-4">
        <SignedIn>
          {user?.imageUrl && (
            <img src={user.imageUrl} alt="User Avatar" className="h-9 w-9 rounded-full border-2 border-blue-200 shadow-sm object-cover" />
          )}
          <span className="text-gray-600 font-medium hidden sm:block">Welcome, {user?.firstName || user?.username || user?.emailAddress}!</span>
          <button onClick={handleLogout} className="ml-4 bg-red-500 text-white px-4 py-1.5 rounded-lg font-semibold hover:bg-red-600 transition">Logout</button>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
