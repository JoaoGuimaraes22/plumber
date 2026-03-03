"use client";

import { useState } from "react";

type ContactDict = {
  label: string;
  title: string;
  subtitle: string;
  phoneLabel: string;
  phone: string;
  whatsappLabel: string;
  addressLabel: string;
  address: string;
  hoursLabel: string;
  hours: string;
  formTitle: string;
  fieldName: string;
  fieldPhone: string;
  fieldMessage: string;
  submitBtn: string;
  submitNote: string;
};

type Props = {
  dict: ContactDict;
};

function WhatsAppIcon({ className }: { className: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.853L0 24l6.335-1.513A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.032-1.384l-.36-.214-3.733.892.936-3.618-.235-.372A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
    </svg>
  );
}

export default function Contact({ dict }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Olá! Sou ${name}. ${message}${phone ? ` Contacto: ${phone}.` : ""}`;
    window.open(`https://wa.me/351910123456?text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <section
      id="contact"
      className="relative bg-navy-950 py-20 sm:py-28 px-5 sm:px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
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

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: contact info cards */}
          <div className="flex flex-col gap-4">
            {/* Phone */}
            <a
              href={`tel:${dict.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-navy-800 border border-navy-700/50 hover:border-blue-500/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <div>
                <p className="text-navy-400 text-xs uppercase tracking-wider mb-0.5">{dict.phoneLabel}</p>
                <p
                  className="text-white font-bold text-xl group-hover:text-blue-300 transition-colors"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {dict.phone}
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/351910123456"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-navy-800 border border-navy-700/50 hover:border-green-500/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-navy-400 text-xs uppercase tracking-wider mb-0.5">{dict.whatsappLabel}</p>
                <p
                  className="text-white font-bold text-xl group-hover:text-green-400 transition-colors"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {dict.phone}
                </p>
              </div>
            </a>

            {/* Address + Hours */}
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-navy-800 border border-navy-700/50">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-navy-400 text-xs uppercase tracking-wider mb-0.5">{dict.addressLabel}</p>
                <p className="text-white font-semibold text-sm mb-3">{dict.address}</p>
                <p className="text-navy-400 text-xs uppercase tracking-wider mb-0.5">{dict.hoursLabel}</p>
                <p className="text-blue-400 font-semibold text-sm">{dict.hours}</p>
              </div>
            </div>
          </div>

          {/* Right: WhatsApp form */}
          <div className="p-6 sm:p-8 rounded-2xl bg-navy-800 border border-navy-700/50">
            <h3
              className="text-white font-bold text-xl mb-6"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {dict.formTitle}
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                required
                placeholder={dict.fieldName}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-navy-700 text-white placeholder-navy-400 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <input
                type="tel"
                placeholder={dict.fieldPhone}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-navy-700 text-white placeholder-navy-400 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <textarea
                required
                rows={4}
                placeholder={dict.fieldMessage}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-navy-700 text-white placeholder-navy-400 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5" />
                {dict.submitBtn}
              </button>
              <p className="text-navy-400 text-xs text-center">{dict.submitNote}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
