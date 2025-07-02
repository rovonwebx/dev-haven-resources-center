import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Clock, BookOpen, Code, Database, Globe, Shield, Cpu } from "lucide-react";

const Documents = () => {
  const documentCategories = [
    {
      category: "First Year - Programming Fundamentals",
      icon: Code,
      documents: [
        { id: "c-programming-guide", title: "C Programming Complete Guide", description: "Comprehensive guide to C programming covering basics to advanced concepts", lastUpdated: "Jan 2025", type: "Tutorial", difficulty: "Beginner", readTime: "3 hours" },
        { id: "python-beginners", title: "Python for Beginners", description: "Step-by-step Python programming tutorial with examples and exercises", lastUpdated: "Jan 2025", type: "Guide", difficulty: "Beginner", readTime: "2.5 hours" },
        { id: "oop-concepts", title: "Object-Oriented Programming Concepts", description: "Understanding OOP principles with practical implementations", lastUpdated: "Dec 2024", type: "Theory", difficulty: "Intermediate", readTime: "2 hours" },
        { id: "java-fundamentals", title: "Java Fundamentals Documentation", description: "Complete Java programming guide from basics to advanced topics", lastUpdated: "Jan 2025", type: "Reference", difficulty: "Beginner", readTime: "4 hours" },
        { id: "html-css-basics", title: "HTML & CSS Basics", description: "Web development fundamentals for beginners", lastUpdated: "Dec 2024", type: "Tutorial", difficulty: "Beginner", readTime: "1.5 hours" },
        { id: "javascript-es6", title: "JavaScript ES6+ Features", description: "Modern JavaScript features and best practices", lastUpdated: "Jan 2025", type: "Guide", difficulty: "Intermediate", readTime: "2 hours" },
        { id: "git-version-control", title: "Git Version Control Guide", description: "Complete guide to Git for collaborative development", lastUpdated: "Dec 2024", type: "Tutorial", difficulty: "Beginner", readTime: "1 hour" },
        { id: "linux-command-line", title: "Linux Command Line Basics", description: "Essential Linux commands for developers", lastUpdated: "Jan 2025", type: "Reference", difficulty: "Beginner", readTime: "1.5 hours" }
      ]
    },
    {
      category: "Second Year - Data Structures & Algorithms",
      icon: Database,
      documents: [
        { id: "arrays-strings", title: "Arrays and Strings Masterclass", description: "Complete guide to array and string data structures with problem solving", lastUpdated: "Jan 2025", type: "Tutorial", difficulty: "Intermediate", readTime: "3 hours" },
        { id: "linked-lists", title: "Linked Lists Implementation Guide", description: "Comprehensive linked list operations and applications", lastUpdated: "Dec 2024", type: "Guide", difficulty: "Intermediate", readTime: "2.5 hours" },
        { id: "stack-queue", title: "Stack and Queue Data Structures", description: "Understanding LIFO and FIFO structures with real-world examples", lastUpdated: "Jan 2025", type: "Tutorial", difficulty: "Intermediate", readTime: "2 hours" },
        { id: "binary-trees", title: "Binary Trees and BST", description: "Tree data structures, traversals, and binary search trees", lastUpdated: "Dec 2024", type: "Guide", difficulty: "Advanced", readTime: "4 hours" },
        { id: "graph-algorithms", title: "Graph Algorithms Handbook", description: "BFS, DFS, shortest path algorithms, and graph applications", lastUpdated: "Jan 2025", type: "Reference", difficulty: "Advanced", readTime: "5 hours" },
        { id: "sorting-algorithms", title: "Sorting Algorithms Analysis", description: "Comparison of sorting techniques with time complexity analysis", lastUpdated: "Dec 2024", type: "Analysis", difficulty: "Intermediate", readTime: "2.5 hours" },
        { id: "dynamic-programming", title: "Dynamic Programming Patterns", description: "Common DP patterns and problem-solving strategies", lastUpdated: "Jan 2025", type: "Guide", difficulty: "Advanced", readTime: "4 hours" },
        { id: "hashing-tables", title: "Hashing and Hash Tables", description: "Hash functions, collision resolution, and applications", lastUpdated: "Dec 2024", type: "Tutorial", difficulty: "Intermediate", readTime: "2 hours" },
        { id: "algorithm-complexity", title: "Algorithm Complexity Analysis", description: "Big O notation and algorithmic complexity evaluation", lastUpdated: "Jan 2025", type: "Theory", difficulty: "Intermediate", readTime: "1.5 hours" }
      ]
    },
    {
      category: "Third Year - Software Engineering & Databases",
      icon: Globe,
      documents: [
        { id: "sdlc-guide", title: "Software Development Life Cycle", description: "Complete SDLC methodologies including Agile and Waterfall", lastUpdated: "Jan 2025", type: "Guide", difficulty: "Intermediate", readTime: "3 hours" },
        { id: "database-design", title: "Database Design Principles", description: "Normalization, ER diagrams, and database optimization", lastUpdated: "Dec 2024", type: "Tutorial", difficulty: "Intermediate", readTime: "3.5 hours" },
        { id: "sql-comprehensive", title: "SQL Comprehensive Guide", description: "From basic queries to advanced database operations", lastUpdated: "Jan 2025", type: "Reference", difficulty: "Intermediate", readTime: "4 hours" },
        { id: "nosql-databases", title: "NoSQL Databases Overview", description: "MongoDB, Redis, and other NoSQL solutions", lastUpdated: "Dec 2024", type: "Guide", difficulty: "Advanced", readTime: "2.5 hours" },
        { id: "restful-api", title: "RESTful API Design", description: "Best practices for designing and implementing REST APIs", lastUpdated: "Jan 2025", type: "Tutorial", difficulty: "Intermediate", readTime: "2 hours" },
        { id: "web-frameworks", title: "Web Framework Documentation", description: "React, Angular, Vue.js framework comparisons and guides", lastUpdated: "Dec 2024", type: "Guide", difficulty: "Advanced", readTime: "5 hours" },
        { id: "testing-strategies", title: "Testing Strategies & Frameworks", description: "Unit testing, integration testing, and TDD approaches", lastUpdated: "Jan 2025", type: "Tutorial", difficulty: "Intermediate", readTime: "3 hours" },
        { id: "design-patterns", title: "Design Patterns in Software Engineering", description: "Common design patterns with implementation examples", lastUpdated: "Dec 2024", type: "Reference", difficulty: "Advanced", readTime: "4 hours" },
        { id: "microservices", title: "Microservices Architecture", description: "Building scalable distributed systems", lastUpdated: "Jan 2025", type: "Guide", difficulty: "Advanced", readTime: "3.5 hours" }
      ]
    },
    {
      category: "Fourth Year - Advanced Topics & Specialization",
      icon: Cpu,
      documents: [
        { id: "machine-learning", title: "Machine Learning Fundamentals", description: "Introduction to ML algorithms and implementation", lastUpdated: "Jan 2025", type: "Tutorial", difficulty: "Advanced", readTime: "6 hours" },
        { id: "cloud-computing", title: "Cloud Computing Architecture", description: "AWS, Azure, GCP services and cloud-native development", lastUpdated: "Dec 2024", type: "Guide", difficulty: "Advanced", readTime: "4 hours" },
        { id: "devops-cicd", title: "DevOps and CI/CD Pipelines", description: "Automation, containerization, and deployment strategies", lastUpdated: "Jan 2025", type: "Tutorial", difficulty: "Advanced", readTime: "3.5 hours" },
        { id: "cybersecurity", title: "Cybersecurity Best Practices", description: "Security principles and threat mitigation strategies", lastUpdated: "Dec 2024", type: "Guide", difficulty: "Advanced", readTime: "3 hours" },
        { id: "mobile-development", title: "Mobile App Development", description: "Native and cross-platform mobile development", lastUpdated: "Jan 2025", type: "Tutorial", difficulty: "Intermediate", readTime: "5 hours" },
        { id: "blockchain-guide", title: "Blockchain Technology Guide", description: "Distributed ledgers, smart contracts, and Web3", lastUpdated: "Dec 2024", type: "Guide", difficulty: "Advanced", readTime: "4 hours" },
        { id: "system-design", title: "System Design Principles", description: "Scalable system architecture and design patterns", lastUpdated: "Jan 2025", type: "Reference", difficulty: "Advanced", readTime: "5 hours" },
        { id: "big-data", title: "Big Data Technologies", description: "Hadoop, Spark, and data processing frameworks", lastUpdated: "Dec 2024", type: "Guide", difficulty: "Advanced", readTime: "4.5 hours" },
        { id: "artificial-intelligence", title: "Artificial Intelligence Concepts", description: "AI algorithms, neural networks, and deep learning", lastUpdated: "Jan 2025", type: "Tutorial", difficulty: "Advanced", readTime: "6 hours" }
      ]
    },
    {
      category: "Industry Standards & Best Practices",
      icon: Shield,
      documents: [
        { id: "code-review", title: "Code Review Guidelines", description: "Best practices for conducting effective code reviews", lastUpdated: "Jan 2025", type: "Standards", difficulty: "Intermediate", readTime: "1.5 hours" },
        { id: "documentation-standards", title: "Documentation Standards", description: "Technical writing and API documentation best practices", lastUpdated: "Dec 2024", type: "Guide", difficulty: "Beginner", readTime: "2 hours" },
        { id: "agile-methodology", title: "Agile Development Methodology", description: "Scrum, Kanban, and agile project management", lastUpdated: "Jan 2025", type: "Guide", difficulty: "Intermediate", readTime: "2.5 hours" },
        { id: "performance-optimization", title: "Performance Optimization Techniques", description: "Code optimization and system performance tuning", lastUpdated: "Dec 2024", type: "Tutorial", difficulty: "Advanced", readTime: "3 hours" },
        { id: "web-accessibility", title: "Accessibility in Web Development", description: "Creating inclusive and accessible web applications", lastUpdated: "Jan 2025", type: "Guide", difficulty: "Intermediate", readTime: "2 hours" },
        { id: "open-source", title: "Open Source Contribution Guide", description: "How to contribute to open source projects effectively", lastUpdated: "Dec 2024", type: "Guide", difficulty: "Beginner", readTime: "1.5 hours" }
      ]
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

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Tutorial": return "bg-blue-100 text-blue-800";
      case "Guide": return "bg-purple-100 text-purple-800";
      case "Reference": return "bg-indigo-100 text-indigo-800";
      case "Theory": return "bg-pink-100 text-pink-800";
      case "Standards": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-serif text-black">Technical Documentation</h1>
            </div>
            <Button variant="ghost" size="sm" asChild className="text-blue-600 hover:bg-blue-50">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Main Page
              </Link>
            </Button>
          </div>
          <p className="text-gray-600 text-sm mt-1">Comprehensive technical documentation for engineering students (1st-4th Year)</p>
          <p className="text-blue-600 text-sm mt-2 font-medium">50+ Resources | Year-wise Organization | Updated Content</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-xl font-semibold text-black mb-3">Complete Engineering Documentation Hub</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This comprehensive documentation covers all four years of engineering education, 
            from basic programming concepts to advanced industry technologies. Each document is carefully 
            curated to provide practical knowledge and hands-on learning experience.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white p-3 rounded border">
              <div className="font-semibold text-blue-600">Year 1</div>
              <div className="text-gray-600">Programming Basics</div>
            </div>
            <div className="bg-white p-3 rounded border">
              <div className="font-semibold text-green-600">Year 2</div>
              <div className="text-gray-600">DSA & Algorithms</div>
            </div>
            <div className="bg-white p-3 rounded border">
              <div className="font-semibold text-purple-600">Year 3</div>
              <div className="text-gray-600">Software Engineering</div>
            </div>
            <div className="bg-white p-3 rounded border">
              <div className="font-semibold text-red-600">Year 4</div>
              <div className="text-gray-600">Advanced Topics</div>
            </div>
          </div>
        </div>

        {documentCategories.map((category, categoryIndex) => {
          const IconComponent = category.icon;
          return (
            <section key={categoryIndex} className="mb-12">
              <div className="flex items-center mb-6">
                <IconComponent className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-serif text-black border-b-2 border-blue-200 pb-1">
                  {category.category}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.documents.map((doc, docIndex) => (
                  <Card key={docIndex} className="border border-gray-200 hover:shadow-md transition-all duration-200 hover:border-blue-300">
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-black text-lg leading-tight">{doc.title}</h3>
                        <Button variant="outline" size="sm" className="text-xs ml-3 shrink-0" asChild>
                          <Link to={`/document/${doc.id}`}>
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Read
                          </Link>
                        </Button>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">{doc.description}</p>
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className={`px-2 py-1 rounded-full ${getDifficultyColor(doc.difficulty)}`}>
                          {doc.difficulty}
                        </span>
                        <span className={`px-2 py-1 rounded-full ${getTypeColor(doc.type)}`}>
                          {doc.type}
                        </span>
                        <div className="flex items-center text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                          <Clock className="w-3 h-3 mr-1" />
                          {doc.readTime}
                        </div>
                        <span className="text-gray-500 ml-auto">Updated {doc.lastUpdated}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}

        <Card className="mt-12 border-2 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-black mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
              How to Use This Documentation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium mb-3 text-black">Academic Progression</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• First Year: Start with programming fundamentals</li>
                  <li>• Second Year: Master data structures and algorithms</li>
                  <li>• Third Year: Learn software engineering practices</li>
                  <li>• Fourth Year: Explore advanced technologies and specializations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-black">Learning Strategy</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Follow the difficulty progression: Beginner → Intermediate → Advanced</li>
                  <li>• Practice with hands-on examples and projects</li>
                  <li>• Join study groups and discussion forums</li>
                  <li>• Build projects to apply theoretical knowledge</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            Documentation updated regularly with industry trends and academic requirements. 
            Total: <span className="font-semibold text-blue-600">50+ comprehensive resources</span> • 
            Last major update: January 2025
          </p>
          <p className="text-xs text-gray-400 mt-2">
            For additional resources, visit the main <Link to="/" className="text-blue-600 hover:underline">Engineering Resources Hub</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Documents;
