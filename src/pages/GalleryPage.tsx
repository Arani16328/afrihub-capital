
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const galleryImages = {
  events: [
    {
      id: "event1",
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=600&auto=format&fit=crop",
      alt: "Graduation ceremony",
      caption: "Annual Graduation Ceremony"
    },
    {
      id: "event2",
      src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=600&auto=format&fit=crop",
      alt: "College open day",
      caption: "Campus Open Day"
    },
    {
      id: "event3",
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600&auto=format&fit=crop",
      alt: "Cooking competition",
      caption: "Culinary Arts Competition"
    },
    {
      id: "event4",
      src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=600&auto=format&fit=crop",
      alt: "Beauty expo",
      caption: "Beauty and Wellness Expo"
    }
  ],
  classActivities: [
    {
      id: "class1",
      src: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=600&auto=format&fit=crop",
      alt: "Baking class",
      caption: "Baking Technology Class"
    },
    {
      id: "class2",
      src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600&auto=format&fit=crop",
      alt: "Cooking class",
      caption: "Culinary Arts Practical"
    },
    {
      id: "class3",
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop",
      alt: "Makeup class",
      caption: "Beauty Therapy Session"
    },
    {
      id: "class4",
      src: "https://images.unsplash.com/photo-1470940511639-1068d7764233?q=80&w=600&auto=format&fit=crop",
      alt: "Hairdressing class",
      caption: "Advanced Hairdressing Class"
    },
    {
      id: "class5",
      src: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=600&auto=format&fit=crop",
      alt: "Computer class",
      caption: "ICT Training Session"
    }
  ],
  studentWork: [
    {
      id: "work1",
      src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop",
      alt: "Decorated cake",
      caption: "Advanced Cake Decoration Project"
    },
    {
      id: "work2",
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600&auto=format&fit=crop",
      alt: "Plated food",
      caption: "Fine Dining Presentation"
    },
    {
      id: "work3",
      src: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=600&auto=format&fit=crop",
      alt: "Makeup application",
      caption: "Professional Bridal Makeup"
    },
    {
      id: "work4",
      src: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=600&auto=format&fit=crop",
      alt: "Pastries",
      caption: "Pastry Arts Exhibition"
    }
  ],
  graduation: [
    {
      id: "grad1",
      src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=600&auto=format&fit=crop",
      alt: "Graduation ceremony",
      caption: "Class of 2023 Graduation"
    },
    {
      id: "grad2",
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop",
      alt: "Students celebrating",
      caption: "Graduation Celebration"
    },
    {
      id: "grad3",
      src: "https://images.unsplash.com/photo-1629193278374-e3efe22073a3?q=80&w=600&auto=format&fit=crop",
      alt: "Graduate receiving certificate",
      caption: "Certificate Ceremony"
    }
  ]
};

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<{src: string, caption: string} | null>(null);

  const openLightbox = (image: {src: string, caption: string}) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary/10 py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl text-gray-700">
              Explore life at Kasarani Catering & Beauty College through our photo collections.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container-custom">
          <Tabs defaultValue="classActivities" className="space-y-8">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="classActivities">Class Activities</TabsTrigger>
                <TabsTrigger value="studentWork">Student Work</TabsTrigger>
                <TabsTrigger value="graduation">Graduation</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="events">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryImages.events.map((image) => (
                  <div 
                    key={image.id}
                    className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    onClick={() => openLightbox(image)}
                  >
                    <div className="aspect-w-4 aspect-h-3">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-700">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="classActivities">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryImages.classActivities.map((image) => (
                  <div 
                    key={image.id}
                    className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    onClick={() => openLightbox(image)}
                  >
                    <div className="aspect-w-4 aspect-h-3">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-700">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="studentWork">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryImages.studentWork.map((image) => (
                  <div 
                    key={image.id}
                    className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    onClick={() => openLightbox(image)}
                  >
                    <div className="aspect-w-4 aspect-h-3">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-700">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="graduation">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {galleryImages.graduation.map((image) => (
                  <div 
                    key={image.id}
                    className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    onClick={() => openLightbox(image)}
                  >
                    <div className="aspect-w-4 aspect-h-3">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-700">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="max-w-4xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.src} 
              alt="Enlarged view" 
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="bg-white p-4 rounded-b-lg">
              <p className="text-gray-800 font-medium">{selectedImage.caption}</p>
            </div>
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2"
              onClick={closeLightbox}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default GalleryPage;
