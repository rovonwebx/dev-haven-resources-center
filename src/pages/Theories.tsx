
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, GraduationCap, BookOpen, Clock } from "lucide-react";

const Theories = () => {
  const theoryTopics = [
    {
      category: "Computer Science Theory",
      topics: [
        { title: "Computational Complexity Theory", description: "P vs NP, complexity classes, and algorithmic efficiency", difficulty: "Advanced", readTime: "45 min" },
        { title: "Automata Theory", description: "Finite state machines, regular expressions, and formal languages", difficulty: "Intermediate", readTime: "35 min" },
        { title: "Graph Theory", description: "Graph algorithms, connectivity, and network analysis", difficulty: "Intermediate", readTime: "40 min" }
      ]
    },
    {
      category: "Software Engineering Principles",
      topics: [
        { title: "SOLID Principles", description: "Five design principles for maintainable software", difficulty: "Beginner", readTime: "25 min" },
        { title: "Design Patterns", description: "Common solutions to recurring design problems", difficulty: "Intermediate", readTime: "50 min" },
        { title: "Software Architecture Patterns", description: "MVC, MVP, MVVM, and architectural styles", difficulty: "Advanced", readTime: "60 min" }
      ]
    },
    {
      category: "Database Theory",
      topics: [
        { title: "Relational Database Theory", description: "Normalization, ACID properties, and relational algebra", difficulty: "Intermediate", readTime: "40 min" },
        { title: "CAP Theorem", description: "Consistency, availability, and partition tolerance trade-offs", difficulty: "Advanced", readTime: "30 min" },
        { title: "Concurrency Control", description: "Locking mechanisms, deadlocks, and isolation levels", difficulty: "Advanced", readTime: "45 min" }
      ]
    },
    {
      category: "Distributed Systems",
      topics: [
        { title: "Consensus Algorithms", description: "Paxos, Raft, and Byzantine fault tolerance", difficulty: "Advanced", readTime: "55 min" },
        { title: "Distributed Computing Models", description: "Message passing, shared memory, and actor model", difficulty: "Advanced", readTime: "50 min" },
        { title: "Consistency Models", description: "Strong, eventual, and causal consistency", difficulty: "Advanced", readTime: "40 min" }
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

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Hub
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                <GraduationCap className="w-8 h-8 inline mr-2 text-indigo-600" />
                Engineering Theories
              </h1>
              <p className="text-gray-600 mt-1">Fundamental concepts and theoretical knowledge</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {theoryTopics.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.category}</h2>
            <div className="space-y-4">
              {category.topics.map((topic, topicIndex) => (
                <Card key={topicIndex} className="hover:shadow-md transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h3>
                        <p className="text-gray-600 mb-3">{topic.description}</p>
                        <div className="flex items-center space-x-4">
                          <Badge className={getDifficultyColor(topic.difficulty)}>
                            {topic.difficulty}
                          </Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {topic.readTime}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Study Theory
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Study Approach for Theoretical Concepts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Understanding Theory</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Start with basic definitions and concepts</li>
                  <li>• Use visual aids and diagrams</li>
                  <li>• Connect theory to practical applications</li>
                  <li>• Work through examples step by step</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Applying Knowledge</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Implement theoretical concepts in code</li>
                  <li>• Discuss concepts with peers</li>
                  <li>• Solve related problems and exercises</li>
                  <li>• Teach concepts to reinforce learning</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Theories;
