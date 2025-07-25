import Image from "next/image";
import { TrendingUp, UserCheck, Zap, Handshake } from 'lucide-react';
import { Button } from "../ui/button";
import Link from "next/link";

const reasons = [
  {
    icon: TrendingUp,
    title: "Strategy-First Execution",
    description: "We don't just post content; we build strategies that create trends and drive measurable results.",
  },
  {
    icon: UserCheck,
    title: "Youth & Creator Focused",
    description: "Deep expertise in the OTT, creator, and youth-centric brand space. We know your audience.",
  },
  {
    icon: Zap,
    title: "Affordable Campaigns",
    description: "Our campaign pricing starts from just 15K/month, making top-tier marketing accessible.",
  },
  {
    icon: Handshake,
    title: "End-to-End Service",
    description: "From content and ads to influencer management and reporting, we handle it all for you.",
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-card" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
                 <Image
                    src="https://placehold.co/600x700.png"
                    alt="Why choose Rexx Media"
                    data-ai-hint="marketing strategy session"
                    width={600}
                    height={700}
                    className="rounded-xl shadow-lg object-cover"
                />
            </div>
            <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Why Work With Us</div>
                <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight">
                    Your Partner in Digital Growth
                </h2>
                <p className="text-muted-foreground text-lg">
                    Choosing the right agency is crucial. We're more than just a service provider; we're your partner in success, committed to bringing your vision to life.
                </p>
                <div className="space-y-4">
                    {reasons.map((reason) => (
                    <div key={reason.title} className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary p-2 rounded-full mt-1">
                            <reason.icon className="h-5 w-5" />
                        </div>
                        <div>
                        <h4 className="font-semibold">{reason.title}</h4>
                        <p className="text-sm text-muted-foreground">{reason.description}</p>
                        </div>
                    </div>
                    ))}
                </div>
                <Button asChild size="lg" className="mt-4">
                    <Link href="#contact">Let's Talk</Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
