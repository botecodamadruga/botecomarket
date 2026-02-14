import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 navbar-glass px-6 py-4 flex justify-start items-center">
      <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-lg bg-[#101010] border border-[#1E1E1E]">
        <img 
          src="https://i.imgur.com/AF20B4i.png" 
          alt="Boteco Logo" 
          className="w-full h-full object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;