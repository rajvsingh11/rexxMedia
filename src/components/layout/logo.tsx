import { cn } from "@/lib/utils";

const Logo = ({ className, isScrolled, onDark = false }: { className?: string, isScrolled?: boolean, onDark?: boolean }) => (
  <div
    className={cn(
      "font-headline text-3xl font-bold tracking-tight",
      isScrolled || onDark ? "text-primary-foreground" : "text-primary",
      className
    )}
  >
    Rexx
    <span className={cn(
      isScrolled || onDark ? "text-accent" : "text-foreground"
    )}>
      Media
    </span>
  </div>
);
export default Logo;
