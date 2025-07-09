
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, BarChart, Shield, DollarSign, CheckCircle } from "lucide-react";

const FundingPage = () => {
  const fundingTiers = [
    {
      tier: "Seed Stage",
      range: "KES 5,000 - 500,000",
      equity: "5-8%",
      description: "For early-stage startups with validated ideas and initial traction",
      features: ["Market validation support", "Product development guidance", "Basic mentorship", "6-month program"]
    },
    {
      tier: "Growth Stage", 
      range: "KES 500,000 - 1,500,000",
      equity: "7-10%",
      description: "For startups ready to scale with proven business models",
      features: ["Advanced mentorship", "Market expansion support", "Strategic partnerships", "Investor introductions"]
    },
    {
      tier: "Scale Stage",
      range: "KES 1,500,000 - 2,000,000", 
      equity: "8-12%",
      description: "For high-growth startups preparing for Series A funding",
      features: ["Executive coaching", "International expansion", "Advanced analytics", "Board advisory"]
    }
  ];

  const milestones = [
    {
      title: "Application Approval",
      amount: "20%",
      description: "Initial funding upon acceptance into the program"
    },
    {
      title: "Product Development",
      amount: "30%", 
      description: "Released after achieving key product milestones"
    },
    {
      title: "Market Validation",
      amount: "25%",
      description: "Disbursed upon reaching customer acquisition targets"
    },
    {
      title: "Growth Metrics",
      amount: "25%",
      description: "Final disbursement based on growth and demo day performance"
    }
  ];

  const investorBenefits = [
    {
      title: "Secure Partner Portal",
      description: "Access real-time portfolio performance and startup metrics",
      icon: Shield
    },
    {
      title: "Startup Scouting",
      description: "Early access to vetted, high-potential African startups",
      icon: Users
    },
    {
      title: "Progress Metrics",
      description: "Detailed analytics and KPI tracking for all investments",
      icon: BarChart
    },
    {
      title: "Expert Due Diligence",
      description: "Professional screening and validation by our expert team",
      icon: CheckCircle
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Funding Model
            </h1>
            <p className="text-xl mb-8">
              Smart funding solutions designed to fuel African startups from seed to scale, 
              with milestone-based disbursement and transparent equity terms.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">Seed Capital Range</h3>
                <p className="text-3xl font-bold text-yellow-400">KES 5,000 - 2M</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-2">Equity Range</h3>
                <p className="text-3xl font-bold text-yellow-400">5% - 12%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Funding Tiers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored funding packages based on your startup's stage and growth potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fundingTiers.map((tier, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{tier.range}</div>
                  <div className="text-lg text-gray-600">Equity: {tier.equity}</div>
                </div>
                <p className="text-gray-700 mb-6 text-center">{tier.description}</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our Funding Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestone-based disbursement ensures accountability and maximizes startup success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">{milestone.amount}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">Additional Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <BarChart className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Portfolio Dashboard</h4>
                  <p className="text-sm text-gray-600">Real-time visibility into startup progress</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Monthly Reporting</h4>
                  <p className="text-sm text-gray-600">Detailed KPI tracking and analysis</p>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold">Ongoing Support</h4>
                  <p className="text-sm text-gray-600">Continued mentorship post-program</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor View */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Invest Through AfriHub?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us to access vetted African startups and maximize your investment impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {investorBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Investment Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">87%</div>
                <p className="text-gray-600">Success Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">3.2x</div>
                <p className="text-gray-600">Average ROI</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">18</div>
                <p className="text-gray-600">Months Avg. to Exit</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">KES 2.5B+</div>
                <p className="text-gray-600">Total Portfolio Value</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Fund Your Startup?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Apply for funding and join Africa's most successful startup accelerator program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Apply for Funding
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                Become an Investor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FundingPage;
