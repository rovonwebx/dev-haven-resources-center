import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Github } from "lucide-react";
import { useState } from 'react';

// --- EXPANDED AND CURATED LIST OF REAL TEMPLATES ---
const allTemplates = [
  // Landing Pages
  { id: 5, title: "SaaS Landing Page", author: "Cruip", category: "Landing Page", description: "A free, modern landing page template for SaaS products, built with Tailwind CSS and React.", image: "https://i.ibb.co/yQv1qG8/saas-landing-page.png", githubUrl: "https://github.com/cruip/open-react-template", demoUrl: "https://open-react-template.cruip.com/", tags: ["React", "Tailwind CSS"] },
  { id: 6, title: "AstroWind", author: "onWidget", category: "Landing Page", description: "Production-ready template for marketing websites built with Astro and Tailwind CSS.", image: "https://i.ibb.co/P9tGjtM/astrowind-template.png", githubUrl: "https://github.com/onwidget/astrowind", demoUrl: "https://astrowind.vercel.app/", tags: ["Astro", "Tailwind CSS"] },
  { id: 11, title: "Next.js SaaS Stripe Starter", author: "mickasmt", category: "Landing Page", description: "A starter kit to build a SaaS with Next.js, and manage payments with Stripe.", image: "https://i.ibb.co/M8JrLgP/next-saas-stripe.png", githubUrl: "https://github.com/mickasmt/next-saas-stripe-starter", demoUrl: "https://next-saas-stripe-starter.vercel.app/", tags: ["Next.js", "Stripe", "Prisma"] },
  { id: 12, title: "Simple Landing Page", author: "tuanphungcz", category: "Landing Page", description: "A clean landing page template built with basic HTML, CSS, and JavaScript.", image: "https://i.ibb.co/KqRzJdZ/simple-landing-page.png", githubUrl: "https://github.com/tuanphungcz/simple-landing-page", demoUrl: "https://tuanphungcz.github.io/simple-landing-page/", tags: ["HTML5", "CSS3", "JS"] },
  { id: 14, title: "Agency Website Template", author: "cruip", category: "Landing Page", description: "A stunning and professional website template for creative agencies and studios.", image: "https://i.ibb.co/JqjJ8fL/agency-template.png", githubUrl: "https://github.com/cruip/open-purpose-template", demoUrl: "https://open-purpose-template.cruip.com/", tags: ["HTML5", "Tailwind CSS"] },
  { id: 23, title: "Startup Landing", author: "saarthack", category: "Landing Page", description: "An elegant landing page for startups, built with Next.js and Tailwind, ready for deployment.", githubUrl: "https://github.com/saarthack/saas-landing-page", demoUrl: "https://saas-landing-page-delta.vercel.app/", tags: ["Next.js", "Tailwind CSS"]},

  // E-commerce
  { id: 15, title: "Next.js Commerce", author: "Vercel", category: "E-commerce", description: "The all-in-one starter kit for high-performance e-commerce sites.", image: "https://i.ibb.co/3W6f5Mv/next-commerce.png", githubUrl: "https://github.com/vercel/commerce", demoUrl: "https://demo.vercel.store/", tags: ["Next.js", "Headless"] },
  { id: 16, title: "Next.js Starter by Medusa", author: "Medusa.js", category: "E-commerce", description: "A production-ready Next.js starter for building a storefront with Medusa.", image: "https://i.ibb.co/Kz2CqWf/medusa-starter.png", githubUrl: "https://github.com/medusajs/nextjs-starter-medusa", demoUrl: "https://next.medusajs.com/", tags: ["Next.js", "Medusa", "Stripe"] },
  { id: 17, title: "Hydrogen", author: "Shopify", category: "E-commerce", description: "Shopify's official React-based framework for building custom, headless storefronts.", image: "https://i.ibb.co/xLg6n0M/hydrogen-shopify.png", githubUrl: "https://github.com/Shopify/hydrogen", demoUrl: "https://hydrogen.shopify.dev/", tags: ["React", "Shopify API", "Vite"] },
  { id: 18, title: "React Storefront", author: "Saleor", category: "E-commerce", description: "A GraphQL-first, high-performance e-commerce storefront for the Saleor platform.", image: "https://i.ibb.co/3s6sRzB/saleor-storefront.png", githubUrl: "https://github.com/saleor/react-storefront", demoUrl: "https://react-storefront.saleor.io/", tags: ["Next.js", "GraphQL", "Saleor"] },
  { id: 24, title: "Next.js Boilerplate", author: "Teespring", category: "E-commerce", description: "An opinionated boilerplate for Next.js, featuring TypeScript, Redux, and more.", githubUrl: "https://github.com/Teespring/nextjs-boilerplate", demoUrl: "https://github.com/Teespring/nextjs-boilerplate", tags: ["Next.js", "Redux", "TypeScript"] },

  // Portfolios
  { id: 2, title: "Spotlight", author: "Code-the-World", category: "Portfolio", description: "A sleek, dark-themed portfolio template for developers to showcase their projects.", image: "https://i.ibb.co/3cY1j8D/spotlight-template.png", githubUrl: "https://github.com/Code-the-World/Spotlight", demoUrl: "https://spotlight-dev.vercel.app/", tags: ["Next.js", "Framer Motion"] },
  { id: 4, title: "Minimal Portfolio", author: "Sridhar-C-25", category: "Portfolio", description: "An elegant portfolio that focuses on typography and content to make your work shine.", image: "https://i.ibb.co/tBSgYf4/minimal-portfolio-template.png", githubUrl: "https://github.com/sridhar-c-25/minimal-portfolio-website", demoUrl: "https://sridhar-c-25.github.io/minimal-portfolio-website/", tags: ["HTML5", "CSS3", "JS"] },
  { id: 20, title: "Portfolio Template", author: "Braydon Coyer", category: "Portfolio", description: "A highly polished personal portfolio template built with Next.js and Sanity CMS.", image: "https://i.ibb.co/Rz5wWzQ/braydon-coyer-portfolio.png", githubUrl: "https://github.com/braydoncoyer/portfolio-template", demoUrl: "https://braydoncoyer.dev/", tags: ["Next.js", "Sanity"] },
  { id: 21, title: "Portfolio v2", author: "Savio Martin", category: "Portfolio", description: "A stunning portfolio website built with Astro, featuring smooth animations.", image: "https://i.ibb.co/Jk1kphS/savio-martin-portfolio.png", githubUrl: "https://github.com/saviomartin/portfolio-v2", demoUrl: "https://v2.saviomartin.com/", tags: ["Astro", "Animations"] },
  { id: 22, title: "React Portfolio", author: "Chetan Verma", category: "Portfolio", description: "A modern and responsive portfolio template built with React and featuring a beautiful UI.", image: "https://i.ibb.co/sK6f4B5/chetan-verma-portfolio.png", githubUrl: "https://github.com/chetanverma16/react-portfolio-template", demoUrl: "https://chetanverma.com/", tags: ["React", "Styled Comp."] },

  // Dashboards & Blogs
  { id: 1, title: "Taxonomy", author: "Vercel", category: "Dashboard", description: "An open-source app built with everything new in Next.js 13. A great starting point.", image: "https://i.ibb.co/b3mf3vM/taxonomy-template.png", githubUrl: "https://github.com/vercel/taxonomy", demoUrl: "https://taxonomy.vercel.app/", tags: ["Next.js", "Auth"] },
  { id: 8, title: "Next.js Starter Blog", author: "timlrx", category: "Blog", description: "A feature-packed starter blog with MDX, search, and themes for content creators.", image: "https://i.ibb.co/hKzK2K2/tailwind-next-blog-template.png", githubUrl: "https://github.com/timlrx/tailwind-nextjs-starter-blog", demoUrl: "https://tailwind-nextjs-starter-blog.vercel.app/", tags: ["Next.js", "MDX"] },
];

const filterCategories = ["All", "Landing Page", "Portfolio", "E-commerce", "Dashboard", "Blog"];

const TemplatesOrange = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTemplates = activeFilter === "All"
    ? allTemplates
    : allTemplates.filter(template => template.category === activeFilter);

  return (
    <div className="bg-white dark:bg-black min-h-screen font-sans">
      <div className="absolute top-0 left-0 w-full h-[400px] bg-white dark:bg-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Hero Section */}
        <header className="py-8 text-center">
            <Link to="/" className="inline-flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dev Haven
            </Link>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black dark:text-white tracking-tighter mb-4">
                Template Vault
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                A curated collection of production-ready, open-source templates to accelerate your next project.
            </p>
        </header>

        {/* Filter Controls */}
        <div className="my-12 flex flex-wrap justify-center gap-2 sm:gap-3">
            {filterCategories.map(category => (
                <Button
                    key={category}
                    variant={activeFilter === category ? 'default' : 'outline'}
                    onClick={() => setActiveFilter(category)}
                    className={`rounded-full transition-all duration-200 px-4 py-2 text-sm font-semibold ${
                        activeFilter === category 
                        ? 'bg-orange-500 text-white hover:bg-orange-600 border-transparent' 
                        : 'bg-white/50 dark:bg-black/50 border-slate-300 dark:border-slate-800 text-black dark:text-white hover:bg-white dark:hover:bg-slate-900 backdrop-blur-sm'
                    }`}
                >
                    {category}
                </Button>
            ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="group relative flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 transition-all duration-300 hover:shadow-2xl hover:border-orange-500/50">
                <div className="relative">
                    <img 
                      src={template.image} 
                      alt={`${template.title} screenshot`}
                      className="w-full h-56 object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Hover Overlay with Buttons */}
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a href={template.demoUrl} target="_blank" rel="noopener noreferrer">
                            <Button className="bg-orange-500 text-white hover:bg-orange-600 rounded-full font-semibold">
                                <Eye className="w-4 h-4 mr-2" /> Live Demo
                            </Button>
                        </a>
                        <a href={template.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30 rounded-full font-semibold backdrop-blur-md">
                                <Github className="w-4 h-4 mr-2" /> Code
                            </Button>
                        </a>
                    </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex-grow">
                        <h3 className="text-xl font-bold text-black dark:text-white mb-2">{template.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                           by <span className="font-semibold text-slate-700 dark:text-slate-300">{template.author}</span>
                        </p>
                         <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{template.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
                      {template.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium rounded-full">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 py-16 text-center border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Want to Contribute?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
                Our Template Vault is community-driven. If you have an open-source template you’d like to share, we’d love to see it.
            </p>
            <a href="https://github.com/rovonwebx/dev-haven-resources-center/issues/new" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full bg-orange-500 text-white hover:bg-orange-600 font-semibold px-6 py-3">
                    <Github className="w-4 h-4 mr-2" />
                    Contribute on GitHub
                </Button>
            </a>
        </div>
      </main>
    </div>
  );
};

export default TemplatesOrange;
