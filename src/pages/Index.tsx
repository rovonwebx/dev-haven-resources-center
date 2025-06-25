
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  GraduationCap 
} from "lucide-react";

const Index = () => {
  const resourceCategories = [
    {
      title: "Certificates",
      description: "Industry-recognized certifications and online courses",
      icon: Award,
      path: "/certificates",
      color: "bg-blue-500"
    },
    {
      title: "Projects",
      description: "Hands-on projects and portfolio ideas",
      icon: Code,
      path: "/projects",
      color: "bg-green-500"
    },
    {
      title: "Ideas",
      description: "Innovation concepts and startup ideas",
      icon: Lightbulb,
      path: "/ideas",
      color: "bg-yellow-500"
    },
    {
      title: "Blogs",
      description: "Technical articles and engineering insights",
      icon: BookOpen,
      path: "/blogs",
      color: "bg-purple-500"
    },
    {
      title: "DSA",
      description: "Data Structures and Algorithms resources",
      icon: Brain,
      path: "/dsa",
      color: "bg-red-500"
    },
    {
      title: "Coding Challenges",
      description: "Programming contests and practice problems",
      icon: Trophy,
      path: "/coding-challenges",
      color: "bg-orange-500"
    },
    {
      title: "Internships",
      description: "Internship opportunities and career guidance",
      icon: Briefcase,
      path: "/internships",
      color: "bg-indigo-500"
    },
    {
      title: "Notes",
      description: "Study materials and quick reference guides",
      icon: FileText,
      path: "/notes",
      color: "bg-teal-500"
    },
    {
      title: "Documents",
      description: "Technical documentation and manuals",
      icon: File,
      path: "/documents",
      color: "bg-pink-500"
    },
    {
      title: "Theories",
      description: "Fundamental concepts and theoretical knowledge",
      icon: GraduationCap,
      path: "/theories",
      color: "bg-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Engineering Resources Hub
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your comprehensive platform for engineering knowledge, projects, and career development
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Resource Categories</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Learning Resources</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Access Available</div>
            </CardContent>
          </Card>
        </div>

        {/* Resource Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {resourceCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-6 text-sm">
                    {category.description}
                  </p>
                  <Button asChild className="w-full">
                    <Link to={category.path}>
                      Explore {category.title}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Level Up Your Engineering Skills?</h2>
              <p className="text-xl mb-8 opacity-90">
                Start exploring our comprehensive collection of resources designed for engineers at every level
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/projects">Start with Projects</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
                  <Link to="/dsa">Practice DSA</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Engineering Resources Hub. Empowering engineers worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
