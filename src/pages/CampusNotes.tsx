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
        case "Beginner": return "bg-green-900/50 text-green-300 border border-green-700/50";
        case "Intermediate": return "bg-yellow-900/50 text-yellow-300 border border-yellow-700/50";
        case "Advanced": return "bg-red-900/50 text-red-300 border border-red-700/50";
        case "Expert": return "bg-purple-900/50 text-purple-300 border border-purple-700/50";
        default: return "bg-neutral-700 text-neutral-300";
      }
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-white font-sans">
            <main className="flex-1 w-full pt-12 pb-16">
                <div className="text-center mb-8 px-4">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        Engineering Theories Hub
                    </h1>
                    <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
                        An organized collection of fundamental theories for every stage of your engineering journey.
                    </p>
                </div>

                <Breadcrumb />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <aside className="md:col-span-1 h-fit md:sticky top-24">
                            <div className="bg-neutral-900 p-4 rounded-lg border border-neutral-800">
                                <h3 className="text-lg font-semibold text-white mb-4">Jump to Section</h3>
                                <div className="space-y-2">
                                    {theoryCategories.map(cat => (
                                        <button
                                            key={cat.refId}
                                            onClick={() => handleNav(sectionRefs[cat.refId])}
                                            className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 flex items-center gap-3 ${
                                                activeId === cat.refId ? 'bg-blue-600 text-white shadow-lg' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                                            }`}
                                        >
                                          <cat.icon className="w-4 h-4" />
                                          {cat.category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </aside>

                        <main className="md:col-span-3">
                            <div className="space-y-16">
                                {theoryCategories.map((category) => (
                                    <section key={category.refId} id={category.refId} ref={sectionRefs[category.refId]} className="scroll-mt-24">
                                        <Card className={`bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg border-l-4 ${category.accentColor}`}>
                                            <CardContent className="p-6">
                                                <div className="flex items-center gap-4 mb-2">
                                                    <category.icon className="w-8 h-8 text-blue-400" />
                                                    <div>
                                                        <h2 className="text-2xl font-bold text-white">{category.category} Year Theories</h2>
                                                        <p className="text-neutral-400">{category.description}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                                            {category.theories.map((theory) => (
                                                <Link to={`/theory/${theory.id}`} key={theory.id} className="block group">
                                                    <Card className="bg-neutral-900/70 border border-neutral-800 h-full transition-all duration-300 group-hover:border-blue-500/80 group-hover:bg-neutral-800/50 group-hover:shadow-xl">
                                                        <CardContent className="p-5 flex flex-col h-full">
                                                            <div className="flex-grow">
                                                                <div className="flex justify-between items-start mb-2">
                                                                    <h3 className="font-semibold text-neutral-100 text-md leading-tight pr-2">{theory.title}</h3>
                                                                    <BookOpen className="w-5 h-5 text-neutral-500 group-hover:text-blue-400 transition-colors shrink-0" />
                                                                </div>
                                                                <p className="text-neutral-400 text-sm leading-relaxed">{theory.description}</p>
                                                            </div>
                                                            <div className="flex flex-wrap items-center gap-2 text-xs mt-4 pt-4 border-t border-neutral-800">
                                                                <Badge className={getDifficultyColor(theory.difficulty)}>{theory.difficulty}</Badge>
                                                                <Badge className="bg-neutral-700/80 text-neutral-300 flex items-center gap-1.5">
                                                                    <Clock className="w-3 h-3" />
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
            </main>

            {showBackToTop && (
                <Button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 h-12 w-12 rounded-full bg-blue-600/90 p-3 text-white shadow-lg transition-transform duration-200 ease-in-out hover:bg-blue-600 hover:scale-110"
                    aria-label="Go to top"
                >
                    <ArrowUp className="h-6 w-6" />
                </Button>
            )}
        </div>
    );
};

export default TheoriesPage;
