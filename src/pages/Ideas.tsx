
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Lightbulb, TrendingUp, Clock, Users, Search, Github, ExternalLink } from "lucide-react";
import { useState, useMemo } from "react";

const Ideas = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const ideas = [
    {
      title: "Smart Home Energy Optimizer",
      description: "AI-powered system that learns usage patterns and automatically optimizes energy consumption",
      category: "IoT & AI",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["IoT", "Machine Learning", "Energy", "Smart Home"],
      timeToMarket: "6-12 months",
      targetAudience: "Homeowners",
      cardColor: "bg-gradient-to-br from-blue-500 to-blue-700",
      textColor: "text-white"
    },
    {
      title: "Code Review Assistant",
      description: "AI tool that provides intelligent code reviews, suggests improvements, and detects security vulnerabilities",
      category: "Developer Tools",
      marketPotential: "Very High",
      complexity: "High",
      tags: ["AI", "Code Analysis", "Security", "DevOps"],
      timeToMarket: "8-14 months",
      targetAudience: "Developers",
      cardColor: "bg-gradient-to-br from-purple-500 to-purple-700",
      textColor: "text-white"
    },
    {
      title: "Virtual Study Buddy",
      description: "Platform connecting students for virtual study sessions with AI-powered matching and progress tracking",
      category: "EdTech",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["Education", "Social", "AI Matching", "Study"],
      timeToMarket: "4-8 months",
      targetAudience: "Students",
      cardColor: "bg-gradient-to-br from-green-500 to-green-700",
      textColor: "text-white"
    },
    {
      title: "Sustainable Transport Router",
      description: "App that finds eco-friendly route combinations including public transport, bike-sharing, and walking",
      category: "GreenTech",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["Sustainability", "Transportation", "Mobile", "APIs"],
      timeToMarket: "3-6 months",
      targetAudience: "Eco-conscious travelers",
      cardColor: "bg-gradient-to-br from-emerald-500 to-emerald-700",
      textColor: "text-white"
    },
    {
      title: "Mental Health Companion",
      description: "AI-powered mental health support app with mood tracking, personalized insights, and professional connections",
      category: "HealthTech",
      marketPotential: "Very High",
      complexity: "High",
      tags: ["Mental Health", "AI", "Healthcare", "Privacy"],
      timeToMarket: "12-18 months",
      targetAudience: "General public",
      cardColor: "bg-gradient-to-br from-pink-500 to-pink-700",
      textColor: "text-white"
    },
    {
      title: "Local Skill Exchange Platform",
      description: "Community platform where people can trade skills and services without money, using a credit system",
      category: "Social Impact",
      marketPotential: "Medium",
      complexity: "Low",
      tags: ["Community", "Skills", "Barter", "Local"],
      timeToMarket: "2-4 months",
      targetAudience: "Local communities",
      cardColor: "bg-gradient-to-br from-orange-500 to-orange-700",
      textColor: "text-white"
    },
    {
      title: "AR Interior Designer",
      description: "Augmented reality app for visualizing furniture and decor in real spaces before purchasing",
      category: "AR/VR",
      marketPotential: "High",
      complexity: "High",
      tags: ["AR", "Interior Design", "E-commerce", "3D"],
      timeToMarket: "10-15 months",
      targetAudience: "Homeowners",
      cardColor: "bg-gradient-to-br from-red-500 to-red-700",
      textColor: "text-white"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure, transparent voting platform using blockchain technology for elections and polls",
      category: "Blockchain",
      marketPotential: "Very High",
      complexity: "Very High",
      tags: ["Blockchain", "Security", "Democracy", "Transparency"],
      timeToMarket: "18-24 months",
      targetAudience: "Government & Organizations",
      cardColor: "bg-gradient-to-br from-indigo-500 to-indigo-700",
      textColor: "text-white"
    },
    {
      title: "Voice-Controlled Recipe Assistant",
      description: "Smart kitchen companion that guides cooking with voice commands and ingredient recognition",
      category: "IoT",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["Voice AI", "Cooking", "Smart Kitchen", "IoT"],
      timeToMarket: "6-10 months",
      targetAudience: "Home cooks",
      cardColor: "bg-gradient-to-br from-yellow-500 to-yellow-700",
      textColor: "text-white"
    },
    {
      title: "Personal Finance AI Coach",
      description: "AI-driven financial advisor that analyzes spending patterns and provides personalized money management tips",
      category: "FinTech",
      marketPotential: "Very High",
      complexity: "High",
      tags: ["AI", "Finance", "Budgeting", "Investment"],
      timeToMarket: "8-12 months",
      targetAudience: "Young professionals",
      cardColor: "bg-gradient-to-br from-teal-500 to-teal-700",
      textColor: "text-white"
    },
    {
      title: "Pet Health Monitor",
      description: "Wearable device and app to track pet vital signs, activity, and health metrics",
      category: "PetTech",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["IoT", "Health", "Pets", "Wearables"],
      timeToMarket: "8-12 months",
      targetAudience: "Pet owners",
      cardColor: "bg-gradient-to-br from-cyan-500 to-cyan-700",
      textColor: "text-white"
    },
    {
      title: "Language Exchange VR",
      description: "Virtual reality platform for immersive language learning through conversation with native speakers",
      category: "EdTech",
      marketPotential: "High",
      complexity: "High",
      tags: ["VR", "Language Learning", "Social", "Education"],
      timeToMarket: "12-18 months",
      targetAudience: "Language learners",
      cardColor: "bg-gradient-to-br from-violet-500 to-violet-700",
      textColor: "text-white"
    },
    {
      title: "Micro-Investment Game",
      description: "Gamified investment platform teaching financial literacy through small, real investments",
      category: "FinTech",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["Gaming", "Investment", "Education", "Finance"],
      timeToMarket: "6-9 months",
      targetAudience: "Young adults",
      cardColor: "bg-gradient-to-br from-rose-500 to-rose-700",
      textColor: "text-white"
    },
    {
      title: "Smart Garden Assistant",
      description: "IoT system monitoring soil, weather, and plant health with automated watering and care recommendations",
      category: "AgriTech",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["IoT", "Agriculture", "Automation", "Sustainability"],
      timeToMarket: "5-8 months",
      targetAudience: "Garden enthusiasts",
      cardColor: "bg-gradient-to-br from-lime-500 to-lime-700",
      textColor: "text-white"
    },
    {
      title: "Mood-Based Music Generator",
      description: "AI that creates personalized music based on detected emotions and environmental factors",
      category: "AI & Music",
      marketPotential: "Medium",
      complexity: "High",
      tags: ["AI", "Music", "Emotion Detection", "Personalization"],
      timeToMarket: "10-14 months",
      targetAudience: "Music lovers",
      cardColor: "bg-gradient-to-br from-amber-500 to-amber-700",
      textColor: "text-white"
    },
    {
      title: "Collaborative Workspace VR",
      description: "Virtual reality platform for remote teams to collaborate in shared 3D workspaces",
      category: "Remote Work",
      marketPotential: "Very High",
      complexity: "Very High",
      tags: ["VR", "Collaboration", "Remote Work", "3D"],
      timeToMarket: "15-20 months",
      targetAudience: "Remote teams",
      cardColor: "bg-gradient-to-br from-slate-500 to-slate-700",
      textColor: "text-white"
    },
    {
      title: "Habit Formation Tracker",
      description: "Psychology-based app using behavioral science to help users build and maintain healthy habits",
      category: "Wellness",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["Psychology", "Habits", "Wellness", "Gamification"],
      timeToMarket: "4-7 months",
      targetAudience: "Self-improvement seekers",
      cardColor: "bg-gradient-to-br from-emerald-400 to-emerald-600",
      textColor: "text-white"
    },
    {
      title: "AI-Powered Resume Builder",
      description: "Intelligent resume creation tool that adapts content based on job descriptions and industry trends",
      category: "Career Tools",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["AI", "Career", "Resume", "Job Search"],
      timeToMarket: "3-6 months",
      targetAudience: "Job seekers",
      cardColor: "bg-gradient-to-br from-blue-400 to-blue-600",
      textColor: "text-white"
    },
    {
      title: "Smart Wardrobe Assistant",
      description: "AI-powered closet organizer that suggests outfits based on weather, events, and personal style",
      category: "Fashion Tech",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["AI", "Fashion", "Style", "Weather"],
      timeToMarket: "6-9 months",
      targetAudience: "Fashion conscious",
      cardColor: "bg-gradient-to-br from-purple-400 to-purple-600",
      textColor: "text-white"
    },
    {
      title: "Neighborhood Safety Network",
      description: "Community-driven platform for sharing safety information and coordinating neighborhood watch activities",
      category: "Safety",
      marketPotential: "Medium",
      complexity: "Low",
      tags: ["Community", "Safety", "Social", "Location"],
      timeToMarket: "3-5 months",
      targetAudience: "Local communities",
      cardColor: "bg-gradient-to-br from-red-400 to-red-600",
      textColor: "text-white"
    },
    {
      title: "Elderly Care Companion",
      description: "AI companion app for elderly users providing medication reminders, emergency alerts, and social interaction",
      category: "HealthTech",
      marketPotential: "Very High",
      complexity: "High",
      tags: ["Healthcare", "AI", "Elderly Care", "Emergency"],
      timeToMarket: "10-15 months",
      targetAudience: "Elderly & families",
      cardColor: "bg-gradient-to-br from-pink-400 to-pink-600",
      textColor: "text-white"
    },
    {
      title: "Event Planning Assistant",
      description: "Comprehensive platform for planning events with vendor matching, budget tracking, and timeline management",
      category: "Event Management",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["Events", "Planning", "Budget", "Vendor Management"],
      timeToMarket: "5-8 months",
      targetAudience: "Event planners",
      cardColor: "bg-gradient-to-br from-orange-400 to-orange-600",
      textColor: "text-white"
    },
    {
      title: "Skill Assessment Platform",
      description: "AI-driven platform for evaluating technical and soft skills through interactive challenges and simulations",
      category: "HR Tech",
      marketPotential: "High",
      complexity: "High",
      tags: ["AI", "Skills", "Assessment", "HR"],
      timeToMarket: "8-12 months",
      targetAudience: "HR departments",
      cardColor: "bg-gradient-to-br from-teal-400 to-teal-600",
      textColor: "text-white"
    },
    {
      title: "Local Food Discovery",
      description: "App connecting users with local food producers, farmers markets, and authentic regional cuisine",
      category: "Food Tech",
      marketPotential: "Medium",
      complexity: "Low",
      tags: ["Food", "Local", "Discovery", "Community"],
      timeToMarket: "3-6 months",
      targetAudience: "Food enthusiasts",
      cardColor: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      textColor: "text-white"
    },
    {
      title: "Meditation Space Finder",
      description: "Platform for finding and booking quiet spaces for meditation, yoga, and mindfulness practices",
      category: "Wellness",
      marketPotential: "Medium",
      complexity: "Low",
      tags: ["Meditation", "Wellness", "Booking", "Mindfulness"],
      timeToMarket: "2-4 months",
      targetAudience: "Wellness seekers",
      cardColor: "bg-gradient-to-br from-indigo-400 to-indigo-600",
      textColor: "text-white"
    },
    {
      title: "Smart Water Quality Monitor",
      description: "IoT device and app for real-time monitoring of home water quality with health recommendations",
      category: "HealthTech",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["IoT", "Health", "Water Quality", "Monitoring"],
      timeToMarket: "6-10 months",
      targetAudience: "Health-conscious families",
      cardColor: "bg-gradient-to-br from-cyan-400 to-cyan-600",
      textColor: "text-white"
    },
    {
      title: "Virtual Art Gallery",
      description: "VR/AR platform for artists to showcase work in immersive digital galleries with social features",
      category: "Art & Culture",
      marketPotential: "Medium",
      complexity: "High",
      tags: ["VR", "AR", "Art", "Gallery", "Social"],
      timeToMarket: "8-12 months",
      targetAudience: "Artists & art lovers",
      cardColor: "bg-gradient-to-br from-violet-400 to-violet-600",
      textColor: "text-white"
    },
    {
      title: "Freelancer Project Matcher",
      description: "AI-powered platform matching freelancers with projects based on skills, availability, and preferences",
      category: "Gig Economy",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["AI", "Freelancing", "Matching", "Gig Economy"],
      timeToMarket: "4-7 months",
      targetAudience: "Freelancers & businesses",
      cardColor: "bg-gradient-to-br from-rose-400 to-rose-600",
      textColor: "text-white"
    },
    {
      title: "Sleep Optimization Coach",
      description: "Comprehensive sleep tracking and improvement platform using environmental data and personal habits",
      category: "HealthTech",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["Sleep", "Health", "Tracking", "Optimization"],
      timeToMarket: "5-8 months",
      targetAudience: "Sleep-troubled individuals",
      cardColor: "bg-gradient-to-br from-slate-400 to-slate-600",
      textColor: "text-white"
    },
    {
      title: "Carbon Footprint Gamifier",
      description: "Gamified app for tracking and reducing personal carbon footprint with community challenges",
      category: "Sustainability",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["Sustainability", "Gaming", "Carbon", "Community"],
      timeToMarket: "4-6 months",
      targetAudience: "Environmentally conscious",
      cardColor: "bg-gradient-to-br from-green-400 to-green-600",
      textColor: "text-white"
    },
    {
      title: "Remote Team Building Hub",
      description: "Platform offering virtual team building activities, games, and collaboration exercises",
      category: "Remote Work",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["Remote Work", "Team Building", "Games", "Collaboration"],
      timeToMarket: "3-5 months",
      targetAudience: "Remote teams",
      cardColor: "bg-gradient-to-br from-amber-400 to-amber-600",
      textColor: "text-white"
    },
    {
      title: "AI Recipe Optimizer",
      description: "Smart cooking assistant that optimizes recipes based on available ingredients and dietary preferences",
      category: "Food Tech",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["AI", "Cooking", "Recipe", "Optimization"],
      timeToMarket: "4-7 months",
      targetAudience: "Home cooks",
      cardColor: "bg-gradient-to-br from-lime-400 to-lime-600",
      textColor: "text-white"
    },
    {
      title: "Digital Detox Companion",
      description: "App helping users reduce screen time through mindful usage tracking and alternative activity suggestions",
      category: "Digital Wellness",
      marketPotential: "Medium",
      complexity: "Low",
      tags: ["Digital Wellness", "Screen Time", "Mindfulness", "Health"],
      timeToMarket: "2-4 months",
      targetAudience: "Digital wellness seekers",
      cardColor: "bg-gradient-to-br from-emerald-300 to-emerald-500",
      textColor: "text-white"
    },
    {
      title: "Smart Parking Solution",
      description: "IoT-based parking management system with real-time availability tracking and reservation features",
      category: "Smart City",
      marketPotential: "High",
      complexity: "High",
      tags: ["IoT", "Smart City", "Parking", "Real-time"],
      timeToMarket: "8-12 months",
      targetAudience: "City planners & drivers",
      cardColor: "bg-gradient-to-br from-blue-300 to-blue-500",
      textColor: "text-white"
    },
    {
      title: "Volunteer Matching Platform",
      description: "Platform connecting volunteers with organizations based on skills, interests, and availability",
      category: "Social Impact",
      marketPotential: "Medium",
      complexity: "Low",
      tags: ["Volunteering", "Social Impact", "Matching", "Community"],
      timeToMarket: "3-5 months",
      targetAudience: "Volunteers & nonprofits",
      cardColor: "bg-gradient-to-br from-purple-300 to-purple-500",
      textColor: "text-white"
    },
    {
      title: "Language Pronunciation Coach",
      description: "AI-powered app for improving pronunciation using speech recognition and personalized feedback",
      category: "EdTech",
      marketPotential: "High",
      complexity: "High",
      tags: ["AI", "Language Learning", "Speech Recognition", "Education"],
      timeToMarket: "6-10 months",
      targetAudience: "Language learners",
      cardColor: "bg-gradient-to-br from-red-300 to-red-500",
      textColor: "text-white"
    },
    {
      title: "Sustainable Shopping Guide",
      description: "App scanning products to provide sustainability ratings and eco-friendly alternatives",
      category: "Sustainability",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["Sustainability", "Shopping", "Eco-friendly", "Scanner"],
      timeToMarket: "5-8 months",
      targetAudience: "Conscious consumers",
      cardColor: "bg-gradient-to-br from-green-300 to-green-500",
      textColor: "text-white"
    },
    {
      title: "Personal Brand Builder",
      description: "Comprehensive platform for building and managing personal brand across social media and professional networks",
      category: "Personal Development",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["Personal Branding", "Social Media", "Professional", "Content"],
      timeToMarket: "4-7 months",
      targetAudience: "Professionals & creators",
      cardColor: "bg-gradient-to-br from-orange-300 to-orange-500",
      textColor: "text-white"
    },
    {
      title: "Micro-Learning Platform",
      description: "Bite-sized learning platform delivering personalized educational content in 5-minute sessions",
      category: "EdTech",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["Education", "Micro-learning", "Personalization", "Mobile"],
      timeToMarket: "5-8 months",
      targetAudience: "Busy professionals",
      cardColor: "bg-gradient-to-br from-pink-300 to-pink-500",
      textColor: "text-white"
    },
    {
      title: "Smart Home Security Hub",
      description: "Integrated security system with AI-powered threat detection and automated response protocols",
      category: "Smart Home",
      marketPotential: "Very High",
      complexity: "High",
      tags: ["Smart Home", "Security", "AI", "Automation"],
      timeToMarket: "10-15 months",
      targetAudience: "Homeowners",
      cardColor: "bg-gradient-to-br from-teal-300 to-teal-500",
      textColor: "text-white"
    },
    {
      title: "Wellness Challenge Creator",
      description: "Platform for creating and participating in personalized wellness challenges with friends and community",
      category: "Wellness",
      marketPotential: "Medium",
      complexity: "Low",
      tags: ["Wellness", "Challenges", "Community", "Gamification"],
      timeToMarket: "3-5 months",
      targetAudience: "Health enthusiasts",
      cardColor: "bg-gradient-to-br from-yellow-300 to-yellow-500",
      textColor: "text-white"
    },
    {
      title: "AI Code Documentation",
      description: "Automated tool for generating comprehensive code documentation using AI analysis of codebases",
      category: "Developer Tools",
      marketPotential: "High",
      complexity: "High",
      tags: ["AI", "Documentation", "Code Analysis", "Developer Tools"],
      timeToMarket: "6-9 months",
      targetAudience: "Developers",
      cardColor: "bg-gradient-to-br from-indigo-300 to-indigo-500",
      textColor: "text-white"
    },
    {
      title: "Virtual Interior Design",
      description: "AI-powered interior design service offering personalized room makeovers through virtual consultations",
      category: "Design Tech",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["AI", "Interior Design", "Virtual", "Personalization"],
      timeToMarket: "6-10 months",
      targetAudience: "Homeowners",
      cardColor: "bg-gradient-to-br from-violet-300 to-violet-500",
      textColor: "text-white"
    },
    {
      title: "Fitness Form Checker",
      description: "AI-powered app using computer vision to analyze workout form and provide real-time corrections",
      category: "FitnesssTech",
      marketPotential: "High",
      complexity: "High",
      tags: ["AI", "Computer Vision", "Fitness", "Form Analysis"],
      timeToMarket: "8-12 months",
      targetAudience: "Fitness enthusiasts",
      cardColor: "bg-gradient-to-br from-rose-300 to-rose-500",
      textColor: "text-white"
    },
    {
      title: "Startup Idea Validator",
      description: "Platform for validating startup ideas through market research, competitor analysis, and user feedback",
      category: "Business Tools",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["Startup", "Validation", "Market Research", "Analysis"],
      timeToMarket: "4-6 months",
      targetAudience: "Entrepreneurs",
      cardColor: "bg-gradient-to-br from-cyan-300 to-cyan-500",
      textColor: "text-white"
    },
    {
      title: "Smart Study Scheduler",
      description: "AI-powered study planner that optimizes learning schedules based on retention patterns and deadlines",
      category: "EdTech",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["AI", "Education", "Scheduling", "Learning Optimization"],
      timeToMarket: "5-8 months",
      targetAudience: "Students",
      cardColor: "bg-gradient-to-br from-amber-300 to-amber-500",
      textColor: "text-white"
    },
    {
      title: "Community Garden Network",
      description: "Platform connecting community gardens with volunteers, resources, and knowledge sharing",
      category: "Community",
      marketPotential: "Low",
      complexity: "Low",
      tags: ["Community", "Gardening", "Volunteering", "Sustainability"],
      timeToMarket: "2-4 months",
      targetAudience: "Community gardeners",
      cardColor: "bg-gradient-to-br from-lime-300 to-lime-500",
      textColor: "text-white"
    },
    {
      title: "Expense Splitting Smart App",
      description: "Advanced expense splitting app with OCR receipt scanning, automatic categorization, and payment integration",
      category: "FinTech",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["Finance", "Expense Splitting", "OCR", "Payment"],
      timeToMarket: "4-6 months",
      targetAudience: "Groups & roommates",
      cardColor: "bg-gradient-to-br from-emerald-200 to-emerald-400",
      textColor: "text-gray-800"
    },
    {
      title: "Senior Tech Support",
      description: "Simplified tech support platform specifically designed for elderly users with patient, step-by-step guidance",
      category: "Accessibility",
      marketPotential: "High",
      complexity: "Low",
      tags: ["Accessibility", "Senior Citizens", "Tech Support", "Simplicity"],
      timeToMarket: "3-5 months",
      targetAudience: "Elderly users",
      cardColor: "bg-gradient-to-br from-blue-200 to-blue-400",
      textColor: "text-gray-800"
    },
    {
      title: "Travel Memory Keeper",
      description: "AI-powered travel journal that automatically organizes photos, routes, and experiences into beautiful travel stories",
      category: "Travel Tech",
      marketPotential: "Medium",
      complexity: "Medium",
      tags: ["Travel", "AI", "Photo Organization", "Storytelling"],
      timeToMarket: "5-8 months",
      targetAudience: "Travelers",
      cardColor: "bg-gradient-to-br from-purple-200 to-purple-400",
      textColor: "text-gray-800"
    }
  ];

  const filteredIdeas = useMemo(() => {
    if (!searchTerm) return ideas;
    return ideas.filter(idea =>
      idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idea.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idea.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      idea.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

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
      case "Very High": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  💡 Innovative Ideas
                </h1>
                <p className="text-gray-600 mt-1">50 creative project concepts waiting to be built</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Hub
              </Link>
            </Button>
          </div>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search ideas by title, category, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/70 backdrop-blur-sm border-gray-200"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Showing {filteredIdeas.length} of {ideas.length} ideas
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIdeas.map((idea, index) => (
            <Card key={index} className={`${idea.cardColor} ${idea.textColor} hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0 overflow-hidden group`}>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-bold flex-1 group-hover:text-yellow-200 transition-colors">
                    <Lightbulb className="w-5 h-5 inline mr-2 opacity-80" />
                    {idea.title}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                    {idea.category}
                  </Badge>
                </div>
                <p className="opacity-90 text-sm leading-relaxed">{idea.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-4">
                  {idea.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                      {tag}
                    </Badge>
                  ))}
                  {idea.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                      +{idea.tags.length - 3}
                    </Badge>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <div className="flex items-center mb-1">
                      <TrendingUp className="w-3 h-3 mr-1 opacity-70" />
                      <span className="text-xs font-medium opacity-90">Market</span>
                    </div>
                    <Badge className={`${getMarketPotentialColor(idea.marketPotential)} text-xs`}>
                      {idea.marketPotential}
                    </Badge>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <Clock className="w-3 h-3 mr-1 opacity-70" />
                      <span className="text-xs font-medium opacity-90">Complexity</span>
                    </div>
                    <Badge className={`${getComplexityColor(idea.complexity)} text-xs`}>
                      {idea.complexity}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs opacity-80 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {idea.timeToMarket}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {idea.targetAudience}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm transition-all group-hover:bg-white/40"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Explore
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm transition-all"
                  >
                    <Github className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Idea Generation Tips */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-900">🚀 Idea Generation Framework</CardTitle>
              <p className="text-indigo-700">Turn concepts into reality with this structured approach</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <h4 className="font-semibold text-indigo-900 text-lg">💭 Problem Identification</h4>
                  <ul className="text-sm text-indigo-800 space-y-2">
                    <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Look for everyday frustrations</li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Identify market gaps</li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Study emerging technologies</li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Analyze user feedback</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-indigo-900 text-lg">🔨 Solution Development</h4>
                  <ul className="text-sm text-indigo-800 space-y-2">
                    <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Start with MVP concepts</li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Validate with potential users</li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Research competition</li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Plan monetization strategy</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-indigo-900 text-lg">📈 Execution Strategy</h4>
                  <ul className="text-sm text-indigo-800 space-y-2">
                    <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Create detailed roadmap</li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Build prototype quickly</li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Test with real users</li>
                    <li className="flex items-start"><span className="text-indigo-500 mr-2">•</span>Iterate based on feedback</li>
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
