
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Eye } from "lucide-react";

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
          <h1 className="text-3xl font-serif text-black">Study Notes</h1>
          <p className="text-gray-600 text-sm mt-1">Quick reference guides and study materials</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed">
            This collection contains comprehensive <strong>study notes</strong> and quick reference materials 
            covering fundamental computer science concepts, programming languages, and system design principles. 
            All materials are available in PDF format for easy download and offline study.
          </p>
        </div>

        {noteCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-8">
            <h2 className="text-xl font-serif text-black mb-4 border-b border-gray-200 pb-2">
              {category.category}
            </h2>
            
            <div className="space-y-3">
              {category.notes.map((note, noteIndex) => (
                <Card key={noteIndex} className="border border-gray-200 hover:shadow-sm transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-medium text-black mb-1">{note.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{note.type}</span>
                          <span>{note.size}</span>
                          <span>{note.downloads} downloads</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="text-xs">
                          <Eye className="w-3 h-3 mr-1" />
                          Preview
                        </Button>
                        <Button size="sm" className="text-xs">
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-xs">
            All study materials are regularly updated and verified for accuracy. 
            For additional resources, visit the main <Link to="/" className="text-blue-600 hover:underline">Engineering Resources Hub</Link>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Notes;
