import { MapPin, Clock, Users, Binoculars } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Safaris() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Mkomazi National Park Safaris
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience wildlife encounters in one of Tanzania's most pristine
              national parks, home to the Big Five.
            </p>
          </div>
        </div>
      </section>

      {/* Main Safari Package */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="animate-slide-in-left">
              <img
                src="https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?w=600&h=400&fit=crop"
                alt="Mkomazi National Park"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="animate-slide-in-right space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Full Day Safari Experience
              </h2>
              <p className="text-lg text-muted-foreground">
                Embark on an unforgettable safari adventure through Mkomazi National
                Park, just 90 minutes from Lushoto. Witness the majesty of African
                wildlife in their natural habitat.
              </p>

              {/* Key Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Duration</h3>
                    <p className="text-muted-foreground">Full day (12-14 hours)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Group Size</h3>
                    <p className="text-muted-foreground">2-8 people per vehicle</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">
                      90 minutes from Lushoto
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Binoculars className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Price</h3>
                    <p className="text-2xl font-bold text-primary">$200</p>
                    <p className="text-sm text-muted-foreground">per person</p>
                  </div>
                </div>
              </div>

              <Link href="/book-tour">
                <a>
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Book Safari Now
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Your Safari Itinerary
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                time: "04:00 AM",
                title: "Early Morning Departure",
                description:
                  "Pick-up from your accommodation in Lushoto. Enjoy coffee and light breakfast during the drive to Mkomazi.",
              },
              {
                time: "06:00 AM",
                title: "First Game Drive",
                description:
                  "Begin your safari with an early morning game drive when wildlife is most active. Spot lions, leopards, and other predators.",
              },
              {
                time: "09:00 AM",
                title: "Rest & Refreshments",
                description:
                  "Return to the lodge for rest, refreshments, and a light breakfast. Relax and prepare for the afternoon drive.",
              },
              {
                time: "11:00 AM",
                title: "Lunch",
                description:
                  "Enjoy a delicious packed lunch at a scenic viewpoint within the park.",
              },
              {
                time: "01:00 PM",
                title: "Afternoon Game Drive",
                description:
                  "Explore different areas of the park. Look for elephants, giraffes, zebras, and various bird species.",
              },
              {
                time: "05:00 PM",
                title: "Return Journey",
                description:
                  "Begin your journey back to Lushoto, arriving in the evening. Reflect on your incredible safari experience.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-24 text-center">
                    <p className="font-bold text-primary">{item.time}</p>
                  </div>
                  {index < 5 && (
                    <div className="w-1 h-16 bg-primary/30 mt-4" />
                  )}
                </div>
                <div className="pb-6 flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife You'll See */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Wildlife You May Encounter
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "Lions", emoji: "🦁" },
              { name: "Leopards", emoji: "🐆" },
              { name: "Elephants", emoji: "🐘" },
              { name: "Giraffes", emoji: "🦒" },
              { name: "Zebras", emoji: "🦓" },
              { name: "Buffalo", emoji: "🐃" },
              { name: "Rhinos", emoji: "🦏" },
              { name: "Antelope", emoji: "🦌" },
              { name: "Hyenas", emoji: "🐕" },
              { name: "Birds", emoji: "🦅" },
            ].map((animal, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-5xl mb-3">{animal.emoji}</div>
                <p className="font-semibold text-foreground">{animal.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            What's Included
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              "Professional safari guide with wildlife expertise",
              "4x4 safari vehicle with pop-up roof",
              "All park entrance fees",
              "Breakfast and lunch",
              "Binoculars and field guides",
              "Photography opportunities",
              "Hotel pick-up and drop-off",
              "Refreshments throughout the day",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-primary font-bold text-xl">✓</span>
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Safari Adventure?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book your Mkomazi National Park safari today and experience the thrill
            of African wildlife.
          </p>
          <Link href="/book-tour">
            <a>
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Book Your Safari
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
