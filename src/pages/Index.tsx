
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
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
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-serif text-black mb-2">
            Engineering Resources Hub
          </h1>
          <p className="text-gray-600 text-sm">
            A comprehensive collection of engineering knowledge and resources
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>Engineering Resources Hub</strong> is a comprehensive platform designed to support engineers 
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
            Last updated: December 2024 • This page provides an overview of engineering resources available on the platform.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
