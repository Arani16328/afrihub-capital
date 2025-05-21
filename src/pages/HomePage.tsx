
import HeroSection from "@/components/home/HeroSection";
import Features from "@/components/home/Features";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import Testimonials from "@/components/home/Testimonials";
import Gallery from "@/components/home/Gallery";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <Features />
      <ProgramsPreview />
      
      {/* Video Section */}
      <section className="py-16 bg-primary/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Experience Campus Life</h2>
              <p className="text-gray-600 mb-6">
                Get a glimpse into our world-class facilities, engaged students, and expert instructors. 
                At Kasarani Catering & Beauty College, we provide a dynamic learning environment focused on practical skills.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Hands-on Learning</h3>
                    <p className="text-gray-600">Practice in our fully-equipped labs and kitchens</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Industry Connections</h3>
                    <p className="text-gray-600">Learn from professionals and build your network</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Job-Ready Skills</h3>
                    <p className="text-gray-600">Graduate with the expertise employers are seeking</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <Button className="bg-primary hover:bg-primary-hover text-white">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1800&auto=format&fit=crop" 
                    alt="Students learning" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button className="bg-white rounded-full p-4 hover:bg-primary hover:text-white transition-colors">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Gallery />
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Take the first step toward a rewarding career. Apply now to join our upcoming intake.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/courses">
              <Button className="bg-white text-primary hover:bg-gray-100">
                Browse Courses
              </Button>
            </Link>
            <Link to="/admissions">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
