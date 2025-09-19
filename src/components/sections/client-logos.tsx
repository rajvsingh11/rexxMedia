import Image from "next/image";

const logos = [
  { name: "Amazon Prime Video India", src: "/Amazon-Prime-Video-Logo.png" },
  { name: "Amazon MiniTV", src: "/mini.jpg" },
  { name: "Jhankar Beats", src: "/jhankar.jpg" },
  { name: "1xBet", src: "/1xbetlogo.png" },
  { name: "Play Win", src: "/play win.jpg" },
  { name: "MG Motors", src: "/MG_Motor_2021_logo.png" },
  { name: "T series", src: "/tseries.jpg" },
  { name: "IPLWin", src: "/ipl.png" },
  { name: "B4U", src: "/b4u.jpg" },
];

const allLogos = [...logos, ...logos]; // Duplicate for seamless scroll

export default function ClientLogos() {
  return (
    <section className="py-20 bg-card text-card-foreground" data-aos="slide-up">
      <div className="container mx-auto px-4 md:px-6">
        <h3 className="text-center text-sm font-semibold text-muted-foreground tracking-wider uppercase mb-12">
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
                  className="object-contain transition-all duration-300 opacity-60 hover:opacity-100 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
