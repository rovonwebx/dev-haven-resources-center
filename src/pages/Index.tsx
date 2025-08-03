import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Analytics } from "@vercel/analytics/react";
import Chatbot from "@/components/Chatbot";
import { ArrowRight, X, Github, Linkedin, Twitter, Sun, Moon, Bell, Zap, MessageSquare, Menu, ChevronLeft, ChevronRight } from 'lucide-react';

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
    { title: "DSA Roadmap", path: "/roadmaps/dsa" },
    { title: "Web Dev Roadmap", path: "/roadmaps/web-development" },
    { title: "Latest Internships", path: "/internships" },
    { title: "SQL Interview Questions", path: "/interview-questions" },
    {
        title: "Submit a Project",
        path: "https://dhrc-tools.vercel.app/student-projects/submit",
        external: true
    },
];

const resourceCards = [
    { title: "Certificates", description: "Industry-recognized certifications and online courses.", path: "/certificates", img: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png", status: 'Updated' },
    { title: "Projects", description: "Hands-on projects and portfolio ideas.", path: "/projects", img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png" },
    { title: "Ideas", description: "Innovation concepts and startup ideas.", path: "/ideas", img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png" },
    { title: "Blogs", description: "Technical articles and engineering insights.", path: "/blogs", img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
    { title: "DSA", description: "Data Structures and Algorithms resources.", path: "/dsa", img: "https://cdn-icons-png.flaticon.com/512/2721/2721298.png" },
    { title: "Coding Challenges", description: "Programming contests and practice problems.", path: "/coding-challenges", img: "https://cdn-icons-png.flaticon.com/512/1055/1055672.png" },
    { title: "Internships", description: "Internship opportunities and career guidance.", path: "/internships", img: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png", status: 'Updated' },
    { title: "Notes", description: "Study materials and quick reference guides.", path: "/notes", img: "https://cdn-icons-png.flaticon.com/512/3135/3135773.png" },
    { title: "Campus Notes", description: "Collaborative study notes and campus resources.", path: "/campus-notes", img: "https://cdn-icons-png.flaticon.com/512/3135/3135772.png" },
    { title: "Assignments", description: "Practice assignments and problem sets for various subjects.", path: "/assignments", img: "https://cdn-icons-png.flaticon.com/512/3843/3843516.png", status: 'New' },
    { title: "Documents", description: "Technical documentation and manuals.", path: "/documents", img: "https://cdn-icons-png.flaticon.com/512/3135/3135766.png", status: 'Coming Soon' },
    { title: "Theories", description: "Fundamental concepts and theoretical knowledge.", path: "/theories", img: "https://cdn-icons-png.flaticon.com/512/3135/3135762.png", status: 'Coming Soon' },
    { title: "Roadmaps", description: "Structured learning paths for DSA and Web Development.", path: "/roadmaps", img: "https://cdn-icons-png.flaticon.com/512/3135/3135757.png" },
    { title: "Student Projects", description: "Innovative projects built by students across India.", path: "/student-projects", img: "https://cdn-icons-png.flaticon.com/512/3135/3135758.png" },
    { title: "Events", description: "Tech events, competitions, and conferences.", path: "/events", img: "https://cdn-icons-png.flaticon.com/512/3135/3135760.png" },
    { title: "Interview Questions", description: "Comprehensive SQL interview questions and answers.", path: "/interview-questions", img: "https://cdn-icons-png.flaticon.com/512/3135/3135764.png" },
    { title: "Anyone Can Develop", description: "Complete guide to creating webpages with AI assistance.", path: "/anyone-can-develop", img: "https://cdn-icons-png.flaticon.com/512/3135/3135770.png", status: 'On Working' },
    { title: "Templates", description: "Ready-to-use web templates and design resources.", path: "/templates", img: "https://cdn-icons-png.flaticon.com/512/3135/3135769.png", status: 'On Working' }
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
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in">
            <Card className="w-full max-w-md bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl transform animate-scale-in">
                <CardContent className="p-6 text-center relative">
                    <button onClick={onDismiss} className="absolute top-3 right-3 p-1.5 rounded-full text-neutral-400 hover:bg-neutral-700 transition-colors">
                        <X size={18} />
                    </button>
                    
                    <img
                        src={tutorialSteps[step].illustration}
                        alt={tutorialSteps[step].title}
                        className="w-full max-w-[200px] h-auto mx-auto mb-5"
                    />

                    <h3 className="text-xl font-bold text-white mb-2">
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
                                <div key={index} className={`h-2 w-2 rounded-full transition-colors ${step === index ? 'bg-orange-500' : 'bg-neutral-600'}`}></div>
                            ))}
                        </div>
                        {step < tutorialSteps.length - 1 ? (
                            <Button onClick={handleNext} className="bg-orange-500 hover:bg-orange-600 text-white">
                                Next <ChevronRight size={20} className="ml-1" />
                            </Button>
                        ) : (
                            <Button onClick={handleGetStarted} className="bg-green-500 hover:bg-green-600 text-white">
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
            case 'Updated': return 'bg-green-900/50 text-green-300 border border-green-500/30';
            case 'Coming Soon': return 'bg-yellow-900/50 text-yellow-300 border border-yellow-500/30';
            case 'On Working': return 'bg-blue-900/50 text-blue-300 border border-blue-500/30';
            case 'New': return 'bg-purple-900/50 text-purple-300 border border-purple-500/30';
            default: return '';
        }
    };

    const OpportunityList = ({ title, data }) => (
        <div>
            <h4 className="font-semibold text-neutral-300 mb-2 px-4">{title}</h4>
            <div className="space-y-1">
                {data.map((item) => (
                    <a href={item.link} key={item.source} target="_blank" rel="noopener noreferrer" className="block p-3 mx-2 rounded-lg hover:bg-neutral-700/60 transition-colors">
                        <p className="font-bold text-sm text-white">{item.source}</p>
                        <p className="text-xs text-neutral-400">{item.focus} - <span className="italic">{item.relevance}</span></p>
                    </a>
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-black flex flex-col font-sans text-white">
            <Analytics />
            <NotificationSound play={playNotificationSound} />
            {showChatTutorial && <ChatTutorialPopup onDismiss={dismissChatTutorial} />}

            {showPopup && (
                <div className="fixed top-5 right-5 z-50 w-[calc(100%-2.5rem)] max-w-md bg-neutral-900/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-neutral-700 animate-fade-in-down">
                    <div className="p-4">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <span className="bg-orange-500 p-2 rounded-lg inline-flex"><Bell className="text-white" size={20} /></span>
                                <div>
                                    <h3 className="font-bold text-white">New Opportunities</h3>
                                    <p className="text-sm text-neutral-400">July 2025 Edition</p>
                                </div>
                            </div>
                            <Button onClick={dismissPopup} variant="ghost" size="icon" className="h-8 w-8 rounded-full text-neutral-400 hover:bg-neutral-700"><X size={18} /></Button>
                        </div>
                        <div className="mt-3 space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                            <OpportunityList title="Latest Hackathons" data={hackathonsData} />
                            <OpportunityList title="Summer 2025 Internships" data={internshipsData} />
                        </div>
                    </div>
                </div>
            )}
            
            <div className={`fixed top-0 right-0 h-full bg-neutral-900 shadow-lg z-50 w-full max-w-sm transform transition-transform duration-300 ${isPanelOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-4 border-b border-neutral-800 flex justify-between items-center sticky top-0 bg-neutral-900/90 backdrop-blur-sm">
                    <h3 className="font-bold text-lg text-white">Notifications</h3>
                    <button onClick={() => setIsPanelOpen(false)} className="p-1.5 rounded-full text-neutral-400 hover:bg-neutral-700"><X size={18} /></button>
                </div>
                <div className="py-4 space-y-6 overflow-y-auto h-[calc(100%-4.5rem)]">
                    <OpportunityList title="Latest Hackathons" data={hackathonsData} />
                    <OpportunityList title="Summer 2025 Internships" data={internshipsData} />
                </div>
            </div>

            {showNotif && (
                <div className="w-full bg-orange-600 text-white text-xs sm:text-sm py-2 px-4 flex items-center justify-center text-center gap-x-3 z-50">
                    <p><strong>Notice:</strong> We've updated the site and our <a href="https://dhrc-tools.vercel.app/" className="underline font-bold hover:text-orange-200 transition-colors">Tools Dashboard</a>.</p>
                    <button onClick={dismissNotif} className="p-1.5 rounded-full hover:bg-orange-700/80 transition-colors flex-shrink-0" aria-label="Dismiss notification"><X size={18} /></button>
                </div>
            )}

            <header className="sticky top-0 w-full border-b-2 border-orange-500 bg-black/80 backdrop-blur-md z-40">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="https://i.ibb.co/PGDSpW4p/Screenshot-2025-07-20-at-3-09-38-AM.png" alt="DHRC Logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
                        <div className="hidden sm:block">
                            <h1 className="text-lg sm:text-2xl font-extrabold text-white">Knowledge & Resource Hub</h1>
                            <p className="text-xs text-neutral-400 font-medium tracking-wider">DATA-HUB & RESOURCE CENTER</p>
                        </div>
                    </Link>
                    <div className="flex items-center gap-1">
                        {/* <ThemeToggler theme={theme} toggleTheme={toggleTheme} /> */}
                        <a href="https://github.com/RishiRohanKalapala/dhrc-bugs-beacon-form/issues/new" target="_blank" rel="noopener noreferrer" aria-label="Report an issue">
                            <Button variant="ghost" size="icon" className="rounded-full text-neutral-400 hover:bg-neutral-800 hover:text-white"><MessageSquare className="h-5 w-5" /></Button>
                        </a>
                        <Button onClick={() => setIsPanelOpen(true)} variant="ghost" size="icon" className="relative rounded-full text-neutral-300 hover:bg-neutral-800 hover:text-white">
                            <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
                            <span className="absolute top-1 right-1 flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span></span>
                        </Button>
                        <Link to="/resume-generator" className="hidden md:block">
                            <Button variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-bold px-4 py-2 rounded-full shadow-sm transition-all transform hover:scale-105">Resume Generator</Button>
                        </Link>
                        <a href="https://dhrc-tools.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <Button className="bg-orange-500 text-white hover:bg-orange-600 font-bold px-3 sm:px-5 py-2 rounded-full shadow-sm transition-all transform hover:scale-105 text-xs sm:text-sm">Sign In</Button>
                        </a>
                    </div>
                </div>
            </header>
            
            <nav className="w-full bg-neutral-900 border-b border-neutral-800 shadow-sm">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1">
                    {navLinks.map((link) => (
                        <Link key={link.title} to={link.path} className="px-3 py-1.5 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-semibold text-neutral-300 hover:bg-orange-500 hover:text-white transition-all duration-200">{link.title}</Link>
                    ))}
                </div>
            </nav>

            <section className="w-full bg-black border-b border-neutral-800">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col md:flex-row items-center gap-2 md:gap-4">
                    <h3 className="text-sm md:text-md font-bold text-neutral-300 flex-shrink-0">Quick Links:</h3>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1">
                        {quickLinks.map((link) => (
                            link.external ? (
                                <a key={link.title} href={link.path} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-medium text-orange-400 hover:text-orange-300 hover:underline transition-colors">{link.title}</a>
                            ) : (
                                <Link key={link.title} to={link.path} className="text-xs sm:text-sm font-medium text-orange-400 hover:text-orange-300 hover:underline transition-colors">{link.title}</Link>
                            )
                        ))}
                    </div>
                </div>
            </section>
            
            <div className="w-full bg-neutral-900 border-y border-neutral-800">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 grid grid-cols-1 md:grid-cols-3 gap-2">
                     <div className="flex items-center justify-center text-center gap-2">
                        <Zap className="h-5 w-5 text-orange-400 flex-shrink-0" />
                        <p className="text-xs sm:text-sm font-semibold text-neutral-300">
                            Explore the Project Vault: Download pre-built projects.
                        </p>
                         <Link to="/student-projects" className="flex-shrink-0">
                            <Button variant="link" className="h-auto p-0 text-xs sm:text-sm font-bold text-orange-400 hover:text-orange-300">
                                Browse <ArrowRight className="ml-1 h-3.5 w-3.5" />
                            </Button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center text-center gap-2 border-x-0 md:border-x border-neutral-800">
                        <MessageSquare className="h-5 w-5 text-teal-400 flex-shrink-0" />
                        <p className="text-xs sm:text-sm font-semibold text-neutral-300">
                            Try our new feature: Chat with your Mates!
                        </p>
                        <Badge className="bg-teal-500 text-white text-[10px] font-bold py-0.5 px-2 rounded-full">BETA</Badge>
                         <Button
                            variant="link"
                            onClick={handleChatFeatureClick}
                            className="flex-shrink-0 h-auto p-0 text-xs sm:text-sm font-bold text-teal-400 hover:text-teal-300"
                        >
                            Learn More
                            <ArrowRight className="ml-1 h-3.5 w-3.5" />
                        </Button>
                    </div>
                    <div className="flex items-center justify-center text-center gap-4">
                        <h2 className="text-sm font-bold text-blue-300">Engage with ChatterBox</h2>
                         <Link to="/chatterbox">
                            <Button className="bg-blue-600 text-white font-bold px-4 py-1.5 rounded-full shadow-md hover:bg-blue-700 transition-all transform hover:scale-105 text-xs">
                                Access Now <ArrowRight className="ml-2 hidden sm:inline-block" size={16} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <main className="flex-1 w-full pt-10 pb-12 sm:pt-12 sm:pb-16">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-12">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Explore Our Resources
                        </h2>
                        <p className="mt-3 text-base sm:text-lg text-neutral-400 max-w-3xl mx-auto">
                            Find everything you need to succeed in your engineering studies and career, from project templates to interview preparation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {resourceCards.map(card => (
                            <Card key={card.title} className="group bg-neutral-900 overflow-hidden rounded-xl border border-neutral-800 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-300 transform hover:-translate-y-1">
                                <CardContent className="p-5 flex flex-col items-center text-center">
                                    {card.status && (
                                        <Badge className={`absolute top-3 right-3 text-xs font-bold py-1 px-2.5 rounded-full ${getBadgeClass(card.status)}`}>
                                            {card.status}
                                        </Badge>
                                    )}
                                    <img src={card.img} alt={`${card.title} icon`} className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-4 transition-transform duration-300 group-hover:scale-110" />
                                    <h3 className="font-bold text-lg text-white mb-2">{card.title}</h3>
                                    <p className="text-neutral-400 text-sm mb-5 flex-grow">{card.description}</p>
                                    <Link to={card.path}>
                                        <Button variant="outline" className="text-orange-400 border-orange-500/50 font-bold hover:bg-orange-500 hover:text-white rounded-full text-sm px-6 py-2 transition-all duration-300">
                                            Explore 
                                            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </main>

            <footer className="bg-neutral-900">
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
                        <div className="md:col-span-1 flex flex-col items-center sm:items-start">
                            <Link to="/" className="flex items-center gap-3 mb-3">
                                <img src="https://i.ibb.co/PGDSpW4p/Screenshot-2025-07-20-at-3-09-38-AM.png" alt="DHRC Logo" className="w-10 h-10 bg-white rounded-full p-0.5" />
                                <span className="text-xl font-extrabold text-white">CKR</span>
                            </Link>
                            <p className="text-neutral-500 text-sm">
                                Your central hub for engineering knowledge, projects, and career resources.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-neutral-200 tracking-wider uppercase mb-4 text-sm">Resources</h3>
                            <ul className="space-y-2.5">
                                <li><Link to="/certificates" className="text-neutral-400 hover:text-orange-400 transition-colors text-sm">Certificates</Link></li>
                                <li><Link to="/projects" className="text-neutral-400 hover:text-orange-400 transition-colors text-sm">Projects</Link></li>
                                <li><Link to="/roadmaps" className="text-neutral-400 hover:text-orange-400 transition-colors text-sm">Roadmaps</Link></li>
                                <li><Link to="/notes" className="text-neutral-400 hover:text-orange-400 transition-colors text-sm">Notes</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-neutral-200 tracking-wider uppercase mb-4 text-sm">Community</h3>
                            <ul className="space-y-2.5">
                                <li><Link to="/student-projects" className="text-neutral-400 hover:text-orange-400 transition-colors text-sm">Student Projects</Link></li>
                                <li><Link to="/events" className="text-neutral-400 hover:text-orange-400 transition-colors text-sm">Events</Link></li>
                                <li><Link to="/chatterbox" className="text-neutral-400 hover:text-orange-400 transition-colors text-sm">ChatterBox</Link></li>
                                <li><Link to="/internships" className="text-neutral-400 hover:text-orange-400 transition-colors text-sm">Internships</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-neutral-200 tracking-wider uppercase mb-4 text-sm">Connect With Us</h3>
                            <div className="flex space-x-4 justify-center sm:justify-start">
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-orange-400 transition-colors"><Github size={22} /></a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-orange-400 transition-colors"><Linkedin size={22} /></a>
                                <a href="#" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-orange-400 transition-colors"><Twitter size={22} /></a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center text-center">
                        <p className="text-sm text-neutral-500 mb-4 sm:mb-0">
                            © {new Date().getFullYear()} CKR - All Rights Reserved.
                        </p>
                        <div className="flex space-x-4 text-sm">
                            <Link to="/terms-of-service" className="text-neutral-500 hover:text-orange-400">Terms of Service</Link>
                            <Link to="/privacy-policy" className="text-neutral-500 hover:text-orange-400">Privacy Policy</Link>
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
