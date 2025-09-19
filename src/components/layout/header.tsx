"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Logo from "./logo";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo isScrolled={isScrolled}/>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn("text-sm font-medium transition-colors text-foreground/80 hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-card text-card-foreground">
              <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              <div className="flex h-full flex-col p-6">
                <div className="mb-8 flex items-center justify-between">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <Logo isScrolled={true} />
                  </Link>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:bg-background/20"
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-lg font-medium text-card-foreground/80 transition-colors hover:text-card-foreground"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="mt-8 w-full">
                  <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Get a Quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
