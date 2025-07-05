
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Layout, ExternalLink, Github, Eye } from "lucide-react";

const Templates = () => {
  const templateCategories = [
    {
      category: "Landing Pages",
      templates: [
        {
          id: 1,
          title: "SaaS Landing Page",
          description: "Modern landing page template for SaaS products with pricing section",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/saas-landing",
          demoUrl: "https://saas-landing-demo.com",
          tags: ["React", "Tailwind CSS", "TypeScript"],
          isNew: true
        },
        {
          id: 2,
          title: "Agency Portfolio",
          description: "Clean and professional portfolio template for creative agencies",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/agency-portfolio",
          demoUrl: "https://agency-portfolio-demo.com",
          tags: ["React", "CSS3", "JavaScript"]
        },
        {
          id: 3,
          title: "Startup Landing",
          description: "Minimal and conversion-focused landing page for startups",
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/startup-landing",
          demoUrl: "https://startup-landing-demo.com",
          tags: ["Vue.js", "Bootstrap", "SCSS"]
        }
      ]
    },
    {
      category: "E-commerce",
      templates: [
        {
          id: 4,
          title: "Fashion Store",
          description: "Elegant e-commerce template for fashion and lifestyle brands",
          image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/fashion-store",
          demoUrl: "https://fashion-store-demo.com",
          tags: ["React", "Redux", "Stripe"],
          isNew: true
        },
        {
          id: 5,
          title: "Electronics Shop",
          description: "Feature-rich template for electronics and gadgets store",
          image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/electronics-shop",
          demoUrl: "https://electronics-shop-demo.com",
          tags: ["Next.js", "Tailwind CSS", "PayPal"]
        }
      ]
    },
    {
      category: "Dashboards",
      templates: [
        {
          id: 6,
          title: "Admin Dashboard",
          description: "Comprehensive admin dashboard with charts and analytics",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/admin-dashboard",
          demoUrl: "https://admin-dashboard-demo.com",
          tags: ["React", "Chart.js", "Material-UI"]
        },
        {
          id: 7,
          title: "Analytics Dashboard",
          description: "Data visualization dashboard for business analytics",
          image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/analytics-dashboard",
          demoUrl: "https://analytics-dashboard-demo.com",
          tags: ["Vue.js", "D3.js", "Vuetify"],
          isNew: true
        }
      ]
    },
    {
      category: "Blogs & CMS",
      templates: [
        {
          id: 8,
          title: "Tech Blog",
          description: "Modern blog template for tech writers and developers",
          image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b81d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/tech-blog",
          demoUrl: "https://tech-blog-demo.com",
          tags: ["Gatsby", "GraphQL", "Markdown"]
        },
        {
          id: 9,
          title: "Magazine Layout",
          description: "Rich content layout for online magazines and publications",
          image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
          githubUrl: "https://github.com/example/magazine-layout",
          demoUrl: "https://magazine-layout-demo.com",
          tags: ["React", "Contentful", "CSS Grid"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-300 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                <Layout className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-black">Templates</h1>
                  <Badge className="bg-red-500 text-white text-xs px-2 py-1 animate-pulse">New</Badge>
                </div>
                <p className="text-sm text-gray-600">Ready-to-use web templates and design resources</p>
              </div>
            </div>
            <Link to="/" className="flex items-center ml-auto">
              <span className="text-sm text-gray-600 mr-2">Back to DHRC</span>
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Introduction */}
        <div className="mb-8">
          <Card className="border border-gray-200 bg-gradient-to-br from-purple-50 to-violet-100">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Web Templates Collection</h2>
              <p className="text-gray-700 mb-4">
                Discover professionally designed, responsive web templates ready for your next project. 
                Each template comes with source code, demo links, and comprehensive documentation.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Responsive Design</Badge>
                <Badge variant="secondary">Modern UI/UX</Badge>
                <Badge variant="secondary">Clean Code</Badge>
                <Badge variant="secondary">Well Documented</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Template Categories */}
        <div className="space-y-12">
          {templateCategories.map((category) => (
            <section key={category.category}>
              <h2 className="text-2xl font-serif text-black mb-6 pb-2 border-b border-gray-300">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.templates.map((template) => (
                  <Card key={template.id} className="border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
                    <div className="relative">
                      <img 
                        src={template.image} 
                        alt={template.title}
                        className="w-full h-48 object-cover"
                      />
                      {template.isNew && (
                        <Badge className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 animate-pulse">
                          New
                        </Badge>
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900">{template.title}</CardTitle>
                      <p className="text-sm text-gray-600">{template.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {template.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            className="flex-1"
                            onClick={() => window.open(template.demoUrl, '_blank')}
                          >
                            <Eye className="w-3 h-3 mr-1" />
                            Demo
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="flex-1"
                            onClick={() => window.open(template.githubUrl, '_blank')}
                          >
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Call to Action */}
        <Card className="mt-12 border border-gray-200">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're constantly adding new templates to our collection. If you have a specific template request 
              or would like to contribute your own designs, we'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>
                <ExternalLink className="w-4 h-4 mr-2" />
                Request Template
              </Button>
              <Button variant="outline">
                <Github className="w-4 h-4 mr-2" />
                Contribute Templates
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Templates;
