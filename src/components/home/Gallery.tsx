
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const images = [
  {
    url: "/lovable-uploads/1663d1e7-9447-4d46-b5a5-450c715d12af.png",
    alt: "African entrepreneur using mobile technology"
  },
  {
    url: "/lovable-uploads/561a5510-f5f8-485d-a409-f63cab587022.png",
    alt: "African farmer with corn harvest"
  },
  {
    url: "/lovable-uploads/c73055b4-3d1a-4ef4-a3c7-a91a1bfa198e.png",
    alt: "African entrepreneur in agricultural setting"
  },
  {
    url: "/lovable-uploads/0ef4af95-dd2e-4ac8-bde2-f34d34f6bfd2.png",
    alt: "African taxi driver entrepreneur"
  },
  {
    url: "/lovable-uploads/4c2446e1-7734-49ef-a5b8-847fe60e52e1.png",
    alt: "African artisan craftsman entrepreneur"
  },
  {
    url: "/lovable-uploads/c46c513e-419b-46c3-af6e-91a7cd39d480.png",
    alt: "African livestock farmer entrepreneur"
  },
  {
    url: "/lovable-uploads/d935628b-b0ee-44f0-b6a4-3d8ce6463ca4.png",
    alt: "African agricultural entrepreneur"
  },
  {
    url: "/lovable-uploads/9a829a91-9a83-424b-add4-0280cdd05354.png",
    alt: "African textile and fabric entrepreneur"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (url: string) => {
    setSelectedImage(url);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Community in Action</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get a glimpse into our vibrant ecosystem of African entrepreneurs, mentors, and innovators making a difference across Kenya and beyond
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(image.url)}
            >
              <img 
                src={image.url}
                alt={image.alt}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/success-stories">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              View Success Stories
            </Button>
          </Link>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div 
              className="max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-[90vh] object-contain"
              />
              <button 
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2"
                onClick={closeLightbox}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
