import Image from "next/image";

const logos = [
  { name: "Client A", src: "https://placehold.co/150x60.png", hint: "tech logo" },
  { name: "Client B", src: "https://placehold.co/150x60.png", hint: "startup logo" },
  { name: "Client C", src: "https://placehold.co/150x60.png", hint: "finance logo" },
  { name: "Client D", src: "https://placehold.co/150x60.png", hint: "saas logo" },
  { name: "Client E", src: "https://placehold.co/150x60.png", hint: "ecommerce logo" },
  { name: "Client F", src: "https://placehold.co/150x60.png", hint: "media logo" },
  { name: "Client G", src: "https://placehold.co/150x60.png", hint: "health logo" },
  { name: "Client H", src: "https://placehold.co/150x60.png", hint: "education logo" },
];

const allLogos = [...logos, ...logos]; // Duplicate for seamless scroll

export default function ClientLogos() {
  return (
    <section className="py-12 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-center text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-8">
          Trusted by the world's best companies
        </h3>
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
          }}
        >
          <div className="flex w-max animate-scroll">
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-16 flex items-center justify-center mx-4"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  data-ai-hint={logo.hint}
                  width={140}
                  height={50}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
