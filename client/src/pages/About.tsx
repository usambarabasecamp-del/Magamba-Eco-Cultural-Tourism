import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About Magamba Eco-cultural Tourism
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connecting locals with international and national tourists through
              authentic eco-cultural experiences in Lushoto, Tanzania.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img
                src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?w=600&h=400&fit=crop"
                alt="Magamba Forest"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="animate-slide-in-right space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  To provide authentic, sustainable eco-cultural tourism experiences
                  that benefit local communities while preserving the natural beauty
                  and cultural heritage of Magamba Village and the Usambara Mountains.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Our Vision
                </h3>
                <p className="text-lg text-muted-foreground">
                  To become the leading eco-cultural tourism destination in Tanzania,
                  recognized for responsible tourism practices and meaningful
                  connections between visitors and local communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainability",
                description:
                  "We are committed to protecting the environment and ensuring our tourism practices benefit future generations.",
              },
              {
                title: "Authenticity",
                description:
                  "We provide genuine cultural experiences that honor local traditions and support authentic community engagement.",
              },
              {
                title: "Community First",
                description:
                  "We prioritize the well-being of local communities, creating employment opportunities and supporting local initiatives.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 bg-background rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Geography */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Located in Lushoto, Tanga
              </h2>
              <p className="text-lg text-muted-foreground">
                Magamba Village is nestled in the heart of the Usambara Mountains,
                one of Tanzania's most biodiverse regions. Our location provides
                access to pristine forests, cultural heritage sites, and stunning
                landscapes.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Adjacent to Magamba Forest Reserve (9,284 hectares)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Close to Mkomazi National Park (90 minutes drive)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Rich bird watching destination with 100+ species
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-muted-foreground">
                    Home to unique flora and fauna endemic to the region
                  </span>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.pexels.com/photos/3714896/pexels-photo-3714896.jpeg?w=600&h=400&fit=crop"
                alt="Community"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Our dedicated team of local guides, hospitality professionals, and
            conservation experts are passionate about sharing the beauty and culture
            of Magamba with visitors from around the world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Local Guides",
                role: "Expert guides with deep knowledge of the region",
              },
              {
                name: "Hospitality Team",
                role: "Dedicated to ensuring your comfort and satisfaction",
              },
              {
                name: "Conservation Team",
                role: "Committed to protecting our natural heritage",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="p-8 bg-background rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👥</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
