import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import InfoCard from "@/components/InfoCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { company } from "@/lib/company";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Junchuang E-Commerce.",
};

const faq = [
  {
    q: "What is your typical response time?",
    a: "We respond to all inquiries within 1–2 business days.",
  },
  {
    q: "What services do you offer?",
    a: "E-commerce retail, digital advertising, marketing analytics, and Google Ads API automation.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes, we serve partners and customers across global e-commerce markets.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        image={images.team}
        badge="We're Here to Help"
      />

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Get in Touch"
            subtitle="Reach out for business inquiries, partnerships, or general questions."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-2">
              <InfoCard icon="✉️" label="Email">
                <a
                  href={`mailto:${company.email}`}
                  className="font-medium text-brand-600 hover:text-brand-700"
                >
                  {company.email}
                </a>
              </InfoCard>

              <InfoCard icon="🕐" label="Business Hours" delay={80}>
                {company.businessHours}
              </InfoCard>

              <InfoCard icon="📍" label="Region" delay={160}>
                {company.region}
              </InfoCard>

              <InfoCard icon="🏢" label="Company" delay={240}>
                {company.shortName}
              </InfoCard>
            </div>

            <AnimateOnScroll delay={100} className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
                <h2 className="text-lg font-semibold text-slate-900">
                  Send a Message
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Fill out the form and we&apos;ll get back to you within 1–2
                  business days.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Common Questions"
            subtitle="Quick answers before you reach out."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {faq.map((item, i) => (
              <AnimateOnScroll key={item.q} delay={i * 80}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <h3 className="font-semibold text-slate-900">{item.q}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.a}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
