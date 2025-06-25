
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, Star, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Full-Stack E-Commerce Platform",
      description: "Complete online shopping platform with payment integration, user authentication, and admin dashboard",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      difficulty: "Advanced",
      duration: "4-6 weeks",
      stars: 1250,
      contributors: 45,
      githubUrl: "https://github.com/example/ecommerce-platform",
      demoUrl: "https://demo-ecommerce.com"
    },
    {
      title: "Real-Time Chat Application",
      description: "WebSocket-based chat app with multiple rooms, file sharing, and emoji support",
      technologies: ["Socket.io", "Express", "React", "MongoDB"],
      difficulty: "Intermediate",
      duration: "2-3 weeks",
      stars: 890,
      contributors: 23,
      githubUrl: "https://github.com/example/chat-app",
      demoUrl: "https://demo-chat.com"
    },
    {
      title: "Task Management Dashboard",
      description: "Kanban-style project management tool with drag-and-drop functionality and team collaboration",
      technologies: ["Vue.js", "Firebase", "Vuetify", "Chart.js"],
      difficulty: "Intermediate",
      duration: "3-4 weeks",
      stars: 650,
      contributors: 18,
      githubUrl: "https://github.com/example/task-manager",
      demoUrl: "https://demo-tasks.com"
    },
    {
      title: "Weather App with Geolocation",
      description: "Mobile-responsive weather application using geolocation API and weather data visualization",
      technologies: ["React Native", "OpenWeather API", "AsyncStorage"],
      difficulty: "Beginner",
      duration: "1-2 weeks",
      stars: 420,
      contributors: 12,
      githubUrl: "https://github.com/example/weather-app",
      demoUrl: "https://demo-weather.com"
    },
    {
      title: "Social Media Analytics Dashboard",
      description: "Analytics platform for social media metrics with data visualization and reporting features",
      technologies: ["Angular", "D3.js", "Python", "Flask", "PostgreSQL"],
      difficulty: "Advanced",
      duration: "5-7 weeks",
      stars: 980,
      contributors: 31,
      githubUrl: "https://github.com/example/social-analytics",
      demoUrl: "https://demo-analytics.com"
    },
    {
      title: "Expense Tracker Mobile App",
      description: "Personal finance management app with budget tracking, expense categorization, and insights",
      technologies: ["Flutter", "Dart", "SQLite", "Provider"],
      difficulty: "Intermediate",
      duration: "3-4 weeks",
      stars: 750,
      contributors: 20,
      githubUrl: "https://github.com/example/expense-tracker",
      demoUrl: "https://demo-expenses.com"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Hub
                </Link>
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
                <p className="text-gray-600 mt-1">Hands-on projects to build your portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-semibold text-gray-900 flex-1">
                    {project.title}
                  </CardTitle>
                  <Badge className={getDifficultyColor(project.difficulty)}>
                    {project.difficulty}
                  </Badge>
                </div>
                <p className="text-gray-700">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      {project.stars}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {project.contributors}
                    </div>
                  </div>
                  <span className="text-blue-600 font-medium">{project.duration}</span>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" asChild className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Categories */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Web Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">Full-stack web applications, APIs, and frontend frameworks</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Mobile Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">iOS, Android, and cross-platform mobile applications</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Data Science</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">Machine learning, data analysis, and visualization projects</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Projects;
