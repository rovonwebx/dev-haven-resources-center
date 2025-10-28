import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Analytics } from "@vercel/analytics/react";
import { ArrowLeft, Calendar, Ticket, PlusCircle, Server, Pin } from "lucide-react";
import Events from "@/components/Events"; // Assuming this component lists more events

const EventsPage = () => {
  const featuredEvent = {
    title: "Innovate AI 2025 Hackathon",
    date: "August 15-17, 2025",
    location: "Virtual & In-Person (Bangalore)",
    description: "Join the brightest minds to build the next generation of AI applications. Compete for over $20,000 in prizes, attend workshops from industry leaders, and network with top tech companies.",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200",
    url: "#", // Using a placeholder link
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col font-sans text-gray-900">
      <Analytics />

      {/* Consistent Header */}
      <header className="sticky top-0 w-full border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-xl z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
              <Server className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Center of Knowledge & Resources</h1>
              <p className="text-xs text-neutral-400 font-medium tracking-wider uppercase">Professional Resource Hub</p>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="text-neutral-300 hover:bg-neutral-800 hover:text-white">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Hub
              </Link>
            </Button>
            <a href="https://dhrc-tools.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-4 py-2 rounded-lg transition-all">Access Portal</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Title Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 flex items-center justify-center gap-4">
              <Ticket className="w-10 h-10 text-blue-400" />
              Tech Events & Competitions
            </h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
              Discover upcoming hackathons, workshops, conferences, and tech competitions to showcase your skills and connect with the community.
            </p>
          </div>

          {/* Featured Event Section */}
          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6">Featured Event</h3>
            <Card className="bg-neutral-900 overflow-hidden rounded-xl border border-neutral-800 md:grid md:grid-cols-2 shadow-2xl shadow-blue-900/20">
              <div className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4 text-sm font-bold bg-purple-900/80 text-purple-200 border border-purple-600/50">Hackathon</Badge>
                <h4 className="text-2xl font-bold text-white">{featuredEvent.title}</h4>
                <div className="text-sm text-neutral-400 mt-3 flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-2">
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-neutral-500" /> {featuredEvent.date}</div>
                    <div className="flex items-center gap-2"><Pin className="w-4 h-4 text-neutral-500" /> {featuredEvent.location}</div>
                </div>
                <p className="mt-4 text-neutral-300 leading-relaxed">{featuredEvent.description}</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 font-semibold transition-all group">
                    <a href={featuredEvent.url} target="_blank" rel="noopener noreferrer">
                      Register Now <Ticket className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-neutral-300 border-neutral-700 hover:bg-neutral-800 hover:text-white">
                    <a href={featuredEvent.url} target="_blank" rel="noopener noreferrer">Learn More</a>
                  </Button>
                </div>
              </div>
              <img
                src={featuredEvent.imageUrl}
                alt={`Poster for ${featuredEvent.title}`}
                onError={(e) => (e.currentTarget.src = "/fallback-image.jpg")}
                className="w-full h-64 md:h-full object-cover"
              />
            </Card>
          </section>

          {/* Upcoming Events List */}
          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-white mb-6">Upcoming Events</h3>
            {/* 
              The <Events /> component will be rendered here.
              Ensure the component generates event cards that match the dark theme.
              Each card should ideally have a structure like:
              <Card className="bg-neutral-900 border border-neutral-800 hover:border-blue-500/50">
                ...
              </Card>
            */}
            <Events />
          </section>

          {/* "Host an Event" Call-to-Action Section */}
          <section>
            <Card className="bg-gradient-to-r from-blue-900/70 via-neutral-900 to-neutral-900 border border-blue-800/50 shadow-lg">
              <CardContent className="p-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
                <div className="flex items-center gap-6">
                  <div className="hidden sm:block bg-blue-600/20 p-4 rounded-full border border-blue-500/30">
                     <PlusCircle size={32} className="flex-shrink-0 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white">List Your Tech Event</h3>
                    <p className="text-neutral-400 mt-1">
                      Have a workshop, hackathon, or conference to share? Submit your event to reach thousands of students and developers on our platform.
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700 font-bold w-full lg:w-auto flex-shrink-0 px-6"
                >
                  <Link to="/submit-event">Submit an Event</Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      {/* Consistent Footer */}
      <footer className="bg-neutral-900 border-t border-neutral-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
                <p className="text-sm text-neutral-500">
                    © {new Date().getFullYear()} Center of Knowledge & Resources - All Rights Reserved.
                </p>
                <div className="flex justify-center space-x-6 text-sm mt-4">
                    <Link to="/terms-of-service" className="text-neutral-500 hover:text-blue-400 transition-colors">Terms of Service</Link>
                    <Link to="/privacy-policy" className="text-neutral-500 hover:text-blue-400 transition-colors">Privacy Policy</Link>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default EventsPage;
