import React, { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, ArrowLeft, BookOpen, Clock, Brain, Cpu, Globe, Zap, Lightbulb, ArrowUp } from "lucide-react";

// --- Data (Updated with refId and descriptions) ---
const theoryCategories = [
  {
    category: "First Year",
    refId: "first-year",
    accentColor: "border-emerald-500",
    description: "Foundational mathematical and scientific principles essential for engineering.",
    icon: Brain,
    theories: [
        { id: "set-theory", title: "Set Theory and Mathematical Logic", description: "Concepts of sets, relations, functions, and logical reasoning.", difficulty: "Beginner", readTime: "45 min" },
        { id: "number-theory", title: "Number Theory Fundamentals", description: "Prime numbers, modular arithmetic, and cryptographic applications.", difficulty: "Intermediate", readTime: "50 min" },
        { id: "linear-algebra", title: "Linear Algebra Theory", description: "Vector spaces, matrices, eigenvalues, and linear transformations.", difficulty: "Intermediate", readTime: "60 min" },
        { id: "calculus-engineering", title: "Calculus in Engineering", description: "Differential and integral calculus in engineering problems.", difficulty: "Intermediate", readTime: "55 min" },
        { id: "physics-computation", title: "Physics of Computation", description: "Physical principles underlying computational processes.", difficulty: "Beginner", readTime: "40 min" },
        { id: "boolean-algebra", title: "Boolean Algebra Theory", description: "Fundamental operations, laws, and simplification techniques.", difficulty: "Beginner", readTime: "40 min" }
    ]
  },
  {
    category: "Second Year",
    refId: "second-year",
    accentColor: "border-blue-500",
    description: "Core computer science fundamentals and algorithmic thinking.",
    icon: Cpu,
    theories: [
        { id: "computational-complexity", title: "Computational Complexity", description: "P vs NP problems, complexity classes, and efficiency analysis.", difficulty: "Advanced", readTime: "75 min" },
        { id: "automata-theory", title: "Automata Theory", description: "Finite state machines, regular expressions, and formal languages.", difficulty: "Intermediate", readTime: "65 min" },
        { id: "graph-theory", title: "Graph Theory Applications", description: "Algorithms for connectivity, shortest paths, and networks.", difficulty: "Intermediate", readTime: "70 min" },
        { id: "information-theory", title: "Information Theory", description: "Entropy, data compression, and error correction principles.", difficulty: "Advanced", readTime: "60 min" },
        { id: "data-structure-theory", title: "Data Structure Theory", description: "Abstract data types, complexity, and optimal data organization.", difficulty: "Intermediate", readTime: "65 min" },
        { id: "computer-architecture", title: "Computer Architecture", description: "Von Neumann architecture, instruction sets, and processor design.", difficulty: "Advanced", readTime: "80 min" }
    ]
  },
  {
    category: "Third Year",
    refId: "third-year",
    accentColor: "border-purple-500",
    description: "Advanced software design, systems, and network principles.",
    icon: Globe,
    theories: [
        { id: "solid-principles", title: "SOLID Principles", description: "Principles for writing maintainable and scalable OO software.", difficulty: "Intermediate", readTime: "45 min" },
        { id: "design-patterns", title: "Design Patterns Theory", description: "Reusable solutions to common problems in software design.", difficulty: "Advanced", readTime: "90 min" },
        { id: "database-theory", title: "Database Theory", description: "Relational algebra, normalization, and transaction processing.", difficulty: "Advanced", readTime: "75 min" },
        { id: "network-protocol", title: "Network Protocol Theory", description: "OSI model, TCP/IP stack, and routing algorithms.", difficulty: "Advanced", readTime: "70 min" },
        { id: "operating-system", title: "Operating System Theory", description: "Process management, memory allocation, and file systems.", difficulty: "Advanced", readTime: "80 min" },
        { id: "compiler-design", title: "Compiler Design Theory", description: "Lexical analysis, parsing, and code generation.", difficulty: "Advanced", readTime: "95 min" }
    ]
  },
  {
    category: "Fourth Year",
    refId: "fourth-year",
    accentColor: "border-red-500",
    description: "Specialized domains and emerging technologies in computing.",
    icon: Zap,
    theories: [
        { id: "machine-learning-theory", title: "Machine Learning Theory", description: "Statistical learning theory and generalization bounds.", difficulty: "Advanced", readTime: "100 min" },
        { id: "deep-learning-theory", title: "Deep Learning Theory", description: "Neural network architectures, backpropagation, and optimization.", difficulty: "Advanced", readTime: "120 min" },
        { id: "quantum-computing", title: "Quantum Computing Theory", description: "Quantum mechanics principles and quantum algorithms.", difficulty: "Expert", readTime: "130 min" },
        { id: "blockchain-theory", title: "Blockchain Technology", description: "Distributed ledgers, consensus, and smart contracts.", difficulty: "Advanced", readTime: "85 min" },
        { id: "computer-vision", title: "Computer Vision Theory", description: "Image processing, feature extraction, and recognition.", difficulty: "Advanced", readTime: "95 min" },
        { id: "nlp-theory", title: "Natural Language Processing", description: "Linguistic theory, statistical models, and language understanding.", difficulty: "Advanced", readTime: "90 min" }
    ]
  },
  {
    category: "Research",
    refId: "research",
    accentColor: "border-yellow-500",
    description: "Cutting-edge research topics and interdisciplinary fields.",
    icon: Lightbulb,
    theories: [
        { id: "bioinformatics", title: "Bioinformatics Theory", description: "Computational methods for analyzing biological data.", difficulty: "Advanced", readTime: "85 min" },
        { id: "neuromorphic-computing", title: "Neuromorphic Computing", description: "Brain-inspired computing architectures.", difficulty: "Expert", readTime: "95 min" },
        { id: "edge-computing", title: "Edge Computing Theory", description: "Distributed computing for latency-sensitive applications.", difficulty: "Advanced", readTime: "70 min" },
        { id: "robotics-theory", title: "Robotics Theory", description: "Kinematics, dynamics, and autonomous navigation.", difficulty: "Advanced", readTime: "100 min" }
    ]
  }
];

// --- Custom Hook for observing section visibility ---
const useIntersectionObserver = (setActiveId: (id: string) => void) => {
  const observer = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
      if (visibleSection) {
        setActiveId(visibleSection.id);
      }
    }, { rootMargin: '-20% 0px -80% 0px' }); // Adjust rootMargin to trigger when section is in the middle of the viewport
    return () => observer.current?.disconnect();
  }, [setActiveId]);
  return observer;
};


const TheoriesPage = () => {
    const [activeId, setActiveId] = useState(theoryCategories[0].refId);
    const [showBackToTop, setShowBackToTop] = useState(false);

    const sectionRefs = theoryCategories.reduce((acc, value) => {
        acc[value.refId] = useRef<HTMLDivElement>(null);
        return acc;
    }, {} as Record<string, React.RefObject<HTMLDivElement>>);

    const observer = useIntersectionObserver(setActiveId);

    useEffect(() => {
        const refs = Object.values(sectionRefs);
        const currentObserver = observer.current;
        refs.forEach(ref => {
            if (ref.current && currentObserver) {
                currentObserver.observe(ref.current);
            }
        });
        return () => {
            refs.forEach(ref => {
                if (ref.current && currentObserver) {
                    currentObserver.unobserve(ref.current);
                }
            });
        };
    }, [sectionRefs, observer]);

    const handleNav = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() => {
        const checkScrollTop = () => setShowBackToTop(window.pageYOffset > 400);
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const Breadcrumb = () => (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="flex items-center gap-2 text-sm text-neutral-400">
                <Link to="/" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                    <Home className="w-4 h-4" />
                    Home
                </Link>
                <span>/</span>
                <span className="text-white font-medium">Engineering Theories</span>
            </div>
        </div>
    );

    const getDifficultyColor = (difficulty: string) => {
      switch (difficulty) {
        case "Beginner": return "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/40";
        case "Intermediate": return "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border border-yellow-500/40";
        case "Advanced": return "bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300 border border-red-500/40";
        case "Expert": return "bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-300 border border-purple-500/40";
        default: return "bg-gradient-to-r from-neutral-700/50 to-neutral-600/50 text-neutral-300 border border-neutral-600/40";
      }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white font-sans">
            {/* Hero Section with Gradient */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/5 to-emerald-600/10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_70%)]"></div>
                
                <main className="relative flex-1 w-full pt-16 pb-20">
                    <div className="text-center mb-12 px-4">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-2 rounded-full border border-blue-500/30 mb-6">
                            <span className="text-blue-400 text-sm font-medium">Engineering Excellence</span>
                        </div>
                        <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-6 leading-tight">
                            Engineering Theories Hub
                        </h1>
                        <p className="text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
                            Master the fundamental theories that power modern engineering with our comprehensive collection designed for every stage of your journey.
                        </p>
                    </div>
                </main>
            </div>

            <Breadcrumb />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <aside className="md:col-span-1 h-fit md:sticky top-24">
                        <div className="bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 backdrop-blur-sm p-6 rounded-xl border border-neutral-700/50 shadow-xl">
                            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">Jump to Section</h3>
                            <div className="space-y-3">
                                {theoryCategories.map(cat => (
                                    <button
                                        key={cat.refId}
                                        onClick={() => handleNav(sectionRefs[cat.refId])}
                                        className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-3 group ${
                                            activeId === cat.refId 
                                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                                                : 'text-neutral-300 hover:bg-gradient-to-r hover:from-neutral-800/80 hover:to-neutral-700/80 hover:text-white hover:shadow-lg'
                                        }`}
                                    >
                                      <cat.icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                                          activeId === cat.refId ? 'text-white' : 'text-neutral-400 group-hover:text-blue-400'
                                      }`} />
                                      {cat.category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    <main className="md:col-span-3">
                        <div className="space-y-20">
                            {theoryCategories.map((category) => (
                                <section key={category.refId} id={category.refId} ref={sectionRefs[category.refId]} className="scroll-mt-24">
                                    <Card className="bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-xl shadow-2xl overflow-hidden">
                                        <div className={`h-1 w-full bg-gradient-to-r ${
                                            category.refId === 'first-year' ? 'from-emerald-500 to-green-400' :
                                            category.refId === 'second-year' ? 'from-blue-500 to-cyan-400' :
                                            category.refId === 'third-year' ? 'from-purple-500 to-pink-400' :
                                            category.refId === 'fourth-year' ? 'from-red-500 to-orange-400' :
                                            'from-yellow-500 to-amber-400'
                                        }`}></div>
                                        <CardContent className="p-8">
                                            <div className="flex items-center gap-6 mb-4">
                                                <div className={`p-4 rounded-xl bg-gradient-to-br ${
                                                    category.refId === 'first-year' ? 'from-emerald-500/20 to-green-400/10' :
                                                    category.refId === 'second-year' ? 'from-blue-500/20 to-cyan-400/10' :
                                                    category.refId === 'third-year' ? 'from-purple-500/20 to-pink-400/10' :
                                                    category.refId === 'fourth-year' ? 'from-red-500/20 to-orange-400/10' :
                                                    'from-yellow-500/20 to-amber-400/10'
                                                }`}>
                                                    <category.icon className={`w-8 h-8 ${
                                                        category.refId === 'first-year' ? 'text-emerald-400' :
                                                        category.refId === 'second-year' ? 'text-blue-400' :
                                                        category.refId === 'third-year' ? 'text-purple-400' :
                                                        category.refId === 'fourth-year' ? 'text-red-400' :
                                                        'text-yellow-400'
                                                    }`} />
                                                </div>
                                                <div>
                                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent mb-2">
                                                        {category.category} {category.refId !== 'research' ? 'Year' : ''} Theories
                                                    </h2>
                                                    <p className="text-neutral-400 text-lg leading-relaxed">{category.description}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                                        {category.theories.map((theory) => (
                                            <Link to={`/theory/${theory.id}`} key={theory.id} className="block group">
                                                <Card className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-sm border border-neutral-700/50 h-full transition-all duration-500 group-hover:border-blue-400/60 group-hover:from-neutral-800/90 group-hover:to-neutral-800/60 group-hover:shadow-2xl group-hover:shadow-blue-500/10 group-hover:-translate-y-1">
                                                    <CardContent className="p-6 flex flex-col h-full">
                                                        <div className="flex-grow">
                                                            <div className="flex justify-between items-start mb-3">
                                                                <h3 className="font-bold text-white text-lg leading-tight pr-2 group-hover:text-blue-300 transition-colors duration-300">{theory.title}</h3>
                                                                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                                                                    <BookOpen className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                                                                </div>
                                                            </div>
                                                            <p className="text-neutral-300 text-sm leading-relaxed mb-4">{theory.description}</p>
                                                        </div>
                                                        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-700/50">
                                                            <Badge className={`${getDifficultyColor(theory.difficulty)} font-medium px-3 py-1`}>
                                                                {theory.difficulty}
                                                            </Badge>
                                                            <Badge className="bg-gradient-to-r from-neutral-700/80 to-neutral-600/80 text-neutral-200 flex items-center gap-2 px-3 py-1 font-medium">
                                                                <Clock className="w-3.5 h-3.5" />
                                                                {theory.readTime}
                                                            </Badge>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </Link>
                                        ))}
                                    </div>
                                </section>
                            ))}
                        </div>
                    </main>
                </div>
            </div>

            {showBackToTop && (
                <Button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white shadow-2xl shadow-blue-500/30 transition-all duration-300 ease-in-out hover:from-blue-500 hover:to-purple-500 hover:scale-110 hover:shadow-blue-500/50 backdrop-blur-sm border border-blue-400/30"
                    aria-label="Go to top"
                >
                    <ArrowUp className="h-6 w-6" />
                </Button>
            )}
        </div>
    );
};

export default TheoriesPage;
