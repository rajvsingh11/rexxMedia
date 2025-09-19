import { cn } from "@/lib/utils";

const Logo = ({ className, isScrolled }: { className?: string, isScrolled?: boolean }) => (
  <div
    className={cn(
      "font-headline text-3xl font-bold tracking-tight text-primary",
      className
    )}
  >
    Rexx
    <span className="text-foreground">
      Media
    </span>
  </div>
);
export default Logo;
