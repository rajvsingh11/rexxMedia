import { cn } from "@/lib/utils";

const Logo = ({ className, isScrolled }: { className?: string, isScrolled?: boolean }) => (
  <div
    className={cn(
      "font-headline text-3xl font-bold tracking-tight",
      isScrolled ? 'text-primary-foreground' : 'text-primary',
      className
    )}
  >
    Rexx
    <span className={cn(isScrolled ? 'text-white/70' : 'text-foreground/90')}>
      Media
    </span>
  </div>
);
export default Logo;
