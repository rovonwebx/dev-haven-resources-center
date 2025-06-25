
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Clock, Users, Star } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      provider: "Amazon Web Services",
      duration: "3-6 months",
      level: "Professional",
      rating: 4.8,
      students: "50K+",
      description: "Design and deploy scalable AWS solutions",
      link: "https://aws.amazon.com/certification/",
      tags: ["Cloud", "AWS", "Architecture"]
    },
    {
      title: "Google Cloud Professional Cloud Architect",
      provider: "Google Cloud",
      duration: "4-8 months",
      level: "Professional",
      rating: 4.7,
      students: "25K+",
      description: "Design and manage Google Cloud solutions",
      link: "https://cloud.google.com/certification/",
      tags: ["Cloud", "GCP", "Architecture"]
    },
    {
      title: "Microsoft Azure Fundamentals",
      provider: "Microsoft",
      duration: "1-2 months",
      level: "Beginner",
      rating: 4.6,
      students: "100K+",
      description: "Learn Azure cloud services fundamentals",
      link: "https://docs.microsoft.com/en-us/learn/certifications/",
      tags: ["Cloud", "Azure", "Fundamentals"]
    },
    {
      title: "Certified Kubernetes Administrator",
      provider: "Cloud Native Computing Foundation",
      duration: "2-4 months",
      level: "Intermediate",
      rating: 4.9,
      students: "15K+",
      description: "Master Kubernetes cluster administration",
      link: "https://www.cncf.io/certification/cka/",
      tags: ["Kubernetes", "DevOps", "Containers"]
    },
    {
      title: "Docker Certified Associate",
      provider: "Docker",
      duration: "1-3 months",
      level: "Intermediate",
      rating: 4.5,
      students: "30K+",
      description: "Containerization and Docker expertise",
      link: "https://www.docker.com/certification/",
      tags: ["Docker", "Containers", "DevOps"]
    },
    {
      title: "Certified Ethical Hacker",
      provider: "EC-Council",
      duration: "3-6 months",
      level: "Advanced",
      rating: 4.4,
      students: "40K+",
      description: "Ethical hacking and penetration testing",
      link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
      tags: ["Security", "Ethical Hacking", "Penetration Testing"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      case "Professional": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Hub
                </Link>
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Certificates</h1>
                <p className="text-gray-600 mt-1">Industry-recognized certifications to boost your career</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-gray-900 flex-1">
                    {cert.title}
                  </CardTitle>
                  <Badge className={getLevelColor(cert.level)}>
                    {cert.level}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 font-medium">{cert.provider}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{cert.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {cert.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {cert.students}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    {cert.rating}
                  </div>
                </div>

                <Button className="w-full" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certification
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Certification Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Start with fundamental certifications before advancing to expert level</li>
                <li>• Practice with hands-on labs and real-world scenarios</li>
                <li>• Join study groups and online communities</li>
                <li>• Schedule your exam after thorough preparation</li>
                <li>• Keep your certifications current with renewal requirements</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Certificates;
