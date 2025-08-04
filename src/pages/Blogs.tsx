import React, { useState, useMemo, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BookOpen, Clock, User, ExternalLink, Search, Home, ArrowUp } from "lucide-react";

// --- Data and Helper Functions (No changes here) ---
const blogPosts = [
    {
      title: "React 19 Features That Will Change How You Code",
      author: "Dan Abramov",
      readTime: "8 min read",
      category: "React",
      date: "Aug 15, 2025",
      description: "Explore the revolutionary features in React 19 including automatic batching, concurrent features, and the new use hook.",
      tags: ["React", "JavaScript", "Frontend"],
      url: "https://react.dev/blog/2024/04/25/react-19"
    },
    {
      title: "The Future of TypeScript: What's Coming in 2025",
      author: "Anders Hejlsberg",
      readTime: "12 min read",
      category: "TypeScript",
      date: "Jul 28, 2025",
      description: "A deep dive into TypeScript's roadmap with new features like explicit resource management and improved inference.",
      tags: ["TypeScript", "JavaScript", "Development"],
      url: "https://devblogs.microsoft.com/typescript/"
    },
    {
      title: "Building Scalable Applications with Next.js 15",
      author: "Vercel Team",
      readTime: "15 min read",
      category: "Next.js",
      date: "Jul 10, 2025",
      description: "Learn about Next.js 15's new features including partial prerendering, improved caching, and better developer experience.",
      tags: ["Next.js", "React", "Full-stack"],
      url: "https://nextjs.org/blog"
    },
    {
      title: "State Management in 2025: Beyond Redux",
      author: "Kent C. Dodds",
      readTime: "10 min read",
      category: "State Management",
      date: "Jun 22, 2025",
      description: "Exploring modern state management solutions including Zustand, Jotai, and the latest patterns in React.",
      tags: ["State Management", "React", "Architecture"],
      url: "https://kentcdodds.com/blog"
    },
    {
      title: "CSS Container Queries: The Game Changer",
      author: "Una Kravets",
      readTime: "9 min read",
      category: "CSS",
      date: "May 18, 2025",
      description: "How container queries are revolutionizing responsive design and component-based styling approaches.",
      tags: ["CSS", "Responsive Design", "Frontend"],
      url: "https://web.dev/new-responsive/"
    },
    {
      title: "Mastering Web Performance in 2025",
      author: "Addy Osmani",
      readTime: "14 min read",
      category: "Performance",
      date: "Apr 30, 2025",
      description: "Advanced techniques for optimizing web performance including Core Web Vitals, lazy loading, and modern bundling.",
      tags: ["Performance", "Web Vitals", "Optimization"],
      url: "https://web.dev/articles/optimize-lcp"
    },
    {
      title: "The Rise of Edge Computing in Web Development",
      author: "Guillermo Rauch",
      readTime: "11 min read",
      category: "Edge Computing",
      date: "Mar 25, 2025",
      description: "Understanding edge computing benefits and how to leverage edge functions for better user experiences.",
      tags: ["Edge Computing", "Serverless", "Performance"],
      url: "https://vercel.com/blog"
    },
    {
      title: "AI-Powered Development Tools That Actually Work",
      author: "GitHub Team",
      readTime: "13 min read",
      category: "AI Tools",
      date: "Feb 14, 2025",
      description: "A comprehensive review of AI coding assistants, automated testing tools, and productivity enhancers for developers.",
      tags: ["AI", "Developer Tools", "Productivity"],
      url: "https://github.blog/2024-01-09-github-copilot-in-2024-a-year-of-growth-and-evolution/"
    },
    {
      title: "Security Best Practices for Modern Web Apps",
      author: "Troy Hunt",
      readTime: "16 min read",
      category: "Security",
      date: "Jan 28, 2025",
      description: "Essential security practices including HTTPS, CSP, authentication patterns, and protecting against modern threats.",
      tags: ["Security", "Web Security", "Best Practices"],
      url: "https://www.troyhunt.com/"
    },
    {
      title: "The Evolution of JavaScript Frameworks in 2025",
      author: "Evan You",
      readTime: "12 min read",
      category: "JavaScript",
      date: "Jan 10, 2025",
      description: "Comparing Vue 3.4, React 19, Svelte 5, and emerging frameworks, discussing their strengths and use cases.",
      tags: ["JavaScript", "Frameworks", "Vue", "React"],
      url: "https://blog.vuejs.org/"
    }
];

const BlogsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // --- Scroll to Top Logic ---
  useEffect(() => {
    const checkScrollTop = () => {
      if (!showBackToTop && window.pageYOffset > 400) {
        setShowBackToTop(true);
      } else if (showBackToTop && window.pageYOffset <= 400) {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showBackToTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const allCategories = useMemo(() => {
    return ["All", ...Array.from(new Set(blogPosts.map(p => p.category)))];
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        !searchTerm ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);
  
  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;
  const regularPosts = filteredPosts.length > 1 ? filteredPosts.slice(1) : [];

  const Breadcrumb = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-neutral-400">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                <Home className="w-4 h-4" />
                Home
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Blogs</span>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      {/* <Header /> */}
      
      <main className="flex-1 w-full pt-12 pb-16">
        <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Engineering Insights
            </h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
                Articles, tutorials, and analysis from the forefront of software development.
            </p>
        </div>
        
        <Breadcrumb />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <aside className="md:col-span-1 h-fit md:sticky top-24">
                <div className="bg-neutral-900 p-5 rounded-lg border border-neutral-800">
                    <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
                    <div className="space-y-2">
                        {allCategories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                                    selectedCategory === category
                                    ? 'bg-blue-600 text-white'
                                    : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </aside>

            <main className="md:col-span-3">
                <div className="relative mb-6">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500 w-5 h-5" />
                    <Input
                        type="text"
                        placeholder="Search articles by title, author, or tag..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-neutral-900 border-2 border-neutral-800 rounded-full text-base focus:ring-blue-500 focus:border-blue-500 placeholder-neutral-500"
                    />
                </div>

                {/* Featured Post */}
                {featuredPost && (
                    <Card className="mb-8 bg-neutral-900 border border-neutral-800 rounded-lg shadow-sm hover:border-blue-500/50 transition-all duration-300">
                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <Badge className="bg-blue-900/80 text-blue-200 border border-blue-600/50">Featured</Badge>
                                <span className="text-sm text-neutral-500">{featuredPost.date}</span>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-3 hover:text-blue-400 transition-colors">
                                <a href={featuredPost.url} target="_blank" rel="noopener noreferrer">{featuredPost.title}</a>
                            </h2>
                            <p className="text-neutral-400 mb-5">{featuredPost.description}</p>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex items-center gap-4 text-sm text-neutral-400">
                                    <div className="flex items-center gap-1.5"><User className="w-4 h-4" /> {featuredPost.author}</div>
                                    <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featuredPost.readTime}</div>
                                </div>
                                <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg w-full sm:w-auto">
                                    <a href={featuredPost.url} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4 mr-2" /> Read Now</a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {regularPosts.map((post, index) => (
                    <Card key={index} className="group bg-neutral-900 border border-neutral-800 rounded-lg shadow-sm hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                    <CardContent className="p-6 flex flex-col flex-grow">
                        <div>
                            <Badge variant="outline" className="text-xs border-neutral-700 bg-neutral-800 text-blue-300 mb-3">{post.category}</Badge>
                            <h2 className="font-bold text-lg text-white leading-tight mb-2 hover:text-blue-400 transition-colors">
                            <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
                            </h2>
                        </div>
                        <p className="text-neutral-400 text-sm mb-4 flex-grow line-clamp-2">{post.description}</p>
                        
                        <div className="flex flex-wrap gap-1.5 mb-5">
                          {post.tags.slice(0, 3).map((tag) => <Badge key={tag} variant="outline" className="text-xs border-neutral-700 bg-neutral-800 text-neutral-300">{tag}</Badge>)}
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-neutral-400 mt-auto pt-4 border-t border-neutral-800">
                            <div className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</div>
                            <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</div>
                        </div>
                    </CardContent>
                    </Card>
                ))}
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

export default BlogsPage;
