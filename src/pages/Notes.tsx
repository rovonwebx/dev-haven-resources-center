import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, Star, Download, Eye, ExternalLink } from "lucide-react";

const Notes = () => {
  const noteCategories = [
    {
      category: "First Year - Foundation Subjects",
      color: "bg-green-50 border-green-200",
      notes: [
        { 
          id: "engineering-mathematics-1", 
          title: "Engineering Mathematics I", 
          description: "Calculus, differential equations, and linear algebra notes", 
          subject: "Mathematics", 
          pages: 45, 
          downloads: 1250, 
          rating: 4.8, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "Khan Academy", url: "https://www.khanacademy.org/math/calculus-1" },
            { platform: "MIT OCW", url: "https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/" }
          ]
        },
        { 
          id: "physics-engineers", 
          title: "Physics for Engineers", 
          description: "Mechanics, thermodynamics, and electromagnetic theory", 
          subject: "Physics", 
          pages: 38, 
          downloads: 980, 
          rating: 4.7, 
          lastUpdated: "Dec 2024",
          resourceLinks: [
            { platform: "Coursera", url: "https://www.coursera.org/learn/physics-intro" },
            { platform: "edX", url: "https://www.edx.org/course/introduction-to-mechanics" }
          ]
        },
        { 
          id: "chemistry-fundamentals", 
          title: "Chemistry Fundamentals", 
          description: "Organic, inorganic chemistry and material science basics", 
          subject: "Chemistry", 
          pages: 32, 
          downloads: 780, 
          rating: 4.6, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "Khan Academy", url: "https://www.khanacademy.org/science/chemistry" },
            { platform: "Coursera", url: "https://www.coursera.org/learn/general-chemistry" }
          ]
        },
        { 
          id: "c-programming-notes", 
          title: "C Programming Quick Notes", 
          description: "Syntax, functions, pointers, and data structures in C", 
          subject: "Programming", 
          pages: 28, 
          downloads: 1450, 
          rating: 4.9, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "Codecademy", url: "https://www.codecademy.com/learn/learn-c" },
            { platform: "CS50", url: "https://cs50.harvard.edu/x/2024/weeks/1/" }
          ]
        },
        { 
          id: "engineering-drawing", 
          title: "Engineering Drawing Basics", 
          description: "Technical drawing, projections, and CAD fundamentals", 
          subject: "Technical Drawing", 
          pages: 25, 
          downloads: 650, 
          rating: 4.5, 
          lastUpdated: "Dec 2024",
          resourceLinks: [
            { platform: "AutoCAD Learning", url: "https://www.autodesk.com/education/free-software/autocad" },
            { platform: "YouTube", url: "https://www.youtube.com/playlist?list=PLZHx5heVfgEspzxKI7l7VZa0e1vg6aHB8" }
          ]
        },
        { 
          id: "english-communication", 
          title: "English Communication Skills", 
          description: "Technical writing, presentation skills, and grammar", 
          subject: "Communication", 
          pages: 22, 
          downloads: 450, 
          rating: 4.4, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "Coursera", url: "https://www.coursera.org/learn/technical-writing" },
            { platform: "edX", url: "https://www.edx.org/course/effective-communication" }
          ]
        },
        { 
          id: "environmental-science", 
          title: "Environmental Science Notes", 
          description: "Ecology, pollution control, and sustainable development", 
          subject: "Environmental", 
          pages: 30, 
          downloads: 520, 
          rating: 4.3, 
          lastUpdated: "Dec 2024",
          resourceLinks: [
            { platform: "Coursera", url: "https://www.coursera.org/learn/environmental-science" },
            { platform: "edX", url: "https://www.edx.org/course/environmental-science" }
          ]
        },
        { 
          id: "workshop-technology", 
          title: "Workshop Technology", 
          description: "Manufacturing processes, tools, and safety procedures", 
          subject: "Workshop", 
          pages: 35, 
          downloads: 720, 
          rating: 4.6, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "NPTEL", url: "https://nptel.ac.in/courses/112/105/112105125/" },
            { platform: "YouTube", url: "https://www.youtube.com/playlist?list=PLbMVogVj5nJS5Y0N_v8xBfAfC6EL0KDKs" }
          ]
        }
      ]
    },
    {
      category: "Second Year - Core Engineering",
      color: "bg-blue-50 border-blue-200",
      notes: [
        { 
          id: "dsa-notes", 
          title: "Data Structures and Algorithms", 
          description: "Arrays, linked lists, trees, graphs, and algorithm analysis", 
          subject: "DSA", 
          pages: 52, 
          downloads: 2100, 
          rating: 4.9, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "LeetCode", url: "https://leetcode.com/explore/learn/" },
            { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/data-structures/" },
            { platform: "Coursera", url: "https://www.coursera.org/specializations/algorithms" }
          ]
        },
        { 
          id: "oop-notes", 
          title: "Object-Oriented Programming", 
          description: "OOP concepts, inheritance, polymorphism with Java/C++", 
          subject: "Programming", 
          pages: 48, 
          downloads: 1850, 
          rating: 4.8, 
          lastUpdated: "Dec 2024",
          resourceLinks: [
            { platform: "Oracle Java Tutorials", url: "https://docs.oracle.com/javase/tutorial/java/concepts/" },
            { platform: "Codecademy", url: "https://www.codecademy.com/learn/learn-java" }
          ]
        },
        { 
          id: "digital-electronics", 
          title: "Digital Electronics", 
          description: "Logic gates, circuits, flip-flops, and digital systems", 
          subject: "Electronics", 
          pages: 42, 
          downloads: 1320, 
          rating: 4.7, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "NPTEL", url: "https://nptel.ac.in/courses/106/105/106105165/" },
            { platform: "All About Circuits", url: "https://www.allaboutcircuits.com/textbook/digital/" }
          ]
        },
        { 
          id: "engineering-math-2", 
          title: "Engineering Mathematics II", 
          description: "Advanced calculus, complex analysis, and probability", 
          subject: "Mathematics", 
          pages: 50, 
          downloads: 1150, 
          rating: 4.6, 
          lastUpdated: "Dec 2024",
          resourceLinks: [
            { platform: "Khan Academy", url: "https://www.khanacademy.org/math/multivariable-calculus" },
            { platform: "MIT OCW", url: "https://ocw.mit.edu/courses/mathematics/18-02-multivariable-calculus-fall-2007/" }
          ]
        },
        { 
          id: "computer-organization", 
          title: "Computer Organization", 
          description: "CPU architecture, memory systems, and instruction sets", 
          subject: "Computer Science", 
          pages: 45, 
          downloads: 1680, 
          rating: 4.8, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "NPTEL", url: "https://nptel.ac.in/courses/106/105/106105163/" },
            { platform: "Coursera", url: "https://www.coursera.org/learn/comparch" }
          ]
        },
        { 
          id: "discrete-mathematics", 
          title: "Discrete Mathematics", 
          description: "Set theory, graph theory, and mathematical logic", 
          subject: "Mathematics", 
          pages: 40, 
          downloads: 980, 
          rating: 4.5, 
          lastUpdated: "Dec 2024",
          resourceLinks: [
            { platform: "MIT OCW", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/" },
            { platform: "Khan Academy", url: "https://www.khanacademy.org/computing/computer-science/algorithms" }
          ]
        },
        { 
          id: "dbms-notes", 
          title: "Database Management Systems", 
          description: "SQL, normalization, transactions, and database design", 
          subject: "DBMS", 
          pages: 46, 
          downloads: 1750, 
          rating: 4.8, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "W3Schools", url: "https://www.w3schools.com/sql/" },
            { platform: "SQLBolt", url: "https://sqlbolt.com/" },
            { platform: "Coursera", url: "https://www.coursera.org/learn/intro-sql" }
          ]
        },
        { 
          id: "os-concepts", 
          title: "Operating Systems Concepts", 
          description: "Process management, memory allocation, and file systems", 
          subject: "OS", 
          pages: 48, 
          downloads: 1620, 
          rating: 4.7, 
          lastUpdated: "Dec 2024",
          resourceLinks: [
            { platform: "MIT OCW", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-828-operating-system-engineering-fall-2012/" },
            { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/operating-systems/" }
          ]
        },
        { 
          id: "web-dev-basics", 
          title: "Web Development Basics", 
          description: "HTML, CSS, JavaScript fundamentals and responsive design", 
          subject: "Web Dev", 
          pages: 35, 
          downloads: 1950, 
          rating: 4.9, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Learn" },
            { platform: "freeCodeCamp", url: "https://www.freecodecamp.org/learn/responsive-web-design/" },
            { platform: "W3Schools", url: "https://www.w3schools.com/html/" }
          ]
        }
      ]
    },
    {
      category: "Third Year - Advanced Topics",
      color: "bg-purple-50 border-purple-200",
      notes: [
        { 
          id: "software-engineering", 
          title: "Software Engineering Principles", 
          description: "SDLC, design patterns, testing, and project management", 
          subject: "Software Engg", 
          pages: 55, 
          downloads: 1890, 
          rating: 4.8, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "Coursera", url: "https://www.coursera.org/specializations/software-engineering" },
            { platform: "edX", url: "https://www.edx.org/course/software-engineering" }
          ]
        },
        { 
          id: "computer-networks", 
          title: "Computer Networks", 
          description: "OSI model, TCP/IP, routing protocols, and network security", 
          subject: "Networks", 
          pages: 50, 
          downloads: 1650, 
          rating: 4.7, 
          lastUpdated: "Dec 2024",
          resourceLinks: [
            { platform: "Cisco Networking Academy", url: "https://www.netacad.com/courses/networking" },
            { platform: "Coursera", url: "https://www.coursera.org/learn/computer-networking" }
          ]
        },
        { 
          id: "algorithm-design", 
          title: "Algorithm Design & Analysis", 
          description: "Advanced algorithms, complexity theory, and optimization", 
          subject: "Algorithms", 
          pages: 58, 
          downloads: 1720, 
          rating: 4.9, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "MIT OCW", url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/" },
            { platform: "HackerRank", url: "https://www.hackerrank.com/domains/algorithms" }
          ]
        },
        { 
          id: "web-frameworks", 
          title: "Web Framework Development", 
          description: "React, Node.js, Express, and full-stack development", 
          subject: "Web Dev", 
          pages: 62, 
          downloads: 2250, 
          rating: 4.9, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "React Docs", url: "https://react.dev/learn" },
            { platform: "Node.js Docs", url: "https://nodejs.org/en/learn/" },
            { platform: "freeCodeCamp", url: "https://www.freecodecamp.org/learn/full-stack-web-development/" }
          ]
        },
        { 
          id: "advanced-database", 
          title: "Database Systems Advanced", 
          description: "NoSQL, distributed databases, and performance tuning", 
          subject: "Database", 
          pages: 48, 
          downloads: 1450, 
          rating: 4.6, 
          lastUpdated: "Dec 2024",
          resourceLinks: [
            { platform: "MongoDB University", url: "https://university.mongodb.com/" },
            { platform: "Coursera", url: "https://www.coursera.org/learn/nosql-databases" }
          ]
        },
        { 
          id: "system-design-fundamentals", 
          title: "System Design Fundamentals", 
          description: "Scalability, microservices, and distributed systems", 
          subject: "System Design", 
          pages: 52, 
          downloads: 1980, 
          rating: 4.8, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "System Design Interview", url: "https://github.com/donnemartin/system-design-primer" },
            { platform: "High Scalability", url: "http://highscalability.com/" }
          ]
        },
        { 
          id: "mobile-app-dev", 
          title: "Mobile App Development", 
          description: "Android, iOS development, and cross-platform solutions", 
          subject: "Mobile Dev", 
          pages: 45, 
          downloads: 1560, 
          rating: 4.7, 
          lastUpdated: "Dec 2024",
          resourceLinks: [
            { platform: "Android Developers", url: "https://developer.android.com/courses" },
            { platform: "Apple Developer", url: "https://developer.apple.com/tutorials/swiftui" },
            { platform: "Flutter", url: "https://flutter.dev/learn" }
          ]
        },
        { 
          id: "devops-cloud", 
          title: "DevOps and Cloud Computing", 
          description: "CI/CD, containerization, AWS, and deployment strategies", 
          subject: "DevOps", 
          pages: 50, 
          downloads: 1820, 
          rating: 4.8, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "AWS Training", url: "https://aws.amazon.com/training/" },
            { platform: "Docker", url: "https://docs.docker.com/get-started/" },
            { platform: "Kubernetes", url: "https://kubernetes.io/training/" }
          ]
        },
        { 
          id: "cybersecurity-essentials", 
          title: "Cybersecurity Essentials", 
          description: "Security principles, cryptography, and threat analysis", 
          subject: "Security", 
          pages: 44, 
          downloads: 1380, 
          rating: 4.6, 
          lastUpdated: "Dec 2024",
          resourceLinks: [
            { platform: "Cybrary", url: "https://www.cybrary.it/course/ethical-hacking/" },
            { platform: "Coursera", url: "https://www.coursera.org/learn/crypto" }
          ]
        }
      ]
    },
    {
      category: "Fourth Year - Specialization & Industry",
      color: "bg-red-50 border-red-200",
      notes: [
        { 
          id: "ml-fundamentals", 
          title: "Machine Learning Fundamentals", 
          description: "Supervised learning, neural networks, and model evaluation", 
          subject: "ML/AI", 
          pages: 65, 
          downloads: 2850, 
          rating: 4.9, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "Coursera", url: "https://www.coursera.org/learn/machine-learning" },
            { platform: "edX", url: "https://www.edx.org/course/introduction-to-machine-learning" },
            { platform: "Kaggle Learn", url: "https://www.kaggle.com/learn/intro-to-machine-learning" }
          ]
        },
        { 
          id: "advanced-system-design", 
          title: "Advanced System Design", 
          description: "Large-scale systems, load balancing, and architecture patterns", 
          subject: "System Design", 
          pages: 60, 
          downloads: 2150, 
          rating: 4.8, 
          lastUpdated: "Dec 2024",
          resourceLinks: [
            { platform: "System Design Interview", url: "https://github.com/donnemartin/system-design-primer" },
            { platform: "High Scalability", url: "http://highscalability.com/" }
          ]
        },
        { 
          id: "blockchain-tech", 
          title: "Blockchain Technology", 
          description: "Cryptocurrency, smart contracts, and distributed ledgers", 
          subject: "Blockchain", 
          pages: 48, 
          downloads: 1650, 
          rating: 4.7, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "Ethereum", url: "https://ethereum.org/en/developers/tutorials/" },
            { platform: "Coursera", url: "https://www.coursera.org/learn/blockchain-basics" }
          ]
        },
        { 
          id: "deep-learning-ai", 
          title: "Deep Learning and AI", 
          description: "Neural networks, computer vision, and natural language processing", 
          subject: "AI", 
          pages: 70, 
          downloads: 2450, 
          rating: 4.9, 
          lastUpdated: "Dec 2024",
          resourceLinks: [
            { platform: "Deep Learning AI", url: "https://www.deeplearning.ai/" },
            { platform: "Fast.ai", url: "https://www.fast.ai/" },
            { platform: "TensorFlow", url: "https://www.tensorflow.org/learn" }
          ]
        },
        { 
          id: "big-data-analytics", 
          title: "Big Data Analytics", 
          description: "Hadoop, Spark, data processing, and analytics frameworks", 
          subject: "Big Data", 
          pages: 55, 
          downloads: 1880, 
          rating: 4.6, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "Kaggle Learn", url: "https://www.kaggle.com/learn/data-visualization" },
            { platform: "Coursera", url: "https://www.coursera.org/specializations/data-science" }
          ]
        },
        { 
          id: "enterprise-software", 
          title: "Enterprise Software Development", 
          description: "Microservices, API design, and enterprise patterns", 
          subject: "Enterprise", 
          pages: 58, 
          downloads: 1720, 
          rating: 4.7, 
          lastUpdated: "Dec 2024",
          resourceLinks: [
            { platform: "Spring Framework", url: "https://spring.io/guides" },
            { platform: "Coursera", url: "https://www.coursera.org/specializations/enterprise-software-development" }
          ]
        },
        { 
          id: "cloud-architecture", 
          title: "Cloud Architecture & Services", 
          description: "AWS, Azure, GCP services and cloud-native development", 
          subject: "Cloud", 
          pages: 52, 
          downloads: 2020, 
          rating: 4.8, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "AWS Training", url: "https://aws.amazon.com/training/" },
            { platform: "Microsoft Learn", url: "https://docs.microsoft.com/en-us/learn/azure/" },
            { platform: "Google Cloud Skills", url: "https://cloud.google.com/training" }
          ]
        },
        { 
          id: "iot-embedded", 
          title: "IoT and Embedded Systems", 
          description: "Internet of Things, sensors, and embedded programming", 
          subject: "IoT", 
          pages: 45, 
          downloads: 1350, 
          rating: 4.5, 
          lastUpdated: "Dec 2024",
          resourceLinks: [
            { platform: "Arduino", url: "https://www.arduino.cc/en/Tutorial/HomePage" },
            { platform: "Coursera", url: "https://www.coursera.org/specializations/iot" }
          ]
        },
        { 
          id: "software-testing", 
          title: "Software Testing & QA", 
          description: "Test automation, quality assurance, and testing frameworks", 
          subject: "Testing", 
          pages: 42, 
          downloads: 1250, 
          rating: 4.6, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "Selenium", url: "https://selenium-python.readthedocs.io/" },
            { platform: "Coursera", url: "https://www.coursera.org/learn/software-testing" }
          ]
        }
      ]
    },
    {
      category: "Interview Preparation & Placement",
      color: "bg-yellow-50 border-yellow-200",
      notes: [
        { 
          id: "technical-interview", 
          title: "Technical Interview Questions", 
          description: "Coding problems, system design, and technical discussions", 
          subject: "Interview", 
          pages: 85, 
          downloads: 3250, 
          rating: 4.9, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "LeetCode", url: "https://leetcode.com/explore/interview/" },
            { platform: "InterviewBit", url: "https://www.interviewbit.com/" },
            { platform: "Pramp", url: "https://www.pramp.com/" }
          ]
        },
        { 
          id: "resume-building", 
          title: "Resume Building Guide", 
          description: "Professional resume templates and writing strategies", 
          subject: "Career", 
          pages: 25, 
          downloads: 2150, 
          rating: 4.7, 
          lastUpdated: "Dec 2024",
          resourceLinks: [
            { platform: "Canva", url: "https://www.canva.com/resumes/templates/" },
            { platform: "Indeed Career Guide", url: "https://www.indeed.com/career-advice/resumes-cover-letters" }
          ]
        },
        { 
          id: "aptitude-test", 
          title: "Aptitude Test Preparation", 
          description: "Quantitative, logical reasoning, and verbal ability", 
          subject: "Aptitude", 
          pages: 68, 
          downloads: 2850, 
          rating: 4.8, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "IndiaBIX", url: "https://www.indiabix.com/" },
            { platform: "Testpot", url: "https://testpot.com/" }
          ]
        },
        { 
          id: "hr-interview", 
          title: "HR Interview Questions", 
          description: "Behavioral questions and professional communication", 
          subject: "HR", 
          pages: 32, 
          downloads: 1950, 
          rating: 4.6, 
          lastUpdated: "Dec 2024",
          resourceLinks: [
            { platform: "Glassdoor", url: "https://www.glassdoor.com/Interview/index.htm" },
            { platform: "Indeed Career Guide", url: "https://www.indeed.com/career-advice/interviewing" }
          ]
        },
        { 
          id: "company-specific", 
          title: "Company-Specific Preparation", 
          description: "FAANG, startup, and service company interview guides", 
          subject: "Companies", 
          pages: 75, 
          downloads: 2680, 
          rating: 4.8, 
          lastUpdated: "Jan 2025",
          resourceLinks: [
            { platform: "LeetCode", url: "https://leetcode.com/company/" },
            { platform: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/company-interview-corner/" }
          ]
        },
        { 
          id: "salary-negotiation", 
          title: "Salary Negotiation Guide", 
          description: "Negotiation strategies and industry salary benchmarks", 
          subject: "Career", 
          pages: 28, 
          downloads: 1480, 
          rating: 4.5, 
          lastUpdated: "Dec 2024",
          resourceLinks: [
            { platform: "Harvard Business Review", url: "https://hbr.org/topic/negotiation" },
            { platform: "PayScale", url: "https://www.payscale.com/salary-negotiation-guide" }
          ]
        }
      ]
    }
  ];

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ));
  };

  const getSubjectColor = (subject: string) => {
    const colors: { [key: string]: string } = {
      "Mathematics": "bg-blue-100 text-blue-800",
      "Physics": "bg-green-100 text-green-800",
      "Chemistry": "bg-purple-100 text-purple-800",
      "Programming": "bg-red-100 text-red-800",
      "DSA": "bg-indigo-100 text-indigo-800",
      "Web Dev": "bg-pink-100 text-pink-800",
      "AI": "bg-teal-100 text-teal-800",
      "ML/AI": "bg-teal-100 text-teal-800",
      "Interview": "bg-orange-100 text-orange-800",
      "Career": "bg-gray-100 text-gray-800"
    };
    return colors[subject] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-serif text-black">Study Notes Collection</h1>
            </div>
            <Button variant="ghost" size="sm" asChild className="text-blue-600 hover:bg-blue-50">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Main Page
              </Link>
            </Button>
          </div>
          <p className="text-gray-600 text-sm mt-1">Comprehensive study materials and quick reference guides for all engineering years</p>
          <p className="text-blue-600 text-sm mt-2 font-medium">50+ Study Notes | 1st-4th Year Coverage | High-Quality Content</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-xl font-semibold text-black mb-3">Complete Study Notes Library</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Access 50+ comprehensive study notes covering all major engineering subjects 
            from first year to final year. Each note is carefully prepared by experts and regularly updated 
            to match current academic standards and industry requirements.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
            <div className="bg-white p-3 rounded border text-center">
              <div className="font-bold text-2xl text-green-600">50+</div>
              <div className="text-gray-600">Study Notes</div>
            </div>
            <div className="bg-white p-3 rounded border text-center">
              <div className="font-bold text-2xl text-blue-600">4</div>
              <div className="text-gray-600">Academic Years</div>
            </div>
            <div className="bg-white p-3 rounded border text-center">
              <div className="font-bold text-2xl text-purple-600">25+</div>
              <div className="text-gray-600">Subjects</div>
            </div>
            <div className="bg-white p-3 rounded border text-center">
              <div className="font-bold text-2xl text-red-600">2500+</div>
              <div className="text-gray-600">Pages</div>
            </div>
            <div className="bg-white p-3 rounded border text-center">
              <div className="font-bold text-2xl text-yellow-600">50K+</div>
              <div className="text-gray-600">Downloads</div>
            </div>
          </div>
        </div>

        {noteCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-serif text-black mb-2">{category.category}</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.notes.map((note, noteIndex) => (
                <Card key={noteIndex} className={`${category.color} hover:shadow-lg transition-all duration-200 hover:scale-105`}>
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-black text-base leading-tight">{note.title}</h3>
                      <div className="flex gap-1 ml-2">
                        <Button variant="outline" size="sm" className="text-xs p-1 h-7 w-7" asChild>
                          <Link to={`/notes/${note.id}/preview`}>
                            <Eye className="w-3 h-3" />
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm" className="text-xs p-1 h-7 w-7" asChild>
                          <Link to={`/notes/${note.id}`}>
                            <Download className="w-3 h-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{note.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSubjectColor(note.subject)}`}>
                          {note.subject}
                        </span>
                        <div className="flex items-center gap-1">
                          {getRatingStars(note.rating)}
                          <span className="text-xs font-medium text-gray-600 ml-1">{note.rating}</span>
                        </div>
                      </div>

                      {/* Learning Resources Section */}
                      <div className="mb-3">
                        <h4 className="text-xs font-semibold text-gray-700 mb-2">Learn from:</h4>
                        <div className="flex flex-wrap gap-1">
                          {note.resourceLinks.slice(0, 2).map((link, index) => (
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
                          {note.resourceLinks.length > 2 && (
                            <span className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md">
                              +{note.resourceLinks.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center text-xs text-gray-600">
                        <div className="flex items-center gap-3">
                          <span>{note.pages} pages</span>
                          <span>{note.downloads.toLocaleString()} downloads</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {note.lastUpdated}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        <Card className="mt-12 border-2 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-black mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
              How to Use Study Notes Effectively
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium mb-3 text-black">Study Strategy</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Preview: Read through notes before lectures</li>
                  <li>• Review: Go through notes after each class</li>
                  <li>• Practice: Solve problems and examples provided</li>
                  <li>• Summarize: Create your own summary notes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-black">Study Tips</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Use active recall and spaced repetition techniques</li>
                  <li>• Form study groups to discuss complex topics</li>
                  <li>• Create flashcards for important formulas and concepts</li>
                  <li>• Take regular breaks during study sessions</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            All notes are peer-reviewed and updated regularly based on latest curriculum changes. 
            Total downloads: <span className="font-semibold text-blue-600">50,000+</span> • 
            Average rating: <span className="font-semibold text-green-600">4.7/5.0</span>
          </p>
          <p className="text-xs text-gray-400 mt-2">
            For additional study resources, visit the main <Link to="/" className="text-blue-600 hover:underline">Engineering Resources Hub</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Notes;
