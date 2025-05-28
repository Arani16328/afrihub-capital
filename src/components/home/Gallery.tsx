
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const images = [
  {
    url: "https://i.postimg.cc/Hnzxxjvb/afr4.jpg",
    alt: "African entrepreneur using mobile technology"
  },
  {
    url: "https://i.postimg.cc/Zn4n46HT/afr5.jpg",
    alt: "African farmer with corn harvest"
  },
  {
    url: "https://i.postimg.cc/DfPm5Yfm/afr7.jpg",
    alt: "African entrepreneur in agricultural setting"
  },
  {
    url: "https://i.postimg.cc/3xdR88XD/afr8.jpg",
    alt: "African taxi driver entrepreneur"
  },
  {
    url: "https://i.postimg.cc/5tz2zsk4/afr9.jpg",
    alt: "African artisan craftsman entrepreneur"
  },
  {
    url: "https://i.postimg.cc/2SM53sG9/afr10.jpg",
    alt: "African livestock farmer entrepreneur"
  },
  {
    url: "https://i.postimg.cc/Y9wqzQJ1/afr11.jpg",
    alt: "African agricultural entrepreneur"
  },
  {
    url: "https://i.postimg.cc/V6BsGd82/afr12.jpg",
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
