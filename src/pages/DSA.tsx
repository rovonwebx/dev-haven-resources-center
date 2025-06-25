
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Brain, Clock, BarChart, CheckCircle } from "lucide-react";

const DSA = () => {
  const topics = [
    {
      category: "Arrays & Strings",
      concepts: [
        { name: "Two Pointers", difficulty: "Easy", problems: 45 },
        { name: "Sliding Window", difficulty: "Medium", problems: 32 },
        { name: "Prefix Sum", difficulty: "Medium", problems: 28 },
        { name: "String Matching", difficulty: "Hard", problems: 15 }
      ]
    },
    {
      category: "Linked Lists",
      concepts: [
        { name: "Traversal & Manipulation", difficulty: "Easy", problems: 25 },
        { name: "Cycle Detection", difficulty: "Medium", problems: 12 },
        { name: "Merging & Sorting", difficulty: "Medium", problems: 18 },
        { name: "Advanced Operations", difficulty: "Hard", problems: 8 }
      ]
    },
    {
      category: "Trees & Graphs",
      concepts: [
        { name: "Binary Tree Traversal", difficulty: "Easy", problems: 35 },
        { name: "Binary Search Tree", difficulty: "Medium", problems: 28 },
        { name: "Graph Traversal (BFS/DFS)", difficulty: "Medium", problems: 42 },
        { name: "Advanced Graph Algorithms", difficulty: "Hard", problems: 25 }
      ]
    },
    {
      category: "Dynamic Programming",
      concepts: [
        { name: "1D DP", difficulty: "Medium", problems: 30 },
        { name: "2D DP", difficulty: "Medium", problems: 35 },
        { name: "String DP", difficulty: "Hard", problems: 20 },
        { name: "Tree DP", difficulty: "Hard", problems: 15 }
      ]
    }
  ];

  const studyPlan = [
    { week: "Week 1-2", focus: "Arrays, Strings, and Basic Patterns", hours: "2-3 hours/day" },
    { week: "Week 3-4", focus: "Linked Lists and Stacks/Queues", hours: "2-3 hours/day" },
    { week: "Week 5-6", focus: "Trees and Basic Graph Algorithms", hours: "3-4 hours/day" },
    { week: "Week 7-8", focus: "Advanced Data Structures", hours: "3-4 hours/day" },
    { week: "Week 9-10", focus: "Dynamic Programming", hours: "4-5 hours/day" },
    { week: "Week 11-12", focus: "Advanced Algorithms & System Design", hours: "4-5 hours/day" }
  ];

  const resources = [
    {
      name: "LeetCode",
      type: "Practice Platform",
      description: "Most popular coding interview preparation platform",
      link: "https://leetcode.com",
      rating: 4.8
    },
    {
      name: "HackerRank",
      type: "Practice Platform",
      description: "Comprehensive programming challenges and competitions",
      link: "https://hackerrank.com",
      rating: 4.6
    },
    {
      name: "GeeksforGeeks",
      type: "Learning Resource",
      description: "Detailed explanations and implementations",
      link: "https://geeksforgeeks.org",
      rating: 4.7
    },
    {
      name: "Algorithms by Sedgewick",
      type: "Book",
      description: "Comprehensive textbook on algorithms and data structures",
      link: "#",
      rating: 4.9
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
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
                <h1 className="text-3xl font-bold text-gray-900">
                  <Brain className="w-8 h-8 inline mr-2 text-purple-600" />
                  Data Structures & Algorithms
                </h1>
                <p className="text-gray-600 mt-1">Master the fundamentals of computer science</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* DSA Topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Topics</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {topic.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topic.concepts.map((concept, conceptIndex) => (
                      <div key={conceptIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{concept.name}</div>
                          <div className="text-sm text-gray-600">{concept.problems} problems</div>
                        </div>
                        <Badge className={getDifficultyColor(concept.difficulty)}>
                          {concept.difficulty}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Study Plan */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">12-Week Study Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {studyPlan.map((plan, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="font-semibold text-gray-900">{plan.week}</span>
                  </div>
                  <p className="text-gray-700 mb-2">{plan.focus}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {plan.hours}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {resource.name}
                      </CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {resource.type}
                      </Badge>
                    </div>
                    <div className="flex items-center">
                      <BarChart className="w-4 h-4 mr-1 text-yellow-500" />
                      <span className="text-sm font-medium">{resource.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{resource.description}</p>
                  <Button className="w-full" variant="outline" asChild>
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      Visit Resource
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <Card>
          <CardHeader>
            <CardTitle>DSA Success Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Study Strategy</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Focus on understanding, not memorizing</li>
                  <li>• Practice regularly and consistently</li>
                  <li>• Start with easy problems, progress gradually</li>
                  <li>• Implement algorithms from scratch</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Problem Solving</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Break down complex problems</li>
                  <li>• Think about time and space complexity</li>
                  <li>• Practice explaining your solutions</li>
                  <li>• Learn from different approaches</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DSA;
