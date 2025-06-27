
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users, ExternalLink, Trophy, Presentation, Coffee } from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "Smart India Hackathon 2025",
      organizer: "Government of India",
      type: "Hackathon",
      category: "Competition",
      date: "2025-02-15",
      endDate: "2025-02-17",
      time: "09:00 AM - 06:00 PM",
      location: "Various Institutes Across India",
      mode: "Offline",
      participants: "50,000+ expected",
      prize: "₹1,00,000 - ₹10,00,000",
      description: "India's biggest hackathon where students solve real-world problems for government ministries and industries",
      requirements: ["Teams of 6 members", "Students from recognized institutions", "Original problem statements"],
      registrationDeadline: "2025-01-20",
      url: "https://sih.gov.in/",
      tags: ["Government", "Innovation", "Problem Solving"]
    },
    {
      title: "Google Developer Student Clubs Solution Challenge",
      organizer: "Google",
      type: "Competition",
      category: "Development",
      date: "2025-03-01",
      endDate: "2025-05-30",
      time: "Online Submission",
      location: "Global (Virtual)",
      mode: "Online",
      participants: "10,000+ teams globally",
      prize: "$3,000 - $1,000 per team member",
      description: "Build solutions for one or more of the UN's 17 Sustainable Development Goals using Google technology",
      requirements: ["Teams of 1-4 members", "Use Google technology", "Address UN SDGs"],
      registrationDeadline: "2025-02-15",
      url: "https://developers.google.com/community/dsc-solution-challenge",
      tags: ["Google", "SDGs", "Social Impact"]
    },
    {
      title: "Microsoft Imagine Cup India Finals",
      organizer: "Microsoft India",
      type: "Competition",
      category: "Innovation",
      date: "2025-04-10",
      endDate: "2025-04-12",
      time: "10:00 AM - 05:00 PM",
      location: "Microsoft Office, Hyderabad",
      mode: "Hybrid",
      participants: "200+ teams",
      prize: "₹5,00,000 + Azure Credits",
      description: "Premier technology competition for student entrepreneurs to showcase innovative solutions",
      requirements: ["Student teams", "Technology-based solutions", "Business viability"],
      registrationDeadline: "2025-03-01",
      url: "https://imaginecup.microsoft.com/",
      tags: ["Microsoft", "Entrepreneurship", "Technology"]
    },
    {
      title: "TechCrunch Startup Battlefield India",
      organizer: "TechCrunch",
      type: "Pitch Competition",
      category: "Startup",
      date: "2025-03-20",
      endDate: "2025-03-21",
      time: "11:00 AM - 06:00 PM",
      location: "Bangalore International Exhibition Centre",
      mode: "Offline",
      participants: "100+ startups",
      prize: "$10,000 + Mentorship",
      description: "Premier startup competition where early-stage startups compete for funding and exposure",
      requirements: ["Early-stage startups", "Innovative products", "Scalable business model"],
      registrationDeadline: "2025-02-20",
      url: "https://techcrunch.com/startup-battlefield/",
      tags: ["Startup", "Funding", "Pitch"]
    },
    {
      title: "IEEE International Conference on AI & ML",
      organizer: "IEEE India",
      type: "Conference",
      category: "Academic",
      date: "2025-05-15",
      endDate: "2025-05-17",
      time: "09:00 AM - 05:00 PM",
      location: "IIT Bombay, Mumbai",
      mode: "Hybrid",
      participants: "1,500+ attendees",
      prize: "Best Paper Awards",
      description: "Premier academic conference on Artificial Intelligence and Machine Learning research",
      requirements: ["Research papers", "Academic affiliation", "Peer review process"],
      registrationDeadline: "2025-04-01",
      url: "https://ieeeconference-aiml.org/",
      tags: ["IEEE", "Research", "AI/ML"]
    },
    {
      title: "Flipkart GRID 5.0",
      organizer: "Flipkart",
      type: "Hackathon",
      category: "Industry",
      date: "2025-06-01",
      endDate: "2025-06-30",
      time: "Online Challenge",
      location: "Virtual + Bangalore Finals",
      mode: "Hybrid",
      participants: "50,000+ participants",
      prize: "₹5,00,000 + Job Offers",
      description: "India's biggest e-commerce hackathon focusing on supply chain and technology challenges",
      requirements: ["Engineering/MBA students", "Problem-solving skills", "Team of 2-4 members"],
      registrationDeadline: "2025-05-15",
      url: "https://grid.flipkart.com/",
      tags: ["Flipkart", "E-commerce", "Supply Chain"]
    },
    {
      title: "AWS DeepRacer Student League",
      organizer: "Amazon Web Services",
      type: "Competition",
      category: "Machine Learning",
      date: "2025-07-10",
      endDate: "2025-09-30",
      time: "Online Racing",
      location: "Virtual Championship",
      mode: "Online",
      participants: "5,000+ students",
      prize: "$5,000 + AWS Credits",
      description: "Autonomous car racing league powered by machine learning for students",
      requirements: ["Students aged 16+", "Basic ML knowledge", "AWS account"],
      registrationDeadline: "2025-06-30",
      url: "https://aws.amazon.com/deepracer/league/",
      tags: ["AWS", "Machine Learning", "Racing"]
    },
    {
      title: "GitHub Campus Expert Summit India",
      organizer: "GitHub",
      type: "Workshop",
      category: "Community",
      date: "2025-08-05",
      endDate: "2025-08-07",
      time: "10:00 AM - 04:00 PM",
      location: "Multiple Cities",
      mode: "Offline",
      participants: "500+ students",
      prize: "Certification + Swag",
      description: "Community building and technical skills workshop for student developers",
      requirements: ["Active GitHub profile", "Community leadership interest", "Technical background"],
      registrationDeadline: "2025-07-15",
      url: "https://education.github.com/campus-experts",
      tags: ["GitHub", "Community", "Open Source"]
    },
    {
      title: "NASSCOM Product Conclave Student Track",
      organizer: "NASSCOM",
      type: "Conference",
      category: "Industry",
      date: "2025-09-20",
      endDate: "2025-09-22",
      time: "09:30 AM - 06:00 PM",
      location: "Hyderabad Convention Centre",
      mode: "Offline",
      participants: "2,000+ delegates",
      prize: "Networking + Internships",
      description: "Premier product management and technology conference with dedicated student track",
      requirements: ["Student ID", "Interest in product management", "Technology background"],
      registrationDeadline: "2025-08-30",
      url: "https://nasscom.in/product-conclave",
      tags: ["NASSCOM", "Product Management", "Industry"]
    },
    {
      title: "Facebook Developer Circles Community Challenge",
      organizer: "Meta",
      type: "Hackathon",
      category: "Social Impact",
      date: "2025-10-15",
      endDate: "2025-12-15",
      time: "2-month Challenge",
      location: "Global (Virtual)",
      mode: "Online",
      participants: "20,000+ developers",
      prize: "$1,000 per team + Mentorship",
      description: "Global challenge to build solutions addressing social issues in local communities",
      requirements: ["Teams of 2-5", "Use Facebook technologies", "Address social issues"],
      registrationDeadline: "2025-09-30",
      url: "https://developers.facebook.com/developercircles/",
      tags: ["Meta", "Social Impact", "Community"]
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case "Hackathon":
      case "Competition":
        return Trophy;
      case "Conference":
        return Presentation;
      case "Workshop":
        return Coffee;
      default:
        return Calendar;
    }
  };

  const getEventBadgeColor = (category: string) => {
    switch (category) {
      case "Competition":
        return "bg-red-100 text-red-800";
      case "Academic":
        return "bg-blue-100 text-blue-800";
      case "Industry":
        return "bg-green-100 text-green-800";
      case "Community":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Tech Events & Competitions</h2>
        <p className="text-gray-600">Upcoming events, hackathons, and competitions for students</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {events.map((event, index) => {
          const EventIcon = getEventIcon(event.type);
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <EventIcon className="w-5 h-5 text-blue-600" />
                    <Badge className={getEventBadgeColor(event.category)}>
                      {event.category}
                    </Badge>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {event.mode}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {event.title}
                </CardTitle>
                <p className="text-sm font-medium text-blue-600">{event.organizer}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm mb-4">{event.description}</p>
                
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date} {event.endDate && `- ${event.endDate}`}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {event.participants}
                  </div>
                  {event.prize && (
                    <div className="flex items-center">
                      <Trophy className="w-4 h-4 mr-2" />
                      Prize: {event.prize}
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Requirements:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {event.requirements.map((req, idx) => (
                      <li key={idx}>• {req}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {event.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-red-600 font-medium">
                    Register by: {event.registrationDeadline}
                  </span>
                  <Button size="sm" asChild>
                    <a href={event.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Register
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
