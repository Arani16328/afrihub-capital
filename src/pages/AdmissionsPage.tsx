
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Check } from "lucide-react";

const AdmissionsPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true);
    toast.success("Application submitted successfully! We'll contact you soon.");
    // FormSubmit will handle the actual submission
  };

  const benefits = [
    {
      title: "Practical Learning",
      description: "Hands-on experience in fully equipped facilities"
    },
    {
      title: "Affordable Fees",
      description: "Competitive tuition rates with flexible payment plans"
    },
    {
      title: "Modern Facilities",
      description: "Learn in industry-standard kitchens, beauty labs, and classrooms"
    },
    {
      title: "Job-Ready Graduates",
      description: "Gain skills that employers actively seek"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary/10 py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Admissions</h1>
            <p className="text-xl text-gray-700">
              Start your journey to a successful career with Kasarani Catering & Beauty College.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join KCBC Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join KCBC?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide quality, affordable education that prepares you for real-world success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How to Apply Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Apply</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our application process is simple and straightforward.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white text-xl font-semibold mr-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold">Apply Online</h3>
                </div>
                <p className="text-gray-600 pl-14">
                  Fill out our online application form below or visit any of our campuses.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white text-xl font-semibold mr-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold">Pay Registration Fee</h3>
                </div>
                <p className="text-gray-600 pl-14">
                  Complete payment of the registration fee via M-Pesa or bank transfer.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white text-xl font-semibold mr-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold">Submit Documents</h3>
                </div>
                <p className="text-gray-600 pl-14">
                  Provide your ID/Birth Certificate and academic certificates.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white text-xl font-semibold mr-4">
                    4
                  </div>
                  <h3 className="text-xl font-semibold">Get Confirmation</h3>
                </div>
                <p className="text-gray-600 pl-14">
                  Receive your admission confirmation and begin your studies.
                </p>
              </div>
            </div>
            
            <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Important Information</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-2 text-primary">•</div>
                  <div>
                    <span className="font-medium">Intake Periods:</span> January, May, September
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-2 text-primary">•</div>
                  <div>
                    <span className="font-medium">Age Requirement:</span> 16 years and above
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-2 text-primary">•</div>
                  <div>
                    <span className="font-medium">Education Level:</span> KCPE/KCSE (Varies per course)
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Breakdown Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Fee Structure</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer competitive and affordable fees for all our programs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-3 px-4 text-left">Program</th>
                  <th className="py-3 px-4 text-left">Duration</th>
                  <th className="py-3 px-4 text-left">Tuition</th>
                  <th className="py-3 px-4 text-left">Other Fees</th>
                  <th className="py-3 px-4 text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4">Diploma in Cosmetology</td>
                  <td className="py-3 px-4">11 Months</td>
                  <td className="py-3 px-4">Ksh 5,000/month</td>
                  <td className="py-3 px-4">Ksh 6,050 (one-time)</td>
                  <td className="py-3 px-4">Ksh 61,050</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4">Diploma in Hairdressing</td>
                  <td className="py-3 px-4">8 Months</td>
                  <td className="py-3 px-4">Ksh 5,000/month</td>
                  <td className="py-3 px-4">Ksh 6,050 (one-time)</td>
                  <td className="py-3 px-4">Ksh 46,050</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4">Diploma in Catering</td>
                  <td className="py-3 px-4">30 Months</td>
                  <td className="py-3 px-4">Ksh 7,000/month</td>
                  <td className="py-3 px-4">Varies</td>
                  <td className="py-3 px-4">Approx. Ksh 210,000</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4">Basic Baking</td>
                  <td className="py-3 px-4">Per Level</td>
                  <td className="py-3 px-4">Ksh 15,000/month</td>
                  <td className="py-3 px-4">Ksh 2,000</td>
                  <td className="py-3 px-4">Varies by level</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4">ICT Certificate</td>
                  <td className="py-3 px-4">2 Months</td>
                  <td className="py-3 px-4">Ksh 5,000/month</td>
                  <td className="py-3 px-4">Varies</td>
                  <td className="py-3 px-4">Approx. Ksh 10,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-center">
            <Button className="bg-primary hover:bg-primary-hover text-white">
              Download Full Fee Structure (PDF)
            </Button>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-gray-50" id="registration-form">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Apply Now</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill out this form to start your application process. Our admissions team will contact you shortly.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form 
              action="https://formsubmit.co/isaacogero3@gmail.com" 
              method="POST" 
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              {/* FormSubmit configuration fields */}
              <input type="hidden" name="_subject" value="New Application Form Submission - Kasarani College" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="idNumber">ID / Birth Certificate No.</Label>
                  <Input
                    id="idNumber"
                    name="idNumber"
                    placeholder="Enter your ID or Birth Certificate number"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="e.g. 0712345678"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="program">Program of Interest</Label>
                  <select
                    id="program"
                    name="program"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  >
                    <option value="">Select a program</option>
                    <option value="cosmetology">Diploma in Cosmetology</option>
                    <option value="hairdressing">Diploma in Hairdressing</option>
                    <option value="catering">Diploma in Catering & Accommodation</option>
                    <option value="baking">Basic Baking</option>
                    <option value="ict">ICT Certificate</option>
                    <option value="nutrition">Diploma in Nutrition</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="campus">Preferred Campus</Label>
                  <select
                    id="campus"
                    name="campus"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  >
                    <option value="">Select a campus</option>
                    <option value="nairobi">Githurai 45, Nairobi</option>
                    <option value="machakos">ACK Cathedral, Machakos</option>
                    <option value="kitui">Kitui Campus</option>
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="education">Education Level</Label>
                  <select
                    id="education"
                    name="education"
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  >
                    <option value="">Select your education level</option>
                    <option value="kcpe">KCPE</option>
                    <option value="kcse">KCSE</option>
                    <option value="diploma">Diploma</option>
                    <option value="degree">Degree</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Information (Optional)</Label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Tell us anything else that might be relevant to your application"
                  className="min-h-[120px] flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-hover text-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 py-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Submit Application"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdmissionsPage;
