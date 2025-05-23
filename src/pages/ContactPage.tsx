import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { sendContactEmail, initEmailJS } from "../utils/emailService";

const ContactPage = () => {
  // Initialize EmailJS once when component mounts
  useEffect(() => {
    initEmailJS();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    sendContactEmail(formData)
      .then((response) => {
        console.log("Success response:", response);
        toast.success("Your message has been sent! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      })
      .catch((error) => {
        console.error("Email sending error details:", error);
        toast.error("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const campuses = [
    {
      location: "Githurai 45, Nairobi",
      address: "Near Equity Bank, Githurai 45",
      phone: "0721 429 839",
      email: "nairobi@kasaranicollege.ac.ke"
    },
    {
      location: "ACK Cathedral, Machakos",
      address: "Within ACK Cathedral grounds, Machakos",
      phone: "0751 211 902",
      email: "machakos@kasaranicollege.ac.ke"
    },
    {
      location: "Kitui Campus",
      address: "Opposite Parkside Villa, Kitui Town",
      phone: "0721 429 839",
      email: "kitui@kasaranicollege.ac.ke"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary/10 py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-700">
              We're here to help! Reach out to us with any questions about our programs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {campuses.map((campus, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
                <h3 className="text-xl font-semibold mb-4">{campus.location}</h3>
                
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span>{campus.address}</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <a href={`tel:${campus.phone}`} className="hover:text-primary transition-colors">
                    {campus.phone}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <a href={`mailto:${campus.email}`} className="hover:text-primary transition-colors break-words">
                    {campus.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Google Map */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7838023877545!2d36.8957532!3d-1.3021389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15a83ea35625%3A0x57ebcbea2c94eb6c!2sGithurai%2045%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1589859494932!5m2!1sen!2ske"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Campus Location"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <MessageSquare className="h-6 w-6 mr-3 text-primary" />
                Get in Touch
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-hover text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media and WhatsApp Section */}
      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-semibold mb-8">Connect With Us</h2>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1877F2] text-white p-4 rounded-full hover:opacity-90 transition-opacity"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
              </svg>
            </a>
            
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#E4405F] text-white p-4 rounded-full hover:opacity-90 transition-opacity"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.64.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12S0,15.67.07,17c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.43,1.44A1.44,1.44,0,0,0,18.41,4.15Z" />
              </svg>
            </a>
            
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1DA1F2] text-white p-4 rounded-full hover:opacity-90 transition-opacity"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.32,6.44a.5.5,0,0,0-.2-.87l-.79-.19A.49.49,0,0,1,22,4.89L21.74,4a.5.5,0,0,0-.58-.29l-1.35.44a.5.5,0,0,1-.44-.07,5.8,5.8,0,0,0-3.34-1.08C13.67,3,11.39,6,12.08,8.83A11.42,11.42,0,0,1,4.93,5.26a.5.5,0,0,0-.85.31,6,6,0,0,0,.45,5.24.5.5,0,0,1-.36.75L3,11.71a.5.5,0,0,0-.38.73A7.34,7.34,0,0,0,3.9,14.2a.5.5,0,0,1-.13.73l-.87.49a.5.5,0,0,0-.12.75,5.71,5.71,0,0,0,3.38,1.77.5.5,0,0,1,.32.18,11.49,11.49,0,0,1-5.47,2.63.5.5,0,0,0-.2.93,15.52,15.52,0,0,0,19.85-8.13,14.14,14.14,0,0,0,.64-3.4.5.5,0,0,1,.83-.36l1.2,1a.5.5,0,0,0,.8-.33Z" />
              </svg>
            </a>
          </div>
          
          <div className="bg-[#25D366] text-white max-w-md mx-auto py-4 px-6 rounded-lg shadow-lg flex items-center justify-center space-x-4">
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.6,6.32C16.27,4.99,14.46,4.25,12.53,4.25c-3.91,0-7.09,3.19-7.09,7.1c0,1.25,0.33,2.47,0.94,3.54L5.25,19.75l4.98-1.3c1.03,0.56,2.2,0.86,3.38,0.86c3.91,0,7.09-3.19,7.09-7.1C20.75,9.55,20.01,7.74,17.6,6.32 M12.53,18.06c-1.06,0-2.1-0.28-3-0.82l-0.21-0.13l-2.24,0.59l0.6-2.19l-0.14-0.22c-0.59-0.94-0.91-2.03-0.91-3.14c0-3.25,2.65-5.9,5.9-5.9c1.57,0,3.05,0.61,4.17,1.73c1.12,1.12,1.73,2.6,1.73,4.17C18.43,15.42,15.78,18.06,12.53,18.06 M16.13,13.58c-0.17-0.09-1.02-0.5-1.18-0.56c-0.16-0.06-0.27-0.09-0.39,0.09c-0.12,0.18-0.44,0.56-0.54,0.67c-0.1,0.12-0.2,0.13-0.37,0.04c-0.17-0.09-0.73-0.27-1.39-0.86c-0.51-0.46-0.86-1.02-0.96-1.19c-0.1-0.17-0.01-0.27,0.08-0.35c0.08-0.08,0.17-0.19,0.25-0.29c0.08-0.1,0.11-0.17,0.17-0.29c0.06-0.12,0.03-0.22-0.01-0.3c-0.04-0.09-0.39-0.94-0.54-1.29c-0.14-0.34-0.29-0.29-0.39-0.29c-0.1,0-0.22,0-0.33,0c-0.12,0-0.31,0.04-0.47,0.22c-0.16,0.18-0.63,0.61-0.63,1.49c0,0.88,0.65,1.73,0.73,1.85c0.09,0.12,1.21,1.85,2.94,2.6c0.41,0.18,0.73,0.28,0.98,0.36c0.41,0.13,0.79,0.11,1.08,0.07c0.33-0.05,1.02-0.42,1.17-0.82C16.18,14.13,16.18,13.76,16.13,13.58" />
            </svg>
            <div className="text-left">
              <p className="font-semibold">WhatsApp Us</p>
              <a href="https://wa.me/254721429839" className="text-sm hover:underline">
                +254 721 429 839
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
