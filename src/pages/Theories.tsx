
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock } from "lucide-react";

const Theories = () => {
  const theoryTopics = [
    {
      category: "Computer Science Theory",
      topics: [
        { title: "Computational Complexity Theory", description: "Study of P vs NP problems, complexity classes, and algorithmic efficiency analysis", difficulty: "Advanced", readTime: "45 min" },
        { title: "Automata Theory", description: "Finite state machines, regular expressions, context-free grammars, and formal languages", difficulty: "Intermediate", readTime: "35 min" },
        { title: "Graph Theory", description: "Mathematical study of graphs, algorithms for connectivity, shortest paths, and network analysis", difficulty: "Intermediate", readTime: "40 min" }
      ]
    },
    {
      category: "Software Engineering Principles",
      topics: [
        { title: "SOLID Principles", description: "Five fundamental design principles for writing maintainable and scalable object-oriented software", difficulty: "Beginner", readTime: "25 min" },
        { title: "Design Patterns", description: "Reusable solutions to commonly occurring problems in software design and architecture", difficulty: "Intermediate", readTime: "50 min" },
        { title: "Software Architecture Patterns", description: "High-level structural patterns including MVC, MVP, MVVM, and microservices architecture", difficulty: "Advanced", readTime: "60 min" }
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
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4 mb-2">
            <Button variant="ghost" size="sm" asChild className="text-blue-600 hover:bg-blue-50">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Main Page
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl font-serif text-black">Engineering Theories</h1>
          <p className="text-gray-600 text-sm mt-1">Fundamental concepts and theoretical foundations</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed">
            This section covers essential <strong>theoretical foundations</strong> in computer science and software engineering. 
            Understanding these theories provides the conceptual framework necessary for advanced problem-solving 
            and system design in engineering practice.
          </p>
        </div>

        {theoryTopics.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-8">
            <h2 className="text-xl font-serif text-black mb-4 border-b border-gray-200 pb-2">
              {category.category}
            </h2>
            
            <div className="space-y-4">
              {category.topics.map((topic, topicIndex) => (
                <Card key={topicIndex} className="border border-gray-200 hover:shadow-sm transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-medium text-black mb-2">{topic.title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">{topic.description}</p>
                        <div className="flex items-center space-x-4 text-xs">
                          <span className={`px-2 py-1 rounded ${getDifficultyColor(topic.difficulty)}`}>
                            {topic.difficulty}
                          </span>
                          <div className="flex items-center text-gray-600">
                            <Clock className="w-3 h-3 mr-1" />
                            {topic.readTime}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="text-xs ml-4">
                        <BookOpen className="w-3 h-3 mr-1" />
                        Study Theory
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}

        <Card className="mt-8 border border-gray-200">
          <CardContent className="p-4">
            <h3 className="font-semibold text-black mb-3">Study Methodology</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2 text-black">Understanding Theory</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Begin with fundamental definitions and concepts</li>
                  <li>• Utilize visual aids and mathematical proofs</li>
                  <li>• Connect theoretical concepts to practical applications</li>
                  <li>• Work through examples systematically</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-black">Practical Application</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Implement theoretical concepts in programming</li>
                  <li>• Engage in peer discussions and study groups</li>
                  <li>• Solve related problems and case studies</li>
                  <li>• Teach concepts to reinforce understanding</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-xs">
            Theoretical content is curated from academic sources and industry best practices. 
            For additional learning resources, visit the main <Link to="/" className="text-blue-600 hover:underline">Engineering Resources Hub</Link>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Theories;
