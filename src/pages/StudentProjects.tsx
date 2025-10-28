import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Users, PlusCircle, FolderGit2, ExternalLink, Award, Server } from "lucide-react";
import StudentProjects from "@/components/StudentProjects"; // This component contains the project grid
import clsx from 'clsx';
import { Analytics } from '@vercel/analytics/react';

const StudentProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Development", "AI/ML", "Mobile", "Blockchain", "DevOps"];

  const featuredProject = {
    title: "AI-Powered Financial Forecaster",
    author: "Jane Doe & Team",
    description: "A web app using machine learning to predict stock market trends with an interactive data visualization dashboard.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    githubUrl: "#",
    liveDemoUrl: "#",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col font-sans text-gray-900">
      <Analytics />

      {/* Consistent Header */}
      <header className="sticky top-0 w-full border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-xl z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                    <Server className="w-6 h-6 text-white" />
                </div>
                <div className="hidden sm:block">
                    <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Center of Knowledge & Resources</h1>
                    <p className="text-xs text-neutral-400 font-medium tracking-wider uppercase">Professional Resource Hub</p>
                </div>
            </Link>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" asChild className="text-neutral-300 hover:bg-neutral-800 hover:text-white">
                    <Link to="/">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Hub
                    </Link>
                </Button>
                <a href="https://dhrc-tools.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-4 py-2 rounded-lg transition-all">Access Portal</Button>
                </a>
            </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 w-full pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 flex items-center justify-center gap-4">
                  <Users className="w-10 h-10 text-blue-400" />
                  Student Project Showcase
                </h2>
                <p className="mt-4 text-lg text-neutral-400 max-w-3xl mx-auto">
                    Discover innovative projects built by students and developers. Use the filters to find your next inspiration!
                </p>
            </div>

            {/* --- Restyled Filter Tabs --- */}
            <div className="flex justify-center flex-wrap gap-3 mb-12">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={clsx(
                            'px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 focus:ring-blue-500',
                            selectedCategory === category
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white'
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* --- Featured Project Section --- */}
            {selectedCategory === "All" && (
                <section className="mb-16">
                     <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                        <Award className="text-blue-400"/> Project of the Week
                    </h3>
                    <Card className="bg-neutral-900 overflow-hidden rounded-xl border border-neutral-800 md:grid md:grid-cols-2 shadow-2xl shadow-blue-900/20">
                        <div className="p-8 flex flex-col justify-center">
                            <h4 className="text-2xl font-bold text-white">{featuredProject.title}</h4>
                            <p className="text-sm text-neutral-400 mt-2">by {featuredProject.author}</p>
                            <p className="mt-4 text-neutral-300 leading-relaxed">{featuredProject.description}</p>
                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <Button asChild size="lg" className="bg-neutral-200 text-black hover:bg-white font-semibold">
                                  <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <FolderGit2 className="w-4 h-4 mr-2"/> View Code
                                  </a>
                                </Button>
                                <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 font-semibold">
                                  <a href={featuredProject.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4 mr-2"/> Live Demo
                                  </a>
                                </Button>
                            </div>
                        </div>
                        <img src={featuredProject.imageUrl} alt={featuredProject.title} className="w-full h-64 md:h-full object-cover"/>
                    </Card>
                </section>
            )}
            
            <h3 className="text-2xl font-semibold text-white mb-6">
                {selectedCategory === "All" ? "All Projects" : `${selectedCategory} Projects`}
            </h3>
            {/* The StudentProjects component should render cards matching the dark theme */}
            <StudentProjects />

            {/* --- Call-to-Action Sections --- */}
            <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-blue-900/70 via-neutral-900 to-neutral-900 border border-blue-800/50 shadow-lg text-center p-8 flex flex-col items-center">
                    <PlusCircle className="w-12 h-12 text-blue-400 mb-4"/>
                    <h3 className="font-bold text-xl text-white">Share Your Work</h3>
                    <p className="text-neutral-400 mt-2 mb-4 flex-grow">
                        Contribute to our library, showcase your skills, and inspire others in the community.
                    </p>
                    <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 font-bold rounded-lg w-full mt-auto">
                        <Link to="/submit-project">Submit Your Project</Link>
                    </Button>
                </Card>
                <Card className="bg-neutral-900 border border-neutral-800 text-center p-8 flex flex-col items-center">
                    <FolderGit2 className="w-12 h-12 text-neutral-400 mb-4"/>
                    <h3 className="font-bold text-xl text-white">Access the Project Manager</h3>
                    <p className="text-neutral-400 mt-2 mb-4 flex-grow">
                        Explore the public repository and manage your submissions on the DHRC Tools platform.
                    </p>
                    <Button asChild size="lg" variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white rounded-lg w-full mt-auto">
                        <a href="https://dhrc-tools.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2"/> Go to Manager
                        </a>
                    </Button>
                </Card>
            </section>
        </div>
      </main>

       {/* Consistent Footer */}
      <footer className="bg-neutral-900 border-t border-neutral-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
                <p className="text-sm text-neutral-500">
                    © {new Date().getFullYear()} Center of Knowledge & Resources - All Rights Reserved.
                </p>
                <div className="flex justify-center space-x-6 text-sm mt-4">
                    <Link to="/terms-of-service" className="text-neutral-500 hover:text-blue-400 transition-colors">Terms of Service</Link>
                    <Link to="/privacy-policy" className="text-neutral-500 hover:text-blue-400 transition-colors">Privacy Policy</Link>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default StudentProjectsPage;
