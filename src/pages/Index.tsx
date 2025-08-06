import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Analytics } from "@vercel/analytics/react";
import Chatbot from "@/components/Chatbot";
import { ArrowRight, X, Github, Linkedin, Twitter, Sun, Moon, Bell, Zap, MessageSquare, Menu, ChevronLeft, ChevronRight, Database, Server, Code, FileText, BookOpen, Users } from 'lucide-react';

// --- Data arrays (no changes) ---
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

const resourceCards = [
    { title: "Certificates", description: "Industry-recognized certifications and online courses.", path: "/certificates", img: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", status: 'Updated' },
    { title: "Projects", description: "Hands-on projects and portfolio ideas.", path: "/projects", img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png" },
    { title: "Ideas", description: "Innovation concepts and startup ideas.", path: "/ideas", img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png" },
    { title: "Blogs", description: "Technical articles and engineering insights.", path: "/blogs", img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
    { title: "DSA", description: "250+ Data Structures and Algorithms problems and resources.", path: "/dsa", img: "https://cdn-icons-png.flaticon.com/512/2721/2721298.png", status: '250+ Problems' },
    { title: "Coding Challenges", description: "Programming contests and practice problems.", path: "/coding-challenges", img: "https://cdn-icons-png.flaticon.com/512/1055/1055672.png" },
    { title: "Internships", description: "Internship opportunities and career guidance.", path: "/internships", img: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png", status: 'Updated' },
    { title: "Notes", description: "Study materials and quick reference guides.", path: "/notes", img: "https://cdn-icons-png.flaticon.com/512/3135/3135773.png" },
    { title: "Campus Notes", description: "Collaborative study notes and campus resources.", path: "/campus-notes", img: "https://cdn-icons-png.flaticon.com/512/3135/3135772.png", status: 'Updated' },
    { title: "Assignments", description: "Practice assignments and problem sets for various subjects.", path: "/assignments", img: "https://cdn-icons-png.flaticon.com/512/3135/3135718.png", status: 'New' },
    { title: "Documents", description: "Technical documentation and manuals.", path: "/documents", img: "https://cdn-icons-png.flaticon.com/512/3135/3135766.png" },
    { title: "Theories", description: "Fundamental concepts and theoretical knowledge.", path: "/theories", img: "https://cdn-icons-png.flaticon.com/512/3135/3135762.png" },
    { title: "Roadmaps", description: "Structured learning paths for DSA and Web Development.", path: "/roadmaps", img: "https://cdn-icons-png.flaticon.com/512/3135/3135757.png", status: 'Updated' },
    { title: "Student Projects", description: "Innovative projects built by students across India.", path: "/student-projects", img: "https://cdn-icons-png.flaticon.com/512/3135/3135758.png", status: 'Updated' },
    { title: "Events", description: "Tech events, competitions, and conferences.", path: "/events", img: "https://cdn-icons-png.flaticon.com/512/3135/3135760.png" },
    { title: "Interview Questions", description: "Comprehensive SQL interview questions and answers.", path: "/interview-questions", img: "https://cdn-icons-png.flaticon.com/512/3135/3135764.png", status: 'Updated' },
    { title: "Anyone Can Develop", description: "Complete guide to creating webpages with AI assistance.", path: "/anyone-can-develop", img: "https://cdn-icons-png.flaticon.com/512/3135/3135770.png", status: 'Updated' },
    { title: "Templates", description: "Ready-to-use web templates and design resources.", path: "/templates", img: "https://cdn-icons-png.flaticon.com/512/3135/3135769.png", status: 'Updated' }
];

const NOTIF_KEY = 'dhrc_tos_update_dismissed';
const POPUP_KEY = 'dhrc_opportunities_popup_dismissed_2025_07';
const CHAT_TUTORIAL_KEY = 'dhrc_chat_tutorial_dismissed_beta';

const hackathonsData = [
    { source: "MLH 2025 Season", focus: "Collegiate hackathons", relevance: "Season includes summer 2025 events", link: "https://mlh.io/seasons/2025/events" },
    { source: "Devpost", focus: "Global hackathon platform", relevance: "New and upcoming, relevant for summer", link: "https://devpost.com/hackathons" },
    { source: "HackerEarth", focus: "Business challenges, prizes", relevance: "Upcoming events with 2025 deadlines", link: "https://www.hackerearth.com/challenges/" },
    { source: "Devfolio", focus: "Hackathon hosting & participation", relevance: "Events opening in August 2025", link: "https://devfolio.co/hackathons" },
    { source: "Smart India Hackathon", focus: "Nationwide, student-focused", relevance: "Editions in 2025, problem-solving focus", link: "https://sih.gov.in/" },
    { source: "Hack Club", focus: "High school hackathons", relevance: "Events in August 2025, global reach", link: "https://hackclub.com/events/" },
    { source: "CSE NoticeBard", focus: "India-specific, 9 hackathons", relevance: "Upcoming in 2025, registration open", link: "https://csenoticebard.in/category/hackathons/" },
    { source: "Airmeet", focus: "Global major hackathons", relevance: "Lists events for 2025, including summer", link: "https://www.airmeet.com/hub/events/category/hackathon/" },
];

const internshipsData = [
    { source: "AICTE Internship Portal", focus: "National, various fields", relevance: "Aiming for 1 crore by 2025, recent posts", link: "https://internship.aicte-india.org/" },
    { source: "Bright Network", focus: "Deadline tracker, various fields", relevance: "Summer 2025 deadlines, ongoing", link: "https://www.brightnetwork.co.uk/internship-deadlines/" },
    { source: "Capital One", focus: "Business/technology, 10 weeks", relevance: "Summer 2025 programs, student-focused", link: "https://www.capitalonecareers.com/students-and-grads" },
    { source: "MEA Internship Portal", focus: "Government, India, honorarium", relevance: "Terms in 2025, applications ongoing", link: "https://www.mea.gov.in/internship-in-mea.htm" },
    { source: "Opportunities Corners", focus: "Fully funded, international", relevance: "Summer 2025, includes July-August dates", link: "https://opportunitiescorners.info/fully-funded-internships/" },
    { source: "Smithsonian Institution", focus: "Year-round, various fields", relevance: "Includes July 2025 events", link: "https://www.si.edu/internships" },
    { source: "Accenture", focus: "Technology, May-August 2025", relevance: "Full-time prioritized, applications open", link: "https://www.accenture.com/in-en/careers/jobsearch?jk=&sb=1" },
    { source: "Indeed", focus: "Job board, summer internships", relevance: "701 jobs, start dates in May 2025", link: "https://in.indeed.com/q-summer-internship-jobs.html" },
];

const NotificationSound = ({ play }) => {
    const audioRef = useRef(null);
    useEffect(() => {
        if (play) {
            audioRef.current.play().catch(error => console.log("Audio play failed:", error));
        }
    }, [play]);
    return <audio ref={audioRef} src="https://assets.mixkit.co/sfx/preview/mixkit-positive-notification-951.mp3" />;
};

const ThemeToggler = ({ theme, toggleTheme }) => (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full text-neutral-400 hover:bg-neutral-800 hover:text-white" aria-label="Toggle theme">
        {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
);

const ChatTutorialPopup = ({ onDismiss }) => {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();

    const tutorialSteps = [
        {
            illustration: "https://i.ibb.co/L5rM0H1/undraw-group-chat-re-pmca.png",
            title: "1. Create a Room",
            description: "Easily start a new public or private chat room to connect with others.",
        },
        {
            illustration: "https://i.ibb.co/7jJzJ7b/undraw-invite-re-rrcp.png",
            title: "2. Invite Your Mates",
            description: "Share a unique link to invite your friends and classmates to join your room.",
        },
        {
            illustration: "https://i.ibb.co/3kMhVKZ/undraw-mobile-messages-re-yx8w.png",
            title: "3. Start Collaborating",
            description: "Chat in real-time, share ideas, and work together seamlessly.",
        },
    ];

    const handleNext = () => setStep((prev) => Math.min(prev + 1, tutorialSteps.length - 1));
    const handlePrev = () => setStep((prev) => Math.max(prev - 1, 0));

    const handleGetStarted = () => {
        onDismiss();
        navigate('/chatterbox');
    };

    return (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-md bg-neutral-900 border border-neutral-700 rounded-lg shadow-2xl">
                <CardContent className="p-6 text-center relative">
                    <button onClick={onDismiss} className="absolute top-3 right-3 p-1.5 rounded-full text-neutral-400 hover:bg-neutral-700 transition-colors">
                        <X size={18} />
                    </button>
                    
                    <img
                        src={tutorialSteps[step].illustration}
                        alt={tutorialSteps[step].title}
                        className="w-full max-w-[200px] h-auto mx-auto mb-5"
                    />

                    <h3 className="text-xl font-semibold text-white mb-2">
                        {tutorialSteps[step].title}
                    </h3>
                    <p className="text-neutral-400 mb-6 min-h-[40px]">
                        {tutorialSteps[step].description}
                    </p>

                    <div className="flex items-center justify-between">
                        <Button variant="ghost" onClick={handlePrev} disabled={step === 0} className={`transition-opacity text-white ${step === 0 ? 'opacity-0' : 'opacity-100'}`}>
                            <ChevronLeft size={20} className="mr-1" /> Prev
                        </Button>
                        <div className="flex items-center space-x-2">
                            {tutorialSteps.map((_, index) => (
                                <div key={index} className={`h-2 w-2 rounded-full transition-colors ${step === index ? 'bg-blue-500' : 'bg-neutral-600'}`}></div>
                            ))}
                        </div>
                        {step < tutorialSteps.length - 1 ? (
                            <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 text-white">
                                Next <ChevronRight size={20} className="ml-1" />
                            </Button>
                        ) : (
                            <Button onClick={handleGetStarted} className="bg-blue-600 hover:bg-blue-700 text-white">
                                Get Started
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

const Index = () => {
    const [showNotif, setShowNotif] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [theme, setTheme] = useState('dark'); // Default to dark theme
    const [playNotificationSound, setPlayNotificationSound] = useState(false);
    const [showChatTutorial, setShowChatTutorial] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Force dark theme as per the new design mandate
        const savedTheme = 'dark';
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(savedTheme);

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

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        window.localStorage.setItem('theme', theme);
    }, [theme]);

    const dismissNotif = () => {
        setShowNotif(false);
        window.sessionStorage.setItem(NOTIF_KEY, '1');
    };

    const dismissPopup = () => {
        setShowPopup(false);
        window.sessionStorage.setItem(POPUP_KEY, '1');
    };
    
    const dismissChatTutorial = () => {
        setShowChatTutorial(false);
        window.sessionStorage.setItem(CHAT_TUTORIAL_KEY, '1');
    };
    
    const handleChatFeatureClick = () => {
        if (!window.sessionStorage.getItem(CHAT_TUTORIAL_KEY)) {
            setShowChatTutorial(true);
        } else {
            navigate('/chatterbox');
        }
    };

    const toggleTheme = () => {
      // In this version, theme toggling is disabled to maintain the dark aesthetic.
      // If you wish to re-enable it, uncomment the line below.
      // setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };
    
    const getBadgeClass = (status) => {
        switch (status) {
            case 'Updated': return 'bg-emerald-900/90 text-emerald-100 border border-emerald-600/50 font-medium';
            case 'Coming Soon': return 'bg-amber-900/90 text-amber-100 border border-amber-600/50 font-medium';
            case 'On Working': return 'bg-blue-900/90 text-blue-100 border border-blue-600/50 font-medium';
            case 'New': return 'bg-purple-900/90 text-purple-100 border border-purple-600/50 font-medium';
            case '250+ Problems': return 'bg-cyan-900/90 text-cyan-100 border border-cyan-600/50 font-medium';
            default: return '';
        }
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
            {showChatTutorial && <ChatTutorialPopup onDismiss={dismissChatTutorial} />}

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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {resourceCards.map((card, index) => (
                            <Card key={card.title} className="group bg-neutral-900 overflow-hidden rounded-lg border border-neutral-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1">
                                <CardContent className="p-6 flex flex-col items-center text-center relative">
                                    {card.status && (
                                        <Badge className={`absolute top-4 right-4 text-xs font-medium py-1 px-3 rounded ${getBadgeClass(card.status)}`}>
                                            {card.status}
                                        </Badge>
                                    )}
                                    <div className="w-16 h-16 bg-neutral-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                                        <img src={card.img} alt={`${card.title} icon`} className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <h3 className="font-semibold text-lg text-white mb-2">{card.title}</h3>
                                    <p className="text-neutral-400 text-sm mb-6 flex-grow leading-relaxed">{card.description}</p>
                                    <Link to={card.path} className="w-full">
                                        <Button variant="outline" className="w-full text-blue-400 border-blue-600/50 font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 rounded-lg text-sm px-6 py-2.5 transition-all duration-300 group-hover:shadow-md">
                                            Access Resource
                                            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>

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
