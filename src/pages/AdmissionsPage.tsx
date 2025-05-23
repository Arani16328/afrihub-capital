
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { Check } from "lucide-react";
import emailjs from 'emailjs-com';

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  idNumber: z.string().min(1, { message: "ID or Birth Certificate number is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  program: z.string().min(1, { message: "Please select a program." }),
  campus: z.string().min(1, { message: "Please select a campus." }),
  education: z.string().min(1, { message: "Please select your education level." }),
  message: z.string().optional(),
});

const AdmissionsPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      idNumber: "",
      email: "",
      phone: "",
      program: "",
      campus: "",
      education: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Initialize EmailJS with your service ID
    emailjs.init("YOUR_PUBLIC_KEY");
    
    // Prepare email parameters for EmailJS
    const templateParams = {
      to_email: "isaacogero3@gmail.com",
      from_name: values.fullName,
      from_email: values.email,
      subject: `New Application: ${values.program} Program`,
      message: `
        Full Name: ${values.fullName}
        ID/Birth Certificate: ${values.idNumber}
        Email: ${values.email}
        Phone: ${values.phone}
        Program: ${values.program}
        Campus: ${values.campus}
        Education: ${values.education}
        Additional Information: ${values.message || "None provided"}
      `,
    };

    // Send email using EmailJS
    emailjs.send("default_service", "template_default", templateParams)
      .then(() => {
        toast.success("Application submitted successfully! We'll contact you soon.");
        form.reset();
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        toast.error("Failed to submit application. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="idNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ID / Birth Certificate No.</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your ID or Birth Certificate number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. 0712345678" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="program"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Program of Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a program" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="cosmetology">Diploma in Cosmetology</SelectItem>
                            <SelectItem value="hairdressing">Diploma in Hairdressing</SelectItem>
                            <SelectItem value="catering">Diploma in Catering & Accommodation</SelectItem>
                            <SelectItem value="baking">Basic Baking</SelectItem>
                            <SelectItem value="ict">ICT Certificate</SelectItem>
                            <SelectItem value="nutrition">Diploma in Nutrition</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="campus"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Campus</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a campus" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="nairobi">Githurai 45, Nairobi</SelectItem>
                            <SelectItem value="machakos">ACK Cathedral, Machakos</SelectItem>
                            <SelectItem value="kitui">Kitui Campus</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="education"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Education Level</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your education level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="kcpe">KCPE</SelectItem>
                            <SelectItem value="kcse">KCSE</SelectItem>
                            <SelectItem value="diploma">Diploma</SelectItem>
                            <SelectItem value="degree">Degree</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us anything else that might be relevant to your application"
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-hover text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Submit Application"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdmissionsPage;
