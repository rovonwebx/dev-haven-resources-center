import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Briefcase, MapPin, Clock, DollarSign, ExternalLink, Calendar, Filter } from "lucide-react";

const Internships = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const internships = [
    // US Tech Giants - Summer 2025
    {
      company: "Google",
      role: "Software Engineering Intern - Summer 2025",
      location: "Mountain View, CA / Seattle, WA / New York, NY",
      duration: "12-14 weeks",
      stipend: "$9,500/month + housing",
      type: "Summer",
      category: "US Tech Giants",
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
      category: "US Tech Giants",
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
      category: "US Tech Giants",
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
      category: "US Tech Giants",
      requirements: ["Currently pursuing BS/MS in Computer Science", "Experience with C#, Java, or similar languages", "Strong problem-solving skills"],
      deadline: "March 1, 2025",
      applicationPeriod: "January 20 - March 1, 2025",
      url: "https://careers.microsoft.com/students/us/en/us-internship-programs",
      region: "US"
    },

    // Big IT & Consulting Firms - India
    {
      company: "Tata Consultancy Services (TCS)",
      role: "Software Developer Intern - 2025",
      location: "Mumbai, Pune, Bangalore, Hyderabad",
      duration: "8-12 weeks",
      stipend: "₹25,000-35,000/month",
      type: "Summer/Winter",
      category: "Big IT & Consulting Firms",
      requirements: ["BE/BTech in CS/IT/ECE", "Knowledge of Java, Python, or C++", "Good academic record (60%+)"],
      deadline: "March 31, 2025",
      applicationPeriod: "February 1 - March 31, 2025",
      url: "https://www.tcs.com/careers/students-and-graduates",
      region: "India"
    },
    {
      company: "Infosys",
      role: "Software Development Intern - Digital Transformation",
      location: "Bangalore, Mysore, Pune, Chennai",
      duration: "8-12 weeks",
      stipend: "₹30,000-40,000/month",
      type: "Summer",
      category: "Big IT & Consulting Firms",
      requirements: ["Pre-final year engineering students", "CS/IT/ECE/EEE background", "Cloud and AI Engineering skills preferred"],
      deadline: "February 28, 2025",
      applicationPeriod: "January 15 - February 28, 2025",
      url: "https://www.infosys.com/careers/instep.html",
      region: "India"
    },
    {
      company: "HCLTech",
      role: "Software Development Intern - IT Consulting",
      location: "Noida, Chennai, Bangalore",
      duration: "10-12 weeks",
      stipend: "₹28,000-35,000/month",
      type: "Summer",
      category: "Big IT & Consulting Firms",
      requirements: ["Engineering background in CS/IT", "Cybersecurity and Software Development knowledge", "Problem-solving abilities"],
      deadline: "March 20, 2025",
      applicationPeriod: "February 15 - March 20, 2025",
      url: "https://www.hcltech.com/careers",
      region: "India"
    },
    {
      company: "Wipro",
      role: "Software Engineering Intern - Cybersecurity",
      location: "Bangalore, Hyderabad, Chennai, Pune",
      duration: "10-12 weeks",
      stipend: "₹25,000-32,000/month",
      type: "Summer",
      category: "Big IT & Consulting Firms",
      requirements: ["Engineering student in final year", "Cybersecurity and Business Analysis skills", "Minimum 65% academic score"],
      deadline: "April 15, 2025",
      applicationPeriod: "March 1 - April 15, 2025",
      url: "https://careers.wipro.com/careers-home/",
      region: "India"
    },
    {
      company: "Tech Mahindra",
      role: "5G & AI Automation Intern - 2025",
      location: "Pune, Hyderabad, Bangalore",
      duration: "8-10 weeks",
      stipend: "₹30,000-38,000/month",
      type: "Summer",
      category: "Big IT & Consulting Firms",
      requirements: ["BTech in CS/ECE/IT", "Interest in 5G, AI, and Infrastructure Automation", "Strong technical foundation"],
      deadline: "March 25, 2025",
      applicationPeriod: "February 20 - March 25, 2025",
      url: "https://www.techmahindra.com/careers/",
      region: "India"
    },
    {
      company: "Accenture",
      role: "Software Development Intern - Cloud Analytics",
      location: "Bangalore, Hyderabad, Mumbai",
      duration: "10-12 weeks",
      stipend: "₹35,000-45,000/month",
      type: "Summer",
      category: "Big IT & Consulting Firms",
      requirements: ["Engineering background", "Cloud and Analytics knowledge", "Software Development skills"],
      deadline: "February 28, 2025",
      applicationPeriod: "February 1 - February 28, 2025",
      url: "https://www.accenture.com/in-en/careers/students",
      region: "India"
    },
    {
      company: "Capgemini",
      role: "Cloud Data Science Intern - 2025",
      location: "Mumbai, Pune, Chennai",
      duration: "8-12 weeks",
      stipend: "₹32,000-40,000/month",
      type: "Summer",
      category: "Big IT & Consulting Firms",
      requirements: ["BTech/MTech in CS/IT", "Cloud and Data Science background", "Software Development experience"],
      deadline: "March 15, 2025",
      applicationPeriod: "February 10 - March 15, 2025",
      url: "https://www.capgemini.com/careers/",
      region: "India"
    },
    {
      company: "Cognizant",
      role: "AI/ML Cloud Consultant Intern - 2025",
      location: "Chennai, Bangalore, Hyderabad",
      duration: "10-14 weeks",
      stipend: "₹35,000-42,000/month",
      type: "Summer",
      category: "Big IT & Consulting Firms",
      requirements: ["Engineering degree in CS/IT", "AI/ML and Data Science knowledge", "Cloud Consulting interest"],
      deadline: "March 10, 2025",
      applicationPeriod: "February 5 - March 10, 2025",
      url: "https://careers.cognizant.com/",
      region: "India"
    },

    // Financial & Analytics - India
    {
      company: "JPMorgan Chase",
      role: "Software Engineer Intern - Ops Manager Track",
      location: "Mumbai, Bangalore",
      duration: "10-12 weeks",
      stipend: "₹60,000-80,000/month",
      type: "Summer",
      category: "Financial & Analytics",
      requirements: ["Engineering background in CS/IT", "Interest in financial services technology", "Operations Management skills"],
      deadline: "January 31, 2025",
      applicationPeriod: "January 5 - January 31, 2025",
      url: "https://careers.jpmorgan.com/students/programs",
      region: "India"
    },
    {
      company: "Standard Chartered",
      role: "Software Development Intern - 2025",
      location: "Mumbai, Chennai",
      duration: "8-10 weeks",
      stipend: "₹50,000-65,000/month",
      type: "Summer",
      category: "Financial & Analytics",
      requirements: ["BTech in CS/IT/ECE", "Software Development skills", "Financial technology interest"],
      deadline: "February 20, 2025",
      applicationPeriod: "January 25 - February 20, 2025",
      url: "https://www.sc.com/careers/",
      region: "India"
    },
    {
      company: "S&P Global",
      role: "Software Engineering Intern - 2025",
      location: "Gurgaon, Hyderabad",
      duration: "10-12 weeks",
      stipend: "₹55,000-70,000/month",
      type: "Summer",
      category: "Financial & Analytics",
      requirements: ["Engineering background", "Software Engineering skills", "Financial data analysis interest"],
      deadline: "March 5, 2025",
      applicationPeriod: "February 10 - March 5, 2025",
      url: "https://www.spglobal.com/careers/",
      region: "India"
    },
    {
      company: "BlackRock",
      role: "Data Analytics FinTech Intern - 2025",
      location: "Mumbai, Gurgaon",
      duration: "10-14 weeks",
      stipend: "₹65,000-85,000/month",
      type: "Summer",
      category: "Financial & Analytics",
      requirements: ["BTech/MTech in CS/IT/ECE", "Data Analytics and FinTech knowledge", "Strong analytical skills"],
      deadline: "February 15, 2025",
      applicationPeriod: "January 20 - February 15, 2025",
      url: "https://careers.blackrock.com/",
      region: "India"
    },

    // Banking & Insurance - India
    {
      company: "Kotak Life Insurance",
      role: "Operations Manager Intern - 2025",
      location: "Mumbai, Delhi, Bangalore",
      duration: "8-12 weeks",
      stipend: "₹35,000-45,000/month",
      type: "Summer",
      category: "Banking & Insurance",
      requirements: ["MBA/Engineering background", "Operations Management interest", "Insurance domain knowledge preferred"],
      deadline: "March 30, 2025",
      applicationPeriod: "March 1 - March 30, 2025",
      url: "https://www.kotaklife.com/careers",
      region: "India"
    },
    {
      company: "Tata Capital",
      role: "Operations Manager Intern - 2025",
      location: "Mumbai, Pune, Chennai",
      duration: "10-12 weeks",
      stipend: "₹40,000-50,000/month",
      type: "Summer",
      category: "Banking & Insurance",
      requirements: ["Engineering/MBA background", "Financial services interest", "Operations management skills"],
      deadline: "April 10, 2025",
      applicationPeriod: "March 15 - April 10, 2025",
      url: "https://www.tatacapital.com/careers/",
      region: "India"
    },
    {
      company: "SBI Bank",
      role: "Circle Based Officer (CBO) Intern - 2025",
      location: "Multiple locations across India",
      duration: "12 weeks",
      stipend: "₹25,000-35,000/month",
      type: "Summer",
      category: "Banking & Insurance",
      requirements: ["Graduate degree", "Banking sector interest", "2,964 positions available"],
      deadline: "April 30, 2025",
      applicationPeriod: "April 1 - April 30, 2025",
      url: "https://sbi.co.in/careers",
      region: "India"
    },

    // Global & Other Roles - India Operations
    {
      company: "Microsoft India",
      role: "Software Engineering Intern - Product Management",
      location: "Bangalore, Hyderabad",
      duration: "12 weeks",
      stipend: "₹80,000-1,00,000/month",
      type: "Summer",
      category: "Global & Other Roles",
      requirements: ["Currently pursuing BTech/MTech in CS", "Software Engineering and Product Management skills", "Excellent academic record"],
      deadline: "January 31, 2025",
      applicationPeriod: "December 1, 2024 - January 31, 2025",
      url: "https://careers.microsoft.com/students/us/en/india-full-time-opportunities",
      region: "India"
    },
    {
      company: "Tesla India",
      role: "Vehicle Service & Sales Operations Intern",
      location: "Mumbai, Delhi, Bangalore",
      duration: "10-12 weeks",
      stipend: "₹45,000-60,000/month",
      type: "Summer",
      category: "Global & Other Roles",
      requirements: ["Engineering/Business background", "Interest in automotive technology", "Sales and Operations skills"],
      deadline: "March 15, 2025",
      applicationPeriod: "February 15 - March 15, 2025",
      url: "https://www.tesla.com/careers/search/?country=IN",
      region: "India"
    },
    {
      company: "Heineken India",
      role: "Tech Operations Intern - 2025",
      location: "Hyderabad",
      duration: "8-10 weeks",
      stipend: "₹35,000-45,000/month",
      type: "Summer",
      category: "Global & Other Roles",
      requirements: ["Engineering background", "3,000+ tech roles available in Hyderabad", "Operations and technology interest"],
      deadline: "April 20, 2025",
      applicationPeriod: "March 25 - April 20, 2025",
      url: "https://www.theheinekencompany.com/careers",
      region: "India"
    },

    // Government & Specialist Roles - India
    {
      company: "NABARD",
      role: "Data Scientist & AI Engineer Intern - 2025",
      location: "Mumbai, Delhi, Regional Offices",
      duration: "10-12 weeks",
      stipend: "₹30,000-40,000/month",
      type: "Summer",
      category: "Government & Specialist Roles",
      requirements: ["BTech/MTech in CS/IT", "Data Science and AI Engineering skills", "Apply by June 30, 2025"],
      deadline: "June 30, 2025",
      applicationPeriod: "May 15 - June 30, 2025",
      url: "https://www.nabard.org/careers.aspx",
      region: "India"
    },
    {
      company: "UP Government Corporations (GCCs)",
      role: "IT Analytics Support Intern - 2025",
      location: "Lucknow, Noida, Kanpur",
      duration: "8-10 weeks",
      stipend: "₹20,000-30,000/month",
      type: "Summer",
      category: "Government & Specialist Roles",
      requirements: ["Engineering background in IT", "Analytics and support roles", "State government sector interest"],
      deadline: "May 15, 2025",
      applicationPeriod: "April 20 - May 15, 2025",
      url: "https://up.gov.in/en/page/recruitment",
      region: "India"
    },

    // Semiconductor & Hardware - India
    {
      company: "Qualcomm India",
      role: "Software & Hardware Engineering Intern - 2025",
      location: "Bangalore, Hyderabad",
      duration: "12-14 weeks",
      stipend: "₹60,000-80,000/month",
      type: "Summer",
      category: "Semiconductor & Hardware",
      requirements: ["BTech/MTech in ECE/CS", "Hardware and Software Engineering skills", "Semiconductor technology interest"],
      deadline: "February 28, 2025",
      applicationPeriod: "January 30 - February 28, 2025",
      url: "https://www.qualcomm.com/company/careers/students",
      region: "India"
    },
    {
      company: "Photon (Software & Java Development)",
      role: "Java Developer Intern - 2025",
      location: "Bangalore, Chennai",
      duration: "8-12 weeks",
      stipend: "₹35,000-45,000/month",
      type: "Summer",
      category: "Semiconductor & Hardware",
      requirements: ["BTech in CS/IT", "Java Development skills", "Software engineering background"],
      deadline: "March 20, 2025",
      applicationPeriod: "February 25 - March 20, 2025",
      url: "https://www.photon.in/careers/",
      region: "India"
    },

    // Pharma & Biotech - India
    {
      company: "Merck / MSD India",
      role: "Operations Manager Intern - 2025",
      location: "Mumbai, Bangalore",
      duration: "10-12 weeks",
      stipend: "₹40,000-55,000/month",
      type: "Summer",
      category: "Pharma & Biotech",
      requirements: ["Engineering/Life Sciences background", "Operations Management skills", "Pharmaceutical industry interest"],
      deadline: "April 5, 2025",
      applicationPeriod: "March 10 - April 5, 2025",
      url: "https://www.msd.com/careers/",
      region: "India"
    },
    {
      company: "Pfizer India",
      role: "R&D Clinical Trial Coordinator Intern - 2025",
      location: "Mumbai, Chennai",
      duration: "8-10 weeks",
      stipend: "₹35,000-50,000/month",
      type: "Summer",
      category: "Pharma & Biotech",
      requirements: ["Life Sciences/Pharmacy background", "Clinical research interest", "R&D and trial coordination skills"],
      deadline: "April 15, 2025",
      applicationPeriod: "March 20 - April 15, 2025",
      url: "https://www.pfizer.com/careers",
      region: "India"
    },
    {
      company: "Parexel India",
      role: "Clinical Trials Operations Intern - 2025",
      location: "Hyderabad, Bangalore",
      duration: "8-12 weeks",
      stipend: "₹30,000-40,000/month",
      type: "Summer",
      category: "Pharma & Biotech",
      requirements: ["Life Sciences/Medical background", "Clinical trials interest", "Operations and research skills"],
      deadline: "May 1, 2025",
      applicationPeriod: "April 5 - May 1, 2025",
      url: "https://www.parexel.com/careers",
      region: "India"
    },

    // Logistics & E-commerce - India
    {
      company: "Flipkart",
      role: "Category Manager & Data Analyst Intern - 2025",
      location: "Bangalore, Hyderabad",
      duration: "6 months",
      stipend: "₹50,000-60,000/month",
      type: "Full-time",
      category: "Logistics & E-commerce",
      requirements: ["BTech/MTech final year", "Data analysis and category management skills", "E-commerce domain knowledge preferred"],
      deadline: "February 20, 2025",
      applicationPeriod: "January 25 - February 20, 2025",
      url: "https://www.flipkartcareers.com/#!/",
      region: "India"
    },
    {
      company: "Swiggy",
      role: "Associate Software Engineer Intern - 2025",
      location: "Bangalore",
      duration: "6 months",
      stipend: "₹40,000/month",
      type: "Full-time",
      category: "Logistics & E-commerce",
      requirements: ["CS/IT/ECE background", "Full-stack development skills", "Problem-solving abilities"],
      deadline: "March 25, 2025",
      applicationPeriod: "February 20 - March 25, 2025",
      url: "https://careers.swiggy.com/",
      region: "India"
    },
    {
      company: "Delhivery",
      role: "Operations Manager Intern - 2025",
      location: "Gurgaon, Mumbai, Bangalore",
      duration: "6 months",
      stipend: "₹35,000-45,000/month",
      type: "Full-time",
      category: "Logistics & E-commerce",
      requirements: ["Engineering/MBA background", "Logistics and operations interest", "Supply chain management skills"],
      deadline: "April 1, 2025",
      applicationPeriod: "March 5 - April 1, 2025",
      url: "https://www.delhivery.com/careers/",
      region: "India"
    },

    // Other Startups & IT Firms
    {
      company: "The Scalers",
      role: "Offshore Development Intern - 2025",
      location: "Bangalore, Mumbai",
      duration: "6 months",
      stipend: "₹30,000-40,000/month",
      type: "Full-time",
      category: "Other Startups & IT Firms",
      requirements: ["Engineering background", "Offshore development teams experience", "Remote collaboration skills"],
      deadline: "March 30, 2025",
      applicationPeriod: "March 1 - March 30, 2025",
      url: "https://thescalers.com/careers/",
      region: "India"
    },
    {
      company: "Mphasis",
      role: "Infrastructure & App Development Intern - 2025",
      location: "Bangalore, Chennai, Pune",
      duration: "8-12 weeks",
      stipend: "₹28,000-38,000/month",
      type: "Summer",
      category: "Other Startups & IT Firms",
      requirements: ["Engineering background in CS/IT", "Infrastructure and App Development skills", "Consulting interest"],
      deadline: "April 10, 2025",
      applicationPeriod: "March 15 - April 10, 2025",
      url: "https://www.mphasis.com/careers/",
      region: "India"
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "US Tech Giants", label: "US Tech Giants" },
    { value: "Big IT & Consulting Firms", label: "Big IT & Consulting Firms" },
    { value: "Financial & Analytics", label: "Financial & Analytics" },
    { value: "Banking & Insurance", label: "Banking & Insurance" },
    { value: "Global & Other Roles", label: "Global & Other Roles" },
    { value: "Government & Specialist Roles", label: "Government & Specialist Roles" },
    { value: "Semiconductor & Hardware", label: "Semiconductor & Hardware" },
    { value: "Pharma & Biotech", label: "Pharma & Biotech" },
    { value: "Logistics & E-commerce", label: "Logistics & E-commerce" },
    { value: "Other Startups & IT Firms", label: "Other Startups & IT Firms" }
  ];

  const regions = [
    { value: "all", label: "All Regions" },
    { value: "US", label: "United States" },
    { value: "India", label: "India" }
  ];

  const filteredInternships = internships.filter(internship => {
    const categoryMatch = selectedCategory === "all" || internship.category === selectedCategory;
    const regionMatch = selectedRegion === "all" || internship.region === selectedRegion;
    return categoryMatch && regionMatch;
  });

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
                Top 50+ Companies Hiring - June 2025
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
          <div className="flex items-center gap-4 flex-wrap">
            <Filter className="w-5 h-5 text-gray-600" />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
                  <div className="flex gap-2 flex-wrap">
                    <Badge className="bg-green-100 text-green-800">{internship.type}</Badge>
                    <Badge variant="outline">{internship.region}</Badge>
                    <Badge className="bg-purple-100 text-purple-800 text-xs">{internship.category}</Badge>
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
