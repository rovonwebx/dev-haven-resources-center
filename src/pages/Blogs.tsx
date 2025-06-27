
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

  const categories = [
    { name: "React", count: 15, color: "bg-blue-100 text-blue-800" },
    { name: "TypeScript", count: 12, color: "bg-purple-100 text-purple-800" },
    { name: "Next.js", count: 10, color: "bg-green-100 text-green-800" },
    { name: "Performance", count: 8, color: "bg-orange-100 text-orange-800" },
    { name: "CSS", count: 7, color: "bg-pink-100 text-pink-800" },
    { name: "Security", count: 6, color: "bg-red-100 text-red-800" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Hub
                </Link>
              </Button>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  <BookOpen className="w-8 h-8 inline mr-2 text-blue-600" />
                  Engineering Blogs
                </h1>
                <p className="text-gray-600 mt-1">Latest insights from industry experts</p>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="mt-6 relative max-w-md">
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Posts */}
          <div className="lg:w-2/3">
            <div className="grid gap-6">
              {filteredPosts.map((post, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-3">
                      <Badge 
                        variant="secondary" 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                      >
                        {post.category}
                      </Badge>
                      <span className="text-sm text-gray-500 font-medium">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                      <a href={post.url} target="_blank" rel="noopener noreferrer">
                        {post.title}
                      </a>
                    </CardTitle>
                    <p className="text-gray-700 mt-3 leading-relaxed">{post.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs hover:bg-blue-50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span className="font-medium">{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600" 
                        asChild
                      >
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
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="space-y-6 sticky top-32">
              {/* Categories */}
              <Card className="bg-white/70 backdrop-blur-sm border-0">
                <CardHeader>
                  <CardTitle className="text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Popular Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all cursor-pointer">
                        <span className="font-medium text-gray-900">{category.name}</span>
                        <Badge className={`${category.color} font-semibold`}>
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Featured Resources */}
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Featured Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white">
                      <h4 className="font-semibold mb-2">📧 Weekly Newsletter</h4>
                      <p className="text-sm text-blue-100">Get curated tech articles delivered every Monday</p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white">
                      <h4 className="font-semibold mb-2">🎥 Video Tutorials</h4>
                      <p className="text-sm text-green-100">Watch expert-led technical deep dives</p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg text-white">
                      <h4 className="font-semibold mb-2">🎧 Dev Podcasts</h4>
                      <p className="text-sm text-purple-100">Listen to industry leaders and innovators</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blogs;
