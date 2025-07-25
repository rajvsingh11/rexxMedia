import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    company: "Producer, Lotus Entertainment",
    avatar: "https://placehold.co/100x100.png",
    hint: "man professional",
    rating: 5,
    quote: "The team at Rexx Media is phenomenal. Their viral marketing campaign for our show 'Gutur Gu' delivered results beyond our wildest expectations. Their understanding of the youth audience is unmatched in India.",
  },
  {
    name: "Priya Singh",
    company: "Founder, Aura Beauty",
    avatar: "https://placehold.co/100x100.png",
    hint: "woman founder",
    rating: 5,
    quote: "As a D2C startup, our launch was critical. Rexx Media handled everything from influencer outreach to paid ads flawlessly. We hit our 3-month sales target in the first 3 weeks. Incredible!",
  },
  {
    name: "Rohan Kapoor",
    company: "Content Creator",
    avatar: "https://placehold.co/100x100.png",
    hint: "man influencer",
    rating: 4,
    quote: "Working with Rexx scaled my brand in ways I couldn't do alone. They secured major brand collaborations and grew my follower base significantly. They truly are partners in growth.",
  },
];

const QuoteIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-3 -left-3 h-12 w-12 text-primary/10">
        <path d="M5.72791 21.1364C4.80916 21.1364 4.02868 20.822 3.38644 20.1932C2.7442 19.5644 2.42291 18.8068 2.42291 17.9205C2.42291 16.9205 2.76709 15.9318 3.45459 14.9545L5.80928 11.6932C6.01382 11.3977 6.16610 11.1136 6.26595 10.8409C6.3658 10.5682 6.41572 10.3182 6.41572 10.0909C6.41572 9.75 6.31084 9.46023 6.09964 9.22159C5.88844 8.98295 5.61384 8.86364 5.27557 8.86364C5.03593 8.86364 4.81970 8.91894 4.62689 9.02955C4.43409 9.14015 4.29886 9.30114 4.22123 9.51136L2.86879 8.27273C3.42462 7.29545 4.23072 6.64205 5.28697 6.3125C6.34322 5.98295 7.27576 6.03409 8.08371 6.46591C8.89167 6.89773 9.45720 7.625 9.77992 8.64773C10.1026 9.67045 9.94091 10.8125 9.29470 12.0739L6.94 15.3352C6.54545 15.8409 6.34848 16.3295 6.34848 16.8011C6.34848 17.2045 6.44830 17.5341 6.64792 17.7898C6.84754 18.0455 7.12784 18.1733 7.48864 18.1733C8.25758 18.1733 8.82311 17.7184 9.18390 16.8068L11.0028 17.4205C10.1818 19.5341 8.68182 21.1364 5.72791 21.1364ZM16.7279 21.1364C15.8092 21.1364 15.0287 20.822 14.3864 20.1932C13.7442 19.5644 13.4229 18.8068 13.4229 17.9205C13.4229 16.9205 13.7671 15.9318 14.4546 14.9545L16.8093 11.6932C17.0138 11.3977 17.1661 11.1136 17.2660 10.8409C17.3658 10.5682 17.4157 10.3182 17.4157 10.0909C17.4157 9.75 17.3108 9.46023 17.0996 9.22159C16.8884 8.98295 16.6138 8.86364 16.2756 8.86364C16.0359 8.86364 15.8197 8.91894 15.6269 9.02955C15.4341 9.14015 15.2989 9.30114 15.2212 9.51136L13.8688 8.27273C14.4246 7.29545 15.2307 6.64205 16.2870 6.3125C17.3432 5.98295 18.2758 6.03409 19.0837 6.46591C19.8917 6.89773 20.4572 7.625 20.7799 8.64773C21.1026 9.67045 20.9409 10.8125 20.2947 12.0739L17.94 15.3352C17.5455 15.8409 17.3485 16.3295 17.3485 16.8011C17.3485 17.2045 17.4483 17.5341 17.6479 17.7898C17.8475 18.0455 18.1278 18.1733 18.4886 18.1733C19.2576 18.1733 19.8231 17.7184 20.1839 16.8068L22.0028 17.4205C21.1818 19.5341 19.6818 21.1364 16.7279 21.1364Z" />
    </svg>
)

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-background" data-aos="slide-up">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
           <div className="inline-block rounded-lg bg-secondary px-4 py-2 text-base font-medium text-secondary-foreground">Client Love</div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight mt-4">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col justify-between bg-card text-card-foreground transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-6 relative flex flex-col h-full">
                 <QuoteIcon />
                 <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                        key={i}
                        className={`h-5 w-5 ${
                            i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-card-foreground/30'
                        }`}
                        />
                    ))}
                </div>
                <p className="text-card-foreground/90 mb-6 text-balance flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.hint}/>
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-card-foreground/80">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
