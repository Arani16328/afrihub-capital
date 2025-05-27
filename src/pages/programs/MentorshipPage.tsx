
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Clock, Target, MessageCircle } from "lucide-react";

const MentorshipPage = () => {
  return (
    <main className="pt-32 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Mentorship Network</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            One-on-one guidance from successful Kenyan entrepreneurs and industry experts 
            who understand the local business landscape.
          </p>
        </div>

        {/* Program Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Mentorship Program</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MessageCircle className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">One-on-One Sessions</h3>
                  <p className="text-gray-600">Weekly personalized mentoring sessions</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Expert Network</h3>
                  <p className="text-gray-600">Access to 50+ successful Kenyan entrepreneurs</p>
                </div>
              </div>
              <div className="flex items-start">
                <Target className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Local Focus</h3>
                  <p className="text-gray-600">Kenya-specific business strategies and insights</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop"
              alt="Mentorship Network"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        {/* Mentor Expertise */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Mentors' Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Business Strategy & Planning",
              "Financial Management",
              "Marketing & Sales",
              "Operations & Supply Chain",
              "Technology & Innovation",
              "Legal & Compliance",
              "Human Resources",
              "Investment & Fundraising",
              "Market Expansion"
            ].map((expertise, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
                <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-lg">{expertise}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Mentorship Benefits */}
        <div className="bg-primary/5 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Mentorship Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Personalized business guidance",
              "Industry-specific insights",
              "Network expansion opportunities",
              "Problem-solving support",
              "Strategic decision making",
              "Access to funding networks",
              "Market entry strategies",
              "Long-term relationship building"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-primary mr-3" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Connect with a Mentor Today</h2>
          <p className="text-gray-600 mb-6">
            Get matched with an experienced mentor who can guide your business journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/apply">
              <Button className="bg-primary hover:bg-primary-hover text-white">
                Apply for Mentorship
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

export default MentorshipPage;
