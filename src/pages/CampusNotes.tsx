
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  BookOpen, 
  FileText,
  Beaker,
  PenTool,
  Award,
  Code,
  Zap,
  Globe,
  GraduationCap,
  Calendar,
  Users,
  Download
} from "lucide-react";

const CampusNotes = () => {
  const academicYears = [
    {
      year: "First Year",
      color: "from-green-400 to-blue-500",
      description: "Foundation subjects and basic engineering concepts",
      subjects: ["Mathematics", "Physics", "Chemistry", "Programming", "Engineering Drawing", "Environmental Science"],
      resources: [
       resources: [
  { 
    name: "Lab Notes", 
    icon: Beaker, 
    count: 25, 
    description: "Physics, Chemistry & Programming lab experiments", 
    link: "https://drive.google.com/your-lab-notes-link"
  },
  { 
    name: "Lab Records", 
    icon: FileText, 
    count: 30, 
    description: "Complete lab record formats and observations", 
    link: "https://drive.google.com/your-lab-records-link"
  },
  {
    name: "Assignments", 
    icon: PenTool, 
    count: 40, 
    description: "Solved assignments for all subjects", 
    link: "https://drive.google.com/your-assignments-link"
  },
  {
    name: "Previous Year Papers", 
    icon: Award, 
    count: 80, 
    description: "Last 5 years question papers with solutions", 
    link: "https://drive.google.com/your-pyq-link"
  },
  {
    name: "Micro Projects", 
    icon: Code, 
    count: 15, 
    description: "Small projects for skill development", 
    link: "https://drive.google.com/your-micro-projects-link"
  },
  {
    name: "Subject Notes", 
    icon: BookOpen, 
    count: 50, 
    description: "Comprehensive notes for all subjects", 
    link: "https://drive.google.com/your-subject-notes-link"
  },
  {
    name: "Syllabus Copy", 
    icon: FileText, 
    count: 8, 
    description: "Updated syllabus for all subjects", 
    link: "https://drive.google.com/your-syllabus-copy-link"
  },
  {
    name: "Projects", 
    icon: Zap, 
    count: 12, 
    description: "Semester projects with documentation", 
    link: "https://drive.google.com/your-projects-link"
  }
]

      ]
    },
    {
      year: "Second Year",
      color: "from-purple-400 to-pink-500",
      description: "Core engineering subjects and programming fundamentals",
      subjects: ["Data Structures", "Digital Electronics", "Database Systems", "Computer Organization", "Mathematics II", "OOP"],
      resources: [
        { name: "Lab Notes", icon: Beaker, count: 35, description: "DSA, DBMS & Digital Electronics labs" },
        { name: "Lab Records", icon: FileText, count: 42, description: "Programming and circuit lab records" },
        { name: "Assignments", icon: PenTool, count: 55, description: "Coding assignments and problem solving" },
        { name: "Previous Year Papers", icon: Award, count: 95, description: "Exam papers with detailed solutions" },
        { name: "Micro Projects", icon: Code, count: 22, description: "Web development and database projects" },
        { name: "Subject Notes", icon: BookOpen, count: 65, description: "Core CS subjects comprehensive notes" },
        { name: "Syllabus Copy", icon: FileText, count: 8, description: "Current semester syllabus" },
        { name: "Projects", icon: Zap, count: 18, description: "Major semester projects" }
      ]
    },
    {
      year: "Third Year",
      color: "from-orange-400 to-red-500",
      description: "Advanced topics and specialization subjects",
      subjects: ["Software Engineering", "Computer Networks", "Operating Systems", "Web Development", "AI/ML", "System Design"],
      resources: [
        { name: "Lab Notes", icon: Beaker, count: 45, description: "Advanced programming and networking labs" },
        { name: "Lab Records", icon: FileText, count: 50, description: "System programming and network labs" },
        { name: "Assignments", icon: PenTool, count: 65, description: "Complex programming assignments" },
        { name: "Previous Year Papers", icon: Award, count: 110, description: "Advanced subject question papers" },
        { name: "Micro Projects", icon: Code, count: 28, description: "Full-stack and AI/ML projects" },
        { name: "Subject Notes", icon: BookOpen, count: 75, description: "Advanced CS concepts and theories" },
        { name: "Syllabus Copy", icon: FileText, count: 10, description: "Specialization track syllabus" },
        { name: "Projects", icon: Zap, count: 25, description: "Industry-standard projects" }
      ]
    },
    {
      year: "Fourth Year",
      color: "from-teal-400 to-cyan-500",
      description: "Final year projects and industry preparation",
      subjects: ["Capstone Project", "Blockchain", "Cloud Computing", "DevOps", "Mobile Development", "Research Methodology"],
      resources: [
        { name: "Lab Notes", icon: Beaker, count: 30, description: "Research and advanced technology labs" },
        { name: "Lab Records", icon: FileText, count: 35, description: "Project development records" },
        { name: "Assignments", icon: PenTool, count: 45, description: "Research-based assignments" },
        { name: "Previous Year Papers", icon: Award, count: 85, description: "Final year examination papers" },
        { name: "Micro Projects", icon: Code, count: 20, description: "Industry-relevant mini projects" },
        { name: "Subject Notes", icon: BookOpen, count: 60, description: "Advanced technology notes" },
        { name: "Syllabus Copy", icon: FileText, count: 8, description: "Final year curriculum" },
        { name: "Projects", icon: Zap, count: 35, description: "Major capstone and research projects" }
      ]
    }
  ];

  const getTotalResources = () => {
    return academicYears.reduce((total, year) => {
      return total + year.resources.reduce((yearTotal, resource) => yearTotal + resource.count, 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-300 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild className="text-blue-600 hover:bg-blue-50">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Home
              </Link>
            </Button>
            <Button asChild>
              <Link to="/">
                <Globe className="w-4 h-4 mr-1" />
                Main Page
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center relative">
              <GraduationCap className="w-12 h-12 text-white" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-black mb-6">Campus Notes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Complete academic resources for all four years of engineering - from foundation to specialization
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-blue-600" />
              <span className="font-semibold">{getTotalResources()}+ Resources</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-green-600" />
              <span className="font-semibold">4 Academic Years</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2 text-purple-600" />
              <span className="font-semibold">All Subjects Covered</span>
            </div>
          </div>
        </div>

        {/* Academic Years Grid */}
        <div className="space-y-12">
          {academicYears.map((yearData, yearIndex) => (
            <div key={yearIndex} className="relative">
              {/* Year Header */}
              <div className={`bg-gradient-to-r ${yearData.color} p-6 rounded-t-2xl text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{yearData.year}</h2>
                    <p className="text-white/90 text-lg mb-4">{yearData.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {yearData.subjects.map((subject, index) => (
                        <Badge key={index} className="bg-white/20 text-white border-white/30">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold">
                      {yearData.resources.reduce((total, resource) => total + resource.count, 0)}
                    </div>
                    <div className="text-white/90">Total Resources</div>
                  </div>
                </div>
              </div>

              {/* Resources Grid */}
              <div className="bg-white border border-gray-200 rounded-b-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {yearData.resources.map((resource, resourceIndex) => {
                    const IconComponent = resource.icon;
                    return (
                      <Card key={resourceIndex} className="hover:shadow-lg transition-all duration-200 border-2 hover:border-blue-200">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <IconComponent className="w-5 h-5 text-blue-600" />
                              </div>
                              <CardTitle className="text-sm font-semibold text-black">
                                {resource.name}
                              </CardTitle>
                            </div>
                            <Badge className="bg-green-100 text-green-800 text-xs">
                              {resource.count}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                            {resource.description}
                          </p>
                          <Button size="sm" variant="outline" className="w-full text-xs hover:bg-blue-50">
                            <Download className="w-3 h-3 mr-1" />
                            Access Files
                          </Button>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Overview */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-black text-center mb-6">What Makes Our Campus Notes Special?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Peer Reviewed</h4>
                <p className="text-gray-600 text-sm">All content is reviewed and approved by senior students and faculty</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Always Updated</h4>
                <p className="text-gray-600 text-sm">Content is regularly updated to match current curriculum and standards</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Easy Access</h4>
                <p className="text-gray-600 text-sm">Download or view online - access your resources anytime, anywhere</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-black mb-6">Campus Notes by Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{getTotalResources()}+</div>
              <p className="text-sm text-gray-600">Total Resources</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">24</div>
              <p className="text-sm text-gray-600">Core Subjects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
              <p className="text-sm text-gray-600">Academic Years</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
              <p className="text-sm text-gray-600">Projects</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CampusNotes;
