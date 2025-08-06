import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react"; // Assuming lucide-react is available as per previous requests

const TermsOfServiceEnhanced = () => {
  // Data for the navigation sidebar
  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms" },
    { id: "description", title: "2. Description of Service" },
    { id: "conduct", title: "3. User Conduct" },
    { id: "ip", title: "4. Intellectual Property" },
    { id: "resources", title: "5. Use of Resources" },
    { id: "disclaimers", title: "6. Disclaimers" },
    { id: "liability", title: "7. Limitation of Liability" },
    { id: "third-party", title: "8. Third-Party Links" },
    { id: "termination", title: "9. Termination" },
    { id: "changes", title: "10. Changes to Terms" },
    { id: "law", title: "11. Governing Law" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-800 dark:text-slate-300">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Terms of Service</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Rules for using our platform and resources.</p>
              </div>
            </div>
            <Link 
              to="/" 
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
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

          {/* Terms Content Section */}
          <div className="flex-1 min-w-0 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Terms of Service for Center of Knowledge & Resources</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
            
            <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>Welcome to the Center of Knowledge & Resources ("CKR", "we", "us", or "our"). These Terms of Service ("Terms") govern your access to and use of our website, resources, and services (collectively, the "Service"). Please read them carefully.</p>
              
              <section id="acceptance">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">1. Acceptance of Terms</h3>
                <p>By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not use the Service. Your continued use of the Service constitutes your acceptance of any changes to these Terms.</p>
              </section>

              <section id="description">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">2. Description of Service</h3>
                <p>CKR provides a curated collection of educational materials, code snippets, project templates, guides, and other resources for developers and students ("Resources"). The Service is provided for informational and educational purposes only.</p>
              </section>

              <section id="conduct">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">3. User Conduct</h3>
                <p>You agree to use the Service only for lawful purposes. You are prohibited from:</p>
                <ul className="list-disc list-inside space-y-2 mt-2 pl-4">
                  <li>Using the Service in any way that could damage, disable, or impair our servers or networks.</li>
                  <li>Attempting to gain unauthorized access to any part of the Service.</li>
                  <li>Introducing viruses, malware, or any other malicious code to the Service.</li>
                  <li>Using the Service to distribute spam or any form of unsolicited communication.</li>
                </ul>
              </section>

              <section id="ip">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">4. Intellectual Property Rights</h3>
                <p>Our website, branding, and original content are the exclusive property of CKR. The Resources we provide, particularly third-party templates and code snippets, are subject to their own respective open-source licenses (e.g., MIT, GPL). It is your responsibility to understand and comply with the license of any third-party resource you use.</p>
              </section>

              <section id="resources">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">5. Use of Resources</h3>
                <p>CKR grants you a limited, non-exclusive license to access and use the Resources for your personal, non-commercial, and educational purposes. This license does not grant you ownership of the Resources. You agree not to reproduce, sell, or resell any part of the Service without express written permission from us or the original license holder.</p>
              </section>

              <section id="disclaimers">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">6. Disclaimers</h3>
                <p>The Service and all Resources are provided on an "as is" and "as available" basis without any warranties, express or implied. CKR does not warrant that the Service will be error-free or that any information is accurate or reliable. You use the Service and Resources at your own risk.</p>
              </section>
              
              <section id="liability">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">7. Limitation of Liability</h3>
                <p>To the fullest extent permitted by law, CKR shall not be liable for any indirect, incidental, special, or consequential damages, including loss of profits or data, resulting from your use of the Service or any Resources obtained from it.</p>
              </section>

              <section id="third-party">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">8. Third-Party Links</h3>
                <p>The Service may contain links to third-party websites or services that are not owned or controlled by CKR. We are not responsible for the content or practices of any third-party websites.</p>
              </section>

              <section id="termination">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">9. Termination</h3>
                <p>We reserve the right to terminate or suspend your access to the Service at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the Service, us, or third parties.</p>
              </section>

              <section id="changes">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">10. Changes to Terms</h3>
                <p>We reserve the right to modify these Terms at any time. We will notify you by updating the "Last updated" date at the top of this page. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.</p>
              </section>
              
              <section id="law">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">11. Governing Law</h3>
                <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which CKR operates, without regard to its conflict of law provisions.</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServiceEnhanced;
