
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowRight, Upload, CheckCircle, Clock, Users } from "lucide-react";

const ApplyPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    stage: "",
    industry: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);
    toast.success("Application submitted successfully! We'll review it and get back to you within 48 hours.");
    // FormSubmit will handle the actual submission
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const applicationSteps = [
    {
      step: 1,
      title: "AI Pre-Screening",
      description: "Your application is automatically reviewed by our AI system for initial qualification",
      icon: CheckCircle,
      duration: "24 hours"
    },
    {
      step: 2,
      title: "Expert Review",
      description: "Our investment team conducts a detailed review of your business plan and pitch deck",
      icon: Users,
      duration: "1 week"
    },
    {
      step: 3,
      title: "Interview Round",
      description: "Video interview with our program directors to assess fit and potential",
      icon: Clock,
      duration: "1-2 weeks"
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-800 to-green-800 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Apply to AfriHub Capital
            </h1>
            <p className="text-xl mb-8">
              Take the first step toward transforming your startup idea into Africa's next success story. 
              Our application process is designed to identify the most promising entrepreneurs.
            </p>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <p className="text-lg font-semibold mb-2">Next Application Deadline</p>
              <p className="text-2xl font-bold text-yellow-400">March 31, 2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Happens After You Apply?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures fast, fair evaluation of every application
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {applicationSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {step.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="text-yellow-400 mr-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-1">AI Pre-Screening Notice</h3>
                <p className="text-yellow-700">
                  Initial screening is powered by AI for faster reviews. This helps us process applications 
                  efficiently while ensuring every startup gets fair consideration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Submit Your Application</h2>
              <p className="text-xl text-gray-600">
                Tell us about your startup, your vision, and why you're the right team to execute it.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form 
                action="https://formsubmit.co/afrihubcapitalltd@gmail.com" 
                method="POST" 
                onSubmit={handleSubmit} 
                className="space-y-8"
                encType="multipart/form-data"
              >
                {/* FormSubmit configuration fields */}
                <input type="hidden" name="_subject" value="New Startup Application - AfriHub Capital" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                {/* Founder Information */}
                <div className="border-b pb-8">
                  <h3 className="text-2xl font-bold mb-6">Founder Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="founderName">Full Name *</Label>
                      <Input
                        id="founderName"
                        name="founderName"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="e.g. +254712345678"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        name="location"
                        placeholder="City, Country"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Startup Information */}
                <div className="border-b pb-8">
                  <h3 className="text-2xl font-bold mb-6">Startup Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="startupName">Startup Name *</Label>
                      <Input
                        id="startupName"
                        name="startupName"
                        placeholder="Enter your startup name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="website">Website (Optional)</Label>
                      <Input
                        id="website"
                        name="website"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="industry">Industry *</Label>
                      <select
                        id="industry"
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={(e) => handleInputChange("industry", e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select your industry</option>
                        <option value="agriculture">Agriculture & AgriTech</option>
                        <option value="transport">Transport & Logistics</option>
                        <option value="green-energy">Green Energy & Sustainability</option>
                        <option value="retail">Retail & E-commerce</option>
                        <option value="fintech">FinTech & Financial Services</option>
                        <option value="healthtech">HealthTech</option>
                        <option value="edtech">EdTech</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="stage">Startup Stage *</Label>
                      <select
                        id="stage"
                        name="stage"
                        required
                        value={formData.stage}
                        onChange={(e) => handleInputChange("stage", e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select your stage</option>
                        <option value="idea">Idea Stage</option>
                        <option value="prototype">Prototype/MVP</option>
                        <option value="early-revenue">Early Revenue</option>
                        <option value="growth">Growth Stage</option>
                        <option value="scale">Ready to Scale</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Business Details */}
                <div className="border-b pb-8">
                  <h3 className="text-2xl font-bold mb-6">Business Details</h3>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="problem">What problem does your startup solve? *</Label>
                      <Textarea 
                        id="problem"
                        name="problem"
                        placeholder="Describe the problem you're addressing and why it matters"
                        className="min-h-[100px]"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="solution">What is your solution? *</Label>
                      <Textarea 
                        id="solution"
                        name="solution"
                        placeholder="Explain your solution and how it addresses the problem"
                        className="min-h-[100px]"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="traction">Current traction and achievements</Label>
                      <Textarea 
                        id="traction"
                        name="traction"
                        placeholder="Users, revenue, partnerships, awards, etc."
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Funding & Team */}
                <div className="border-b pb-8">
                  <h3 className="text-2xl font-bold mb-6">Funding & Team</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fundingNeeded">Funding Amount Needed *</Label>
                      <select
                        id="fundingNeeded"
                        name="fundingNeeded"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select funding range</option>
                        <option value="5k-100k">KES 5,000 - 100,000</option>
                        <option value="100k-500k">KES 100,000 - 500,000</option>
                        <option value="500k-1m">KES 500,000 - 1M</option>
                        <option value="1m-2m">KES 1M - 2M</option>
                        <option value="2m+">KES 2M+</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="teamSize">Team Size *</Label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select team size</option>
                        <option value="1">Solo Founder</option>
                        <option value="2-3">2-3 People</option>
                        <option value="4-5">4-5 People</option>
                        <option value="6-10">6-10 People</option>
                        <option value="10+">10+ People</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="whyAfriHub">Why do you want to join AfriHub Capital? *</Label>
                    <Textarea 
                      id="whyAfriHub"
                      name="whyAfriHub"
                      placeholder="Tell us why AfriHub is the right partner for your startup journey"
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                    <Textarea 
                      id="additionalInfo"
                      name="additionalInfo"
                      placeholder="Anything else you'd like us to know about you or your startup"
                      className="min-h-[80px]"
                    />
                  </div>
                </div>

                {/* File Upload Section */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4">Optional Documents</h4>
                  <p className="text-gray-600 mb-4">
                    Upload your pitch deck, business plan, or any other relevant documents (PDF format preferred)
                  </p>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">
                      <input
                        type="file"
                        name="documents"
                        accept=".pdf,.doc,.docx,.ppt,.pptx"
                        multiple
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload" className="cursor-pointer text-blue-600 hover:text-blue-700">
                        Click to upload files
                      </label>
                      {" "}or drag and drop
                    </p>
                    <p className="text-sm text-gray-500">PDF, DOC, PPT up to 10MB each</p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button 
                    type="submit" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-3 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Already Applied?</h3>
            <p className="text-gray-600 mb-6">
              Track your application progress and access your applicant dashboard.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
              🔑 Login to Track Progress
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ApplyPage;
