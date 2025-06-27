
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Trophy, Clock, Users, Star, ExternalLink, Calendar, Award, Code, Zap } from "lucide-react";

const CodingChallenges = () => {
  const platforms = [
    {
      name: "LeetCode",
      description: "The most comprehensive coding interview preparation platform",
      challenges: "3200+",
      difficulty: ["Easy", "Medium", "Hard"],
      rating: 4.9,
      users: "15M+",
      specialties: ["Algorithms", "Data Structures", "System Design", "SQL"],
      url: "https://leetcode.com",
      gradient: "from-orange-400 to-red-500",
      newFeatures: ["Daily Challenge Streaks", "Interview Simulator", "Contest Ratings"]
    },
    {
      name: "HackerRank",
      description: "Skill-based programming challenges with certification programs",
      challenges: "2500+",
      difficulty: ["Easy", "Medium", "Hard", "Expert"],
      rating: 4.7,
      users: "12M+",
      specialties: ["Problem Solving", "AI/ML", "Databases", "Mathematics"],
      url: "https://hackerrank.com",
      gradient: "from-green-400 to-blue-500",
      newFeatures: ["AI Code Review", "Skill Certifications", "Company Challenges"]
    },
    {
      name: "CodeChef",
      description: "Competitive programming with global contests and rankings",
      challenges: "1800+",
      difficulty: ["Beginner", "Easy", "Medium", "Hard", "Challenge"],
      rating: 4.6,
      users: "4M+",
      specialties: ["Competitive Programming", "Long Challenges", "Cook-offs"],
      url: "https://codechef.com",
      gradient: "from-purple-400 to-pink-500",
      newFeatures: ["Practice Battles", "Mentor Program", "CodeChef Learn"]
    },
    {
      name: "Codeforces",
      description: "Premier competitive programming platform with rating system",
      challenges: "9000+",
      difficulty: ["Div 4", "Div 3", "Div 2", "Div 1"],
      rating: 4.8,
      users: "3M+",
      specialties: ["Contest Problems", "Problem Archive", "Educational Rounds"],
      url: "https://codeforces.com",
      gradient: "from-blue-400 to-indigo-500",
      newFeatures: ["Virtual Participation", "Polygon System", "Educational Content"]
    },
    {
      name: "AtCoder",
      description: "Japanese competitive programming platform with beginner-friendly contests",
      challenges: "4000+",
      difficulty: ["ABC", "ARC", "AGC", "AHC"],
      rating: 4.7,
      users: "800K+",
      specialties: ["Beginner Contests", "Algorithm Contests", "Heuristic Contests"],
      url: "https://atcoder.jp",
      gradient: "from-teal-400 to-cyan-500",
      newFeatures: ["AtCoder Library", "Practice Contests", "Problem Editorials"]
    },
    {
      name: "Topcoder",
      description: "Historic platform for competitive programming and algorithm challenges",
      challenges: "5000+",
      difficulty: ["Div 1", "Div 2", "Marathon"],
      rating: 4.5,
      users: "1.5M+",
      specialties: ["SRM Contests", "Marathon Matches", "Algorithm Tutorials"],
      url: "https://topcoder.com",
      gradient: "from-yellow-400 to-orange-500",
      newFeatures: ["Topcoder Open", "First2Finish", "Practice Rooms"]
    }
  ];

  const upcomingContests = [
    {
      name: "LeetCode Weekly Contest 415",
      platform: "LeetCode",
      date: "Aug 25, 2025",
      time: "10:30 AM EST",
      duration: "1.5 hours",
      participants: "35K+",
      prize: "$1000",
      gradient: "from-orange-400 to-red-500"
    },
    {
      name: "CodeChef Starters 145",
      platform: "CodeChef",
      date: "Aug 28, 2025",
      time: "8:00 PM IST",
      duration: "3 hours",
      participants: "20K+",
      prize: "₹25,000",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      name: "Codeforces Round #970",
      platform: "Codeforces",
      date: "Aug 30, 2025",
      time: "5:35 PM MSK",
      duration: "2 hours",
      participants: "40K+",
      prize: "T-shirts",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      name: "AtCoder Beginner Contest 320",
      platform: "AtCoder",
      date: "Sep 1, 2025",
      time: "9:00 PM JST",
      duration: "100 minutes",
      participants: "15K+",
      prize: "Certificates",
      gradient: "from-teal-400 to-cyan-500"
    }
  ];

  const challengeTypes = [
    {
      type: "Dynamic Programming",
      description: "Master complex optimization problems",
      icon: "🧠",
      examples: ["Knapsack Problem", "Longest Common Subsequence", "Edit Distance"],
      difficulty: "Hard",
      color: "from-purple-500 to-indigo-600"
    },
    {
      type: "Graph Algorithms",
      description: "Navigate complex network problems",
      icon: "🌐",
      examples: ["Dijkstra's Algorithm", "Minimum Spanning Tree", "Topological Sort"],
      difficulty: "Medium",
      color: "from-blue-500 to-cyan-600"
    },
    {
      type: "System Design",
      description: "Design scalable distributed systems",
      icon: "🏗️",
      examples: ["Design Twitter", "Design URL Shortener", "Design Chat System"],
      difficulty: "Expert",
      color: "from-green-500 to-teal-600"
    },
    {
      type: "String Algorithms",
      description: "Process and manipulate text efficiently",
      icon: "🔤",
      examples: ["KMP Algorithm", "Rabin-Karp", "Suffix Arrays"],
      difficulty: "Medium",
      color: "from-orange-500 to-red-600"
    },
    {
      type: "Tree & Binary Search",
      description: "Hierarchical data structure problems",
      icon: "🌳",
      examples: ["Binary Tree Traversal", "AVL Trees", "Segment Trees"],
      difficulty: "Medium",
      color: "from-emerald-500 to-green-600"
    },
    {
      type: "Mathematical Problems",
      description: "Number theory and combinatorics",
      icon: "🔢",
      examples: ["Prime Numbers", "Modular Arithmetic", "Combinatorial Game Theory"],
      difficulty: "Hard",
      color: "from-pink-500 to-rose-600"
    }
  ];

  const recentWinners = [
    { name: "tourist", platform: "Codeforces", contest: "Round #969", rank: 1, rating: 3859 },
    { name: "jiangly", platform: "AtCoder", contest: "AGC 062", rank: 1, rating: 3540 },
    { name: "Benq", platform: "CodeChef", contest: "July Long", rank: 2, rating: 2847 },
    { name: "neal", platform: "LeetCode", contest: "Weekly 414", rank: 1, rating: 3421 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild className="text-white hover:bg-white/10">
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Hub
                </Link>
              </Button>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  <Trophy className="w-8 h-8 inline mr-2 text-yellow-400" />
                  Coding Challenges 2025
                </h1>
                <p className="text-gray-300 mt-1">Master algorithms • Compete globally • Level up your skills</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Banner */}
      <div className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border-y border-yellow-400/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="text-white">
              <div className="text-2xl font-bold text-yellow-400">50M+</div>
              <div className="text-sm text-gray-300">Active Coders</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold text-orange-400">28K+</div>
              <div className="text-sm text-gray-300">Daily Challenges</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold text-red-400">180+</div>
              <div className="text-sm text-gray-300">Countries</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold text-purple-400">$2M+</div>
              <div className="text-sm text-gray-300">Prize Money 2025</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Popular Platforms */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            🚀 Top Coding Platforms
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className={`group hover:scale-105 transition-all duration-500 bg-gradient-to-br ${platform.gradient} border-0 text-white overflow-hidden relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-white mb-2">
                        {platform.name}
                      </CardTitle>
                      <p className="text-white/90 text-sm leading-relaxed">{platform.description}</p>
                    </div>
                    <div className="flex items-center bg-black/30 rounded-full px-3 py-1">
                      <Star className="w-4 h-4 mr-1 text-yellow-300" />
                      <span className="text-sm font-bold">{platform.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-black/30 rounded-lg p-3 text-center">
                      <div className="text-xs text-white/70">Challenges</div>
                      <div className="font-bold text-lg">{platform.challenges}</div>
                    </div>
                    <div className="bg-black/30 rounded-lg p-3 text-center">
                      <div className="text-xs text-white/70">Users</div>
                      <div className="font-bold text-lg">{platform.users}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-xs text-white/70 mb-2">New in 2025</div>
                    <div className="flex flex-wrap gap-1">
                      {platform.newFeatures.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-black/30 hover:bg-black/50 border border-white/30 text-white" asChild>
                    <a href={platform.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Start Coding
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Contests */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            🏆 Upcoming Contests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {upcomingContests.map((contest, index) => (
              <Card key={index} className={`group hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${contest.gradient} border-0 text-white overflow-hidden relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <CardHeader className="relative z-10">
                  <Badge variant="outline" className="self-start bg-white/20 text-white border-white/50 mb-3">
                    {contest.platform}
                  </Badge>
                  <CardTitle className="text-lg font-bold text-white leading-tight">
                    {contest.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center bg-black/20 rounded-lg p-2">
                      <Calendar className="w-4 h-4 mr-2 text-white/80" />
                      <span>{contest.date}</span>
                    </div>
                    <div className="flex items-center bg-black/20 rounded-lg p-2">
                      <Clock className="w-4 h-4 mr-2 text-white/80" />
                      <span>{contest.time} • {contest.duration}</span>
                    </div>
                    <div className="flex items-center bg-black/20 rounded-lg p-2">
                      <Users className="w-4 h-4 mr-2 text-white/80" />
                      <span>{contest.participants} expected</span>
                    </div>
                    <div className="flex items-center bg-black/20 rounded-lg p-2">
                      <Award className="w-4 h-4 mr-2 text-yellow-300" />
                      <span className="font-semibold">{contest.prize}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Challenge Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            💡 Master These Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {challengeTypes.map((type, index) => (
              <Card key={index} className={`group hover:scale-105 transition-all duration-300 bg-gradient-to-br ${type.color} border-0 text-white overflow-hidden relative`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{type.icon}</span>
                    <Badge variant="outline" className="bg-white/20 text-white border-white/50">
                      {type.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-2">
                    {type.type}
                  </CardTitle>
                  <p className="text-white/90 text-sm">{type.description}</p>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="text-xs text-white/70 mb-2">Key Problems:</div>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs bg-black/20 text-white border-white/30">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Winners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            🌟 Recent Champions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {recentWinners.map((winner, index) => (
              <Card key={index} className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 text-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl mb-2">👑</div>
                  <div className="text-lg font-bold text-yellow-400 mb-1">{winner.name}</div>
                  <div className="text-sm text-white/80 mb-2">{winner.platform}</div>
                  <div className="text-xs text-white/70 mb-2">{winner.contest}</div>
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold">
                    Rank #{winner.rank} • {winner.rating}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Tips */}
        <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-400/30 text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              🚀 Pro Tips for Success
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Code className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h4 className="font-bold mb-3 text-blue-300">Before Competing</h4>
                <ul className="text-sm text-gray-300 space-y-2 text-left">
                  <li>• Master fundamental data structures</li>
                  <li>• Practice 2-3 problems daily</li>
                  <li>• Learn common algorithm patterns</li>
                  <li>• Set up fast coding environment</li>
                  <li>• Study time complexity analysis</li>
                </ul>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                <h4 className="font-bold mb-3 text-yellow-300">During Contest</h4>
                <ul className="text-sm text-gray-300 space-y-2 text-left">
                  <li>• Read all problems first</li>
                  <li>• Start with easiest problem</li>
                  <li>• Code clean, readable solutions</li>
                  <li>• Test with sample cases</li>
                  <li>• Don't get stuck on one problem</li>
                </ul>
              </div>
              <div className="text-center">
                <Trophy className="w-12 h-12 mx-auto mb-4 text-green-400" />
                <h4 className="font-bold mb-3 text-green-300">After Contest</h4>
                <ul className="text-sm text-gray-300 space-y-2 text-left">
                  <li>• Review editorial solutions</li>
                  <li>• Understand why you failed</li>
                  <li>• Practice similar problems</li>
                  <li>• Join discussion forums</li>
                  <li>• Track your progress</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CodingChallenges;
