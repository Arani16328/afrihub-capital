
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CoursesPage = () => {
  // State to track which course section is currently active in the URL
  const [activeSection, setActiveSection] = useState("beauty");

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary/10 py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl text-gray-700 mb-8">
              Explore our comprehensive range of practical courses designed to prepare you for a successful career.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16" id="courses-section">
        <div className="container-custom">
          <Tabs defaultValue="beauty" value={activeSection} onValueChange={setActiveSection}>
            <div className="mb-8 overflow-x-auto">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="beauty">Beauty & Hairdressing</TabsTrigger>
                <TabsTrigger value="catering">Catering & Hospitality</TabsTrigger>
                <TabsTrigger value="baking">Baking Technology</TabsTrigger>
                <TabsTrigger value="ict">ICT & Front Office</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="beauty" id="beauty">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">School of Hairdressing & Beauty</h2>
                  <p className="text-gray-700 mb-6">
                    Master the art of beauty with our comprehensive programs designed to prepare you for a successful career in the beauty industry.
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="cosmetology" className="border rounded-lg p-2">
                    <AccordionTrigger className="text-lg font-medium">Diploma in Cosmetology</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <div className="mb-2 sm:mb-0">
                            <span className="font-medium">Duration:</span> 11 Months
                          </div>
                          <div>
                            <span className="font-medium">Includes:</span> Free attachment and job placement
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Fee Structure:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <li className="flex justify-between">
                              <span>Registration:</span>
                              <span>Ksh 1,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Tuition:</span>
                              <span>Ksh 5,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Materials:</span>
                              <span>Ksh 2,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Maintenance:</span>
                              <span>Ksh 500</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Medical:</span>
                              <span>Ksh 500</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Apron:</span>
                              <span>Ksh 750</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Student ID:</span>
                              <span>Ksh 300</span>
                            </li>
                            <li className="flex justify-between">
                              <span>T-shirt:</span>
                              <span>Ksh 1,000</span>
                            </li>
                          </ul>
                        </div>
                        
                        <Link to="/admissions">
                          <Button className="w-full sm:w-auto">Apply Now</Button>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="hairdressing" className="border rounded-lg p-2">
                    <AccordionTrigger className="text-lg font-medium">Diploma in Hairdressing</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <div className="mb-2 sm:mb-0">
                            <span className="font-medium">Duration:</span> 8 Months
                          </div>
                          <div>
                            <span className="font-medium">Includes:</span> Free attachment and job placement
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">Fee Structure:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <li className="flex justify-between">
                              <span>Registration:</span>
                              <span>Ksh 1,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Tuition:</span>
                              <span>Ksh 5,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Materials:</span>
                              <span>Ksh 2,000</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Maintenance:</span>
                              <span>Ksh 500</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Medical:</span>
                              <span>Ksh 500</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Apron:</span>
                              <span>Ksh 750</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Student ID:</span>
                              <span>Ksh 300</span>
                            </li>
                            <li className="flex justify-between">
                              <span>T-shirt:</span>
                              <span>Ksh 1,000</span>
                            </li>
                          </ul>
                        </div>
                        
                        <Link to="/admissions">
                          <Button className="w-full sm:w-auto">Apply Now</Button>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="catering" id="catering">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">School of Catering & Hospitality</h2>
                  <p className="text-gray-700 mb-6">
                    Develop your culinary and hospitality skills with our industry-focused programs.
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="diploma-catering" className="border rounded-lg p-2">
                    <AccordionTrigger className="text-lg font-medium">Diploma in Catering & Accommodation</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <span className="font-medium">Duration:</span> 30 Months (2.5 years)
                          </div>
                          <div>
                            <span className="font-medium">Monthly Fee:</span> Ksh 7,000
                          </div>
                          <div>
                            <span className="font-medium">Exam Body:</span> KNEC – C- grade minimum
                          </div>
                          <div>
                            <span className="font-medium">Practical Sessions:</span> 2x weekly
                          </div>
                        </div>
                        
                        <Link to="/admissions">
                          <Button className="w-full sm:w-auto">Apply Now</Button>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="cert-catering" className="border rounded-lg p-2">
                    <AccordionTrigger className="text-lg font-medium">Certificate in Catering & Accommodation</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <span className="font-medium">Duration:</span> 18 Months
                          </div>
                          <div>
                            <span className="font-medium">Exam Body:</span> KNEC – D grade
                          </div>
                        </div>
                        
                        <Link to="/admissions">
                          <Button className="w-full sm:w-auto">Apply Now</Button>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="food-beverage" className="border rounded-lg p-2">
                    <AccordionTrigger className="text-lg font-medium">Food & Beverage Certificate</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>3 Months:</span>
                            <span>Ksh 15,000 per month</span>
                          </li>
                          <li className="flex justify-between">
                            <span>2 Months:</span>
                            <span>Ksh 32,000 total</span>
                          </li>
                        </ul>
                        
                        <Link to="/admissions">
                          <Button className="w-full sm:w-auto">Apply Now</Button>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="cookery" className="border rounded-lg p-2">
                    <AccordionTrigger className="text-lg font-medium">Cookery Certificate</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="flex justify-between">
                          <span className="font-medium">Duration:</span> 
                          <span>6 Months</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Monthly Fee:</span>
                          <span>Ksh 6,000</span>
                        </div>
                        
                        <Link to="/admissions">
                          <Button className="w-full sm:w-auto">Apply Now</Button>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="baking" id="baking">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">School of Baking Technology</h2>
                  <p className="text-gray-700 mb-6">
                    Perfect your baking skills with our specialized programs.
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="basic-baking" className="border rounded-lg p-2">
                    <AccordionTrigger className="text-lg font-medium">Basic Baking</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>Per Level:</span>
                            <span>Ksh 15,000 (monthly)</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Admission:</span>
                            <span>Ksh 1,000</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Maintenance:</span>
                            <span>Ksh 1,000</span>
                          </li>
                        </ul>
                        
                        <Link to="/admissions">
                          <Button className="w-full sm:w-auto">Apply Now</Button>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="advanced-baking" className="border rounded-lg p-2">
                    <AccordionTrigger className="text-lg font-medium">Advanced Baking & Decoration</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="flex justify-between">
                          <span className="font-medium">Duration:</span> 
                          <span>1 Month</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Fee:</span>
                          <span>Ksh 20,000</span>
                        </div>
                        
                        <Link to="/admissions">
                          <Button className="w-full sm:w-auto">Apply Now</Button>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="professional-baking" className="border rounded-lg p-2">
                    <AccordionTrigger className="text-lg font-medium">Professional Baking</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="flex justify-between">
                          <span className="font-medium">Duration:</span> 
                          <span>1 Month</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Fee:</span>
                          <span>Ksh 20,000</span>
                        </div>
                        
                        <Link to="/admissions">
                          <Button className="w-full sm:w-auto">Apply Now</Button>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="barista" className="border rounded-lg p-2" id="barista">
                    <AccordionTrigger className="text-lg font-medium">Barista Course</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="flex justify-between">
                          <span className="font-medium">Duration:</span> 
                          <span>2 Months</span>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span>Admission:</span>
                            <span>Ksh 1,000</span>
                          </li>
                          <li className="flex justify-between">
                            <span>Maintenance:</span>
                            <span>Ksh 1,000</span>
                          </li>
                        </ul>
                        
                        <Link to="/admissions">
                          <Button className="w-full sm:w-auto">Apply Now</Button>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="ict" id="ict">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">ICT & Front Office</h2>
                  <p className="text-gray-700 mb-6">
                    Develop essential computer and administrative skills for various industries.
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="ict-cert" className="border rounded-lg p-2">
                    <AccordionTrigger className="text-lg font-medium">ICT Certificate</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="flex justify-between">
                          <span className="font-medium">Duration:</span> 
                          <span>2 Months</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Fee:</span>
                          <span>Ksh 5,000</span>
                        </div>
                        
                        <Link to="/admissions">
                          <Button className="w-full sm:w-auto">Apply Now</Button>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="front-office" className="border rounded-lg p-2">
                    <AccordionTrigger className="text-lg font-medium">Front Office Certificate</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="flex justify-between">
                          <span className="font-medium">Duration:</span> 
                          <span>6 Months</span>
                        </div>
                        
                        <Link to="/admissions">
                          <Button className="w-full sm:w-auto">Apply Now</Button>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="housekeeping" className="border rounded-lg p-2">
                    <AccordionTrigger className="text-lg font-medium">Housekeeping Certificate</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="flex justify-between">
                          <span className="font-medium">Duration:</span> 
                          <span>6 Months</span>
                        </div>
                        
                        <Link to="/admissions">
                          <Button className="w-full sm:w-auto">Apply Now</Button>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>

            <TabsContent value="nutrition" id="nutrition">
              <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Nutrition School</h2>
                  <p className="text-gray-700 mb-6">
                    Study the science of food and its impact on human health.
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="nutrition-diploma" className="border rounded-lg p-2">
                    <AccordionTrigger className="text-lg font-medium">Diploma in Nutrition</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <span className="font-medium">Duration:</span> 2.5 Years
                          </div>
                          <div>
                            <span className="font-medium">Monthly Fee:</span> Ksh 5,500
                          </div>
                          <div>
                            <span className="font-medium">Exam Bodies:</span> KNEC, CBET
                          </div>
                        </div>
                        
                        <Link to="/admissions">
                          <Button className="w-full sm:w-auto">Apply Now</Button>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="nutrition-cert" className="border rounded-lg p-2">
                    <AccordionTrigger className="text-lg font-medium">Certificate in Nutrition</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4 pt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <span className="font-medium">Duration:</span> 1.5 Years
                          </div>
                          <div>
                            <span className="font-medium">Monthly Fee:</span> Ksh 5,500
                          </div>
                          <div>
                            <span className="font-medium">Exam Bodies:</span> KNEC, CBET
                          </div>
                        </div>
                        
                        <Link to="/admissions">
                          <Button className="w-full sm:w-auto">Apply Now</Button>
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/10">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Join thousands of successful graduates who started their career path at KCBC.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions">
              <Button className="bg-primary hover:bg-primary-hover text-white">
                Apply Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CoursesPage;
