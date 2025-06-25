
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Clock, User, ExternalLink } from "lucide-react";

const Blogs = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      author: "Sarah Chen",
      readTime: "8 min read",
      category: "Web Development",
      date: "Dec 20, 2024",
      description: "Explore the latest trends shaping web development, from AI integration to new JavaScript frameworks.",
      tags: ["JavaScript", "AI", "Web3", "Performance"],
      url: "https://example.com/blog/web-dev-trends-2024"
    },
    {
      title: "Building Scalable Microservices Architecture",
      author: "Michael Rodriguez",
      readTime: "12 min read",
      category: "Architecture",
      date: "Dec 18, 2024",
      description: "A comprehensive guide to designing and implementing microservices that can scale with your business.",
      tags: ["Microservices", "Docker", "Kubernetes", "API Design"],
      url: "https://example.com/blog/microservices-architecture"
    },
    {
      title: "Machine Learning for Software Engineers",
      author: "Dr. Priya Sharma",
      readTime: "15 min read",
      category: "AI/ML",
      date: "Dec 15, 2024",
      description: "Practical introduction to machine learning concepts every software engineer should know.",
      tags: ["Machine Learning", "Python", "TensorFlow", "Data Science"],
      url: "https://example.com/blog/ml-for-engineers"
    },
    {
      title: "DevOps Best Practices for Small Teams",
      author: "Alex Thompson",
      readTime: "10 min read",
      category: "DevOps",
      date: "Dec 12, 2024",
      description: "How to implement effective DevOps practices even with limited resources and small teams.",
      tags: ["DevOps", "CI/CD", "Automation", "Team Management"],
      url: "https://example.com/blog/devops-small-teams"
    },
    {
      title: "Cybersecurity Essentials for Developers",
      author: "Jennifer Kim",
      readTime: "11 min read",
      category: "Security",
      date: "Dec 10, 2024",
      description: "Essential security practices every developer must know to build secure applications.",
      tags: ["Security", "OWASP", "Authentication", "Encryption"],
      url: "https://example.com/blog/cybersecurity-essentials"
    },
    {
      title: "The Art of Code Review: Building Better Software Together",
      author: "David Park",
      readTime: "9 min read",
      category: "Software Engineering",
      date: "Dec 8, 2024",
      description: "Transform your code review process into a powerful tool for learning and quality improvement.",
      tags: ["Code Review", "Team Collaboration", "Quality Assurance"],
      url: "https://example.com/blog/code-review-best-practices"
    }
  ];

  const categories = [
    { name: "Web Development", count: 45, color: "bg-blue-100 text-blue-800" },
    { name: "AI/ML", count: 32, color: "bg-purple-100 text-purple-800" },
    { name: "DevOps", count: 28, color: "bg-green-100 text-green-800" },
    { name: "Security", count: 25, color: "bg-red-100 text-red-800" },
    { name: "Mobile Development", count: 22, color: "bg-yellow-100 text-yellow-800" },
    { name: "Architecture", count: 18, color: "bg-indigo-100 text-indigo-800" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
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
                <h1 className="text-3xl font-bold text-gray-900">
                  <BookOpen className="w-8 h-8 inline mr-2 text-blue-600" />
                  Engineering Blogs
                </h1>
                <p className="text-gray-600 mt-1">Technical articles and engineering insights</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Posts */}
          <div className="lg:w-2/3">
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="mb-2">
                        {post.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                      <a href={post.url} target="_blank" rel="noopener noreferrer">
                        {post.title}
                      </a>
                    </CardTitle>
                    <p className="text-gray-700 mt-2">{post.description}</p>
                  </CardHeader>
                  <CardContent>
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
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <a href={post.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Read More
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
            <div className="space-y-6">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <span className="font-medium text-gray-900">{category.name}</span>
                        <Badge className={category.color}>
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Featured Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Featured Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-1">Weekly Newsletter</h4>
                      <p className="text-sm text-blue-700">Get the latest engineering insights delivered to your inbox</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-1">Video Tutorials</h4>
                      <p className="text-sm text-green-700">Watch in-depth technical explanations and walkthroughs</p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-1">Podcasts</h4>
                      <p className="text-sm text-purple-700">Listen to expert interviews and technical discussions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Writing Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Writing Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Start with a clear problem statement</li>
                    <li>• Use code examples and diagrams</li>
                    <li>• Include real-world use cases</li>
                    <li>• Keep technical jargon to minimum</li>
                    <li>• End with actionable takeaways</li>
                  </ul>
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
