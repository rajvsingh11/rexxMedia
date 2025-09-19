import Link from "next/link";
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./logo";
import { Button } from "../ui/button";

const socialLinks = [
  { icon: Twitter, href: "https://x.com/@rexxmediahq" },
  { icon: Linkedin, href: "" },
  { icon: Instagram, href: "https://instagram.com/@rexxmediahq" },
];

const footerLinks = [
  { title: "Company", links: [{ label: "About Us", href: "#about"}, { label: "Services", href: "#services"}, { label: "Case Studies", href: "#portfolio"}] },
  { title: "Support", links: [{ label: "Contact Us", href: "#contact"}, { label: "FAQ", href: "#"}, { label: "Privacy Policy", href: "#"}] },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="#" className="mb-4 inline-block">
              <Logo isScrolled={true} onDark={true} />
            </Link>
            <p className="text-sm text-primary-foreground/80 max-w-sm">
              We don’t just manage accounts — we launch trends. We combine storytelling with strategy to drive measurable results.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="font-headline text-lg font-semibold mb-4 text-primary-foreground">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
             <div>
                <h3 className="font-headline text-lg font-semibold mb-4 text-primary-foreground">Contact</h3>
                <ul className="space-y-3 text-sm text-primary-foreground/80">
                    <li className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-accent" />
                        <span>+91 95616 96441</span>
                    </li>
                     <li className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-accent" />
                        <span>rexxmediahq@gmail.com</span>
                    </li>
                </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-primary-foreground/80">
            &copy; {new Date().getFullYear()} Rexx Media. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            {socialLinks.map((social, index) => (
              <Button key={index} variant="ghost" size="icon" asChild className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link href={social.href} target="_blank">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.icon.displayName}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
