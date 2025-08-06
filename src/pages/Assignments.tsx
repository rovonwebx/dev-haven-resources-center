import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Clock, Users, Award, Calendar, Target, Zap } from "lucide-react";

const Assignments = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Assignments", icon: BookOpen },
    { id: "programming", name: "Programming", icon: Zap },
    { id: "mathematics", name: "Mathematics", icon: Target },
    { id: "algorithms", name: "Algorithms", icon: Award },
    { id: "databases", name: "Databases", icon: Users },
  ];

  const upcomingFeatures = [
    {
      title: "Interactive Coding Assignments",
      description: "Browser-based coding environment with automatic testing and feedback",
      category: "programming",
      difficulty: "All Levels",
      eta: "Coming Soon"
    },
    {
      title: "Mathematical Problem Sets",
      description: "Step-by-step solutions for calculus, linear algebra, and discrete mathematics",
      category: "mathematics", 
      difficulty: "Intermediate",
      eta: "Coming Soon"
    },
    {
      title: "Algorithm Design Challenges",
      description: "Complex algorithmic problems with visual explanations and optimizations",
      category: "algorithms",
      difficulty: "Advanced",
      eta: "Coming Soon"
    },
    {
      title: "Database Design Projects",
      description: "Real-world database schemas and query optimization exercises",
      category: "databases",
      difficulty: "Intermediate", 
      eta: "Coming Soon"
    },
    {
      title: "Group Collaboration Assignments",
      description: "Team-based projects with version control and peer review systems",
      category: "all",
      difficulty: "All Levels",
      eta: "Coming Soon"
    },
    {
      title: "Auto-Grading System",
      description: "Instant feedback and detailed performance analytics for all assignments",
      category: "all",
      difficulty: "All Levels",
      eta: "Coming Soon"
    }
  ];

  const filteredFeatures = selectedCategory === "all" 
    ? upcomingFeatures 
    : upcomingFeatures.filter(feature => feature.category === selectedCategory || feature.category === "all");

  const getDifficultyBadge = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-900/90 text-green-100 border border-green-600/50";
      case "Intermediate": return "bg-yellow-900/90 text-yellow-100 border border-yellow-600/50";
      case "Advanced": return "bg-red-900/90 text-red-100 border border-red-600/50";
      default: return "bg-blue-900/90 text-blue-100 border border-blue-600/50";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-950/40 via-purple-950/40 to-cyan-950/40 border-b border-neutral-800/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            to="/"
            className="inline-flex items-center text-neutral-300 hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Assignments Hub
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Practice assignments and problem sets for various subjects - launching soon with comprehensive learning support
            </p>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200
                  ${selectedCategory === category.id 
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25" 
                    : "border-neutral-700 text-neutral-300 hover:border-neutral-600 hover:bg-neutral-800/50"
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Coming Soon Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredFeatures.map((feature, index) => (
            <Card key={index} className="bg-neutral-900/50 border-neutral-800/50 hover:border-neutral-700/50 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Badge className={getDifficultyBadge(feature.difficulty)}>
                    {feature.difficulty}
                  </Badge>
                  <Badge className="bg-amber-900/90 text-amber-100 border border-amber-600/50">
                    <Clock className="w-3 h-3 mr-1" />
                    {feature.eta}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-neutral-900/80 to-neutral-800/80 rounded-2xl p-12 border border-neutral-700/50">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">
              Revolutionary Assignment Platform Coming Soon
            </h2>
            <p className="text-neutral-300 mb-8 text-lg leading-relaxed">
              We're building the most comprehensive assignment platform with interactive coding environments, 
              automatic grading, collaborative features, and personalized learning paths. Stay tuned for updates!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 shadow-lg shadow-blue-500/25">
                <Calendar className="w-4 h-4 mr-2" />
                Get Notified on Launch
              </Button>
              <Button variant="outline" className="border-neutral-600 text-neutral-300 hover:bg-neutral-800 px-8 py-3 rounded-full font-medium">
                Explore Other Resources
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;