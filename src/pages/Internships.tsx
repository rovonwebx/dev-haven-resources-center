
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Briefcase, MapPin, Clock, DollarSign, ExternalLink, Calendar } from "lucide-react";

const Internships = () => {
  const internships = [
    // Tech Giants - Summer 2025
    {
      company: "Google",
      role: "Software Engineering Intern - Summer 2025",
      location: "Mountain View, CA / Seattle, WA / New York, NY",
      duration: "12-14 weeks",
      stipend: "$9,500/month + housing",
      type: "Summer",
      requirements: ["Currently pursuing BS/MS in CS or related field", "Strong programming skills in C++, Java, or Python", "Data structures and algorithms knowledge"],
      deadline: "February 28, 2025",
      applicationPeriod: "January 15 - February 28, 2025",
      url: "https://careers.google.com/jobs/results/?company=Google&employment_type=INTERN&q=Software%20Engineering%20Intern"
    },
    {
      company: "Meta",
      role: "Software Engineer Intern - Summer 2025",
      location: "Menlo Park, CA / Seattle, WA / New York, NY",
      duration: "12-16 weeks",
      stipend: "$10,000/month + housing",
      type: "Summer",
      requirements: ["Pursuing BS/MS in Computer Science", "Experience with programming languages like Python, Java, C++", "Understanding of computer science fundamentals"],
      deadline: "March 15, 2025",
      applicationPeriod: "February 1 - March 15, 2025",
      url: "https://www.metacareers.com/careerprograms/students/software-engineer-intern"
    },
    {
      company: "Amazon",
      role: "Software Development Engineer Intern - Summer 2025",
      location: "Seattle, WA / Austin, TX / New York, NY",
      duration: "12 weeks",
      stipend: "$8,800/month + housing",
      type: "Summer",
      requirements: ["Currently enrolled in BS/MS Computer Science program", "Programming experience in Java, C++, or Python", "Understanding of CS fundamentals"],
      deadline: "February 15, 2025",
      applicationPeriod: "January 10 - February 15, 2025",
      url: "https://amazon.jobs/en/teams/internships-for-students"
    },
    {
      company: "Microsoft",
      role: "Software Engineering Intern - Summer 2025",
      location: "Redmond, WA / Atlanta, GA / Cambridge, MA",
      duration: "12 weeks",
      stipend: "$8,500/month + housing",
      type: "Summer",
      requirements: ["Currently pursuing BS/MS in Computer Science", "Experience with C#, Java, or similar languages", "Strong problem-solving skills"],
      deadline: "March 1, 2025",
      applicationPeriod: "January 20 - March 1, 2025",
      url: "https://careers.microsoft.com/students/us/en/us-internship-programs"
    },
    {
      company: "Apple",
      role: "Software Engineering Intern - Summer 2025",
      location: "Cupertino, CA / Austin, TX",
      duration: "12 weeks",
      stipend: "$9,000/month + housing",
      type: "Summer",
      requirements: ["Currently enrolled in BS/MS Computer Science program", "Strong programming skills in Swift, C++, or Python", "iOS/macOS development experience preferred"],
      deadline: "February 20, 2025",
      applicationPeriod: "January 25 - February 20, 2025",
      url: "https://jobs.apple.com/en-us/search?location=united-states-USA&team=internships-STDNT-INTRN"
    },

    // Unicorns and High-Growth Companies
    {
      company: "OpenAI",
      role: "Software Engineering Intern - Summer 2025",
      location: "San Francisco, CA",
      duration: "12 weeks",
      stipend: "$12,000/month + housing",
      type: "Summer",
      requirements: ["Pursuing degree in Computer Science or related field", "Experience with Python, machine learning frameworks", "Interest in AI/ML applications"],
      deadline: "March 10, 2025",
      applicationPeriod: "February 15 - March 10, 2025",
      url: "https://openai.com/careers"
    },
    {
      company: "Stripe",
      role: "Software Engineering Intern - Summer 2025",
      location: "San Francisco, CA / Seattle, WA",
      duration: "12 weeks",
      stipend: "$10,500/month + housing",
      type: "Summer",
      requirements: ["Currently enrolled in CS/Engineering program", "Experience with web technologies", "Interest in fintech and payments"],
      deadline: "February 25, 2025",
      applicationPeriod: "February 1 - February 25, 2025",
      url: "https://stripe.com/jobs/search?s=intern"
    },
    {
      company: "Airbnb",
      role: "Software Engineering Intern - Summer 2025",
      location: "San Francisco, CA",
      duration: "12 weeks",
      stipend: "$9,800/month + housing",
      type: "Summer",
      requirements: ["Pursuing BS/MS in Computer Science", "Full-stack development experience", "Experience with React, Node.js preferred"],
      deadline: "March 5, 2025",
      applicationPeriod: "February 10 - March 5, 2025",
      url: "https://careers.airbnb.com/students/"
    },
    {
      company: "Uber",
      role: "Software Engineering Intern - Summer 2025",
      location: "San Francisco, CA / New York, NY",
      duration: "12 weeks",
      stipend: "$9,200/month + housing",
      type: "Summer",
      requirements: ["Currently enrolled in Computer Science program", "Backend/frontend development experience", "Knowledge of distributed systems"],
      deadline: "February 28, 2025",
      applicationPeriod: "February 5 - February 28, 2025",
      url: "https://www.uber.com/us/en/careers/teams/university/"
    },
    {
      company: "Spotify",
      role: "Software Engineering Intern - Summer 2025",
      location: "New York, NY / Stockholm, Sweden",
      duration: "10-12 weeks",
      stipend: "$8,500/month + benefits",
      type: "Summer",
      requirements: ["Studying Computer Science or related field", "Experience with Java, Python, or JavaScript", "Passion for music and technology"],
      deadline: "March 20, 2025",
      applicationPeriod: "March 1 - March 20, 2025",
      url: "https://www.lifeatspotify.com/students-and-grads"
    },

    // Financial Services
    {
      company: "Goldman Sachs",
      role: "Technology Summer Analyst - 2025",
      location: "New York, NY / Salt Lake City, UT",
      duration: "10 weeks",
      stipend: "$10,800/month + housing",
      type: "Summer",
      requirements: ["Pursuing BS/MS in Computer Science or Engineering", "Strong programming skills", "Interest in financial technology"],
      deadline: "February 1, 2025",
      applicationPeriod: "January 8 - February 1, 2025",
      url: "https://www.goldmansachs.com/careers/students/programs/americas/summer-analyst-program/"
    },
    {
      company: "JPMorgan Chase",
      role: "Software Engineer Intern - Summer 2025",
      location: "New York, NY / Jersey City, NJ / Columbus, OH",
      duration: "10 weeks",
      stipend: "$9,500/month + housing",
      type: "Summer",
      requirements: ["Currently enrolled in Computer Science program", "Programming experience in Java, Python, or C++", "Interest in financial services technology"],
      deadline: "January 31, 2025",
      applicationPeriod: "January 5 - January 31, 2025",
      url: "https://careers.jpmorgan.com/students/programs"
    },
    {
      company: "Citadel",
      role: "Software Engineer Intern - Summer 2025",
      location: "Chicago, IL / New York, NY",
      duration: "11 weeks",
      stipend: "$13,000/month + housing",
      type: "Summer",
      requirements: ["Pursuing degree in Computer Science or related field", "Strong algorithmic problem-solving skills", "Experience with C++, Java, or Python"],
      deadline: "February 10, 2025",
      applicationPeriod: "January 20 - February 10, 2025",
      url: "https://www.citadel.com/careers/students/"
    },

    // Spring/Fall 2025 Opportunities
    {
      company: "Tesla",
      role: "Software Engineering Intern - Spring 2025",
      location: "Palo Alto, CA / Austin, TX",
      duration: "12-16 weeks",
      stipend: "$8,200/month",
      type: "Spring",
      requirements: ["Currently enrolled in CS/Engineering program", "Experience with embedded systems or automotive software", "C++ or Python proficiency"],
      deadline: "December 15, 2024",
      applicationPeriod: "November 1 - December 15, 2024",
      url: "https://www.tesla.com/careers/search/?country=US&type=3"
    },
    {
      company: "Netflix",
      role: "Software Engineering Intern - Fall 2025",
      location: "Los Gatos, CA",
      duration: "12-16 weeks",
      stipend: "$9,000/month",
      type: "Fall",
      requirements: ["Pursuing BS/MS in Computer Science", "Experience with distributed systems", "Interest in streaming technology"],
      deadline: "August 15, 2025",
      applicationPeriod: "July 1 - August 15, 2025",
      url: "https://jobs.netflix.com/search?q=intern"
    },
    {
      company: "LinkedIn",
      role: "Software Engineering Intern - Summer 2025",
      location: "Sunnyvale, CA / New York, NY",
      duration: "12 weeks",
      stipend: "$9,300/month + housing",
      type: "Summer",
      requirements: ["Currently enrolled in Computer Science program", "Full-stack development experience", "Experience with large-scale systems"],
      deadline: "March 8, 2025",
      applicationPeriod: "February 12 - March 8, 2025",
      url: "https://careers.linkedin.com/students"
    },

    // Emerging Tech Companies
    {
      company: "Anthropic",
      role: "AI Safety Research Intern - Summer 2025",
      location: "San Francisco, CA",
      duration: "12 weeks",
      stipend: "$11,500/month + housing",
      type: "Summer",
      requirements: ["Pursuing PhD/MS in CS, AI/ML, or related field", "Research experience in AI safety or alignment", "Strong background in machine learning"],
      deadline: "March 25, 2025",
      applicationPeriod: "March 1 - March 25, 2025",
      url: "https://www.anthropic.com/careers"
    },
    {
      company: "Figma",
      role: "Software Engineering Intern - Summer 2025",
      location: "San Francisco, CA / New York, NY",
      duration: "12 weeks",
      stipend: "$9,700/month + housing",
      type: "Summer",
      requirements: ["Currently enrolled in Computer Science program", "Frontend development experience with React", "Interest in design tools and collaboration"],
      deadline: "February 22, 2025",
      applicationPeriod: "February 8 - February 22, 2025",
      url: "https://www.figma.com/careers/"
    },
    {
      company: "Palantir",
      role: "Software Engineering Intern - Summer 2025",
      location: "Palo Alto, CA / New York, NY / Denver, CO",
      duration: "12 weeks",
      stipend: "$10,200/month + housing",
      type: "Summer",
      requirements: ["Pursuing degree in Computer Science or Engineering", "Strong algorithmic thinking", "Interest in data analysis and big data"],
      deadline: "February 18, 2025",
      applicationPeriod: "January 28 - February 18, 2025",
      url: "https://www.palantir.com/careers/students/"
    },
    {
      company: "Snowflake",
      role: "Software Engineering Intern - Summer 2025",
      location: "San Mateo, CA / Bellevue, WA",
      duration: "12 weeks",
      stipend: "$9,100/month + housing",
      type: "Summer",
      requirements: ["Currently enrolled in CS/Engineering program", "Database systems knowledge", "Experience with cloud platforms"],
      deadline: "March 12, 2025",
      applicationPeriod: "February 20 - March 12, 2025",
      url: "https://careers.snowflake.com/us/en/students"
    },
    {
      company: "Databricks",
      role: "Software Engineering Intern - Summer 2025",
      location: "San Francisco, CA / Mountain View, CA",
      duration: "12 weeks",
      stipend: "$9,400/month + housing",
      type: "Summer",
      requirements: ["Pursuing BS/MS in Computer Science", "Experience with distributed systems", "Knowledge of Apache Spark or similar technologies"],
      deadline: "March 3, 2025",
      applicationPeriod: "February 15 - March 3, 2025",
      url: "https://databricks.com/company/careers/university-recruiting"
    }
  ];

  const tips = [
    "Applications open as early as August for the following summer - apply early!",
    "Tailor your resume to highlight relevant projects and technical skills",
    "Practice coding interviews on platforms like LeetCode and HackerRank",
    "Build a strong portfolio showcasing 2-3 significant projects",
    "Network through LinkedIn, university career fairs, and tech meetups",
    "Prepare for both technical and behavioral interview rounds",
    "Consider applying to multiple companies to increase your chances",
    "Research the company's products, culture, and recent news before interviews"
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                <Briefcase className="w-6 h-6 inline mr-2 text-blue-600" />
                Tech Internships 2025
              </h1>
              <p className="text-gray-600 text-sm">Current opportunities from top tech companies</p>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {internships.map((internship, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {internship.role}
                    </CardTitle>
                    <p className="text-base font-medium text-blue-600 mt-1">{internship.company}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">{internship.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
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
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    Apply: {internship.applicationPeriod}
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
            <p className="text-gray-600">Maximize your chances of landing a tech internship</p>
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
