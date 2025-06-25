
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Trophy, Clock, Users, Star, ExternalLink } from "lucide-react";

const CodingChallenges = () => {
  const platforms = [
    {
      name: "LeetCode",
      description: "Most popular platform for coding interview preparation",
      challenges: "3000+",
      difficulty: ["Easy", "Medium", "Hard"],
      rating: 4.8,
      users: "10M+",
      specialties: ["Algorithms", "Data Structures", "Database", "System Design"],
      url: "https://leetcode.com"
    },
    {
      name: "HackerRank",
      description: "Comprehensive programming challenges and skill assessments",
      challenges: "2000+",
      difficulty: ["Easy", "Medium", "Hard"],
      rating: 4.6,
      users: "8M+",
      specialties: ["Algorithms", "Mathematics", "AI", "Databases"],
      url: "https://hackerrank.com"
    },
    {
      name: "CodeChef",
      description: "Competitive programming platform with monthly contests",
      challenges: "1500+",
      difficulty: ["Beginner", "Easy", "Medium", "Hard"],
      rating: 4.5,
      users: "3M+",
      specialties: ["Competitive Programming", "Long Challenges", "Cook-offs"],
      url: "https://codechef.com"
    },
    {
      name: "Codeforces",
      description: "Premier platform for competitive programming contests",
      challenges: "8000+",
      difficulty: ["Div 1", "Div 2", "Div 3", "Educational"],
      rating: 4.7,
      users: "2M+",
      specialties: ["Contests", "Problem Archive", "Ratings"],
      url: "https://codeforces.com"
    }
  ];

  const upcomingContests = [
    {
      name: "Weekly Contest 375",
      platform: "LeetCode",
      date: "Dec 24, 2024",
      time: "10:30 AM EST",
      duration: "1.5 hours",
      participants: "25K+"
    },
    {
      name: "Cook-Off December",
      platform: "CodeChef",
      date: "Dec 25, 2024",
      time: "9:30 PM IST",
      duration: "2.5 hours",
      participants: "15K+"
    },
    {
      name: "Codeforces Round #915",
      platform: "Codeforces",
      date: "Dec 26, 2024",
      time: "2:35 PM MSK",
      duration: "2 hours",
      participants: "30K+"
    }
  ];

  const challengeTypes = [
    {
      type: "Algorithm Challenges",
      description: "Solve complex algorithmic problems",
      icon: "🧠",
      examples: ["Two Sum", "Binary Search", "Dynamic Programming"]
    },
    {
      type: "System Design",
      description: "Design scalable distributed systems",
      icon: "🏗️",
      examples: ["Design Twitter", "Design URL Shortener", "Design Chat System"]
    },
    {
      type: "Database Problems",
      description: "SQL queries and database optimization",
      icon: "🗃️",
      examples: ["Complex Joins", "Query Optimization", "Schema Design"]
    },
    {
      type: "Mathematics",
      description: "Mathematical problem solving",
      icon: "🔢",
      examples: ["Number Theory", "Combinatorics", "Probability"]
    }
  ];

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
                  <Trophy className="w-8 h-8 inline mr-2 text-yellow-600" />
                  Coding Challenges
                </h1>
                <p className="text-gray-600 mt-1">Programming contests and practice problems</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Popular Platforms */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Platforms</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900">
                        {platform.name}
                      </CardTitle>
                      <p className="text-gray-600 mt-1">{platform.description}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-500" />
                      <span className="text-sm font-medium">{platform.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-600">Challenges</div>
                      <div className="font-semibold text-gray-900">{platform.challenges}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Users</div>
                      <div className="font-semibold text-gray-900">{platform.users}</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Specialties</div>
                    <div className="flex flex-wrap gap-2">
                      {platform.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full" asChild>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Contests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingContests.map((contest, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {contest.name}
                  </CardTitle>
                  <Badge variant="outline">{contest.platform}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-500" />
                      <span>{contest.date} at {contest.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Trophy className="w-4 h-4 mr-2 text-gray-500" />
                      <span>Duration: {contest.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-gray-500" />
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenge Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challengeTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    <span className="text-2xl mr-2">{type.icon}</span>
                    {type.type}
                  </CardTitle>
                  <p className="text-gray-600">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 mb-2">Popular Examples:</div>
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

        {/* Success Tips */}
        <Card>
          <CardHeader>
            <CardTitle>Coding Challenge Success Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Before the Contest</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Practice regularly on different platforms</li>
                  <li>• Learn common algorithms and patterns</li>
                  <li>• Set up your coding environment</li>
                  <li>• Review time complexity concepts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">During the Contest</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Read all problems first</li>
                  <li>• Start with easiest problems</li>
                  <li>• Test with edge cases</li>
                  <li>• Manage your time effectively</li>
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
