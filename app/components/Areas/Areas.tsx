"use client";

import { useEffect, useRef, useState } from "react";

type AreasDict = {
  label: string;
  title: string;
  subtitle: string;
  timeUnit: string;
  t1Name: string;
  t1Time: string;
  t2Name: string;
  t2Time: string;
  t3Name: string;
  t3Time: string;
  t4Name: string;
  t4Time: string;
  t5Name: string;
  t5Time: string;
  t6Name: string;
  t6Time: string;
  t7Name: string;
  t7Time: string;
  ctaText: string;
  ctaBtn: string;
};

type Props = {
  dict: AreasDict;
};

export default function Areas({ dict }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const towns = [
    { name: dict.t1Name, time: dict.t1Time },
    { name: dict.t2Name, time: dict.t2Time },
    { name: dict.t3Name, time: dict.t3Time },
    { name: dict.t4Name, time: dict.t4Time },
    { name: dict.t5Name, time: dict.t5Time },
    { name: dict.t6Name, time: dict.t6Time },
    { name: dict.t7Name, time: dict.t7Time },
  ];

  return (
    <section
      id="areas"
      ref={sectionRef}
      className="relative bg-navy-950 py-20 sm:py-28 px-5 sm:px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-14 ${
            visible
              ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-blue-400 uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold mb-3">
            {dict.label}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            {dict.title}
          </h2>
          <p className="text-navy-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {dict.subtitle}
          </p>
        </div>

        {/* Town grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mb-12 sm:mb-14">
          {towns.map((t, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-2 p-5 sm:p-6 rounded-2xl bg-navy-800 border border-navy-700/50 hover:border-blue-500/40 transition-colors text-center ${
                visible
                  ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: visible ? `${i * 80}ms` : "0ms" }}
            >
              <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <p
                className="text-white font-bold text-base sm:text-lg leading-tight"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {t.name}
              </p>
              <p className="text-blue-400 text-sm font-semibold">{t.time}</p>
              <p className="text-navy-400 text-xs">{dict.timeUnit}</p>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-between gap-5 p-6 sm:p-8 rounded-2xl bg-blue-600/10 border border-blue-500/20 ${
            visible
              ? "opacity-100 translate-y-0 transition-all duration-700 ease-out delay-700"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-navy-300 text-sm sm:text-base text-center sm:text-left">
            {dict.ctaText}
          </p>
          <a
            href="tel:+351910123456"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            {dict.ctaBtn}
          </a>
        </div>
      </div>
    </section>
  );
}
