import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Analytics } from "@vercel/analytics/react";
import { ArrowLeft, BookOpen, Clock, Brain, Cpu, Globe, Zap, Lightbulb, Server, CheckCircle, BrainCircuit, Atom, FlaskConical, FunctionSquare, Network } from "lucide-react";

// --- All original data is preserved ---
const theoryCategories = [
    {
      category: "First Year - Mathematical & Scientific Foundations",
      icon: Atom,
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
      icon: Network,
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

const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "bg-emerald-900/80 text-emerald-200 border border-emerald-600/50";
      case "Intermediate": return "bg-amber-900/80 text-amber-200 border border-amber-600/50";
      case "Advanced": return "bg-red-900/80 text-red-200 border border-red-600/50";
      case "Expert": return "bg-purple-900/80 text-purple-200 border border-purple-600/50";
      default: return "bg-neutral-700 text-neutral-200 border-neutral-600";
    }
};

const getYearClass = (year) => {
    switch (year) {
      case "1st Year": return "bg-blue-900/80 text-blue-200 border border-blue-600/50";
      case "2nd Year": return "bg-cyan-900/80 text-cyan-200 border border-cyan-600/50";
      case "3rd Year": return "bg-indigo-900/80 text-indigo-200 border border-indigo-600/50";
      case "4th Year": return "bg-rose-900/80 text-rose-200 border border-rose-600/50";
      case "Research": return "bg-gray-700 text-gray-200 border border-gray-500";
      default: return "bg-neutral-700 text-neutral-200 border-neutral-600";
    }
};

const Theories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col font-sans text-gray-900">
        <Analytics />

        <header className="sticky top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl z-40 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                        <Server className="w-6 h-6 text-white" />
                    </div>
                    <div className="hidden sm:block">
                        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Center of Knowledge & Resources</h1>
                        <p className="text-xs text-neutral-400 font-medium tracking-wider uppercase">Professional Resource Hub</p>
                    </div>
                </Link>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" asChild className="text-neutral-300 hover:bg-neutral-800 hover:text-white">
                        <Link to="/">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Hub
                        </Link>
                    </Button>
                    <a href="https://dhrc-tools.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-4 py-2 rounded-lg transition-all">Access Portal</Button>
                    </a>
                </div>
            </div>
        </header>

      <main className="flex-1 w-full pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 flex items-center justify-center gap-4">
                    <BookOpen className="w-10 h-10 text-blue-400" />
                    Engineering Theories
                </h2>
                <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
                    Fundamental concepts and theoretical foundations spanning the entire computer science & engineering curriculum.
                </p>
            </div>

            {theoryCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <section key={categoryIndex} className="mb-16">
                  <div className="flex items-center mb-6 pb-3 border-b border-neutral-800">
                    <IconComponent className="w-7 h-7 text-blue-400 mr-4" />
                    <h2 className="text-2xl font-semibold text-white">
                      {category.category}
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.theories.map((theory, theoryIndex) => (
                      <Link to={`/theory/${theory.id}`} key={theoryIndex} className="block group">
                        <Card className="bg-neutral-900 border border-neutral-800 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                          <CardContent className="p-5 flex flex-col flex-grow">
                              <h3 className="font-semibold text-white text-lg mb-2">{theory.title}</h3>
                              <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-grow">{theory.description}</p>
                              
                              <div className="mb-4">
                                <div className="text-xs font-medium text-neutral-500 mb-1.5">APPLICATIONS</div>
                                <div className="text-xs font-semibold text-blue-300 bg-blue-900/50 px-2.5 py-1.5 rounded-md border border-blue-800/60">
                                  {theory.applications}
                                </div>
                              </div>
                            
                            <div className="flex flex-wrap items-center gap-2 text-xs mt-auto pt-4 border-t border-neutral-800">
                              <Badge className={`font-bold ${getDifficultyClass(theory.difficulty)}`}>
                                {theory.difficulty}
                              </Badge>
                              <Badge className={`font-bold ${getYearClass(theory.year)}`}>
                                {theory.year}
                              </Badge>
                              <Badge className="font-bold bg-neutral-800 text-neutral-300 border border-neutral-700">
                                <Clock className="w-3 h-3 mr-1.5" />
                                {theory.readTime}
                              </Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}

            <Card className="mt-12 bg-neutral-900 border border-neutral-800">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-white flex items-center gap-3">
                       <BrainCircuit className="w-6 h-6 text-emerald-400" />
                       Effective Study Methodology
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                    <div>
                        <h3 className="font-semibold text-neutral-200 mb-3">Conceptual Understanding</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2.5 mt-1 shrink-0" /><span className="text-neutral-400">Start with core definitions and axioms.</span></li>
                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2.5 mt-1 shrink-0" /><span className="text-neutral-400">Relate abstract ideas to concrete examples.</span></li>
                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2.5 mt-1 shrink-0" /><span className="text-neutral-400">Teach the concept to someone else to test your knowledge.</span></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className="font-semibold text-neutral-200 mb-3">Practical Application</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2.5 mt-1 shrink-0" /><span className="text-neutral-400">Implement algorithms or models based on the theory.</span></li>
                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2.5 mt-1 shrink-0" /><span className="text-neutral-400">Solve related problems on platforms like LeetCode or HackerRank.</span></li>
                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2.5 mt-1 shrink-0" /><span className="text-neutral-400">Analyze case studies where the theory is applied.</span></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-neutral-200 mb-3">Long-Term Retention</h3>
                        <ul className="space-y-2">
                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2.5 mt-1 shrink-0" /><span className="text-neutral-400">Use spaced repetition systems (e.g., Anki) for key facts.</span></li>
                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2.5 mt-1 shrink-0" /><span className="text-neutral-400">Build upon foundational theories as you progress each year.</span></li>
                            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-emerald-500 mr-2.5 mt-1 shrink-0" /><span className="text-neutral-400">Regularly review and connect different theoretical areas.</span></li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
      </main>

        <footer className="bg-neutral-900 border-t border-neutral-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                    <p className="text-sm text-neutral-500">
                        © {new Date().getFullYear()} Center of Knowledge & Resources - All Rights Reserved.
                    </p>
                    <div className="flex justify-center space-x-6 text-sm mt-4">
                        <Link to="/terms-of-service" className="text-neutral-500 hover:text-blue-400 transition-colors">Terms of Service</Link>
                        <Link to="/privacy-policy" className="text-neutral-500 hover:text-blue-400 transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  );
};

export default Theories;
