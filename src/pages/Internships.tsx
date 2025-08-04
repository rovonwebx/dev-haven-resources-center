import React, { useState, useMemo, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Briefcase, ExternalLink, Calendar, Building2, Globe, AlertTriangle, Sparkles, Rocket, Landmark, FlaskConical, Home, ArrowUp } from "lucide-react";
import clsx from 'clsx';

// --- DATASET 1: Expanded Internship List with Thematic Icons ---
const internships = [
    // Government & Research
    { company: "NITI Aayog", role: "Niti Aayog Internships", type: "Government", deadline: "Open monthly (1st-10th)", description: "Work with policy verticals, 6-12 weeks, analytical skills required.", url: "https://www.niti.gov.in/internship", region: "India", icon: Landmark },
    { company: "ISRO - SDSC", role: "Satish Dhawan Space Center Internship", type: "Government/Research", deadline: "Open", description: "Satellite development, engineering/science students.", url: "https://www.isro.gov.in/Careers.html", region: "India", icon: Rocket },
    { company: "INST", role: "Nano Science and Technology Internship", type: "Research", deadline: "Open", description: "Engineering/science, nanotechnology focus.", url: "https://www.inst.ac.in/careers/internships", region: "India", icon: FlaskConical },
    { company: "CSIR CFTRI", role: "Summer Internships 2025", type: "Research", deadline: "Open", description: "Food technology, biotechnology, life sciences.", url: "https://cftri.res.in/internships", region: "India", icon: FlaskConical },
    { company: "RBI", role: "RBI Internships", type: "Government", deadline: "Open", description: "Economics, finance, management, monetary policy.", url: "https://opportunities.rbi.org.in/scripts/internship.aspx", region: "India", icon: Landmark },
    { company: "MEA", role: "Ministry of External Affairs Internships", type: "Government", deadline: "Open", description: "International relations, diplomacy, research.", url: "https://www.mea.gov.in/internship-in-mea.htm", region: "India", icon: Landmark },
    { company: "DRDO", role: "DRDO Internships", type: "Government", deadline: "Open", description: "Defense technology, robotics, AI, engineering/science students.", url: "https://www.drdo.gov.in/careers", region: "India", icon: Landmark },

    // Corporate
    { company: "Google India", role: "Software Engineering Intern", type: "Corporate", deadline: "Varies (Apply Early)", description: "Work on core Google products. Stipend ₹80,000-1,00,000/month.", url: "https://careers.google.com/students/", region: "India", icon: Building2 },
    { company: "Microsoft India", role: "Research / SWE Intern", type: "Corporate", deadline: "Varies (Apply Early)", description: "Software engineering, product design, and cutting-edge research.", url: "https://careers.microsoft.com/v2/global/en/students-and-graduates.html", region: "India", icon: Building2 },
    { company: "Amazon India", role: "SDE / Ops Intern", type: "Corporate", deadline: "Varies", description: "Operations, software development, product management. Stipend ₹60,000-80,000/month.", url: "https://www.amazon.jobs/en/teams/internships-for-students", region: "India", icon: Building2 },
    { company: "Goldman Sachs", role: "Summer Analyst Program", type: "Corporate", deadline: "Varies", description: "Finance, investment banking, engineering, and analytical roles.", url: "https://www.goldmansachs.com/careers/students/", region: "India", icon: Building2 },
    { company: "Infosys", role: "Infosys InStep", type: "Corporate", deadline: "Open", description: "Technology, business strategy, innovation, global exposure.", url: "https://www.infosys.com/careers/instep.html", region: "India", icon: Building2 },
    { company: "TCS", role: "TCS Internships", type: "Corporate", deadline: "Open", description: "Software development, data analytics, AI, corporate culture.", url: "https://www.tcs.com/careers/india/entry-level", region: "India", icon: Building2 },
    
    // Academic Research
    { company: "IIT Madras", role: "Summer Fellowship Program", type: "Research", deadline: "Feb 28, 2025", description: "Pre-final year, good CGPA, stipend INR 6000, on-campus accommodation.", url: "https://sfp.iitm.ac.in/", region: "India", icon: FlaskConical },
    { company: "IIT Delhi", role: "Summer Research Fellowship", type: "Research", deadline: "Mar 15, 2025", description: "All engineering branches, stipend provided.", url: "https://owncloud.iitd.ac.in/index.php/s/Rd565g4m2x4o1iK", region: "India", icon: FlaskConical },
    { company: "IIT Gandhinagar", role: "Summer Research Internship", type: "Research", deadline: "Mar 1, 2025", description: "UG/PG, no CGPA criteria, stipend INR 6000.", url: "https://srip.iitgn.ac.in/", region: "India", icon: FlaskConical },
    { company: "IISc Bangalore", role: "IISc Internships", type: "Research", deadline: "Apply via cold emailing", description: "Science and engineering, good CGPA, stipend INR 5000-6000.", url: "https://www.iisc.ac.in/", region: "India", icon: FlaskConical },

    // Platforms & Schemes
    { company: "AICTE Portal", role: "National Internship Portal", type: "Platform", deadline: "Ongoing", description: "Bridges academic learning and industry across various sectors.", url: "https://internship.aicte-india.org/", region: "Global", icon: Globe },
    { company: "Internshala", role: "Various Roles", type: "Platform", deadline: "Varies", description: "Thousands of internships listed, with paid and summer options.", url: "https://internshala.com/internships", region: "Global", icon: Globe },
    { company: "LinkedIn", role: "Various Roles", type: "Platform", deadline: "Varies", description: "Hundreds of summer internship jobs, network with recruiters.", url: "https://www.linkedin.com/jobs/internship-jobs/", region: "Global", icon: Globe },
    { company: "Wellfound (AngelList)", role: "Startup Internships", type: "Platform", deadline: "Varies", description: "Find internships at high-growth startups.", url: "https://wellfound.com/jobs", region: "Global", icon: Globe },
];

// --- DATASET 2: Company Career Pages with Status Tags ---
const companyCareerPages = [
    { name: "Google", url: "https://careers.google.com/students/", status: "Hiring Interns", icon: Sparkles },
    { name: "Microsoft", url: "https://careers.microsoft.com/v2/global/en/students-and-graduates.html", status: "Hiring Interns", icon: Sparkles },
    { name: "Amazon", url: "https://amazon.jobs/en/teams/internships-for-students", status: "Jobs Open", icon: Building2 },
    { name: "Apple", url: "https://www.apple.com/careers/us/students.html", status: "Hiring Interns", icon: Sparkles },
    { name: "Netflix", url: "https://jobs.netflix.com/search?q=intern", status: "Jobs Open", icon: Building2 },
    { name: "Nvidia", url: "https://www.nvidia.com/en-in/about-nvidia/careers/university-recruiting/", status: "Hiring Interns", icon: Sparkles },
    { name: "Goldman Sachs", url: "https://www.goldmansachs.com/careers/students/", status: "Hiring Interns", icon: Sparkles },
    { name: "Adobe", url: "https://careers.adobe.com/us/en/students", status: "Jobs Open", icon: Building2 },
    { name: "Atlassian", url: "https://www.atlassian.com/company/careers/students", status: "Hiring Interns", icon: Sparkles },
    { name: "Infosys", url: "https://www.infosys.com/careers/instep.html", status: "Explore Roles", icon: Globe },
    { name: "TCS", url: "https://www.tcs.com/careers/india/entry-level", status: "Explore Roles", icon: Globe },
    { name: "Y Combinator Jobs", url: "https://www.ycombinator.com/jobs", status: "Jobs Open", icon: Rocket },
];

const getStatusBadgeClass = (status) => {
    switch (status) {
        case "Hiring Interns": return 'bg-emerald-900/90 text-emerald-100 border border-emerald-600/50';
        case "Jobs Open": return 'bg-blue-900/90 text-blue-100 border border-blue-600/50';
        default: return 'bg-neutral-700 text-neutral-300 border border-neutral-600';
    }
};

const InternshipsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showBackToTop && window.pageYOffset > 400) setShowBackToTop(true);
      else if (showBackToTop && window.pageYOffset <= 400) setShowBackToTop(false);
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showBackToTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const categories = useMemo(() => ["All Categories", "Corporate", "Government", "Research", "Platform"], []);
  const regions = useMemo(() => ["All Regions", "India", "Global"], []);
  
  const filteredInternships = useMemo(() => {
    return internships.filter(internship => {
      const categoryMatch = selectedCategory === "All Categories" || internship.type === selectedCategory;
      const regionMatch = selectedRegion === "All Regions" || internship.region === selectedRegion;
      return categoryMatch && regionMatch;
    });
  }, [selectedCategory, selectedRegion]);

  const Breadcrumb = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-sm text-neutral-400">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                <Home className="w-4 h-4" />
                Home
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Internships</span>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      {/* <Header /> */}
      <main className="flex-1 w-full pt-12 pb-16">
        <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Internship Opportunities
            </h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
              Your centralized guide to top internships and direct company career pages.
            </p>
        </div>

        <Breadcrumb />
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <aside className="md:col-span-1 h-fit md:sticky top-24">
              <div className="bg-neutral-900 p-5 rounded-lg border border-neutral-800">
                  <h3 className="text-lg font-semibold text-white mb-4">Filter by Type</h3>
                  <div className="space-y-2">
                      {categories.map(category => (
                          <button key={category} onClick={() => setSelectedCategory(category)} className={clsx('w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors', selectedCategory === category ? 'bg-blue-600 text-white' : 'text-neutral-300 hover:bg-neutral-800 hover:text-white')}>
                              {category}
                          </button>
                      ))}
                  </div>
                  <h3 className="text-lg font-semibold text-white mt-6 mb-4">Filter by Region</h3>
                  <div className="space-y-2">
                      {regions.map(region => (
                          <button key={region} onClick={() => setSelectedRegion(region)} className={clsx('w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-colors', selectedRegion === region ? 'bg-blue-600 text-white' : 'text-neutral-300 hover:bg-neutral-800 hover:text-white')}>
                              {region}
                          </button>
                      ))}
                  </div>
              </div>
            </aside>

            <main className="md:col-span-3">
              <Card className="mb-8 bg-amber-900/50 border border-amber-500/30">
                  <CardContent className="p-6 flex items-start gap-4">
                      <AlertTriangle className="w-8 h-8 text-amber-400 flex-shrink-0" />
                      <div>
                          <h3 className="font-bold text-amber-200">Important Disclaimer</h3>
                          <p className="text-sm text-amber-300 mt-1">Listings are for planning purposes. Deadlines and details change. **Always verify on the official company websites before applying.**</p>
                      </div>
                  </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-white mb-6">Top Company Career Pages</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
                  {companyCareerPages.map(company => {
                      const Icon = company.icon;
                      return (
                        <a href={company.url} target="_blank" rel="noopener noreferrer" key={company.name} className="group block p-4 bg-neutral-900 border border-neutral-800 rounded-lg shadow-sm hover:border-blue-500 hover:-translate-y-1 transition-all">
                            <div className="flex items-center gap-3 mb-2">
                                <Icon className="w-5 h-5 text-neutral-400" />
                                <p className="font-bold text-neutral-200">{company.name}</p>
                            </div>
                            <Badge className={getStatusBadgeClass(company.status)}>{company.status}</Badge>
                        </a>
                      );
                  })}
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">Internship Listings</h2>
              <p className="text-sm text-neutral-400 mb-6">Showing {filteredInternships.length} of {internships.length} opportunities.</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredInternships.map((internship, index) => {
                  const Icon = internship.icon;
                  return (
                    <Card key={index} className="bg-neutral-900 border border-neutral-800 rounded-lg shadow-sm hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all flex flex-col">
                      <CardContent className="p-6 flex flex-col flex-grow">
                          <div className="flex justify-between items-start mb-3">
                              <div>
                                  <Badge className="mb-2 bg-neutral-800 text-blue-300 border border-neutral-700">{internship.company}</Badge>
                                  <h2 className="font-bold text-lg text-white leading-tight">{internship.role}</h2>
                              </div>
                              <Icon className="w-6 h-6 text-neutral-500 flex-shrink-0" />
                          </div>
                          <p className="text-sm text-neutral-400 mb-4 flex-grow line-clamp-3">{internship.description}</p>
                          <div className="mt-auto pt-4 border-t border-neutral-800">
                              <p className="flex items-center text-sm font-semibold text-red-400 mb-4"><Calendar className="w-4 h-4 mr-2" /> Deadline: {internship.deadline}</p>
                              {internship.url &&
                                  <Button asChild size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                                      <a href={internship.url} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-4 h-4 mr-2" /> View Opportunity</a>
                                  </Button>
                              }
                          </div>
                      </CardContent>
                    </Card>
                  );
                })}
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

export default InternshipsPage;
