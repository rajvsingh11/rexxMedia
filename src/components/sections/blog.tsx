import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of Web Design: Top Trends for 2024",
    category: "Design",
    date: "May 20, 2024",
    image: "https://placehold.co/600x400.png",
    hint: "abstract design",
    excerpt: "Discover the latest trends in web design that are shaping the future of digital experiences, from AI integration to brutalism.",
  },
  {
    title: "Unlocking Growth: A Guide to SEO Strategy",
    category: "SEO",
    date: "May 15, 2024",
    image: "https://placehold.co/600x400.png",
    hint: "marketing chart",
    excerpt: "Learn how to develop a robust SEO strategy that drives organic traffic and boosts your search engine rankings.",
  },
  {
    title: "Why Your Business Needs a Strong Brand Identity",
    category: "Branding",
    date: "May 10, 2024",
    image: "https://placehold.co/600x400.png",
    hint: "brand logos",
    excerpt: "A strong brand is more than just a logo. We explore why a cohesive brand identity is crucial for business success.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-card" data-aos="slide-up">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Blog & Insights</div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight mt-4">
            From Our Desk
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stay updated with the latest industry trends, expert insights, and company news from the PortfoliAI team.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.title} className="group flex flex-col overflow-hidden bg-background">
                <div className="relative overflow-hidden">
                    <Link href="#">
                        <Image
                            src={post.image}
                            alt={post.title}
                            data-ai-hint={post.hint}
                            width={600}
                            height={400}
                            className="object-cover w-full h-60 transition-transform duration-500 group-hover:scale-105"
                        />
                    </Link>
                </div>
                <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Badge variant="secondary">{post.category}</Badge>
                        <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <h3 className="font-headline text-xl font-semibold mt-2">
                        <Link href="#" className="hover:text-primary transition-colors">{post.title}</Link>
                    </h3>
                </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                 <Link href="#" className="text-sm font-semibold text-primary inline-flex items-center group/link">
                    Read More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
