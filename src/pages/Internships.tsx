import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Briefcase, MapPin, Clock, DollarSign, ExternalLink, Calendar, Filter } from "lucide-react";

const Internships = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");

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
      url: "https://careers.google.com/jobs/results/?company=Google&employment_type=INTERN&q=Software%20Engineering%20Intern",
      region: "US"
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
      url: "https://www.metacareers.com/careerprograms/students/software-engineer-intern",
      region: "US"
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
      url: "https://amazon.jobs/en/teams/internships-for-students",
      region: "US"
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
      url: "https://careers.microsoft.com/students/us/en/us-internship-programs",
      region: "US"
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
      url: "https://jobs.apple.com/en-us/search?location=united-states-USA&team=internships-STDNT-INTRN",
      region: "US"
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
      url: "https://openai.com/careers",
      region: "US"
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
      url: "https://stripe.com/jobs/search?s=intern",
      region: "US"
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
      url: "https://careers.airbnb.com/students/",
      region: "US"
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
      url: "https://www.uber.com/us/en/careers/teams/university/",
      region: "US"
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
      url: "https://www.lifeatspotify.com/students-and-grads",
      region: "US"
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
      url: "https://www.goldmansachs.com/careers/students/programs/americas/summer-analyst-program/",
      region: "US"
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
      url: "https://careers.jpmorgan.com/students/programs",
      region: "US"
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
      url: "https://www.citadel.com/careers/students/",
      region: "US"
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
      url: "https://www.tesla.com/careers/search/?country=US&type=3",
      region: "US"
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
      url: "https://jobs.netflix.com/search?q=intern",
      region: "US"
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
      url: "https://careers.linkedin.com/students",
      region: "US"
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
      url: "https://www.anthropic.com/careers",
      region: "US"
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
      url: "https://www.figma.com/careers/",
      region: "US"
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
      url: "https://www.palantir.com/careers/students/",
      region: "US"
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
      url: "https://careers.snowflake.com/us/en/students",
      region: "US"
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
      url: "https://databricks.com/company/careers/university-recruiting",
      region: "US"
    },

    // Indian Companies - Large Scale
    {
      company: "Tata Consultancy Services",
      role: "Software Developer Intern - 2025",
      location: "Mumbai, Pune, Bangalore, Hyderabad",
      duration: "8-12 weeks",
      stipend: "₹25,000-35,000/month",
      type: "Summer/Winter",
      requirements: ["BE/BTech in CS/IT/ECE", "Knowledge of Java, Python, or C++", "Good academic record (60%+)"],
      deadline: "March 31, 2025",
      applicationPeriod: "February 1 - March 31, 2025",
      url: "https://www.tcs.com/careers/students-and-graduates",
      region: "India"
    },
    {
      company: "Wipro",
      role: "Software Engineering Intern - 2025",
      location: "Bangalore, Hyderabad, Chennai, Pune",
      duration: "10-12 weeks",
      stipend: "₹20,000-30,000/month",
      type: "Summer",
      requirements: ["Engineering student in final year", "Programming skills in Java/Python/C++", "Minimum 65% academic score"],
      deadline: "April 15, 2025",
      applicationPeriod: "March 1 - April 15, 2025",
      url: "https://careers.wipro.com/careers-home/",
      region: "India"
    },
    {
      company: "Infosys",
      role: "InStep Internship Program - 2025",
      location: "Bangalore, Mysore, Pune, Chennai",
      duration: "8 weeks",
      stipend: "₹25,000/month + accommodation",
      type: "Summer",
      requirements: ["Pre-final year engineering students", "CS/IT/ECE/EEE background", "Strong problem-solving skills"],
      deadline: "February 28, 2025",
      applicationPeriod: "January 15 - February 28, 2025",
      url: "https://www.infosys.com/careers/instep.html",
      region: "India"
    },
    {
      company: "Microsoft India",
      role: "Software Engineering Intern - 2025",
      location: "Bangalore, Hyderabad",
      duration: "12 weeks",
      stipend: "₹80,000-1,00,000/month",
      type: "Summer",
      requirements: ["Currently pursuing BTech/MTech in CS", "Strong coding skills", "Excellent academic record"],
      deadline: "January 31, 2025",
      applicationPeriod: "December 1, 2024 - January 31, 2025",
      url: "https://careers.microsoft.com/students/us/en/india-full-time-opportunities",
      region: "India"
    },
    {
      company: "Google India",
      role: "Software Engineering Intern - Summer 2025",
      location: "Bangalore, Hyderabad",
      duration: "10-12 weeks",
      stipend: "₹1,00,000-1,20,000/month",
      type: "Summer",
      requirements: ["Pursuing BTech/MTech in CS/related field", "Strong programming foundation", "Data structures and algorithms expertise"],
      deadline: "February 15, 2025",
      applicationPeriod: "January 1 - February 15, 2025",
      url: "https://careers.google.com/jobs/results/?location=India",
      region: "India"
    },

    // Indian Startups - Small to Medium Scale
    {
      company: "Razorpay",
      role: "Software Development Intern - 2025",
      location: "Bangalore",
      duration: "6 months",
      stipend: "₹40,000-50,000/month",
      type: "Full-time",
      requirements: ["BTech/MTech in CS/IT", "Experience with web technologies", "Fintech interest preferred"],
      deadline: "March 20, 2025",
      applicationPeriod: "February 15 - March 20, 2025",
      url: "https://razorpay.com/jobs/",
      region: "India"
    },
    {
      company: "Zomato",
      role: "Product Development Intern - 2025",
      location: "Gurgaon, Delhi",
      duration: "6 months",
      stipend: "₹35,000-45,000/month",
      type: "Full-time",
      requirements: ["Engineering background", "Mobile app development experience", "Interest in food-tech"],
      deadline: "April 10, 2025",
      applicationPeriod: "March 15 - April 10, 2025",
      url: "https://www.zomato.com/careers",
      region: "India"
    },
    {
      company: "Swiggy",
      role: "Software Engineering Intern - 2025",
      location: "Bangalore",
      duration: "6 months",
      stipend: "₹40,000/month",
      type: "Full-time",
      requirements: ["CS/IT/ECE background", "Full-stack development skills", "Problem-solving abilities"],
      deadline: "March 25, 2025",
      applicationPeriod: "February 20 - March 25, 2025",
      url: "https://careers.swiggy.com/",
      region: "India"
    },
    {
      company: "Paytm",
      role: "Backend Development Intern - 2025",
      location: "Noida, Bangalore",
      duration: "6 months",
      stipend: "₹30,000-40,000/month",
      type: "Full-time",
      requirements: ["BTech in CS/IT", "Backend technologies knowledge", "Database management skills"],
      deadline: "April 5, 2025",
      applicationPeriod: "March 10 - April 5, 2025",
      url: "https://jobs.paytm.com/",
      region: "India"
    },
    {
      company: "Ola",
      role: "Mobile App Development Intern - 2025",
      location: "Bangalore",
      duration: "4-6 months",
      stipend: "₹35,000/month",
      type: "Full-time",
      requirements: ["Engineering student", "Android/iOS development experience", "Transportation tech interest"],
      deadline: "March 30, 2025",
      applicationPeriod: "March 1 - March 30, 2025",
      url: "https://www.olacabs.com/careers/",
      region: "India"
    },
    {
      company: "Flipkart",
      role: "Software Development Intern - 2025",
      location: "Bangalore, Hyderabad",
      duration: "6 months",
      stipend: "₹50,000-60,000/month",
      type: "Full-time",
      requirements: ["BTech/MTech final year", "Strong coding skills", "E-commerce domain knowledge preferred"],
      deadline: "February 20, 2025",
      applicationPeriod: "January 25 - February 20, 2025",
      url: "https://www.flipkartcareers.com/#!/",
      region: "India"
    },
    {
      company: "BYJU'S",
      role: "Product Development Intern - 2025",
      location: "Bangalore",
      duration: "6 months",
      stipend: "₹30,000-40,000/month",
      type: "Full-time",
      requirements: ["Engineering background", "Interest in EdTech", "Mobile/Web development skills"],
      deadline: "April 15, 2025",
      applicationPeriod: "March 20 - April 15, 2025",
      url: "https://byjus.com/careers/",
      region: "India"
    },

    // Government and PSUs - India
    {
      company: "ISRO",
      role: "Space Technology Intern - 2025",
      location: "Bangalore, Thiruvananthapuram",
      duration: "8-12 weeks",
      stipend: "₹15,000-20,000/month",
      type: "Summer",
      requirements: ["BTech in CS/ECE/Aerospace", "Strong academic record", "Interest in space technology"],
      deadline: "March 15, 2025",
      applicationPeriod: "February 1 - March 15, 2025",
      url: "https://www.isro.gov.in/careers.html",
      region: "India"
    },
    {
      company: "DRDO",
      role: "Defense Technology Intern - 2025",
      location: "Delhi, Hyderabad, Pune",
      duration: "8 weeks",
      stipend: "₹12,000-18,000/month",
      type: "Summer",
      requirements: ["Engineering student", "Defense technology interest", "Security clearance eligible"],
      deadline: "April 1, 2025",
      applicationPeriod: "March 1 - April 1, 2025",
      url: "https://www.drdo.gov.in/careers",
      region: "India"
    },

    // Emerging Indian Startups
    {
      company: "Nykaa",
      role: "Tech Intern - E-commerce - 2025",
      location: "Mumbai",
      duration: "6 months",
      stipend: "₹25,000-35,000/month",
      type: "Full-time",
      requirements: ["CS/IT background", "E-commerce platform experience", "Beauty-tech interest"],
      deadline: "March 10, 2025",
      applicationPeriod: "February 15 - March 10, 2025",
      url: "https://www.nykaa.com/careers",
      region: "India"
    },
    {
      company: "Meesho",
      role: "Software Development Intern - 2025",
      location: "Bangalore",
      duration: "6 months",
      stipend: "₹40,000/month",
      type: "Full-time",
      requirements: ["Engineering student", "Social commerce interest", "Scalable systems knowledge"],
      deadline: "February 25, 2025",
      applicationPeriod: "February 1 - February 25, 2025",
      url: "https://www.meesho.com/careers",
      region: "India"
    },
    {
      company: "PhonePe",
      role: "FinTech Development Intern - 2025",
      location: "Bangalore",
      duration: "6 months",
      stipend: "₹50,000-60,000/month",
      type: "Full-time",
      requirements: ["BTech in CS/IT", "Payment systems interest", "Security-focused development"],
      deadline: "January 30, 2025",
      applicationPeriod: "January 1 - January 30, 2025",
      url: "https://www.phonepe.com/careers/",
      region: "India"
    }
  ];

  const regions = [
    { value: "all", label: "All Regions" },
    { value: "US", label: "United States" },
    { value: "India", label: "India" },
    { value: "Europe", label: "Europe" },
    { value: "Canada", label: "Canada" },
    { value: "Australia", label: "Australia" }
  ];

  const filteredInternships = selectedRegion === "all" 
    ? internships 
    : internships.filter(internship => internship.region === selectedRegion);

  const tips = [
    "For Indian students: Start preparing early - most companies recruit 6-8 months in advance",
    "Build a strong GitHub portfolio with 3-5 substantial projects",
    "Practice coding on platforms like GeeksforGeeks, LeetCode, and CodeChef",
    "Maintain good academic scores (above 70%) as many companies have cutoff criteria",
    "Participate in hackathons and coding competitions to stand out",
    "Learn relevant technologies based on company requirements",
    "Prepare for both technical and HR interview rounds",
    "Network through LinkedIn, college alumni, and tech communities",
    "Apply through multiple channels: company websites, job portals, and referrals",
    "Keep your resume updated and tailored for each application"
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
              <p className="text-gray-600 text-sm">Current opportunities from global and Indian companies</p>
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
        <div className="mb-6">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                {regions.map((region) => (
                  <SelectItem key={region.value} value={region.value}>
                    {region.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="text-sm text-gray-600">
              Showing {filteredInternships.length} opportunities
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          {filteredInternships.map((internship, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {internship.role}
                    </CardTitle>
                    <p className="text-base font-medium text-blue-600 mt-1">{internship.company}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-green-100 text-green-800">{internship.type}</Badge>
                    <Badge variant="outline">{internship.region}</Badge>
                  </div>
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
