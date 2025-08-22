import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import ClientLogos from "@/components/sections/client-logos";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Portfolio from "@/components/sections/portfolio";
import WhyUs from "@/components/sections/why-us";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ClientLogos />
        <About />
        <Services />
        <Portfolio />
        <WhyUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
