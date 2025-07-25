import { Link } from "react-router-dom";
import { useState, useEffect } from "react"; // Standard React hooks

// --- HELPER COMPONENTS (INLINE SVGs) ---
// This avoids the need for the 'lucide-react' library

const ShieldIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-white"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 mr-2"
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);


const PrivacyPolicyFinal = () => {
  // Data for the navigation sidebar
  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "data-collected", title: "2. Information We Collect" },
    { id: "cookies", title: "3. Cookies and Tracking" },
    { id: "analytics", title: "4. Analytics Services" },
    { id: "data-usage", title: "5. How We Use Your Data" },
    { id: "data-sharing", title: "6. Information Sharing" },
    { id: "data-security", title: "7. Data Security" },
    { id: "data-retention", title: "8. Data Retention" },
    { id: "user-rights", title: "9. Your Rights & Choices" },
    { id: "policy-changes", title: "10. Changes to This Policy" },
    { id: "contact", title: "11. Contact Us" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-800 dark:text-slate-300 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <ShieldIcon />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Privacy Policy</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">How we protect and handle your data.</p>
              </div>
            </div>
            <Link 
              to="/" 
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              <ArrowLeftIcon />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Sticky Navigation Sidebar */}
          <aside className="lg:w-64 mb-10 lg:mb-0">
            <div className="sticky top-28">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Contents</h3>
              <nav>
                <ul className="space-y-2">
                  {sections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Privacy Policy Content */}
          <div className="flex-1 min-w-0 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Privacy Policy for Dev Haven Resources Center</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            
            <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
              <section id="introduction">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">1. Introduction</h3>
                <p>This Privacy Policy explains how Dev Haven Resources Center ("DHRC", "we", "us") collects, uses, and protects your information when you use our website and services (the "Service"). We are committed to protecting your privacy and ensuring you have a positive experience on our site.</p>
              </section>

              <section id="data-collected">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">2. Information We Collect</h3>
                <p>We collect information to provide and improve our services. The types of information we collect include:</p>
                <ul className="list-disc list-inside space-y-2 mt-2 pl-4">
                  <li><strong>Information You Provide:</strong> This includes any data you submit voluntarily, such as through a contact form or when you sign up for an account.</li>
                  <li><strong>Analytics Data:</strong> We automatically collect data to monitor and analyze web traffic. This may include your IP address, browser type, device information, operating system, and pages you visit on our site. This data is aggregated and anonymized wherever possible.</li>
                </ul>
              </section>

              <section id="cookies">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">3. Cookies and Tracking Technologies</h3>
                <p>We use cookies and similar technologies. Cookies are small files stored on your device that help us operate and improve the Service. We use them to:</p>
                <ul className="list-disc list-inside space-y-2 mt-2 pl-4">
                    <li>Understand and save your preferences for future visits.</li>
                    <li>Compile aggregate data about site traffic and interactions to improve our offerings.</li>
                </ul>
                <p>You can control the use of cookies at the individual browser level.</p>
              </section>

              <section id="analytics">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">4. Analytics Services</h3>
                <p>This website uses Vercel Analytics, a privacy-focused analytics service, to help us understand visitor trends and improve our website. Vercel Analytics does not use cookies and does not collect any personally identifiable information. For more information, please see the <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Vercel Privacy Policy</a>.</p>
              </section>
              
              <section id="data-usage">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">5. How We Use Your Information</h3>
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 mt-2 pl-4">
                  <li>To provide, operate, and maintain our Service.</li>
                  <li>To improve, personalize, and expand our Service.</li>
                  <li>To understand and analyze how you use our Service.</li>
                  <li>To develop new products, services, features, and functionality.</li>
                </ul>
              </section>

              <section id="data-sharing">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">6. Information Sharing</h3>
                <p>We do not sell, trade, or rent your personal identification information to others. We may share aggregated, non-personally identifiable information with our partners for analysis. We will only share personal information if required by law or with your explicit consent.</p>
              </section>

              <section id="data-security">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">7. Data Security</h3>
                <p>We are committed to protecting your data. We implement appropriate security measures to protect against unauthorized access, alteration, or destruction of your information. However, please remember that no method of transmission over the Internet is 100% secure.</p>
              </section>

              <section id="data-retention">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">8. Data Retention</h3>
                <p>We will retain your information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.</p>
              </section>

              <section id="user-rights">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">9. Your Rights & Choices</h3>
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 mt-2 pl-4">
                  <li>The right to access – You have the right to request copies of your personal data.</li>
                  <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
                  <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                  <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
                </ul>
                <p>To exercise these rights, please contact us.</p>
              </section>

              <section id="policy-changes">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">10. Changes to This Policy</h3>
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.</p>
              </section>

              <section id="contact">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">11. Contact Us</h3>
                <p>If you have any questions about this Privacy Policy, please contact us through our website's official contact channels or by sending an email to our support address.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyFinal;
