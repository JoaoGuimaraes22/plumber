"use client";

import { useEffect, useRef, useState } from "react";

type ServicesDict = {
  label: string;
  title: string;
  subtitle: string;
  emergencyBadge: string;
  s1Title: string;
  s1Desc: string;
  s2Title: string;
  s2Desc: string;
  s3Title: string;
  s3Desc: string;
  s4Title: string;
  s4Desc: string;
  s5Title: string;
  s5Desc: string;
  s6Title: string;
  s6Desc: string;
  ctaLabel: string;
  ctaText: string;
  ctaBtn: string;
};

type Props = {
  dict: ServicesDict;
};

export default function Services({ dict }: Props) {
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

  const services = [
    {
      title: dict.s1Title,
      desc: dict.s1Desc,
      emergency: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      ),
    },
    {
      title: dict.s2Title,
      desc: dict.s2Desc,
      emergency: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      ),
    },
    {
      title: dict.s3Title,
      desc: dict.s3Desc,
      emergency: false,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
        </svg>
      ),
    },
    {
      title: dict.s4Title,
      desc: dict.s4Desc,
      emergency: false,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
    },
    {
      title: dict.s5Title,
      desc: dict.s5Desc,
      emergency: false,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
        </svg>
      ),
    },
    {
      title: dict.s6Title,
      desc: dict.s6Desc,
      emergency: false,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-navy-950 py-20 sm:py-28 px-5 sm:px-6 overflow-hidden"
    >
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div
          className={`text-center mb-14 sm:mb-16 ${
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

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {services.map((s, i) => (
            <div
              key={i}
              className={`relative flex flex-col gap-4 p-6 rounded-2xl bg-navy-800 border border-navy-700/50 hover:border-blue-500/40 transition-colors ${
                visible
                  ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms" }}
            >
              {/* Emergency badge */}
              {s.emergency && (
                <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/15 text-red-400 border border-red-500/25">
                  {dict.emergencyBadge}
                </span>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                {s.icon}
              </div>

              {/* Text */}
              <div>
                <h3
                  className="text-white text-lg font-bold mb-2"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-navy-300 text-sm leading-relaxed">{s.desc}</p>
              </div>
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
          <div>
            <p
              className="text-white font-bold text-lg sm:text-xl"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {dict.ctaLabel}
            </p>
            <p className="text-navy-300 text-sm mt-1">{dict.ctaText}</p>
          </div>
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
