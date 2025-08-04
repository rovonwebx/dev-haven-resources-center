import React, { useState, useMemo, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trophy, ExternalLink, Globe, Home, ArrowUp, Link2 } from "lucide-react";
import clsx from 'clsx';

// --- Custom SVG Logo Components for Platforms ---
const LeetCodeLogo = (props) => (
  <svg {...props} viewBox="0 0 1024 1024" fill="currentColor"><path d="M761.6 102.4h153.6v153.6H761.6zM761.6 768h153.6v153.6H761.6zM563.2 102.4h153.6v153.6H563.2zM358.4 102.4h153.6v153.6H358.4zM160 102.4h153.6v153.6H160zM160 307.2h153.6v153.6H160zM160 512h153.6v153.6H160zM160 716.8h153.6v153.6H160zM358.4 716.8h153.6v153.6H358.4zM563.2 716.8h153.6v153.6H563.2zM358.4 307.2h358.4a153.6 153.6 0 01153.6 153.6v102.4a153.6 153.6 0 01-153.6 153.6H358.4V307.2zM512 409.6v204.8h102.4a102.4 102.4 0 000-204.8H512z"></path></svg>
);
const HackerRankLogo = (props) => (
    <svg {...props} viewBox="0 0 16 16" fill="currentColor"><path d="M12.637.01L16 3.385v9.23L12.637 16H3.363L0 12.615V3.385L3.363.01h9.274zM8 11.385a3.385 3.385 0 100-6.77 3.385 3.385 0 000 6.77zm0 1.23a4.615 4.615 0 110-9.23 4.615 4.615 0 010 9.23zM12.308 9.23H10.46v-2.46h1.849V4.615H8.614V2.77h3.694v6.46zm-8.616 0H1.846V4.615h1.846v4.615z"></path></svg>
);
const CodeChefLogo = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M22 13.111h-4.333v-2.222h4.333v2.222zm-6.556 0H11.11v-2.222h4.334v2.222zm-6.555 0H4.556v-2.222h4.333v2.222zm-2.11-4.444H2V6.444h4.334v2.223zm6.555 0h4.334V6.444h-4.334v2.223zm6.556 0h4.333V6.444H20v2.223zm-13.11 8.889H2v-6.666h4.334v6.666zm6.555 0h4.334v-6.666h-4.334v6.666zM20 17.556h2v-6.666h-2v6.666zM2 13.111V4.222h2.222V2h15.556v2.222H22v8.889h-2.222v2.222h-4.334v2.223H8.556v-2.223H4.222v-2.222H2z"></path></svg>
);
const CodeforcesLogo = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/><path d="M8 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm4 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/><path d="M12 8a4 4 0 0 0-4 4"/></svg>
);
const GoogleLogo = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
);
const KaggleLogo = (props) => (
    <svg {...props} viewBox="0 0 32 32" fill="currentColor"><path d="M21.282 25.753l-8.256-8.256-4.225 4.225-3.763 3.763-2.76-2.76 12.22-12.22 3.018-3.018 2.76 2.76-3.018 3.018-4.226 4.225 8.257 8.257-8.035 8.035zM6.92 25.992l-1.88-1.88 4.903-4.903 1.88 1.88-4.902 4.903z"></path></svg>
);


const platforms = [
    { name: "LeetCode", icon: LeetCodeLogo, url: "https://leetcode.com/contest/" },
    { name: "HackerRank", icon: HackerRankLogo, url: "https://www.hackerrank.com/contests" },
    { name: "CodeChef", icon: CodeChefLogo, url: "https://www.codechef.com/contests" },
    { name: "Codeforces", icon: CodeforcesLogo, url: "https://codeforces.com/contests" },
    { name: "Google", icon: GoogleLogo, url: "https://codingcompetitions.withgoogle.com/" },
    { name: "Kaggle", icon: KaggleLogo, url: "https://www.kaggle.com/competitions" },
    { name: "AtCoder", icon: () => <span className="font-bold text-lg">A</span>, url: "https://atcoder.jp/contests/" }, // Simple text icon for less common logos
    { name: "TopCoder", icon: () => <span className="font-bold text-lg">T</span>, url: "https://www.topcoder.com/challenges" },
];

const upcomingContests = [
    { platform: "LeetCode", name: "Weekly Contest 460", date: "28 July 2025, 2:30 AM IST", url: "https://leetcode.com/contest/" },
    { platform: "LeetCode", name: "Biweekly Contest 162", date: "27 July 2025, 2:30 PM IST", url: "https://leetcode.com/contest/" },
    { platform: "HackerRank", name: "Salesforce – Agent of Change Challenge", date: "26 July 2025", url: "https://www.hackerrank.com/contests" },
    { platform: "HackerRank", name: "UKG India Pioneers Challenge", date: "27 July 2025", url: "https://www.hackerrank.com/contests" },
    { platform: "CodeChef", name: "Starters 150", date: "29 July 2025", url: "https://www.codechef.com/contests" },
    { platform: "Codeforces", name: "Codeforces Round 998 (Div. 2)", date: "30 July 2025", url: "https://codeforces.com/contests" },
    { platform: "AtCoder", name: "Beginner Contest 380", date: "27 July 2025", url: "https://atcoder.jp/contests/" },
    { platform: "TopCoder", name: "SRM 860", date: "Weekly", url: "https://www.topcoder.com/challenges" },
    { platform: "Google", name: "Kick Start Round H 2025", date: "15 Aug 2025", url: "https://codingcompetitions.withgoogle.com/kickstart" },
    { platform: "Kaggle", name: "Titanic - Machine Learning from Disaster", date: "Ongoing", url: "https://www.kaggle.com/competitions" },
];

const CodingChallengesPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("All");
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

  const allPlatformNames = useMemo(() => ["All", ...platforms.map(p => p.name)], []);

  const filteredContests = useMemo(() => {
    if (selectedPlatform === "All") return upcomingContests;
    return upcomingContests.filter(contest => contest.platform === selectedPlatform);
  }, [selectedPlatform]);
  
  const Breadcrumb = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center gap-2 text-sm text-neutral-400">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                <Home className="w-4 h-4" />
                Home
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Coding Challenges</span>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      {/* <Header /> */}
      
      <main className="flex-1 w-full pt-12 pb-16">
        <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Coding Challenge Central
            </h2>
            <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
              Your global hub for competitive programming contests and challenges.
            </p>
        </div>

        <Breadcrumb />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <aside className="md:col-span-1 h-fit md:sticky top-24">
              <div className="bg-neutral-900 p-5 rounded-lg border border-neutral-800">
                  <h3 className="text-lg font-semibold text-white mb-4">Platforms</h3>
                  <div className="space-y-2">
                      {allPlatformNames.map(platformName => {
                          const Icon = platforms.find(p => p.name === platformName)?.icon || Globe;
                          return (
                            <button
                                key={platformName}
                                onClick={() => setSelectedPlatform(platformName)}
                                className={clsx(
                                    'w-full text-left px-3 py-2.5 text-sm font-medium rounded-md transition-colors flex items-center gap-3',
                                    selectedPlatform === platformName
                                    ? 'bg-blue-600 text-white'
                                    : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
                                )}
                            >
                                <Icon className="w-5 h-5 flex-shrink-0"/>
                                <span>{platformName}</span>
                            </button>
                          );
                      })}
                  </div>
              </div>
            </aside>

            <main className="md:col-span-3">
              <Card className="mb-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg border-blue-500">
                  <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                          <Link2 size={40} className="text-blue-200"/>
                          <div>
                              <h3 className="font-bold text-lg">Connect Your Coding Profiles</h3>
                              <p className="text-sm text-blue-200">Track your progress and showcase skills by connecting your competitive programming profiles.</p>
                          </div>
                      </div>
                      <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto flex-shrink-0">
                          <a href="https://dhrc-tools.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2"/> Connect Now
                          </a>
                      </Button>
                  </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-white mb-6">Upcoming Contests</h2>
              <div className="space-y-4">
                {filteredContests.map((contest, index) => {
                    const platformInfo = platforms.find(p => p.name === contest.platform);
                    const Icon = platformInfo ? platformInfo.icon : Trophy;
                    return (
                      <a href={contest.url} target="_blank" rel="noopener noreferrer" className="block" key={index}>
                        <Card className="bg-neutral-900 border border-neutral-800 rounded-lg shadow-sm hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-200">
                            <CardContent className="p-5 flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-neutral-800 p-3 rounded-md">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">{contest.name}</h3>
                                        <p className="text-sm text-neutral-400">
                                            {contest.platform} {contest.date && `• ${contest.date}`}
                                        </p>
                                    </div>
                                </div>
                                <ExternalLink className="w-5 h-5 text-neutral-600 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                            </CardContent>
                        </Card>
                      </a>
                    );
                })}
                {filteredContests.length === 0 && (
                  <div className="text-center text-neutral-500 py-12 bg-neutral-900 border border-dashed border-neutral-800 rounded-lg">
                    <Trophy className="mx-auto h-12 w-12 text-neutral-700" />
                    <h3 className="mt-4 text-lg font-semibold text-neutral-300">No Contests Found</h3>
                    <p className="mt-1 text-sm">No upcoming contests listed for {selectedPlatform}. Check their official site for updates.</p>
                  </div>
                )}
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

export default CodingChallengesPage;
