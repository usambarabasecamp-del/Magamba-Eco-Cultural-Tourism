import { Wifi, Users, MapPin, Utensils, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const accommodations = [
  {
    id: 1,
    anchor: "homestays",
    type: "Homestay",
    name: "Traditional Village Homestay",
    price: 45,
    capacity: "1-4 guests",
    image: "/manus-storage/IMG_20230420_124518_017_c62b2b40.jpg",
    description:
      "Experience authentic village life by staying with a local family in a traditional home.",
    features: [
      "Private or shared rooms",
      "Traditional home-cooked meals",
      "Warm family hospitality",
      "Cultural exchange opportunities",
      "Access to village activities",
    ],
    amenities: [
      "Comfortable bedding",
      "Basic bathroom facilities",
      "Shared common areas",
      "Home-cooked breakfast and dinner",
    ],
  },
  {
    id: 2,
    anchor: "homestays",
    type: "Homestay",
    name: "Comfortable Village Homestay",
    price: 60,
    capacity: "1-4 guests",
    image: "/manus-storage/IMG_20230420_124518_017_c62b2b40.jpg",
    description:
      "A more comfortable homestay option with enhanced amenities while maintaining authentic village experience.",
    features: [
      "Private rooms with en-suite bathrooms",
      "Hot water availability",
      "Traditional and contemporary meals",
      "Quiet garden spaces",
      "Local guide services available",
    ],
    amenities: [
      "Quality bedding and linens",
      "Private bathroom",
      "Hot shower",
      "Meals included",
      "Sitting area",
    ],
  },
  {
    id: 3,
    anchor: "campsite",
    type: "Campsite",
    name: "Magamba Forest Campsite",
    price: 35,
    capacity: "Tents for 1-4 guests",
    image: "/manus-storage/IMG_20230104_142902_550_78e5b8db.webp",
    description:
      "Camp in the heart of nature, adjacent to Magamba Forest with stunning views and peaceful surroundings.",
    features: [
      "Spacious camping grounds",
      "Adjacent to Magamba Forest",
      "Bonfire gatherings",
      "Stargazing opportunities",
      "Nature immersion experience",
    ],
    amenities: [
      "Tent provided",
      "Sleeping mat and blankets",
      "Communal kitchen facilities",
      "Shared bathroom facilities",
      "Campfire area",
    ],
  },
];

export default function Accommodations() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Accommodations
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from authentic homestays and our scenic campsite, all designed
              to provide comfort and cultural immersion.
            </p>
          </div>
        </div>
      </section>

      {/* Accommodations Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation, index) => (
              <div id={accommodation.anchor} className="scroll-mt-24">
                <div
                  key={accommodation.id}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={accommodation.image}
                    alt={accommodation.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {accommodation.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {accommodation.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {accommodation.description}
                  </p>

                  {/* Price and Capacity */}
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-border">
                    <div>
                      <p className="text-2xl font-bold text-primary">
                        ${accommodation.price}
                      </p>
                      <p className="text-xs text-muted-foreground">per night</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-5 h-5" />
                      <span className="text-sm">{accommodation.capacity}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">
                      Features:
                    </h4>
                    <ul className="space-y-1">
                      {accommodation.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary font-bold">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">
                      Amenities:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {accommodation.amenities.map((amenity, idx) => (
                        <span
                          key={idx}
                          className="bg-primary/10 text-primary text-xs px-2 py-1 rounded"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link href="/book-tour">
                    <a>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-auto">
                        Book Now
                      </Button>
                    </a>
                  </Link>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Stay With Us */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Why Stay With Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Wifi,
                title: "Authentic Experience",
                description: "Immerse yourself in genuine village life and culture",
              },
              {
                icon: Utensils,
                title: "Local Cuisine",
                description:
                  "Enjoy home-cooked traditional meals prepared by local families",
              },
              {
                icon: Wind,
                title: "Nature Connection",
                description: "Wake up to the sounds of nature in pristine surroundings",
              },
              {
                icon: MapPin,
                title: "Perfect Location",
                description:
                  "Close to all major attractions and activities in Magamba",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Our Location
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"
                alt="Magamba Location"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="animate-slide-in-right space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Magamba Village, Lushoto
              </h3>
              <p className="text-lg text-muted-foreground">
                Located in the heart of the Usambara Mountains, our accommodations
                provide the perfect base for exploring the region's natural beauty
                and cultural heritage.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Distance</h4>
                    <p className="text-muted-foreground">
                      90 minutes from Mkomazi National Park
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Forest Proximity
                    </h4>
                    <p className="text-muted-foreground">
                      Adjacent to Magamba Forest Reserve
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Accessibility
                    </h4>
                    <p className="text-muted-foreground">
                      Easy access to all village attractions and activities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Magamba?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Choose your accommodation and start planning your eco-cultural adventure.
          </p>
          <Link href="/book-tour">
            <a>
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Book Your Stay
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
