
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // This onSubmit is not used when submitting to formspree via action/method attributes.
  // Kept for potential future use if switching back to client-side handling.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section id="contact" className="bg-card text-card-foreground" data-aos="slide-up">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
           <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Contact Us</div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight mt-4 text-primary">
            Let's Launch Your Next Big Thing
          </h2>
          <p className="mt-4 text-lg text-card-foreground/80">
            Have a project in mind or just want to say hello? We'd love to hear from you. Let's do it the Rexx way.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
           <Card className="bg-background text-foreground shadow-md">
             <CardHeader>
                <CardTitle className="font-headline text-2xl font-semibold text-primary">Send us a message</CardTitle>
             </CardHeader>
             <CardContent>
                <form action="https://formspree.io/f/myzprebg" method="POST">
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Full Name</Label>
                      <Input id="name" name="name" placeholder="John Doe" required />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email Address</Label>
                      <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-foreground">Subject</Label>
                      <Input id="subject" name="subject" placeholder="Launch Strategy Inquiry" required />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-foreground">Your Message</Label>
                      <Textarea id="message" name="message" placeholder="Tell us about your project..." className="min-h-[120px]" required />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </div>
                </form>
            </CardContent>
           </Card>
          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-2xl font-semibold mb-4 text-primary">Get In Touch</h3>
              <div className="space-y-3 text-card-foreground/80">
                  <p className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <span>+91 95616 96441 (Phone/WhatsApp)</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <span>rexxmediahq@gmail.com</span>
                  </p>
              </div>
            </div>
            <div className="aspect-video w-full overflow-hidden rounded-lg">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21587.420400344!2d73.13117585811953!3d19.240517728378403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1755841983755!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
