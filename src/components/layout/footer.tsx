import Link from "next/link";
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./logo";
import { Button } from "../ui/button";

const socialLinks = [
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
];

const footerLinks = [
  { title: "Company", links: [{ label: "About Us", href: "#about"}, { label: "Services", href: "#services"}, { label: "Blog", href: "#blog"}, { label: "Careers", href: "#"}] },
  { title: "Support", links: [{ label: "Contact Us", href: "#contact"}, { label: "FAQ", href: "#"}, { label: "Privacy Policy", href: "#"}] },
];

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="#" className="mb-4 inline-block">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              We are a creative agency that builds beautiful and functional websites to help businesses grow.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="font-headline text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
             <div>
                <h3 className="font-headline text-lg font-semibold mb-4">Contact</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>123 Creative Ave, NY</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>+1 (234) 567-890</span>
                    </li>
                     <li className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>hello@portfoliai.com</span>
                    </li>
                </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PortfoliAI. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            {socialLinks.map((social, index) => (
              <Button key={index} variant="ghost" size="icon" asChild>
                <Link href={social.href}>
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
