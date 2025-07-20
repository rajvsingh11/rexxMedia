import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Target, Users } from "lucide-react";

const teamMembers = [
  { name: "Jane Doe", role: "CEO & Founder", image: "https://placehold.co/100x100.png", hint: "woman smiling" },
  { name: "John Smith", role: "Lead Designer", image: "https://placehold.co/100x100.png", hint: "man glasses" },
  { name: "Emily White", role: "Lead Developer", image: "https://placehold.co/100x100.png", hint: "woman portrait" },
  { name: "Michael Black", role: "Project Manager", image: "https://placehold.co/100x100.png", hint: "man professional" },
];

export default function About() {
  return (
    <section id="about" className="bg-card">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center pt-4">
              <div className="p-4 rounded-lg bg-background">
                <Target className="h-8 w-8 mx-auto text-primary mb-2"/>
                <h4 className="font-semibold">Our Mission</h4>
                <p className="text-sm text-muted-foreground">To launch trends.</p>
              </div>
              <div className="p-4 rounded-lg bg-background">
                <Award className="h-8 w-8 mx-auto text-primary mb-2"/>
                <h4 className="font-semibold">Our Vision</h4>
                <p className="text-sm text-muted-foreground">To be the top launch agency.</p>
              </div>
               <div className="p-4 rounded-lg bg-background">
                <Users className="h-8 w-8 mx-auto text-primary mb-2"/>
                <h4 className="font-semibold">Our Team</h4>
                <p className="text-sm text-muted-foreground">Strategic & creative.</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Our team collaborating"
              data-ai-hint="marketing team meeting"
              width={600}
              height={600}
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-24 text-center">
           <div className="inline-block rounded-lg bg-secondary px-4 py-2 text-base font-medium text-secondary-foreground">Meet the Team</div>
          <h3 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight mt-4">
            The Minds Behind the Magic
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We are a group of designers, developers, and strategists who are passionate about what we do.
          </p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.hint} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-sm text-primary">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
