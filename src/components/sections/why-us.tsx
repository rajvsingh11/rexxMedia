import Image from "next/image";
import { Award, Users, Heart, Zap, ShieldCheck, CheckCircle } from 'lucide-react';
import { Button } from "../ui/button";
import Link from "next/link";

const reasons = [
  {
    icon: Award,
    title: "Expert Team",
    description: "Our team consists of industry veterans with a passion for excellence and innovation.",
  },
  {
    icon: Heart,
    title: "Client-Focused",
    description: "We prioritize your needs and goals, ensuring a collaborative and transparent process.",
  },
  {
    icon: Zap,
    title: "Proven Results",
    description: "We have a track record of delivering successful projects that drive growth and ROI.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Rigorous testing and quality checks are part of our process to deliver flawless products.",
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
                 <Image
                    src="https://placehold.co/600x700.png"
                    alt="Why choose us"
                    data-ai-hint="business meeting"
                    width={600}
                    height={700}
                    className="rounded-xl shadow-lg object-cover"
                />
            </div>
            <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Why Choose Us</div>
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
