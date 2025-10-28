import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Lightbulb, TrendingUp, Clock, Users, Search, MessageSquare, BrainCircuit, Home, ChevronDown, XCircle, ArrowUp, Filter } from "lucide-react";

// --- Data (No changes here, remains the full list) ---
const ideas = [ /* ... Your full list of ideas remains here ... */ 
    {
      title: "Smart Home Energy Optimizer",
      description: "AI-powered system that learns usage patterns and automatically optimizes energy consumption",
      category: "IoT & AI",
      marketPotential: "High",
      complexity: "Medium",
      tags: ["IoT", "Machine Learning", "Energy", "Smart Home"],
      timeToMarket: "6-12 months",
      targetAudience: "Homeowners",
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
    }
];

// --- Helper Functions (Updated for Dark Theme) ---
const getMarketPotentialBadgeClass = (potential: string) => {
    switch (potential) {
      case "Very High": return 'bg-emerald-900/90 text-emerald-100 border border-emerald-600/50';
      case "High": return 'bg-blue-900/90 text-blue-100 border border-blue-600/50';
      case "Medium": return 'bg-amber-900/90 text-amber-100 border border-amber-600/50';
      case "Low": return 'bg-red-900/90 text-red-100 border border-red-600/50';
      default: return 'bg-neutral-700 text-neutral-300 border border-neutral-600';
    }
};

const getComplexityBadgeClass = (complexity: string) => {
    switch (complexity) {
        case "Low": return 'bg-emerald-900/90 text-emerald-100 border border-emerald-600/50';
        case "Medium": return 'bg-amber-900/90 text-amber-100 border border-amber-600/50';
        case "High": return 'bg-red-900/90 text-red-100 border border-red-600/50';
        case "Very High": return 'bg-purple-900/90 text-purple-100 border border-purple-600/50';
        default: return 'bg-neutral-700 text-neutral-300 border border-neutral-600';
    }
};

const CategoryFilterDropdown = ({ allCategories, selectedCategory, onSelectCategory }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef(null);

    const filteredCategories = ["All", ...allCategories.filter(cat => cat !== "All" && cat.toLowerCase().includes(searchTerm.toLowerCase()))];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    
    return (
        <div className="relative" ref={dropdownRef}>
            <Button 
                variant="outline" 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-full justify-between border-neutral-700 bg-neutral-800 hover:bg-neutral-700 hover:text-white"
            >
                <span>{selectedCategory}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </Button>
            {isOpen && (
                <div className="absolute top-full mt-2 w-full bg-neutral-800 border border-neutral-700 rounded-lg shadow-xl z-10 p-2">
                    <Input
                        type="text"
                        placeholder="Search categories..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full mb-2 bg-neutral-900 border-neutral-600 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <div className="max-h-60 overflow-y-auto pr-1">
                        {filteredCategories.map(category => (
                             <button
                                key={category}
                                onClick={() => { onSelectCategory(category); setIsOpen(false); }}
                                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                                    selectedCategory === category
                                    ? 'bg-blue-600 text-white'
                                    : 'text-neutral-300 hover:bg-neutral-700'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const IdeasPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // --- Scroll to Top Logic ---
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showBackToTop && window.pageYOffset > 400) {
        setShowBackToTop(true);
      } else if (showBackToTop && window.pageYOffset <= 400) {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showBackToTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const allCategories = useMemo(() => {
    return ["All", ...Array.from(new Set(ideas.map(idea => idea.category)))];
  }, []);
  
  const filteredIdeas = useMemo(() => {
    return ideas.filter(idea => {
      const matchesCategory = selectedCategory === "All" || idea.category === selectedCategory;
      const matchesSearch =
        !searchTerm ||
        idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        idea.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        idea.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);
  
  const Breadcrumb = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-sm text-neutral-400">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                <Home className="w-4 h-4" />
                Home
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Ideas</span>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      {/* <Header /> */}
      
      <main className="flex-1 w-full pt-12 pb-16">
        <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Project Idea Launchpad
            </h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
              A curated collection of innovative concepts to inspire your next venture.
            </p>
        </div>

        <Breadcrumb />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
            <aside className="md:col-span-1 h-fit md:sticky top-24">
                <div className="bg-neutral-900 p-5 rounded-lg border border-neutral-800">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2"><Filter className="w-4 h-4" /> Filter by Category</h3>
                    <CategoryFilterDropdown 
                        allCategories={allCategories} 
                        selectedCategory={selectedCategory} 
                        onSelectCategory={setSelectedCategory} 
                    />
                </div>
            </aside>

            <main className="md:col-span-3">
                <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500 w-5 h-5" />
                <Input
                    type="text"
                    placeholder="Search ideas by title, tag, or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-neutral-900 border-2 border-neutral-800 rounded-full text-base focus:ring-blue-500 focus:border-blue-500 placeholder-neutral-500"
                />
                </div>

                <Card className="mb-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg border-blue-500">
                    <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <BrainCircuit size={40} className="text-blue-200"/>
                            <div>
                                <h3 className="font-bold text-lg">Want to brainstorm?</h3>
                                <p className="text-sm text-blue-200">Discuss these concepts or generate new ideas with our AI assistant.</p>
                            </div>
                        </div>
                        <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto flex-shrink-0">
                            <Link to="/chatterbox"><MessageSquare className="w-4 h-4 mr-2"/> Start Chatting</Link>
                        </Button>
                    </CardContent>
                </Card>

                <p className="text-sm text-neutral-400 mb-6">
                  Showing {filteredIdeas.length} of {ideas.length} ideas in <span className='font-semibold text-blue-400'>{selectedCategory}</span>.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredIdeas.map((idea, index) => (
                    <Card key={index} className="group bg-neutral-900 border border-neutral-800 rounded-lg shadow-sm hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                    <CardContent className="p-6 flex flex-col flex-grow">
                        <div className="mb-3">
                            <Badge className="bg-neutral-800 text-blue-300 border border-neutral-700 mb-2">{idea.category}</Badge>
                            <h2 className="font-bold text-lg text-white leading-tight">{idea.title}</h2>
                        </div>
                        <p className="text-neutral-400 text-sm mb-4 flex-grow line-clamp-3">{idea.description}</p>
                        
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {idea.tags.slice(0, 4).map((tag) => <Badge key={tag} variant="outline" className="text-xs border-neutral-700 bg-neutral-800 text-neutral-300">{tag}</Badge>)}
                        </div>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm mt-auto pt-4 border-t border-neutral-800">
                            <div className="flex items-center gap-2" title="Market Potential"><TrendingUp className="w-4 h-4 text-neutral-500" /><span className='font-medium text-neutral-300'>Potential:</span><Badge className={`text-xs ${getMarketPotentialBadgeClass(idea.marketPotential)}`}>{idea.marketPotential}</Badge></div>
                            <div className="flex items-center gap-2" title="Complexity"><BrainCircuit className="w-4 h-4 text-neutral-500" /><span className='font-medium text-neutral-300'>Complexity:</span><Badge className={`text-xs ${getComplexityBadgeClass(idea.complexity)}`}>{idea.complexity}</Badge></div>
                            <div className="flex items-center gap-2" title="Time to Market"><Clock className="w-4 h-4 text-neutral-500" /><span className='font-medium text-neutral-300'>Timeline:</span><span className='text-neutral-400'>{idea.timeToMarket}</span></div>
                            <div className="flex items-center gap-2" title="Target Audience"><Users className="w-4 h-4 text-neutral-500" /><span className='font-medium text-neutral-300'>Audience:</span><span className='text-neutral-400'>{idea.targetAudience}</span></div>
                        </div>
                    </CardContent>
                    </Card>
                ))}
                </div>
            </main>
            </div>
        </div>
      </main>

       {showBackToTop && (
        <Button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 h-12 w-12 rounded-full bg-blue-600/90 p-3 text-white shadow-lg transition-transform duration-200 ease-in-out hover:bg-blue-600 hover:scale-110"
          aria-label="Go to top"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}

      {/* <Footer /> */}
    </div>
  );
};

export default IdeasPage;
