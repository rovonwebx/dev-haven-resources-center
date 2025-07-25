import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Construction } from "lucide-react"; // Updated icons

// The extensive question data and tab configuration have been removed.

const InterviewQuestions = () => {
  // State management and data mapping logic are no longer needed.

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* --- HEADER (Unchanged) --- */}
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
                    <p className="text-gray-500 dark:text-gray-400">
                        Your one-stop destination for interview preparation.
                    </p>
                </div>
            </div>
            <Button variant="outline" size="sm" asChild className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                <Link to="/"><ArrowLeft className="w-4 h-4 mr-2" />Back to Home</Link>
            </Button>
        </div>
      </header>
      
      {/* --- MAIN CONTENT (Updated to "Coming Soon") --- */}
      <main className="flex-1 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-center">
        <Card className="w-full max-w-2xl text-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-8">
            <CardHeader>
                <div className="mx-auto bg-yellow-100 dark:bg-yellow-900/50 rounded-full p-4 w-fit mb-4">
                    <Construction className="w-12 h-12 text-yellow-500 dark:text-yellow-400" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                    Coming Soon!
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                    We are working hard to curate the best collection of interview questions for you.
                </p>
                <p className="mt-2 text-md text-gray-500 dark:text-gray-500">
                    This section will be packed with questions on SQL, DSA, System Design, and more. Please check back later!
                </p>
            </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default InterviewQuestions;
