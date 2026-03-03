type FooterDict = {
  tagline: string;
  emergency: string;
  linksTitle: string;
  nav1: string;
  nav2: string;
  nav3: string;
  nav4: string;
  nav5: string;
  contactTitle: string;
  phone: string;
  address: string;
  hours: string;
  copyrightText: string;
};

type Props = {
  dict: FooterDict;
  locale: string;
};

export default function Footer({ dict, locale }: Props) {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: dict.nav1, href: `/${locale}#hero` },
    { label: dict.nav2, href: `/${locale}#about` },
    { label: dict.nav3, href: `/${locale}#services` },
    { label: dict.nav4, href: `/${locale}#reviews` },
    { label: dict.nav5, href: `/${locale}#contact` },
  ];

  return (
    <footer className="relative bg-navy-950 border-t border-navy-800 px-5 sm:px-6 pt-14 pb-24 md:pb-8">
      <div className="mx-auto max-w-6xl">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12 mb-10">
          {/* Brand column */}
          <div>
            <p
              className="font-display text-2xl font-bold text-white mb-2"
            >
              AquaFix
            </p>
            <p className="text-navy-300 text-sm leading-relaxed mb-5">{dict.tagline}</p>
            <a
              href="tel:+351910123456"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              {dict.phone}
            </a>
            <p className="text-navy-400 text-xs mt-1">{dict.emergency}</p>
          </div>

          {/* Links column */}
          <div>
            <p className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              {dict.linksTitle}
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-navy-300 hover:text-blue-300 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              {dict.contactTitle}
            </p>
            <div className="flex flex-col gap-3 text-sm text-navy-300">
              <p>{dict.address}</p>
              <p>{dict.hours}</p>
              <a
                href="https://wa.me/351910123456"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors font-medium w-fit"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.853L0 24l6.335-1.513A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 0 1-5.032-1.384l-.36-.214-3.733.892.936-3.618-.235-.372A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800 pt-6 text-center">
          <p className="text-navy-400 text-xs">
            © {year} {dict.copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
}
