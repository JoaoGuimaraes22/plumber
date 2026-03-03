"use client";

import { useEffect, useRef, useState } from "react";

type AboutDict = {
  label: string;
  title: string;
  description: string;
  paragraph2: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
  stat4Value: string;
  stat4Label: string;
  highlight1Title: string;
  highlight1Text: string;
  highlight2Title: string;
  highlight2Text: string;
  highlight3Title: string;
  highlight3Text: string;
};

type Props = {
  dict: AboutDict;
};

/* ── Animated counter ── */
function AnimatedNumber({ value, active }: { value: string; active: boolean }) {
  const num = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[\d]/g, "");
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active || isNaN(num)) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(num / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= num) {
        start = num;
        clearInterval(timer);
      }
      setDisplay(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, num]);

  if (isNaN(num)) return <>{value}</>;
  return (
    <>
      {display}
      {suffix}
    </>
  );
}

export default function About({ dict }: Props) {
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
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const stats = [
    { value: dict.stat1Value, label: dict.stat1Label },
    { value: dict.stat2Value, label: dict.stat2Label },
    { value: dict.stat3Value, label: dict.stat3Label },
    { value: dict.stat4Value, label: dict.stat4Label },
  ];

  const highlights = [
    {
      title: dict.highlight1Title,
      text: dict.highlight1Text,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
    },
    {
      title: dict.highlight2Title,
      text: dict.highlight2Text,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m0 0L11.42 4.97m-5.1 5.1H21M3 21h18" />
        </svg>
      ),
    },
    {
      title: dict.highlight3Title,
      text: dict.highlight3Text,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const fade = (delay: number) =>
    visible
      ? `opacity-100 translate-y-0 transition-all duration-700 ease-out delay-[${delay}ms]`
      : "opacity-0 translate-y-6";

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-navy-900 py-20 sm:py-28 px-5 sm:px-6 overflow-hidden"
    >
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div
          className={`text-center mb-14 sm:mb-20 ${
            visible
              ? "opacity-100 translate-y-0 transition-all duration-700 ease-out"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-blue-400 uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold mb-3">
            {dict.label}
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            {dict.title}
          </h2>
        </div>

        {/* Stats bar */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-14 sm:mb-20 ${
            visible
              ? "opacity-100 translate-y-0 transition-all duration-700 ease-out delay-200"
              : "opacity-0 translate-y-6"
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-5 sm:p-6 rounded-2xl bg-navy-800/50 border border-navy-700/50"
            >
              <p
                className="text-3xl sm:text-4xl font-bold text-blue-400 mb-1"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                <AnimatedNumber value={stat.value} active={visible} />
              </p>
              <p className="text-navy-300 text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Content: text + highlights */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left — story */}
          <div
            className={`${
              visible
                ? "opacity-100 translate-y-0 transition-all duration-700 ease-out delay-300"
                : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-navy-200 text-base sm:text-lg leading-relaxed mb-5">
              {dict.description}
            </p>
            <p className="text-navy-300 text-base leading-relaxed">
              {dict.paragraph2}
            </p>
          </div>

          {/* Right — 3 highlight cards */}
          <div className="flex flex-col gap-5">
            {highlights.map((h, i) => (
              <div
                key={i}
                className={`flex gap-4 p-5 rounded-xl bg-navy-800/40 border border-navy-700/40 hover:border-blue-500/30 transition-colors ${
                  visible
                    ? `opacity-100 translate-y-0 transition-all duration-700 ease-out`
                    : "opacity-0 translate-y-6"
                }`}
                style={{
                  transitionDelay: visible ? `${400 + i * 150}ms` : "0ms",
                }}
              >
                <div className="shrink-0 w-11 h-11 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  {h.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-1">
                    {h.title}
                  </h3>
                  <p className="text-navy-300 text-sm leading-relaxed">
                    {h.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
