"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Design",
    image: "https://placehold.co/600x400.png",
    hint: "ecommerce website",
    description: "A complete redesign of a major online retailer's website to improve user experience and conversion rates.",
    tags: ["UI/UX", "React", "Next.js"],
  },
  {
    title: "Corporate Branding",
    category: "Branding",
    image: "https://placehold.co/600x400.png",
    hint: "corporate identity",
    description: "Developed a new brand identity for a financial services company, including logo, color palette, and typography.",
    tags: ["Logo Design", "Strategy"],
  },
  {
    title: "SaaS Dashboard",
    category: "Web Design",
    image: "https://placehold.co/600x400.png",
    hint: "dashboard ui",
    description: "Designed and developed a complex data visualization dashboard for a SaaS product.",
    tags: ["Data Viz", "Figma", "Vue.js"],
  },
  {
    title: "Mobile App Launch",
    category: "Marketing",
    image: "https://placehold.co/600x400.png",
    hint: "mobile app",
    description: "Created a comprehensive digital marketing campaign for the launch of a new fitness app.",
    tags: ["Social Media", "PPC"],
  },
  {
    title: "Startup Website",
    category: "Web Design",
    image: "https://placehold.co/600x400.png",
    hint: "startup website",
    description: "Built a fast and scalable website for a tech startup from scratch.",
    tags: ["Webflow", "CMS"],
  },
  {
    title: "Logo System",
    category: "Branding",
    image: "https://placehold.co/600x400.png",
    hint: "brand guidelines",
    description: "Designed a flexible logo system for a media company with multiple sub-brands.",
    tags: ["Branding", "Illustration"],
  },
];

const categories = ["All", "Web Design", "Branding", "Marketing"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block rounded-lg bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary-foreground">Our Work</div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight mt-4">
            Showcasing Our Expertise
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We take pride in our work. Here are some of our recent projects that demonstrate our skills and dedication.
          </p>
        </div>

        <div className="mt-8 mb-12 flex justify-center flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {filteredProjects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full overflow-hidden group flex flex-col">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        data-ai-hint={project.hint}
                        width={600}
                        height={400}
                        className="object-cover w-full h-60 transition-transform duration-500 group-hover:scale-105"
                      />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                       <Badge variant="secondary" className="absolute top-4 right-4">{project.category}</Badge>
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="font-headline text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
                      </div>
                      <Link href="#" className="text-sm font-semibold text-primary inline-flex items-center group/link">
                        View Case Study <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
