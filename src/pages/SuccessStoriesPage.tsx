import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Award, Users } from "lucide-react";

const SuccessStoriesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  
  const filters = ["All", "Retail", "Agriculture", "Green Energy", "Transport", "FinTech"];

  const stories = [
    {
      id: 1,
      founder: "Catherine Robi",
      founderImage: "https://i.postimg.cc/SKp8PY9G/Businessman-silhouette-avatar-profile-picture.jpg",
      company: "Solar Mama Mboga",
      logo: "🌱",
      category: "Green Energy",
      summary: "Started with a solar panel rental idea for her vegetable stall, Catherine now powers over 200 mama mboga businesses across Nairobi. Her innovative financing model made clean energy accessible to small-scale vendors.",
      tags: ["KES 500K Raised", "Demo Day Winner", "200+ Customers"],
      cohort: "2023",
      fundingRaised: "KES 1.2M",
      employees: 8,
      background: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      founder: "Grace Atieno",
      founderImage: "https://i.postimg.cc/SKp8PY9G/Businessman-silhouette-avatar-profile-picture.jpg",
      company: "Boda Connect",
      logo: "🚛",
      category: "Transport",
      summary: "Revolutionizing boda boda operations in Kisumu with route optimization and digital payments. Grace has helped over 300 riders increase their daily earnings by 40% through better coordination.",
      tags: ["Digital Payments", "300+ Riders", "40% Income Boost"],
      cohort: "2022",
      fundingRaised: "KES 800K",
      employees: 12,
      background: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      founder: "Chacha Mwita",
      founderImage: "https://i.postimg.cc/SKp8PY9G/Businessman-silhouette-avatar-profile-picture.jpg",
      company: "Shamba Digital",
      logo: "🌾",
      category: "Agriculture",
      summary: "Connecting smallholder maize farmers in Mara region directly to markets through WhatsApp. Chacha has helped over 500 farmers increase their income by 60% through better market access and fair pricing.",
      tags: ["500+ Farmers", "60% Income Increase", "WhatsApp Platform"],
      cohort: "2023",
      fundingRaised: "KES 600K",
      employees: 6,
      background: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      founder: "James Ochieng",
      founderImage: "https://i.postimg.cc/SKp8PY9G/Businessman-silhouette-avatar-profile-picture.jpg",
      company: "Kiosk Pay",
      logo: "💳",
      category: "FinTech",
      summary: "Digital payment solution for local kiosks and shops. James built a network of 150+ agents providing M-Pesa services and micro-lending to previously unbanked communities in rural Kenya.",
      tags: ["150+ Agents", "Micro-lending", "Rural Focus"],
      cohort: "2022",
      fundingRaised: "KES 1M",
      employees: 10,
      background: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      founder: "Mary Njeri",
      founderImage: "https://i.postimg.cc/SKp8PY9G/Businessman-silhouette-avatar-profile-picture.jpg",
      company: "Local Craft Market",
      logo: "🛒",
      category: "Retail",
      summary: "Online marketplace for local craftsmen and women. Mary has empowered over 200 local artisans to reach customers across Kenya, increasing their average monthly income by 80%.",
      tags: ["200+ Artisans", "Local Focus", "80% Income Growth"],
      cohort: "2024",
      fundingRaised: "KES 700K",
      employees: 5,
      background: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      founder: "Peter Kiprotich",
      founderImage: "https://i.postimg.cc/SKp8PY9G/Businessman-silhouette-avatar-profile-picture.jpg",
      company: "Waste2Energy Eldoret",
      logo: "♻️",
      category: "Green Energy",
      summary: "Waste-to-energy solutions for Eldoret town. Peter's biogas systems have processed over 2,000 tons of organic waste while generating clean cooking gas for 100+ local households.",
      tags: ["2K+ Tons Processed", "100+ Households", "Clean Cooking Gas"],
      cohort: "2023",
      fundingRaised: "KES 900K",
      employees: 7,
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
              Local Businesses That Made It
            </h1>
            <p className="text-xl mb-8">
              Meet the local Kenyan entrepreneurs who transformed their small business ideas into thriving enterprises 
              with AfriHub Capital's support.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sm">Local Businesses Funded</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold">87%</div>
                <div className="text-sm">Success Rate</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold">KES 60M</div>
                <div className="text-sm">Total Raised</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold">1,500+</div>
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
              Together, our local portfolio businesses are transforming Kenya's economy
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">KES 100M</div>
              <p className="text-blue-100">Total Valuation</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">1,500+</div>
              <p className="text-blue-100">Jobs Created</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">4,500</div>
              <p className="text-blue-100">Lives Impacted</p>
            </div>
            <div className="text-center">
              <ArrowRight className="h-12 w-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">100</div>
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
          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            Join the next generation of Kenyan entrepreneurs building local businesses that matter.
          </p>
          <p className="text-lg text-blue-600 font-semibold mb-8">
            Application deadline for next cohort: June 31, 2025
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
