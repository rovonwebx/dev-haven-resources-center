import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Analytics } from "@vercel/analytics/react";
import { useIsMobile } from "@/hooks/use-mobile";
import Chatbot from "@/components/Chatbot";
import { 
    ArrowRight, X, Github, Linkedin, Twitter, Bell, Zap, Menu, 
    Database, Server, Code, FileText, BookOpen, Users,
    Award, Lightbulb, Briefcase, BrainCircuit, Map, Calendar, ClipboardCheck, School, LayoutTemplate, Bot
} from 'lucide-react';

// --- DATA ARRAYS (UNCHANGED) ---
const resourceCardsNew = [
    { number: 1, title: "Certificates", description: "Industry-recognized certifications and courses.", path: "/certificates", icon: Award },
    { number: 2, title: "Projects", description: "Hands-on projects and portfolio ideas.", path: "/projects", icon: Code },
    { number: 3, title: "Ideas", description: "Creative project concepts and inspiration.", path: "/ideas", icon: Lightbulb },
    { number: 4, title: "Blogs", description: "Technical articles and industry insights.", path: "/blogs", icon: BookOpen },
    { number: 5, title: "DSA", description: "Data Structures and Algorithms resources.", path: "/dsa", icon: Database },
    { number: 6, title: "Coding Challenges", description: "Practice problems and competitive programming.", path: "/coding-challenges", icon: Code },
    { number: 7, title: "Internships", description: "Internship opportunities and application tips.", path: "/internships", icon: Briefcase },
    { number: 8, title: "Notes", description: "Study materials and quick reference guides.", path: "/notes", icon: FileText },
    { number: 9, title: "Documents", description: "Templates, guides, and documentation.", path: "/documents", icon: FileText },
    { number: 10, title: "Theories", description: "Computer science fundamentals and concepts.", path: "/theories", icon: BrainCircuit },
    { number: 11, title: "Roadmaps", description: "Career path guidance and learning tracks.", path: "/roadmaps", icon: Map },
    { number: 12, title: "Student Projects", description: "Academic projects and research ideas.", path: "/student-projects", icon: Users },
    { number: 13, title: "Events", description: "Tech conferences, workshops, and meetups.", path: "/events", icon: Calendar },
    { number: 14, title: "Assignments", description: "Practice assignments and problem sets.", path: "/assignments", icon: ClipboardCheck },
    { number: 15, title: "Campus Notes", description: "Collaborative campus study resources.", path: "/campus-notes", icon: School },
    { number: 16, title: "Templates", description: "Ready-to-use web templates and assets.", path: "/templates", icon: LayoutTemplate },
    { number: 17, title: "Anyone Can Develop", description: "Guide to creating webpages with AI.", path: "/anyone-can-develop", icon: Bot },
];

const navLinks = [
  { title: "Certificates", path: "/certificates" },
  { title: "Projects", path: "/projects" },
  { title: "Notes", path: "/notes" },
  { title: "Campus Notes", path: "/campus-notes" },
  { title: "Assignments", path: "/assignments" },
  { title: "Roadmaps", path: "/roadmaps" },
];

const hackathonsData = [
    { source: "MLH 2025 Season", focus: "Collegiate hackathons", relevance: "Season includes summer 2025 events", link: "https://mlh.io/seasons/2025/events" },
    { source: "Devpost", focus: "Global hackathon platform", relevance: "New and upcoming, relevant for summer", link: "https://devpost.com/hackathons" },
];

const internshipsData = [
    { source: "AICTE Internship Portal", focus: "National, various fields", relevance: "Aiming for 1 crore by 2025, recent posts", link: "https://internship.aicte-india.org/" },
    { source: "Capital One", focus: "Business/technology, 10 weeks", relevance: "Summer 2025 programs, student-focused", link: "https://www.capitalonecareers.com/students-and-grads" },
];

const POPUP_KEY = 'dhrc_opportunities_popup_dismissed_solid_2025_08';

const NotificationSound = ({ play }) => {
    const audioRef = useRef(null);
    useEffect(() => { if (play) { audioRef.current.play().catch(e => {}); } }, [play]);
    return <audio ref={audioRef} src="https://assets.mixkit.co/sfx/preview/mixkit-positive-notification-951.mp3" />;
};

// --- Main Component: Index (Solid Blue Version) ---
const Index = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [playNotificationSound, setPlayNotificationSound] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        document.documentElement.classList.add('dark');
        const popupDismissed = window.sessionStorage.getItem(POPUP_KEY);
        if (!popupDismissed) {
            const timer = setTimeout(() => {
                setShowPopup(true);
                setPlayNotificationSound(true); 
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);
    
    const dismissPopup = () => {
        setShowPopup(false);
        window.sessionStorage.setItem(POPUP_KEY, '1');
    };

    const OpportunityList = ({ title, data }) => (
        <div>
            <h4 className="font-semibold text-neutral-200 mb-3 px-4 text-sm uppercase tracking-wider">{title}</h4>
            <div className="space-y-1">
                {data.map((item) => (
                    <a href={item.link} key={item.source} target="_blank" rel="noopener noreferrer" className="block p-3 mx-2 rounded-lg hover:bg-neutral-800/80 transition-colors duration-200 border-l-2 border-transparent hover:border-blue-500">
                        <p className="font-semibold text-sm text-white">{item.source}</p>
                        <p className="text-xs text-neutral-400 mt-1">{item.focus}</p>
                    </a>
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#0A0A0A] flex flex-col font-sans text-white overflow-x-hidden">
            <Analytics />
            <NotificationSound play={playNotificationSound} />

            {/* --- SOLID COLOR POPUP --- */}
            {showPopup && (
                <div className="fixed top-5 right-5 z-50 w-[calc(100%-2.5rem)] max-w-md bg-[#1C1C1C]/80 backdrop-blur-2xl rounded-2xl shadow-2xl border border-neutral-700 animate-fade-in-down">
                    <div className="p-5">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <span className="bg-blue-600 p-2.5 rounded-xl inline-flex shadow-lg"><Bell className="text-white" size={20} /></span>
                                <div>
                                    <h3 className="font-semibold text-white">Opportunities Update</h3>
                                    <p className="text-sm text-neutral-300">August 2025</p>
                                </div>
                            </div>
                            <Button onClick={dismissPopup} variant="ghost" size="icon" className="h-8 w-8 rounded-full text-neutral-400 hover:bg-neutral-700/60"><X size={18} /></Button>
                        </div>
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                            <OpportunityList title="Hackathons" data={hackathonsData} />
                            <OpportunityList title="Internships" data={internshipsData} />
                        </div>
                    </div>
                </div>
            )}
            
            {/* --- SOLID COLOR SIDE PANEL --- */}
            <div className={`fixed top-0 right-0 h-full bg-[#181818]/80 backdrop-blur-2xl shadow-2xl z-50 w-full max-w-md transform transition-transform duration-300 border-l border-neutral-800 ${isPanelOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-5 border-b border-neutral-800 flex justify-between items-center sticky top-0 bg-[#181818]/90 backdrop-blur-sm">
                    <h3 className="font-semibold text-lg text-white">Hub Updates</h3>
                    <button onClick={() => setIsPanelOpen(false)} className="p-2 rounded-full text-neutral-400 hover:bg-neutral-700/60 transition-colors"><X size={18} /></button>
                </div>
                <div className="py-4 space-y-6 overflow-y-auto h-[calc(100%-5rem)] custom-scrollbar">
                    <OpportunityList title="Technical Hackathons" data={hackathonsData} />
                    <OpportunityList title="Professional Internships" data={internshipsData} />
                </div>
            </div>

            {/* --- HEADER WITH SOLID BACKGROUND (UPDATED) --- */}
            <header className="sticky top-0 w-full border-b border-neutral-800 bg-[#111111] z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-11 h-11 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-600/30">
                            <Server className="w-5 h-5 text-white" />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-xl font-semibold text-white tracking-tight">Resource Center</h1>
                        </div>
                    </Link>
                    <div className="flex items-center gap-2">
                         <a href="https://dhrc-tools.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Access engineering tools portal">
                            <Button className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-4 rounded-lg transition-all duration-300 hover:scale-105">
                                Access Portal
                            </Button>
                        </a>
                        <Button 
                            onClick={() => setIsPanelOpen(true)} 
                            variant="ghost" 
                            size="icon" 
                            className="relative rounded-lg text-neutral-300 hover:bg-neutral-800 hover:text-white transition-all"
                            aria-label="View opportunities"
                        >
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2.5 bg-blue-500"></span>
                            </span>
                        </Button>
                        {isMobile && (
                            <Button 
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                                variant="ghost" 
                                size="icon" 
                                className="rounded-lg text-neutral-300 hover:bg-neutral-800 hover:text-white md:hidden"
                                aria-label="Toggle mobile menu"
                            >
                                <Menu className="h-5 w-5" />
                            </Button>
                        )}
                    </div>
                </div>
            </header>
            
            <nav className={`w-full bg-[#111111] border-b border-neutral-800 ${isMobile ? (isMobileMenuOpen ? 'block' : 'hidden') : 'block'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-center gap-2">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.title} 
                            to={link.path} 
                            onClick={() => isMobile && setIsMobileMenuOpen(false)}
                            className="px-4 py-2 rounded-md text-sm font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors"
                            aria-label={`Navigate to ${link.title}`}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            </nav>
            
            {/* --- SOLID COLOR HERO SECTION --- */}
            <section className="w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
                    <Badge className="bg-blue-600/20 text-blue-300 text-sm font-semibold py-1.5 px-4 rounded-full border border-blue-500/30 mb-4">
                        System Update 3.0
                    </Badge>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
                        Engineering Resources, Perfected
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
                        A curated, comprehensive hub of developer tools, documentation, and career resources, designed for ultimate clarity and focus.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Link to="/projects">
                            <Button className="bg-blue-600 text-white font-bold px-8 py-6 rounded-xl text-base transition-all duration-300 hover:scale-105 hover:bg-blue-700">
                                <Code className="mr-2 h-5 w-5" /> Browse Projects
                            </Button>
                        </Link>
                         <Link to="/roadmaps">
                            <Button variant="outline" className="border-neutral-700 bg-neutral-900 text-white font-bold px-8 py-6 rounded-xl text-base transition-all duration-300 hover:scale-105 hover:bg-neutral-800">
                                View Roadmaps
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- PERFECT GRID MAIN SECTION --- */}
            <main className="flex-1 w-full pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resourceCardsNew.map((card) => {
                            const Icon = card.icon;
                            return (
                                <Link
                                    to={card.path}
                                    key={card.title}
                                    className="block group"
                                    aria-label={`Access ${card.title}: ${card.description}`}
                                >
                                    <div className="relative bg-[#1C1C1C] p-6 rounded-2xl shadow-sm transition-all duration-300 h-full border-2 border-transparent group-hover:border-blue-600 group-hover:-translate-y-1">
                                        <div className="flex items-start gap-5">
                                            <div className="bg-neutral-800 p-3.5 rounded-xl flex-shrink-0 border border-neutral-700 group-hover:bg-blue-600/10 group-hover:border-blue-500/50 transition-all duration-300">
                                                <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
                                            </div>
                                            <div className="flex-grow">
                                                <h3 className="font-bold text-white text-lg mb-1">{`${card.title}`}</h3>
                                                <p className="text-neutral-400 text-sm">{card.description}</p>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-neutral-600 transition-all duration-300 group-hover:text-blue-400 group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </main>

            {/* --- SOLID COLOR FOOTER --- */}
            <footer className="bg-[#111111] border-t border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                         <div className="mb-4 md:mb-0">
                             <h3 className="font-semibold text-neutral-200 tracking-wider uppercase mb-4 text-sm">Resource Center</h3>
                             <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
                         </div>
                         <div/>
                         <div/>
                         <div className="flex justify-start md:justify-end space-x-4">
                             <a href="#" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-blue-500 transition-colors p-2 rounded-lg hover:bg-neutral-800" aria-label="GitHub"><Github size={20} /></a>
                             <a href="#" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-blue-500 transition-colors p-2 rounded-lg hover:bg-neutral-800" aria-label="LinkedIn"><Linkedin size={20} /></a>
                             <a href="#" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-blue-500 transition-colors p-2 rounded-lg hover:bg-neutral-800" aria-label="Twitter"><Twitter size={20} /></a>
                         </div>
                     </div>
                </div>
            </footer>
            
            <div className="fixed bottom-5 right-5 z-40">
                <Chatbot />
            </div>
        </div>
    );
};

export default Index;
