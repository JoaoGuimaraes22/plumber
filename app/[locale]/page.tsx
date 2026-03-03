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
          {/* Gradient background until real hero image is added */}
          <div className="absolute inset-0 bg-linear-to-br from-navy-950 via-navy-900 to-navy-800" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15),transparent_70%)]" />

          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

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
