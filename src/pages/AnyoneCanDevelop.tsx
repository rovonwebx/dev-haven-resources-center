
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Rocket, 
  Users, 
  Code, 
  Palette, 
  Globe, 
  CheckCircle, 
  ExternalLink,
  Lightbulb,
  Target,
  Zap,
  Monitor,
  Smartphone,
  Settings
} from "lucide-react";

const AnyoneCanDevelop = () => {
  const skillLevels = [
    {
      level: "Beginners",
      icon: Users,
      description: "Simple single-page sites like a personal bio, hobby page, or a contact form.",
      color: "bg-green-100 text-green-800"
    },
    {
      level: "Intermediate Users", 
      icon: Code,
      description: "Multi-page websites like portfolios, blogs, or small business sites with interactive forms and navigation.",
      color: "bg-blue-100 text-blue-800"
    },
    {
      level: "Advanced Developers",
      icon: Rocket,
      description: "Full-stack web applications with dynamic features like forms, APIs, databases, or AI-driven components.",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  const developmentSteps = [
    {
      step: 1,
      title: "Planning the Webpage",
      icon: Target,
      objective: "Define the webpage's purpose, audience, and structure.",
      tools: [
        { name: "Grok", url: "https://grok.x.ai/", description: "Brainstorm ideas and generate outlines" },
        { name: "ChatGPT", url: "https://chat.openai.com/", description: "Generate detailed content plans and JSON sitemaps" },
        { name: "Dribbble", url: "https://dribbble.com/", description: "Browse for design inspiration" },
        { name: "Ready AI", url: "https://www.readyai.org/", description: "Beginner-friendly planning for educational projects" }
      ],
      output: "A single-page outline with sections (Hero, About, Contact Form) and features"
    },
    {
      step: 2,
      title: "Designing the User Interface (UI)",
      icon: Palette,
      objective: "Create an attractive and user-friendly design for the webpage.",
      tools: [
        { name: "Lovable", url: "https://lovable.dev/", description: "Create React-based UI with Tailwind CSS" },
        { name: "Vercel v0", url: "https://v0.dev/", description: "Generate modern React components" },
        { name: "Canva", url: "https://www.canva.com/", description: "Create quick mockups or graphics" },
        { name: "Figma", url: "https://www.figma.com/", description: "Advanced wireframes with AI plugins" }
      ],
      output: "A mockup or AI-generated UI code for a single-page layout"
    },
    {
      step: 3,
      title: "Developing the Frontend",
      icon: Code,
      objective: "Build the webpage's structure and style using HTML, CSS, and JavaScript.",
      tools: [
        { name: "Replit", url: "https://replit.com/", description: "Browser-based IDE with AI Agent" },
        { name: "CodePen", url: "https://codepen.io/", description: "Test and tweak code snippets" },
        { name: "VS Code", url: "https://code.visualstudio.com/", description: "Professional code editor" },
        { name: "GitHub Copilot", url: "https://github.com/features/copilot", description: "AI-powered coding assistant" }
      ],
      output: "A working frontend with a styled contact form"
    },
    {
      step: 4,
      title: "Adding Interactivity",
      icon: Zap,
      objective: "Add a functional contact form with validation and submission handling.",
      tools: [
        { name: "Bolt.new", url: "https://bolt.new/", description: "Generate full-stack apps in one prompt" },
        { name: "Formspree", url: "https://formspree.io/", description: "Simple backend for form submissions" },
        { name: "Supabase", url: "https://supabase.com/", description: "Full-stack backend solutions" }
      ],
      output: "A contact form with validation and submission handling"
    },
    {
      step: 5,
      title: "Optimizing Content",
      icon: Lightbulb,
      objective: "Add engaging, SEO-friendly text and visuals to the webpage.",
      tools: [
        { name: "MidJourney", url: "https://www.midjourney.com/", description: "Generate high-quality images" },
        { name: "Grammarly", url: "https://www.grammarly.com/", description: "Polish text for clarity and professionalism" }
      ],
      output: "Optimized text and visuals for the webpage"
    },
    {
      step: 6,
      title: "Testing and Debugging",
      icon: Settings,
      objective: "Ensure the webpage is functional, responsive, and bug-free.",
      tools: [
        { name: "Testim", url: "https://www.testim.io/", description: "AI-based automated testing" },
        { name: "BrowserStack", url: "https://www.browserstack.com/", description: "Test across multiple devices and browsers" }
      ],
      output: "A bug-free, responsive webpage"
    },
    {
      step: 7,
      title: "Deploying the Webpage",
      icon: Globe,
      objective: "Make the webpage live on the internet.",
      tools: [
        { name: "Netlify", url: "https://www.netlify.com/", description: "Simple deployment with Netlify Drop" },
        { name: "Vercel", url: "https://vercel.com/", description: "Scalable hosting with custom domains" }
      ],
      output: "A live webpage with a shareable URL"
    },
    {
      step: 8,
      title: "Monitoring and Improving",
      icon: Monitor,
      objective: "Track performance and enhance the webpage based on user feedback.",
      tools: [
        { name: "Hotjar", url: "https://www.hotjar.com/", description: "AI-driven heatmaps for user interactions" },
        { name: "Google Analytics", url: "https://analytics.google.com/", description: "AI-driven insights into user behavior" }
      ],
      output: "Data-driven enhancements to the webpage"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-300 bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" asChild className="text-blue-600 hover:bg-blue-50">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Home
              </Link>
            </Button>
            <Button asChild>
              <Link to="/">
                <Globe className="w-4 h-4 mr-1" />
                Main Page
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Rocket className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-black mb-4">Anyone Can Develop</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complete Guide to Creating a Webpage with AI: From Planning to Development
          </p>
        </div>

        {/* Introduction Card */}
        <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Building a webpage is an exciting and accessible process with the help of AI tools, enabling everyone from beginners 
              to advanced developers to create stunning websites. AI streamlines planning, design, coding, testing, and deployment, 
              making it easier to craft anything from a simple personal page to a complex web application.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-green-100 text-green-800">AI-Powered</Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">Beginner-Friendly</Badge>
              <Badge variant="secondary" className="bg-purple-100 text-purple-800">Professional Results</Badge>
            </div>
          </CardContent>
        </Card>

        {/* What You Can Create */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-black flex items-center">
              <Users className="w-6 h-6 mr-2 text-blue-600" />
              What Can You Create with AI?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {skillLevels.map((level, index) => {
                const IconComponent = level.icon;
                return (
                  <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <Badge className={level.color + " mb-3"}>{level.level}</Badge>
                      <p className="text-gray-700 text-sm leading-relaxed">{level.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Step-by-Step Guide */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-black flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-green-600" />
              Step-by-Step Development Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="step1" className="w-full">
              <TabsList className="grid grid-cols-4 lg:grid-cols-8 mb-6">
                {developmentSteps.map((step) => (
                  <TabsTrigger key={step.step} value={`step${step.step}`} className="text-xs">
                    Step {step.step}
                  </TabsTrigger>
                ))}
              </TabsList>

              {developmentSteps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <TabsContent key={step.step} value={`step${step.step}`}>
                    <Card className="border-2 border-gray-200">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                            <p className="text-gray-600 mb-4">{step.objective}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-black mb-3">Recommended AI Tools:</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {step.tools.map((tool, index) => (
                              <Card key={index} className="border border-gray-200 hover:border-blue-300 transition-colors">
                                <CardContent className="p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <h5 className="font-medium text-black">{tool.name}</h5>
                                    <Button variant="ghost" size="sm" asChild>
                                      <a href={tool.url} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-4 h-4" />
                                      </a>
                                    </Button>
                                  </div>
                                  <p className="text-sm text-gray-600">{tool.description}</p>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Expected Output:
                          </h4>
                          <p className="text-green-700 text-sm">{step.output}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                );
              })}
            </Tabs>
          </CardContent>
        </Card>

        {/* Sample Portfolio Demo */}
        <Card className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-black flex items-center">
              <Monitor className="w-6 h-6 mr-2 text-purple-600" />
              Sample Portfolio Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-lg border-2 border-gray-200 p-6 mb-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">My AI-Powered Portfolio</h3>
                <p className="text-gray-600">Built with Grok, Lovable, and More!</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-black mb-2">Welcome</h4>
                  <p className="text-sm text-gray-600">Explore my work, crafted with AI tools for a seamless experience.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-black mb-2">About Me</h4>
                  <p className="text-sm text-gray-600">I'm passionate about creating websites using AI tools like Grok, ChatGPT, Lovable, and Replit.</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-black mb-2">Contact Me</h4>
                  <p className="text-sm text-gray-600">Get in touch through the contact form below.</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-500 mb-2">Contact Form Preview</p>
                <div className="space-y-2">
                  <div className="h-8 bg-white rounded border"></div>
                  <div className="h-8 bg-white rounded border"></div>
                  <div className="h-16 bg-white rounded border"></div>
                  <Button className="w-full">Send Message</Button>
                </div>
              </div>
            </div>
            
            <p className="text-center text-sm text-purple-700">
              © 2025 My Portfolio. Built with AI Tools!
            </p>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <Rocket className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Ready to Start Building?</h2>
            <p className="text-blue-100 mb-6">
              Begin your web development journey today with AI-powered tools and create amazing websites in minutes, not months!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" asChild>
                <a href="https://lovable.dev/" target="_blank" rel="noopener noreferrer">
                  Start with Lovable
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
                <a href="https://bolt.new/" target="_blank" rel="noopener noreferrer">
                  Try Bolt.new
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AnyoneCanDevelop;
