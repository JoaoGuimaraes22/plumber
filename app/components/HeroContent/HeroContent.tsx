"use client";

import { useEffect, useState } from "react";

type HeroDict = {
  tagline: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  phone: string;
  badge1: string;
  badge2: string;
  badge3: string;
  badge4: string;
};

type Props = {
  dict: HeroDict;
  locale: string;
};

export default function HeroContent({ dict, locale }: Props) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const delays = [100, 400, 700, 1000, 1400, 1700];
    const timers = delays.map((d, i) => setTimeout(() => setStep(i + 1), d));
    return () => timers.forEach(clearTimeout);
  }, []);

  const show = (n: number) =>
    step >= n ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5";

  return (
    <div className="relative z-10 flex flex-col items-center">
      {/* Tagline */}
      <p
        className={`text-blue-400 uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold mb-4 sm:mb-6 transition-all duration-700 ease-out ${show(1)}`}
      >
        {dict.tagline}
      </p>

      {/* Title */}
      <h1
        className={`text-5xl sm:text-7xl md:text-8xl font-bold text-white leading-tight transition-all duration-700 ease-out ${show(2)}`}
        style={{ fontFamily: "'Oswald', sans-serif" }}
      >
        {dict.title}
      </h1>

      {/* Subtitle */}
      <p
        className={`mt-5 sm:mt-6 max-w-xl text-navy-300 text-base sm:text-lg leading-relaxed px-2 transition-all duration-700 ease-out ${show(3)}`}
      >
        {dict.subtitle}
      </p>

      {/* Phone number — large and prominent */}
      <a
        href={`tel:${dict.phone.replace(/\s/g, "")}`}
        className={`mt-6 sm:mt-8 text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide hover:text-blue-400 transition-all duration-700 ease-out ${show(4)}`}
        style={{ fontFamily: "'Oswald', sans-serif" }}
      >
        {dict.phone}
      </a>

      {/* CTAs */}
      <div
        className={`mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 ease-out ${show(5)}`}
      >
        {/* Primary: Call — high urgency */}
        <a
          href={`tel:${dict.phone.replace(/\s/g, "")}`}
          className="relative rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white uppercase tracking-wide hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all duration-200 min-w-60 text-center flex items-center justify-center gap-2"
        >
          <span className="absolute inset-0 rounded-full bg-blue-400 opacity-0 animate-[ping_1s_ease-out_1.5s_2]" />
          <svg
            className="w-5 h-5 relative"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          <span className="relative">{dict.ctaPrimary}</span>
        </a>

        {/* Secondary: Quote form */}
        <a
          href={`/${locale}#contact`}
          className="rounded-full border-2 border-navy-400 px-8 py-3.5 text-sm font-semibold text-white uppercase tracking-wide hover:border-blue-400 hover:bg-blue-500/10 hover:scale-105 active:scale-95 transition-all duration-200 min-w-60 text-center"
        >
          {dict.ctaSecondary}
        </a>
      </div>

      {/* Trust badges — 4 across */}
      <div
        className={`mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-xs sm:text-sm transition-all duration-700 ease-out ${show(6)}`}
      >
        {/* Badge 1: 24/7 */}
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="text-navy-300 font-medium">{dict.badge1}</span>
        </div>

        {/* Badge 2: 30 min */}
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h17.25M3.375 14.25V7.5a1.125 1.125 0 011.125-1.125h4.5"
              />
            </svg>
          </div>
          <span className="text-navy-300 font-medium">{dict.badge2}</span>
        </div>

        {/* Badge 3: Free estimates */}
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
          </div>
          <span className="text-navy-300 font-medium">{dict.badge3}</span>
        </div>

        {/* Badge 4: Certified */}
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
          </div>
          <span className="text-navy-300 font-medium">{dict.badge4}</span>
        </div>
      </div>
    </div>
  );
}
