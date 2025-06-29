
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Code, 
  Brain, 
  Globe, 
  Target,
  BookOpen,
  Lightbulb,
  Trophy,
  Zap
} from "lucide-react";

const Roadmaps = () => {
  const [selectedRoadmap, setSelectedRoadmap] = useState("dsa");
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());

  const toggleCompletion = (itemId: string) => {
    const newCompleted = new Set(completedItems);
    if (newCompleted.has(itemId)) {
      newCompleted.delete(itemId);
    } else {
      newCompleted.add(itemId);
    }
    setCompletedItems(newCompleted);
  };

  const dsaRoadmap = [
    {
      month: "Month 1",
      title: "Foundations & Arrays",
      topics: [
        { id: "dsa-1-1", name: "Big O Notation & Complexity Analysis", hours: "8-10", difficulty: "Beginner" },
        { id: "dsa-1-2", name: "Arrays & Two Pointers Technique", hours: "15-20", difficulty: "Beginner" },
        { id: "dsa-1-3", name: "Sliding Window Problems", hours: "10-15", difficulty: "Beginner" },
        { id: "dsa-1-4", name: "Basic Sorting Algorithms", hours: "8-12", difficulty: "Beginner" }
      ],
      projects: ["Implement sorting visualizer", "Array manipulation exercises"],
      goals: "Master basic array operations and understand time/space complexity"
    },
    {
      month: "Month 2",
      title: "Strings & Hashing",
      topics: [
        { id: "dsa-2-1", name: "String Manipulation & Pattern Matching", hours: "12-15", difficulty: "Beginner" },
        { id: "dsa-2-2", name: "Hash Tables & Hash Maps", hours: "10-12", difficulty: "Intermediate" },
        { id: "dsa-2-3", name: "Character Frequency Problems", hours: "8-10", difficulty: "Beginner" },
        { id: "dsa-2-4", name: "Anagram & Palindrome Problems", hours: "6-8", difficulty: "Beginner" }
      ],
      projects: ["Build a word frequency counter", "Implement custom hash table"],
      goals: "Master string algorithms and hash-based problem solving"
    },
    {
      month: "Month 3",
      title: "Linked Lists & Stacks/Queues",
      topics: [
        { id: "dsa-3-1", name: "Singly & Doubly Linked Lists", hours: "15-18", difficulty: "Intermediate" },
        { id: "dsa-3-2", name: "Stack Operations & Applications", hours: "10-12", difficulty: "Beginner" },
        { id: "dsa-3-3", name: "Queue & Deque Operations", hours: "8-10", difficulty: "Beginner" },
        { id: "dsa-3-4", name: "Linked List Reversal & Cycles", hours: "12-15", difficulty: "Intermediate" }
      ],
      projects: ["Implement expression evaluator", "Build undo/redo functionality"],
      goals: "Master linear data structures and their applications"
    },
    {
      month: "Month 4",
      title: "Trees & Binary Search Trees",
      topics: [
        { id: "dsa-4-1", name: "Binary Trees & Tree Traversals", hours: "15-20", difficulty: "Intermediate" },
        { id: "dsa-4-2", name: "Binary Search Trees (BST)", hours: "12-15", difficulty: "Intermediate" },
        { id: "dsa-4-3", name: "Tree Height & Depth Problems", hours: "8-10", difficulty: "Intermediate" },
        { id: "dsa-4-4", name: "Lowest Common Ancestor", hours: "10-12", difficulty: "Intermediate" }
      ],
      projects: ["Build a file system tree", "Implement autocomplete with trie"],
      goals: "Master tree data structures and recursive thinking"
    },
    {
      month: "Month 5",
      title: "Heaps & Priority Queues",
      topics: [
        { id: "dsa-5-1", name: "Min/Max Heaps Implementation", hours: "12-15", difficulty: "Intermediate" },
        { id: "dsa-5-2", name: "Priority Queue Applications", hours: "10-12", difficulty: "Intermediate" },
        { id: "dsa-5-3", name: "Heap Sort Algorithm", hours: "6-8", difficulty: "Intermediate" },
        { id: "dsa-5-4", name: "K-way Merge Problems", hours: "8-10", difficulty: "Advanced" }
      ],
      projects: ["Build task scheduler", "Implement Dijkstra's algorithm"],
      goals: "Master heap data structure and priority-based algorithms"
    },
    {
      month: "Month 6",
      title: "Graphs & Advanced Algorithms",
      topics: [
        { id: "dsa-6-1", name: "Graph Representation & Traversals", hours: "15-18", difficulty: "Advanced" },
        { id: "dsa-6-2", name: "BFS & DFS Applications", hours: "12-15", difficulty: "Advanced" },
        { id: "dsa-6-3", name: "Shortest Path Algorithms", hours: "15-20", difficulty: "Advanced" },
        { id: "dsa-6-4", name: "Topological Sort & Cycle Detection", hours: "10-12", difficulty: "Advanced" }
      ],
      projects: ["Build social network analyzer", "Implement GPS route finder"],
      goals: "Master graph algorithms and complex problem solving"
    },
    {
      month: "Month 7",
      title: "Dynamic Programming",
      topics: [
        { id: "dsa-7-1", name: "1D Dynamic Programming", hours: "15-20", difficulty: "Advanced" },
        { id: "dsa-7-2", name: "2D Dynamic Programming", hours: "18-25", difficulty: "Advanced" },
        { id: "dsa-7-3", name: "Knapsack Problems", hours: "10-12", difficulty: "Advanced" },
        { id: "dsa-7-4", name: "String DP Problems", hours: "12-15", difficulty: "Advanced" }
      ],
      projects: ["Build optimal strategy game", "Implement text similarity checker"],
      goals: "Master dynamic programming and optimization techniques"
    },
    {
      month: "Month 8",
      title: "Advanced Topics & System Design",
      topics: [
        { id: "dsa-8-1", name: "Tries & String Algorithms", hours: "10-12", difficulty: "Advanced" },
        { id: "dsa-8-2", name: "Union Find (Disjoint Set)", hours: "8-10", difficulty: "Advanced" },
        { id: "dsa-8-3", name: "Bit Manipulation", hours: "8-10", difficulty: "Intermediate" },
        { id: "dsa-8-4", name: "System Design Basics", hours: "15-20", difficulty: "Advanced" }
      ],
      projects: ["Build distributed cache", "Design URL shortener"],
      goals: "Master advanced data structures and system design principles"
    }
  ];

  const webDevRoadmap = [
    {
      month: "Month 1",
      title: "HTML & CSS Fundamentals",
      topics: [
        { id: "web-1-1", name: "HTML5 Semantic Elements", hours: "10-12", difficulty: "Beginner" },
        { id: "web-1-2", name: "CSS3 & Flexbox", hours: "15-18", difficulty: "Beginner" },
        { id: "web-1-3", name: "CSS Grid Layout", hours: "12-15", difficulty: "Beginner" },
        { id: "web-1-4", name: "Responsive Design Principles", hours: "10-12", difficulty: "Beginner" }
      ],
      projects: ["Build responsive portfolio website", "Create CSS art project"],
      goals: "Master HTML structure and CSS styling fundamentals"
    },
    {
      month: "Month 2",
      title: "JavaScript Fundamentals",
      topics: [
        { id: "web-2-1", name: "ES6+ Features & Syntax", hours: "15-20", difficulty: "Beginner" },
        { id: "web-2-2", name: "DOM Manipulation", hours: "12-15", difficulty: "Beginner" },
        { id: "web-2-3", name: "Event Handling", hours: "8-10", difficulty: "Beginner" },
        { id: "web-2-4", name: "Async JavaScript & Promises", hours: "12-15", difficulty: "Intermediate" }
      ],
      projects: ["Interactive calculator", "Todo list application"],
      goals: "Master JavaScript fundamentals and DOM interactions"
    },
    {
      month: "Month 3",
      title: "Advanced JavaScript & APIs",
      topics: [
        { id: "web-3-1", name: "Fetch API & AJAX", hours: "10-12", difficulty: "Intermediate" },
        { id: "web-3-2", name: "Local Storage & Session Storage", hours: "6-8", difficulty: "Beginner" },
        { id: "web-3-3", name: "Error Handling & Debugging", hours: "8-10", difficulty: "Intermediate" },
        { id: "web-3-4", name: "Module Systems (ES6 Modules)", hours: "8-10", difficulty: "Intermediate" }
      ],
      projects: ["Weather app with API", "Movie search application"],
      goals: "Master API integration and advanced JavaScript concepts"
    },
    {
      month: "Month 4",
      title: "React.js Fundamentals",
      topics: [
        { id: "web-4-1", name: "React Components & JSX", hours: "15-18", difficulty: "Intermediate" },
        { id: "web-4-2", name: "Props & State Management", hours: "12-15", difficulty: "Intermediate" },
        { id: "web-4-3", name: "Event Handling in React", hours: "8-10", difficulty: "Intermediate" },
        { id: "web-4-4", name: "React Hooks (useState, useEffect)", hours: "15-20", difficulty: "Intermediate" }
      ],
      projects: ["React todo app", "Component library"],
      goals: "Master React fundamentals and component-based architecture"
    },
    {
      month: "Month 5",
      title: "Advanced React & State Management",
      topics: [
        { id: "web-5-1", name: "Custom Hooks", hours: "10-12", difficulty: "Advanced" },
        { id: "web-5-2", name: "Context API", hours: "8-10", difficulty: "Intermediate" },
        { id: "web-5-3", name: "React Router", hours: "10-12", difficulty: "Intermediate" },
        { id: "web-5-4", name: "Performance Optimization", hours: "12-15", difficulty: "Advanced" }
      ],
      projects: ["Multi-page React app", "E-commerce frontend"],
      goals: "Master advanced React patterns and performance optimization"
    },
    {
      month: "Month 6",
      title: "Backend Development - Node.js",
      topics: [
        { id: "web-6-1", name: "Node.js Fundamentals", hours: "12-15", difficulty: "Intermediate" },
        { id: "web-6-2", name: "Express.js Framework", hours: "15-18", difficulty: "Intermediate" },
        { id: "web-6-3", name: "RESTful API Design", hours: "12-15", difficulty: "Intermediate" },
        { id: "web-6-4", name: "Middleware & Authentication", hours: "15-20", difficulty: "Advanced" }
      ],
      projects: ["RESTful API server", "Authentication system"],
      goals: "Master backend development and API creation"
    },
    {
      month: "Month 7",
      title: "Database & Full Stack Integration",
      topics: [
        { id: "web-7-1", name: "MongoDB & Mongoose", hours: "12-15", difficulty: "Intermediate" },
        { id: "web-7-2", name: "SQL & PostgreSQL", hours: "15-18", difficulty: "Intermediate" },
        { id: "web-7-3", name: "Database Design & Relationships", hours: "10-12", difficulty: "Intermediate" },
        { id: "web-7-4", name: "Full Stack CRUD Operations", hours: "15-20", difficulty: "Advanced" }
      ],
      projects: ["Full stack blog platform", "Social media clone"],
      goals: "Master database integration and full stack development"
    },
    {
      month: "Month 8",
      title: "DevOps & Deployment",
      topics: [
        { id: "web-8-1", name: "Git & Version Control", hours: "8-10", difficulty: "Beginner" },
        { id: "web-8-2", name: "Docker Containerization", hours: "12-15", difficulty: "Advanced" },
        { id: "web-8-3", name: "Cloud Deployment (AWS/Heroku)", hours: "15-18", difficulty: "Advanced" },
        { id: "web-8-4", name: "CI/CD Pipelines", hours: "10-12", difficulty: "Advanced" }
      ],
      projects: ["Deploy full stack app", "Set up monitoring dashboard"],
      goals: "Master deployment and DevOps practices"
    }
  ];

  const getCurrentRoadmap = () => {
    return selectedRoadmap === "dsa" ? dsaRoadmap : webDevRoadmap;
  };

  const getCompletionPercentage = (roadmap: any[]) => {
    const totalItems = roadmap.reduce((acc, month) => acc + month.topics.length, 0);
    const completedCount = roadmap.reduce((acc, month) => {
      return acc + month.topics.filter(topic => completedItems.has(topic.id)).length;
    }, 0);
    return Math.round((completedCount / totalItems) * 100);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Calendar className="w-6 h-6 text-gray-600" />
              <h1 className="text-2xl font-serif text-black">Learning Roadmaps</h1>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                Back to Hub
                <ArrowLeft className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <p className="text-gray-600 text-sm mt-2">Structured learning paths for mastering DSA and Web Development</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Roadmap Selection */}
        <Tabs value={selectedRoadmap} onValueChange={setSelectedRoadmap} className="mb-8">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="dsa" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              DSA Roadmap
            </TabsTrigger>
            <TabsTrigger value="webdev" className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Web Dev Roadmap
            </TabsTrigger>
          </TabsList>

          {/* Progress Overview */}
          <div className="mt-6 mb-8">
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-gray-600" />
                    Progress Overview
                  </span>
                  <Badge variant="outline" className="text-sm">
                    {getCompletionPercentage(getCurrentRoadmap())}% Complete
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={getCompletionPercentage(getCurrentRoadmap())} className="w-full h-3" />
                <p className="text-sm text-gray-600 mt-2">
                  Track your progress through the {selectedRoadmap === "dsa" ? "DSA" : "Web Development"} learning path
                </p>
              </CardContent>
            </Card>
          </div>

          <TabsContent value="dsa">
            <div className="mb-6">
              <h2 className="text-xl font-serif text-black mb-3">Data Structures & Algorithms Roadmap</h2>
              <p className="text-gray-600 text-sm mb-4">
                An 8-month comprehensive journey to master DSA concepts, from basic arrays to advanced algorithms.
                Perfect for technical interviews and competitive programming.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="webdev">
            <div className="mb-6">
              <h2 className="text-xl font-serif text-black mb-3">Web Development Roadmap</h2>
              <p className="text-gray-600 text-sm mb-4">
                An 8-month full-stack web development journey from HTML/CSS basics to deploying production applications.
                Build real projects and master modern web technologies.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Monthly Roadmap */}
        <div className="space-y-6">
          {getCurrentRoadmap().map((month, index) => (
            <Card key={month.month} className="border border-gray-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-sm">
                        {index + 1}
                      </div>
                      {month.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm mt-2">{month.goals}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {month.month}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {/* Topics */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Learning Topics
                  </h4>
                  <div className="space-y-3">
                    {month.topics.map((topic) => (
                      <div key={topic.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => toggleCompletion(topic.id)}
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                              completedItems.has(topic.id) 
                                ? 'bg-green-500 border-green-500' 
                                : 'border-gray-300 hover:border-green-400'
                            }`}
                          >
                            {completedItems.has(topic.id) && <CheckCircle className="w-3 h-3 text-white" />}
                          </button>
                          <div>
                            <span className={`font-medium ${completedItems.has(topic.id) ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                              {topic.name}
                            </span>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge className={getDifficultyColor(topic.difficulty)}>
                                {topic.difficulty}
                              </Badge>
                              <span className="text-xs text-gray-500 flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {topic.hours} hours
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Practice Projects
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {month.projects.map((project, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                        <Lightbulb className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-700">{project}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Tips */}
        <Card className="border border-gray-200 mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-gray-600" />
              Success Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3 text-gray-900">Learning Strategy</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Dedicate 2-4 hours daily for consistent progress</li>
                  <li>• Practice coding problems daily</li>
                  <li>• Build projects to reinforce learning</li>
                  <li>• Join communities and study groups</li>
                  <li>• Track your progress and celebrate milestones</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-gray-900">Best Practices</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Focus on understanding, not memorization</li>
                  <li>• Review previous topics regularly</li>
                  <li>• Implement algorithms from scratch</li>
                  <li>• Participate in coding challenges</li>
                  <li>• Build a portfolio of projects</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Roadmaps;
