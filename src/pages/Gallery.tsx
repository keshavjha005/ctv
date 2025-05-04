
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Define image categories and their respective images
const galleryCategories = [
  {
    id: "events",
    name: "Events",
    images: [
      { id: "e1", src: "/public/lovable-uploads/bd1d6c22-6b93-4787-a9c2-9b409a4ef859.png", caption: "Club members at an event" },
      { id: "e2", src: "/public/lovable-uploads/68409509-4d7a-4cf6-8fde-640eccab8668.png", caption: "Annual tech fest participants" },
      { id: "e3", src: "/public/lovable-uploads/016ac28c-95e9-4bba-b1f6-bf3e71c98b17.png", caption: "Guest speaker session" }
    ]
  },
  {
    id: "workshops",
    name: "Workshops",
    images: [
      { id: "w1", src: "/public/lovable-uploads/e36423e3-96f0-449f-a01f-01d4364ed53f.png", caption: "Video editing workshop" },
      { id: "w2", src: "/public/lovable-uploads/f24e78e1-ea67-467d-ba71-d53eb881bb8a.png", caption: "Sound engineering basics" },
      { id: "w3", src: "/public/lovable-uploads/e9cbb3b3-e19c-4580-b940-6dc6f071531f.png", caption: "Broadcasting techniques workshop" }
    ]
  },
  {
    id: "campus",
    name: "Campus Life",
    images: [
      { id: "c1", src: "/public/lovable-uploads/4a4f57f5-671a-4cb0-8761-a31c77fd4d57.png", caption: "BCE Bhagalpur Campus" },
      { id: "c2", src: "/public/lovable-uploads/fd749b49-f77b-4409-ad14-2665a3166d35.png", caption: "Students during a radio recording" },
      { id: "c3", src: "/public/lovable-uploads/8961e8d5-fc89-483e-a941-b6eb8cd06008.png", caption: "Behind the scenes - TV broadcast" }
    ]
  },
  {
    id: "team",
    name: "Our Team",
    images: [
      { id: "t1", src: "/public/lovable-uploads/44402f2a-3bcd-428f-baeb-a91ecf63227e.png", caption: "Club founders" },
      { id: "t2", src: "/public/lovable-uploads/4a22c3da-f665-48a5-9412-d74cad53a2af.png", caption: "Content creation team" },
      { id: "t3", src: "/public/lovable-uploads/67b9f2c9-24c8-4ef6-af8a-d29631323bb5.png", caption: "Technical team" }
    ]
  }
];

const Gallery = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{src: string, caption: string} | null>(null);

  // Get all images or filter them by category
  const getFilteredImages = () => {
    if (!filter) {
      return galleryCategories.flatMap(category => category.images);
    }
    
    const category = galleryCategories.find(cat => cat.id === filter);
    return category ? category.images : [];
  };

  const filteredImages = getFilteredImages();

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Photo Gallery</h1>
          <p className="mt-4 text-lg text-gray-600">Capturing moments and memories from our club's activities and events.</p>
        </div>

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <Button 
            variant={filter === null ? "default" : "outline"}
            className={filter === null ? "bg-club-primary text-white hover:bg-club-secondary" : ""}
            onClick={() => setFilter(null)}
          >
            All
          </Button>
          
          {galleryCategories.map(category => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              className={filter === category.id ? "bg-club-primary text-white hover:bg-club-secondary" : ""}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredImages.map(image => (
            <Card 
              key={image.id} 
              className="overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.caption}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-gray-600">{image.caption}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-gray-500">No images found for this category.</p>
          </div>
        )}
      </div>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0">
          <div className="overflow-hidden">
            {selectedImage && (
              <img 
                src={selectedImage.src} 
                alt={selectedImage.caption}
                className="w-full h-auto"
              />
            )}
          </div>
          <DialogHeader className="px-4 py-2">
            <DialogTitle className="text-xl">{selectedImage?.caption}</DialogTitle>
            <DialogDescription>
              Campus TV and Radio Club, BCE Bhagalpur
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
