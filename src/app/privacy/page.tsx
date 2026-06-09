import type { Metadata } from "next";
import LegalHeader from "@/components/LegalHeader";
import LegalContent from "@/components/LegalContent";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Junchuang E-Commerce website.",
};

const lastUpdated = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function PrivacyPage() {
  const sections = [
    {
      id: "collect",
      title: "Information We Collect",
      icon: "📋",
      content: (
        <ul className="space-y-2">
          {["Name", "Email Address", "Business Information"].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: "use",
      title: "How We Use Information",
      icon: "⚙️",
      content: (
        <ul className="space-y-2">
          {["Customer Support", "Service Delivery", "Analytics"].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: "protection",
      title: "Data Protection",
      icon: "🔒",
      content: (
        <p>
          We implement reasonable security measures to protect user information
          against unauthorized access, alteration, disclosure, or destruction.
        </p>
      ),
    },
    {
      id: "third-party",
      title: "Third-Party Services",
      icon: "🔗",
      content: (
        <p>
          We may use third-party analytics and advertising services that collect
          information in accordance with their own privacy policies.
        </p>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      icon: "✉️",
      content: (
        <p>
          For privacy-related inquiries, please contact us at{" "}
          <a
            href={`mailto:${company.privacyEmail}`}
            className="font-medium text-brand-600 underline decoration-brand-200 underline-offset-2 hover:text-brand-700"
          >
            {company.privacyEmail}
          </a>
          .
        </p>
      ),
    },
  ];

  return (
    <>
      <LegalHeader
        title="Privacy Policy"
        subtitle={`Last updated: ${lastUpdated}`}
        icon="🛡️"
      />
      <LegalContent sections={sections} type="privacy" />
    </>
  );
}
