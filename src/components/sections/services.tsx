import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Code, Megaphone, Search, BarChart, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Crafting intuitive and beautiful user interfaces that provide a seamless user experience.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive, high-performance websites and web applications with modern technologies.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Executing data-driven marketing strategies to increase your online visibility and reach.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improving your website's ranking on search engines to attract organic traffic.",
  },
  {
    icon: BarChart,
    title: "Brand Strategy",
    description: "Developing a strong brand identity that resonates with your target audience.",
  },
  {
    icon: Users,
    title: "Content Creation",
    description: "Creating compelling content that engages your audience and tells your brand's story.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Our Services</div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight mt-4">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From design to development and marketing, we offer a complete suite of services to help your business succeed online.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary/50">
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
