
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import AIInterviews from "./pages/AIInterviews";
import Organizer from "./pages/Organizer";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";
import Ideas from "./pages/Ideas";
import Blogs from "./pages/Blogs";
import DSA from "./pages/DSA";
import CodingChallenges from "./pages/CodingChallenges";
import Internships from "./pages/Internships";
import Notes from "./pages/Notes";
import Documents from "./pages/Documents";
import Theories from "./pages/Theories";
import StudentProjects from "./pages/StudentProjects";
import Events from "./pages/Events";
import Roadmaps from "./pages/Roadmaps";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/ai-interviews" element={<AIInterviews />} />
          <Route path="/organizer" element={<Organizer />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/dsa" element={<DSA />} />
          <Route path="/coding-challenges" element={<CodingChallenges />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/theories" element={<Theories />} />
          <Route path="/student-projects" element={<StudentProjects />} />
          <Route path="/events" element={<Events />} />
          <Route path="/roadmaps" element={<Roadmaps />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
