// frontend/src/components/NavBar.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/Button'; // Shadcn button

const NavBar = () => {
    const { isAuthenticated, logout, user } = useAuth();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavigation = (path) => {
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="bg-gradient-to-r from-primary-700 via-primary-500 to-accent animate-gradient-x bg-[length:400%_400%] text-light sticky top-0 z-40 shadow-lg">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    {/* Logo/Brand */}
                    <Link
                        to="/"
                        className="text-2xl font-bold text-light hover:text-accent transition-colors duration-200"
                    >
                        QuizMaster
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden text-light hover:text-accent focus:outline-none"
                        aria-expanded={isMobileMenuOpen}
                        aria-label="Toggle navigation"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <Link to="/" className="hover:text-accent transition-colors duration-200">
                            Home
                        </Link>

                        {isAuthenticated ? (
                            <>
                                <Link to="/dashboard" className="hover:text-accent transition-colors duration-200">
                                    Dashboard
                                </Link>
                                {user?.role === 'admin' && (
                                    <Link to="/create-quiz" className="hover:text-accent transition-colors duration-200">
                                        Create Quiz
                                    </Link>
                                )}
                                <div className="flex items-center space-x-4">
                                    <span className="text-light">Hi, {user?.name || 'User'}</span>
                                    <Button
                                        onClick={handleLogout}
                                        className="bg-primary-500 hover:bg-primary-600 text-light px-4 py-2 rounded-lg transition-colors duration-200 font-semibold"
                                    >
                                        Logout
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="hover:text-accent transition-colors duration-200">
                                    Login
                                </Link>
                                <Button
                                    onClick={() => handleNavigation('/register')}
                                    className="bg-primary-500 hover:bg-primary-600 text-light px-4 py-2 rounded-lg transition-colors duration-200 font-semibold"
                                >
                                    Register
                                </Button>
                            </>
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4">
                        <div className="flex flex-col space-y-4">
                            <Link
                                to="/"
                                className="py-2 hover:text-accent transition-colors duration-200"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>

                            {isAuthenticated ? (
                                <>
                                    <Link
                                        to="/dashboard"
                                        className="py-2 hover:text-accent transition-colors duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Dashboard
                                    </Link>
                                    {user?.role === 'admin' && (
                                        <Link
                                            to="/create-quiz"
                                            className="py-2 hover:text-accent transition-colors duration-200"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Create Quiz
                                        </Link>
                                    )}
                                    <div className="pt-2 border-t border-primary-600">
                                        <span className="block py-2 text-light">Logged in as {user?.name || 'User'}</span>
                                        <Button
                                            onClick={handleLogout}
                                            className="w-full bg-primary-500 hover:bg-primary-600 text-light py-2 rounded-lg transition-colors duration-200 font-semibold"
                                        >
                                            Logout
                                        </Button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="py-2 hover:text-accent transition-colors duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Login
                                    </Link>
                                    <Button
                                        onClick={() => handleNavigation('/register')}
                                        className="w-full bg-primary-500 hover:bg-primary-600 text-light py-2 text-center rounded-lg transition-colors duration-200 font-semibold"
                                    >
                                        Register
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
