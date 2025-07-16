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
      
      {/* Header with responsive background image */}
      <header 
        className="border-b border-gray-300 bg-white relative overflow-hidden"
        style={{
              backgroundImage: `url('https://i.ibb.co/fYf7pDBk/lates-banner.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 lg:py-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 p-1">
                  <img 
                      src="/lovable-uploads/afd18992-2d3f-4720-9839-1637802cd8e4.png" 
                    alt="DHRC Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-white mb-1">DHRC</h1>
                  <p className="text-xs sm:text-sm text-white/80">by DHRC Team & CMRIT AIML-A Resource HQ</p>
                </div>
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white mb-2 sm:mb-3 leading-tight">
                Dev Haven Resources Center
              </h1>
              <p className="text-white/90 text-sm sm:text-base max-w-lg leading-relaxed">
                A comprehensive collection of engineering knowledge and resources
              </p>
            </div>
            
            <div className="hidden lg:block w-32"></div>
          </div>
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

      {/* Alert for Campus Notes Update */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Alert className="border-green-200 bg-green-50">
          <MessageSquare className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 flex-shrink-0" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                  <span className="font-medium">New: Campus Notes Page Updated!</span>
                  <span className="text-sm">Explore the latest resources and updated content for all academic years.</span>
                </div>
              </div>
              <Link to="/campus-notes" className="flex-shrink-0">
                <Button variant="outline" size="sm" className="border-green-300 text-green-700 hover:bg-green-100 w-full sm:w-auto">
                  Check Now
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
