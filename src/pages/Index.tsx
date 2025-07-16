import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Code, 
  Lightbulb, 
  BookOpen, 
  Brain, 
  Trophy, 
  Briefcase, 
  FileText, 
  File, 
  GraduationCap,
  Users,
  Calendar,
  Bot,
  ArrowRight,
  HelpCircle,
  School,
  Rocket,
  MessageSquare,
  Sparkles,
  Layout
} from "lucide-react";
import { Analytics } from "@vercel/analytics/react";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";
import React, { useState } from "react";

const Index = () => {
  const [showPopup, setShowPopup] = useState(true);
  const resourceCategories = [
    {
      title: "Certificates",
      description: "Industry-recognized certifications and online courses",
      icon: Award,
      path: "/certificates",
    },
    {
      title: "Projects",
      description: "Hands-on projects and portfolio ideas",
      icon: Code,
      path: "/projects",
    },
    {
      title: "Ideas",
      description: "Innovation concepts and startup ideas",
      icon: Lightbulb,
      path: "/ideas",
    },
    {
      title: "Blogs",
      description: "Technical articles and engineering insights",
      icon: BookOpen,
      path: "/blogs",
    },
    {
      title: "DSA",
      description: "Data Structures and Algorithms resources",
      icon: Brain,
      path: "/dsa",
      isNew: true,
    },
    {
      title: "Coding Challenges",
      description: "Programming contests and practice problems",
      icon: Trophy,
      path: "/coding-challenges",
    },
    {
      title: "Internships",
      description: "Internship opportunities and career guidance",
      icon: Briefcase,
      path: "/internships",
    },
    {
      title: "Notes",
      description: "Study materials and quick reference guides",
      icon: FileText,
      path: "/notes",
    },
    {
      title: "Campus Notes",
      description: "Collaborative study notes and campus resources",
      icon: School,
      path: "/campus-notes",
      isNew: true,
    },
    {
      title: "Documents",
      description: "Technical documentation and manuals",
      icon: File,
      path: "/documents",
    },
    {
      title: "Theories",
      description: "Fundamental concepts and theoretical knowledge",
      icon: GraduationCap,
      path: "/theories",
    },
    {
      title: "Roadmaps",
      description: "Structured learning paths for DSA and Web Development",
      icon: Calendar,
      path: "/roadmaps",
    },
    {
      title: "Student Projects",
      description: "Innovative projects built by students across India",
      icon: Users,
      path: "/student-projects",
    },
    {
      title: "Events",
      description: "Tech events, competitions, and conferences",
      icon: Calendar,
      path: "/events",
    },
    {
      title: "Interview Questions",
      description: "Comprehensive SQL interview questions and answers",
      icon: HelpCircle,
      path: "/interview-questions",
    },
    {
      title: "Anyone Can Develop",
      description: "Complete guide to creating webpages with AI assistance",
      icon: Rocket,
      path: "/anyone-can-develop",
      isNew: true,
    },
    {
      title: "Templates",
      description: "Ready-to-use web templates and design resources",
      icon: Layout,
      path: "/templates",
      isNew: true,
    }
  ];

  return (
    <>
      {/* Pop-up Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-2xl w-full relative flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold focus:outline-none"
              onClick={() => setShowPopup(false)}
              aria-label="Close popup"
            >
              ×
            </button>
            <img
              src="https://i.ibb.co/B2g1Fzhx/Add-a-little-bit-of-body-text.png"
              alt="DHRC Domain Move Announcement"
              className="w-full h-auto rounded-xl mb-2"
              style={{maxHeight: '480px'}}
            />
          </div>
        </div>
      )}
      <div className="min-h-screen bg-white">
      <Analytics />
      
      {/* Header with solid color and animated geometric outline shapes */}
      <header 
        className="border-b border-gray-300 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 lg:py-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 p-1 shadow-lg">
                  <img 
                      src="/lovable-uploads/afd18992-2d3f-4720-9839-1637802cd8e4.png" 
                    alt="DHRC Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-white mb-1 drop-shadow">DHRC</h1>
                  <p className="text-xs sm:text-sm text-white/80">by DHRC Team & CMRIT AIML-A Resource HQ</p>
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white mb-2 sm:mb-3 leading-tight drop-shadow">
                Dev Haven Resources Center
              </h1>
              <p className="text-white/90 text-sm sm:text-base max-w-lg leading-relaxed">
                A comprehensive collection of engineering knowledge and resources
              </p>
            </div>
            {/* Header Image on the right */}
            <div className="hidden lg:flex items-center justify-end flex-1">
              <img 
                src="https://i.ibb.co/7Nkf4tRs/Chat-GPT-Image-Jul-17-2025-12-10-31-AM-removebg-preview.png"
                alt="Header Banner"
                className="w-[340px] h-auto object-contain mix-blend-lighten opacity-90 drop-shadow-2xl"
                style={{maxHeight: '220px'}}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Responsive Navbar for Important/Updated Contents */}
      <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <span className="font-semibold text-gray-700 text-base hidden sm:inline-block">What's New</span>
            {/* Hamburger for mobile */}
            <div className="sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-controls="navbar-menu"
                aria-expanded="false"
                onClick={() => {
                  const menu = document.getElementById('navbar-menu');
                  if (menu) menu.classList.toggle('hidden');
                }}
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            {/* Desktop links */}
            <div className="hidden sm:flex space-x-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              {resourceCategories.filter(c => c.isNew).map((category) => (
                <Link
                  key={category.title}
                  to={category.path}
                  className="px-3 py-1 rounded-md text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 hover:text-blue-900 transition whitespace-nowrap flex items-center"
                >
                  {category.title}
                  <span className="ml-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded animate-pulse">New</span>
                </Link>
              ))}
            </div>
          </div>
          {/* Mobile dropdown */}
          <div id="navbar-menu" className="sm:hidden hidden flex-col space-y-1 pb-3 pt-2">
            {resourceCategories.filter(c => c.isNew).map((category) => (
              <Link
                key={category.title}
                to={category.path}
                className="block px-4 py-2 rounded-md text-base font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 hover:text-blue-900 transition"
              >
                {category.title}
                <span className="ml-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded animate-pulse">New</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Alert for Chatter Box */}
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="relative flex items-center gap-4 rounded-xl shadow-lg backdrop-blur-md bg-white/70 border border-red-200 overflow-hidden">
          <div className="h-full w-2 bg-gradient-to-b from-red-400 to-red-600 absolute left-0 top-0" />
          <div className="flex items-center justify-center bg-red-100 rounded-full w-12 h-12 ml-4 my-3">
            <MessageSquare className="h-6 w-6 text-red-600" />
          </div>
          <div className="flex-1 py-4 pr-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 flex-shrink-0 text-red-500" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                  <span className="font-semibold text-red-800">New: DHRC Chatter Box is now available!</span>
                  <span className="text-sm text-red-700">Chat with our AI assistant powered by Gemini for instant help with your queries.</span>
                </div>
              </div>
              <Link to="/chatter-box" className="flex-shrink-0">
                <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-100 w-full sm:w-auto">
                  Try Now
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Alert for Campus Notes Update */}
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="relative flex items-center gap-4 rounded-xl shadow-lg backdrop-blur-md bg-white/70 border border-green-200 overflow-hidden">
          <div className="h-full w-2 bg-gradient-to-b from-green-400 to-green-600 absolute left-0 top-0" />
          <div className="flex items-center justify-center bg-green-100 rounded-full w-12 h-12 ml-4 my-3">
            <MessageSquare className="h-6 w-6 text-green-600" />
          </div>
          <div className="flex-1 py-4 pr-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 flex-shrink-0 text-green-500" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                  <span className="font-semibold text-green-800">New: Campus Notes Page Updated!</span>
                  <span className="text-sm text-green-700">Explore the latest resources and updated content for all academic years.</span>
                </div>
              </div>
              <Link to="/campus-notes" className="flex-shrink-0">
                <Button variant="outline" size="sm" className="border-green-300 text-green-700 hover:bg-green-100 w-full sm:w-auto">
                  Check Now
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Side Banners */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Banner - AI Interviews */}
          <div className="col-span-2 hidden lg:block">
            <div className="sticky top-8">
              <Card className="border border-blue-100 bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden w-48 mx-auto">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    alt="AI Interviews"
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-700/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="bg-white/80 rounded-full p-2 shadow">
                      <Bot className="w-6 h-6 text-blue-700" />
                    </div>
                    <h3 className="text-white font-semibold text-base drop-shadow">AI Interviews</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-700 mb-4 font-medium">
                    Practice coding interviews with AI-powered mock sessions
                  </p>
                  <Link to="/auth?service=ai-interviews">
                    <Button size="sm" className="w-full text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow">
                      Start Practice
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <main className="col-span-12 lg:col-span-8">
            <div className="backdrop-blur-md bg-white/60 rounded-2xl shadow-2xl px-6 sm:px-10 py-10 mb-10 border border-white/40">
            {/* Introduction */}
            <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4 text-lg font-medium text-center">
                The <strong> Dev Haven Resources Center</strong> is a comprehensive platform designed to support engineers 
                at every stage of their career. From foundational concepts to advanced theories, this hub provides 
                structured access to essential learning materials, practical projects, and career development resources.
              </p>
            </div>

            {/* Table of Contents */}
              <Card className="mb-8 border border-gray-200 bg-white/80 shadow-md rounded-xl">
              <CardContent className="p-6">
                  <h2 className="text-xl font-serif text-black mb-4 pb-2 border-b border-gray-200 text-center">Contents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {resourceCategories.map((category, index) => (
                    <div key={category.title} className="flex items-center py-1">
                      <span className="text-blue-700 font-medium mr-3 min-w-[24px]">{index + 1}.</span>
                      <Link 
                        to={category.path} 
                        className="text-blue-700 hover:text-blue-900 hover:underline text-sm font-medium transition-colors flex items-center"
                      >
                        {category.title}
                        {category.isNew && (
                          <Badge className="ml-2 bg-red-500 text-white text-xs px-1.5 py-0.5 animate-pulse">
                            New
                          </Badge>
                        )}
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resource Categories */}
              <div className="space-y-10">
              {resourceCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                    <section key={category.title} className="border-b border-gray-100 pb-8 last:border-b-0 last:pb-0">
                      <div className="flex items-start space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 shadow">
                          <IconComponent className="w-6 h-6 text-blue-700" />
                        </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-serif text-black mb-2 flex items-center">
                          <Link 
                            to={category.path} 
                            className="text-blue-600 hover:underline"
                          >
                            {category.title}
                          </Link>
                          {category.isNew && (
                            <Badge className="ml-3 bg-red-500 text-white text-xs px-2 py-1 animate-pulse">
                              New
                            </Badge>
                          )}
                        </h2>
                          <p className="text-gray-700 leading-relaxed text-base mb-3">
                          {category.description}
                        </p>
                        <Link 
                          to={category.path}
                          className="text-blue-600 hover:underline text-sm font-medium"
                        >
                          Main article: {category.title} →
                        </Link>
                      </div>
                    </div>
                  </section>
                );
              })}
              </div>
            </div>
          </main>

          {/* Right Banner - Templates */}
          <div className="col-span-2 hidden lg:block">
            <div className="sticky top-8 space-y-6">
              {/* Templates Banner */}
              <Card className="border border-purple-100 bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden w-80 mx-auto">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    alt="Templates"
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-700/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="bg-white/80 rounded-full p-2 shadow">
                      <Layout className="w-6 h-6 text-purple-700" />
                    </div>
                    <h3 className="text-white font-semibold text-base drop-shadow">Templates</h3>
                    <Badge className="bg-red-500 text-white text-xs px-1.5 py-0.5 animate-pulse mt-1 ml-2">
                      New
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-700 mb-4 font-medium">
                    Ready-to-use web templates and design resources
                  </p>
                  <Link to="/templates">
                    <Button size="sm" variant="outline" className="w-full text-base font-semibold border-purple-300 text-purple-700 hover:bg-purple-100 shadow">
                      Explore Templates
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Organizer Banner */}
              <Card className="border border-green-100 bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden w-80 mx-auto">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    alt="Organizer"
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-700/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="bg-white/80 rounded-full p-2 shadow">
                      <Calendar className="w-6 h-6 text-green-700" />
                    </div>
                    <h3 className="text-white font-semibold text-base drop-shadow">Organizer</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-700 mb-4 font-medium">
                    Manage tasks, projects, and track your productivity
                  </p>
                  <Link to="/organizer">
                    <Button size="sm" className="w-full text-base font-semibold bg-green-600 hover:bg-green-700 text-white shadow">
                      Get Organized
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Chatbot */}
      <Chatbot />
    </div>
    </>
  );
};

export default Index;
