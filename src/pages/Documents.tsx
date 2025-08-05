import React, { useRef, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, List, PlayCircle, Users, ExternalLink, Code, Server, Database, Cloud, Smartphone, BrainCircuit, ArrowUp } from "lucide-react";

// --- SVG Logo Components ---
const ReactLogo = (props) => <svg {...props} viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>;
const VueLogo = (props) => <svg {...props} viewBox="0 0 256 221"><path fill="#42b883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z"/><path fill="#35495e" d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z"/></svg>;
const AngularLogo = (props) => <svg {...props} viewBox="0 0 250 250"><polygon fill="#DD0031" points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2"/><polygon fill="#C3002F" points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2"/><path fill="#FFFFFF" d="M125,52.1L66.8,182.6h0h21.7h0l11.7-29.2h49.4l11.7,29.2h0h21.7h0L125,52.1L125,52.1L125,52.1L125,52.1L125,52.1z M142,135.4H108l17-40.9L142,135.4z"/></svg>;
const NodeLogo = (props) => <svg {...props} viewBox="0 0 24 24"><path fill="#339933" d="M22.122 10.33a.48.48 0 0 0-.272-.638l-2.03-1a.48.48 0 0 0-.584.19l-1.018 1.963a.48.48 0 0 0 .19.66l1.24.64a.48.48 0 0 0 .66-.19l1.02-1.962a.48.48 0 0 0-.2-.663zM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.874 15.1a.48.48 0 0 1-.68.17l-2.12-1.31a.48.48 0 0 1-.25-.43v-2.6a.48.48 0 0 1 .25-.43l2.12-1.31a.48.48 0 0 1 .68.17l1.06 1.83a.48.48 0 0 1-.17.68L14.7 13.5a.48.48 0 0 1-.58 0l-1.24-.76a.48.48 0 0 0-.58 0v1.54a.48.48 0 0 0 .29.45l1.24.76a.48.48 0 0 0 .58 0l1.24-.76a.48.48 0 0 1 .68.17l.8 1.38a.48.48 0 0 1-.17.68l-1.06 1.84a.48.48 0 0 1-.51.18zM9.516 13.9a.48.48 0 0 1-.68-.17l-1.06-1.83a.48.48 0 0 1 .17-.68l1.24-.76a.48.48 0 0 1 .58 0l1.24.76a.48.48 0 0 0 .58 0V9.82a.48.48 0 0 0-.29-.45L9.9 8.61a.48.48 0 0 0-.58 0l-1.24.76a.48.48 0 0 1-.68-.17L6.02 7.36a.48.48 0 0 1 .17-.68l2.12-1.3a.48.48 0 0 1 .68.17l1.06 1.83a.48.48 0 0 1-.17.68l-1.24.76a.48.48 0 0 1-.58 0l-1.24-.76a.48.48 0 0 0-.58 0v3.86a.48.48 0 0 0 .29.45l1.24.76a.48.48 0 0 0 .58 0l1.24-.76a.48.48 0 0 1 .68.17l1.06 1.83a.48.48 0 0 1-.17.68l-2.12 1.31a.48.48 0 0 1-.68-.17L9.516 13.9z"/></svg>;
const DockerLogo = (props) => <svg {...props} viewBox="0 0 24 24"><path fill="#2496ED" d="M22.152 6.33L15.36 2.3a4.01 4.01 0 00-3.996-.004L4.232 6.326a4.01 4.01 0 00-2.228 3.48v5.392a4.01 4.01 0 002.228 3.48l7.136 4.03a4.01 4.01 0 003.996 0l7.136-4.03a4.01 4.01 0 002.228-3.48V9.81a4.01 4.01 0 00-2.228-3.48zM7.5 12.33v-1.5h1.5v1.5zm3 0v-1.5h1.5v1.5zm-3-3v-1.5h1.5v1.5zm3 0v-1.5h1.5v1.5zm-3-3v-1.5h1.5v1.5zm3 0v-1.5h1.5v1.5zm3 3v-1.5h1.5v1.5zm3 0v-1.5h1.5v1.5zm-6 3v-1.5h1.5v1.5zm3 0v-1.5h1.5v1.5zm-1.12 4.414c-2.348 1.32-5.118.06-6.19-2.48a3.75 3.75 0 012.48-6.19c2.348-1.32 5.118-.06 6.19 2.48a3.75 3.75 0 01-2.48 6.19z"/></svg>;
const AwsLogo = (props) => <svg {...props} viewBox="0 0 24 24"><path fill="#FF9900" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.2 15.6c-.4.4-.9.6-1.4.6-.5 0-1-.2-1.4-.6-.8-.8-.8-2 0-2.8l3.1-3.1-3-3.1c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0l3 3.1 3.1-3.1c.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8l-3.1 3-3 3.1z"/></svg>;
const PythonLogo = (props) => <svg {...props} viewBox="0 0 24 24"><g fill="#3776AB"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zM9.5 5h5v2.5a2.5 2.5 0 01-5 0V5zm-2 5a2.5 2.5 0 012.5-2.5h2.5V10h-5zm0 5v-2.5h10V15a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 017.5 15z"/></g><g fill="#FFD43B"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zM14.5 19h-5v-2.5a2.5 2.5 0 015 0V19zm2-5a2.5 2.5 0 01-2.5 2.5h-2.5V14h5zm0-5v2.5h-10V9a2.5 2.5 0 012.5-2.5h5A2.5 2.5 0 0116.5 9z"/></g></svg>;

// --- Main Data Structure ---
const docCategories = [
    {
        category: "Frontend Frameworks",
        refId: "frontend-frameworks",
        icon: Code,
        technologies: [
            { name: "React", logo: ReactLogo, description: "A JavaScript library for building user interfaces.", links: [{ type: "Official Docs", url: "https://react.dev/", icon: BookOpen }, { type: "Tutorial", url: "https://react.dev/learn", icon: PlayCircle }, { type: "API Reference", url: "https://react.dev/reference/react", icon: List }] },
            { name: "Vue.js", logo: VueLogo, description: "The progressive JavaScript framework for building web UIs.", links: [{ type: "Official Docs", url: "https://vuejs.org/", icon: BookOpen }, { type: "Tutorial", url: "https://vuejs.org/guide/introduction.html", icon: PlayCircle }, { type: "API Reference", url: "https://vuejs.org/api/", icon: List }] },
            { name: "Angular", logo: AngularLogo, description: "A platform for building mobile and desktop web applications.", links: [{ type: "Official Docs", url: "https://angular.io/", icon: BookOpen }, { type: "Tutorial", url: "https://angular.io/tutorial", icon: PlayCircle }, { type: "API Reference", url: "https://angular.io/api", icon: List }] },
        ]
    },
    {
        category: "Backend Technologies",
        refId: "backend-tech",
        icon: Server,
        technologies: [
            { name: "Node.js", logo: NodeLogo, description: "An asynchronous event-driven JavaScript runtime.", links: [{ type: "Official Docs", url: "https://nodejs.org/en/docs", icon: BookOpen }, { type: "Guides", url: "https://nodejs.org/en/docs/guides", icon: PlayCircle }, { type: "API Reference", url: "https://nodejs.org/api/", icon: List }] },
            { name: "Python", logo: PythonLogo, description: "A versatile language for web dev, data science, and more.", links: [{ type: "Official Docs", url: "https://docs.python.org/3/", icon: BookOpen }, { type: "Tutorial", url: "https://docs.python.org/3/tutorial/index.html", icon: PlayCircle }, { type: "Community", url: "https://www.python.org/community/", icon: Users }] },
        ]
    },
    // Add Databases, DevOps & Cloud, Mobile, AI/ML categories here...
];

// --- *** FIX: DEFINING THE CUSTOM HOOK *** ---
const useIntersectionObserver = (setActiveId) => {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            if (visibleSection) {
                setActiveId(visibleSection.id);
            }
        }, { rootMargin: '-20% 0px -80% 0px' }); // Adjust rootMargin to trigger when the section is in the middle of the viewport

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [setActiveId]);

    return observer;
};

const DocumentationPage = () => {
    const [activeId, setActiveId] = useState(docCategories[0].refId);
    const [showBackToTop, setShowBackToTop] = useState(false);
    
    const sectionRefs = docCategories.reduce((acc, value) => {
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
                    <Home className="w-4 h-4" /> Home
                </Link>
                <span>/</span>
                <span className="text-white font-medium">Documentation</span>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white font-sans">
            {/* Hero Section with Gradient */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/5 to-emerald-600/10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.08),transparent_70%)]"></div>
                
                <main className="relative flex-1 w-full pt-16 pb-20">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-2 rounded-full border border-blue-500/30 mb-6">
                            <span className="text-blue-400 text-sm font-medium">Technical Resources</span>
                        </div>
                        <h2 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent mb-6 leading-tight">
                            Documentation Hub
                        </h2>
                        <p className="text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
                            Your comprehensive resource center for official documentation, tutorials, and API references across essential development technologies.
                        </p>
                    </div>
                </main>
            </div>

            <Breadcrumb />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <aside className="md:col-span-1 h-fit md:sticky top-24">
                        <div className="bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 backdrop-blur-sm p-6 rounded-xl border border-neutral-700/50 shadow-xl">
                            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">Categories</h3>
                            <div className="space-y-3">
                                {docCategories.map(cat => (
                                    <button key={cat.refId} onClick={() => handleNav(sectionRefs[cat.refId])} className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-3 group ${
                                        activeId === cat.refId 
                                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                                            : 'text-neutral-300 hover:bg-gradient-to-r hover:from-neutral-800/80 hover:to-neutral-700/80 hover:text-white hover:shadow-lg'
                                    }`}>
                                        <cat.icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
                                            activeId === cat.refId ? 'text-white' : 'text-neutral-400 group-hover:text-blue-400'
                                        }`} />
                                        {cat.category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    <main className="md:col-span-3 space-y-20">
                        {docCategories.map((category) => (
                            <section key={category.refId} id={category.refId} ref={sectionRefs[category.refId]} className="scroll-mt-24">
                                <div className="flex items-center gap-6 mb-8">
                                    <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                                        <category.icon className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                                        {category.category}
                                    </h2>
                                </div>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {category.technologies.map(tech => (
                                        <Card key={tech.name} className="bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-sm border border-neutral-700/50 rounded-xl shadow-xl transition-all duration-500 hover:border-blue-400/60 hover:from-neutral-800/90 hover:to-neutral-800/60 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
                                            <CardContent className="p-6">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                                                        <tech.logo className="w-10 h-10" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-white mb-1">{tech.name}</h3>
                                                        <p className="text-sm text-neutral-400">{tech.description}</p>
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    {tech.links.map(link => (
                                                        <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.type} className="group flex items-center justify-between p-3 bg-gradient-to-r from-neutral-800/50 to-neutral-700/50 rounded-lg hover:from-neutral-700/70 hover:to-neutral-600/70 transition-all duration-300 border border-neutral-700/30">
                                                            <div className="flex items-center gap-3">
                                                                <link.icon className="w-4 h-4 text-neutral-400 group-hover:text-blue-400 transition-colors duration-300" />
                                                                <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors duration-300">{link.type}</span>
                                                            </div>
                                                            <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 transition-colors duration-300" />
                                                        </a>
                                                    ))}
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

            {showBackToTop && (
                <Button onClick={scrollToTop} className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white shadow-2xl shadow-blue-500/30 transition-all duration-300 ease-in-out hover:from-blue-500 hover:to-purple-500 hover:scale-110 hover:shadow-blue-500/50 backdrop-blur-sm border border-blue-400/30" aria-label="Go to top">
                    <ArrowUp className="h-6 w-6" />
                </Button>
            )}
        </div>
    );
};

export default DocumentationPage;
