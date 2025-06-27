
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Brain, Clock, CheckCircle, ExternalLink, Star, Code, Target } from "lucide-react";

const DSA = () => {
  const topQuestions = {
    "Easy": [
      {
        title: "Two Sum",
        platform: "LeetCode",
        difficulty: "Easy",
        category: "Array",
        acceptance: "49.5%",
        url: "https://leetcode.com/problems/two-sum/",
        description: "Find two numbers that add up to a target sum"
      },
      {
        title: "Valid Parentheses",
        platform: "LeetCode",
        difficulty: "Easy",
        category: "Stack",
        acceptance: "40.8%",
        url: "https://leetcode.com/problems/valid-parentheses/",
        description: "Check if parentheses are properly matched"
      },
      {
        title: "Merge Two Sorted Lists",
        platform: "LeetCode",
        difficulty: "Easy",
        category: "Linked List",
        acceptance: "61.9%",
        url: "https://leetcode.com/problems/merge-two-sorted-lists/",
        description: "Merge two sorted linked lists into one"
      },
      {
        title: "Binary Tree Inorder Traversal",
        platform: "LeetCode",
        difficulty: "Easy",
        category: "Tree",
        acceptance: "74.6%",
        url: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        description: "Traverse binary tree in inorder"
      },
      {
        title: "Maximum Subarray",
        platform: "LeetCode",
        difficulty: "Easy",
        category: "Dynamic Programming",
        acceptance: "49.9%",
        url: "https://leetcode.com/problems/maximum-subarray/",
        description: "Find contiguous subarray with largest sum"
      }
    ],
    "Medium": [
      {
        title: "3Sum",
        platform: "LeetCode",
        difficulty: "Medium",
        category: "Array",
        acceptance: "32.9%",
        url: "https://leetcode.com/problems/3sum/",
        description: "Find all unique triplets that sum to zero"
      },
      {
        title: "Longest Substring Without Repeating Characters",
        platform: "LeetCode",
        difficulty: "Medium",
        category: "String",
        acceptance: "33.8%",
        url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
        description: "Find length of longest substring without repeating characters"
      },
      {
        title: "Add Two Numbers",
        platform: "LeetCode",
        difficulty: "Medium",
        category: "Linked List",
        acceptance: "38.1%",
        url: "https://leetcode.com/problems/add-two-numbers/",
        description: "Add two numbers represented as linked lists"
      },
      {
        title: "Binary Tree Level Order Traversal",
        platform: "LeetCode",
        difficulty: "Medium",
        category: "Tree",
        acceptance: "64.2%",
        url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        description: "Traverse binary tree level by level"
      },
      {
        title: "Coin Change",
        platform: "LeetCode",
        difficulty: "Medium",
        category: "Dynamic Programming",
        acceptance: "41.3%",
        url: "https://leetcode.com/problems/coin-change/",
        description: "Find minimum coins needed for amount"
      },
      {
        title: "Number of Islands",
        platform: "LeetCode",
        difficulty: "Medium",
        category: "Graph",
        acceptance: "56.8%",
        url: "https://leetcode.com/problems/number-of-islands/",
        description: "Count number of islands in 2D grid"
      }
    ],
    "Hard": [
      {
        title: "Median of Two Sorted Arrays",
        platform: "LeetCode",
        difficulty: "Hard",
        category: "Array",
        acceptance: "37.5%",
        url: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
        description: "Find median of two sorted arrays in O(log(m+n))"
      },
      {
        title: "Trapping Rain Water",
        platform: "LeetCode",
        difficulty: "Hard",
        category: "Array",
        acceptance: "58.7%",
        url: "https://leetcode.com/problems/trapping-rain-water/",
        description: "Calculate trapped rainwater between bars"
      },
      {
        title: "Merge k Sorted Lists",
        platform: "LeetCode",
        difficulty: "Hard",
        category: "Linked List",
        acceptance: "48.9%",
        url: "https://leetcode.com/problems/merge-k-sorted-lists/",
        description: "Merge k sorted linked lists"
      },
      {
        title: "Binary Tree Maximum Path Sum",
        platform: "LeetCode",
        difficulty: "Hard",
        category: "Tree",
        acceptance: "38.2%",
        url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
        description: "Find maximum path sum in binary tree"
      },
      {
        title: "Edit Distance",
        platform: "LeetCode",
        difficulty: "Hard",
        category: "Dynamic Programming",
        acceptance: "54.1%",
        url: "https://leetcode.com/problems/edit-distance/",
        description: "Minimum operations to convert one string to another"
      }
    ]
  };

  const studyPlan = [
    { week: "Week 1-2", focus: "Arrays, Strings, and Basic Patterns", hours: "2-3 hours/day" },
    { week: "Week 3-4", focus: "Linked Lists and Stacks/Queues", hours: "2-3 hours/day" },
    { week: "Week 5-6", focus: "Trees and Basic Graph Algorithms", hours: "3-4 hours/day" },
    { week: "Week 7-8", focus: "Advanced Data Structures", hours: "3-4 hours/day" },
    { week: "Week 9-10", focus: "Dynamic Programming", hours: "4-5 hours/day" },
    { week: "Week 11-12", focus: "Advanced Algorithms & System Design", hours: "4-5 hours/day" }
  ];

  const platforms = [
    {
      name: "LeetCode",
      description: "Most popular coding interview preparation platform",
      problems: "3000+",
      url: "https://leetcode.com",
      rating: 4.8
    },
    {
      name: "HackerRank",
      description: "Comprehensive programming challenges and tutorials",
      problems: "2500+",
      url: "https://hackerrank.com",
      rating: 4.6
    },
    {
      name: "GeeksforGeeks",
      description: "Detailed explanations and implementations",
      problems: "5000+",
      url: "https://geeksforgeeks.org",
      rating: 4.7
    },
    {
      name: "CodeChef",
      description: "Competitive programming practice problems",
      problems: "4000+",
      url: "https://codechef.com",
      rating: 4.5
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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Brain className="w-6 h-6 text-gray-600" />
              <h1 className="text-2xl font-serif text-black">Data Structures & Algorithms</h1>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                Back to Hub
                <ArrowLeft className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <p className="text-gray-600 text-sm mt-2">Master the fundamentals of computer science</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Top Questions by Difficulty */}
        <div className="mb-12">
          <h2 className="text-xl font-serif text-black mb-6 pb-2 border-b border-gray-300">Top Practice Questions</h2>
          
          {Object.entries(topQuestions).map(([difficulty, questions]) => (
            <div key={difficulty} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2 text-gray-600" />
                {difficulty} Level
              </h3>
              <div className="grid gap-4">
                {questions.map((question, index) => (
                  <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-medium text-gray-900 hover:text-blue-600">
                              <a href={question.url} target="_blank" rel="noopener noreferrer">
                                {question.title}
                              </a>
                            </h4>
                            <Badge className={getDifficultyColor(question.difficulty)}>
                              {question.difficulty}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {question.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{question.description}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>Platform: {question.platform}</span>
                            <span>Acceptance: {question.acceptance}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" asChild>
                          <a href={question.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Solve
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Study Plan */}
        <div className="mb-12">
          <h2 className="text-xl font-serif text-black mb-6 pb-2 border-b border-gray-300">12-Week Study Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {studyPlan.map((plan, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="font-medium text-gray-900">{plan.week}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">{plan.focus}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {plan.hours}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Practice Platforms */}
        <div className="mb-12">
          <h2 className="text-xl font-serif text-black mb-6 pb-2 border-b border-gray-300">Practice Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-gray-900">{platform.name}</CardTitle>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      <span className="text-sm font-medium">{platform.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">{platform.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 text-sm text-gray-600">
                    Problems: <strong>{platform.problems}</strong>
                  </div>
                  <Button className="w-full" variant="outline" asChild>
                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                      <Code className="w-4 h-4 mr-2" />
                      Start Practicing
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <Card className="border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900">DSA Success Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3 text-gray-900">Study Strategy</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Focus on understanding, not memorizing</li>
                  <li>• Practice regularly and consistently</li>
                  <li>• Start with easy problems, progress gradually</li>
                  <li>• Implement algorithms from scratch</li>
                  <li>• Review and optimize your solutions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-gray-900">Problem Solving</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Break down complex problems</li>
                  <li>• Think about time and space complexity</li>
                  <li>• Practice explaining your solutions</li>
                  <li>• Learn from different approaches</li>
                  <li>• Join study groups and discussions</li>
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
