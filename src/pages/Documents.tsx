
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, File, ExternalLink, Clock } from "lucide-react";

const Documents = () => {
  const documentCategories = [
    {
      category: "API Documentation",
      documents: [
        { title: "REST API Design Guidelines", description: "Comprehensive guide for designing RESTful APIs", lastUpdated: "Dec 2024", type: "Guide" },
        { title: "GraphQL Best Practices", description: "Advanced patterns for GraphQL implementation", lastUpdated: "Nov 2024", type: "Best Practices" },
        { title: "Authentication & Authorization", description: "JWT, OAuth, and security protocols", lastUpdated: "Dec 2024", type: "Security" }
      ]
    },
    {
      category: "Development Standards",
      documents: [
        { title: "Code Style Guide", description: "Consistent coding standards across languages", lastUpdated: "Oct 2024", type: "Standards" },
        { title: "Git Workflow Documentation", description: "Branching strategies and commit conventions", lastUpdated: "Nov 2024", type: "Workflow" },
        { title: "Testing Standards", description: "Unit, integration, and e2e testing guidelines", lastUpdated: "Dec 2024", type: "Testing" }
      ]
    },
    {
      category: "Architecture Documentation",
      documents: [
        { title: "System Architecture Overview", description: "High-level system design and components", lastUpdated: "Dec 2024", type: "Architecture" },
        { title: "Database Schema Documentation", description: "Entity relationships and data models", lastUpdated: "Nov 2024", type: "Database" },
        { title: "Deployment Architecture", description: "Infrastructure and deployment strategies", lastUpdated: "Dec 2024", type: "DevOps" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Hub
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                <File className="w-8 h-8 inline mr-2 text-purple-600" />
                Technical Documentation
              </h1>
              <p className="text-gray-600 mt-1">Comprehensive technical documentation and manuals</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {documentCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.category}</h2>
            <div className="space-y-4">
              {category.documents.map((doc, docIndex) => (
                <Card key={docIndex} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.title}</h3>
                        <p className="text-gray-600 mb-3">{doc.description}</p>
                        <div className="flex items-center space-x-4">
                          <Badge variant="secondary">{doc.type}</Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            Updated {doc.lastUpdated}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Document
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Documents;
