
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Download, Eye } from "lucide-react";

const Notes = () => {
  const noteCategories = [
    {
      category: "Computer Science Fundamentals",
      notes: [
        { title: "Data Structures Cheat Sheet", type: "PDF", size: "2.5 MB", downloads: 1250 },
        { title: "Algorithm Complexity Guide", type: "PDF", size: "1.8 MB", downloads: 890 },
        { title: "Object-Oriented Programming Principles", type: "PDF", size: "3.2 MB", downloads: 1100 }
      ]
    },
    {
      category: "Programming Languages",
      notes: [
        { title: "Python Quick Reference", type: "PDF", size: "1.5 MB", downloads: 2100 },
        { title: "JavaScript ES6+ Features", type: "PDF", size: "2.1 MB", downloads: 1800 },
        { title: "Java Concurrency Notes", type: "PDF", size: "2.8 MB", downloads: 950 }
      ]
    },
    {
      category: "System Design",
      notes: [
        { title: "Scalability Patterns", type: "PDF", size: "4.1 MB", downloads: 1650 },
        { title: "Database Design Principles", type: "PDF", size: "3.5 MB", downloads: 1200 },
        { title: "Microservices Architecture", type: "PDF", size: "5.2 MB", downloads: 1400 }
      ]
    },
    {
      category: "Interview Preparation",
      notes: [
        { title: "Technical Interview Questions", type: "PDF", size: "2.9 MB", downloads: 3200 },
        { title: "Behavioral Interview Guide", type: "PDF", size: "1.7 MB", downloads: 2800 },
        { title: "Salary Negotiation Tips", type: "PDF", size: "1.2 MB", downloads: 2100 }
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
                <FileText className="w-8 h-8 inline mr-2 text-green-600" />
                Study Notes
              </h1>
              <p className="text-gray-600 mt-1">Quick reference guides and study materials</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {noteCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.notes.map((note, noteIndex) => (
                <Card key={noteIndex} className="hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {note.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">{note.type}</Badge>
                      <span className="text-sm text-gray-600">{note.size}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{note.downloads} downloads</span>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          Preview
                        </Button>
                        <Button size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
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

export default Notes;
