import Image from "next/image";

const logos = [
  { name: "Amazon Prime Video India", src: "https://placehold.co/180x70/0d1b48/f4ebd0?text=Prime+Video&font=playfair-display" },
  { name: "Amazon MiniTV", src: "https://placehold.co/180x70/0d1b48/f4ebd0?text=miniTV&font=playfair-display" },
  { name: "Jhankar Beats", src: "https://placehold.co/180x70/0d1b48/f4ebd0?text=Jhankar+Beats&font=playfair-display" },
  { name: "1xBet", src: "https://placehold.co/180x70/0d1b48/f4ebd0?text=1xBet&font=playfair-display" },
  { name: "Play Win", src: "https://placehold.co/180x70/0d1b48/f4ebd0?text=Play+Win&font=playfair-display" },
  { name: "MG Motors", src: "https://placehold.co/180x70/0d1b48/f4ebd0?text=MG+Motors&font=playfair-display" },
  { name: "IPLWin", src: "https://placehold.co/180x70/0d1b48/f4ebd0?text=IPLWin&font=playfair-display" },
];

const allLogos = [...logos, ...logos]; // Duplicate for seamless scroll

export default function ClientLogos() {
  return (
    <section className="py-20 bg-card text-card-foreground" data-aos="slide-up">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-center text-sm font-semibold text-card-foreground/80 tracking-wider uppercase mb-12">
          Trusted by leading OTT, music, automotive, and gaming brands
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
                className="flex-shrink-0 w-64 h-24 flex items-center justify-center mx-6"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={180}
                  height={70}
                  className="object-contain transition-all duration-300 opacity-60 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}