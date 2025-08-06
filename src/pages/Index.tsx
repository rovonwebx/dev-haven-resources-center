import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Analytics } from "@vercel/analytics/react";
import Chatbot from "@/components/Chatbot";
import { 
    ArrowRight, X, Github, Linkedin, Twitter, Sun, Moon, Bell, Zap, MessageSquare, Menu, 
    ChevronLeft, ChevronRight, Database, Server, Code, FileText, BookOpen, Users,
    Award, Lightbulb, Briefcase, BrainCircuit, Map, Calendar, ClipboardCheck, School, LayoutTemplate, Bot 
} from 'lucide-react';

// --- UPDATED DATA ARRAY WITH ALL 17 CARDS ---
const resourceCardsNew = [
    { number: 1, title: "Certificates", description: "Industry-recognized certifications and online courses.", path: "/certificates", icon: Award },
    { number: 2, title: "Projects", description: "Hands-on projects and portfolio ideas.", path: "/projects", icon: Code },
    { number: 3, title: "Ideas", description: "Creative project concepts and innovation inspiration.", path: "/ideas", icon: Lightbulb },
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
    { number: 14, title: "Assignments", description: "Practice assignments and problem sets for various subjects.", path: "/assignments", icon: ClipboardCheck },
    { number: 15, title: "Campus Notes", description: "Collaborative study notes and campus resources.", path: "/campus-notes", icon: School },
    { number: 16, title: "Templates", description: "Ready-to-use web templates and design resources.", path: "/templates", icon: LayoutTemplate },
    { number: 17, title: "Anyone Can Develop", description: "Complete guide to creating webpages with AI assistance.", path: "/anyone-can-develop", icon: Bot },
];


// --- ALL OTHER DATA AND COMPONENTS REMAIN UNCHANGED ---
const navLinks = [
  { title: "Certificates", path: "/certificates" },
  { title: "Projects", path: "/projects" },
  { title: "Notes", path: "/notes" },
  { title: "Campus Notes", path: "/campus-notes" },
  { title: "Assignments", path: "/assignments" },
  { title: "Roadmaps", path: "/roadmaps" },
  { title: "Student Projects", path: "/student-projects" },
  { title: "Events", path: "/events" },
  { title: "Templates", path: "/templates" },
];

const quickLinks = [
    { title: "DSA Roadmap", path: "/roadmaps" },
    { title: "Web Dev Roadmap", path: "/roadmaps" },
    { title: "Latest Internships", path: "/internships" },
    { title: "SQL Interview Questions", path: "/interview-questions" },
    {
        title: "Submit a Project",
        path: "https://center-knowledge-vault.vercel.app",
        external: true
    },
];

const hackathonsData = [
    { source: "MLH 2025 Season", focus: "Collegiate hackathons", relevance: "Season includes summer 2025 events", link: "https://mlh.io/seasons/2025/events" },
    { source: "Devpost", focus: "Global hackathon platform", relevance: "New and upcoming, relevant for summer", link: "https://devpost.com/hackathons" },
    { source: "HackerEarth", focus: "Business challenges, prizes", relevance: "Upcoming events with 2025 deadlines", link: "https://www.hackerearth.com/challenges/" },
    { source: "Devfolio", focus: "Hackathon hosting & participation", relevance: "Events opening in August 2025", link: "https://devfolio.co/hackathons" },
];

const internshipsData = [
    { source: "AICTE Internship Portal", focus: "National, various fields", relevance: "Aiming for 1 crore by 2025, recent posts", link: "https://internship.aicte-india.org/" },
    { source: "Bright Network", focus: "Deadline tracker, various fields", relevance: "Summer 2025 deadlines, ongoing", link: "https://www.brightnetwork.co.uk/internship-deadlines/" },
    { source: "Capital One", focus: "Business/technology, 10 weeks", relevance: "Summer 2025 programs, student-focused", link: "https://www.capitalonecareers.com/students-and-grads" },
    { source: "MEA Internship Portal", focus: "Government, India, honorarium", relevance: "Terms in 2025, applications ongoing", link: "https://www.mea.gov.in/internship-in-mea.htm" },
];

const NOTIF_KEY = 'dhrc_tos_update_dismissed';
const POPUP_KEY = 'dhrc_opportunities_popup_dismissed_2025_07';
const CHAT_TUTORIAL_KEY = 'dhrc_chat_tutorial_dismissed_beta';

const NotificationSound = ({ play }) => {
    const audioRef = useRef(null);
    useEffect(() => { if (play) { audioRef.current.play().catch(e => {}); } }, [play]);
    return <audio ref={audioRef} src="https://assets.mixkit.co/sfx/preview/mixkit-positive-notification-951.mp3" />;
};

const Index = () => {
    const [showNotif, setShowNotif] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [theme, setTheme] = useState('dark');
    const [playNotificationSound, setPlayNotificationSound] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add('dark');
        window.localStorage.setItem('theme', 'dark');
        setTheme('dark');

        setShowNotif(!window.sessionStorage.getItem(NOTIF_KEY));
        
        const popupDismissed = window.sessionStorage.getItem(POPUP_KEY);
        if (!popupDismissed) {
            const timer = setTimeout(() => {
                setShowPopup(true);
                setPlayNotificationSound(true); 
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const dismissNotif = () => {
        setShowNotif(false);
        window.sessionStorage.setItem(NOTIF_KEY, '1');
    };

    const dismissPopup = () => {
        setShowPopup(false);
        window.sessionStorage.setItem(POPUP_KEY, '1');
    };
    
    const OpportunityList = ({ title, data }) => (
        <div>
            <h4 className="font-semibold text-neutral-200 mb-3 px-4 text-sm uppercase tracking-wide">{title}</h4>
            <div className="space-y-1">
                {data.map((item) => (
                    <a href={item.link} key={item.source} target="_blank" rel="noopener noreferrer" className="block p-3 mx-2 rounded-md hover:bg-neutral-800/60 transition-all duration-200 border-l-2 border-transparent hover:border-blue-500">
                        <p className="font-semibold text-sm text-white">{item.source}</p>
                        <p className="text-xs text-neutral-400 mt-1">{item.focus}</p>
                        <p className="text-xs text-neutral-500 italic">{item.relevance}</p>
                    </a>
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-neutral-950 flex flex-col font-sans text-white">
            <Analytics />
            <NotificationSound play={playNotificationSound} />

            {showPopup && (
                <div className="fixed top-5 right-5 z-50 w-[calc(100%-2.5rem)] max-w-md bg-neutral-900/95 backdrop-blur-xl rounded-lg shadow-2xl border border-neutral-700">
                    <div className="p-5">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <span className="bg-blue-600 p-2.5 rounded-lg inline-flex"><Bell className="text-white" size={20} /></span>
                                <div>
                                    <h3 className="font-semibold text-white">Engineering Opportunities</h3>
                                    <p className="text-sm text-neutral-400">July 2025 Update</p>
                                </div>
                            </div>
                            <Button onClick={dismissPopup} variant="ghost" size="icon" className="h-8 w-8 rounded-full text-neutral-400 hover:bg-neutral-800"><X size={18} /></Button>
                        </div>
                        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                            <OpportunityList title="Technical Hackathons" data={hackathonsData} />
                            <OpportunityList title="Professional Internships" data={internshipsData} />
                        </div>
                    </div>
                </div>
            )}
            
            <div className={`fixed top-0 right-0 h-full bg-neutral-900/95 backdrop-blur-xl shadow-2xl z-50 w-full max-w-md transform transition-transform duration-300 border-l border-neutral-700 ${isPanelOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-5 border-b border-neutral-800 flex justify-between items-center sticky top-0 bg-neutral-900/90 backdrop-blur-sm">
                    <h3 className="font-semibold text-lg text-white">Engineering Hub Updates</h3>
                    <button onClick={() => setIsPanelOpen(false)} className="p-2 rounded-full text-neutral-400 hover:bg-neutral-800 transition-colors"><X size={18} /></button>
                </div>
                <div className="py-4 space-y-6 overflow-y-auto h-[calc(100%-5rem)]">
                    <OpportunityList title="Technical Hackathons" data={hackathonsData} />
                    <OpportunityList title="Professional Internships" data={internshipsData} />
                </div>
            </div>

            {showNotif && (
                <div className="w-full bg-blue-600 text-white text-sm py-3 px-4 flex items-center justify-center text-center gap-x-4 z-50">
                    <div className="flex items-center gap-2">
                        <Database className="h-4 w-4" />
                        <p><strong>System Update:</strong> Enhanced data center and <a href="https://dhrc-tools.vercel.app/" className="underline font-semibold hover:text-blue-200 transition-colors">Engineering Tools</a> now available.</p>
                    </div>
                    <button onClick={dismissNotif} className="p-1.5 rounded-full hover:bg-blue-700/80 transition-colors flex-shrink-0" aria-label="Dismiss notification"><X size={18} /></button>
                </div>
            )}

            <header className="sticky top-0 w-full border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-xl z-40">
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
                        <a href="https://ckr-web.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Access Collaboration Hub">
                            <Button variant="ghost" size="icon" className="rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-white"><MessageSquare className="h-5 w-5" /></Button>
                        </a>
                        <Button onClick={() => setIsPanelOpen(true)} variant="ghost" size="icon" className="relative rounded-lg text-neutral-400 hover:bg-neutral-800 hover:text-white">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-1 right-1 flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>
                        </Button>
                        <Link to="/resume-generator" className="hidden md:block">
                            <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold px-4 py-2 rounded-lg transition-all">Resume Generator</Button>
                        </Link>
                        <a href="https://dhrc-tools.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <Button className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-4 py-2 rounded-lg transition-all">Access Portal</Button>
                        </a>
                    </div>
                </div>
            </header>
            
            <nav className="w-full bg-neutral-900 border-b border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
                    {navLinks.map((link) => (
                        <Link key={link.title} to={link.path} className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:bg-blue-600 hover:text-white transition-all duration-200">{link.title}</Link>
                    ))}
                </div>
            </nav>

            <section className="w-full bg-neutral-900 border-b border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center gap-2 md:gap-4">
                    <h3 className="text-sm md:text-base font-semibold text-neutral-200 flex-shrink-0 flex items-center gap-2">
                        <Code className="h-4 w-4" />
                        Quick Access:
                    </h3>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1">
                        {quickLinks.map((link) => (
                            link.external ? (
                                <a key={link.title} href={link.path} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-blue-400 hover:text-blue-300 hover:underline transition-colors">{link.title}</a>
                            ) : (
                                <Link key={link.title} to={link.path} className="text-sm font-medium text-blue-400 hover:text-blue-300 hover:underline transition-colors">{link.title}</Link>
                            )
                        ))}
                    </div>
                </div>
            </section>
            
            <div className="w-full bg-neutral-900 border-b border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                     <div className="flex items-center justify-center text-center gap-3 p-3 rounded-lg bg-neutral-800/50">
                        <Database className="h-5 w-5 text-blue-400 flex-shrink-0" />
                        <div>
                            <p className="text-sm font-semibold text-neutral-200">
                                Project Repository Access
                            </p>
                            <p className="text-xs text-neutral-400">Download enterprise-grade projects</p>
                        </div>
                         <Link to="/student-projects" className="flex-shrink-0">
                            <Button variant="outline" size="sm" className="text-xs font-medium text-blue-400 border-blue-600 hover:bg-blue-600 hover:text-white">
                                Browse <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center text-center gap-3 p-3 rounded-lg bg-neutral-800/50 border-x-0 md:border-x border-neutral-700">
                        <MessageSquare className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                        <div>
                            <p className="text-sm font-semibold text-neutral-200">
                                Professional Collaboration
                            </p>
                            <p className="text-xs text-neutral-400">Team communication platform</p>
                        </div>
                        <Badge className="bg-emerald-600 text-white text-[10px] font-semibold py-1 px-2 rounded">BETA</Badge>
                         <a href="https://ckr-web.vercel.app" target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="outline"
                                size="sm"
                                className="flex-shrink-0 text-xs font-medium text-emerald-400 border-emerald-600 hover:bg-emerald-600 hover:text-white"
                            >
                                Access
                                <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                        </a>
                    </div>
                    <div className="flex items-center justify-center text-center gap-3 p-3 rounded-lg bg-neutral-800/50">
                        <Users className="h-5 w-5 text-purple-400 flex-shrink-0" />
                        <div>
                            <p className="text-sm font-semibold text-neutral-200">Collaboration Hub</p>
                            <p className="text-xs text-neutral-400">Connect with engineering professionals</p>
                        </div>
                         <Link to="/chatterbox">
                            <Button size="sm" className="bg-purple-600 text-white font-medium hover:bg-purple-700 transition-all text-xs">
                                Enter Hub <ArrowRight className="ml-1 hidden sm:inline-block" size={14} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* --- THIS IS THE ONLY SECTION THAT HAS BEEN CHANGED --- */}
            <main className="flex-1 w-full pt-12 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                            Engineering Resource Center
                        </h2>
                        <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
                            Professional-grade resources, tools, and documentation for software engineers and developers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {resourceCardsNew.map((card) => {
                            const Icon = card.icon;
                            return (
                                <Link to={card.path} key={card.title} className="block group">
                                    <div className="bg-neutral-900 p-6 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-300 h-full border border-neutral-800 hover:border-blue-500/50 transform hover:-translate-y-1">
                                        <div className="flex items-start gap-5">
                                            <div className="bg-neutral-800 p-3 rounded-xl flex-shrink-0 border border-neutral-700">
                                                <Icon className="w-6 h-6 text-blue-400" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-white text-lg mb-1">{`${card.number}. ${card.title}`}</h3>
                                                <p className="text-neutral-400 text-sm">{card.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </main>
            {/* --- END OF CHANGED SECTION --- */}


            <footer className="bg-neutral-900 border-t border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
                        <div className="md:col-span-1 flex flex-col items-center sm:items-start">
                            <Link to="/" className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                                    <Server className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xl font-bold text-white">CKR</span>
                            </Link>
                            <p className="text-neutral-500 text-sm leading-relaxed">
                                Professional engineering data center providing enterprise-grade resources and tools.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-neutral-200 tracking-wider uppercase mb-4 text-sm">Technical Resources</h3>
                            <ul className="space-y-2.5">
                                <li><Link to="/certificates" className="text-neutral-400 hover:text-blue-400 transition-colors text-sm">Certifications</Link></li>
                                <li><Link to="/projects" className="text-neutral-400 hover:text-blue-400 transition-colors text-sm">Projects</Link></li>
                                <li><Link to="/roadmaps" className="text-neutral-400 hover:text-blue-400 transition-colors text-sm">Learning Paths</Link></li>
                                <li><Link to="/notes" className="text-neutral-400 hover:text-blue-400 transition-colors text-sm">Documentation</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-neutral-200 tracking-wider uppercase mb-4 text-sm">Professional Network</h3>
                            <ul className="space-y-2.5">
                                <li><Link to="/student-projects" className="text-neutral-400 hover:text-blue-400 transition-colors text-sm">Project Showcase</Link></li>
                                <li><Link to="/events" className="text-neutral-400 hover:text-blue-400 transition-colors text-sm">Tech Events</Link></li>
                                <li><Link to="/chatterbox" className="text-neutral-400 hover:text-blue-400 transition-colors text-sm">Collaboration Hub</Link></li>
                                <li><Link to="/internships" className="text-neutral-400 hover:text-blue-400 transition-colors text-sm">Career Opportunities</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-neutral-200 tracking-wider uppercase mb-4 text-sm">Connect</h3>
                            <div className="flex space-x-4 justify-center sm:justify-start">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-neutral-800"><Github size={20} /></a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-neutral-800"><Linkedin size={20} /></a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-neutral-800"><Twitter size={20} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center text-center">
                        <p className="text-sm text-neutral-500 mb-4 sm:mb-0">
                            © {new Date().getFullYear()} Center of Knowledge & Resources - All Rights Reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link to="/terms-of-service" className="text-neutral-500 hover:text-blue-400 transition-colors">Terms of Service</Link>
                            <Link to="/privacy-policy" className="text-neutral-500 hover:text-blue-400 transition-colors">Privacy Policy</Link>
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
