import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Construction } from "lucide-react";

const InterviewQuestionsComingSoon = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Simplified Header */}
      <header className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm sticky top-0 z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                    <Target className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
                        Interview Questions Hub
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">Your one-stop destination for interview preparation.</p>
                </div>
            </div>
        </div>
      </header>
      
      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center text-center px-4">
        <div className="max-w-lg">
          <div className="flex justify-center mb-6">
            <div className="relative p-5 bg-orange-100 dark:bg-orange-900/50 rounded-full border-4 border-white dark:border-gray-800 shadow-lg">
                <Construction className="w-16 h-16 text-orange-500 animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-5xl">
            Coming Soon!
          </h2>
          
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            We are working hard to build this section. Stay tuned for a comprehensive collection of questions to help you ace your next technical and behavioral interviews.
          </p>
          
          <Button asChild className="mt-8 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
            <Link to="/">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back Home
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default InterviewQuestionsComingSoon;
