import { cn } from "@/lib/utils";

const Logo = ({ className, isScrolled }: { className?: string, isScrolled?: boolean }) => (
  <div
    className={cn(
      "font-headline text-3xl font-bold tracking-tight",
      isScrolled ? 'text-card-foreground' : 'text-foreground',
      className
    )}
  >
    Rexx
    <span className="text-primary">
      Media
    </span>
  </div>
);
export default Logo;
