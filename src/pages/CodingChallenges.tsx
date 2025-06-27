
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Trophy, Clock, Users, Star, ExternalLink, Calendar } from "lucide-react";

const CodingChallenges = () => {
  const platforms = [
    {
      name: "LeetCode",
      description: "The most comprehensive coding interview preparation platform",
      challenges: "3200+",
      users: "15M+",
      rating: 4.9,
      url: "https://leetcode.com",
    },
    {
      name: "HackerRank",
      description: "Skill-based programming challenges with certification programs",
      challenges: "2500+",
      users: "12M+",
      rating: 4.7,
      url: "https://hackerrank.com",
    },
    {
      name: "CodeChef",
      description: "Competitive programming with global contests and rankings",
      challenges: "1800+",
      users: "4M+",
      rating: 4.6,
      url: "https://codechef.com",
    },
    {
      name: "Codeforces",
      description: "Premier competitive programming platform with rating system",
      challenges: "9000+",
      users: "3M+",
      rating: 4.8,
      url: "https://codeforces.com",
    }
  ];

  const upcomingContests = [
    {
      name: "LeetCode Weekly Contest 415",
      platform: "LeetCode",
      date: "Aug 25, 2025",
      time: "10:30 AM EST",
      duration: "1.5 hours",
      participants: "35K+"
    },
    {
      name: "CodeChef Starters 145",
      platform: "CodeChef",
      date: "Aug 28, 2025",
      time: "8:00 PM IST",
      duration: "3 hours",
      participants: "20K+"
    },
    {
      name: "Codeforces Round #970",
      platform: "Codeforces",
      date: "Aug 30, 2025",
      time: "5:35 PM MSK",
      duration: "2 hours",
      participants: "40K+"
    }
  ];

  const challengeTypes = [
    {
      type: "Dynamic Programming",
      description: "Master complex optimization problems",
      difficulty: "Hard",
      examples: ["Knapsack Problem", "Longest Common Subsequence", "Edit Distance"]
    },
    {
      type: "Graph Algorithms",
      description: "Navigate complex network problems",
      difficulty: "Medium",
      examples: ["Dijkstra's Algorithm", "Minimum Spanning Tree", "Topological Sort"]
    },
    {
      type: "String Algorithms",
      description: "Process and manipulate text efficiently",
      difficulty: "Medium",
      examples: ["KMP Algorithm", "Rabin-Karp", "Suffix Arrays"]
    },
    {
      type: "Tree & Binary Search",
      description: "Hierarchical data structure problems",
      difficulty: "Medium",
      examples: ["Binary Tree Traversal", "AVL Trees", "Segment Trees"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Trophy className="w-6 h-6 text-gray-600" />
              <h1 className="text-2xl font-serif text-black">Coding Challenges</h1>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                Back to Hub
                <ArrowLeft className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <p className="text-gray-600 text-sm mt-2">Master algorithms and compete globally</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Popular Platforms */}
        <div className="mb-12">
          <h2 className="text-xl font-serif text-black mb-6 pb-2 border-b border-gray-300">Top Coding Platforms</h2>
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
                  <div className="flex justify-between mb-4 text-sm">
                    <span className="text-gray-600">Challenges: <strong>{platform.challenges}</strong></span>
                    <span className="text-gray-600">Users: <strong>{platform.users}</strong></span>
                  </div>
                  <Button className="w-full" variant="outline" asChild>
                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Platform
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Contests */}
        <div className="mb-12">
          <h2 className="text-xl font-serif text-black mb-6 pb-2 border-b border-gray-300">Upcoming Contests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingContests.map((contest, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="self-start mb-2">
                    {contest.platform}
                  </Badge>
                  <CardTitle className="text-base text-gray-900">{contest.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{contest.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{contest.time} • {contest.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{contest.participants} expected</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Challenge Types */}
        <div className="mb-12">
          <h2 className="text-xl font-serif text-black mb-6 pb-2 border-b border-gray-300">Master These Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challengeTypes.map((type, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base text-gray-900">{type.type}</CardTitle>
                    <Badge variant="outline">{type.difficulty}</Badge>
                  </div>
                  <p className="text-gray-700 text-sm">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-gray-600 mb-2">Key Problems:</div>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CodingChallenges;
