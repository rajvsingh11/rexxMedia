import Image from "next/image";
import { Award, Target, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-background" data-aos="slide-up">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
             <div className="inline-block rounded-lg bg-secondary px-4 py-2 text-base font-medium text-secondary-foreground">About Us</div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">
              We Don't Just Manage Accounts — We Launch Trends
            </h2>
            <p className="text-muted-foreground text-lg">
              Rexx Media specializes in Digital Marketing & Launch Strategy for OTT Platforms, Influencers, and Modern Brands. We combine storytelling with strategy to drive measurable results.
            </p>
            <p className="text-muted-foreground">
             From influencer campaigns to full-scale OTT launches, our team has the expertise to make your next big thing a massive success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center pt-4">
              <div className="p-4 rounded-lg bg-card text-card-foreground">
                <Target className="h-8 w-8 mx-auto text-accent mb-2"/>
                <h4 className="font-semibold">Our Mission</h4>
                <p className="text-sm text-muted-foreground">To launch trends.</p>
              </div>
              <div className="p-4 rounded-lg bg-card text-card-foreground">
                <Award className="h-8 w-8 mx-auto text-accent mb-2"/>
                <h4 className="font-semibold">Our Vision</h4>
                <p className="text-sm text-muted-foreground">To be the top launch agency.</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="https://placehold.co/600x500.png"
              alt="Our team collaborating"
              data-ai-hint="marketing team meeting"
              width={600}
              height={500}
              className="rounded-xl shadow-lg object-cover w-full h-auto max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
