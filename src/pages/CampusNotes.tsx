
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  Users, 
  Bell, 
  Calendar,
  Zap,
  Rocket,
  Globe
} from "lucide-react";

const CampusNotes = () => {
  const upcomingFeatures = [
    {
      icon: BookOpen,
      title: "Collaborative Study Notes",
      description: "Share and collaborate on study notes with classmates in real-time",
      status: "In Development"
    },
    {
      icon: Users,
      title: "Study Groups",
      description: "Form study groups and schedule sessions with fellow students",
      status: "Planning"
    },
    {
      icon: Calendar,
      title: "Assignment Tracker",
      description: "Keep track of assignments, deadlines, and exam schedules",
      status: "Coming Soon"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get reminded about upcoming deadlines and study sessions",
      status: "Planning"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-300 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild className="text-blue-600 hover:bg-blue-50">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Home
              </Link>
            </Button>
            <Button asChild>
              <Link to="/">
                <Globe className="w-4 h-4 mr-1" />
                Main Page
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center relative">
              <BookOpen className="w-12 h-12 text-white" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-black mb-6">Campus Notes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            The ultimate platform for collaborative learning and academic excellence
          </p>
          <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
            Coming Soon
          </Badge>
        </div>

        {/* Coming Soon Message */}
        <Card className="mb-12 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-8 text-center">
            <Rocket className="w-16 h-16 mx-auto mb-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-black mb-4">Something Amazing is Coming!</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              We're working hard to bring you the most comprehensive campus notes platform. 
              Get ready for a revolutionary way to study, collaborate, and excel in your academic journey.
            </p>
            <div className="flex justify-center items-center space-x-2 text-blue-600">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">Expected Launch: Spring 2025</span>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black text-center mb-8">What's Coming</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-2 border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-lg text-black">{feature.title}</CardTitle>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={
                          feature.status === "In Development" 
                            ? "bg-green-100 text-green-800" 
                            : feature.status === "Planning"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                        }
                      >
                        {feature.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">
          <CardContent className="p-8 text-center">
            <Bell className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Be the first to know when Campus Notes launches. Join our waitlist to get exclusive 
              early access and updates on our development progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                Join Waitlist
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Progress Indicators */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-black mb-6">Development Progress</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h4 className="font-semibold text-black">Planning</h4>
              <p className="text-sm text-gray-600">Completed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-full" style={{clipPath: 'polygon(0 0, 60% 0, 60% 100%, 0 100%)'}}></div>
                </div>
              </div>
              <h4 className="font-semibold text-black">Development</h4>
              <p className="text-sm text-gray-600">60% Complete</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
              </div>
              <h4 className="font-semibold text-black">Launch</h4>
              <p className="text-sm text-gray-600">Coming Soon</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CampusNotes;
