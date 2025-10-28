import React, { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Clock, Star, ExternalLink, Download, FileText, Home, ArrowUp } from "lucide-react";

// --- Data ---
const noteCategories = [
    {
      category: "First Year - Foundation Subjects",
      refId: "first-year",
      notes: [
        { id: "engineering-mathematics-1", title: "Engineering Mathematics I", description: "Calculus, differential equations, and linear algebra notes.", subject: "Mathematics", pages: 45, downloads: 1250, rating: 4.8, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "Khan Academy", url: "#" }, { platform: "MIT OCW", url: "#" }] },
        { id: "physics-engineers", title: "Physics for Engineers", description: "Mechanics, thermodynamics, and electromagnetic theory.", subject: "Physics", pages: 38, downloads: 980, rating: 4.7, lastUpdated: "Dec 2024", resourceLinks: [{ platform: "Coursera", url: "#" }, { platform: "edX", url: "#" }] },
        { id: "c-programming-notes", title: "C Programming Quick Notes", description: "Syntax, functions, pointers, and data structures in C.", subject: "Programming", pages: 28, downloads: 1450, rating: 4.9, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "Codecademy", url: "#" }, { platform: "CS50", url: "#" }] },
        { id: "engineering-drawing", title: "Engineering Drawing Basics", description: "Technical drawing, projections, and CAD fundamentals.", subject: "Drawing", pages: 25, downloads: 650, rating: 4.5, lastUpdated: "Dec 2024", resourceLinks: [{ platform: "AutoCAD", url: "#" }] },
      ]
    },
    {
      category: "Second Year - Core Engineering",
      refId: "second-year",
      notes: [
        { id: "dsa-notes", title: "Data Structures & Algorithms", description: "Arrays, linked lists, trees, graphs, and algorithm analysis.", subject: "DSA", pages: 52, downloads: 2100, rating: 4.9, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "LeetCode", url: "#" }, { platform: "GeeksforGeeks", url: "#" }] },
        { id: "oop-notes", title: "Object-Oriented Programming", description: "OOP concepts, inheritance, polymorphism with Java/C++.", subject: "Programming", pages: 48, downloads: 1850, rating: 4.8, lastUpdated: "Dec 2024", resourceLinks: [{ platform: "Oracle", url: "#" }] },
        { id: "dbms-notes", title: "Database Management Systems", description: "SQL, normalization, transactions, and database design.", subject: "DBMS", pages: 46, downloads: 1750, rating: 4.8, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "W3Schools", url: "#" }, { platform: "SQLBolt", url: "#" }] },
        { id: "os-concepts", title: "Operating Systems Concepts", description: "Process management, memory allocation, and file systems.", subject: "OS", pages: 48, downloads: 1620, rating: 4.7, lastUpdated: "Dec 2024", resourceLinks: [{ platform: "MIT OCW", url: "#" }] },
      ]
    },
    {
      category: "Third Year - Advanced Topics",
      refId: "third-year",
      notes: [
        { id: "computer-networks", title: "Computer Networks", description: "OSI model, TCP/IP, routing protocols, and network security.", subject: "Networks", pages: 50, downloads: 1650, rating: 4.7, lastUpdated: "Dec 2024", resourceLinks: [{ platform: "Cisco", url: "#" }, { platform: "Coursera", url: "#" }] },
        { id: "web-frameworks", title: "Web Framework Development", description: "React, Node.js, Express, and full-stack development.", subject: "Web Dev", pages: 62, downloads: 2250, rating: 4.9, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "React Docs", url: "#" }, { platform: "Node.js Docs", url: "#" }] },
        { id: "system-design-fundamentals", title: "System Design Fundamentals", description: "Scalability, microservices, and distributed systems.", subject: "System Design", pages: 52, downloads: 1980, rating: 4.8, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "GitHub", url: "#" }] },
        { id: "devops-cloud", title: "DevOps and Cloud Computing", description: "CI/CD, containerization, AWS, and deployment strategies.", subject: "DevOps", pages: 50, downloads: 1820, rating: 4.8, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "AWS", url: "#" }, { platform: "Docker", url: "#" }] },
      ]
    },
    {
      category: "Fourth Year - Specialization",
      refId: "fourth-year",
      notes: [
        { id: "ml-fundamentals", title: "Machine Learning Fundamentals", description: "Supervised learning, neural networks, and model evaluation.", subject: "ML/AI", pages: 65, downloads: 2850, rating: 4.9, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "Coursera", url: "#" }, { platform: "Kaggle", url: "#" }] },
        { id: "blockchain-tech", title: "Blockchain Technology", description: "Cryptocurrency, smart contracts, and distributed ledgers.", subject: "Blockchain", pages: 48, downloads: 1650, rating: 4.7, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "Ethereum", url: "#" }] },
        { id: "deep-learning-ai", title: "Deep Learning and AI", description: "Neural networks, computer vision, and NLP.", subject: "AI", pages: 70, downloads: 2450, rating: 4.9, lastUpdated: "Dec 2024", resourceLinks: [{ platform: "DeepLearning.AI", url: "#" }] },
        { id: "big-data-analytics", title: "Big Data Analytics", description: "Hadoop, Spark, data processing, and analytics frameworks.", subject: "Big Data", pages: 55, downloads: 1880, rating: 4.6, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "Coursera", url: "#" }] },
      ]
    },
    {
      category: "Interview Preparation",
      refId: "interview-prep",
      notes: [
        { id: "technical-interview", title: "Technical Interview Questions", description: "Coding problems, system design, and technical discussions.", subject: "Interview", pages: 85, downloads: 3250, rating: 4.9, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "LeetCode", url: "#" }, { platform: "InterviewBit", url: "#" }] },
        { id: "resume-building", title: "Resume Building Guide", description: "Professional resume templates and writing strategies.", subject: "Career", pages: 25, downloads: 2150, rating: 4.7, lastUpdated: "Dec 2024", resourceLinks: [{ platform: "Canva", url: "#" }] },
        { id: "aptitude-test", title: "Aptitude Test Preparation", description: "Quantitative, logical reasoning, and verbal ability.", subject: "Aptitude", pages: 68, downloads: 2850, rating: 4.8, lastUpdated: "Jan 2025", resourceLinks: [{ platform: "IndiaBIX", url: "#" }] },
        { id: "hr-interview", title: "HR Interview Questions", description: "Behavioral questions and professional communication.", subject: "HR", pages: 32, downloads: 1950, rating: 4.6, lastUpdated: "Dec 2024", resourceLinks: [{ platform: "Glassdoor", url: "#" }] },
      ]
    }
];

// --- Custom Hook for observing section visibility ---
const useIntersectionObserver = (setActiveId) => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            if (visibleSection) {
                setActiveId(visibleSection.id);
            }
        }, { rootMargin: '-20% 0px -80% 0px' }); // Trigger when section is in the middle of the screen

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [setActiveId]);

    return observer;
};


const NotesPage = () => {
  const [activeId, setActiveId] = useState(noteCategories[0].refId);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const sectionRefs = noteCategories.reduce((acc, value) => {
    acc[value.refId] = useRef<HTMLDivElement>(null);
    return acc;
  }, {} as Record<string, React.RefObject<HTMLDivElement>>);

  const observer = useIntersectionObserver(setActiveId);

  useEffect(() => {
      Object.values(sectionRefs).forEach((ref) => {
          if (ref.current && observer.current) {
              observer.current.observe(ref.current);
          }
      });
      return () => {
          Object.values(sectionRefs).forEach((ref) => {
              if (ref.current && observer.current) {
                  observer.current.unobserve(ref.current);
              }
          });
      };
  }, [sectionRefs, observer]);

  const handleNav = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  // Back to Top Logic
  useEffect(() => {
    const checkScrollTop = () => {
      setShowBackToTop(window.pageYOffset > 400);
    };
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
            <span className="text-white font-medium">Notes</span>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 font-sans">
      {/* <Header /> */}
      <main className="flex-1 w-full pt-12 pb-16">
        <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Comprehensive Study Notes
            </h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
                Your complete library of curated notes for every subject and exam.
            </p>
        </div>
        
        <Breadcrumb />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <aside className="md:col-span-1 h-fit md:sticky top-24">
              <div className="bg-neutral-900 p-5 rounded-lg border border-neutral-800">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Navigation</h3>
                  <div className="space-y-2">
                      {noteCategories.map(category => (
                          <button
                              key={category.refId}
                              onClick={() => handleNav(sectionRefs[category.refId])}
                              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                                  activeId === category.refId
                                  ? 'bg-blue-600 text-white'
                                  : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                              }`}
                          >
                              {category.category}
                          </button>
                      ))}
                  </div>
              </div>
            </aside>

            <main className="md:col-span-3">
              {noteCategories.map((category) => (
                <section key={category.refId} id={category.refId} ref={sectionRefs[category.refId]} className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-white mb-6">{category.category}</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {category.notes.map((note) => (
                      <Card key={note.id} className="group bg-neutral-900 border border-neutral-800 rounded-lg shadow-sm hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                        <CardContent className="p-6 flex flex-col flex-grow">
                          <div className="flex justify-between items-start mb-2">
                            <Link to={`/notes/${note.id}`} className="flex-1 pr-4">
                              <h3 className="font-bold text-lg text-white leading-tight group-hover:text-blue-400 transition-colors">{note.title}</h3>
                            </Link>
                            <Badge variant="outline" className="text-xs border-neutral-700 bg-neutral-800 text-neutral-300">{note.subject}</Badge>
                          </div>
                          <p className="text-sm text-neutral-400 mb-4 flex-grow line-clamp-2">{note.description}</p>
                          
                          <div className="mb-5 border-t border-b border-neutral-800 py-3">
                              <h4 className="text-xs font-semibold text-neutral-500 mb-2">External Resources</h4>
                              <div className="flex flex-wrap gap-2">
                                  {note.resourceLinks.map(link => (
                                    <Button key={link.platform} asChild size="sm" variant="outline" className="text-xs border-blue-600/50 text-blue-400 hover:bg-blue-600 hover:text-white">
                                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                                          {link.platform} <ExternalLink className="w-3 h-3 ml-1.5"/>
                                      </a>
                                    </Button>
                                  ))}
                              </div>
                          </div>
                          
                          <div className="mt-auto flex items-center justify-between text-sm text-neutral-400">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1.5" title="Pages"><FileText className="w-4 h-4"/>{note.pages}</span>
                              <span className="flex items-center gap-1.5" title="Downloads"><Download className="w-4 h-4"/>{note.downloads.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center gap-1 font-semibold">
                              <Star className="w-4 h-4 text-yellow-500"/>
                              <span>{note.rating}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              ))}
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

      {/* <Footer /> */}
    </div>
  );
};

export default NotesPage;
