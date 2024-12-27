// components/Navbar.tsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-blue-500">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-blue-600 text-xl font-bold">
          <a href="/">LOGO</a>
        </div>
        
        {/* Navigation Links */}
        <div className="space-x-8 text-blue-600 font-medium hidden sm:flex">
          <a href="/bonds" className="hover:underline">
            All Bonds
          </a>
          <a href="/investments" className="hover:underline">
            My Investments
          </a>
          <a href="/loans" className="hover:underline">
            Apply For Loans
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
