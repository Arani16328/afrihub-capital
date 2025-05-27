
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Banknote, Users, Target, TrendingUp } from "lucide-react";

const FundingProgramPage = () => {
  return (
    <main className="pt-32 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Funding & Investment Program</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Connect with investors and access funding from seed to Series A for local Kenyan 
            unbankable businesses with high growth potential.
          </p>
        </div>

        {/* Program Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Funding Opportunities</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Banknote className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Seed Funding</h3>
                  <p className="text-gray-600">KES 100,000 - KES 1,000,000</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrendingUp className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Growth Capital</h3>
                  <p className="text-gray-600">KES 1,000,000 - KES 5,000,000</p>
                </div>
              </div>
              <div className="flex items-start">
                <Target className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Strategic Investment</h3>
                  <p className="text-gray-600">KES 5,000,000+</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"
              alt="Funding Program"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        {/* Funding Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Funding Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Application",
                description: "Submit your business plan and financial projections"
              },
              {
                step: "2", 
                title: "Due Diligence",
                description: "Comprehensive business and market analysis"
              },
              {
                step: "3",
                title: "Investor Matching",
                description: "Connect with the right investors for your business"
              },
              {
                step: "4",
                title: "Funding",
                description: "Secure investment and ongoing support"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Focus */}
        <div className="bg-primary/5 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Investment Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Fintech and micro-lending solutions",
              "Agricultural technology and food security",
              "Transportation and logistics innovations",
              "Retail and e-commerce platforms",
              "Construction and housing solutions",
              "Cryptocurrency and blockchain applications"
            ].map((area, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Secure Funding?</h2>
          <p className="text-gray-600 mb-6">
            Connect with our investor network and take your business to the next level.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/apply">
              <Button className="bg-primary hover:bg-primary-hover text-white">
                Apply for Funding
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

export default FundingProgramPage;
