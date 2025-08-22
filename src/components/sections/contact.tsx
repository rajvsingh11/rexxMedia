"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you would send this to a server action or API endpoint
    console.log(values);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="bg-card text-card-foreground" data-aos="slide-up">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block rounded-lg bg-accent/10 px-3 py-1 text-sm font-medium text-accent">Contact Us</div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight mt-4">
            Let's Launch Your Next Big Thing
          </h2>
          <p className="mt-4 text-lg text-card-foreground/80">
            Have a project in mind or just want to say hello? We'd love to hear from you. Let's do it the Rexx way.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-12 items-start">
           <Card className="bg-background text-foreground">
             <CardHeader>
                <CardTitle className="font-headline text-2xl font-semibold">Send us a message</CardTitle>
             </CardHeader>
             <CardContent>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                            <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                            <Input placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                            <Input placeholder="Launch Strategy Inquiry" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Tell us about your project..." {...field} className="min-h-[120px]" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                </form>
                </Form>
            </CardContent>
           </Card>
          <div className="space-y-8">
            <div>
              <h3 className="font-headline text-2xl font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-3 text-card-foreground/80">
                  <p className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-accent" />
                    <span>+91 95616 96441 (Phone/WhatsApp)</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-accent" />
                    <span>himanshupandeycr7@gmail.com</span>
                  </p>
              </div>
            </div>
            <div className="aspect-video w-full overflow-hidden rounded-lg">
                <Image
                    src="https://placehold.co/600x450.png"
                    alt="Map to our office"
                    data-ai-hint="digital marketing agency"
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
