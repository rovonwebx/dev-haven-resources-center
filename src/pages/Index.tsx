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

const Index = () => {
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
    <div className="min-h-screen bg-white">
      <Analytics />
      
      {/* Redesigned Header */}
      <header className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="7"/%3E%3Ccircle cx="53" cy="7" r="7"/%3E%3Ccircle cx="7" cy="53" r="7"/%3E%3Ccircle cx="53" cy="53" r="7"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Logo and Brand */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4 p-2 border border-white/30">
                <img 
                  src="/lovable-uploads/afd18992-2d3f-4720-9839-1637802cd8e4.png" 
                  alt="DHRC Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">DHRC</h1>
                <p className="text-white/80 text-sm sm:text-base">by DHRC Team</p>
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Dev Haven 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Resources Center
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed font-light">
              Your comprehensive hub for engineering knowledge, resources, and career development
            </p>
            
            {/* Stats or Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">17+</div>
                <div className="text-white/80 text-sm">Resource Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">1000+</div>
                <div className="text-white/80 text-sm">Study Materials</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm">AI Assistant</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">Free</div>
                <div className="text-white/80 text-sm">Access</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-semibold px-8 py-3 text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link to="/chatter-box">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 text-lg">
                  Try AI Assistant
                  <Bot className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
          </svg>
        </div>
      </header>

      {/* Alert for Chatter Box */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Alert className="border-red-200 bg-red-50">
          <MessageSquare className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 flex-shrink-0" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                  <span className="font-medium">New: DHRC Chatter Box is now available!</span>
                  <span className="text-sm">Chat with our AI assistant powered by Gemini for instant help with your queries.</span>
                </div>
              </div>
              <Link to="/chatter-box" className="flex-shrink-0">
                <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-100 w-full sm:w-auto">
                  Try Now
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </Link>
            </div>
          </AlertDescription>
        </Alert>
      </div>

      {/* Main Content with Side Banners */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Banner - AI Interviews */}
          <div className="col-span-2 hidden lg:block">
            <div className="sticky top-8">
              <Card className="border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    alt="AI Interviews"
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <Bot className="w-6 h-6 text-white mb-1" />
                    <h3 className="text-white font-semibold text-sm">AI Interviews</h3>
                  </div>
                </div>
                <CardContent className="p-3">
                  <p className="text-xs text-gray-600 mb-3">
                    Practice coding interviews with AI-powered mock sessions
                  </p>
                  <Link to="/auth?service=ai-interviews">
                    <Button size="sm" className="w-full text-xs">
                      Start Practice
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <main className="col-span-12 lg:col-span-8">
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                The <strong> Dev Haven Resources Center</strong> is a comprehensive platform designed to support engineers 
                at every stage of their career. From foundational concepts to advanced theories, this hub provides 
                structured access to essential learning materials, practical projects, and career development resources.
              </p>
            </div>

            {/* Table of Contents */}
            <Card className="mb-8 border border-gray-200 bg-gray-50">
              <CardContent className="p-6">
                <h2 className="text-xl font-serif text-black mb-4 pb-2 border-b border-gray-300">Contents</h2>
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
            <div className="space-y-8">
              {resourceCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <section key={category.title} className="border-b border-gray-200 pb-6">
                    <div className="flex items-start space-x-3">
                      <IconComponent className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
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
                        <p className="text-gray-700 leading-relaxed text-sm mb-3">
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
          </main>

          {/* Right Banner - Templates */}
          <div className="col-span-2 hidden lg:block">
            <div className="sticky top-8 space-y-6">
              {/* Templates Banner */}
              <Card className="border border-gray-200 bg-gradient-to-br from-purple-50 to-violet-100 overflow-hidden">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    alt="Templates"
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <Layout className="w-6 h-6 text-white mb-1" />
                    <h3 className="text-white font-semibold text-sm">Templates</h3>
                    <Badge className="bg-red-500 text-white text-xs px-1.5 py-0.5 animate-pulse mt-1">
                      New
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-3">
                  <p className="text-xs text-gray-600 mb-3">
                    Ready-to-use web templates and design resources
                  </p>
                  <Link to="/templates">
                    <Button size="sm" variant="outline" className="w-full text-xs">
                      Explore Templates
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Organizer Banner */}
              <Card className="border border-gray-200 bg-gradient-to-br from-green-50 to-emerald-100 overflow-hidden">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    alt="Organizer"
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <Calendar className="w-6 h-6 text-white mb-1" />
                    <h3 className="text-white font-semibold text-sm">Organizer</h3>
                  </div>
                </div>
                <CardContent className="p-3">
                  <p className="text-xs text-gray-600 mb-3">
                    Manage tasks, projects, and track your productivity
                  </p>
                  <Link to="/organizer">
                    <Button size="sm" className="w-full text-xs bg-green-600 hover:bg-green-700">
                      Get Organized
                      <ArrowRight className="w-3 h-3 ml-1" />
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
  );
};

export default Index;
