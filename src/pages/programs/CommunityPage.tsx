
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Calendar, Network, MessageSquare } from "lucide-react";

const CommunityPage = () => {
  return (
    <main className="pt-32 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Entrepreneur Community</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Join a vibrant community of like-minded Kenyan entrepreneurs building the future 
            of local business across Africa.
          </p>
        </div>

        {/* Community Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Community Features</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Users className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Active Members</h3>
                  <p className="text-gray-600">500+ Kenyan entrepreneurs and counting</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Regular Events</h3>
                  <p className="text-gray-600">Monthly meetups and networking events</p>
                </div>
              </div>
              <div className="flex items-start">
                <MessageSquare className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Peer Support</h3>
                  <p className="text-gray-600">24/7 online forums and discussion groups</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
              alt="Entrepreneur Community"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        {/* Community Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Community Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Networking Opportunities",
              "Knowledge Sharing",
              "Collaboration Projects",
              "Business Partnerships",
              "Peer Mentoring",
              "Resource Sharing",
              "Market Insights",
              "Success Celebrations",
              "Challenge Support"
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border">
                <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-lg">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Community Events */}
        <div className="bg-primary/5 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Regular Community Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Monthly Meetups</h3>
              <p className="text-gray-600">In-person networking events in major Kenyan cities</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Online Workshops</h3>
              <p className="text-gray-600">Weekly skill-building sessions and industry updates</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Pitch Sessions</h3>
              <p className="text-gray-600">Monthly opportunities to present your business</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Success Stories</h3>
              <p className="text-gray-600">Quarterly celebrations of member achievements</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Community Today</h2>
          <p className="text-gray-600 mb-6">
            Connect with fellow entrepreneurs and grow your business network.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/apply">
              <Button className="bg-primary hover:bg-primary-hover text-white">
                Join Community
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CommunityPage;
