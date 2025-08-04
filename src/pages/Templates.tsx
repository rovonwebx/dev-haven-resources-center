import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Github } from "lucide-react";
import { useState } from 'react';

// --- DATA FOR TEMPLATES ---
const allTemplates = [
  // Landing Pages
  { id: 5, title: "SaaS Landing Page", author: "Cruip", category: "Landing Page", description: "A free, modern landing page template for SaaS products, built with Tailwind CSS and React.", image: "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg", githubUrl: "https://github.com/cruip/open-react-template", demoUrl: "https://open-react-template.cruip.com/", tags: ["React", "Tailwind CSS"] },
  { id: 6, title: "AstroWind", author: "onWidget", category: "Landing Page", description: "Production-ready template for marketing websites built with Astro and Tailwind CSS.", image: "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg", githubUrl: "https://github.com/onwidget/astrowind", demoUrl: "https://astrowind.vercel.app/", tags: ["Astro", "Tailwind CSS"] },
  { id: 11, title: "Next.js SaaS Stripe Starter", author: "mickasmt", category: "Landing Page", description: "A starter kit to build a SaaS with Next.js, and manage payments with Stripe.", image: "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg", githubUrl: "https://github.com/mickasmt/next-saas-stripe-starter", demoUrl: "https://next-saas-stripe-starter.vercel.app/", tags: ["Next.js", "Stripe", "Prisma"] },
  { id: 12, title: "Simple Landing Page", author: "tuanphungcz", category: "Landing Page", description: "A clean landing page template built with basic HTML, CSS, and JavaScript.", image: "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg", githubUrl: "https://github.com/tuanphungcz/simple-landing-page", demoUrl: "https://tuanphungcz.github.io/simple-landing-page/", tags: ["HTML5", "CSS3", "JS"] },
  { id: 14, title: "Agency Website Template", author: "cruip", category: "Landing Page", description: "A stunning and professional website template for creative agencies and studios.", image: "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpgg", githubUrl: "https://github.com/cruip/open-purpose-template", demoUrl: "https://open-purpose-template.cruip.com/", tags: ["HTML5", "Tailwind CSS"] },
  
  // E-commerce
  { id: 15, title: "Next.js Commerce", author: "Vercel", category: "E-commerce", description: "The all-in-one starter kit for high-performance e-commerce sites.", image: "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg", githubUrl: "https://github.com/vercel/commerce", demoUrl: "https://demo.vercel.store/", tags: ["Next.js", "Headless"] },
  { id: 16, title: "Next.js Starter by Medusa", author: "Medusa.js", category: "E-commerce", description: "A production-ready Next.js starter for building a storefront with Medusa.", image: "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg", githubUrl: "https://github.com/medusajs/nextjs-starter-medusa", demoUrl: "https://next.medusajs.com/", tags: ["Next.js", "Medusa", "Stripe"] },
  { id: 17, title: "Hydrogen", author: "Shopify", category: "E-commerce", description: "Shopify's official React-based framework for building custom, headless storefronts.", image: "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg", githubUrl: "https://github.com/Shopify/hydrogen", demoUrl: "https://hydrogen.shopify.dev/", tags: ["React", "Shopify API", "Vite"] },
  { id: 18, title: "React Storefront", author: "Saleor", category: "E-commerce", description: "A GraphQL-first, high-performance e-commerce storefront for the Saleor platform.", image: "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg", githubUrl: "https://github.com/saleor/react-storefront", demoUrl: "https://react-storefront.saleor.io/", tags: ["Next.js", "GraphQL", "Saleor"] },
  { id: 24, title: "Next.js Boilerplate", author: "Teespring", category: "E-commerce", description: "An opinionated boilerplate for Next.js, featuring TypeScript, Redux, and more.", githubUrl: "https://github.com/Teespring/nextjs-boilerplate", demoUrl: "https://github.com/Teespring/nextjs-boilerplate", tags: ["Next.js", "Redux", "TypeScript"] },

  // Portfolios
  { id: 2, title: "Spotlight", author: "Code-the-World", category: "Portfolio", description: "A sleek, dark-themed portfolio template for developers to showcase their projects.", image: "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg", githubUrl: "https://github.com/Code-the-World/Spotlight", demoUrl: "https://spotlight-dev.vercel.app/", tags: ["Next.js", "Framer Motion"] },
  { id: 4, title: "Minimal Portfolio", author: "Sridhar-C-25", category: "Portfolio", description: "An elegant portfolio that focuses on typography and content to make your work shine.", image: "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg", githubUrl: "https://github.com/sridhar-c-25/minimal-portfolio-website", demoUrl: "https://sridhar-c-25.github.io/minimal-portfolio-website/", tags: ["HTML5", "CSS3", "JS"] },
  { id: 20, title: "Portfolio Template", author: "Braydon Coyer", category: "Portfolio", description: "A highly polished personal portfolio template built with Next.js and Sanity CMS.", image: "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg", githubUrl: "https://github.com/braydoncoyer/portfolio-template", demoUrl: "https://braydoncoyer.dev/", tags: ["Next.js", "Sanity"] },
  { id: 21, title: "Portfolio v2", author: "Savio Martin", category: "Portfolio", description: "A stunning portfolio website built with Astro, featuring smooth animations.", image: "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpgg", githubUrl: "https://github.com/saviomartin/portfolio-v2", demoUrl: "https://v2.saviomartin.com/", tags: ["Astro", "Animations"] },
  { id: 22, title: "React Portfolio", author: "Chetan Verma", category: "Portfolio", description: "A modern and responsive portfolio template built with React and featuring a beautiful UI.", image: "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg", githubUrl: "https://github.com/chetanverma16/react-portfolio-template", demoUrl: "https://chetanverma.com/", tags: ["React", "Styled Comp."] },

  // Dashboards & Blogs
  { id: 1, title: "Taxonomy", author: "Vercel", category: "Dashboard", description: "An open-source app built with everything new in Next.js 13. A great starting point.", image: "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg", githubUrl: "https://github.com/vercel/taxonomy", demoUrl: "https://taxonomy.vercel.app/", tags: ["Next.js", "Auth"] },
  { id: 8, title: "Next.js Starter Blog", author: "timlrx", category: "Blog", description: "A feature-packed starter blog with MDX, search, and themes for content creators.", image: "https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg", githubUrl: "https://github.com/timlrx/tailwind-nextjs-starter-blog", demoUrl: "https://tailwind-nextjs-starter-blog.vercel.app/", tags: ["Next.js", "MDX"] },
];

// --- DATA FOR AIML DEPT PROJECTS TABLE ---
const aimlDeptProjects = [
    { sno: 1, title: "Sponge Attack ... Data Poisoning", gitLink: "Cinofix/sponge_poisoning…", devResources: "Sponge attack paper and repo", aiTools: "Gemini, Claude, Fire Studio" },
    { sno: 2, title: "Explainable Data‑Driven Digital Twins ... Battery States", gitLink: "(No public code)", devResources: "XAI applied digital twin paper", aiTools: "Claude, Gemini" },
    { sno: 3, title: "Revolutionizing Agriculture: ML & DL Solutions for Crop Quality", gitLink: "(No public code)", devResources: "Agri‑DL tutorials, UNet/segmentation", aiTools: "Lovable, Gemini" },
    { sno: 4, title: "Ensemble DL Model for Vehicular Engine Health Prediction", gitLink: "(No public code)", devResources: "Predictive maintenance ML papers", aiTools: "Gemini, Cursor" },
    { sno: 5, title: "Web Attack Vulnerabilities: MITM & Session Hijacking", gitLink: "(No public code)", devResources: "OWASP MITM guides and ML anomaly detection", aiTools: "Claude, Bolt" },
    { sno: 6, title: "Criminal Evidence Management Using Blockchain", gitLink: "(No public code)", devResources: "Blockchain evidence chain frameworks", aiTools: "Gemini, Cursor" },
    { sno: 7, title: "Customer Behaviour Analysis with AI Recommendations", gitLink: "(No public code)", devResources: "Customer recommender tutorials", aiTools: "Lovable, Claude" },
    { sno: 8, title: "Fake News Detection Using Feature‑Based Optimized MSVM", gitLink: "nishitpatel01/Fake_News_Detection", devResources: "Fake news classification ML pipelines", aiTools: "Gemini, Cursor, Claude" },
    { sno: 9, title: "AI‑Based Financial Identification Based on Demography & Economics", gitLink: "(No public code)", devResources: "Credit scoring ML frameworks", aiTools: "Gemini, Claude" },
    { sno: 10, title: "Centralized Application‑Context Aware Firewall", gitLink: "(No public code)", devResources: "Context-aware firewall research", aiTools: "Claude, Bolt" },
    { sno: 11, title: "Hybrid AI for Stock Markets: Transformers & Q‑Learning", gitLink: "(No public code)", devResources: "Transformer-based forecasting + RL trading BS", aiTools: "Gemini, Fire Studio" },
    { sno: 12, title: "Authentication & Key Agreement Using Anonymous Identity for P2P Cloud", gitLink: "(No public code)", devResources: "ZKP and credential systems research", aiTools: "Claude, Cursor" },
    { sno: 13, title: "Paper Evaluation Using AI", gitLink: "(No public code)", devResources: "NLP similarity, summarization methods", aiTools: "Claude, GitHub Copilot" },
    { sno: 14, title: "Quantum Resistance Blockchain for Secure Health Data", gitLink: "(No public code)", devResources: "Post‑quantum blockchain literature", aiTools: "Gemini, Cursor" },
    { sno: 15, title: "Enhancing Sanskrit Isolated Word Recognition", gitLink: "(No public code)", devResources: "ASR for Sanskrit datasets", aiTools: "Lovable, Gemini" },
    { sno: 16, title: "Decentralized Examination Platform for Secure Question Papers", gitLink: "(No public code)", devResources: "Secure exam blockchain platforms", aiTools: "Claude, Cursor" },
    { sno: 17, title: "SMS Spam Detection & URL Malicious Classification", gitLink: "shrudex/sms-spam-detection", devResources: "Streamlit-based SMS spam ML", aiTools: "Claude, Gemini, Cursor" },
    { sno: 18, title: "DL-Based Spectrum Sensing for Cognitive Radio Applications", gitLink: "(No public code)", devResources: "DL classification for radio signals", aiTools: "Gemini, Fire Studio" },
    { sno: 19, title: "Multi-Modal Speech Transformer Decoders", gitLink: "(No public code)", devResources: "Audio-text multimodal transformers", aiTools: "Claude, Gemini" },
    { sno: 20, title: "Stock Market Prediction via Multi-Source Multiple Instance Learning", gitLink: "(No public code)", devResources: "MIL for time series + news embedding methods", aiTools: "Gemini, Fire Studio" },
    { sno: 21, title: "Explainable AI for Military Supply Chain Optimization Using SAR Images", gitLink: "(No public code)", devResources: "SAR imagery + XAI Grad-CAM papers", aiTools: "Claude, Cursor" },
    { sno: 22, title: "SymptotrackAI: Hybrid RAG Chatbot for Symptom Monitoring", gitLink: "(No public code)", devResources: "RAG chatbot design with medical dataset", aiTools: "Claude, Gemini, Bolt" },
    { sno: 23, title: "Telugu Text Summarization Using Extractive Method", gitLink: "(No public code)", devResources: "Telugu-BERT summarization resources", aiTools: "Gemini, Claude" },
    { sno: 24, title: "Water Scarcity Management via Centralized Knowledge-Sharing Platform", gitLink: "(No public code)", devResources: "Water forecasting, dashboard frameworks", aiTools: "Lovable, Claude" },
    { sno: 25, title: "Smart Campus Placement System Using Machine Learning", gitLink: "(No public code)", devResources: "Student placement ML tutorials", aiTools: "Gemini, Cursor" },
    { sno: 26, title: "Protein Family Classification Using Deep Learning", gitLink: "(No public code)", devResources: "Bioinformatics deep learning pipelines", aiTools: "Claude, Gemini" },
    { sno: 27, title: "AI & ML Pet Feeding System Using Image Processing", gitLink: "(No public code)", devResources: "Object detection (YOLO) and IoT embedding", aiTools: "Bolt, Fire Studio" },
    { sno: 28, title: "Detecting AI‑Generated Images with CNN & Explainable AI", gitLink: "(No public code)", devResources: "GAN detection XAI frameworks", aiTools: "Claude, Gemini" },
    { sno: 29, title: "Colorectal Cancer Detection Using Ensemble Pre‑Trained Algorithms", gitLink: "Dimnir/CancerClassification", devResources: "Colorectal histology ensemble models", aiTools: "Gemini, Claude, Cursor" },
    { sno: 30, title: "Personalized E‑Learning Course Recommendation System", gitLink: "(No public code)", devResources: "Recommendation system for e-learning tutorials", aiTools: "Gemini, Lovable" },
];


// --- DATA FOR OTHER PROJECTS TABLE ---
const otherProjectData = [
    { sno: 1, name: "Software Defect Prediction Using An Intelligent Ensemble-Based Model", link: "https://github.com/misbah-here/VESDP_Repository", resources: "https://scikit-learn.org/stable/modules/ensemble.html" },
    { sno: 2, name: "A Hierarchical Network-Based Method", link: "https://github.com/CN-UPB/hierarchical-coordination", resources: "https://arxiv.org/abs/1909.09056" },
    { sno: 3, name: "Revolutionizing Agriculture Machine and Deep Learning", link: "No repo found", resources: "https://towardsdatascience.com/agriculture-machine-learning-applications-crops-weather-78b3bf9c5f58" },
    { sno: 4, name: "An Ensemble Deep Learning Model for Vehicular Using Machine Learning", link: "https://github.com/opeajibuwa/misbehavior-detection-for-vehicular-networks-communication", resources: "https://ieeexplore.ieee.org/document/9328785" },
    { sno: 5, name: "Climate Change Impact on Agricultural Land Suitability", link: "https://github.com/makboard/ArableLandSuitability", resources: "https://www.climatechange.ai/" },
    { sno: 6, name: "Enhancing the Data Transmission Security in Cloud Using Machine Learning", link: "https://github.com/guoshangwei/secure-machine-learning", resources: "https://www.sciencedirect.com/science/article/abs/pii/S1877050921003655" },
    { sno: 7, name: "Agrigenius: The Ultimate Smart Farming App", link: "https://github.com/jayeshbhandarkar/AgriGenius", resources: "https://developer.here.com/blog/developing-a-smart-agriculture-application-using-here-apis" },
    { sno: 8, name: "Pharma: AI-Driven Drug Repurposing Platform", link: "https://github.com/TangSoftwareLab/DrugRepo", resources: "https://www.ibm.com/blogs/research/2021/06/ai-drug-discovery/" },
    { sno: 9, name: "Improving Open Source Software Security Using Fuzzing", link: "https://github.com/google/oss-fuzz", resources: "https://owasp.org/www-community/Fuzzing" },
    { sno: 10, name: "Travel Plan Itinerary Generator", link: "https://github.com/Sanjeev-Kumar78/Travel-Itinerary-Generator", resources: "https://medium.com/@sandeepswain/how-to-build-an-ai-travel-planner-app-with-openai-api-and-flutter-d46aa2b3f7a6" },
    { sno: 11, name: "News Recommendation Using GCN", link: "https://github.com/tsinghua-fib-lab/GNN-Recommender-Systems", resources: "https://towardsdatascience.com/news-recommendation-with-deep-learning-d8e562b3865d" },
    { sno: 12, name: "Hospital Management System", link: "https://gitlab.com/mohamad-liyaghi/hospital-management", resources: "https://data-flair.training/blogs/django-hospital-management-system/" },
    { sno: 13, name: "Decentralized Research Funding Platform", link: "No direct repo", resources: "https://www.coinmetro.com/learning-lab/the-emergence-of-decentralized-science-desci-platf" },
    { sno: 14, name: "Vulnerability Assessment of Web App", link: "https://github.com/DPRIYATHAM/vapt", resources: "https://owasp.org/www-project-vulnerability-assessment-tool/" },
    { sno: 15, name: "Alumni Association", link: "https://github.com/cris-ronaldo7/Alumni-Management-System", resources: "https://projectworlds.in/alumni-management-system-project-in-php/" },
    { sno: 16, name: "Comparative Analysis of Attendance via Blockchain", link: "No public repo", resources: "https://ieeexplore.ieee.org/document/9146056" },
    { sno: 17, name: "Demand Forecasting Using ML", link: "https://github.com/tushar2704/Store-Demand-Forecasting", resources: "https://towardsdatascience.com/demand-forecasting-with-machine-learning-in-python-3ef14e8ba365" },
    { sno: 18, name: "Federated Learning-Based 3D Medical Image Compression", link: "No repo", resources: "https://www.tensorflow.org/federated" },
    { sno: 19, name: "DL for House Price Prediction (Self-Attention)", link: "No direct repo", resources: "https://github.com/dreamquark-ai/tabnet" },
    { sno: 20, name: "Hybrid ML Model for Botnet Detection in IoT", link: "https://github.com/ebadre/IoT-Botnet-Detection", resources: "https://ieeexplore.ieee.org/document/9562042" },
    { sno: 21, name: "DDoS Attack Detection & Mitigation", link: "https://github.com/MahdiKarimian/DDOS-Detection", resources: "https://towardsdatascience.com/detecting-ddos-attacks-using-machine-learning-1e7281ebd2f7" },
    { sno: 22, name: "Online Vehicle Parking Reservation System", link: "https://github.com/vivek8795/Online-Vehicle-Parking-System", resources: "https://www.tutorialspoint.com/vehicle-parking-management-system-in-php" },
    { sno: 23, name: "Secure File Storage System with Encryption", link: "https://github.com/nextcloud/server", resources: "https://www.geeksforgeeks.org/secure-file-storage-using-cryptography/" },
    { sno: 24, name: "Multilingual Story Generation & Speech System", link: "https://github.com/coqui-ai/TTS", resources: "https://towardsdatascience.com/text-to-speech-with-python-64b7d43d8672" },
    { sno: 25, name: "Automated Video Generator", link: "https://github.com/Zulko/moviepy", resources: "https://towardsdatascience.com/automating-video-creation-with-python-d1783d51e9c5" },
    { sno: 26, name: "Blockchain-Based Water Management System", link: "Concept only", resources: "https://www.frontiersin.org/articles/10.3389/frwa.2021.626106/full" },
    { sno: 27, name: "Blockchain Based ZTNA System", link: "Concept only", resources: "https://www.mdpi.com/2076-3417/12/3/1429" },
    { sno: 28, name: "Vote Casting System via Aadhaar + Blockchain", link: "Concept only", resources: "https://blockchaininsight.medium.com/india-voting-blockchain-9bdbeea168f7" },
    { sno: 29, name: "Alzheimer’s Detection via Ensemble ML", link: "No repo", resources: "https://adni.loni.usc.edu/" },
    { sno: 30, name: "Business Responsibility & Sustainability Reporting (BRSR)", link: "https://github.com/apache/superset", resources: "https://www.ibm.com/products/environmental-intelligence-suite" }
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
        {/* General Page Header */}
        <header className="py-8 flex justify-between items-center">
            <div className="text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black dark:text-white tracking-tighter mb-4">
                    Developer Resources
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
                    A collection of projects and templates to inspire and accelerate your development workflow.
                </p>
            </div>
            <Link to="/" className="inline-flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to CKR
            </Link>
        </header>

        {/* Section: AIML Dept Projects */}
        <section className="my-16">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-black dark:text-white mb-4">AIML Dept Projects</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
                    The following table contains a curated list of project ideas and resources from the AIML Department.
                    <br/>
                    <span className="font-semibold text-red-600 dark:text-red-500">
                        Disclaimer: This is a collection of information gathered from various online sources and is intended for informational purposes only.
                    </span>
                </p>
            </div>
            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
                <table className="min-w-full text-sm text-left text-slate-500 dark:text-slate-400">
                    <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">S.No</th>
                            <th scope="col" className="px-6 py-3">Project Title</th>
                            <th scope="col" className="px-6 py-3">Git Link</th>
                            <th scope="col" className="px-6 py-3">Development Resources</th>
                            <th scope="col" className="px-6 py-3">Suggested AI Tools</th>
                        </tr>
                    </thead>
                    <tbody>
                        {aimlDeptProjects.map((project) => (
                            <tr key={project.sno} className="bg-white border-b dark:bg-slate-900/50 dark:border-slate-800">
                                <th scope="row" className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white">{project.sno}</th>
                                <td className="px-6 py-4">{project.title}</td>
                                <td className="px-6 py-4">{project.gitLink}</td>
                                <td className="px-6 py-4">{project.devResources}</td>
                                <td className="px-6 py-4">{project.aiTools}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

        {/* Section: Other Projects */}
        <section className="my-16">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Other Projects</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
                    The following table contains a curated list of project ideas and resources.
                    <br/>
                    <span className="font-semibold text-red-600 dark:text-red-500">
                        Disclaimer: This is a collection of information gathered from various online sources and is intended for informational purposes only.
                    </span>
                </p>
            </div>
            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
                <table className="min-w-full text-sm text-left text-slate-500 dark:text-slate-400">
                    <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">S.No</th>
                            <th scope="col" className="px-6 py-3">Name of the Project</th>
                            <th scope="col" className="px-6 py-3">Project Link</th>
                            <th scope="col" className="px-6 py-3">Development Resources</th>
                        </tr>
                    </thead>
                    <tbody>
                        {otherProjectData.map((project) => (
                            <tr key={project.sno} className="bg-white border-b dark:bg-slate-900/50 dark:border-slate-800">
                                <th scope="row" className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap dark:text-white">{project.sno}</th>
                                <td className="px-6 py-4">{project.name}</td>
                                <td className="px-6 py-4">
                                    {project.link.startsWith('http') ? (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">{project.link}</a>
                                    ) : (
                                        project.link
                                    )}
                                </td>
                                <td className="px-6 py-4">
                                    <a href={project.resources} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">{project.resources}</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>

        {/* Section: Template Vault */}
        <section className="mt-20 py-16 border-t border-slate-200 dark:border-slate-800">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Template Vault</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    A curated collection of production-ready, open-source templates to accelerate your next project.
                </p>
            </div>

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
        </section>

        {/* Call to Action */}
        <div className="mt-20 py-16 text-center border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Want to Contribute?</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
                This resource hub is community-driven. If you have an open-source project or template you’d like to share, we’d love to see it.
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
