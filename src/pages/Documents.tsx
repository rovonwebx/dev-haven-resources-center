
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Clock } from "lucide-react";

const Documents = () => {
  const documentCategories = [
    {
      category: "API Documentation",
      documents: [
        { title: "REST API Design Guidelines", description: "Comprehensive guide for designing RESTful APIs following industry standards", lastUpdated: "Dec 2024", type: "Guide" },
        { title: "GraphQL Best Practices", description: "Advanced patterns for GraphQL implementation and schema design", lastUpdated: "Nov 2024", type: "Best Practices" },
        { title: "Authentication & Authorization", description: "Implementation guide for JWT, OAuth, and modern security protocols", lastUpdated: "Dec 2024", type: "Security" }
      ]
    },
    {
      category: "Development Standards",
      documents: [
        { title: "Code Style Guide", description: "Consistent coding standards and conventions across multiple programming languages", lastUpdated: "Oct 2024", type: "Standards" },
        { title: "Git Workflow Documentation", description: "Branching strategies, commit conventions, and collaborative development practices", lastUpdated: "Nov 2024", type: "Workflow" },
        { title: "Testing Standards", description: "Guidelines for unit testing, integration testing, and end-to-end testing strategies", lastUpdated: "Dec 2024", type: "Testing" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4 mb-2">
            <Button variant="ghost" size="sm" asChild className="text-blue-600 hover:bg-blue-50">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Main Page
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl font-serif text-black">Technical Documentation</h1>
          <p className="text-gray-600 text-sm mt-1">Comprehensive technical documentation and implementation guides</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed">
            This section contains detailed <strong>technical documentation</strong> covering API design, 
            development standards, and architectural patterns. These documents serve as comprehensive 
            references for software engineering best practices and implementation guidelines.
          </p>
        </div>

        {documentCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-8">
            <h2 className="text-xl font-serif text-black mb-4 border-b border-gray-200 pb-2">
              {category.category}
            </h2>
            
            <div className="space-y-4">
              {category.documents.map((doc, docIndex) => (
                <Card key={docIndex} className="border border-gray-200 hover:shadow-sm transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-medium text-black mb-2">{doc.title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">{doc.description}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-600">
                          <span className="bg-gray-100 px-2 py-1 rounded">{doc.type}</span>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            Updated {doc.lastUpdated}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="text-xs ml-4">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Document
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-xs">
            Documentation is regularly maintained and updated to reflect current best practices. 
            For additional technical resources, visit the main <Link to="/" className="text-blue-600 hover:underline">Engineering Resources Hub</Link>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Documents;
