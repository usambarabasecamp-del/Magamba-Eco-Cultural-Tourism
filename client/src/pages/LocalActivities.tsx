import { Users, Music, Utensils, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const activities = [
  {
    id: 1,
    anchor: "dances",
    title: "Traditional Dances",
    price: 40,
    duration: "2 hours",
    icon: Music,
    image: "/manus-storage/IMG_20230420_124518_017_c62b2b40.jpg",
    description:
      "Experience authentic traditional dances performed by local community members.",
    details: [
      "Learn traditional dance moves",
      "Participate in cultural performances",
      "Understand the cultural significance",
      "Photography opportunities",
      "Refreshments included",
    ],
  },
  {
    id: 2,
    anchor: "cooking",
    title: "Cooking Classes",
    price: 50,
    duration: "3 hours",
    icon: Utensils,
    image: "/manus-storage/IMG_20230420_124518_017_c62b2b40.jpg",
    description:
      "Learn to prepare traditional Tanzanian dishes with local chefs in an authentic village setting.",
    details: [
      "Hands-on cooking experience",
      "Learn traditional recipes",
      "Use local ingredients",
      "Enjoy the meal you prepared",
      "Recipe cards provided",
    ],
  },
  {
    id: 3,
    anchor: "storytelling",
    title: "Storytelling Sessions",
    price: 30,
    duration: "2 hours",
    icon: BookOpen,
    image: "/manus-storage/IMG_20230420_124518_017_c62b2b40.jpg",
    description:
      "Listen to fascinating stories from local elders about Magamba's history and culture.",
    details: [
      "Hear authentic local stories",
      "Learn about village history",
      "Understand cultural traditions",
      "Interactive Q&A session",
      "Refreshments included",
    ],
  },
  {
    id: 4,
    anchor: "village",
    title: "Village Experience",
    price: 60,
    duration: "Full day",
    icon: Users,
    image: "/manus-storage/IMG_20230420_124518_017_c62b2b40.jpg",
    description:
      "Immerse yourself in daily village life and connect with local communities.",
    details: [
      "Visit local homes and workshops",
      "Participate in daily activities",
      "Meet local artisans",
      "Traditional lunch with family",
      "Photography and interaction",
    ],
  },
];

export default function LocalActivities() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Local Activities
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unique experiences offered exclusively by Magamba Eco-cultural Tourism.
              Connect with local traditions and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div id={activity.anchor} className="scroll-mt-24">
                  <div
                    key={activity.id}
                  className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            {activity.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {activity.duration}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">
                          ${activity.price}
                        </p>
                        <p className="text-xs text-muted-foreground">per person</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {activity.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-2 mb-6">
                      {activity.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary font-bold">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link href="/book-tour">
                      <a>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          Book Activity
                        </Button>
                      </a>
                    </Link>
                  </div>
                </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Why Choose Our Activities?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authentic Experiences",
                description:
                  "All activities are led by local community members who are passionate about sharing their culture.",
              },
              {
                title: "Community Support",
                description:
                  "100% of activity proceeds directly support local families and community development projects.",
              },
              {
                title: "Small Groups",
                description:
                  "We keep groups small to ensure meaningful interactions and personalized experiences.",
              },
            ].map((reason, index) => (
              <div
                key={index}
                className="p-8 bg-background rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">✨</div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Create Unforgettable Memories</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Combine multiple activities to create your perfect Magamba experience.
          </p>
          <Link href="/book-tour">
            <a>
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Plan Your Experience
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
