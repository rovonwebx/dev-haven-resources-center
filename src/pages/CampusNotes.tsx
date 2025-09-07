import React, { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, ArrowLeft, BookOpen, FileText, Beaker, PenTool, Award, Code, Users, Download, ArrowUp } from "lucide-react";

// --- Data (No changes here) ---
const academicYears = [
    {
      year: "First Year",
      refId: "first-year",
      accentColor: "border-emerald-500",
      description: "Foundation subjects and basic engineering concepts",
      driveLink: "https://drive.google.com/drive/folders/1hvUXtsjpxLre6jtHR5UFbH2IMBAP2ZDT",
      subjects: ["Mathematics", "Physics", "Chemistry", "Programming", "Engineering Drawing"],
      resources: [
        { name: "Lab Notes", icon: Beaker, count: 25, description: "Physics, Chemistry & Programming labs" },
        { name: "Lab Records", icon: FileText, count: 30, description: "Complete lab record formats" },
        { name: "Assignments", icon: PenTool, count: 40, description: "Solved assignments for all subjects" },
        { name: "Previous Year Papers", icon: Award, count: 80, description: "Last 5 years solved papers" },
        { name: "Micro Projects", icon: Code, count: 15, description: "Small projects for skill building" },
        { name: "Subject Notes", icon: BookOpen, count: 50, description: "Comprehensive notes for all subjects" },
      ]
    },
    {
      year: "Second Year",
      refId: "second-year",
      accentColor: "border-blue-500",
      description: "Core engineering subjects and programming fundamentals",
      driveLink: "https://drive.google.com/drive/folders/1VuZAozNvWES5agsAdfto2sG8_aBRdKj4",
      subjects: ["Data Structures", "Digital Electronics", "DBMS", "Computer Organization", "OOP"],
      resources: [
        { name: "Lab Notes", icon: Beaker, count: 35, description: "DSA, DBMS & Digital Electronics labs" },
        { name: "Lab Records", icon: FileText, count: 42, description: "Programming and circuit lab records" },
        { name: "Assignments", icon: PenTool, count: 55, description: "Coding assignments and problem sets" },
        { name: "Previous Year Papers", icon: Award, count: 95, description: "Exam papers with detailed solutions" },
        { name: "Micro Projects", icon: Code, count: 22, description: "Web and database projects" },
        { name: "Subject Notes", icon: BookOpen, count: 65, description: "Core CS subjects notes" },
      ]
    },
    {
      year: "Third Year",
      refId: "third-year",
      accentColor: "border-purple-500",
      description: "Advanced topics and specialization subjects",
      driveLink: "https://drive.google.com/drive/folders/1yYfCuRWI8Jv-MZx9S_5wiScvEqj69kJt",
      subjects: ["Software Engineering", "Computer Networks", "OS", "Web Dev", "AI/ML"],
      resources: [
        { name: "Lab Notes", icon: Beaker, count: 45, description: "Advanced programming & networking labs" },
        { name: "Lab Records", icon: FileText, count: 50, description: "System programming and network labs" },
        { name: "Assignments", icon: PenTool, count: 65, description: "Complex programming assignments" },
        { name: "Previous Year Papers", icon: Award, count: 110, description: "Advanced subject question papers" },
        { name: "Micro Projects", icon: Code, count: 28, description: "Full-stack and AI/ML projects" },
        { name: "Subject Notes", icon: BookOpen, count: 75, description: "Advanced CS concepts" },
      ]
    },
    {
      year: "Fourth Year",
      refId: "fourth-year",
      accentColor: "border-red-500",
      description: "Final year projects and industry preparation",
      driveLink: "https://drive.google.com/drive/folders/1J6KQxSag1ag2c-hEjEgu9gCAfhmho-Yb",
      subjects: ["Capstone Project", "Blockchain", "Cloud Computing", "DevOps"],
      resources: [
        { name: "Project Reports", icon: FileText, count: 30, description: "Sample final year project reports" },
        { name: "Research Papers", icon: BookOpen, count: 40, description: "Key papers for literature survey" },
        { name: "Interview Prep", icon: Users, count: 50, description: "Company-specific interview notes" },
        { name: "Placement Papers", icon: Award, count: 120, description: "Previous years' placement papers" },
      ]
    }
];

// --- Custom Hook for observing section visibility ---
const useIntersectionObserver = (setActiveId) => {
    const observer = useRef<IntersectionObserver | null>(null);
    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            if (visibleSection) setActiveId(visibleSection.id);
        }, { rootMargin: '-20% 0px -80% 0px' });
        return () => observer.current?.disconnect();
    }, [setActiveId]);
    return observer;
};

const CampusNotesPage = () => {
  const [activeId, setActiveId] = useState(academicYears[0].refId);
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  const sectionRefs = academicYears.reduce((acc, value) => {
    acc[value.refId] = useRef<HTMLDivElement>(null);
    return acc;
  }, {} as Record<string, React.RefObject<HTMLDivElement>>);

  const observer = useIntersectionObserver(setActiveId);

  useEffect(() => {
      Object.values(sectionRefs).forEach(ref => {
          if (ref.current && observer.current) observer.current.observe(ref.current);
      });
      return () => {
          Object.values(sectionRefs).forEach(ref => {
              if (ref.current && observer.current) observer.current.unobserve(ref.current);
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
            <span className="text-white font-medium">Campus Notes</span>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      {/* CSS for Print/Screenshot Protection */}
      <style>{`
        @media print {
          .prevent-print-content {
            display: none;
          }
          .print-warning {
            display: block !important;
            text-align: center;
            padding: 50px;
            font-size: 18px;
            color: black;
          }
        }
      `}</style>

      {/* <Header /> */}
      <main className="flex-1 w-full pt-12 pb-16">
        <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Campus Notes Archive
            </h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
              All subjects, all years, all in one place. Your complete academic repository.
            </p>
        </div>
        
        <Breadcrumb />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <aside className="md:col-span-1 h-fit md:sticky top-24">
              <div className="bg-neutral-900 p-5 rounded-lg border border-neutral-800">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Navigation</h3>
                  <div className="space-y-2">
                      {academicYears.map(year => (
                          <button
                              key={year.refId}
                              onClick={() => handleNav(sectionRefs[year.refId])}
                              className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                                  activeId === year.refId ? 'bg-blue-600 text-white' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'
                              }`}
                          >
                              {year.year}
                          </button>
                      ))}
                  </div>
              </div>
            </aside>

            <main className="md:col-span-3">
              {/* This wrapper will hide content on print/screenshot */}
              <div className="prevent-print-content space-y-16">
                {academicYears.map((yearData) => (
                  <section key={yearData.refId} id={yearData.refId} ref={sectionRefs[yearData.refId]} className="scroll-mt-24">
                    <Card className={`bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg border-l-4 ${yearData.accentColor}`}>
                      <CardContent className="p-6">
                          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                              <div>
                                  <h2 className="text-3xl font-bold mb-1 text-white">{yearData.year}</h2>
                                  <p className="text-neutral-400 max-w-md">{yearData.description}</p>
                              </div>
                              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white mt-4 sm:mt-0 font-bold">
                                  <a href={yearData.driveLink} target="_blank" rel="noopener noreferrer"><Download className="w-4 h-4 mr-2" /> Access Drive</a>
                              </Button>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-6">
                              {yearData.subjects.map((subject, index) => (
                                  <Badge key={index} variant="secondary" className="bg-neutral-800 text-neutral-300">{subject}</Badge>
                              ))}
                          </div>
                          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                            {yearData.resources.map((resource) => {
                              const IconComponent = resource.icon;
                              return (
                                <Card key={resource.name} className="bg-neutral-800/50 border border-neutral-700/50 p-4 hover:border-blue-500/50 transition-colors">
                                  <div className="flex items-center gap-4">
                                      <IconComponent className="w-6 h-6 text-blue-400 flex-shrink-0" />
                                      <div>
                                          <p className="font-semibold text-neutral-200">{resource.name}</p>
                                          <p className="text-xs text-neutral-400">{resource.count > 0 ? `${resource.count}+ files` : 'View resources'}</p>
                                      </div>
                                  </div>
                                </Card>
                              );
                            })}
                          </div>
                      </CardContent>
                    </Card>
                  </section>
                ))}
              </div>
              
              {/* This message will appear only on print/screenshot */}
              <div className="print-warning" style={{ display: 'none' }}>
                Content from this page is protected and cannot be printed or copied. Please access resources directly through the website.
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
      {/* <Footer /> */}
    </div>
  );
};

export default CampusNotesPage;
