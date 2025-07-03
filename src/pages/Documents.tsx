import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  FileText, 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Star,
  BookOpen,
  GraduationCap,
  Users,
  TrendingUp,
  School,
  Rocket,
  ExternalLink
} from "lucide-react";

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const allDocuments = [
    // 1st Year Documents
    { 
      id: 1, 
      title: "Engineering Mathematics I", 
      description: "Calculus, differential equations, and linear algebra fundamentals",
      category: "1st Year",
      difficulty: "Beginner",
      pages: 120,
      downloadCount: 2500,
      resourceLinks: [
        { platform: "Khan Academy", url: "https://www.khanacademy.org/math/calculus-1" },
        { platform: "MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/" }
      ]
    },
    { 
      id: 2, 
      title: "Physics for Engineers", 
      description: "Mechanics, thermodynamics, and wave theory",
      category: "1st Year",
      difficulty: "Beginner",
      pages: 95,
      downloadCount: 2100,
      resourceLinks: [
        { platform: "Coursera", url: "https://www.coursera.org/learn/physics-intro" },
        { platform: "edX", url: "https://www.edx.org/course/introduction-to-mechanics" }
      ]
    },
    { 
      id: 3, 
      title: "Chemistry Fundamentals", 
      description: "Organic, inorganic, and physical chemistry basics",
      category: "1st Year",
      difficulty: "Beginner",
      pages: 85,
      downloadCount: 1800,
      resourceLinks: [
        { platform: "Khan Academy", url: "https://www.khanacademy.org/science/chemistry" },
        { platform: "Coursera", url: "https://www.coursera.org/learn/general-chemistry" }
      ]
    },
    { 
      id: 4, 
      title: "Engineering Graphics", 
      description: "Technical drawing, orthographic projections, and CAD basics",
      category: "1st Year",
      difficulty: "Beginner",
      pages: 110,
      downloadCount: 2200,
      resourceLinks: [
        { platform: "AutoCAD Learning", url: "https://www.autodesk.com/education/free-software/autocad" },
        { platform: "YouTube", url: "https://www.youtube.com/playlist?list=PLZHx5heVfgEspzxKI7l7VZa0e1vg6aHB8" }
      ]
    },
    { 
      id: 5, 
      title: "Programming in C", 
      description: "C programming language fundamentals and problem solving",
      category: "1st Year",
      difficulty: "Beginner",
      pages: 140,
      downloadCount: 3200,
      resourceLinks: [
        { platform: "Codecademy", url: "https://www.codecademy.com/learn/learn-c" },
        { platform: "CS50", url: "https://cs50.harvard.edu/x/2024/weeks/1/" }
      ]
    },
    { 
      id: 6, 
      title: "Environmental Studies", 
      description: "Environmental science and sustainability principles",
      category: "1st Year",
      difficulty: "Beginner",
      pages: 75,
      downloadCount: 1500,
      resourceLinks: [
        { platform: "Coursera", url: "https://www.coursera.org/learn/environmental-science" },
        { platform: "edX", url: "https://www.edx.org/course/environmental-science" }
      ]
    },
    { 
      id: 7, 
      title: "Workshop Technology", 
      description: "Manufacturing processes and workshop practices",
      category: "1st Year",
      difficulty: "Beginner",
      pages: 90,
      downloadCount: 1900,
      resourceLinks: [
        { platform: "NPTEL", url: "https://nptel.ac.in/courses/112/105/112105125/" },
        { platform: "YouTube", url: "https://www.youtube.com/playlist?list=PLbMVogVj5nJS5Y0N_v8xBfAfC6EL0KDKs" }
      ]
    },
    { 
      id: 8, 
      title: "English Communication", 
      description: "Technical writing and communication skills",
      category: "1st Year",
      difficulty: "Beginner",
      pages: 60,
      downloadCount: 1400,
      resourceLinks: [
        { platform: "Coursera", url: "https://www.coursera.org/learn/technical-writing" },
        { platform: "edX", url: "https://www.edx.org/course/effective-communication" }
      ]
    },
    { 
      id: 9, 
      title: "Engineering Mathematics II", 
      description: "Vector calculus, Fourier series, and complex analysis",
      category: "1st Year",
      difficulty: "Beginner",
      pages: 125,
      downloadCount: 2300,
      resourceLinks: [
        { platform: "Khan Academy", url: "https://www.khanacademy.org/math/multivariable-calculus" },
        { platform: "MIT OCW", url: "https://ocw.mit.edu/courses/mathematics/18-02-multivariable-calculus-fall-2007/" }
      ]
    },
    { 
      id: 10, 
      title: "Basic Electronics", 
      description: "Electronic devices, circuits, and digital fundamentals",
      category: "1st Year",
      difficulty: "Beginner",
      pages: 105,
      downloadCount: 2000,
      resourceLinks: [
        { platform: "NPTEL", url: "https://nptel.ac.in/courses/117/105/117105081/" },
        { platform: "All About Circuits", url: "https://www.allaboutcircuits.com/textbook/" }
      ]
    },
    { 
      id: 11, 
      title: "Computer Fundamentals", 
      description: "Computer architecture, operating systems, and basics",
      category: "1st Year",
      difficulty: "Beginner",
      pages: 80,
      downloadCount: 1700,
      resourceLinks: [
        { platform: "Coursera", url: "https://www.coursera.org/learn/computer-science-programming-with-a-purpose" },
        { platform: "Khan Academy", url: "https://www.khanacademy.org/computing/computer-science" }
      ]
    },
    { 
      id: 12, 
      title: "Engineering Mechanics", 
      description: "Statics, dynamics, and strength of materials",
      category: "1st Year",
      difficulty: "Beginner",
      pages: 130,
      downloadCount: 2400,
      resourceLinks: [
        { platform: "NPTEL", url: "https://nptel.ac.in/courses/112/103/112103004/" },
        { platform: "MIT OCW", url: "https://ocw.mit.edu/courses/mechanical-engineering/2-001-mechanics-materials-i-fall-2006/" }
      ]
    },

    // 2nd Year Documents
    { 
      id: 13, 
      title: "Data Structures and Algorithms", 
      description: "Comprehensive guide to DSA concepts and implementations",
      category: "2nd Year",
      difficulty: "Intermediate",
      pages: 180,
      downloadCount: 4200,
      resourceLinks: [
        { platform: "LeetCode", url: "https://leetcode.com/explore/learn/" },
        { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/data-structures/" },
        { platform: "Coursera", url: "https://www.coursera.org/specializations/algorithms" }
      ]
    },
    { 
      id: 14, 
      title: "Object-Oriented Programming", 
      description: "OOP concepts using Java and C++",
      category: "2nd Year",
      difficulty: "Intermediate",
      pages: 160,
      downloadCount: 3800,
      resourceLinks: [
        { platform: "Oracle Java Tutorials", url: "https://docs.oracle.com/javase/tutorial/java/concepts/" },
        { platform: "Codecademy", url: "https://www.codecademy.com/learn/learn-java" }
      ]
    },
    { 
      id: 15, 
      title: "Database Management Systems", 
      description: "SQL, database design, and management principles",
      category: "2nd Year",
      difficulty: "Intermediate",
      pages: 145,
      downloadCount: 3500,
      resourceLinks: [
        { platform: "W3Schools", url: "https://www.w3schools.com/sql/" },
        { platform: "SQLBolt", url: "https://sqlbolt.com/" },
        { platform: "Coursera", url: "https://www.coursera.org/learn/intro-sql" }
      ]
    },
    { 
      id: 16, 
      title: "Computer Networks", 
      description: "Network protocols, architecture, and security",
      category: "2nd Year",
      difficulty: "Intermediate",
      pages: 170,
      downloadCount: 3200,
      resourceLinks: [
        { platform: "Cisco Networking Academy", url: "https://www.netacad.com/courses/networking" },
        { platform: "Coursera", url: "https://www.coursera.org/learn/computer-networking" }
      ]
    },
    { 
      id: 17, 
      title: "Operating Systems", 
      description: "Process management, memory, and file systems",
      category: "2nd Year",
      difficulty: "Intermediate",
      pages: 155,
      downloadCount: 3600,
      resourceLinks: [
        { platform: "MIT OCW", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-828-operating-system-engineering-fall-2012/" },
        { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/operating-systems/" }
      ]
    },
    { 
      id: 18, 
      title: "Digital Logic Design", 
      description: "Boolean algebra, logic gates, and circuit design",
      category: "2nd Year",
      difficulty: "Intermediate",
      pages: 120,
      downloadCount: 2800,
      resourceLinks: [
        { platform: "NPTEL", url: "https://nptel.ac.in/courses/106/105/106105165/" },
        { platform: "All About Circuits", url: "https://www.allaboutcircuits.com/textbook/digital/" }
      ]
    },
    { 
      id: 19, 
      title: "Discrete Mathematics", 
      description: "Set theory, graph theory, and combinatorics",
      category: "2nd Year",
      difficulty: "Intermediate",
      pages: 135,
      downloadCount: 2600,
      resourceLinks: [
        { platform: "MIT OCW", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/" },
        { platform: "Khan Academy", url: "https://www.khanacademy.org/computing/computer-science/algorithms" }
      ]
    },
    { 
      id: 20, 
      title: "Software Engineering", 
      description: "SDLC, project management, and testing methodologies",
      category: "2nd Year",
      difficulty: "Intermediate",
      pages: 165,
      downloadCount: 3100,
      resourceLinks: [
        { platform: "Coursera", url: "https://www.coursera.org/specializations/software-engineering" },
        { platform: "edX", url: "https://www.edx.org/course/software-engineering" }
      ]
    },
    { 
      id: 21, 
      title: "Web Technologies", 
      description: "HTML, CSS, JavaScript, and web development basics",
      category: "2nd Year",
      difficulty: "Intermediate",
      pages: 140,
      downloadCount: 3900,
      resourceLinks: [
        { platform: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Learn" },
        { platform: "freeCodeCamp", url: "https://www.freecodecamp.org/learn/responsive-web-design/" },
        { platform: "W3Schools", url: "https://www.w3schools.com/html/" }
      ]
    },
    { 
      id: 22, 
      title: "Computer Architecture", 
      description: "CPU design, memory hierarchy, and system organization",
      category: "2nd Year",
      difficulty: "Intermediate",
      pages: 150,
      downloadCount: 2900,
      resourceLinks: [
        { platform: "NPTEL", url: "https://nptel.ac.in/courses/106/105/106105163/" },
        { platform: "Coursera", url: "https://www.coursera.org/learn/comparch" }
      ]
    },
    { 
      id: 23, 
      title: "Statistics and Probability", 
      description: "Statistical analysis and probability theory for engineers",
      category: "2nd Year",
      difficulty: "Intermediate",
      pages: 115,
      downloadCount: 2400,
      resourceLinks: [
        { platform: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability" },
        { platform: "Coursera", url: "https://www.coursera.org/learn/probability-intro" }
      ]
    },
    { 
      id: 24, 
      title: "Linear Algebra Applications", 
      description: "Matrix operations and applications in engineering",
      category: "2nd Year",
      difficulty: "Intermediate",
      pages: 125,
      downloadCount: 2200,
      resourceLinks: [
        { platform: "MIT OCW", url: "https://ocw.mit.edu/courses/mathematics/18-06-linear-algebra-spring-2010/" },
        { platform: "Khan Academy", url: "https://www.khanacademy.org/math/linear-algebra" }
      ]
    },

    // 3rd Year Documents
    { 
      id: 25, 
      title: "Machine Learning Fundamentals", 
      description: "ML algorithms, supervised and unsupervised learning",
      category: "3rd Year",
      difficulty: "Advanced",
      pages: 220,
      downloadCount: 5200,
      resourceLinks: [
        { platform: "Coursera", url: "https://www.coursera.org/learn/machine-learning" },
        { platform: "edX", url: "https://www.edx.org/course/introduction-to-machine-learning" },
        { platform: "Kaggle Learn", url: "https://www.kaggle.com/learn/intro-to-machine-learning" }
      ]
    },
    { 
      id: 26, 
      title: "Artificial Intelligence", 
      description: "AI concepts, search algorithms, and expert systems",
      category: "3rd Year",
      difficulty: "Advanced",
      pages: 195,
      downloadCount: 4800,
      resourceLinks: [
        { platform: "MIT OCW", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/" },
        { platform: "Coursera", url: "https://www.coursera.org/learn/ai-for-everyone" }
      ]
    },
    { 
      id: 27, 
      title: "Compiler Design", 
      description: "Lexical analysis, parsing, and code generation",
      category: "3rd Year",
      difficulty: "Advanced",
      pages: 185,
      downloadCount: 3400,
      resourceLinks: [
        { platform: "NPTEL", url: "https://nptel.ac.in/courses/106/105/106105186/" },
        { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/compiler-design-tutorials/" }
      ]
    },
    { 
      id: 28, 
      title: "Advanced Database Systems", 
      description: "Distributed databases, NoSQL, and big data",
      category: "3rd Year",
      difficulty: "Advanced",
      pages: 175,
      downloadCount: 3800,
      resourceLinks: [
        { platform: "MongoDB University", url: "https://university.mongodb.com/" },
        { platform: "Coursera", url: "https://www.coursera.org/learn/nosql-databases" }
      ]
    },
    { 
      id: 29, 
      title: "Network Security", 
      description: "Cryptography, security protocols, and ethical hacking",
      category: "3rd Year",
      difficulty: "Advanced",
      pages: 190,
      downloadCount: 4100,
      resourceLinks: [
        { platform: "Cybrary", url: "https://www.cybrary.it/course/ethical-hacking/" },
        { platform: "Coursera", url: "https://www.coursera.org/learn/crypto" }
      ]
    },
    { 
      id: 30, 
      title: "Mobile App Development", 
      description: "Android and iOS development frameworks",
      category: "3rd Year",
      difficulty: "Advanced",
      pages: 165,
      downloadCount: 4500,
      resourceLinks: [
        { platform: "Android Developers", url: "https://developer.android.com/courses" },
        { platform: "Apple Developer", url: "https://developer.apple.com/tutorials/swiftui" },
        { platform: "Flutter", url: "https://flutter.dev/learn" }
      ]
    },
    { 
      id: 31, 
      title: "Cloud Computing", 
      description: "AWS, Azure, and cloud architecture patterns",
      category: "3rd Year",
      difficulty: "Advanced",
      pages: 180,
      downloadCount: 4200,
      resourceLinks: [
        { platform: "AWS Training", url: "https://aws.amazon.com/training/" },
        { platform: "Microsoft Learn", url: "https://docs.microsoft.com/en-us/learn/azure/" },
        { platform: "Google Cloud Skills", url: "https://cloud.google.com/training" }
      ]
    },
    { 
      id: 32, 
      title: "DevOps and CI/CD", 
      description: "Docker, Kubernetes, and deployment automation",
      category: "3rd Year",
      difficulty: "Advanced",
      pages: 155,
      downloadCount: 3900,
      resourceLinks: [
        { platform: "Docker", url: "https://docs.docker.com/get-started/" },
        { platform: "Kubernetes", url: "https://kubernetes.io/training/" },
        { platform: "GitLab Learn", url: "https://about.gitlab.com/learn/" }
      ]
    },
    { 
      id: 33, 
      title: "Advanced Algorithms", 
      description: "Graph algorithms, dynamic programming, and optimization",
      category: "3rd Year",
      difficulty: "Advanced",
      pages: 200,
      downloadCount: 3600,
      resourceLinks: [
        { platform: "MIT OCW", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/" },
        { platform: "HackerRank", url: "https://www.hackerrank.com/domains/algorithms" }
      ]
    },
    { 
      id: 34, 
      title: "Computer Graphics", 
      description: "2D/3D graphics, rendering, and game development",
      category: "3rd Year",
      difficulty: "Advanced",
      pages: 170,
      downloadCount: 3300,
      resourceLinks: [
        { platform: "Unity Learn", url: "https://learn.unity.com/" },
        { platform: "OpenGL Tutorial", url: "https://learnopengl.com/" }
      ]
    },
    { 
      id: 35, 
      title: "Human-Computer Interaction", 
      description: "UX design principles and usability testing",
      category: "3rd Year",
      difficulty: "Advanced",
      pages: 140,
      downloadCount: 2800,
      resourceLinks: [
        { platform: "Coursera", url: "https://www.coursera.org/learn/ui-ux-design" },
        { platform: "Interaction Design Foundation", url: "https://www.interaction-design.org/" }
      ]
    },
    { 
      id: 36, 
      title: "Distributed Systems", 
      description: "Microservices, distributed algorithms, and fault tolerance",
      category: "3rd Year",
      difficulty: "Advanced",
      pages: 195,
      downloadCount: 3500,
      resourceLinks: [
        { platform: "MIT OCW", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-824-distributed-computer-systems-engineering-spring-2006/" },
        { platform: "High Scalability", url: "http://highscalability.com/" }
      ]
    },

    // 4th Year Documents
    { 
      id: 37, 
      title: "Deep Learning and Neural Networks", 
      description: "Advanced ML, CNNs, RNNs, and transformer models",
      category: "4th Year",
      difficulty: "Expert",
      pages: 250,
      downloadCount: 6200,
      resourceLinks: [
        { platform: "Deep Learning AI", url: "https://www.deeplearning.ai/" },
        { platform: "Fast.ai", url: "https://www.fast.ai/" },
        { platform: "TensorFlow", url: "https://www.tensorflow.org/learn" }
      ]
    },
    { 
      id: 38, 
      title: "Blockchain Technology", 
      description: "Cryptocurrency, smart contracts, and DeFi",
      category: "4th Year",
      difficulty: "Expert",
      pages: 185,
      downloadCount: 4600,
      resourceLinks: [
        { platform: "Ethereum", url: "https://ethereum.org/en/developers/tutorials/" },
        { platform: "Coursera", url: "https://www.coursera.org/learn/blockchain-basics" }
      ]
    },
    { 
      id: 39, 
      title: "Internet of Things (IoT)", 
      description: "Sensor networks, embedded systems, and edge computing",
      category: "4th Year",
      difficulty: "Expert",
      pages: 175,
      downloadCount: 4100,
      resourceLinks: [
        { platform: "Arduino", url: "https://www.arduino.cc/en/Tutorial/HomePage" },
        { platform: "Coursera", url: "https://www.coursera.org/specializations/iot" }
      ]
    },
    { 
      id: 40, 
      title: "Quantum Computing", 
      description: "Quantum algorithms and quantum machine learning",
      category: "4th Year",
      difficulty: "Expert",
      pages: 165,
      downloadCount: 3200,
      resourceLinks: [
        { platform: "IBM Quantum", url: "https://qiskit.org/textbook/" },
        { platform: "Microsoft Quantum", url: "https://docs.microsoft.com/en-us/quantum/" }
      ]
    },
    { 
      id: 41, 
      title: "Advanced Software Architecture", 
      description: "System design, scalability, and architectural patterns",
      category: "4th Year",
      difficulty: "Expert",
      pages: 210,
      downloadCount: 4800,
      resourceLinks: [
        { platform: "System Design Interview", url: "https://github.com/donnemartin/system-design-primer" },
        { platform: "High Scalability", url: "http://highscalability.com/" }
      ]
    },
    { 
      id: 42, 
      title: "Research Methodology", 
      description: "Research techniques and academic writing",
      category: "4th Year",
      difficulty: "Expert",
      pages: 145,
      downloadCount: 3400,
      resourceLinks: [
        { platform: "Coursera", url: "https://www.coursera.org/learn/research-methods" },
        { platform: "MIT Writing", url: "https://cmsw.mit.edu/writing-and-communication-center/" }
      ]
    },
    { 
      id: 43, 
      title: "Entrepreneurship in Tech", 
      description: "Startup fundamentals and technology commercialization",
      category: "4th Year",
      difficulty: "Expert",
      pages: 130,
      downloadCount: 2900,
      resourceLinks: [
        { platform: "Stanford Entrepreneurship", url: "https://online.stanford.edu/courses/som-y0003-technology-entrepreneurship" },
        { platform: "Coursera", url: "https://www.coursera.org/learn/entrepreneurship" }
      ]
    },
    { 
      id: 44, 
      title: "Ethics in Technology", 
      description: "AI ethics, privacy, and responsible computing",
      category: "4th Year",
      difficulty: "Expert",
      pages: 120,
      downloadCount: 2600,
      resourceLinks: [
        { platform: "MIT Ethics", url: "https://ethics.mit.edu/" },
        { platform: "edX", url: "https://www.edx.org/course/artificial-intelligence-ethics-and-society" }
      ]
    },
    { 
      id: 45, 
      title: "Advanced Project Management", 
      description: "Agile, Scrum, and large-scale project coordination",
      category: "4th Year",
      difficulty: "Expert",
      pages: 155,
      downloadCount: 3500,
      resourceLinks: [
        { platform: "Scrum.org", url: "https://www.scrum.org/learn-about-scrum" },
        { platform: "PMI", url: "https://www.pmi.org/learning" }
      ]
    },
    { 
      id: 46, 
      title: "Industry 4.0 Technologies", 
      description: "Automation, robotics, and smart manufacturing",
      category: "4th Year",
      difficulty: "Expert",
      pages: 180,
      downloadCount: 3800,
      resourceLinks: [
        { platform: "Coursera", url: "https://www.coursera.org/learn/industry-4-0" },
        { platform: "edX", url: "https://www.edx.org/course/introduction-to-industry-4-0" }
      ]
    },
    { 
      id: 47, 
      title: "Advanced Data Analytics", 
      description: "Big data processing, data mining, and visualization",
      category: "4th Year",
      difficulty: "Expert",
      pages: 195,
      downloadCount: 4300,
      resourceLinks: [
        { platform: "Kaggle Learn", url: "https://www.kaggle.com/learn/data-visualization" },
        { platform: "Coursera", url: "https://www.coursera.org/specializations/data-science" }
      ]
    },
    { 
      id: 48, 
      title: "Capstone Project Guide", 
      description: "Final year project planning and execution",
      category: "4th Year",
      difficulty: "Expert",
      pages: 170,
      downloadCount: 5100,
      resourceLinks: [
        { platform: "IEEE Xplore", url: "https://ieeexplore.ieee.org/browse/conferences/title/" },
        { platform: "GitHub", url: "https://github.com/topics/final-year-project" }
      ]
    },

    // Special Documents
    { 
      id: 49, 
      title: "Interview Preparation Guide", 
      description: "Technical interviews and coding challenges",
      category: "Career",
      difficulty: "All Levels",
      pages: 160,
      downloadCount: 7200,
      resourceLinks: [
        { platform: "LeetCode", url: "https://leetcode.com/explore/interview/" },
        { platform: "InterviewBit", url: "https://www.interviewbit.com/" },
        { platform: "Pramp", url: "https://www.pramp.com/" }
      ]
    },
    { 
      id: 50, 
      title: "Industry Certification Guide", 
      description: "Professional certifications and career paths",
      category: "Career",
      difficulty: "All Levels",
      pages: 140,
      downloadCount: 5800,
      resourceLinks: [
        { platform: "AWS Certification", url: "https://aws.amazon.com/certification/" },
        { platform: "Google Cloud Certification", url: "https://cloud.google.com/certification" },
        { platform: "Microsoft Certification", url: "https://docs.microsoft.com/en-us/learn/certifications/" }
      ]
    }
  ];

  const categories = ["All", "1st Year", "2nd Year", "3rd Year", "4th Year", "Career"];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced", "Expert", "All Levels"];

  const filteredDocuments = allDocuments.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "All" || doc.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-blue-100 text-blue-800";
      case "Advanced": return "bg-orange-100 text-orange-800";
      case "Expert": return "bg-red-100 text-red-800";
      case "All Levels": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "1st Year": return <GraduationCap className="w-4 h-4" />;
      case "2nd Year": return <BookOpen className="w-4 h-4" />;
      case "3rd Year": return <Users className="w-4 h-4" />;
      case "4th Year": return <TrendingUp className="w-4 h-4" />;
      case "Career": return <Star className="w-4 h-4" />;
      case "Special": return <Star className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-black">Technical Documents</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-1" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-1" />
                Bulk Download
              </Button>
              <Button variant="ghost" size="sm" asChild className="text-blue-600 hover:bg-blue-50">
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-black mb-4">Technical Documents</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive collection of engineering documents, guides, and reference materials for all academic years
          </p>
        </div>

        {/* Table of Contents */}
        <Card className="mb-8 border border-gray-200 bg-gray-50">
          <CardContent className="p-6">
            <h2 className="text-xl font-serif text-black mb-4 pb-2 border-b border-gray-300">Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {["1st Year", "2nd Year", "3rd Year", "4th Year", "Career"].map((category) => {
                const categoryDocs = allDocuments.filter(doc => doc.category === category);
                return (
                  <div key={category}>
                    <h3 className="font-semibold text-gray-800 mb-2">{category}</h3>
                    {categoryDocs.slice(0, 5).map((doc, index) => (
                      <div key={doc.id} className="flex items-center py-1">
                        <span className="text-blue-700 font-medium mr-3 min-w-[24px]">{index + 1}.</span>
                        <Link 
                          to={`/documents/${doc.id}`} 
                          className="text-blue-700 hover:text-blue-900 hover:underline text-sm font-medium transition-colors"
                        >
                          {doc.title}
                        </Link>
                      </div>
                    ))}
                    {categoryDocs.length > 5 && (
                      <p className="text-xs text-gray-500 mt-1">
                        +{categoryDocs.length - 5} more documents...
                      </p>
                    )}
                  </div>
                );
              })}
              
              {/* Additional Pages Section */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Additional Resources</h3>
                <div className="flex items-center py-1">
                  <span className="text-blue-700 font-medium mr-3 min-w-[24px]">1.</span>
                  <Link 
                    to="/campus-notes" 
                    className="text-blue-700 hover:text-blue-900 hover:underline text-sm font-medium transition-colors flex items-center"
                  >
                    <School className="w-3 h-3 mr-1" />
                    Campus Notes
                  </Link>
                </div>
                <div className="flex items-center py-1">
                  <span className="text-blue-700 font-medium mr-3 min-w-[24px]">2.</span>
                  <Link 
                    to="/anyone-can-develop" 
                    className="text-blue-700 hover:text-blue-900 hover:underline text-sm font-medium transition-colors flex items-center"
                  >
                    <Rocket className="w-3 h-3 mr-1" />
                    Anyone Can Develop
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search and Filter Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((doc) => (
            <Card key={doc.id} className="border-2 hover:shadow-lg transition-all duration-200 border-gray-200 hover:border-blue-300">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    {getCategoryIcon(doc.category)}
                    <Badge variant="outline" className="text-xs">
                      {doc.category}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-black leading-tight">
                  <Link to={`/documents/${doc.id}`} className="hover:text-blue-600 transition-colors">
                    {doc.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {doc.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <Badge className={getDifficultyColor(doc.difficulty) + " text-xs"}>
                    {doc.difficulty}
                  </Badge>
                  <div className="flex items-center text-xs text-gray-500 space-x-3">
                    <span>{doc.pages} pages</span>
                    <span>{doc.downloadCount.toLocaleString()} downloads</span>
                  </div>
                </div>

                {/* Learning Resources Section */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2">Learn from:</h4>
                  <div className="flex flex-wrap gap-1">
                    {doc.resourceLinks.slice(0, 2).map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100 transition-colors"
                      >
                        {link.platform}
                        <ExternalLink className="w-2 h-2 ml-1" />
                      </a>
                    ))}
                    {doc.resourceLinks.length > 2 && (
                      <span className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md">
                        +{doc.resourceLinks.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button asChild variant="outline" className="flex-1">
                    <Link to={`/documents/${doc.id}`}>
                      <Eye className="w-4 h-4 mr-1" />
                      Read
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDocuments.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">No documents found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters</p>
            </CardContent>
          </Card>
        )}

        {/* Statistics */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{allDocuments.length}</div>
                <div className="text-sm text-blue-800">Total Documents</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {allDocuments.reduce((sum, doc) => sum + doc.downloadCount, 0).toLocaleString()}
                </div>
                <div className="text-sm text-blue-800">Total Downloads</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {allDocuments.reduce((sum, doc) => sum + doc.pages, 0).toLocaleString()}
                </div>
                <div className="text-sm text-blue-800">Total Pages</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">5</div>
                <div className="text-sm text-blue-800">Categories</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Documents;
