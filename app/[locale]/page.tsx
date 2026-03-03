import Image from "next/image";
import { getDictionary } from "../../get-dictionary";
import type { Locale } from "../../i18n-config";
import Navbar from "../components/Navbar/Navbar";
import HeroContent from "../components/HeroContent/HeroContent";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Reviews from "../components/Reviews/Reviews";
import Areas from "../components/Areas/Areas";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import CallBar from "../components/CallBar/CallBar";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <main>
        <Navbar dict={dict.navbar} locale={locale} />

        {/* Hero Section */}
        <section
          id="hero"
          className="relative flex min-h-screen flex-col items-center justify-center text-white text-center px-5 sm:px-6 overflow-hidden"
        >
          {/* Hero image */}
          <Image
            src="/hero-img.jpg"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            alt="Canalizador profissional AquaFix"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-navy-950/70" />
          {/* Blue radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15),transparent_70%)]" />

          <HeroContent dict={dict.hero} locale={locale} />
        </section>

        {/* About Section */}
        <About dict={dict.about} />

        {/* Services Section */}
        <Services dict={dict.services} />

        {/* Reviews Section */}
        <Reviews dict={dict.reviews} />

        {/* Areas Section */}
        <Areas dict={dict.areas} />

        {/* FAQ Section */}
        <FAQ dict={dict.faq} />

        {/* Contact Section */}
        <Contact dict={dict.contact} />
      </main>

      <Footer dict={dict.footer} locale={locale} />
      <CallBar dict={dict.callbar} />
    </>
  );
}
