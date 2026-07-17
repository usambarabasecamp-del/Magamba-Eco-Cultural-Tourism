import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function BookTour() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tourType: "",
    dates: "",
    groupSize: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const tourOptions = [
    "Usambara Mountain Trek",
    "Magamba Village Hiking",
    "Coffee Farm to Cup Tour",
    "Bird Watching in Magamba Forest",
    "Mkomazi National Park Safari",
    "Traditional Dances",
    "Cooking Classes",
    "Storytelling Sessions",
    "Village Experience",
    "Custom Tour",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createMessageBody = () => {
    return `Tour Booking Inquiry\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nTour Type: ${formData.tourType}\nPreferred Dates: ${formData.dates}\nGroup Size: ${formData.groupSize}\n\nMessage: ${formData.message}`;
  };

  const handleSubmitVia = async (channel: 'email' | 'whatsapp' | 'call') => {
    setIsSubmitting(true);
    try {
      const messageBody = createMessageBody();

      if (channel === 'email') {
        const emailBody = `Tour Booking Inquiry from Magamba Tourism Website\n\n${messageBody}\n\n---\nThis inquiry was submitted through the Magamba Eco-cultural Tourism website.`;
        const mailtoLink = `mailto:magambaculturaltourism@gmail.com?subject=Tour Booking Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
      } else if (channel === 'whatsapp') {
        const whatsappMessage = `Hi Magamba Tourism!\n\n${messageBody}\n\nPlease confirm availability and pricing.`;
        const whatsappLink = `https://wa.me/255783688844?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappLink, '_blank');
      } else if (channel === 'call') {
        window.location.href = 'tel:+255783688844';
      }

      console.log(`Form submitted via ${channel}:`, formData);
      await new Promise((resolve) => setTimeout(resolve, 500));

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        tourType: "",
        dates: "",
        groupSize: "",
        message: "",
      });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Book Your Adventure
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Plan your perfect eco-cultural tourism experience in Magamba. Fill out
              the form below and we'll get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 animate-slide-in-left">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Contact Information
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:magambaculturaltourism@gmail.com"
                      className="text-primary hover:text-primary/80 transition-colors break-all"
                    >
                      magambaculturaltourism@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Phone & WhatsApp
                    </h3>
                    <div className="space-y-2">
                      <a
                        href="tel:+255783688844"
                        className="text-primary hover:text-primary/80 transition-colors block"
                      >
                        +255 783 688 844
                      </a>
                      <a
                        href="tel:+255621019025"
                        className="text-primary hover:text-primary/80 transition-colors block"
                      >
                        +255 621 019 025
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Magamba Village, Lushoto
                      <br />
                      Tanga Region, Tanzania
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12 p-6 bg-card rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/255783688844"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-center font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Chat on WhatsApp
                  </a>
                  <a
                    href="mailto:magambaculturaltourism@gmail.com"
                    className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 px-4 rounded-lg text-center font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2 animate-slide-in-right">
              <div className="bg-card rounded-lg shadow-lg p-8">
                <form className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+255 xxx xxx xxx"
                      required
                      className="w-full"
                    />
                  </div>

                  {/* Tour Type */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Tour Type *
                    </label>
                    <select
                      name="tourType"
                      value={formData.tourType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a tour</option>
                      {tourOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Dates */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Preferred Dates *
                    </label>
                    <Input
                      type="text"
                      name="dates"
                      value={formData.dates}
                      onChange={handleChange}
                      placeholder="e.g., July 15-20, 2026"
                      required
                      className="w-full"
                    />
                  </div>

                  {/* Group Size */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Group Size *
                    </label>
                    <Input
                      type="number"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      placeholder="Number of people"
                      min="1"
                      required
                      className="w-full"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message / Special Requests
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your interests, dietary requirements, or any special requests..."
                      rows={5}
                      className="w-full"
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                      <p className="font-semibold">
                        ✓ Thank you! Your inquiry has been submitted successfully.
                      </p>
                      <p className="text-sm mt-1">
                        We'll get back to you shortly at the email or phone number
                        provided.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                      <p className="font-semibold">
                        ✗ Something went wrong. Please try again or contact us
                        directly.
                      </p>
                    </div>
                  )}

                  {/* Submit Buttons - Multiple Channels */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-foreground">Book via your preferred channel:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <Button
                        onClick={() => handleSubmitVia('email')}
                        disabled={isSubmitting}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? <span className="animate-spin">⏳</span> : <Mail className="w-5 h-5" />}
                        Email
                      </Button>
                      <Button
                        onClick={() => handleSubmitVia('whatsapp')}
                        disabled={isSubmitting}
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? <span className="animate-spin">⏳</span> : <span>💬</span>}
                        WhatsApp
                      </Button>
                      <Button
                        onClick={() => handleSubmitVia('call')}
                        disabled={isSubmitting}
                        className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? <span className="animate-spin">⏳</span> : <Phone className="w-5 h-5" />}
                        Call Now
                      </Button>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground text-center">
                    * Required fields. We'll respond within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How far in advance should I book?",
                a: "We recommend booking at least 2-3 weeks in advance for better availability, but we can accommodate last-minute bookings when possible.",
              },
              {
                q: "What is the best time to visit?",
                a: "The best time to visit Magamba is during the dry seasons: June-October and January-February. However, the region is beautiful year-round.",
              },
              {
                q: "Are tours suitable for children?",
                a: "Yes! Many of our tours are family-friendly. Please mention if you're traveling with children so we can customize the experience.",
              },
              {
                q: "What's included in the tour price?",
                a: "Tour prices include guide services, activities, and meals as specified. Accommodation and transportation to Lushoto are arranged separately.",
              },
              {
                q: "Do you offer group discounts?",
                a: "Yes! We offer special rates for groups of 8 or more. Contact us directly for a custom quote.",
              },
              {
                q: "What should I bring?",
                a: "Bring comfortable hiking shoes, sun protection, light rain jacket, camera, and any personal medications. We'll provide a detailed packing list upon booking.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.q}
                </h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
