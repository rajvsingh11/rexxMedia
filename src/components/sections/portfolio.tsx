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
    title: "OTT Show Launch – Amazon MiniTV",
    category: "OTT Launch",
    image: "https://placehold.co/600x400.png",
    hint: "tv show poster",
    description: "Executed a 30-day content calendar with influencer collaborations and targeted ads.",
    tags: ["2.1M Reach", "180K Engagement", "0.49 CPC"],
  },
  {
    title: "Influencer Brand Growth",
    category: "Influencer Marketing",
    image: "https://placehold.co/600x400.png",
    hint: "lifestyle influencer",
    description: "Grew a lifestyle creator from 40K to 75K followers, securing 5 paid collaborations in 6 weeks.",
    tags: ["Follower Growth", "Brand Collabs"],
  },
  {
    title: "D2C Brand Launch",
    category: "D2C Launch",
    image: "https://placehold.co/600x400.png",
    hint: "skincare product",
    description: "Launched a new skincare startup, achieving a 3.8x Return On Ad Spend (ROAS).",
    tags: ["3.8x ROAS", "1K Followers"],
  },
  {
    title: "Reel Hooks That Stop the Scroll",
    category: "Content Strategy",
    image: "https://placehold.co/600x400.png",
    hint: "social media feed",
    description: "Creative sample for a carousel post detailing 5 effective hooks for short-form video content.",
    tags: ["Carousel", "Content Creation"],
  },
  {
    title: "How to Build Launch Hype",
    category: "Content Strategy",
    image: "https://placehold.co/600x400.png",
    hint: "youtube thumbnail",
    description: "Concept for a YouTube thumbnail designed to maximize clicks for a video on launch marketing.",
    tags: ["YouTube", "Thumbnails"],
  },
  {
    title: "BTS Storytelling Reel",
    category: "Content Strategy",
    image: "https://placehold.co/600x400.png",
    hint: "behind the scenes",
    description: "A behind-the-scenes reel format using a compelling voiceover to tell a brand's story.",
    tags: ["Reels", "Storytelling"],
  },
];

const categories = ["All", "OTT Launch", "Influencer Marketing", "D2C Launch", "Content Strategy"];

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
          <div className="inline-block rounded-lg bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary-foreground">Case Studies & Samples</div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight mt-4">
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
                        View Details <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
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
