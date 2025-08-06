import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Analytics } from "@vercel/analytics/react";
import { ArrowLeft, Briefcase, MapPin, Clock, DollarSign, ExternalLink, Calendar, Filter, Server, Github, Linkedin, Twitter, ArrowRight, CheckCircle, Code } from "lucide-react";

// --- Data arrays (no changes from your original file) ---
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
    // ... (The rest of your internships data remains unchanged)
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

const tips = [
    "Start preparing 6-8 months in advance, especially for top tech roles.",
    "Build a strong GitHub portfolio with 3-5 substantial, well-documented projects.",
    "Practice consistently on platforms like LeetCode, HackerRank, and GeeksforGeeks.",
    "Maintain a strong academic record (often 7.0+ CGPA or 70%+) as many companies have cutoffs.",
    "Participate in hackathons and coding competitions to demonstrate practical skills.",
    "Tailor your resume for each application, highlighting relevant skills and projects.",
    "Network actively on LinkedIn and attend virtual tech talks and career fairs.",
    "Prepare for both technical deep-dives (DSA, System Design) and behavioral interview rounds."
];


const Internships = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedRegion, setSelectedRegion] = useState("all");

    const filteredInternships = internships.filter(internship => {
        const categoryMatch = selectedCategory === "all" || internship.category === selectedCategory;
        const regionMatch = selectedRegion === "all" || internship.region === selectedRegion;
        return categoryMatch && regionMatch;
    });
    
    const getCategoryBadgeClass = (category) => {
        const classes = {
            "US Tech Giants": "bg-blue-900/80 text-blue-200 border border-blue-600/50",
            "Big IT & Consulting Firms": "bg-purple-900/80 text-purple-200 border border-purple-600/50",
            "Financial & Analytics": "bg-emerald-900/80 text-emerald-200 border border-emerald-600/50",
            "Banking & Insurance": "bg-amber-900/80 text-amber-200 border border-amber-600/50",
            "Global & Other Roles": "bg-cyan-900/80 text-cyan-200 border border-cyan-600/50",
            "Semiconductor & Hardware": "bg-red-900/80 text-red-200 border border-red-600/50",
            "Pharma & Biotech": "bg-teal-900/80 text-teal-200 border border-teal-600/50",
            "Logistics & E-commerce": "bg-orange-900/80 text-orange-200 border border-orange-600/50",
            "Government & Specialist Roles": "bg-gray-700/80 text-gray-200 border border-gray-500/50",
            "default": "bg-neutral-700 text-neutral-200 border border-neutral-600"
        };
        return classes[category] || classes['default'];
    };

    return (
        <div className="min-h-screen bg-neutral-950 flex flex-col font-sans text-white">
            <Analytics />

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

            <main className="flex-1 w-full pt-12 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 flex items-center justify-center gap-4">
                            <Briefcase className="w-10 h-10 text-blue-400" />
                            Engineering Internship Opportunities
                        </h2>
                        <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
                            Curated Summer 2025 internships from global and Indian companies. Updated for June 2025.
                        </p>
                    </div>

                    <Card className="mb-8 bg-neutral-900/70 border border-neutral-800 p-4 rounded-xl">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <div className="flex items-center gap-2 text-neutral-300 font-semibold">
                               <Filter className="w-5 h-5 text-blue-400" />
                               <span>Filter by:</span>
                            </div>
                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger className="w-full sm:w-64 bg-neutral-800 border-neutral-700 text-white rounded-lg">
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                                    {categories.map((category) => (
                                        <SelectItem key={category.value} value={category.value} className="focus:bg-blue-600 focus:text-white">{category.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                                <SelectTrigger className="w-full sm:w-48 bg-neutral-800 border-neutral-700 text-white rounded-lg">
                                    <SelectValue placeholder="Select region" />
                                </SelectTrigger>
                                <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                                    {regions.map((region) => (
                                        <SelectItem key={region.value} value={region.value} className="focus:bg-blue-600 focus:text-white">{region.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <span className="text-sm text-neutral-400 font-medium ml-0 sm:ml-auto">
                                {filteredInternships.length} opportunities found
                            </span>
                        </div>
                    </Card>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                        {filteredInternships.map((internship, index) => (
                            <Card key={index} className="bg-neutral-900 border border-neutral-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col">
                                <CardHeader>
                                    <div className="flex justify-between items-start gap-4">
                                        <div>
                                            <p className="text-xl font-semibold text-white">{internship.role}</p>
                                            <p className="text-base font-medium text-blue-400 mt-1">{internship.company}</p>
                                        </div>
                                        <Badge className={`text-xs font-medium py-1 px-3 rounded-full whitespace-nowrap ${internship.region === 'US' ? 'bg-green-900/90 text-green-100 border border-green-600/50' : 'bg-orange-900/90 text-orange-100 border border-orange-600/50'}`}>
                                            {internship.region}
                                        </Badge>
                                    </div>
                                    <Badge className={`text-xs font-medium py-1 px-2 rounded-full self-start mt-2 ${getCategoryBadgeClass(internship.category)}`}>
                                        {internship.category}
                                    </Badge>
                                </CardHeader>
                                <CardContent className="space-y-4 flex-grow flex flex-col">
                                    <div className="space-y-2 text-sm text-neutral-400">
                                        <div className="flex items-center"><MapPin size={14} className="mr-2.5 text-neutral-500" /> {internship.location}</div>
                                        <div className="flex items-center"><Clock size={14} className="mr-2.5 text-neutral-500" /> {internship.duration}</div>
                                        <div className="flex items-center"><DollarSign size={14} className="mr-2.5 text-neutral-500" /> {internship.stipend}</div>
                                        <div className="flex items-center"><Calendar size={14} className="mr-2.5 text-neutral-500" /> <span className="font-medium text-neutral-300">Apply:</span>&nbsp;{internship.applicationPeriod}</div>
                                    </div>

                                    <div className="border-t border-neutral-800 pt-4">
                                        <h4 className="font-semibold text-neutral-200 mb-2 flex items-center gap-2"><Code size={16} /> Requirements:</h4>
                                        <ul className="text-sm text-neutral-400 space-y-1.5 pl-4 list-disc list-outside">
                                            {internship.requirements.map((req, idx) => <li key={idx}>{req}</li>)}
                                        </ul>
                                    </div>
                                    <div className="mt-auto pt-4 flex justify-between items-center border-t border-neutral-800">
                                        <span className="text-sm text-red-400 font-bold">
                                            Deadline: {internship.deadline}
                                        </span>
                                        <Button size="sm" asChild className="bg-blue-600 text-white hover:bg-blue-700 font-semibold transition-all group">
                                            <a href={internship.url} target="_blank" rel="noopener noreferrer">
                                                Apply Now
                                                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <Card className="bg-neutral-900 border border-neutral-800">
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-white">Internship Success Guide</CardTitle>
                            <p className="text-neutral-400">Key strategies to maximize your chances of landing a top tech internship.</p>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {tips.map((tip, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-neutral-300">{tip}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </main>
            
            <footer className="bg-neutral-900 border-t border-neutral-800">
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

export default Internships;
