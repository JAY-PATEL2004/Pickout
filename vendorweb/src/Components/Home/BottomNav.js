import React from 'react';
import { FaUser, FaHome, FaLanguage } from 'react-icons/fa';

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 w-full bg-black text-white py-3 flex justify-around rounded-t-lg">
      <button>
        <FaUser size={24} />
        <span className="text-xs">Profile</span>
      </button>
      <button>
        <FaHome size={24} />
        <span className="text-xs">Home</span>
      </button>
      <button>
        <FaLanguage size={24} />
        <span className="text-xs">Language</span>
      </button>
    </div>
  );
};

export default BottomNav;
