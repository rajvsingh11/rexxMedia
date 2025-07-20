import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "font-headline text-3xl font-bold tracking-tight text-foreground",
      className
    )}
  >
    Rexx<span className="text-primary">Media</span>
  </div>
);
export default Logo;
