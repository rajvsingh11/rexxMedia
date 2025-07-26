import Image from "next/image";

const logos = [
  { name: "Amazon Prime Video India", src: "https://images.pexels.com/photos/5082976/pexels-photo-5082976.jpeg", hint: "streaming service logo" },
  { name: "Amazon MiniTV", src: "https://images.pexels.com/photos/7235472/pexels-photo-7235472.jpeg", hint: "tv logo" },
  { name: "Jhankar Beats", src: "https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg", hint: "music logo" },
  { name: "1xBet", src: "https://images.pexels.com/photos/7772659/pexels-photo-7772659.jpeg", hint: "gaming logo" },
  { name: "Play Win", src: "https://images.pexels.com/photos/66100/pexels-photo-66100.jpeg", hint: "betting logo" },
  { name: "MG Motors", src: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg", hint: "car logo" },
  { name: "IPLWin", src: "https://images.pexels.com/photos/10599426/pexels-photo-10599426.jpeg", hint: "sports logo" },
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
                  data-ai-hint={logo.hint}
                  width={180}
                  height={70}
                  className="object-contain filter invert hover:invert-0 transition-all duration-300 opacity-60 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
