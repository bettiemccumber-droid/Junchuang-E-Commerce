import Link from "next/link";
import { company } from "@/lib/company";

/**
 * Site footer
 */
export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-violet-500 text-sm font-bold text-white">
                JC
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {company.shortName}
                </h3>
                <p className="text-xs text-slate-400">{company.tagline}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Online retail and digital advertising solutions powered by data
              analytics and Google Ads API technology.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Quick Links</p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
              <Link href="/ad-tech" className="hover:text-white">
                Ad Technology
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Contact</p>
            <a
              href={`mailto:${company.email}`}
              className="mt-3 block text-sm text-brand-300 hover:text-white"
            >
              {company.email}
            </a>
            <p className="mt-3 text-sm text-slate-400">{company.businessHours}</p>
            <p className="mt-3 text-sm text-slate-400">{company.region}</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {company.shortName}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
