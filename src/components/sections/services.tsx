import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Film, Star, DollarSign, Search, Video } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Users,
    title: "Social Media Management",
    description: "We don’t just manage accounts — we build communities and launch trends that drive engagement.",
  },
  {
    icon: Film,
    title: "Content Creation",
    description: "Creating high-impact Reels, Carousels, and Shorts that capture attention and tell your story.",
  },
  {
    icon: Star,
    title: "Influencer Campaigns",
    description: "Connecting your brand with the right influencers to create authentic, high-performing campaigns.",
  },
  {
    icon: DollarSign,
    title: "Paid Advertising",
    description: "Data-driven ad campaigns on Meta, Google, and YouTube to maximize your reach and ROI.",
  },
  {
    icon: Search,
    title: "SEO & YouTube Optimization",
    description: "Boosting your visibility on search engines and YouTube to attract organic, high-intent audiences.",
  },
  {
    icon: Video,
    title: "Video & Content Seeding",
    description: "High-ROI awareness tools, including viral seeding across WhatsApp, Telegram, and meme pages.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-card" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Our Core Services</div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight mt-4">
            What We Do Best
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From influencer campaigns to full-scale OTT launches, Rexx Media combines storytelling with strategy to drive measurable results.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/50 bg-background">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
