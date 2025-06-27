
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Clock, User, ExternalLink, Search } from "lucide-react";
import { useState } from "react";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-6 h-6 text-gray-600" />
              <h1 className="text-2xl font-serif text-black">Engineering Blogs</h1>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">
                Back to Hub
                <ArrowLeft className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <p className="text-gray-600 text-sm mt-2">Latest insights from industry experts</p>
          
          {/* Search Bar */}
          <div className="mt-4 relative max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search blogs..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {filteredPosts.map((post, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <CardTitle className="text-xl text-gray-900 hover:text-blue-600 transition-colors">
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </CardTitle>
                <p className="text-gray-700 text-sm leading-relaxed">{post.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read Article
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blogs;
