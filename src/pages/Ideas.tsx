
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Lightbulb, TrendingUp, Clock, Users } from "lucide-react";

const Ideas = () => {
  const ideas = [
    {
      title: "Smart Home Energy Optimizer",
      description: "AI-powered system that learns usage patterns and automatically optimizes energy consumption",
      category: "IoT & AI",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["IoT", "Machine Learning", "Energy", "Smart Home"],
      timeToMarket: "6-12 months",
      targetAudience: "Homeowners"
    },
    {
      title: "Code Review Assistant",
      description: "AI tool that provides intelligent code reviews, suggests improvements, and detects security vulnerabilities",
      category: "Developer Tools",
      marketPotential: "Very High",
      complexity: "High",
      tags: ["AI", "Code Analysis", "Security", "DevOps"],
      timeToMarket: "8-14 months",
      targetAudience: "Developers"
    },
    {
      title: "Virtual Study Buddy",
      description: "Platform connecting students for virtual study sessions with AI-powered matching and progress tracking",
      category: "EdTech",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["Education", "Social", "AI Matching", "Study"],
      timeToMarket: "4-8 months",
      targetAudience: "Students"
    },
    {
      title: "Sustainable Transport Router",
      description: "App that finds the most eco-friendly route combinations including public transport, bike-sharing, and walking",
      category: "GreenTech",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["Sustainability", "Transportation", "Mobile", "APIs"],
      timeToMarket: "3-6 months",
      targetAudience: "Eco-conscious travelers"
    },
    {
      title: "Mental Health Companion",
      description: "AI-powered mental health support app with mood tracking, personalized insights, and professional connections",
      category: "HealthTech",
      marketPotential: "Very High",
      complexity: "High",
      tags: ["Mental Health", "AI", "Healthcare", "Privacy"],
      timeToMarket: "12-18 months",
      targetAudience: "General public"
    },
    {
      title: "Local Skill Exchange Platform",
      description: "Community platform where people can trade skills and services without money, using a credit system",
      category: "Social Impact",
      marketPotential: "Medium",
      complexity: "Low",
      tags: ["Community", "Skills", "Barter", "Local"],
      timeToMarket: "2-4 months",
      targetAudience: "Local communities"
    }
  ];

  const getMarketPotentialColor = (potential: string) => {
    switch (potential) {
      case "Very High": return "bg-green-100 text-green-800";
      case "High": return "bg-yellow-100 text-yellow-800";
      case "Medium": return "bg-orange-100 text-orange-800";
      case "Low": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Low": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "High": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Hub
                </Link>
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Ideas</h1>
                <p className="text-gray-600 mt-1">Innovation concepts and startup ideas</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ideas.map((idea, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-gray-900 flex-1">
                    <Lightbulb className="w-5 h-5 inline mr-2 text-yellow-500" />
                    {idea.title}
                  </CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {idea.category}
                  </Badge>
                </div>
                <p className="text-gray-700">{idea.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {idea.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                      <span className="text-sm font-medium">Market Potential</span>
                    </div>
                    <Badge className={getMarketPotentialColor(idea.marketPotential)}>
                      {idea.marketPotential}
                    </Badge>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 mr-2 text-blue-500" />
                      <span className="text-sm font-medium">Complexity</span>
                    </div>
                    <Badge className={getComplexityColor(idea.complexity)}>
                      {idea.complexity}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {idea.timeToMarket}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {idea.targetAudience}
                  </div>
                </div>

                <Button className="w-full" variant="outline">
                  Explore This Idea
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Idea Generation Tips */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Idea Generation Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Problem Identification</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Look for everyday frustrations</li>
                    <li>• Identify market gaps</li>
                    <li>• Study emerging technologies</li>
                    <li>• Analyze user feedback</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Solution Development</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Start with MVP concepts</li>
                    <li>• Validate with potential users</li>
                    <li>• Research competition</li>
                    <li>• Plan monetization strategy</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Ideas;
