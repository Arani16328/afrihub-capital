
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Nutrition = () => {
  return (
    <main className="pt-32 pb-16">
      <div className="container-custom">
        <Link to="/courses" className="flex items-center text-primary hover:text-primary-hover mb-6">
          <ArrowLeft className="mr-2" size={18} />
          Back to all courses
        </Link>
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">School of Nutrition</h1>
          <p className="text-gray-600 max-w-3xl">
            Our nutrition programs provide comprehensive education on the science of food and its impact
            on human health, preparing you for careers in health, wellness, and food service.
          </p>
        </div>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Diploma in Nutrition */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-4">Diploma in Nutrition</h2>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">2.5 Years</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">KNEC Examined</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">CBET Option</span>
              </div>
              <p className="text-gray-600 mb-6">
                Our comprehensive diploma program provides in-depth knowledge of nutrition science, dietary planning,
                clinical nutrition, and food service management. Graduates are prepared for roles in healthcare,
                community nutrition, and food service industries.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Fee Structure</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex justify-between border-b pb-2">
                  <span>Monthly Fee</span>
                  <span className="font-medium">Ksh 5,500</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Exam Bodies</span>
                  <span className="font-medium">KNEC, CBET</span>
                </li>
              </ul>
            </div>
            
            {/* Certificate in Nutrition */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-4">Certificate in Nutrition</h2>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">1.5 Years</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">KNEC Examined</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">CBET Option</span>
              </div>
              <p className="text-gray-600 mb-6">
                This certificate program provides foundational knowledge in nutrition science, food preparation,
                and dietary planning. It's ideal for those seeking entry-level positions in nutrition-related fields
                or as a stepping stone to the diploma program.
              </p>
              
              <h3 className="font-semibold text-lg mb-3">Fee Structure</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex justify-between border-b pb-2">
                  <span>Monthly Fee</span>
                  <span className="font-medium">Ksh 5,500</span>
                </li>
                <li className="flex justify-between border-b pb-2">
                  <span>Exam Bodies</span>
                  <span className="font-medium">KNEC, CBET</span>
                </li>
              </ul>
            </div>
            
            {/* Course Content */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Program Highlights</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Nutrition Science</h3>
                  <p className="text-gray-600">
                    Study macronutrients, micronutrients, metabolism, and the role of nutrition in human health
                    and disease prevention.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Dietary Planning</h3>
                  <p className="text-gray-600">
                    Learn to create balanced meal plans for different life stages, health conditions, and cultural
                    preferences.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Food Service Management</h3>
                  <p className="text-gray-600">
                    Develop skills in menu planning, food preparation, hygiene standards, and institutional food
                    service operations.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Community Nutrition</h3>
                  <p className="text-gray-600">
                    Explore nutrition education, public health programs, and strategies for improving community nutrition.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 sticky top-32">
              <h3 className="text-xl font-semibold mb-4">Apply Now</h3>
              <p className="text-gray-600 mb-6">
                Ready to start your journey with us? Apply now for our upcoming intake.
              </p>
              <Link to="/admissions">
                <Button className="w-full bg-primary hover:bg-primary-hover mb-4">
                  Apply for this Program
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Contact Us with Questions
                </Button>
              </Link>
            </div>
            
            <div className="bg-primary/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Why Choose This Program</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Nationally recognized qualification</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Modern laboratory facilities</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Field attachments and practical experience</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Growing job market in health and wellness</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Nutrition;
