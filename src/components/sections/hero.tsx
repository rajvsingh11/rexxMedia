import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] max-h-[800px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Creative agency workspace"
        data-ai-hint="digital marketing"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 container mx-auto flex h-full items-center justify-center text-center px-4 md:px-6">
        <div className="flex flex-col items-center gap-6 max-w-3xl">
          <div className="bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5" data-aos="fade-up">
            <span className="text-sm text-primary font-medium">Digital Marketing & Launch Strategy</span>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-balance">
            <span data-aos="fade-up" data-aos-delay="100">We Launch Trends,</span><br/>
            <span data-aos="fade-up" data-aos-delay="200">not just Campaigns.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance" data-aos="fade-up" data-aos-delay="300">
            Specializing in launch strategies for OTT Platforms, Influencers, and Modern Brands. Let's create trends together.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4" data-aos="fade-up" data-aos-delay="400">
            <Button size="lg" asChild>
              <Link href="#contact">
                Launch with Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#portfolio">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
