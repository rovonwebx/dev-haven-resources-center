
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Events from "@/components/Events";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Tech Events</h1>
              <p className="text-gray-600 text-sm">Upcoming competitions and conferences</p>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Hub
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6">
        <Events />
      </main>
    </div>
  );
};

export default EventsPage;
