import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, Users, Calendar, Youtube } from "lucide-react";

const StudentProjects = () => {
  const projects = [
    {
      title: "Student Management System",
      author: "Rahul Sharma",
      institution: "IIT Delhi",
      description: "Complete web application for managing student records, grades, and attendance",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "Web Development",
      level: "Advanced",
      duration: "3 months",
      stars: 245,
      forks: 89,
      contributors: 4,
      lastUpdated: "2024-12-15",
      githubUrl: "https://github.com/student-projects/student-management",
      demoUrl: "https://student-mgmt-demo.vercel.app",
      features: ["Authentication", "Grade Management", "Attendance Tracking", "Reports Generation"]
    },
    {
      title: "Food Delivery App",
      author: "Priya Patel",
      institution: "NIT Surat",
      description: "Mobile-first food delivery application with real-time tracking",
      technologies: ["React Native", "Firebase", "Node.js", "Express"],
      category: "Mobile Development",
      level: "Advanced",
      duration: "4 months",
      stars: 189,
      forks: 67,
      contributors: 3,
      lastUpdated: "2024-12-10",
      githubUrl: "https://github.com/student-projects/food-delivery-app",
      demoUrl: "https://expo.dev/@priya/food-delivery",
      features: ["Real-time Tracking", "Payment Integration", "Push Notifications", "Restaurant Management"]
    },
    {
      title: "E-Commerce Website with Admin Dashboard",
      author: "Advanced Tutorial",
      institution: "Web Dev Academy",
      description: "Full-stack e-commerce platform with comprehensive admin panel and payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      category: "E-Commerce",
      level: "Advanced",
      duration: "6 months",
      stars: 420,
      forks: 156,
      contributors: 8,
      lastUpdated: "2024-12-20",
      githubUrl: "https://github.com/tutorials/ecommerce-admin",
      demoUrl: "https://www.youtube.com/watch?v=4mOkFXyxfsU",
      tutorialUrl: "https://www.youtube.com/watch?v=4mOkFXyxfsU",
      features: ["Product Management", "Order Processing", "Payment Gateway", "Admin Dashboard"],
      isVideoTutorial: true
    },
    {
      title: "Real-Time Chat Application",
      author: "Socket.IO Master",
      institution: "Tech University",
      description: "Modern real-time chat application with Socket.IO integration",
      technologies: ["React", "Node.js", "Socket.IO"],
      category: "Real-Time Apps",
      level: "Intermediate",
      duration: "2 months",
      stars: 280,
      forks: 95,
      contributors: 3,
      lastUpdated: "2024-12-18",
      githubUrl: "https://github.com/tutorials/realtime-chat",
      demoUrl: "https://www.youtube.com/watch?v=z1DxyP1bQ24",
      tutorialUrl: "https://www.youtube.com/watch?v=z1DxyP1bQ24",
      features: ["Real-time Messaging", "User Authentication", "Room Management", "File Sharing"],
      isVideoTutorial: true
    },
    {
      title: "Task Manager (Trello Clone)",
      author: "React Expert",
      institution: "Code Academy",
      description: "Drag-and-drop task management application inspired by Trello",
      technologies: ["React", "Firebase", "React DnD"],
      category: "Productivity",
      level: "Intermediate",
      duration: "3 months",
      stars: 195,
      forks: 78,
      contributors: 5,
      lastUpdated: "2024-12-16",
      githubUrl: "https://github.com/tutorials/trello-clone",
      demoUrl: "https://www.youtube.com/watch?v=AoF1BGhWzLk",
      tutorialUrl: "https://www.youtube.com/watch?v=AoF1BGhWzLk",
      features: ["Drag & Drop", "Board Management", "Card Creation", "Real-time Updates"],
      isVideoTutorial: true
    },
    {
      title: "Portfolio + Blog (Markdown CMS)",
      author: "Next.js Developer",
      institution: "Web Design Institute",
      description: "Modern portfolio website with integrated blog using Markdown CMS",
      technologies: ["Next.js", "Tailwind", "MDX"],
      category: "Portfolio",
      level: "Advanced",
      duration: "2 months",
      stars: 340,
      forks: 120,
      contributors: 2,
      lastUpdated: "2024-12-22",
      githubUrl: "https://github.com/tutorials/portfolio-blog",
      demoUrl: "https://www.youtube.com/watch?v=F02wKp4I-sU",
      tutorialUrl: "https://www.youtube.com/watch?v=F02wKp4I-sU",
      features: ["Static Site Generation", "Markdown Support", "SEO Optimized", "Responsive Design"],
      isVideoTutorial: true
    },
    {
      title: "Crypto Dashboard with Live Prices",
      author: "Crypto Enthusiast",
      institution: "Blockchain Academy",
      description: "Real-time cryptocurrency dashboard with live price updates and charts",
      technologies: ["React", "Chart.js", "CoinGecko API"],
      category: "FinTech",
      level: "Intermediate",
      duration: "3 months",
      stars: 267,
      forks: 89,
      contributors: 4,
      lastUpdated: "2024-12-19",
      githubUrl: "https://github.com/tutorials/crypto-dashboard",
      demoUrl: "https://www.youtube.com/watch?v=GPI6dYz1OHg",
      tutorialUrl: "https://www.youtube.com/watch?v=GPI6dYz1OHg",
      features: ["Live Price Updates", "Interactive Charts", "Portfolio Tracking", "Market Analysis"],
      isVideoTutorial: true
    },
    {
      title: "Authentication System (JWT + OAuth + SSO)",
      author: "Security Expert",
      institution: "Cyber Security Institute",
      description: "Comprehensive authentication system with multiple login options",
      technologies: ["Node.js", "MongoDB", "Passport.js"],
      category: "Security",
      level: "Advanced",
      duration: "4 months",
      stars: 380,
      forks: 142,
      contributors: 6,
      lastUpdated: "2024-12-17",
      githubUrl: "https://github.com/tutorials/auth-system",
      demoUrl: "https://www.youtube.com/watch?v=2jqok-WgelI",
      tutorialUrl: "https://www.youtube.com/watch?v=2jqok-WgelI",
      features: ["JWT Authentication", "OAuth Integration", "SSO Support", "Role-based Access"],
      isVideoTutorial: true
    },
    {
      title: "Video Streaming Platform (Mini YouTube)",
      author: "Media Developer",
      institution: "Digital Media College",
      description: "Video streaming platform with upload, playback, and user management",
      technologies: ["React", "Node.js", "Firebase Storage"],
      category: "Media",
      level: "Advanced",
      duration: "5 months",
      stars: 456,
      forks: 167,
      contributors: 7,
      lastUpdated: "2024-12-21",
      githubUrl: "https://github.com/tutorials/video-platform",
      demoUrl: "https://www.youtube.com/watch?v=EO8UjzTzcII",
      tutorialUrl: "https://www.youtube.com/watch?v=EO8UjzTzcII",
      features: ["Video Upload", "Streaming", "User Subscriptions", "Comments System"],
      isVideoTutorial: true
    },
    {
      title: "Weather App with Geolocation & Charts",
      author: "Weather Tech",
      institution: "Meteorology Institute",
      description: "Weather application with location-based forecasts and data visualization",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      category: "Weather",
      level: "Intermediate",
      duration: "2 months",
      stars: 198,
      forks: 74,
      contributors: 3,
      lastUpdated: "2024-12-20",
      githubUrl: "https://github.com/tutorials/weather-app",
      demoUrl: "https://www.youtube.com/watch?v=GuA0_Z1llYU",
      tutorialUrl: "https://www.youtube.com/watch?v=GuA0_Z1llYU",
      features: ["Geolocation", "Weather Charts", "5-day Forecast", "Multiple Cities"],
      isVideoTutorial: true
    },
    {
      title: "Expense Tracker with Visualization",
      author: "Finance Developer",
      institution: "Finance Tech Academy",
      description: "Personal expense tracking application with detailed analytics and charts",
      technologies: ["React", "Chart.js", "Firebase/IndexedDB"],
      category: "FinTech",
      level: "Intermediate",
      duration: "3 months",
      stars: 223,
      forks: 86,
      contributors: 4,
      lastUpdated: "2024-12-18",
      githubUrl: "https://github.com/tutorials/expense-tracker",
      demoUrl: "https://www.youtube.com/watch?v=XuFDcZABiDQ",
      tutorialUrl: "https://www.youtube.com/watch?v=XuFDcZABiDQ",
      features: ["Expense Categorization", "Visual Charts", "Budget Tracking", "Export Data"],
      isVideoTutorial: true
    },
    {
      title: "Admin Analytics Dashboard",
      author: "Dashboard Master",
      institution: "Analytics Institute",
      description: "Comprehensive admin dashboard with analytics and data visualization",
      technologies: ["Next.js", "Supabase", "Chart.js"],
      category: "Analytics",
      level: "Advanced",
      duration: "4 months",
      stars: 312,
      forks: 118,
      contributors: 5,
      lastUpdated: "2024-12-19",
      githubUrl: "https://github.com/tutorials/admin-dashboard",
      demoUrl: "https://www.youtube.com/watch?v=qfEOE4vtxE",
      tutorialUrl: "https://www.youtube.com/watch?v=qfEOE4vtxE",
      features: ["Real-time Analytics", "Data Visualization", "User Management", "Report Generation"],
      isVideoTutorial: true
    }
  ];

  const categories = [
    "All", "Web Development", "Mobile Development", "Machine Learning", "EdTech", 
    "FinTech", "Healthcare", "Productivity", "E-Commerce", "Real-Time Apps", 
    "Portfolio", "Security", "Media", "Weather", "Analytics"
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Student Projects & Tutorials</h2>
        <p className="text-gray-600">Innovative projects and comprehensive tutorials by students and developers</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="text-xs">
                  {project.category}
                </Badge>
                <div className="flex gap-1">
                  <Badge className={project.level === "Advanced" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}>
                    {project.level}
                  </Badge>
                  {project.isVideoTutorial && (
                    <Badge className="bg-green-100 text-green-800">
                      Tutorial
                    </Badge>
                  )}
                </div>
              </div>
              <CardTitle className="text-lg font-semibold text-gray-900">
                {project.title}
              </CardTitle>
              <div className="text-sm text-gray-600">
                <p className="font-medium">{project.author}</p>
                <p>{project.institution}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Duration: {project.duration}
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-2" />
                  {project.stars} stars
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  {project.contributors} contributors
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    {project.isVideoTutorial ? (
                      <>
                        <Youtube className="w-4 h-4 mr-1" />
                        Watch
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </>
                    )}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StudentProjects;
