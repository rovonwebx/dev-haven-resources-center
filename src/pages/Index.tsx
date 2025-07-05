import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Footer from "@/components/Footer";
import {
  Brain,
  Calendar,
  Award,
  Code,
  Lightbulb,
  BookOpen,
  FileText,
  Briefcase,
  Building2,
  Users,
  Target,
  MessageSquare,
  Layout,
  School,
  ChevronRight,
  Zap,
  Star,
  Trophy
} from "lucide-react";

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/a5d3ce57-d515-4e09-97e0-133d9bf36488.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Dev Haven
              <span className="block text-blue-400">Resources Center</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your ultimate destination for engineering resources, coding challenges, 
              career guidance, and professional development tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {user ? (
                <>
                  <Link to="/organizer">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                      Go to Organizer
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/chatter-box">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
                      Try AI Assistant
                      <MessageSquare className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/auth">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                      Get Started
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/chatter-box">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
                      Try AI Assistant
                      <MessageSquare className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Organizer Banner */}
            <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </span>
              </div>
              <div className="relative z-10">
                <Calendar className="w-12 h-12 mb-4 text-green-100" />
                <h3 className="text-2xl font-bold mb-3">Personal Organizer</h3>
                <p className="text-green-100 mb-6 leading-relaxed">
                  Boost your productivity with our comprehensive task management, 
                  project tracking, and time organization tools.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-300 mr-1" />
                      <span className="text-sm">4.8/5</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-green-200 mr-1" />
                      <span className="text-sm">5K+ users</span>
                    </div>
                  </div>
                  <Link to="/organizer">
                    <Button className="bg-white text-green-600 hover:bg-green-50">
                      Organize Now
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
            </div>

            {/* Templates Banner */}
            <div className="relative bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                  NEW
                </span>
              </div>
              <div className="relative z-10">
                <Layout className="w-12 h-12 mb-4 text-purple-100" />
                <h3 className="text-2xl font-bold mb-3">Web Templates</h3>
                <p className="text-purple-100 mb-6 leading-relaxed">
                  Discover beautiful, responsive web templates with source code, 
                  demos, and GitHub repositories for your next project.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Trophy className="w-4 h-4 text-yellow-300 mr-1" />
                      <span className="text-sm">Premium Quality</span>
                    </div>
                    <div className="flex items-center">
                      <Code className="w-4 h-4 text-purple-200 mr-1" />
                      <span className="text-sm">50+ Templates</span>
                    </div>
                  </div>
                  <Link to="/templates">
                    <Button className="bg-white text-purple-600 hover:bg-purple-50">
                      Browse Templates
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and resources to accelerate your engineering career and projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI Interviews */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardHeader>
                <Brain className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle className="text-xl">AI Mock Interviews</CardTitle>
                <CardDescription>
                  Practice technical interviews with AI-powered questions and real-time feedback
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/ai-interviews">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Start Interview
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Certificates */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-green-200">
              <CardHeader>
                <Award className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle className="text-xl">Certificates</CardTitle>
                <CardDescription>
                  Showcase your achievements with professional certificates and credentials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/certificates">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    View Certificates
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-purple-200">
              <CardHeader>
                <Code className="w-8 h-8 text-purple-600 mb-2" />
                <CardTitle className="text-xl">Projects</CardTitle>
                <CardDescription>
                  Explore coding projects, tutorials, and hands-on learning experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/projects">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Explore Projects
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Ideas */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
              <CardHeader>
                <Lightbulb className="w-8 h-8 text-orange-600 mb-2" />
                <CardTitle className="text-xl">Project Ideas</CardTitle>
                <CardDescription>
                  Get inspired with innovative project ideas and implementation guides
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/ideas">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Get Ideas
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* DSA */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-red-200">
              <CardHeader>
                <Target className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle className="text-xl">DSA Practice</CardTitle>
                <CardDescription>
                  Master Data Structures and Algorithms with comprehensive problem sets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/dsa">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Practice DSA
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Notes */}
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-indigo-200">
              <CardHeader>
                <FileText className="w-8 h-8 text-indigo-600 mb-2" />
                <CardTitle className="text-xl">Study Notes</CardTitle>
                <CardDescription>
                  Access comprehensive study materials and technical documentation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/notes">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Browse Notes
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Briefcase className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Internships</h3>
                <p className="text-sm text-gray-600 mb-4">Find and apply for internship opportunities</p>
                <Link to="/internships">
                  <Button variant="outline" size="sm">Explore</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Building2 className="w-10 h-10 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Events</h3>
                <p className="text-sm text-gray-600 mb-4">Stay updated with tech events and conferences</p>
                <Link to="/events">
                  <Button variant="outline" size="sm">View Events</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <BookOpen className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Blogs</h3>
                <p className="text-sm text-gray-600 mb-4">Read insightful articles and tutorials</p>
                <Link to="/blogs">
                  <Button variant="outline" size="sm">Read Blogs</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <School className="w-10 h-10 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Campus Notes</h3>
                <p className="text-sm text-gray-600 mb-4">Access campus-specific study materials</p>
                <Link to="/campus-notes">
                  <Button variant="outline" size="sm">Access Notes</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
