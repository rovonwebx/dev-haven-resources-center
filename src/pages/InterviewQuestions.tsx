import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Construction } from "lucide-react";

const InterviewQuestionsComingSoon = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background flex flex-col">
      {/* Simplified Header */}
      <header className="bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg sticky top-0 z-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl border border-primary/20 shadow-md">
                    <Target className="w-8 h-8 text-primary" />
                </div>
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">
                        Interview Questions Hub
                    </h1>
                    <p className="text-muted-foreground">Comprehensive SQL interview questions and answers.</p>
                </div>
            </div>
        </div>
      </header>
      
      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center text-center px-4 animate-fade-in">
        <div className="max-w-lg">
          <div className="flex justify-center mb-8">
            <div className="relative p-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full border-4 border-background shadow-2xl">
                <Construction className="w-20 h-20 text-primary animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight sm:text-6xl mb-6">
            Coming Soon!
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We are working hard to build this section. Stay tuned for a comprehensive collection of questions to help you ace your next technical and behavioral interviews.
          </p>
          
          <Button asChild className="bg-gradient-to-r from-primary to-accent hover:scale-105 text-primary-foreground font-bold py-4 px-8 rounded-full shadow-lg transition-transform">
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
