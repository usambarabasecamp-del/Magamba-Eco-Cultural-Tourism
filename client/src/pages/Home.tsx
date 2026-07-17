import { useState, useEffect } from "react";
import { MessageCircle, Phone, MapPin, Users, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const heroImages = [
  {
    url: "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?w=1200&h=600&fit=crop",
    title: "Discover Magamba Forest",
    subtitle: "Experience pristine nature and cultural heritage",
  },
  {
    url: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?w=1200&h=600&fit=crop",
    title: "Explore Usambara Mountains",
    subtitle: "Trek through ancient forests and breathtaking landscapes",
  },
  {
    url: "https://images.pexels.com/photos/3714896/pexels-photo-3714896.jpeg?w=1200&h=600&fit=crop",
    title: "Immerse in Local Culture",
    subtitle: "Connect with traditions, stories, and authentic experiences",
  },
  {
    url: "https://images.pexels.com/photos/349758/pexels-photo-349758.jpeg?w=1200&h=600&fit=crop",
    title: "Wildlife & Bird Watching",
    subtitle: "Witness the rich biodiversity of East Africa",
  },
];

const featuredTours = [
  {
    id: 1,
    title: "Irente Viewpoint & Kisasa Waterfalls",
    price: 100,
    duration: "6-7 hours",
    groupSize: "2-10 people",
    image: "/manus-storage/qNEbsN81ZGTU_9533d63c.jpg",
    description: "Hike to iconic viewpoints with panoramic views and spectacular waterfalls.",
    anchor: "irente-kisasa",
  },
  {
    id: 2,
    title: "Magamba Forest & Cultural History",
    price: 90,
    duration: "4-5 hours",
    groupSize: "2-10 people",
    image: "/manus-storage/nUAUV67VhFKC_5ea6a16b.jpg",
    description: "Explore lush rainforest while learning about the Kilindi ruling clan.",
    anchor: "magamba-forest",
  },
  {
    id: 3,
    title: "Skyline & Jiwe la Mungu",
    price: 110,
    duration: "6-7 hours",
    groupSize: "2-8 people",
    image: "/manus-storage/3st3OSoN70s4_a02dac49.jpg",
    description: "Visit historic cable system and mystical rock formations with world-class views.",
    anchor: "skyline-jiwe",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/255783688844", "_blank");
  };

  const handleChat = () => {
    // Placeholder for live chat integration
    alert("Live chat feature coming soon!");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <div className="relative h-screen overflow-hidden bg-black">
        {/* Carousel Container */}
        <div className="relative w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide
                  ? "opacity-100 animate-slide-left-to-right"
                  : "opacity-0"
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
            <div className="animate-fade-in-up space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
                {heroImages[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl drop-shadow-md max-w-2xl mx-auto">
                {heroImages[currentSlide].subtitle}
              </p>
              <Link href="/book-tour">
                <a>
                  <Button
                    size="lg"
                    className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Plan Your Adventure
                  </Button>
                </a>
              </Link>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Floating Contact Buttons */}
        {/* WhatsApp Button - Bottom Left */}
        <div className="absolute bottom-8 left-8 z-30">
          <button
            onClick={handleWhatsApp}
            className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-glow"
            aria-label="Contact via WhatsApp"
            title="Chat on WhatsApp"
          >
            <Phone className="w-6 h-6" />
          </button>
        </div>

        {/* Live Chat Button - Bottom Right */}
        <div className="absolute bottom-8 right-8 z-30">
          <button
            onClick={handleChat}
            className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse-glow"
            aria-label="Open live chat"
            title="Live Chat"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Featured Experiences Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Unique Experiences Await
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the magic of Magamba Eco-cultural Tourism with authentic
              experiences that connect you with nature and local communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mountain Trekking",
                description: "Explore the majestic Usambara Mountains with expert guides",
                icon: "🏔️",
              },
              {
                title: "Cultural Immersion",
                description: "Experience traditional dances, cooking, and storytelling",
                icon: "🎭",
              },
              {
                title: "Wildlife Safaris",
                description: "Witness incredible biodiversity in Mkomazi National Park",
                icon: "🦁",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Tours
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular and highly-rated tours, handpicked for unforgettable experiences.
            </p>
          </div>

          {/* Featured Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour, index) => (
              <div
                key={tour.id}
                className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {tour.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {tour.description}
                  </p>

                  {/* Tour Details */}
                  <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{tour.groupSize}</span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-primary">${tour.price}</p>
                      <p className="text-xs text-muted-foreground">per person</p>
                    </div>
                    <Link href={`/tours#${tour.anchor}`}>
                      <a>
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          View Details
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Tours Button */}
          <div className="text-center mt-12">
            <Link href="/tours">
              <a>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  View All Tours
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Adventure?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let us help you plan the perfect eco-cultural tourism experience in
            Magamba.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-tour">
              <a>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Book Your Tour
                </Button>
              </a>
            </Link>
            <a href="https://wa.me/255783688844" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
