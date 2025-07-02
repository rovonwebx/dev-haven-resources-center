
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, Brain, Cpu, Database, Globe, Shield, Zap, Lightbulb } from "lucide-react";

const Theories = () => {
  const theoryCategories = [
    {
      category: "First Year - Mathematical & Scientific Foundations",
      icon: Brain,
      color: "bg-green-50 border-green-200",
      theories: [
        { id: "set-theory", title: "Set Theory and Mathematical Logic", description: "Fundamental concepts of sets, relations, functions, and logical reasoning", difficulty: "Beginner", readTime: "45 min", applications: "Database design, Programming logic", year: "1st Year" },
        { id: "number-theory", title: "Number Theory Fundamentals", description: "Prime numbers, modular arithmetic, and cryptographic applications", difficulty: "Intermediate", readTime: "50 min", applications: "Cryptography, Computer Security", year: "1st Year" },
        { id: "linear-algebra", title: "Linear Algebra Theory", description: "Vector spaces, matrices, eigenvalues, and linear transformations", difficulty: "Intermediate", readTime: "60 min", applications: "Computer Graphics, Machine Learning", year: "1st Year" },
        { id: "calculus-engineering", title: "Calculus in Engineering", description: "Differential and integral calculus applications in engineering problems", difficulty: "Intermediate", readTime: "55 min", applications: "Signal Processing, Control Systems", year: "1st Year" },
        { id: "physics-computation", title: "Physics of Computation", description: "Physical principles underlying computational processes and electronic devices", difficulty: "Beginner", readTime: "40 min", applications: "Hardware Design, Quantum Computing", year: "1st Year" },
        { id: "chemistry-materials", title: "Chemistry in Materials Science", description: "Chemical bonding, properties of materials used in computing systems", difficulty: "Beginner", readTime: "35 min", applications: "Semiconductor Design, Battery Technology", year: "1st Year" },
        { id: "boolean-algebra", title: "Boolean Algebra Theory", description: "Fundamental operations, laws, and simplification techniques", difficulty: "Beginner", readTime: "40 min", applications: "Digital Circuit Design, Logic Gates", year: "1st Year" }
      ]
    },
    {
      category: "Second Year - Computer Science Fundamentals",
      icon: Cpu,
      color: "bg-blue-50 border-blue-200",
      theories: [
        { id: "computational-complexity", title: "Computational Complexity Theory", description: "Study of P vs NP problems, complexity classes, and algorithmic efficiency analysis", difficulty: "Advanced", readTime: "75 min", applications: "Algorithm Design, Optimization", year: "2nd Year" },
        { id: "automata-theory", title: "Automata Theory", description: "Finite state machines, regular expressions, context-free grammars, and formal languages", difficulty: "Intermediate", readTime: "65 min", applications: "Compiler Design, Pattern Matching", year: "2nd Year" },
        { id: "graph-theory", title: "Graph Theory Applications", description: "Mathematical study of graphs, algorithms for connectivity, shortest paths, and network analysis", difficulty: "Intermediate", readTime: "70 min", applications: "Social Networks, Route Planning", year: "2nd Year" },
        { id: "information-theory", title: "Information Theory", description: "Entropy, data compression, error correction, and information transmission principles", difficulty: "Advanced", readTime: "60 min", applications: "Data Compression, Communication Systems", year: "2nd Year" },
        { id: "probability-computing", title: "Probability Theory in Computing", description: "Random variables, probability distributions, and stochastic processes", difficulty: "Intermediate", readTime: "55 min", applications: "Machine Learning, Statistical Analysis", year: "2nd Year" },
        { id: "digital-logic", title: "Digital Logic Design Theory", description: "Combinational and sequential circuit design principles", difficulty: "Intermediate", readTime: "50 min", applications: "Processor Design, Digital Systems", year: "2nd Year" },
        { id: "data-structure-theory", title: "Data Structure Theory", description: "Abstract data types, complexity analysis, and optimal data organization", difficulty: "Intermediate", readTime: "65 min", applications: "Database Systems, Algorithm Implementation", year: "2nd Year" },
        { id: "computer-architecture", title: "Computer Architecture Theory", description: "Von Neumann architecture, instruction sets, and processor design principles", difficulty: "Advanced", readTime: "80 min", applications: "Processor Design, System Optimization", year: "2nd Year" }
      ]
    },
    {
      category: "Third Year - Software Engineering & Systems",
      icon: Globe,
      color: "bg-purple-50 border-purple-200",
      theories: [
        { id: "solid-principles", title: "SOLID Principles", description: "Five fundamental design principles for writing maintainable and scalable object-oriented software", difficulty: "Intermediate", readTime: "45 min", applications: "Software Architecture, Code Quality", year: "3rd Year" },
        { id: "design-patterns", title: "Design Patterns Theory", description: "Reusable solutions to commonly occurring problems in software design and architecture", difficulty: "Advanced", readTime: "90 min", applications: "Framework Development, System Design", year: "3rd Year" },
        { id: "software-architecture", title: "Software Architecture Patterns", description: "High-level structural patterns including MVC, MVP, MVVM, and microservices architecture", difficulty: "Advanced", readTime: "85 min", applications: "Enterprise Applications, Web Services", year: "3rd Year" },
        { id: "database-theory", title: "Database Theory", description: "Relational algebra, normalization theory, transaction processing, and ACID properties", difficulty: "Advanced", readTime: "75 min", applications: "Database Design, Data Management", year: "3rd Year" },
        { id: "network-protocol", title: "Network Protocol Theory", description: "OSI model, TCP/IP stack, routing algorithms, and network security principles", difficulty: "Advanced", readTime: "70 min", applications: "Network Design, Internet Protocols", year: "3rd Year" },
        { id: "operating-system", title: "Operating System Theory", description: "Process management, memory allocation, file systems, and concurrent programming", difficulty: "Advanced", readTime: "80 min", applications: "System Programming, Resource Management", year: "3rd Year" },
        { id: "compiler-design", title: "Compiler Design Theory", description: "Lexical analysis, parsing, code generation, and optimization techniques", difficulty: "Advanced", readTime: "95 min", applications: "Programming Languages, Code Optimization", year: "3rd Year" },
        { id: "distributed-systems", title: "Distributed Systems Theory", description: "Consistency models, consensus algorithms, and fault tolerance in distributed computing", difficulty: "Advanced", readTime: "85 min", applications: "Cloud Computing, Blockchain", year: "3rd Year" },
        { id: "cryptography-theory", title: "Cryptography Theory", description: "Mathematical foundations of encryption, digital signatures, and security protocols", difficulty: "Advanced", readTime: "80 min", applications: "Information Security, Blockchain", year: "3rd Year" }
      ]
    },
    {
      category: "Fourth Year - Advanced Technologies & Specialization",
      icon: Zap,
      color: "bg-red-50 border-red-200",
      theories: [
        { id: "machine-learning-theory", title: "Machine Learning Theory", description: "Statistical learning theory, bias-variance tradeoff, and generalization bounds", difficulty: "Advanced", readTime: "100 min", applications: "AI Systems, Data Science", year: "4th Year" },
        { id: "ai-foundations", title: "Artificial Intelligence Foundations", description: "Search algorithms, knowledge representation, reasoning, and planning", difficulty: "Advanced", readTime: "110 min", applications: "Expert Systems, Robotics", year: "4th Year" },
        { id: "deep-learning-theory", title: "Deep Learning Theory", description: "Neural network architectures, backpropagation, and optimization in deep networks", difficulty: "Advanced", readTime: "120 min", applications: "Computer Vision, NLP", year: "4th Year" },
        { id: "quantum-computing", title: "Quantum Computing Theory", description: "Quantum mechanics principles, quantum algorithms, and quantum supremacy", difficulty: "Expert", readTime: "130 min", applications: "Quantum Algorithms, Cryptography", year: "4th Year" },
        { id: "blockchain-theory", title: "Blockchain Technology Theory", description: "Distributed ledger technology, consensus mechanisms, and smart contracts", difficulty: "Advanced", readTime: "85 min", applications: "Cryptocurrency, Decentralized Apps", year: "4th Year" },
        { id: "computer-vision", title: "Computer Vision Theory", description: "Image processing, feature extraction, and pattern recognition algorithms", difficulty: "Advanced", readTime: "95 min", applications: "Image Analysis, Autonomous Systems", year: "4th Year" },
        { id: "nlp-theory", title: "Natural Language Processing Theory", description: "Linguistic theory, statistical models, and language understanding algorithms", difficulty: "Advanced", readTime: "90 min", applications: "Chatbots, Translation Systems", year: "4th Year" },
        { id: "game-theory", title: "Game Theory in Computing", description: "Strategic decision making, mechanism design, and algorithmic game theory", difficulty: "Advanced", readTime: "75 min", applications: "Resource Allocation, Network Security", year: "4th Year" },
        { id: "cloud-computing-theory", title: "Cloud Computing Theory", description: "Virtualization, service models, scalability, and cloud architecture patterns", difficulty: "Advanced", readTime: "80 min", applications: "Cloud Services, DevOps", year: "4th Year" },
        { id: "iot-theory", title: "Internet of Things Theory", description: "Sensor networks, edge computing, and IoT system architecture", difficulty: "Intermediate", readTime: "70 min", applications: "Smart Cities, Industrial IoT", year: "4th Year" }
      ]
    },
    {
      category: "Research & Emerging Technologies",
      icon: Lightbulb,
      color: "bg-yellow-50 border-yellow-200",
      theories: [
        { id: "bioinformatics", title: "Bioinformatics Theory", description: "Computational methods for analyzing biological data and genomic sequences", difficulty: "Advanced", readTime: "85 min", applications: "Drug Discovery, Genetic Analysis", year: "Research" },
        { id: "neuromorphic-computing", title: "Neuromorphic Computing", description: "Brain-inspired computing architectures and spike-based neural networks", difficulty: "Expert", readTime: "95 min", applications: "AI Hardware, Cognitive Computing", year: "Research" },
        { id: "edge-computing", title: "Edge Computing Theory", description: "Distributed computing paradigms and latency-sensitive applications", difficulty: "Advanced", readTime: "70 min", applications: "IoT Systems, Real-time Processing", year: "Research" },
        { id: "augmented-reality", title: "Augmented Reality Theory", description: "Computer vision, 3D rendering, and human-computer interaction principles", difficulty: "Advanced", readTime: "80 min", applications: "AR Applications, Mixed Reality", year: "Research" },
        { id: "robotics-theory", title: "Robotics Theory", description: "Kinematics, dynamics, control systems, and autonomous navigation", difficulty: "Advanced", readTime: "100 min", applications: "Autonomous Robots, Industrial Automation", year: "Research" },
        { id: "green-computing", title: "Green Computing Theory", description: "Energy-efficient computing, sustainable technology, and environmental impact", difficulty: "Intermediate", readTime: "60 min", applications: "Sustainable Tech, Energy Optimization", year: "Research" }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      case "Expert": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getYearColor = (year: string) => {
    switch (year) {
      case "1st Year": return "bg-blue-100 text-blue-800";
      case "2nd Year": return "bg-green-100 text-green-800";
      case "3rd Year": return "bg-purple-100 text-purple-800";
      case "4th Year": return "bg-red-100 text-red-800";
      case "Research": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-serif text-black">Engineering Theories</h1>
            </div>
            <Button variant="ghost" size="sm" asChild className="text-blue-600 hover:bg-blue-50">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Main Page
              </Link>
            </Button>
          </div>
          <p className="text-gray-600 text-sm mt-1">Fundamental concepts and theoretical foundations for engineering students</p>
          <p className="text-blue-600 text-sm mt-2 font-medium">50+ Core Theories | All Academic Years | Research Topics</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200">
          <h2 className="text-xl font-semibold text-black mb-3">Comprehensive Theory Collection</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Explore 50+ fundamental theories that form the backbone of computer science and engineering. 
            From mathematical foundations to cutting-edge research topics, each theory is explained with practical 
            applications and real-world relevance.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
            <div className="bg-white p-3 rounded border text-center">
              <div className="font-bold text-2xl text-green-600">1st</div>
              <div className="text-gray-600">Mathematical Foundations</div>
            </div>
            <div className="bg-white p-3 rounded border text-center">
              <div className="font-bold text-2xl text-blue-600">2nd</div>
              <div className="text-gray-600">CS Fundamentals</div>
            </div>
            <div className="bg-white p-3 rounded border text-center">
              <div className="font-bold text-2xl text-purple-600">3rd</div>
              <div className="text-gray-600">Systems & Software</div>
            </div>
            <div className="bg-white p-3 rounded border text-center">
              <div className="font-bold text-2xl text-red-600">4th</div>
              <div className="text-gray-600">Advanced Topics</div>
            </div>
            <div className="bg-white p-3 rounded border text-center">
              <div className="font-bold text-2xl text-yellow-600">Research</div>
              <div className="text-gray-600">Research Areas</div>
            </div>
          </div>
        </div>

        {theoryCategories.map((category, categoryIndex) => {
          const IconComponent = category.icon;
          return (
            <section key={categoryIndex} className="mb-12">
              <div className="flex items-center mb-6">
                <IconComponent className="w-6 h-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-serif text-black">
                  {category.category}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.theories.map((theory, theoryIndex) => (
                  <Card key={theoryIndex} className={`${category.color} hover:shadow-lg transition-all duration-200 hover:scale-[1.02]`}>
                    <CardContent className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-black text-lg leading-tight pr-2">{theory.title}</h3>
                        <Button variant="outline" size="sm" className="text-xs ml-2 shrink-0" asChild>
                          <Link to={`/theory/${theory.id}`}>
                            <BookOpen className="w-3 h-3 mr-1" />
                            Study
                          </Link>
                        </Button>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">{theory.description}</p>
                      
                      <div className="mb-4">
                        <div className="text-xs font-medium text-gray-600 mb-2">Applications:</div>
                        <div className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded italic">
                          {theory.applications}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        <span className={`px-2 py-1 rounded-full font-medium ${getDifficultyColor(theory.difficulty)}`}>
                          {theory.difficulty}
                        </span>
                        <span className={`px-2 py-1 rounded-full font-medium ${getYearColor(theory.year)}`}>
                          {theory.year}
                        </span>
                        <div className="flex items-center text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                          <Clock className="w-3 h-3 mr-1" />
                          {theory.readTime}
                        </div>
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
              <Brain className="w-5 h-5 mr-2 text-blue-600" />
              Theory Study Methodology
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-medium mb-3 text-black">Understanding Theory</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Start with fundamental definitions and concepts</li>
                  <li>• Use visual aids and mathematical proofs</li>
                  <li>• Connect theoretical concepts to practical applications</li>
                  <li>• Work through examples systematically</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-black">Practical Application</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Implement theoretical concepts in programming</li>
                  <li>• Engage in peer discussions and study groups</li>
                  <li>• Solve related problems and case studies</li>
                  <li>• Teach concepts to reinforce understanding</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-black">Progressive Learning</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Follow difficulty progression systematically</li>
                  <li>• Build upon previously learned concepts</li>
                  <li>• Regular review and reinforcement</li>
                  <li>• Apply theories to current research trends</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            All theories are curated from academic sources and industry best practices. 
            Covering <span className="font-semibold text-blue-600">50+ core theories</span> across 
            <span className="font-semibold text-green-600">4 academic years</span> plus research topics.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            For additional theoretical resources, visit the main <Link to="/" className="text-blue-600 hover:underline">Engineering Resources Hub</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Theories;
