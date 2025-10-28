import React, { useState, useMemo, useRef } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle, Clock, Code, Brain, Target, BookOpen, Lightbulb, Trophy, Github, ExternalLink, Server, Bot } from "lucide-react";
import clsx from 'clsx';
import { Analytics } from '@vercel/analytics/react';

// --- ALL ORIGINAL DATA IS PRESERVED ---
const dsaRoadmap = [
    { month: "Month 1", title: "Foundations & Arrays", topics: [{ id: "dsa-1-1", name: "Big O Notation & Complexity Analysis", hours: "8-10", difficulty: "Beginner" }, { id: "dsa-1-2", name: "Arrays & Two Pointers Technique", hours: "15-20", difficulty: "Beginner" }, { id: "dsa-1-3", name: "Sliding Window Problems", hours: "10-15", difficulty: "Beginner" }, { id: "dsa-1-4", name: "Basic Sorting Algorithms", hours: "8-12", difficulty: "Beginner" }], projects: ["Implement sorting visualizer", "Array manipulation exercises"], goals: "Master basic array operations and understand time/space complexity" },
    { month: "Month 2", title: "Strings & Hashing", topics: [{ id: "dsa-2-1", name: "String Manipulation & Pattern Matching", hours: "12-15", difficulty: "Beginner" }, { id: "dsa-2-2", name: "Hash Tables & Hash Maps", hours: "10-12", difficulty: "Intermediate" }, { id: "dsa-2-3", name: "Character Frequency Problems", hours: "8-10", difficulty: "Beginner" }, { id: "dsa-2-4", name: "Anagram & Palindrome Problems", hours: "6-8", difficulty: "Beginner" }], projects: ["Build a word frequency counter", "Implement custom hash table"], goals: "Master string algorithms and hash-based problem solving" },
    { month: "Month 3", title: "Linked Lists & Stacks/Queues", topics: [{ id: "dsa-3-1", name: "Singly & Doubly Linked Lists", hours: "15-18", difficulty: "Intermediate" }, { id: "dsa-3-2", name: "Stack Operations & Applications", hours: "10-12", difficulty: "Beginner" }, { id: "dsa-3-3", name: "Queue & Deque Operations", hours: "8-10", difficulty: "Beginner" }, { id: "dsa-3-4", name: "Linked List Reversal & Cycles", hours: "12-15", difficulty: "Intermediate" }], projects: ["Implement expression evaluator", "Build undo/redo functionality"], goals: "Master linear data structures and their applications" },
    { month: "Month 4", title: "Trees & Binary Search Trees", topics: [{ id: "dsa-4-1", name: "Binary Trees & Tree Traversals", hours: "15-20", difficulty: "Intermediate" }, { id: "dsa-4-2", name: "Binary Search Trees (BST)", hours: "12-15", difficulty: "Intermediate" }, { id: "dsa-4-3", name: "Tree Height & Depth Problems", hours: "8-10", difficulty: "Intermediate" }, { id: "dsa-4-4", name: "Lowest Common Ancestor", hours: "10-12", difficulty: "Intermediate" }], projects: ["Build a file system tree", "Implement autocomplete with trie"], goals: "Master tree data structures and recursive thinking" },
    { month: "Month 5", title: "Heaps & Priority Queues", topics: [{ id: "dsa-5-1", name: "Min/Max Heaps Implementation", hours: "12-15", difficulty: "Intermediate" }, { id: "dsa-5-2", name: "Priority Queue Applications", hours: "10-12", difficulty: "Intermediate" }, { id: "dsa-5-3", name: "Heap Sort Algorithm", hours: "6-8", difficulty: "Intermediate" }, { id: "dsa-5-4", name: "K-way Merge Problems", hours: "8-10", difficulty: "Advanced" }], projects: ["Build task scheduler", "Implement Dijkstra's algorithm"], goals: "Master heap data structure and priority-based algorithms" },
    { month: "Month 6", title: "Graphs & Advanced Algorithms", topics: [{ id: "dsa-6-1", name: "Graph Representation & Traversals", hours: "15-18", difficulty: "Advanced" }, { id: "dsa-6-2", name: "BFS & DFS Applications", hours: "12-15", difficulty: "Advanced" }, { id: "dsa-6-3", name: "Shortest Path Algorithms", hours: "15-20", difficulty: "Advanced" }, { id: "dsa-6-4", name: "Topological Sort & Cycle Detection", hours: "10-12", difficulty: "Advanced" }], projects: ["Build social network analyzer", "Implement GPS route finder"], goals: "Master graph algorithms and complex problem solving" },
    { month: "Month 7", title: "Dynamic Programming", topics: [{ id: "dsa-7-1", name: "1D Dynamic Programming", hours: "15-20", difficulty: "Advanced" }, { id: "dsa-7-2", name: "2D Dynamic Programming", hours: "18-25", difficulty: "Advanced" }, { id: "dsa-7-3", name: "Knapsack Problems", hours: "10-12", difficulty: "Advanced" }, { id: "dsa-7-4", name: "String DP Problems", hours: "12-15", difficulty: "Advanced" }], projects: ["Build optimal strategy game", "Implement text similarity checker"], goals: "Master dynamic programming and optimization techniques" },
    { month: "Month 8", title: "Advanced Topics & System Design", topics: [{ id: "dsa-8-1", name: "Tries & String Algorithms", hours: "10-12", difficulty: "Advanced" }, { id: "dsa-8-2", name: "Union Find (Disjoint Set)", hours: "8-10", difficulty: "Advanced" }, { id: "dsa-8-3", name: "Bit Manipulation", hours: "8-10", difficulty: "Intermediate" }, { id: "dsa-8-4", name: "System Design Basics", hours: "15-20", difficulty: "Advanced" }], projects: ["Build distributed cache", "Design URL shortener"], goals: "Master advanced data structures and system design principles" }
];
const webDevRoadmap = [
    { month: "Month 1", title: "HTML & CSS Fundamentals", topics: [{ id: "web-1-1", name: "HTML5 Semantic Elements", hours: "10-12", difficulty: "Beginner" }, { id: "web-1-2", name: "CSS3 & Flexbox", hours: "15-18", difficulty: "Beginner" }, { id: "web-1-3", name: "CSS Grid Layout", hours: "12-15", difficulty: "Beginner" }, { id: "web-1-4", name: "Responsive Design Principles", hours: "10-12", difficulty: "Beginner" }], projects: ["Build responsive portfolio website", "Create CSS art project"], goals: "Master HTML structure and CSS styling fundamentals" },
    { month: "Month 2", title: "JavaScript Fundamentals", topics: [{ id: "web-2-1", name: "ES6+ Features & Syntax", hours: "15-20", difficulty: "Beginner" }, { id: "web-2-2", name: "DOM Manipulation", hours: "12-15", difficulty: "Beginner" }, { id: "web-2-3", name: "Event Handling", hours: "8-10", difficulty: "Beginner" }, { id: "web-2-4", name: "Async JavaScript & Promises", hours: "12-15", difficulty: "Intermediate" }], projects: ["Interactive calculator", "Todo list application"], goals: "Master JavaScript fundamentals and DOM interactions" },
    { month: "Month 3", title: "Advanced JavaScript & APIs", topics: [{ id: "web-3-1", name: "Fetch API & AJAX", hours: "10-12", difficulty: "Intermediate" }, { id: "web-3-2", name: "Local Storage & Session Storage", hours: "6-8", difficulty: "Beginner" }, { id: "web-3-3", name: "Error Handling & Debugging", hours: "8-10", difficulty: "Intermediate" }, { id: "web-3-4", name: "Module Systems (ES6 Modules)", hours: "8-10", difficulty: "Intermediate" }], projects: ["Weather app with API", "Movie search application"], goals: "Master API integration and advanced JavaScript concepts" },
    { month: "Month 4", title: "React.js Fundamentals", topics: [{ id: "web-4-1", name: "React Components & JSX", hours: "15-18", difficulty: "Intermediate" }, { id: "web-4-2", name: "Props & State Management", hours: "12-15", difficulty: "Intermediate" }, { id: "web-4-3", name: "Event Handling in React", hours: "8-10", difficulty: "Intermediate" }, { id: "web-4-4", name: "React Hooks (useState, useEffect)", hours: "15-20", difficulty: "Intermediate" }], projects: ["React todo app", "Component library"], goals: "Master React fundamentals and component-based architecture" },
    { month: "Month 5", title: "Advanced React & State Management", topics: [{ id: "web-5-1", name: "Custom Hooks", hours: "10-12", difficulty: "Advanced" }, { id: "web-5-2", name: "Context API", hours: "8-10", difficulty: "Intermediate" }, { id: "web-5-3", name: "React Router", hours: "10-12", difficulty: "Intermediate" }, { id: "web-5-4", name: "Performance Optimization", hours: "12-15", difficulty: "Advanced" }], projects: ["Multi-page React app", "E-commerce frontend"], goals: "Master advanced React patterns and performance optimization" },
    { month: "Month 6", title: "Backend Development - Node.js", topics: [{ id: "web-6-1", name: "Node.js Fundamentals", hours: "12-15", difficulty: "Intermediate" }, { id: "web-6-2", name: "Express.js Framework", hours: "15-18", difficulty: "Intermediate" }, { id: "web-6-3", name: "RESTful API Design", hours: "12-15", difficulty: "Intermediate" }, { id: "web-6-4", name: "Middleware & Authentication", hours: "15-20", difficulty: "Advanced" }], projects: ["RESTful API server", "Authentication system"], goals: "Master backend development and API creation" },
    { month: "Month 7", title: "Database & Full Stack Integration", topics: [{ id: "web-7-1", name: "MongoDB & Mongoose", hours: "12-15", difficulty: "Intermediate" }, { id: "web-7-2", name: "SQL & PostgreSQL", hours: "15-18", difficulty: "Intermediate" }, { id: "web-7-3", name: "Database Design & Relationships", hours: "10-12", difficulty: "Intermediate" }, { id: "web-7-4", name: "Full Stack CRUD Operations", hours: "15-20", difficulty: "Advanced" }], projects: ["Full stack blog platform", "Social media clone"], goals: "Master database integration and full stack development" },
    { month: "Month 8", title: "DevOps & Deployment", topics: [{ id: "web-8-1", name: "Git & Version Control", hours: "8-10", difficulty: "Beginner" }, { id: "web-8-2", name: "Docker Containerization", hours: "12-15", difficulty: "Advanced" }, { id: "web-8-3", name: "Cloud Deployment (AWS/Vercel)", hours: "15-18", difficulty: "Advanced" }, { id: "web-8-4", name: "CI/CD Pipelines", hours: "10-12", difficulty: "Advanced" }], projects: ["Deploy full stack app", "Set up monitoring dashboard"], goals: "Master deployment and DevOps practices" }
];
const webDev4MonthRoadmap = [
    { month: "Month 1", title: "Web Fundamentals + HTML/CSS + Git", topics: [{ id: "web4-1-1", name: "How the web works (HTTP, DNS, Browsers, Hosting)", hours: "8-10", difficulty: "Beginner" }, { id: "web4-1-2", name: "HTML5 - Semantic tags, Forms, Tables, Media", hours: "15-20", difficulty: "Beginner" }, { id: "web4-1-3", name: "CSS3 - Flexbox, Grid, Responsive design", hours: "20-25", difficulty: "Beginner" }, { id: "web4-1-4", name: "Git & GitHub - Basics, branches, commits, pushing code", hours: "10-12", difficulty: "Beginner" }], projects: ["Personal portfolio", "Responsive landing page"], goals: "Master web fundamentals, HTML/CSS, and version control." },
    { month: "Month 2", title: "JavaScript + DOM + Advanced JS", topics: [{ id: "web4-2-1", name: "JavaScript Basics - Variables, Functions, Loops, Arrays, Objects", hours: "15-20", difficulty: "Beginner" }, { id: "web4-2-2", name: "ES6+ Features (arrow functions, destructuring)", hours: "10-12", difficulty: "Intermediate" }, { id: "web4-2-3", name: "DOM Manipulation - Events, querySelector, traversal", hours: "12-15", difficulty: "Intermediate" }, { id: "web4-2-4", name: "Async JavaScript - Promises, Async/Await, Fetch API", hours: "15-18", difficulty: "Intermediate" }], projects: ["Calculator", "To-Do App", "Weather App"], goals: "Master JavaScript fundamentals and DOM manipulation." },
    { month: "Month 3", title: "React.js + Frontend Projects", topics: [{ id: "web4-3-1", name: "React Basics - JSX, Components, Props, State", hours: "15-18", difficulty: "Intermediate" }, { id: "web4-3-2", name: "React Hooks - useState, useEffect, Component Lifecycle", hours: "12-15", difficulty: "Intermediate" }, { id: "web4-3-3", name: "Routing and State Management - React Router, Context API", hours: "10-12", difficulty: "Intermediate" }], projects: ["React Blog App", "Notes App", "Weather UI in React"], goals: "Master React.js and build dynamic frontend applications." },
    { month: "Month 4", title: "Backend (Node.js, Express, MongoDB) + Deployment", topics: [{ id: "web4-4-1", name: "Node.js + Express - basics, npm, routes, middleware", hours: "15-18", difficulty: "Intermediate" }, { id: "web4-4-2", name: "MongoDB + Mongoose - CRUD, Atlas setup, models", hours: "12-15", difficulty: "Intermediate" }, { id: "web4-4-3", name: "Authentication & Integration - JWT, bcrypt, API calls", hours: "15-20", difficulty: "Advanced" }, { id: "web4-4-4", name: "Deployment - Vercel/Netlify (Frontend), Render (Backend)", hours: "10-12", difficulty: "Advanced" }], projects: ["Full Stack Blog", "E-commerce App", "Auth App"], goals: "Master backend development and full-stack deployment." }
];
const webDev2MonthRoadmap = [
    { month: "Month 1", title: "Frontend Development", topics: [{ id: "web2-1-1", name: "Web Basics + HTML + CSS", hours: "20-25", difficulty: "Beginner" }, { id: "web2-1-2", name: "JavaScript (Core + DOM)", hours: "25-30", difficulty: "Intermediate" }, { id: "web2-1-3", name: "JavaScript Advanced + Git & GitHub", hours: "15-18", difficulty: "Intermediate" }, { id: "web2-1-4", name: "React.js Fundamentals & Hooks", hours: "20-25", difficulty: "Intermediate" }], projects: ["Portfolio page", "Calculator", "Weather App using API", "React To-Do App"], goals: "Master frontend development from basics to React." },
    { month: "Month 2", title: "Backend + Full Stack", topics: [{ id: "web2-2-1", name: "Node.js + Express.js for REST APIs", hours: "15-18", difficulty: "Intermediate" }, { id: "web2-2-2", name: "MongoDB + Mongoose for Database", hours: "12-15", difficulty: "Intermediate" }, { id: "web2-2-3", name: "Authentication (JWT) & Integration", hours: "15-20", difficulty: "Advanced" }, { id: "web2-2-4", name: "Deployment (Vercel, Render) + Final Project", hours: "10-15", difficulty: "Advanced" }], projects: ["Basic CRUD Blog API", "Notes App with Login", "Full Stack MERN Blog"], goals: "Master backend development and full-stack deployment." }
];
const exampleProjects = [
    { title: "E-Commerce Platform", description: "A full-featured online store with product listings, a shopping cart, and user authentication, built with the MERN stack.", roadmap: "Web Dev", technologies: ["React", "Node.js", "Express", "MongoDB"], imageUrl: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d54?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600", githubUrl: "#", liveDemoUrl: "#" },
    { title: "Pathfinding Visualizer", description: "An interactive web app that visualizes pathfinding algorithms like Dijkstra's and A* on a grid.", roadmap: "DSA", technologies: ["JavaScript", "HTML/CSS", "React"], imageUrl: "https://images.unsplash.com/photo-1584983842345-3addb54e36a3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600", githubUrl: "#", liveDemoUrl: "#" },
    { title: "Social Media Dashboard", description: "A responsive dashboard for a social media application, featuring a feed, user profiles, and real-time notifications.", roadmap: "Web Dev", technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"], imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600", githubUrl: "#", liveDemoUrl: "#" },
    { title: "Sudoku Solver", description: "A program that solves any valid Sudoku puzzle using the backtracking algorithm, with a simple UI.", roadmap: "DSA", technologies: ["Python", "Backtracking", "Pygame"], imageUrl: "https://images.unsplash.com/photo-1593113646773-ae62c1c7a875?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600", githubUrl: "#", liveDemoUrl: "#" },
];
const roadmapsData = {
    dsa: { title: "DSA (8 Months)", data: dsaRoadmap, description: "A comprehensive journey to master DSA concepts.", icon: Brain },
    webdev: { title: "Web Dev (8 Months)", data: webDevRoadmap, description: "A full-stack journey from HTML to deployment.", icon: Code },
    "webdev-4month": { title: "Web Dev (4 Months)", data: webDev4MonthRoadmap, description: "An intensive program for fast-paced learning.", icon: Bot },
    "webdev-2month": { title: "Web Dev (2 Months)", data: webDev2MonthRoadmap, description: "An accelerated bootcamp-style course.", icon: Bot },
};

const Roadmaps = () => {
  // --- All state and logic hooks are preserved ---
  const [selectedRoadmap, setSelectedRoadmap] = useState("dsa");
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const roadmapsRef = useRef<HTMLDivElement>(null);

  const toggleCompletion = (itemId: string) => {
    const newCompleted = new Set(completedItems);
    if (newCompleted.has(itemId)) newCompleted.delete(itemId);
    else newCompleted.add(itemId);
    setCompletedItems(newCompleted);
  };

  const currentRoadmapData = roadmapsData[selectedRoadmap]?.data || [];
  
  const getCompletionPercentage = useMemo(() => {
    const totalItems = currentRoadmapData.reduce((acc, month) => acc + month.topics.length, 0);
    if (totalItems === 0) return 0;
    const completedCount = currentRoadmapData.reduce((acc, month) => acc + month.topics.filter(topic => completedItems.has(topic.id)).length, 0);
    return Math.round((completedCount / totalItems) * 100);
  }, [completedItems, currentRoadmapData]);
  
  // --- Updated color functions for dark theme ---
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "bg-emerald-900/80 text-emerald-200 border border-emerald-600/50";
      case "Intermediate": return "bg-amber-900/80 text-amber-200 border border-amber-600/50";
      case "Advanced": return "bg-red-900/80 text-red-200 border border-red-600/50";
      default: return "bg-neutral-700 text-neutral-200 border-neutral-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 font-sans">
        <Analytics />
        <header className="sticky top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-xl z-40 shadow-sm">
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
                    <Button variant="ghost" size="sm" asChild className="text-neutral-300 hover:bg-neutral-800 hover:text-white">
                        <Link to="/">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Hub
                        </Link>
                    </Button>
                    <a href="https://dhrc-tools.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-4 py-2 rounded-lg transition-all">Access Portal</Button>
                    </a>
                </div>
            </div>
      </header>
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <aside className="md:col-span-1 h-fit md:sticky top-24">
            <Card className="bg-neutral-900 border border-neutral-800 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-blue-400" />
                  Roadmaps
                </h3>
                <div className="space-y-2">
                  {Object.entries(roadmapsData).map(([key, { title, icon: Icon, description }]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedRoadmap(key)}
                      className={clsx(
                        "w-full text-left p-4 rounded-xl transition-all duration-300 group",
                        selectedRoadmap === key
                          ? "bg-blue-900/40 border border-blue-700 shadow-md"
                          : "hover:bg-neutral-800/50 border border-transparent"
                      )}
                    >
                      <div className="flex items-center gap-3 mb-1">
                        <Icon className={clsx("w-5 h-5 transition-colors", selectedRoadmap === key ? "text-blue-300" : "text-neutral-400 group-hover:text-white")} />
                        <span className={clsx("font-semibold transition-colors", selectedRoadmap === key ? "text-white" : "text-neutral-300 group-hover:text-white")}>{title}</span>
                      </div>
                      <p className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors ml-8">{description}</p>
                    </button>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-neutral-800/50 rounded-xl border border-neutral-700">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-blue-400" />
                    Overall Progress
                  </h4>
                  <Progress value={getCompletionPercentage} className="h-2 [&>*]:bg-blue-600" />
                  <p className="text-sm text-neutral-400 mt-2">{getCompletionPercentage}% of topics completed</p>
                </div>
            </Card>
          </aside>

          <main className="md:col-span-3">
            <section ref={roadmapsRef} className="scroll-mt-24">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white">{roadmapsData[selectedRoadmap].title} Roadmap</h2>
                    <p className="text-neutral-400 mt-2 text-lg">{roadmapsData[selectedRoadmap].description}</p>
                </div>
                
                <div className="relative">
                    <div className="absolute left-6 md:left-8 top-8 w-0.5 h-[calc(100%-4rem)] bg-neutral-800"></div>
                    <div className="space-y-12">
                        {currentRoadmapData.map((month, index) => (
                            <div key={month.month} className="relative pl-12 md:pl-16">
                                <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full text-white font-bold text-xl border-4 border-neutral-950">
                                    {index + 1}
                                </div>
                                <Card className="bg-neutral-900 border border-neutral-800 rounded-xl shadow-lg">
                                  <CardHeader><CardTitle className="text-xl font-bold text-white">{month.month}: {month.title}</CardTitle><p className="text-sm text-neutral-400 pt-2">{month.goals}</p></CardHeader>
                                  <CardContent>
                                    <h4 className="font-semibold text-neutral-200 mb-3 flex items-center gap-2"><BookOpen className="w-5 h-5 text-blue-400"/>Learning Topics</h4>
                                    <div className="space-y-3 mb-6">
                                      {month.topics.map((topic) => (
                                        <div key={topic.id} className="flex items-center justify-between p-3 bg-neutral-800/50 rounded-lg border border-neutral-700/50">
                                          <div className="flex items-center gap-4">
                                            <button onClick={() => toggleCompletion(topic.id)} className={clsx('w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all', completedItems.has(topic.id) ? 'bg-blue-500 border-blue-500' : 'border-neutral-600 hover:border-blue-500')}>
                                              {completedItems.has(topic.id) && <CheckCircle className="w-4 h-4 text-white" />}
                                            </button>
                                            <div>
                                              <span className={clsx('font-medium', completedItems.has(topic.id) ? 'line-through text-neutral-500' : 'text-neutral-200')}>{topic.name}</span>
                                              <div className="flex items-center flex-wrap gap-2 mt-1">
                                                <Badge className={`font-bold text-xs ${getDifficultyColor(topic.difficulty)}`}>{topic.difficulty}</Badge>
                                                <Badge className="font-bold text-xs flex items-center gap-1.5 bg-neutral-700 text-neutral-300 border border-neutral-600"><Clock className="w-3 h-3" />{topic.hours} hours</Badge>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                    <h4 className="font-semibold text-neutral-200 mb-3 flex items-center gap-2"><Code className="w-5 h-5 text-blue-400"/>Practice Projects</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                      {month.projects.map((project, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-3 bg-blue-900/30 rounded-lg border border-blue-800/50">
                                          <Lightbulb className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                          <span className="text-sm text-neutral-300">{project}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="mt-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-white mb-6">Example Capstone Projects</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {exampleProjects.map((project, index) => (
                        <Card key={index} className="bg-neutral-900 border border-neutral-800 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-900/20 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
                            <CardContent className="p-6 flex flex-col flex-grow">
                                <Badge className="mb-2 w-fit bg-blue-900/80 text-blue-200 border border-blue-600/50">{project.roadmap} Project</Badge>
                                <h3 className="font-bold text-lg text-white">{project.title}</h3>
                                <p className="text-sm text-neutral-400 my-3 flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2 my-4">
                                    {project.technologies.map(tech => <Badge key={tech} variant="secondary" className="bg-neutral-800 text-neutral-300 border-neutral-700">{tech}</Badge>)}
                                </div>
                                <div className="mt-auto flex gap-3">
                                    <Button asChild size="sm" className="w-full text-white bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 rounded-lg font-semibold">
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"><Github className="w-4 h-4 mr-2"/> View Code</a>
                                    </Button>
                                    <Button asChild size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold">
                                        <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4 mr-2"/> Live Demo</a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
          </main>
        </div>
      </div>
      <footer className="bg-neutral-900 border-t border-neutral-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
                <p className="text-sm text-neutral-500">
                    © {new Date().getFullYear()} Center of Knowledge & Resources - All Rights Reserved.
                </p>
                <div className="flex justify-center space-x-6 text-sm mt-4">
                    <Link to="/terms-of-service" className="text-neutral-500 hover:text-blue-400 transition-colors">Terms of Service</Link>
                    <Link to="/privacy-policy" className="text-neutral-500 hover:text-blue-400 transition-colors">Privacy Policy</Link>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Roadmaps;
