
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import IncubationPage from "./pages/IncubationPage";
import FundingPage from "./pages/FundingPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import ApplyPage from "./pages/ApplyPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";
import CookieBanner from "./components/CookieBanner";

// Program Pages
import PreIncubationPage from "./pages/programs/PreIncubationPage";
import IncubationProgramPage from "./pages/programs/IncubationPage";
import AccelerationPage from "./pages/programs/AccelerationPage";
import FundingProgramPage from "./pages/programs/FundingProgramPage";
import MentorshipPage from "./pages/programs/MentorshipPage";
import CommunityPage from "./pages/programs/CommunityPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/program" element={<IncubationPage />} />
              <Route path="/funding" element={<FundingPage />} />
              <Route path="/success-stories" element={<SuccessStoriesPage />} />
              <Route path="/apply" element={<ApplyPage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* Program Routes */}
              <Route path="/programs/pre-incubation" element={<PreIncubationPage />} />
              <Route path="/programs/incubation" element={<IncubationProgramPage />} />
              <Route path="/programs/acceleration" element={<AccelerationPage />} />
              <Route path="/programs/funding" element={<FundingProgramPage />} />
              <Route path="/programs/mentorship" element={<MentorshipPage />} />
              <Route path="/programs/community" element={<CommunityPage />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <WhatsAppButton />
            <CookieBanner />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
