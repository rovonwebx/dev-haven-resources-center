
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Briefcase, MapPin, Clock, DollarSign, ExternalLink } from "lucide-react";

const Internships = () => {
  const internships = [
    {
      company: "Google",
      role: "Software Engineering Intern",
      location: "Mountain View, CA",
      duration: "12 weeks",
      stipend: "$8,000/month",
      type: "Full-time",
      requirements: ["CS/Engineering student", "Strong programming skills", "Data structures knowledge"],
      deadline: "January 15, 2025",
      url: "https://careers.google.com/jobs/internships/"
    },
    {
      company: "Microsoft",
      role: "Software Development Engineer Intern",
      location: "Redmond, WA",
      duration: "12 weeks",
      stipend: "$7,500/month",
      type: "Full-time",
      requirements: ["Pursuing CS degree", "C#/Java experience", "Problem-solving skills"],
      deadline: "January 20, 2025",
      url: "https://careers.microsoft.com/students/us/en/us-internship-programs"
    },
    {
      company: "Amazon",
      role: "Software Development Engineer Intern",
      location: "Seattle, WA",
      duration: "12 weeks",
      stipend: "$7,200/month",
      type: "Full-time",
      requirements: ["CS/related field", "Programming experience", "Leadership principles"],
      deadline: "February 1, 2025",
      url: "https://amazon.jobs/en/teams/internships-for-students"
    },
    {
      company: "Meta",
      role: "Software Engineering Intern",
      location: "Menlo Park, CA",
      duration: "12-16 weeks",
      stipend: "$8,500/month",
      type: "Full-time",
      requirements: ["CS degree pursuit", "Mobile/web development", "System design basics"],
      deadline: "January 30, 2025",
      url: "https://www.metacareers.com/careerprograms/students/"
    }
  ];

  const tips = [
    "Start applying early - many companies have rolling admissions",
    "Tailor your resume for each application",
    "Practice coding interviews regularly",
    "Build a strong portfolio of projects",
    "Network with current employees and alumni",
    "Prepare for behavioral interviews"
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
                <Briefcase className="w-8 h-8 inline mr-2 text-blue-600" />
                Internship Opportunities
              </h1>
              <p className="text-gray-600 mt-1">Launch your career with top tech companies</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {internships.map((internship, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {internship.role}
                    </CardTitle>
                    <p className="text-lg font-medium text-blue-600 mt-1">{internship.company}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">{internship.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {internship.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {internship.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {internship.stipend}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {internship.requirements.map((req, idx) => (
                      <li key={idx}>• {req}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-red-600 font-medium">
                    Deadline: {internship.deadline}
                  </span>
                  <Button size="sm" asChild>
                    <a href={internship.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Apply Now
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Internship Success Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700">
              {tips.map((tip, index) => (
                <li key={index}>• {tip}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Internships;
