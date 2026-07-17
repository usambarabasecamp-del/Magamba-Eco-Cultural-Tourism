import { Leaf, Heart, Briefcase } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      anchor: "conservation",
      icon: Leaf,
      title: "Environmental & Nature Conservation",
      description:
        "Protecting and preserving the natural ecosystems of Magamba Forest and the Usambara Mountains.",
      initiatives: [
        "Reforestation programs in degraded areas",
        "Wildlife habitat protection and restoration",
        "Water source conservation and management",
        "Sustainable farming practices training",
        "Community environmental education",
        "Biodiversity monitoring and research",
      ],
      impact:
        "Our conservation efforts have helped restore over 500 hectares of forest and protect critical wildlife habitats.",
    },
    {
      id: 2,
      anchor: "artists",
      icon: Heart,
      title: "Supporting Artists & Artisans",
      description:
        "Empowering local artists and artisans by providing market access and fair compensation.",
      initiatives: [
        "Fair trade marketplace for local crafts",
        "Skills training in traditional arts",
        "Market linkage to international buyers",
        "Cooperative formation and support",
        "Quality improvement programs",
        "Cultural heritage preservation",
      ],
      impact:
        "Over 150 local artisans now earn sustainable income through our support programs.",
    },
    {
      id: 3,
      anchor: "youth",
      icon: Briefcase,
      title: "Youth Employment Opportunities",
      description:
        "Creating meaningful employment and skills development for young people in the community.",
      initiatives: [
        "Tourism guide training programs",
        "Hospitality and service skills development",
        "Entrepreneurship workshops",
        "Apprenticeship opportunities",
        "Leadership development programs",
        "Educational scholarships",
      ],
      impact:
        "Over 200 young people have received training, with 80% now employed in tourism and related sectors.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Making a positive impact on the environment and communities through
              sustainable tourism and development initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  id={project.anchor}
                  key={project.id}
                  className="scroll-mt-24 bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    {/* Left Content */}
                    <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-foreground">
                          {project.title}
                        </h2>
                      </div>

                      <p className="text-lg text-muted-foreground mb-6">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-foreground mb-4">
                          Key Initiatives:
                        </h3>
                        <ul className="space-y-3">
                          {project.initiatives.map((initiative, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-muted-foreground"
                            >
                              <span className="text-primary font-bold text-lg">
                                ✓
                              </span>
                              <span>{initiative}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
                        <h4 className="font-bold text-foreground mb-2">
                          Our Impact:
                        </h4>
                        <p className="text-muted-foreground">{project.impact}</p>
                      </div>
                    </div>

                    {/* Right Image */}
                    <div
                      className={`flex items-center justify-center ${
                        index % 2 === 0 ? "order-2" : "order-1"
                      }`}
                    >
                      <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
                        {index === 0 && (
                          <img
                            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop"
                            alt="Environmental Conservation"
                            className="w-full h-full object-cover"
                          />
                        )}
                        {index === 1 && (
                          <img
                            src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=400&fit=crop"
                            alt="Supporting Artists"
                            className="w-full h-full object-cover"
                          />
                        )}
                        {index === 2 && (
                          <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop"
                            alt="Youth Employment"
                            className="w-full h-full object-cover"
                          />
                        )}
                        <div className="absolute inset-0 bg-black/20" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Our Impact by Numbers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Hectares Restored" },
              { number: "150+", label: "Artisans Supported" },
              { number: "200+", label: "Youth Trained" },
              { number: "80%", label: "Employment Rate" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-background rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-5xl font-bold text-primary mb-3">
                  {stat.number}
                </p>
                <p className="text-lg font-semibold text-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            How You Can Help
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Visit & Support",
                description:
                  "By visiting Magamba, you directly support our conservation and community projects.",
                icon: "🌍",
              },
              {
                title: "Buy Local",
                description:
                  "Purchase crafts and products from local artisans through our fair trade marketplace.",
                icon: "🛍️",
              },
              {
                title: "Volunteer",
                description:
                  "Join our team for conservation work, teaching, or community development projects.",
                icon: "🤝",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up text-center"
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

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Make a Difference Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join us in creating positive change for the environment and communities
            of Magamba.
          </p>
          <a
            href="https://wa.me/255783688844"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-all duration-300 hover:scale-105">
              Get Involved
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
