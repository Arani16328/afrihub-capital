
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Award, Users } from "lucide-react";

const SuccessStoriesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  
  const filters = ["All", "Retail", "Agriculture", "Green Energy", "Transport", "FinTech"];

  const stories = [
    {
      id: 1,
      founder: "Sarah Kimani",
      founderImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      company: "GreenTech Solutions",
      logo: "🌱",
      category: "Green Energy",
      summary: "Started with a solar panel rental idea, GreenTech Solutions now powers over 10,000 rural homes across Kenya. Sarah's innovative financing model made clean energy accessible to low-income families.",
      tags: ["KES 1.2M Raised", "Demo Day Winner", "10K+ Customers"],
      cohort: "2023",
      fundingRaised: "KES 8.5M",
      employees: 45,
      background: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      founder: "David Mwangi",
      founderImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      company: "LogiFlow Transport",
      logo: "🚛",
      category: "Transport",
      summary: "Revolutionizing last-mile delivery in East Africa with AI-powered route optimization. LogiFlow has reduced delivery costs by 40% for over 200 businesses across 3 countries.",
      tags: ["Series A Ready", "3-Country Expansion", "200+ Partners"],
      cohort: "2022",
      fundingRaised: "KES 15M",
      employees: 78,
      background: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      founder: "Grace Wanjiku",
      founderImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      company: "FarmLink Digital",
      logo: "🌾",
      category: "Agriculture",
      summary: "Connecting smallholder farmers directly to markets through a digital platform. Grace has helped over 5,000 farmers increase their income by an average of 60% through better market access.",
      tags: ["5K+ Farmers", "60% Income Increase", "B-Corp Certified"],
      cohort: "2023",
      fundingRaised: "KES 6.2M",
      employees: 32,
      background: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      founder: "James Ochieng",
      founderImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      company: "PayPoint Kenya",
      logo: "💳",
      category: "FinTech",
      summary: "Digital payment solution for informal businesses. James built a network of 8,000+ agents providing financial services to previously unbanked communities across rural Kenya.",
      tags: ["8K+ Agents", "Financial Inclusion", "Rural Focus"],
      cohort: "2022",
      fundingRaised: "KES 12M",
      employees: 56,
      background: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      founder: "Mary Njeri",
      founderImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      company: "EcoMarket",
      logo: "🛒",
      category: "Retail",
      summary: "Online marketplace for sustainable and locally-made products. Mary has empowered over 1,500 local artisans and eco-friendly businesses to reach customers nationwide.",
      tags: ["1.5K+ Vendors", "Sustainable Focus", "Nationwide Delivery"],
      cohort: "2024",
      fundingRaised: "KES 4.8M",
      employees: 28,
      background: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      founder: "Peter Kiprotich",
      founderImage: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=300&h=300&fit=crop&crop=face",
      company: "WasteWise",
      logo: "♻️",
      category: "Green Energy",
      summary: "Waste-to-energy solutions for urban areas. Peter's innovative biogas systems have processed over 10,000 tons of organic waste while generating clean energy for 500+ households.",
      tags: ["10K+ Tons Processed", "500+ Households", "Clean Energy"],
      cohort: "2023",
      fundingRaised: "KES 7.3M",
      employees: 38,
      background: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const filteredStories = selectedFilter === "All" 
    ? stories 
    : stories.filter(story => story.category === selectedFilter);

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-800 to-green-800 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Startups That Made It
            </h1>
            <p className="text-xl mb-8">
              Meet the entrepreneurs who transformed their ideas into thriving businesses 
              with AfriHub Capital's support.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sm">Startups Funded</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold">87%</div>
                <div className="text-sm">Success Rate</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold">KES 2.5B+</div>
                <div className="text-sm">Total Raised</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold">5,000+</div>
                <div className="text-sm">Jobs Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter)}
                className={selectedFilter === filter ? "bg-blue-600 text-white" : ""}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Story Header */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                  <img 
                    src={story.background} 
                    alt={story.company}
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl bg-white/20 p-4 rounded-full backdrop-blur-sm">
                      {story.logo}
                    </div>
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-6">
                  {/* Founder Info */}
                  <div className="flex items-center mb-4">
                    <img 
                      src={story.founderImage} 
                      alt={story.founder}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{story.founder}</h3>
                      <p className="text-blue-600 font-medium">{story.company}</p>
                    </div>
                  </div>

                  {/* Story Summary */}
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {story.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="border-t pt-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-green-600">{story.fundingRaised}</div>
                        <div className="text-xs text-gray-500">Funding</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-blue-600">{story.employees}</div>
                        <div className="text-xs text-gray-500">Employees</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-purple-600">{story.cohort}</div>
                        <div className="text-xs text-gray-500">Cohort</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Collective Impact</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Together, our portfolio companies are transforming Africa's economy
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">KES 2.5B+</div>
              <p className="text-blue-100">Total Valuation</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">5,000+</div>
              <p className="text-blue-100">Jobs Created</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">50M+</div>
              <p className="text-blue-100">Lives Impacted</p>
            </div>
            <div className="text-center">
              <ArrowRight className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">25</div>
              <p className="text-blue-100">Successful Exits</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the next generation of African entrepreneurs building businesses that matter.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  );
};

export default SuccessStoriesPage;
