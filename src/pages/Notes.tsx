
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, FileText } from "lucide-react";

const Notes = () => {
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
        <div className="flex items-center justify-center min-h-[400px]">
          <Card className="max-w-md w-full">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon</h2>
                <p className="text-gray-600 mb-6">
                  We're working hard to bring you comprehensive study notes and documentation. 
                  Stay tuned for updates!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <FileText className="w-4 h-4 mr-2" />
                  Study materials in development
                </div>
                
                <Button asChild className="w-full">
                  <Link to="/">
                    Explore Other Resources
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Notes;
