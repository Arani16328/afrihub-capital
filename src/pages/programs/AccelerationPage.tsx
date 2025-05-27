
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Users, Target, TrendingUp } from "lucide-react";

const AccelerationPage = () => {
  return (
    <main className="pt-32 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Acceleration Program</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Fast-track growth program for established local Kenyan businesses ready to scale 
            and expand their market reach.
          </p>
        </div>

        {/* Program Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Program Overview</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Duration</h3>
                  <p className="text-gray-600">4 months intensive acceleration</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Cohort Size</h3>
                  <p className="text-gray-600">Maximum 8 businesses per cohort</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Focus</h3>
                  <p className="text-gray-600">Rapid scaling and market expansion</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
              alt="Acceleration Program"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        {/* Program Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Acceleration Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Growth Strategy Development",
              "Advanced Financial Modeling",
              "Market Expansion Planning",
              "Investment Readiness",
              "Strategic Partnerships",
              "Technology Integration",
              "Team Building & Leadership",
              "Performance Optimization",
              "Exit Strategy Planning"
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
                <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-lg">{feature}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="bg-primary/5 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Eligibility Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Existing business with proven revenue",
              "Minimum 1 year of operations",
              "Clear growth potential and market opportunity",
              "Committed leadership team",
              "Financial records and documentation",
              "Scalable business model"
            ].map((criteria, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span>{criteria}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Accelerate Your Growth?</h2>
          <p className="text-gray-600 mb-6">
            Take your established business to the next level with our acceleration program.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/apply">
              <Button className="bg-primary hover:bg-primary-hover text-white">
                Apply Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AccelerationPage;
