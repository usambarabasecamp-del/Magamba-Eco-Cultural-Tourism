import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    url: "/manus-storage/IMG_20230104_142902_550_78e5b8db.webp",
    title: "Magamba Forest",
    category: "Landscape",
  },
  {
    id: 2,
    url: "/manus-storage/IMG_20230104_142902_550_78e5b8db.webp",
    title: "Mountain Trails",
    category: "Landscape",
  },
  {
    id: 3,
    url: "/manus-storage/IMG_20230420_124518_017_c62b2b40.jpg",
    title: "Traditional Dance",
    category: "Culture",
  },
  {
    id: 4,
    url: "/manus-storage/IMG_20230104_142902_550_78e5b8db.webp",
    title: "Wildlife Safari",
    category: "Wildlife",
  },
  {
    id: 5,
    url: "/manus-storage/IMG_20230104_142902_550_78e5b8db.webp",
    title: "Forest Path",
    category: "Landscape",
  },
  {
    id: 6,
    url: "/manus-storage/IMG_20230104_142902_550_78e5b8db.webp",
    title: "Bird Watching",
    category: "Wildlife",
  },
  {
    id: 7,
    url: "/manus-storage/IMG_20230420_124518_017_c62b2b40.jpg",
    title: "Coffee Farm",
    category: "Culture",
  },
  {
    id: 8,
    url: "/manus-storage/IMG_20230420_124518_017_c62b2b40.jpg",
    title: "Cooking Class Experience",
    category: "Culture",
  },
  {
    id: 9,
    url: "/manus-storage/IMG_20230104_142902_550_78e5b8db.webp",
    title: "Hiking Adventure",
    category: "Landscape",
  },
  {
    id: 10,
    url: "/manus-storage/IMG_20230420_124518_017_c62b2b40.jpg",
    title: "Traditional Cooking",
    category: "Culture",
  },
  {
    id: 11,
    url: "/manus-storage/IMG_20230420_124518_017_c62b2b40.jpg",
    title: "Local Crafts",
    category: "Culture",
  },
  {
    id: 12,
    url: "/manus-storage/IMG_20230420_124518_017_c62b2b40.jpg",
    title: "Youth Activities",
    category: "Culture",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Landscape", "Wildlife", "Culture"];

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the beauty of Magamba through our collection of stunning
              photographs.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-foreground hover:bg-primary/10 border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="animate-fade-in-up group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-semibold text-center px-4">
                      {image.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full rounded-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-2xl font-bold">
                {selectedImage.title}
              </h3>
              <p className="text-white/80 mt-2">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
