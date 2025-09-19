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
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "OTT Show Launch – Amazon MiniTV",
    category: "OTT Launch",
    image: "/mini.jpg",
    hint: "tv show poster",
    description: "Executed a 30-day content calendar with influencer collaborations and targeted ads, resulting in massive audience engagement.",
    tags: ["2.1M Reach", "180K Engagement", "0.49 CPC"],
  },
  {
    title: "Influencer Brand Growth",
    category: "Influencer Marketing",
    image: "/growth.jpg",
    hint: "lifestyle influencer",
    description: "Scaled a lifestyle creator from 40K to 75K followers, securing 5 paid collaborations in just 6 weeks through strategic content.",
    tags: ["Follower Growth", "Brand Collabs"],
  },
  {
    title: "D2C Brand Launch",
    category: "D2C Launch",
    image: "/d2c.jpg",
    hint: "skincare product",
    description: "Successfully launched a new skincare startup, achieving an impressive 3.8x Return On Ad Spend (ROAS) out of the gate.",
    tags: ["3.8x ROAS", "1K Followers"],
  },
  {
    title: "Reel Hooks That Stop the Scroll",
    category: "Content Strategy",
    image: "/reels.jpg",
    hint: "social media feed",
    description: "A creative sample for a carousel post detailing 5 highly effective hooks designed for viral short-form video content.",
    tags: ["Carousel", "Content Creation"],
  },
  {
    title: "Physics Wallah",
    category: "Viral Marketing",
    image: "/physics.jpg",
    hint: "education technology",
    description: "Generated an explosive 150M+ views by activating our Viral Reach Marketing network, making their message a phenomenon.",
    tags: ["150M+ Views", "Viral Reach Marketing"],
  },
  {
    title: "Gutur Gu",
    category: "Viral Marketing",
    image: "/gutar.jpg",
    hint: "movie poster",
    description: "Shattered expectations with 220M+ global views through razor-sharp promotion and our unparalleled Viral Reach Marketing.",
    tags: ["220M+ Views", "Viral Reach Marketing"],
  },
  {
    title: "Half CA",
    category: "Brand Marketing",
    image: "/halfCA.jpg",
    hint: "web series",
    description: "Transformed Half CA into a 150M+ view sensation by developing brand assets that built a dedicated, fan-driven empire.",
    tags: ["150M+ Views", "Brand Marketing"],
  },
  {
    title: "Lucky Guy",
    category: "Brand Marketing",
    image: "/luckyGuy.jpg",
    hint: "show poster",
    description: "Catapulted Lucky Guy to 120M+ views by igniting growth through targeted brand ecosystems and strategic asset development.",
    tags: ["120M+ Views", "Brand Marketing"],
  },
  {
    title: "Yeh Meri Family",
    category: "Social Media",
    image: "/yehMeriFamliy.jpg",
    hint: "family show",
    description: "Dominated social platforms with a 360° transformation, delivering an incredible 1.2B+ views through precision strategies.",
    tags: ["1.2B+ Views", "360° Social Media"],
  },
  {
    title: "Highway Love",
    category: "Social Media",
    image: "/highway.jpg",
    hint: "romance series",
    description: "Achieved a staggering 200M+ views by executing a 360° social media campaign that covered every angle for total impact.",
    tags: ["200M+ Views", "360° Social Media"],
  },
  {
    title: "Badtameez Dil",
    category: "Viral Marketing",
    image: "/badtameez.jpg",
    hint: "heart illustration",
    description: "Crafted a narrative that spread like wildfire, hitting 170M+ views with our in-house Viral Content Production Studio.",
    tags: ["170M+ Views", "Viral Content"],
  },
];

const categories = ["All", "OTT Launch", "Influencer Marketing", "D2C Launch", "Viral Marketing", "Brand Marketing", "Social Media", "Content Strategy"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="bg-background" data-aos="slide-up">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block rounded-lg bg-secondary px-4 py-2 text-base font-medium text-secondary-foreground">Our Work</div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight mt-4 text-primary">
            Showcasing Our Results
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We take pride in our work. Here are some of our case study highlights and creative samples.
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
            loop: filteredProjects.length > 3,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {filteredProjects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full overflow-hidden group flex flex-col bg-card text-card-foreground shadow-md">
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
                      <h3 className="font-headline text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => <Badge key={tag} variant="default">{tag}</Badge>)}
                      </div>
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
