import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Rocket, Users, Code, Palette, Globe, CheckCircle, ExternalLink, Home,
  Lightbulb, Target, Zap, Monitor, Settings, Menu, BrainCircuit, Shuffle, Focus,
  Layers, Smartphone, Sparkles, Sun, Moon
} from "lucide-react";
import { useState, useEffect } from 'react';

// --- DATA (Unchanged) ---
const corePrinciples = [
  { icon: BrainCircuit, title: "AI as Your Collaborator", description: "Shift your mindset from viewing AI as a simple tool to seeing it as a creative partner. It can brainstorm, write boilerplate code, suggest designs, and even debug, freeing you to focus on high-level architecture and user experience." },
  { icon: Shuffle, title: "Embrace Iterative Development", description: "Use AI to rapidly prototype and test ideas. Generate multiple versions of a component or layout, get real-time feedback, and refine your work in cycles. This agile approach leads to better products, faster." },
  { icon: Focus, title: "Focus on the 'What', Not Just the 'How'", description: "Delegate the tedious 'how' of implementation to AI. Clearly define 'what' you want to achieve—the features, the user flow, the design aesthetic—and let AI tools handle much of the syntactical heavy lifting." }
];
const traditionalDevelopment = {
  id: "traditional-development",
  icon: Layers,
  title: "The Traditional Development Path",
  description: "While AI accelerates development, understanding the traditional path provides a powerful foundation. This approach involves manual coding and a deep understanding of core technologies, giving you full control and insight into your web applications.",
  pillars: [
    { title: "HTML, CSS, & JavaScript", description: "The three pillars of the web. HTML structures the content, CSS styles it, and JavaScript adds interactivity." },
    { title: "Frameworks & Libraries", description: "Tools like React, Vue, and Angular provide structured ways to build complex user interfaces efficiently." },
    { title: "Backend & Databases", description: "Server-side logic (Node.js, Python) and databases (SQL, NoSQL) handle data, user accounts, and business logic." },
    { title: "Version Control with Git", description: "Essential for tracking changes, collaborating with others, and managing code history." }
  ]
};
const appDevelopment = [
  { id: "react-native", title: "React Native", icon: Code, description: "Leverage your React knowledge to build native mobile apps for both iOS and Android from a single codebase. Ideal for web developers transitioning to mobile.", points: ["Write once, run anywhere.", "Large ecosystem and community support.", "Hot-reloading for faster development cycles."], tools: ["Expo", "React Navigation", "Redux Toolkit"] },
  { id: "flutter", title: "Flutter", icon: Sparkles, description: "Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Known for its performance and expressive UI.", points: ["High-performance 60/120fps rendering.", "Rich, customizable widget library.", "Excellent documentation and tooling."], tools: ["Dart", "Firebase", "Bloc/Provider"] },
  { id: "native", title: "Native (Kotlin/Swift)", icon: Smartphone, description: "Build apps directly for a specific platform (Android or iOS) for the best possible performance, latest features, and deepest integration with the operating system.", points: ["Unmatched performance and responsiveness.", "Immediate access to new OS features and APIs.", "The ultimate user experience for a specific platform."], tools: ["Android Studio (Kotlin)", "Xcode (Swift)", "Jetpack Compose", "SwiftUI"] }
];
const skillLevels = [
  { id: "beginner", level: "Beginners", icon: Users, description: "For those new to web development, AI can build the foundation for you. You can create clean, single-page websites like a personal bio, a project showcase, or a simple landing page with a contact form. AI helps with code, content, and design.", examples: ["Personal portfolio site", "Hobby showcase page", "Functional contact forms", "Event landing pages"] },
  { id: "intermediate", level: "Intermediate", icon: Code, description: "If you have some coding knowledge, AI becomes a powerful accelerator. Build multi-page websites like blogs or small business sites. AI can help you structure your code, manage state, and integrate with services like payment gateways or CMS platforms.", examples: ["Small business websites", "Personal blog platforms", "Basic e-commerce stores", "Interactive portfolio sites"] },
  { id: "advanced", level: "Advanced", icon: Rocket, description: "For seasoned developers, AI is a force multiplier. Scaffold entire full-stack applications with databases, authentication, and APIs in minutes. Use AI for complex tasks like algorithm optimization, automated testing, and integrating advanced features like AI-powered search.", examples: ["Full-stack web applications", "SaaS starter platforms", "Social media concepts", "AI-native tools and utilities"] }
];
const developmentSteps = [
    { step: 1, id: 'step-1', title: "Planning the Webpage", icon: Target, objective: "Define the webpage's purpose, target audience, content structure, and technical requirements.", importance: "A clear plan ensures the webpage aligns with its goals, user needs, and provides a roadmap for development. AI can help brainstorm and structure this plan.", tools: [ { name: "Grok", url: "https://grok.x.ai/", description: "Brainstorm creative ideas and generate detailed outlines." }, { name: "ChatGPT", url: "https://chat.openai.com/", description: "Generate comprehensive content plans and JSON sitemaps." }, { name: "Claude", url: "https://claude.ai/", description: "Create detailed project specifications and user flows." }, { name: "Dribbble", url: "https://dribbble.com/", description: "Browse thousands of design inspirations and UI patterns." } ], actionSteps: [ "Define your webpage's primary purpose and goals.", "Identify your target audience and their needs.", "Use an AI chat tool to generate a content outline and site structure.", "Plan the user journey and interaction flow.", "Choose your primary AI development tools based on your skill level." ], output: "A comprehensive outline with sections, features, target audience, and technical requirements." },
    { step: 2, id: 'step-2', title: "Designing the User Interface (UI)", icon: Palette, objective: "Create an attractive, user-friendly, and accessible design that enhances user engagement and experience.", importance: "Good design increases user engagement, improves accessibility, and reflects professionalism. AI can now generate production-ready design code.", tools: [ { name: "Lovable", url: "https://lovable.dev/", description: "Create React-based UI with Tailwind CSS via prompts." }, { name: "Vercel v0", url: "https://v0.dev/", description: "Generate modern, responsive React components." }, { name: "Midjourney", url: "https://www.midjourney.com/", description: "Generate mood boards and unique visual assets." }, { name: "Figma", url: "https://www.figma.com/", description: "Professional design tool with AI plugins for automation." } ], actionSteps: [ "Use AI image generators to create a mood board and color palette.", "Sketch a rough wireframe on paper and use a tool like Uizard to digitize it.", "Use a generative UI tool like v0.dev or Lovable to create components from prompts.", "Ensure the design is responsive across different screen sizes.", "Generate or source visual assets and graphics." ], output: "Complete UI mockups or, ideally, AI-generated, production-ready code for your layouts." },
    { step: 3, id: 'step-3', title: "Developing the Frontend", icon: Code, objective: "Build the webpage's structure, styling, and client-side functionality using modern web technologies.", importance: "The frontend defines the user's visual and interactive experience. AI code assistants can write, debug, and refactor code, saving hours.", tools: [ { name: "Replit", url: "https://replit.com/", description: "Browser-based IDE with an AI Agent for real-time coding." }, { name: "GitHub Copilot", url: "https://github.com/features/copilot", description: "The industry-standard AI pair programmer in your editor." }, { name: "Cursor", url: "https://cursor.sh/", description: "An AI-first code editor designed for productivity." }, { name: "CodePen", url: "https://codepen.io/", description: "Test and experiment with frontend snippets." } ], actionSteps: [ "Set up your development environment (local or cloud-based like Replit).", "Use your AI-generated UI code as a starting point.", "Use an AI assistant like Copilot to write JavaScript for interactivity.", "Ask the AI to explain, refactor, or debug code snippets you don't understand.", "Continuously check for performance and accessibility best practices." ], output: "A fully functional frontend with responsive design and interactive elements." },
    { step: 4, id: 'step-4', title: "Adding Backend & Interactivity", icon: Zap, objective: "Implement dynamic features like forms, databases, user accounts, and API integrations.", importance: "Interactivity and data persistence turn a static page into a dynamic application. AI can scaffold entire backends for you.", tools: [ { name: "Bolt.new", url: "https://bolt.new/", description: "Generate complete full-stack applications with AI in minutes." }, { name: "Supabase", url: "https://supabase.com/", description: "Open-source Firebase alternative with DB, Auth, and APIs." }, { name: "Formspree", url: "https://formspree.io/", description: "Easiest way to add a functional email form." }, { name: "Netlify", url: "https://www.netlify.com/", description: "Offers serverless functions and forms for interactivity." } ], actionSteps: [ "For full applications, use a tool like Bolt.new to generate the entire stack.", "For simpler needs, integrate a backend-as-a-service like Supabase or Firebase.", "Implement contact forms using a service like Formspree or Netlify Forms.", "If needed, set up user authentication using your chosen backend service.", "Integrate with external APIs for data, like weather or maps." ], output: "An interactive webpage with functional forms, user accounts, and/or dynamic content." },
    { step: 5, id: 'step-5', title: "Testing and Quality Assurance", icon: Settings, objective: "Ensure the webpage functions correctly across different devices, browsers, and user scenarios.", importance: "Thorough testing prevents bugs and ensures a seamless user experience. AI can automate and accelerate this critical phase.", tools: [ { name: "Testim", url: "https://www.testim.io/", description: "AI-powered automated testing for web applications." }, { name: "BrowserStack", url: "https://www.browserstack.com/", description: "Test across 3000+ real devices and browsers." }, { name: "Lighthouse", url: "https://developers.google.com/web/tools/lighthouse", description: "Google's tool for performance & accessibility auditing." }, { name: "GitHub Copilot", url: "https://github.com/features/copilot", description: "Can write unit tests and end-to-end tests for you." } ], actionSteps: [ "Use your AI assistant to generate unit tests for your functions.", "Perform cross-browser testing using a service like BrowserStack.", "Run Lighthouse audits to check for performance, SEO, and accessibility issues.", "Manually test all user flows, such as sign-ups and form submissions.", "Use a tool like Responsively.app to check layouts on many devices at once." ], output: "A thoroughly tested, cross-browser compatible, and accessible webpage." },
    { step: 6, id: 'step-6', title: "Deployment and Hosting", icon: Globe, objective: "Make the webpage accessible to users worldwide through reliable hosting services.", importance: "Proper deployment ensures your website is available 24/7 with good performance and security. Modern platforms make this a one-click process.", tools: [ { name: "Vercel", url: "https://vercel.com/", description: "Optimized for modern frontend frameworks with automatic CI/CD." }, { name: "Netlify", url: "https://www.netlify.com/", description: "Simple drag-and-drop or Git-based deployment with CDN." }, { name: "GitHub Pages", url: "https://pages.github.com/", description: "Free hosting for static sites from your GitHub repository." }, { name: "Cloudflare Pages", url: "https://pages.cloudflare.com/", description: "Fast global deployment with built-in security features." } ], actionSteps: [ "Choose a hosting service that fits your project's needs.", "Connect your GitHub repository for continuous deployment.", "Set up your custom domain name and configure DNS records.", "Ensure an SSL certificate is automatically applied for HTTPS.", "Monitor your live deployment for uptime and performance." ], output: "A live webpage accessible via a custom domain with SSL security." }
];
const additionalResources = [
  { category: "Learning Platforms", tools: [{ name: "freeCodeCamp", url: "https://www.freecodecamp.org/" }, { name: "Codecademy", url: "https://www.codecademy.com/" }, { name: "Coursera", url: "https://www.coursera.org/" }] },
  { category: "Design Resources", tools: [{ name: "Google Fonts", url: "https://fonts.google.com/" }, { name: "Coolors", url: "https://coolors.co/" }, { name: "Feather Icons", url: "https://feathericons.com/" }] },
  { category: "Developer Tools", tools: [{ name: "Git", url: "https://git-scm.com/" }, { name: "Prettier", url: "https://prettier.io/" }, { name: "ESLint", url: "https://eslint.org/" }] }
];
const tocLinks = [
  { href: "#introduction", title: "Introduction" },
  { href: "#core-principles", title: "Core Principles" },
  { href: "#traditional-development", title: "Traditional Path" },
  { href: "#what-you-can-create", title: "AI for Web" },
  { href: "#development-guide", title: "Web Dev Guide" },
  ...developmentSteps.map(step => ({ href: `#step-${step.step}`, title: `${step.step}. ${step.title}`, isSubItem: true })),
  { href: "#app-development", title: "Mobile App Dev" },
  { href: "#call-to-action", title: "Start Building" },
];

// Main Component
const AnyoneCanDevelop = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('beginner');
  const [activeAppDevTab, setActiveAppDevTab] = useState('react-native');
  const [theme, setTheme] = useState('light');

  // NEW: Effect for initializing and managing theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Helper component for the Table of Contents
  const TableOfContents = () => (
    <div className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
      <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">Contents</h3>
      <nav>
        <ul className="space-y-2">
          {tocLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`block font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm ${link.isSubItem ? 'pl-4 border-l-2 ml-1 dark:border-slate-600' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        h1, h2, h3, .font-serif { font-family: 'Lora', serif; }
        html { scroll-behavior: smooth; }
        .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      <div className="bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
        <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Code className="h-6 w-6 text-blue-600" />
              <span className="font-semibold text-slate-900 dark:text-slate-100">Anyone Can Develop</span>
            </Link>
            <div className="flex items-center gap-2">
               {/* NEW: Theme Toggler Button */}
              <Button onClick={toggleTheme} variant="ghost" size="icon" aria-label="Toggle Theme">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
              <Link to="/" aria-label="Back to Home">
                <Button variant="ghost" size="icon">
                  <Home className="h-5 w-5" />
                </Button>
              </Link>
              <div className="lg:hidden">
                <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!isSidebarOpen)}>
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-12">
            <main className="flex-1 py-8 lg:py-12 min-w-0">
              <section className="mb-16">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 mb-4">An AI-Powered Guide</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-6">
                  Develop with Intelligence
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl">
                  A calm, step-by-step guide to building professional websites and apps with artificial intelligence—no matter your skill level.
                </p>
              </section>

              <div id="introduction" className="prose prose-slate dark:prose-invert max-w-none lg:prose-lg prose-headings:font-serif prose-headings:tracking-tight mb-16 scroll-mt-24">
                <h2 className="border-b dark:border-slate-700 pb-2">Introduction</h2>
                <p>
                  The world of software development is undergoing a paradigm shift. With the rise of powerful AI tools, the ability to create beautiful, functional websites and applications is no longer limited to seasoned coders. This guide serves as a comprehensive roadmap, demystifying the process from start to finish. We'll explore how to leverage AI as a creative partner to streamline planning, design, coding, testing, and deployment, empowering you to bring your digital ideas to life with unprecedented speed and ease.
                </p>
              </div>

              <section id="core-principles" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold font-serif text-slate-900 dark:text-slate-100 border-b dark:border-slate-700 pb-3 mb-6">Core Principles of AI Development</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {corePrinciples.map((principle, index) => {
                    const IconComponent = principle.icon;
                    return (
                      <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-2">{principle.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{principle.description}</p>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section id="traditional-development" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold font-serif text-slate-900 dark:text-slate-100 border-b dark:border-slate-700 pb-3 mb-6">{traditionalDevelopment.title}</h2>
                <div className="flex flex-col md:flex-row gap-8 bg-white dark:bg-slate-800 p-8 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex-1">
                    <p className="text-slate-600 dark:text-slate-400 mb-6">{traditionalDevelopment.description}</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {traditionalDevelopment.pillars.map(pillar => (
                        <div key={pillar.title} className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                          <h4 className="font-semibold text-slate-800 dark:text-slate-200">{pillar.title}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{pillar.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <traditionalDevelopment.icon className="w-24 h-24 text-blue-200 dark:text-blue-900/50" />
                  </div>
                </div>
              </section>

              <section id="what-you-can-create" className="mb-16 scroll-mt-24">
                  <h2 className="text-3xl font-bold font-serif text-slate-900 dark:text-slate-100 border-b dark:border-slate-700 pb-3 mb-6">What You Can Create with AI for Web</h2>
                  <div className="bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 rounded-lg">
                      <div className="flex space-x-1 sm:space-x-2 border-b dark:border-slate-700">
                          {skillLevels.map(level => (
                              <button
                                  key={level.id}
                                  onClick={() => setActiveTab(level.id)}
                                  className={`px-3 sm:px-4 py-2 text-sm font-semibold rounded-t-md transition-colors w-full ${activeTab === level.id ? 'bg-blue-500 text-white' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                              >
                                  {level.level}
                              </button>
                          ))}
                      </div>
                      <div className="p-4 min-h-[280px]">
                          {skillLevels.map(level => {
                              const IconComponent = level.icon;
                              return (
                                  <div key={level.id} className={activeTab === level.id ? 'block animate-fade-in' : 'hidden'}>
                                      <div className="flex flex-col md:flex-row items-start gap-6">
                                          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                              <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                          </div>
                                          <div className="flex-1">
                                              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 font-serif mb-2">{level.level}</h3>
                                              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{level.description}</p>
                                              <div className="space-y-2">
                                                  {level.examples.map((example, idx) => (
                                                      <div key={idx} className="flex items-center gap-2">
                                                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0"/>
                                                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{example}</span>
                                                      </div>
                                                  ))}
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              );
                          })}
                      </div>
                  </div>
              </section>

              <section id="development-guide" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold font-serif text-slate-900 dark:text-slate-100 border-b dark:border-slate-700 pb-3 mb-6">Comprehensive Web Development Guide</h2>
                <div className="space-y-12">
                  {developmentSteps.map((step) => {
                    return (
                      <div id={step.id} key={step.step} className="scroll-mt-24">
                        <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm">
                          <CardContent className="p-6 md:p-8">
                            <div className="flex items-start gap-6 mb-8">
                              <div className="flex-1">
                                <Badge className="mb-3 bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200">Step {step.step}</Badge>
                                <h3 className="text-2xl font-bold font-serif text-slate-900 dark:text-slate-100 mb-2">{step.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 max-w-3xl">{step.objective}</p>
                                <div className="bg-slate-100 dark:bg-slate-800/50 border-l-4 border-blue-500 rounded-r-lg p-4">
                                  <p className="text-sm text-slate-800 dark:text-slate-300"><strong>Why It Matters:</strong> {step.importance}</p>
                                </div>
                              </div>
                            </div>
                            
                            <div className="space-y-8">
                              <div>
                                 <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-4">Recommended AI Tools:</h4>
                                 <div className="grid sm:grid-cols-2 gap-4">
                                    {step.tools.map((tool, index) => (
                                        <a href={tool.url} target="_blank" rel="noopener noreferrer" key={index} 
                                           className="block bg-white dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all group">
                                            <div className="flex items-center justify-between mb-2">
                                                <h5 className="font-semibold text-slate-900 dark:text-slate-100">{tool.name}</h5>
                                                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                                            </div>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">{tool.description}</p>
                                        </a>
                                    ))}
                                 </div>
                              </div>

                              <div>
                                <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">Action Steps:</h4>
                                <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                                  <ol className="list-decimal list-inside space-y-3">
                                    {step.actionSteps.map((action, index) => (
                                      <li key={index} className="text-sm text-slate-700 dark:text-slate-300">{action}</li>
                                    ))}
                                  </ol>
                                </div>
                              </div>

                              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-lg p-4">
                                  <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2 flex items-center">
                                      <CheckCircle className="w-5 h-5 mr-2" />
                                      Expected Output
                                  </h4>
                                  <p className="text-green-700 dark:text-green-400 text-sm">{step.output}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section id="app-development" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold font-serif text-slate-900 dark:text-slate-100 border-b dark:border-slate-700 pb-3 mb-6">Beyond the Browser: Mobile App Development</h2>
                <div className="bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <div className="flex space-x-1 sm:space-x-2 border-b dark:border-slate-700">
                        {appDevelopment.map(tech => (
                            <button
                                key={tech.id}
                                onClick={() => setActiveAppDevTab(tech.id)}
                                className={`px-3 sm:px-4 py-2 text-sm font-semibold rounded-t-md transition-colors w-full ${activeAppDevTab === tech.id ? 'bg-slate-800 text-white dark:bg-slate-600' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
                            >
                                {tech.title}
                            </button>
                        ))}
                    </div>
                    <div className="p-4 min-h-[300px]">
                      {appDevelopment.map(tech => {
                        const IconComponent = tech.icon;
                        return (
                          <div key={tech.id} className={activeAppDevTab === tech.id ? 'block animate-fade-in' : 'hidden'}>
                            <div className="flex flex-col md:flex-row items-start gap-6">
                              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                  <IconComponent className="w-8 h-8 text-slate-700 dark:text-slate-300" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 font-serif mb-2">{tech.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{tech.description}</p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-semibold text-sm mb-2 text-slate-800 dark:text-slate-200">Key Advantages:</h4>
                                        <ul className="space-y-2">
                                            {tech.points.map((point, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"/>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-sm mb-2 text-slate-800 dark:text-slate-200">Core Tools:</h4>
                                        <ul className="space-y-2">
                                            {tech.tools.map((tool, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                                    <Zap className="w-4 h-4 text-blue-500 flex-shrink-0"/>
                                                    <span>{tool}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                </div>
              </section>

              <section id="call-to-action" className="scroll-mt-24">
                <Card className="bg-blue-600 dark:bg-blue-700 text-white overflow-hidden">
                  <CardContent className="p-8 lg:p-12 text-center relative">
                    <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/10 rounded-full"></div>
                    <div className="absolute -top-10 -left-16 w-36 h-36 bg-white/10 rounded-full"></div>
                    <div className="relative z-10">
                      <Rocket className="w-12 h-12 mx-auto mb-4" />
                      <h2 className="text-3xl font-bold font-serif mb-4">Ready to Start Building?</h2>
                      <p className="text-blue-100 dark:text-blue-200 mb-6 max-w-2xl mx-auto">
                        The tools and knowledge are at your fingertips. Begin your development journey today and transform your ideas into reality.
                      </p>
                      <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100" asChild>
                          <a href="https://v0.dev/" target="_blank" rel="noopener noreferrer">
                            Explore Vercel v0 <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/50 hover:bg-white/10 text-white" asChild>
                          <a href="https://replit.com/ai" target="_blank" rel="noopener noreferrer">
                            Try Replit AI <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </main>

            <aside className="hidden lg:block w-64 xl:w-72 flex-shrink-0 py-12">
              <div className="sticky top-24 space-y-6">
                <TableOfContents />
                <div>
                  <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-3 p-4">Quick Resources</h3>
                  <div className="space-y-4">
                      {additionalResources.map(category => (
                          <div key={category.category} className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                              <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{category.category}</h4>
                              <div className="space-y-2">
                                  {category.tools.map(tool => (
                                      <a href={tool.url} target="_blank" rel="noopener noreferrer" key={tool.name} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                          <ExternalLink className="w-3 h-3" /> {tool.name}
                                      </a>
                                  ))}
                              </div>
                          </div>
                      ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {isSidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/40" onClick={() => setSidebarOpen(false)}>
            <div className="absolute top-0 right-0 h-full bg-slate-50 dark:bg-slate-900 w-80 shadow-xl p-6 overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="sticky top-0 bg-slate-50 dark:bg-slate-900 -mt-6 -mx-6 mb-4 px-6 pt-6 pb-4 border-b dark:border-slate-800">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200">Navigation</h3>
              </div>
              <TableOfContents />
              <div className="mt-6 border-t dark:border-slate-800 pt-6">
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">Quick Resources</h3>
                <div className="space-y-4">
                  {additionalResources.map(category => (
                    <div key={category.category} className="p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">{category.category}</h4>
                      <div className="space-y-2">
                        {category.tools.map(tool => (
                          <a href={tool.url} target="_blank" rel="noopener noreferrer" key={tool.name} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <ExternalLink className="w-3 h-3" /> {tool.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AnyoneCanDevelop;
