
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  Lock,
  Users,
  Calendar,
  Bot,
  Zap,
  ArrowRight,
  HelpCircle,
  School,
  Rocket
} from "lucide-react";
import Chatbot from "@/components/Chatbot";

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
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              {/* Logo Section */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-black mb-1">DHRC</h1>
                  <p className="text-sm text-gray-600">by Launch Layer R1</p>
                </div>
              </div>
              
              <h1 className="text-3xl font-serif text-black mb-2">
                Dev Haven Resources Center
              </h1>
              <p className="text-gray-600 text-sm">
                A comprehensive collection of engineering knowledge and resources
              </p>
            </div>
            
            {/* Header Image */}
            <div className="hidden md:block ml-8">
              <img 
                src="https://i.ibb.co/zWCZYk4M/DHRC.png"
                alt="Development Resources"
                className="w-64 h-32 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </header>

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
                        className="text-blue-700 hover:text-blue-900 hover:underline text-sm font-medium transition-colors"
                      >
                        {category.title}
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
                        <h2 className="text-xl font-serif text-black mb-2">
                          <Link 
                            to={category.path} 
                            className="text-blue-600 hover:underline"
                          >
                            {category.title}
                          </Link>
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

            {/* Footer */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-gray-500 text-xs">
                Last updated: June 2025 • This page provides an overview of engineering resources available on the platform.
              </p>
            </div>
          </main>

          {/* Right Banner - My OS (Organizer) */}
          <div className="col-span-2 hidden lg:block">
            <div className="sticky top-8">
              <Card className="border border-gray-200 bg-gradient-to-br from-green-50 to-emerald-100 overflow-hidden">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                    alt="My OS Organizer"
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <Zap className="w-6 h-6 text-white mb-1" />
                    <h3 className="text-white font-semibold text-sm">My OS</h3>
                    <p className="text-white/80 text-xs">Organizer</p>
                  </div>
                </div>
                <CardContent className="p-3">
                  <p className="text-xs text-gray-600 mb-3">
                    Organize your development workflow with smart tools
                  </p>
                  <Link to="/auth?service=organizer">
                    <Button size="sm" variant="outline" className="w-full text-xs">
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

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Index;
