import type { Metadata } from "next";
import LegalHeader from "@/components/LegalHeader";
import LegalContent from "@/components/LegalContent";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Junchuang E-Commerce website.",
};

const lastUpdated = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function TermsPage() {
  const sections = [
    {
      id: "services",
      title: "Services",
      icon: "🏢",
      content: (
        <p>
          {company.shortName} provides e-commerce retail, digital advertising
          management, marketing analytics, and technology integration services.
          All services are subject to availability and applicable agreements.
        </p>
      ),
    },
    {
      id: "responsibilities",
      title: "User Responsibilities",
      icon: "👤",
      content: (
        <p>
          Users agree to provide accurate information, use our services in
          compliance with applicable laws, and not engage in any activity that
          may harm our systems, other users, or third parties.
        </p>
      ),
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      icon: "⚖️",
      content: (
        <p>
          To the fullest extent permitted by law, {company.shortName} shall not
          be liable for any indirect, incidental, special, or consequential
          damages arising from the use of our services or website.
        </p>
      ),
    },
    {
      id: "ip",
      title: "Intellectual Property",
      icon: "©️",
      content: (
        <p>
          All content, trademarks, and materials on this website are the property
          of {company.shortName} or its licensors and are protected by applicable
          intellectual property laws.
        </p>
      ),
    },
    {
      id: "contact",
      title: "Contact Information",
      icon: "✉️",
      content: (
        <p>
          For questions regarding these terms, please contact us at{" "}
          <a
            href={`mailto:${company.email}`}
            className="font-medium text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700"
          >
            {company.email}
          </a>
          .
        </p>
      ),
    },
  ];

  return (
    <>
      <LegalHeader
        title="Terms of Service"
        subtitle={`Last updated: ${lastUpdated}`}
        icon="📜"
      />
      <LegalContent sections={sections} type="terms" />
    </>
  );
}
