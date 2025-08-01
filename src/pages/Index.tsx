import React from "react";
import { Github, Linkedin, Twitter, ServerCrash } from 'lucide-react';
import { Link } from "react-router-dom"; // Ensure Link is imported

// A simple component for the notification banner
const MaintenanceNotification = () => (
    <div className="w-full bg-red-600 text-white text-center py-2.5 px-4 shadow-lg z-10">
        <p className="text-sm font-semibold">
            <strong>Notice:</strong> This site is currently undergoing scheduled maintenance to improve our services.
        </p>
    </div>
);

const MaintenancePage = () => {
    return (
        // The main container is a flex column to place the banner at the top
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col font-sans">
            {/* Add the notification banner here */}
            <MaintenanceNotification />

            {/* This container will grow to fill the remaining space and center the content */}
            <div className="flex-grow flex flex-col items-center justify-center text-center px-4 py-8">
                <div className="max-w-lg w-full">
                    <div className="mb-8">
                        <ServerCrash className="mx-auto h-24 w-24 text-orange-500" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">
                        Under Maintenance
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                        We are working hard to bring you an improved experience. We'll be back online shortly. Thank you for your patience!
                    </p>

                    <div className="bg-orange-100 dark:bg-gray-800 border-l-4 border-orange-500 text-orange-700 dark:text-orange-300 p-4 rounded-md mb-8 text-left">
                        <p className="font-bold">Estimated Completion:</p>
                        <p>We expect to be back online within the next few hours.</p>
                    </div>
                    
                    <div>
                        <h3 className="font-bold text-gray-800 dark:text-gray-200 tracking-wider uppercase mb-4">
                            Stay Connected
                        </h3>
                        <div className="flex space-x-6 justify-center">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                                <Github size={28} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                                <Linkedin size={28} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                                <Twitter size={28} />
                            </a>
                        </div>
                    </div>

                    {/* Footer Section */}
                    <footer className="mt-16 text-sm text-gray-500 dark:text-gray-600">
                        {/* Links to available pages, styled as text */}
                        <div className="mb-6">
                            <p className="font-semibold text-gray-700 dark:text-gray-300 mb-3">You can still access:</p>
                            <div className="flex justify-center items-center space-x-6">
                                <Link 
                                    to="/campus-notes" 
                                    className="font-medium text-orange-600 dark:text-orange-400 hover:underline"
                                >
                                    Campus Notes
                                </Link>
                                <span className="text-gray-400 dark:text-gray-600">|</span>
                                <Link 
                                    to="/templates" 
                                    className="font-medium text-orange-600 dark:text-orange-400 hover:underline"
                                >
                                    Templates
                                </Link>
                            </div>
                        </div>
                        
                        {/* Copyright notice */}
                        <p>© {new Date().getFullYear()} CKR - Center for Knowledge & Resources. All Rights Reserved.</p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default MaintenancePage;
