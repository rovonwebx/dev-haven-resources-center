
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, Users, Calendar } from "lucide-react";

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
      title: "E-Learning Platform",
      author: "Amit Kumar",
      institution: "VIT Vellore",
      description: "Online learning platform with video streaming and quiz functionality",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      category: "EdTech",
      level: "Advanced",
      duration: "5 months",
      stars: 156,
      forks: 43,
      contributors: 5,
      lastUpdated: "2024-12-08",
      githubUrl: "https://github.com/student-projects/e-learning-platform",
      demoUrl: "https://elearn-demo.herokuapp.com",
      features: ["Video Streaming", "Interactive Quizzes", "Progress Tracking", "Certificates"]
    },
    {
      title: "Budget Tracker",
      author: "Sneha Reddy",
      institution: "BITS Pilani",
      description: "Personal finance management app with expense tracking and analytics",
      technologies: ["Flutter", "Dart", "SQLite", "Charts.js"],
      category: "FinTech",
      level: "Intermediate",
      duration: "2 months",
      stars: 98,
      forks: 32,
      contributors: 2,
      lastUpdated: "2024-12-12",
      githubUrl: "https://github.com/student-projects/budget-tracker",
      demoUrl: "https://play.google.com/store/apps/details?id=com.budget.tracker",
      features: ["Expense Categorization", "Visual Analytics", "Budget Goals", "Export Reports"]
    },
    {
      title: "Hospital Management System",
      author: "Arjun Gupta",
      institution: "AIIMS Delhi",
      description: "Comprehensive hospital management system for patient and staff management",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
      category: "Healthcare",
      level: "Advanced",
      duration: "6 months",
      stars: 234,
      forks: 78,
      contributors: 6,
      lastUpdated: "2024-12-05",
      githubUrl: "https://github.com/student-projects/hospital-management",
      demoUrl: "https://hospital-mgmt-demo.herokuapp.com",
      features: ["Patient Records", "Appointment Scheduling", "Billing System", "Inventory Management"]
    },
    {
      title: "Weather Prediction ML Model",
      author: "Divya Singh",
      institution: "IISc Bangalore",
      description: "Machine learning model for weather prediction using historical data",
      technologies: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
      category: "Machine Learning",
      level: "Advanced",
      duration: "4 months",
      stars: 167,
      forks: 45,
      contributors: 3,
      lastUpdated: "2024-12-07",
      githubUrl: "https://github.com/student-projects/weather-prediction-ml",
      demoUrl: "https://weather-predict-ml.streamlit.app",
      features: ["LSTM Networks", "Data Visualization", "API Integration", "Real-time Predictions"]
    },
    {
      title: "Chat Application",
      author: "Rohit Jain",
      institution: "DTU Delhi",
      description: "Real-time chat application with group messaging and file sharing",
      technologies: ["Socket.io", "React", "Node.js", "MongoDB"],
      category: "Web Development",
      level: "Intermediate",
      duration: "2 months",
      stars: 123,
      forks: 38,
      contributors: 2,
      lastUpdated: "2024-12-14",
      githubUrl: "https://github.com/student-projects/chat-application",
      demoUrl: "https://realtime-chat-demo.netlify.app",
      features: ["Real-time Messaging", "File Sharing", "Group Chats", "Emoji Support"]
    },
    {
      title: "Task Management Tool",
      author: "Kavya Krishnan",
      institution: "IIT Madras",
      description: "Collaborative task management tool with team productivity features",
      technologies: ["Angular", "NestJS", "PostgreSQL", "Redis"],
      category: "Productivity",
      level: "Advanced",
      duration: "3 months",
      stars: 145,
      forks: 52,
      contributors: 4,
      lastUpdated: "2024-12-09",
      githubUrl: "https://github.com/student-projects/task-management",
      demoUrl: "https://task-mgmt-demo.vercel.app",
      features: ["Team Collaboration", "Kanban Boards", "Time Tracking", "Project Analytics"]
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "Machine Learning", "EdTech", "FinTech", "Healthcare", "Productivity"];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Student Projects</h2>
        <p className="text-gray-600">Innovative projects built by students across India</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="text-xs">
                  {project.category}
                </Badge>
                <Badge className={project.level === "Advanced" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}>
                  {project.level}
                </Badge>
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
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
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
