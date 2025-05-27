
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Users, Target, Banknote } from "lucide-react";

const IncubationPage = () => {
  return (
    <main className="pt-32 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Full Incubation Program</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            6-month intensive program with mentorship, training, and funding opportunities 
            for local Kenyan entrepreneurs from unbankable businesses.
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
                  <p className="text-gray-600">6 months comprehensive program</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Cohort Size</h3>
                  <p className="text-gray-600">Maximum 10 entrepreneurs per cohort</p>
                </div>
              </div>
              <div className="flex items-start">
                <Banknote className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Funding</h3>
                  <p className="text-gray-600">Up to KES 500,000 seed funding</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop"
              alt="Full Incubation Program"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        {/* Program Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Program Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Business Development Training",
              "One-on-One Mentorship",
              "Access to Funding Networks",
              "Market Entry Strategy",
              "Financial Management",
              "Digital Marketing for Local Markets",
              "Legal and Compliance Support",
              "Networking Opportunities",
              "Post-Program Support"
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
                <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-lg">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Target Businesses */}
        <div className="bg-primary/5 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Ideal for These Local Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Fintech and banking (mpesa agents, micro-lending)",
              "Agricultural and AgriTech (farmers, butcheries)",
              "Construction industries (local hardware)",
              "Tenderprenuers (local contractors)",
              "Retailing (kiosks, local shops, wholesalers)",
              "Transport and logistics businesses"
            ].map((business, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span>{business}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Scale Your Business?</h2>
          <p className="text-gray-600 mb-6">
            Join our comprehensive incubation program and access the resources you need to succeed.
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

export default IncubationPage;
