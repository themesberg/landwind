import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-400 shadow-md sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold tracking-wide hover:text-white">
            NUEATECH COMPANY LIMITED
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} className={({ isActive }) => navStyle(isActive)}>
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none text-2xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-blue-500">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeMenu}
              className={({ isActive }) => navStyleMobile(isActive)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

const navLinks = [
  { to: '/', label: 'หน้าแรก' },
  { to: '/about', label: 'เกี่ยวกับเรา' },
  { to: '/team', label: 'ทีมงาน' },
  { to: '/services', label: 'บริการของเรา' },
  { to: '/portfolio', label: 'ผลงาน' },
//   { to: '/testimonials', label: 'รีวิว' },
  { to: '/blog', label: 'บทความ' },
  { to: '/careers', label: 'สมัครงาน' },
  { to: '/contact', label: 'ติดต่อเรา' },
];

const navStyle = (isActive: boolean) =>
  `px-4 py-2 rounded transition-all duration-200 ease-in-out text-sm font-medium hover:bg-white/10 ${
    isActive ? 'bg-white/20 font-semibold' : 'text-white'
  }`;

const navStyleMobile = (isActive: boolean) =>
  `block px-4 py-2 rounded-md text-base ${
    isActive ? 'bg-white/20 font-semibold' : 'text-white hover:bg-white/10'
  }`;

export default Navbar;
