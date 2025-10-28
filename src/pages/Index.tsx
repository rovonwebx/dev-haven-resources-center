import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Analytics } from "@vercel/analytics/react";
import { useIsMobile } from "@/hooks/use-mobile";
import Chatbot from "@/components/Chatbot";
import {
    ArrowRight, X, Github, Linkedin, Twitter, Bell, Menu,
    Database, Code, FileText, BookOpen, Users,
    Award, Lightbulb, Briefcase, BrainCircuit, Map, Calendar, ClipboardCheck, School, LayoutTemplate, Bot, Rocket, Megaphone
} from 'lucide-react';

// --- DATA ARRAYS (UPDATED) ---
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

const quickLinks = [
    { title: "Internships", path: "/internships" },
    { title: "Events", path: "/events" },
    { title: "Coding Challenges", path: "/coding-challenges" },
    { title: "Blogs", path: "/blogs" },
];

const hackathonsData = [
    { source: "MLH 2025 Season", focus: "Collegiate hackathons", relevance: "Season includes summer 2025 events", link: "https://mlh.io/seasons/2025/events" },
    { source: "Devpost", focus: "Global hackathon platform", relevance: "New and upcoming, relevant for summer", link: "https://devpost.com/hackathons" },
];

const internshipsData = [
    { source: "AICTE Internship Portal", focus: "National, various fields", relevance: "Aiming for 1 crore by 2025, recent posts", link: "https://internship.aicte-india.org/" },
    { source: "Capital One", focus: "Business/technology, 10 weeks", relevance: "Summer 2025 programs, student-focused", link: "https://www.capitalonecareers.com/students-and-grads" },
];

const POPUP_KEY = 'dhrc_opportunities_popup_dismissed_modern_2025_08';
const BANNER_KEY = 'dhrc_freshers_banner_dismissed_2025_29';

const NotificationSound = ({ play }) => {
    const audioRef = useRef(null);
    useEffect(() => { if (play) { audioRef.current.play().catch(e => {}); } }, [play]);
    return <audio ref={audioRef} src="https://assets.mixkit.co/sfx/preview/mixkit-positive-notification-951.mp3" />;
};

// --- Welcome Banner Component ---
const WelcomeBanner = ({ onDismiss }) => {
    return (
        <div className="bg-blue-600">
            <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 flex items-center">
                        <span className="flex p-2 rounded-lg bg-blue-800">
                            <Megaphone className="h-6 w-6 text-white" />
                        </span>
                        <p className="ml-3 font-medium text-white truncate">
                            <span className="md:hidden">Welcome Freshers!</span>
                            <span className="hidden md:inline">A warm welcome to the 2025 - 2029 batch! We're excited to have you.</span>
                        </p>
                    </div>
                    <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                        <a href="/roadmaps" className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50">
                            Get Started
                        </a>
                    </div>
                    <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                        <button
                            type="button"
                            className="-mr-1 flex p-2 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                            onClick={onDismiss}
                        >
                            <span className="sr-only">Dismiss</span>
                            <X className="h-6 w-6 text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Main Component: Index (Modern Redesign) ---
const Index = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [playNotificationSound, setPlayNotificationSound] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showBanner, setShowBanner] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        document.documentElement.classList.remove('dark');
        const popupDismissed = window.sessionStorage.getItem(POPUP_KEY);
        if (!popupDismissed) {
            const timer = setTimeout(() => {
                setShowPopup(true);
                setPlayNotificationSound(true);
            }, 1500);
            return () => clearTimeout(timer);
        }

        const bannerDismissed = window.sessionStorage.getItem(BANNER_KEY);
        if (!bannerDismissed) {
            setShowBanner(true);
        }
    }, []);

    const dismissPopup = () => {
        setShowPopup(false);
        window.sessionStorage.setItem(POPUP_KEY, '1');
    };

    const dismissBanner = () => {
        setShowBanner(false);
        window.sessionStorage.setItem(BANNER_KEY, '1');
    };

    const OpportunityList = ({ title, data }) => (
        <div>
            <h4 className="font-semibold text-gray-900 mb-3 px-4 text-sm uppercase tracking-wider">{title}</h4>
            <div className="space-y-1">
                {data.map((item) => (
                    <a href={item.link} key={item.source} target="_blank" rel="noopener noreferrer" className="block p-3 mx-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 border-l-2 border-transparent hover:border-blue-500">
                        <p className="font-semibold text-sm text-gray-900">{item.source}</p>
                        <p className="text-xs text-gray-600 mt-1">{item.focus}</p>
                    </a>
                ))}
            </div>
        </div>
    );

    const cardGradients = [
        "from-orange-200 to-orange-100",
        "from-emerald-200 to-emerald-100", 
        "from-pink-200 to-pink-100",
        "from-purple-200 to-purple-100",
        "from-cyan-200 to-cyan-100",
        "from-rose-200 to-rose-100",
        "from-violet-200 to-violet-100",
        "from-teal-200 to-teal-100",
        "from-fuchsia-200 to-fuchsia-100",
        "from-amber-200 to-amber-100",
        "from-lime-200 to-lime-100",
        "from-indigo-200 to-indigo-100",
        "from-sky-200 to-sky-100",
        "from-red-200 to-red-100",
        "from-green-200 to-green-100",
        "from-yellow-200 to-yellow-100",
        "from-blue-200 to-blue-100",
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col font-sans text-gray-900 overflow-x-hidden">
            <Analytics />
            <NotificationSound play={playNotificationSound} />

            {/* --- MODERN POPUP --- */}
            {showPopup && (
                <div className="fixed top-5 right-5 z-50 w-[calc(100%-2.5rem)] max-w-md bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gray-200 animate-fade-in-down">
                    <div className="p-5">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <span className="bg-gradient-to-br from-blue-500 to-blue-600 p-2.5 rounded-xl inline-flex shadow-lg"><Bell className="text-white" size={20} /></span>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Opportunities Update</h3>
                                    <p className="text-sm text-gray-600">August 2025</p>
                                </div>
                            </div>
                            <Button onClick={dismissPopup} variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-500 hover:bg-gray-100"><X size={18} /></Button>
                        </div>
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                            <OpportunityList title="Hackathons" data={hackathonsData} />
                            <OpportunityList title="Internships" data={internshipsData} />
                        </div>
                    </div>
                </div>
            )}

            {/* --- MODERN SIDE PANEL --- */}
            <div className={`fixed top-0 right-0 h-full bg-white/95 backdrop-blur-2xl shadow-2xl z-50 w-full max-w-md transform transition-transform duration-300 border-l border-gray-200 ${isPanelOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-5 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white/90 backdrop-blur-sm">
                    <h3 className="font-semibold text-lg text-gray-900">Hub Updates</h3>
                    <button onClick={() => setIsPanelOpen(false)} className="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"><X size={18} /></button>
                </div>
                <div className="py-4 space-y-6 overflow-y-auto h-[calc(100%-5rem)] custom-scrollbar">
                    <OpportunityList title="Technical Hackathons" data={hackathonsData} />
                    <OpportunityList title="Professional Internships" data={internshipsData} />
                </div>
            </div>

            {/* --- HEADER --- */}
            <header className="sticky top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-8">
                            <Link to="/" className="flex items-center gap-3 group">
                                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-blue-600/40">
                                    <Rocket className="w-5 h-5 text-white" />
                                </div>
                                <h1 className="text-xl font-semibold text-gray-900 tracking-tight">Resource Center</h1>
                            </Link>
                            <nav className="hidden md:flex items-center gap-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        to={link.path}
                                        className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button
                                onClick={() => setIsPanelOpen(true)}
                                variant="ghost"
                                size="icon"
                                className="relative rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-all"
                            >
                                <Bell className="h-5 w-5" />
                                <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                                </span>
                            </Button>
                            <div className="md:hidden">
                                <Button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    variant="ghost"
                                    size="icon"
                                    className="rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <nav className="md:hidden border-t border-gray-200 py-4 bg-white">
                        <div className="flex flex-col items-center gap-2 px-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-4 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors w-full text-center"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </header>

            {/* --- WELCOME BANNER --- */}
            {showBanner && <WelcomeBanner onDismiss={dismissBanner} />}

            {/* --- QUICK LINKS NAVBAR --- */}
            <nav className="bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex items-center justify-center md:justify-start gap-4 overflow-x-auto custom-scrollbar">
                        <h3 className="text-sm font-semibold text-gray-500 hidden md:block">Quick Links:</h3>
                        {quickLinks.map((link) => (
                             <Link
                                key={link.title}
                                to={link.path}
                                className="flex-shrink-0 px-3 py-1.5 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            
            {/* --- GRID MAIN SECTION --- */}
            <main className="flex-1 w-full py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resourceCardsNew.map((card, index) => {
                            const Icon = card.icon;
                            const gradient = cardGradients[index % cardGradients.length];
                            return (
                                <Link
                                    to={card.path}
                                    key={card.title}
                                    className="block group"
                                >
                                    <div className={`relative bg-gradient-to-br ${gradient} p-8 rounded-3xl shadow-lg transition-all duration-300 h-full group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:scale-[1.02]`}>
                                        <div className="flex flex-col h-full">
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="bg-white/40 backdrop-blur-sm p-3 rounded-xl shadow-md">
                                                    <Icon className="w-7 h-7 text-gray-800" />
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <h3 className="font-bold text-gray-900 text-2xl mb-2 tracking-tight">{card.title}</h3>
                                                <p className="text-gray-700 text-sm leading-relaxed">{card.description}</p>
                                            </div>
                                            <div className="mt-6 flex items-center justify-end">
                                                <ArrowRight className="w-6 h-6 text-gray-700 transition-all duration-300 group-hover:translate-x-2 group-hover:text-gray-900" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </main>

            {/* --- FOOTER --- */}
            <footer className="bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="mb-4 md:mb-0">
                            <h3 className="font-semibold text-gray-900 tracking-wider uppercase mb-4 text-sm">Resource Center</h3>
                            <p className="text-gray-600 text-sm">© {new Date().getFullYear()} All Rights Reserved.</p>
                        </div>
                        <div />
                        <div />
                        <div className="flex justify-start md:justify-end space-x-4">
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-100"><Github size={20} /></a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-100"><Linkedin size={20} /></a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-100"><Twitter size={20} /></a>
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
