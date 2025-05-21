
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

// Import individual course pages
import BeautyHairdressing from "./pages/courses/BeautyHairdressing";
import CateringHospitality from "./pages/courses/CateringHospitality";
import BakingTechnology from "./pages/courses/BakingTechnology";
import ICTFrontOffice from "./pages/courses/ICTFrontOffice";
import Nutrition from "./pages/courses/Nutrition";
import BaristaTraining from "./pages/courses/BaristaTraining";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Individual course pages */}
          <Route path="/courses/beauty-hairdressing" element={<BeautyHairdressing />} />
          <Route path="/courses/catering-hospitality" element={<CateringHospitality />} />
          <Route path="/courses/baking-technology" element={<BakingTechnology />} />
          <Route path="/courses/ict-front-office" element={<ICTFrontOffice />} />
          <Route path="/courses/nutrition" element={<Nutrition />} />
          <Route path="/courses/barista-training" element={<BaristaTraining />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
