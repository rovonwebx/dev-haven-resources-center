
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowLeft, ExternalLink, Github, Star, Users, Search } from "lucide-react";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    // Web Development
    { title: "E-Commerce Platform", author: "Sarah Chen", description: "Full-stack online shopping platform with payment integration", technologies: ["React", "Node.js", "MongoDB", "Stripe"], difficulty: "Advanced", duration: "4-6 weeks", stars: 1250, contributors: 45, category: "Web Development" },
    { title: "Social Media Dashboard", author: "Michael Rodriguez", description: "Analytics platform for social media metrics with data visualization", technologies: ["Angular", "D3.js", "Python", "PostgreSQL"], difficulty: "Advanced", duration: "5-7 weeks", stars: 980, contributors: 31, category: "Web Development" },
    { title: "Task Management App", author: "Emily Johnson", description: "Kanban-style project management tool with drag-and-drop functionality", technologies: ["Vue.js", "Firebase", "Vuetify"], difficulty: "Intermediate", duration: "3-4 weeks", stars: 650, contributors: 18, category: "Web Development" },
    { title: "Real-Time Chat App", author: "David Kim", description: "WebSocket-based chat application with multiple rooms and file sharing", technologies: ["Socket.io", "Express", "React"], difficulty: "Intermediate", duration: "2-3 weeks", stars: 890, contributors: 23, category: "Web Development" },
    { title: "Blog CMS", author: "Jessica Williams", description: "Content management system with rich text editor and SEO optimization", technologies: ["Next.js", "Prisma", "PostgreSQL"], difficulty: "Intermediate", duration: "3-4 weeks", stars: 742, contributors: 28, category: "Web Development" },
    { title: "Recipe Sharing Platform", author: "Alex Thompson", description: "Community-driven recipe sharing with ratings and comments", technologies: ["React", "Firebase", "Tailwind CSS"], difficulty: "Intermediate", duration: "2-3 weeks", stars: 563, contributors: 19, category: "Web Development" },
    { title: "Expense Tracker", author: "Maria Garcia", description: "Personal finance management with budget tracking and insights", technologies: ["React", "Chart.js", "LocalStorage"], difficulty: "Beginner", duration: "1-2 weeks", stars: 421, contributors: 12, category: "Web Development" },
    { title: "Weather Dashboard", author: "James Wilson", description: "Comprehensive weather app with geolocation and forecasts", technologies: ["React", "OpenWeather API", "CSS Modules"], difficulty: "Beginner", duration: "1-2 weeks", stars: 395, contributors: 15, category: "Web Development" },
    { title: "Todo List Pro", author: "Lisa Anderson", description: "Advanced todo application with categories and reminders", technologies: ["React", "Redux", "Styled Components"], difficulty: "Beginner", duration: "1 week", stars: 287, contributors: 8, category: "Web Development" },
    { title: "Portfolio Website", author: "Robert Brown", description: "Responsive portfolio website with animations and contact form", technologies: ["HTML", "CSS", "JavaScript"], difficulty: "Beginner", duration: "1 week", stars: 198, contributors: 6, category: "Web Development" },
    
    // Mobile Development
    { title: "Fitness Tracker", author: "Amanda Lee", description: "Mobile app for tracking workouts and nutrition", technologies: ["React Native", "Firebase", "HealthKit"], difficulty: "Advanced", duration: "6-8 weeks", stars: 1120, contributors: 38, category: "Mobile Development" },
    { title: "Language Learning App", author: "Carlos Santos", description: "Interactive language learning platform with gamification", technologies: ["Flutter", "Dart", "SQLite"], difficulty: "Advanced", duration: "5-7 weeks", stars: 892, contributors: 29, category: "Mobile Development" },
    { title: "Food Delivery App", author: "Nina Patel", description: "Complete food ordering and delivery system", technologies: ["React Native", "Node.js", "MongoDB"], difficulty: "Advanced", duration: "6-8 weeks", stars: 1350, contributors: 52, category: "Mobile Development" },
    { title: "Meditation App", author: "Thomas Miller", description: "Mindfulness and meditation app with guided sessions", technologies: ["Flutter", "Firebase", "Audio SDK"], difficulty: "Intermediate", duration: "4-5 weeks", stars: 634, contributors: 21, category: "Mobile Development" },
    { title: "Expense Tracker Mobile", author: "Sophie Turner", description: "Mobile expense tracking with receipt scanning", technologies: ["React Native", "ML Kit", "AsyncStorage"], difficulty: "Intermediate", duration: "3-4 weeks", stars: 567, contributors: 18, category: "Mobile Development" },
    { title: "News Reader App", author: "Daniel Davis", description: "Personalized news aggregator with offline reading", technologies: ["Flutter", "RSS API", "SQLite"], difficulty: "Intermediate", duration: "2-3 weeks", stars: 423, contributors: 14, category: "Mobile Development" },
    { title: "Habit Tracker", author: "Rachel Green", description: "Daily habit tracking with streaks and statistics", technologies: ["React Native", "Expo", "AsyncStorage"], difficulty: "Beginner", duration: "2-3 weeks", stars: 356, contributors: 11, category: "Mobile Development" },
    { title: "QR Code Scanner", author: "Kevin Johnson", description: "QR code scanner with history and sharing features", technologies: ["React Native", "Camera API"], difficulty: "Beginner", duration: "1-2 weeks", stars: 245, contributors: 7, category: "Mobile Development" },
    { title: "Calculator App", author: "Michelle White", description: "Scientific calculator with history and themes", technologies: ["Flutter", "Dart"], difficulty: "Beginner", duration: "1 week", stars: 189, contributors: 5, category: "Mobile Development" },
    { title: "Notes App", author: "Christopher Taylor", description: "Simple note-taking app with categories and search", technologies: ["React Native", "SQLite"], difficulty: "Beginner", duration: "1-2 weeks", stars: 234, contributors: 8, category: "Mobile Development" },
    
    // Machine Learning & AI
    { title: "Image Classification Model", author: "Dr. Alan Turing", description: "Deep learning model for image recognition and classification", technologies: ["Python", "TensorFlow", "Keras"], difficulty: "Advanced", duration: "8-10 weeks", stars: 2100, contributors: 67, category: "Machine Learning" },
    { title: "Chatbot Framework", author: "Grace Hopper", description: "Natural language processing chatbot with custom training", technologies: ["Python", "NLTK", "FastAPI"], difficulty: "Advanced", duration: "6-8 weeks", stars: 1450, contributors: 43, category: "Machine Learning" },
    { title: "Recommendation System", author: "Geoffrey Hinton", description: "Collaborative filtering recommendation engine", technologies: ["Python", "Scikit-learn", "Pandas"], difficulty: "Advanced", duration: "5-7 weeks", stars: 1230, contributors: 35, category: "Machine Learning" },
    { title: "Sentiment Analysis Tool", author: "Yann LeCun", description: "Text sentiment analysis using neural networks", technologies: ["Python", "PyTorch", "Transformers"], difficulty: "Intermediate", duration: "4-5 weeks", stars: 876, contributors: 26, category: "Machine Learning" },
    { title: "Stock Price Predictor", author: "Andrew Ng", description: "Machine learning model for stock price prediction", technologies: ["Python", "TensorFlow", "Matplotlib"], difficulty: "Intermediate", duration: "3-4 weeks", stars: 654, contributors: 19, category: "Machine Learning" },
    { title: "OCR Text Recognition", author: "Fei-Fei Li", description: "Optical character recognition for document scanning", technologies: ["Python", "OpenCV", "Tesseract"], difficulty: "Intermediate", duration: "3-4 weeks", stars: 543, contributors: 16, category: "Machine Learning" },
    { title: "Face Detection System", author: "Yoshua Bengio", description: "Real-time face detection and recognition system", technologies: ["Python", "OpenCV", "dlib"], difficulty: "Intermediate", duration: "2-3 weeks", stars: 432, contributors: 13, category: "Machine Learning" },
    { title: "Spam Email Classifier", author: "Sebastian Ruder", description: "Email spam detection using machine learning", technologies: ["Python", "Scikit-learn", "NLTK"], difficulty: "Beginner", duration: "2-3 weeks", stars: 321, contributors: 10, category: "Machine Learning" },
    { title: "Weather Prediction Model", author: "Ian Goodfellow", description: "Weather forecasting using historical data", technologies: ["Python", "Pandas", "Matplotlib"], difficulty: "Beginner", duration: "2-3 weeks", stars: 287, contributors: 9, category: "Machine Learning" },
    { title: "Handwriting Recognition", author: "Jürgen Schmidhuber", description: "Neural network for handwritten digit recognition", technologies: ["Python", "TensorFlow", "Keras"], difficulty: "Beginner", duration: "1-2 weeks", stars: 234, contributors: 7, category: "Machine Learning" },
    
    // DevOps & Cloud
    { title: "CI/CD Pipeline", author: "Kelsey Hightower", description: "Complete CI/CD pipeline with automated testing and deployment", technologies: ["Docker", "Kubernetes", "Jenkins"], difficulty: "Advanced", duration: "6-8 weeks", stars: 1890, contributors: 56, category: "DevOps" },
    { title: "Infrastructure as Code", author: "Kris Nova", description: "Terraform templates for AWS infrastructure automation", technologies: ["Terraform", "AWS", "Ansible"], difficulty: "Advanced", duration: "5-7 weeks", stars: 1234, contributors: 41, category: "DevOps" },
    { title: "Monitoring Dashboard", author: "Brendan Gregg", description: "System monitoring and alerting dashboard", technologies: ["Prometheus", "Grafana", "Docker"], difficulty: "Advanced", duration: "4-6 weeks", stars: 987, contributors: 32, category: "DevOps" },
    { title: "Microservices Architecture", author: "Martin Fowler", description: "Microservices setup with service discovery and load balancing", technologies: ["Docker", "Consul", "Nginx"], difficulty: "Advanced", duration: "6-8 weeks", stars: 1456, contributors: 48, category: "DevOps" },
    { title: "Log Aggregation System", author: "Jordan Sissel", description: "Centralized logging system with search and analytics", technologies: ["ELK Stack", "Docker", "Beats"], difficulty: "Intermediate", duration: "3-4 weeks", stars: 678, contributors: 22, category: "DevOps" },
    { title: "Container Orchestration", author: "Brendan Burns", description: "Kubernetes cluster setup and management", technologies: ["Kubernetes", "Docker", "Helm"], difficulty: "Intermediate", duration: "4-5 weeks", stars: 765, contributors: 25, category: "DevOps" },
    { title: "Backup Automation", author: "Casey West", description: "Automated backup system for databases and files", technologies: ["Bash", "Cron", "AWS S3"], difficulty: "Intermediate", duration: "2-3 weeks", stars: 432, contributors: 14, category: "DevOps" },
    { title: "Security Scanner", author: "Dino Dai Zovi", description: "Automated security vulnerability scanner", technologies: ["Python", "Nmap", "OWASP ZAP"], difficulty: "Intermediate", duration: "3-4 weeks", stars: 543, contributors: 17, category: "DevOps" },
    { title: "Performance Monitor", author: "Julia Evans", description: "Application performance monitoring tool", technologies: ["Python", "InfluxDB", "Grafana"], difficulty: "Beginner", duration: "2-3 weeks", stars: 321, contributors: 11, category: "DevOps" },
    { title: "Deployment Scripts", author: "Charity Majors", description: "Automated deployment scripts for web applications", technologies: ["Bash", "Ansible", "Git"], difficulty: "Beginner", duration: "1-2 weeks", stars: 245, contributors: 8, category: "DevOps" },
    
    // Data Science
    { title: "Sales Analytics Dashboard", author: "Hadley Wickham", description: "Interactive dashboard for sales data analysis", technologies: ["R", "Shiny", "ggplot2"], difficulty: "Advanced", duration: "5-7 weeks", stars: 1123, contributors: 34, category: "Data Science" },
    { title: "Customer Segmentation", author: "Wes McKinney", description: "Customer segmentation analysis using clustering algorithms", technologies: ["Python", "Pandas", "Scikit-learn"], difficulty: "Advanced", duration: "4-6 weeks", stars: 891, contributors: 28, category: "Data Science" },
    { title: "A/B Testing Framework", author: "DJ Patil", description: "Statistical framework for A/B testing and analysis", technologies: ["Python", "SciPy", "Statsmodels"], difficulty: "Advanced", duration: "4-5 weeks", stars: 756, contributors: 23, category: "Data Science" },
    { title: "Time Series Analysis", author: "Rob Hyndman", description: "Time series forecasting and analysis tool", technologies: ["R", "Forecast", "ARIMA"], difficulty: "Intermediate", duration: "3-4 weeks", stars: 634, contributors: 19, category: "Data Science" },
    { title: "Data Visualization Suite", author: "Edward Tufte", description: "Comprehensive data visualization library", technologies: ["D3.js", "Python", "Matplotlib"], difficulty: "Intermediate", duration: "3-4 weeks", stars: 567, contributors: 18, category: "Data Science" },
    { title: "ETL Pipeline", author: "Maxime Beauchemin", description: "Extract, transform, load pipeline for data processing", technologies: ["Apache Airflow", "Python", "PostgreSQL"], difficulty: "Intermediate", duration: "4-5 weeks", stars: 678, contributors: 21, category: "Data Science" },
    { title: "Survey Analysis Tool", author: "Jenny Bryan", description: "Survey data analysis and reporting tool", technologies: ["R", "Tidyverse", "RMarkdown"], difficulty: "Intermediate", duration: "2-3 weeks", stars: 432, contributors: 14, category: "Data Science" },
    { title: "Web Scraping Framework", author: "Kenneth Reitz", description: "Web scraping tool for data collection", technologies: ["Python", "Scrapy", "BeautifulSoup"], difficulty: "Beginner", duration: "2-3 weeks", stars: 354, contributors: 12, category: "Data Science" },
    { title: "Excel Data Analyzer", author: "Automate the Boring Stuff", description: "Python tool for Excel data analysis automation", technologies: ["Python", "openpyxl", "Pandas"], difficulty: "Beginner", duration: "1-2 weeks", stars: 278, contributors: 9, category: "Data Science" },
    { title: "CSV Data Processor", author: "Data School", description: "Batch processing tool for CSV files", technologies: ["Python", "Pandas", "NumPy"], difficulty: "Beginner", duration: "1-2 weeks", stars: 198, contributors: 6, category: "Data Science" },
    
    // Game Development
    { title: "2D Platformer Game", author: "Shigeru Miyamoto", description: "Classic 2D platformer with physics and level editor", technologies: ["Unity", "C#", "Pixel Art"], difficulty: "Advanced", duration: "8-10 weeks", stars: 1567, contributors: 47, category: "Game Development" },
    { title: "Puzzle Game Collection", author: "Tetris Company", description: "Collection of classic puzzle games", technologies: ["JavaScript", "HTML5 Canvas", "CSS"], difficulty: "Intermediate", duration: "4-6 weeks", stars: 789, contributors: 24, category: "Game Development" },
    { title: "RPG Battle System", author: "Square Enix", description: "Turn-based RPG combat system", technologies: ["Unity", "C#", "JSON"], difficulty: "Advanced", duration: "6-8 weeks", stars: 1234, contributors: 38, category: "Game Development" },
    { title: "Racing Game", author: "Polyphony Digital", description: "3D racing game with realistic physics", technologies: ["Unreal Engine", "C++", "Blueprints"], difficulty: "Advanced", duration: "10-12 weeks", stars: 2100, contributors: 65, category: "Game Development" },
    { title: "Snake Game", author: "Nokia", description: "Classic snake game with modern graphics", technologies: ["JavaScript", "HTML5", "CSS"], difficulty: "Beginner", duration: "1 week", stars: 234, contributors: 8, category: "Game Development" },
    { title: "Tic Tac Toe AI", author: "Claude Shannon", description: "Tic tac toe game with AI opponent", technologies: ["Python", "Minimax Algorithm"], difficulty: "Beginner", duration: "1-2 weeks", stars: 187, contributors: 6, category: "Game Development" },
    { title: "Memory Card Game", author: "Concentration", description: "Memory matching card game", technologies: ["React", "CSS Animations"], difficulty: "Beginner", duration: "1 week", stars: 156, contributors: 5, category: "Game Development" },
    { title: "Breakout Clone", author: "Atari", description: "Classic breakout game with power-ups", technologies: ["JavaScript", "HTML5 Canvas"], difficulty: "Beginner", duration: "1-2 weeks", stars: 198, contributors: 7, category: "Game Development" },
    { title: "Space Invaders", author: "Taito", description: "Classic space invaders arcade game", technologies: ["Python", "Pygame"], difficulty: "Beginner", duration: "2-3 weeks", stars: 276, contributors: 9, category: "Game Development" },
    { title: "Pong Game", author: "Atari", description: "Classic pong game for two players", technologies: ["JavaScript", "HTML5"], difficulty: "Beginner", duration: "1 week", stars: 145, contributors: 4, category: "Game Development" },
    
    // Blockchain & Crypto
    { title: "DeFi Lending Platform", author: "Vitalik Buterin", description: "Decentralized lending and borrowing platform", technologies: ["Solidity", "Web3.js", "React"], difficulty: "Advanced", duration: "8-10 weeks", stars: 1890, contributors: 58, category: "Blockchain" },
    { title: "NFT Marketplace", author: "OpenSea", description: "NFT trading platform with smart contracts", technologies: ["Solidity", "IPFS", "Next.js"], difficulty: "Advanced", duration: "6-8 weeks", stars: 1456, contributors: 45, category: "Blockchain" },
    { title: "Cryptocurrency Wallet", author: "Satoshi Nakamoto", description: "Multi-currency wallet with transaction history", technologies: ["React Native", "Web3", "Ethereum"], difficulty: "Advanced", duration: "5-7 weeks", stars: 1234, contributors: 39, category: "Blockchain" },
    { title: "Smart Contract Voting", author: "Ethereum Foundation", description: "Decentralized voting system using smart contracts", technologies: ["Solidity", "Truffle", "Web3"], difficulty: "Intermediate", duration: "3-4 weeks", stars: 678, contributors: 21, category: "Blockchain" },
    { title: "Token Swapping DEX", author: "Uniswap", description: "Decentralized exchange for token swapping", technologies: ["Solidity", "React", "Web3"], difficulty: "Advanced", duration: "6-8 weeks", stars: 1567, contributors: 48, category: "Blockchain" },
    { title: "Blockchain Explorer", author: "Etherscan", description: "Blockchain transaction explorer and analyzer", technologies: ["Node.js", "MongoDB", "React"], difficulty: "Intermediate", duration: "4-5 weeks", stars: 543, contributors: 17, category: "Blockchain" },
    { title: "Staking Platform", author: "Ethereum 2.0", description: "Cryptocurrency staking and rewards platform", technologies: ["Solidity", "Web3", "TypeScript"], difficulty: "Advanced", duration: "5-7 weeks", stars: 987, contributors: 31, category: "Blockchain" },
    { title: "Crowdfunding DApp", author: "Kickstarter", description: "Decentralized crowdfunding application", technologies: ["Solidity", "React", "IPFS"], difficulty: "Intermediate", duration: "4-5 weeks", stars: 432, contributors: 14, category: "Blockchain" },
    { title: "Crypto Portfolio Tracker", author: "CoinGecko", description: "Portfolio tracking with real-time prices", technologies: ["React", "CoinGecko API", "Chart.js"], difficulty: "Beginner", duration: "2-3 weeks", stars: 321, contributors: 11, category: "Blockchain" },
    { title: "Simple Blockchain", author: "Bitcoin", description: "Basic blockchain implementation for learning", technologies: ["Python", "Cryptography", "Flask"], difficulty: "Beginner", duration: "2-3 weeks", stars: 234, contributors: 8, category: "Blockchain" },
    
    // IoT & Hardware
    { title: "Smart Home Hub", author: "Google Nest", description: "Central hub for smart home device control", technologies: ["Arduino", "Raspberry Pi", "MQTT"], difficulty: "Advanced", duration: "6-8 weeks", stars: 1123, contributors: 34, category: "IoT" },
    { title: "Weather Station", author: "WeatherTech", description: "IoT weather monitoring system", technologies: ["Arduino", "Sensors", "WiFi"], difficulty: "Intermediate", duration: "3-4 weeks", stars: 567, contributors: 18, category: "IoT" },
    { title: "Security Camera System", author: "Ring", description: "DIY security camera with motion detection", technologies: ["Raspberry Pi", "OpenCV", "Python"], difficulty: "Intermediate", duration: "4-5 weeks", stars: 678, contributors: 21, category: "IoT" },
    { title: "Plant Monitoring System", author: "PlantNet", description: "Automated plant care monitoring", technologies: ["Arduino", "Sensors", "Mobile App"], difficulty: "Intermediate", duration: "3-4 weeks", stars: 432, contributors: 14, category: "IoT" },
    { title: "Smart Lock System", author: "August", description: "Bluetooth-enabled smart door lock", technologies: ["Arduino", "Bluetooth", "Servo"], difficulty: "Intermediate", duration: "2-3 weeks", stars: 354, contributors: 12, category: "IoT" },
    { title: "Air Quality Monitor", author: "PurpleAir", description: "Real-time air quality monitoring device", technologies: ["Arduino", "Air Sensors", "Web API"], difficulty: "Beginner", duration: "2-3 weeks", stars: 287, contributors: 9, category: "IoT" },
    { title: "LED Matrix Display", author: "Adafruit", description: "Programmable LED matrix display", technologies: ["Arduino", "LED Matrix", "C++"], difficulty: "Beginner", duration: "1-2 weeks", stars: 198, contributors: 6, category: "IoT" },
    { title: "Temperature Logger", author: "Thermometer Pro", description: "Temperature data logging system", technologies: ["Arduino", "SD Card", "Sensors"], difficulty: "Beginner", duration: "1-2 weeks", stars: 156, contributors: 5, category: "IoT" },
    { title: "Motion Sensor Light", author: "SmartThings", description: "Automatic lighting system with motion detection", technologies: ["Arduino", "PIR Sensor", "Relay"], difficulty: "Beginner", duration: "1 week", stars: 134, contributors: 4, category: "IoT" },
    { title: "Doorbell Camera", author: "Doorbird", description: "WiFi-enabled doorbell with camera", technologies: ["Raspberry Pi", "Camera", "WiFi"], difficulty: "Intermediate", duration: "3-4 weeks", stars: 456, contributors: 15, category: "IoT" },
    
    // API & Backend
    { title: "RESTful API Framework", author: "Roy Fielding", description: "Complete REST API with authentication and documentation", technologies: ["Node.js", "Express", "MongoDB"], difficulty: "Advanced", duration: "4-6 weeks", stars: 1234, contributors: 38, category: "Backend" },
    { title: "GraphQL Server", author: "Facebook", description: "GraphQL API with subscriptions and caching", technologies: ["Node.js", "GraphQL", "Apollo"], difficulty: "Advanced", duration: "5-7 weeks", stars: 987, contributors: 31, category: "Backend" },
    { title: "Authentication Service", author: "Auth0", description: "JWT-based authentication microservice", technologies: ["Node.js", "JWT", "bcrypt"], difficulty: "Intermediate", duration: "3-4 weeks", stars: 678, contributors: 21, category: "Backend" },
    { title: "File Upload Service", author: "Cloudinary", description: "File upload and processing service", technologies: ["Node.js", "Multer", "AWS S3"], difficulty: "Intermediate", duration: "2-3 weeks", stars: 432, contributors: 14, category: "Backend" },
    { title: "Email Service API", author: "SendGrid", description: "Email sending and template management API", technologies: ["Python", "Flask", "SMTP"], difficulty: "Intermediate", duration: "2-3 weeks", stars: 354, contributors: 12, category: "Backend" },
    { title: "URL Shortener", author: "Bitly", description: "URL shortening service with analytics", technologies: ["Node.js", "Redis", "Express"], difficulty: "Beginner", duration: "1-2 weeks", stars: 287, contributors: 9, category: "Backend" },
    { title: "Todo API", author: "TodoMVC", description: "Simple todo list API with CRUD operations", technologies: ["Python", "FastAPI", "SQLite"], difficulty: "Beginner", duration: "1-2 weeks", stars: 198, contributors: 6, category: "Backend" },
    { title: "Weather API", author: "OpenWeatherMap", description: "Weather data aggregation API", technologies: ["Node.js", "Express", "External APIs"], difficulty: "Beginner", duration: "1-2 weeks", stars: 234, contributors: 8, category: "Backend" },
    { title: "Image Processing API", author: "Imagekit", description: "Image resizing and optimization service", technologies: ["Python", "Pillow", "Flask"], difficulty: "Intermediate", duration: "2-3 weeks", stars: 456, contributors: 15, category: "Backend" },
    { title: "Chat API", author: "Slack", description: "Real-time messaging API with WebSockets", technologies: ["Node.js", "Socket.io", "MongoDB"], difficulty: "Intermediate", duration: "3-4 weeks", stars: 567, contributors: 18, category: "Backend" }
  ];

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
    project.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const categories = [...new Set(projects.map(p => p.category))];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
              <p className="text-gray-600 text-sm">Hands-on projects to build your portfolio</p>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-6">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg font-semibold text-gray-900 flex-1">
                    {project.title}
                  </CardTitle>
                  <Badge className={getDifficultyColor(project.difficulty)}>
                    {project.difficulty}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-1">by {project.author}</p>
                <p className="text-gray-700 text-sm">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 mr-1 text-yellow-500" />
                      {project.stars}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {project.contributors}
                    </div>
                  </div>
                  <span className="text-blue-600 font-medium text-xs">{project.duration}</span>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1 text-xs">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 text-xs">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </div>
        )}

        {/* Project Categories */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Card key={category} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  {projects.filter(p => p.category === category).length} projects
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
