import { useState } from "react";
import { ChevronDown, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const tours = [
  {
    id: 1,
    anchor: "irente-kisasa",
    title: "Irente Viewpoint & Kisasa Waterfalls",
    price: 100,
    duration: "6-7 hours",
    groupSize: "2-10 people",
    dropOff: "Lushoto town center",
    image: "/manus-storage/qNEbsN81ZGTU_9533d63c.jpg",
    description: "Hike to the iconic Irente Viewpoint with panoramic views over Mazinde village and Maasai plains, then continue to the spectacular Kisasa Waterfall.",
    details: [
      "Trek through villages and farmland to Irente Viewpoint",
      "Panoramic views 1,000 meters above the plains",
      "Lunch at Irente Biodiversity Farm with flower gardens",
      "Continue to impressive Kisasa Waterfall",
      "Steep descent to waterfall with picnic lunch",
      "Photography opportunities throughout",
    ],
    highlights: "One of the most iconic viewpoints in Usambara combined with a powerful waterfall experience.",
  },
  {
    id: 2,
    anchor: "magamba-forest",
    title: "Magamba Forest & Cultural History",
    price: 90,
    duration: "4-5 hours",
    groupSize: "2-10 people",
    dropOff: "Magamba village entrance",
    image: "/manus-storage/nUAUV67VhFKC_5ea6a16b.jpg",
    description: "Explore the lush Magamba Rainforest while learning about the history of the Kilindi ruling clan and local culture.",
    details: [
      "Uphill walk to royal village of Kwembago",
      "Learn about Kilindi ruling clan history",
      "Beautiful views over Lushoto town and Maasai plains",
      "Hike into lush Magamba Rainforest",
      "Spot black-and-white colobus monkeys",
      "Visit historic sites: German school, WWI trench, Magamba village",
    ],
    highlights: "Perfect for nature lovers and photographers seeking authentic forest experiences with cultural immersion.",
  },
  {
    id: 3,
    anchor: "skyline-jiwe",
    title: "Skyline & Jiwe la Mungu",
    price: 110,
    duration: "6-7 hours",
    groupSize: "2-8 people",
    dropOff: "Lushoto town center",
    image: "/manus-storage/3st3OSoN70s4_a02dac49.jpg",
    description: "Visit East Africa's oldest cable system (Skyline) and the mystical Jiwe la Mungu rock formation with world-class panoramic views.",
    details: [
      "Drive to remote Skyline location (1 hour from Lushoto)",
      "Explore historic cable system for log transport",
      "Learn about colonial-era engineering",
      "Visit Jiwe la Mungu (Stone of God) rock formation",
      "Fantastic views of surrounding hills and valleys",
      "Unique geological formations and history",
      "Picnic lunch with panoramic vistas",
    ],
    highlights: "Unique historical experience with world-class viewpoints and fascinating geology. Not recommended for those with fear of heights.",
  },
  {
    id: 4,
    anchor: "mtae-sungwi",
    title: "Mtae Multi-Day Village Trek & Waterfalls",
    price: 350,
    duration: "4-7 days",
    groupSize: "2-10 people",
    dropOff: "Lushoto town center",
    image: "/manus-storage/olLn43FsuXJN_643a40b7.jpg",
    description: "Epic multi-day trekking adventure through remote Usambara villages with overnight homestays, cultural immersion, and spectacular waterfalls. Sleep in different villages each night.",
    details: [
      "Day 1: Trek through farmland to first village homestay",
      "Day 2: Hike through rainforests and traditional Shambaa villages",
      "Day 3: Reach impressive Mtae Sungwi Waterfall with swimming",
      "Day 4: Visit remote mountain villages and cultural sites",
      "Sleep in different village homestays each night",
      "Meet local community members and learn traditions",
      "All meals included (breakfast, lunch, dinner)",
      "Professional guide with local knowledge",
      "Customizable duration from 4-7+ days",
    ],
    highlights: "The ultimate immersive cultural experience. Trek through pristine rainforests, sleep in authentic village homestays, and connect deeply with Shambaa communities.",
  },
  {
    id: 5,
    anchor: "mkuzi",
    title: "Mkuzi Waterfall & Forest Swim",
    price: 80,
    duration: "4-5 hours",
    groupSize: "2-12 people",
    dropOff: "Lushoto town center",
    image: "/manus-storage/lukntDJfQrLl_6a4de630.jpg",
    description: "Peaceful waterfall hike with a natural swimming pool, surrounded by dense vegetation and tranquil forest atmosphere.",
    details: [
      "Scenic walk through farmland and forest",
      "Reach peaceful Mkuzi Waterfall",
      "Natural swimming pool for cooling off",
      "Picnic lunch surrounded by nature",
      "Photography opportunities",
      "Relaxation time by the water",
      "Easy to moderate difficulty",
    ],
    highlights: "Perfect for relaxation and swimming. Great for families and those seeking a peaceful nature experience.",
  },
  {
    id: 6,
    anchor: "ndelemai",
    title: "Ndelemai Primary Rainforest",
    price: 105,
    duration: "4-5 hours",
    groupSize: "2-8 people",
    dropOff: "Lushoto town center",
    image: "/manus-storage/IMG_20230104_142902_550_78e5b8db.webp",
    description: "Explore one of the few remaining primary tropical rainforests in the Usambara Mountains with excellent wildlife spotting opportunities.",
    details: [
      "Hike through primary tropical rainforest",
      "Spot colobus monkeys, squirrels, butterflies, chameleons",
      "Encounter endemic plant species",
      "Visit Sakhrani Mission for locally grown macadamia nuts",
      "Expert guide for wildlife identification",
      "Photography tips for wildlife",
      "Picnic lunch in the forest",
    ],
    highlights: "A paradise for wildlife enthusiasts and nature photographers seeking endemic species and pristine rainforest.",
  },
  {
    id: 7,
    anchor: "mtae-viewpoint",
    title: "Mtae Viewpoint & Pottery Women",
    price: 85,
    duration: "3-4 hours",
    groupSize: "2-12 people",
    dropOff: "Lushoto town center",
    image: "/manus-storage/IMG_20230104_142902_550_78e5b8db.webp",
    description: "Diverse hike combining rainforests, traditional villages, and one of the most impressive viewpoints in the Usambaras with cultural immersion.",
    details: [
      "Hike through rainforests and traditional villages",
      "Meet pottery-making women and learn their craft",
      "Learn about Shambaa people lifestyle and traditions",
      "Reach world-class Mtae Viewpoint",
      "Panoramic views of surrounding landscape",
      "Purchase authentic pottery from local artisans",
      "Picnic lunch with cultural exchange",
    ],
    highlights: "One of the most culturally immersive experiences, combining natural beauty with deep community engagement.",
  },
  {
    id: 8,
    anchor: "bangala",
    title: "Bangala River Valley Walk",
    price: 80,
    duration: "4-5 hours",
    groupSize: "2-10 people",
    dropOff: "Lushoto town center",
    image: "/manus-storage/IMG_20230104_142902_550_78e5b8db.webp",
    description: "Refreshing hike along river valleys with wading through shallow water, scenic plains views, and community conservation projects.",
    details: [
      "Hike along scenic river valleys",
      "Wade through shallow water sections",
      "Scenic views over Maasai plains",
      "Visit Wasambaa farm and learn farming practices",
      "Tour tree nursery at primary school",
      "Learn about traditional irrigation systems",
      "Community-based conservation projects",
      "Picnic lunch by the river",
    ],
    highlights: "Unique river experience combining nature, community engagement, and sustainable farming practices.",
  },
  {
    id: 9,
    anchor: "mkomazi",
    title: "Mkomazi National Park Safari",
    price: 200,
    duration: "Full day",
    groupSize: "2-8 people",
    dropOff: "Lushoto town center",
    image: "/manus-storage/IMG_20230104_142902_550_78e5b8db.webp",
    description: "Experience wildlife safari in Mkomazi National Park, home to the Big Five, just 90 minutes from Lushoto.",
    details: [
      "Early morning and afternoon game drives",
      "Spot lions, leopards, elephants, rhinos, and buffalo",
      "Professional safari guide with wildlife expertise",
      "Packed lunch and refreshments included",
      "Photography opportunities",
      "Binoculars provided",
      "Visit ranger station and learn conservation efforts",
    ],
    highlights: "Witness incredible wildlife in its natural habitat. 90 minutes from Lushoto, perfect for safari lovers.",
  },
];

export default function Tours() {
  const [expandedTour, setExpandedTour] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Tours
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the wonders of Magamba and the Usambara Mountains with our
              expertly guided tours. From iconic viewpoints to pristine waterfalls,
              each experience is carefully designed for unforgettable memories.
            </p>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            {tours.map((tour, index) => (
              <div
                key={tour.id}
                id={tour.anchor}
                className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up scroll-mt-24"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  {/* Image */}
                  <div className="md:col-span-1">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-48 md:h-full object-cover rounded-lg"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?w=400&h=300&fit=crop";
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {tour.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {tour.description}
                      </p>

                      {/* Tour Details */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Duration</p>
                            <p className="font-semibold text-foreground">{tour.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Group Size</p>
                            <p className="font-semibold text-foreground">{tour.groupSize}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-primary" />
                          <div>
                            <p className="text-sm text-muted-foreground">Drop-off</p>
                            <p className="font-semibold text-foreground">{tour.dropOff}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Price</p>
                          <p className="text-2xl font-bold text-primary">${tour.price}</p>
                        </div>
                      </div>

                      {/* Expandable Details */}
                      <button
                        onClick={() =>
                          setExpandedTour(
                            expandedTour === tour.id ? null : tour.id
                          )
                        }
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
                      >
                        <span className="font-semibold">
                          {expandedTour === tour.id ? "Hide Details" : "Read More"}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            expandedTour === tour.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {expandedTour === tour.id && (
                        <div className="bg-muted/50 rounded-lg p-4 mb-4 animate-fade-in-up">
                          <h4 className="font-semibold text-foreground mb-3">
                            What's Included:
                          </h4>
                          <ul className="space-y-2">
                            {tour.details.map((detail, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-muted-foreground"
                              >
                                <span className="text-primary mt-1">✓</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="mt-4 text-sm font-semibold text-primary">
                            {tour.highlights}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3 flex-col sm:flex-row">
                      <Link href="/book-tour" className="flex-1">
                        <a>
                          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                            Book This Tour
                          </Button>
                        </a>
                      </Link>
                      <a
                        href={`https://wa.me/255783688844?text=Hi! I'm interested in the ${tour.title} tour for $${tour.price} per person. Can you provide more details?`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                          WhatsApp
                        </Button>
                      </a>
                      <a href={`tel:+255783688844`} className="flex-1">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          Call
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready for Your Adventure?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            All tours include expert local guides, packed lunches, and transportation.
            Contact us for group discounts and custom tour combinations.
          </p>
          <Link href="/book-tour">
            <a>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Plan Your Adventure
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
