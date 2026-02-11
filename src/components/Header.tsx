import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Departments', path: '/departments' },
        { name: 'Pastors', path: '/pastors' },
        { name: 'Sermons', path: '/sermons' },
        { name: 'Events', path: '/events' },
    ];

    const isActive = (path: string) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <header className="sticky top-0 z-50 bg-stone-50/80 backdrop-blur-md shadow-md transition-all">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo & Title */}
                    <Link to="/" className="flex items-center space-x-3">
                        <div className="h-12 w-12 bg-white rounded-full p-1 shadow-sm border border-red-100 flex items-center justify-center">
                            <img
                                src={logo}
                                alt="AIC Logo"
                                className="h-14 w-14 object-contain brightness-110"
                            />
                        </div>
                        <span className="font-serif font-bold text-2xl text-stone-700 md:block hidden">AIC KAPSERET FELLOWSHIP</span>
                        <span className="font-serif font-bold text-xl text-stone-700 md:hidden block">AIC KAPSERET FELLOWSHIP</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-semibold transition-colors duration-200 ${isActive(link.path)
                                    ? 'text-red-600 underline underline-offset-4 decoration-2'
                                    : 'text-blue-950 hover:text-red-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-blue-950 hover:text-red-600 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-stone-50 border-t border-stone-200 animate-fade-in">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                    ? 'text-red-600 bg-amber-50'
                                    : 'text-blue-950 hover:text-red-600 hover:bg-stone-100'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
