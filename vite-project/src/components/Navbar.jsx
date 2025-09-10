import React, { useState } from "react";
import { Clock, Mail, Phone, ChevronDown, Search, Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom"; // ✅ React Router Link import

export default function Navbar() {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [pagesOpen, setPagesOpen] = useState(false);
    const [blogOpen, setBlogOpen] = useState(false);

    const activeClass = "text-blue-600 font-semibold";
    const normalClass = "text-gray-800 hover:text-blue-600";

    return (
        <header className="w-full">
            {/* 🔹 Top Info Bar */}
            <div className="bg-blue-900 text-white text-sm py-2">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
                    <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-white" />
                        <span>Mon - Fri 8.00 am - 6.00 pm</span>
                    </div>
                    <div className="hidden md:block">
                        <span>Welcome Mediket hospital and doctors appointment services</span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-1">
                            <Mail className="w-4 h-4 text-green-400" />
                            <span>info@example.com</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Phone className="w-4 h-4 text-yellow-300" />
                            <span>+208-6666-0112</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 🔹 Main Navbar */}
            <div className="flex w-full">
                <div className="bg-blue-600 px-6 py-4 flex items-center space-x-2">
                    <img 
                        src="/images/logo-white.svg"
                        alt="Logo"
                        className="h-10 w-auto object-contain"
                    />
                </div>

                <div className="flex-1 bg-white px-8 py-4 flex items-center space-x-8">
                    {/* HOME */}
                    <NavLink 
                        to="/"
                        className={({ isActive }) => isActive ? activeClass : normalClass}
                    >
                        HOME
                    </NavLink>

                    {/* ABOUT */}
                    <NavLink 
                        to="/about"
                        className={({ isActive }) => isActive ? activeClass : normalClass}
                    >
                        ABOUT
                    </NavLink>

                    {/* SERVICES Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-medium"
                        >
                            <span>SERVICES</span>
                            <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                            />
                        </button>
                        {servicesOpen && (
                            <div className="absolute left-0 bg-white shadow-lg rounded mt-2 w-48 z-50">
                                <Link
                                    to="/serviceslayout2"
                                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                >
                                    Services Layout 2
                                </Link>
                                <Link
                                    to="/servicesdetails"
                                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                >
                                    Services Details
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* PAGES Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setPagesOpen(!pagesOpen)}
                            className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-medium"
                        >
                            <span>PAGES</span>
                            <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${pagesOpen ? "rotate-180" : ""}`}
                            />
                        </button>
                        {pagesOpen && (
                            <div className="absolute left-0 bg-white shadow-lg rounded mt-2 w-48 z-50">
                                <Link
                                    to="/pages/team"
                                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                >
                                    Team
                                </Link>
                                <Link
                                    to="/pages/team-details"
                                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                >
                                    Team Details
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* BLOG Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setBlogOpen(!blogOpen)}
                            className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-medium"
                        >
                            <span>BLOG</span>
                            <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${blogOpen ? "rotate-180" : ""}`}
                            />
                        </button>
                        {blogOpen && (
                            <div className="absolute left-0 bg-white shadow-lg rounded mt-2 w-48 z-50">
                                <Link
                                    to="/blog/grid"
                                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                >
                                    Blog Grid
                                </Link>
                                <Link
                                    to="/blog/details"
                                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                >
                                    Blog Details
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* CONTACT */}
                    <NavLink 
                        to="/contact"
                        className={({ isActive }) => isActive ? activeClass : normalClass}
                    >
                        CONTACT
                    </NavLink>

                    {/* Book Appointment Button */}
                    <Link 
                        to="/appointment"
                        className="bg-lime-300 hover:bg-lime-400 text-gray-800 px-6 py-2 rounded font-semibold flex items-center space-x-2 ml-auto"
                    >
                        <span>BOOK A APPOINTMENT</span>
                        <span>↗</span>
                    </Link>
                </div>

                <div className="bg-blue-900 px-6 py-4 flex items-center space-x-2">
                    <button className="p-2 hover:bg-blue-800 rounded">
                        <Search className="h-5 w-5 text-white" />
                    </button>
                    <button className="p-2 hover:bg-blue-800 rounded">
                        <Menu className="h-5 w-5 text-white" />
                    </button>
                </div>
            </div>
        </header>
    );
}
