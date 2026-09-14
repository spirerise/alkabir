import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy-policy" },
  title: "Privacy Policy",
  description:
    "How AL-KABIR Construction Machinery Rentals collects, uses and protects your personal information when you use our equipment rental services in Dubai.",
};

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `Al Kabir Machinery Rentals ("Al Kabir," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.

Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our services.

We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy.`,
  },
  {
    id: "information-collected",
    title: "2. Information We Collect",
    content: `We collect information that you provide directly to us and information collected automatically when you use our services.

Personal Information:
• Name and contact information (email, phone number, address)
• Company name and business details
• Government-issued identification for verification
• Payment and billing information
• Driver's license and operator certifications
• Communication records and correspondence

Business Information:
• Project details and requirements
• Rental history and preferences
• Credit and financial information for account purposes

Automatically Collected Information:
• Device information (IP address, browser type, operating system)
• Usage data (pages visited, time spent, click patterns)
• Location data (with your consent)
• Cookies and similar tracking technologies`,
  },
  {
    id: "use-of-information",
    title: "3. How We Use Your Information",
    content: `We use the information we collect for various purposes, including:

Service Delivery:
• Process rental requests and reservations
• Deliver and manage equipment rentals
• Provide customer support and respond to inquiries
• Process payments and manage accounts
• Verify identity and operator credentials

Business Operations:
• Improve and optimize our services
• Analyze usage patterns and trends
• Develop new products and services
• Maintain safety and security standards

Communications:
• Send rental confirmations and updates
• Provide maintenance and service notifications
• Share promotional offers (with your consent)
• Send important service announcements

Legal Compliance:
• Comply with legal obligations and regulations
• Enforce our terms of service
• Protect against fraud and security threats
• Respond to legal requests and court orders`,
  },
  {
    id: "information-sharing",
    title: "4. Information Sharing",
    content: `We may share your information in the following circumstances:

Service Providers:
• Equipment manufacturers and warranty providers
• Payment processors and financial institutions
• Logistics and transportation partners
• IT service providers and cloud hosting
• Insurance companies for coverage verification

Business Partners:
• Affiliated companies within Al Kabir group
• Joint venture partners (with consent)
• Contractors working on your projects (as needed)

Legal Requirements:
• To comply with applicable laws and regulations
• To respond to lawful requests from public authorities
• To protect our rights, privacy, safety, or property
• To enforce our agreements and policies

Business Transfers:
• In connection with mergers, acquisitions, or asset sales
• As part of bankruptcy or reorganization proceedings

We do not sell your personal information to third parties for marketing purposes.`,
  },
  {
    id: "data-security",
    title: "5. Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information, including:

Technical Measures:
• Encryption of data in transit and at rest
• Secure server infrastructure with firewalls
• Regular security assessments and penetration testing
• Access controls and authentication systems
• Intrusion detection and monitoring

Organizational Measures:
• Employee training on data protection
• Limited access on a need-to-know basis
• Confidentiality agreements with staff
• Incident response procedures
• Regular security audits

While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to maintaining industry-standard protections.`,
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    content: `We retain your personal information for as long as necessary to:

• Fulfill the purposes for which it was collected
• Provide our services and maintain customer relationships
• Comply with legal and regulatory requirements
• Resolve disputes and enforce agreements
• Maintain business records as required by law

Retention Periods:
• Active customer data: Duration of relationship plus 7 years
• Transaction records: 10 years (legal requirement)
• Communication records: 5 years
• Marketing preferences: Until consent is withdrawn
• Website analytics: 26 months

Upon expiration of retention periods, we securely delete or anonymize your information.`,
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    content: `Depending on your location, you may have the following rights regarding your personal information:

Access Rights:
• Request a copy of the personal information we hold about you
• Receive information about how your data is processed

Correction Rights:
• Request correction of inaccurate or incomplete information
• Update your account information at any time

Deletion Rights:
• Request deletion of your personal information
• Subject to legal retention requirements

Restriction Rights:
• Request limitation of processing in certain circumstances
• Object to processing based on legitimate interests

Portability Rights:
• Receive your data in a structured, machine-readable format
• Transfer your data to another service provider

Marketing Preferences:
• Opt-out of marketing communications at any time
• Manage cookie preferences through our website

To exercise these rights, please contact us using the information provided below.`,
  },
  {
    id: "cookies",
    title: "8. Cookies & Tracking",
    content: `We use cookies and similar tracking technologies to enhance your experience on our website.

Types of Cookies We Use:

Essential Cookies:
• Required for basic website functionality
• Cannot be disabled without affecting site operation
• Include session management and security cookies

Performance Cookies:
• Help us understand how visitors use our website
• Collect anonymous statistical information
• Used to improve website performance

Functional Cookies:
• Remember your preferences and settings
• Enable personalized features
• Improve user experience

Marketing Cookies:
• Track visitors across websites
• Display relevant advertisements
• Measure advertising effectiveness

Managing Cookies:
You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality. For more information, visit our Cookie Policy or contact us.`,
  },
  {
    id: "international-transfers",
    title: "9. International Data Transfers",
    content: `Al Kabir operates across the UAE, and your information may be processed at our various office locations.

Data Transfer Mechanisms:
• We may transfer data between our UAE offices for business operations
• Data may be processed by service providers in other jurisdictions
• We implement appropriate safeguards for any international transfers

Safeguards:
• Contractual clauses ensuring data protection
• Compliance with applicable data transfer regulations
• Regular assessment of third-party security measures

By using our services, you consent to the transfer of your information as described above.`,
  },
  {
    id: "children",
    title: "10. Children's Privacy",
    content: `Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.

If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we discover that we have collected personal information from a child without parental consent, we will take steps to delete that information promptly.`,
  },
  {
    id: "third-party",
    title: "11. Third-Party Links",
    content: `Our website may contain links to third-party websites, services, or applications that are not operated by us. This Privacy Policy does not apply to third-party sites.

We are not responsible for:
• The privacy practices of third-party websites
• The content or security of external sites
• Any information you provide to third parties

We encourage you to review the privacy policies of any third-party sites you visit. The inclusion of a link does not imply endorsement of the linked site.`,
  },
  {
    id: "updates",
    title: "12. Policy Updates",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors.

Notification of Changes:
• Material changes will be communicated via email or website notice
• The "Last Updated" date will be revised accordingly
• Continued use after changes constitutes acceptance

We encourage you to periodically review this Privacy Policy to stay informed about how we are protecting your information.`,
  },
  {
    id: "contact",
    title: "13. Contact Us",
    content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

Al Kabir Machinery Rentals
Data Protection Officer
Shop No. 6, Saih Al Salam Street, Marmoom, Al Lisaili, Dubai, UAE

Email: contact@alkabirmachineryrentals.ae
Phone: +971 55 455 5786

For data privacy inquiries:
Regulatory Authority: UAE Data Office

We aim to respond to all inquiries within 30 business days.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="bg-zinc-900 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">
            Legal
          </Badge>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Your privacy is important to us. This policy explains how Al Kabir collects, 
            uses, and protects your personal information.
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            Last updated: December 30, 2025
          </p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="border-b border-zinc-200 bg-amber-50 py-8 dark:border-zinc-800 dark:bg-amber-500/10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">
              Privacy at a Glance
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-black">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">Data Protection</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Industry-standard security measures</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-black">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">No Data Sales</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">We never sell your personal data</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-black">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">Transparency</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Clear about our data practices</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-black">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">Your Control</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Manage your data preferences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="border-b border-zinc-200 bg-white py-8 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">
              Table of Contents
            </h2>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm text-zinc-600 transition-colors hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-500"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            {sections.map((section) => (
              <Card
                key={section.id}
                id={section.id}
                className="scroll-mt-24 border-zinc-200 dark:border-zinc-800"
              >
                <CardContent className="p-6 md:p-8">
                  <h2 className="mb-4 text-xl font-bold text-zinc-900 dark:text-white md:text-2xl">
                    {section.title}
                  </h2>
                  <div className="whitespace-pre-line text-zinc-600 dark:text-zinc-400">
                    {section.content}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-xl font-bold text-zinc-900 dark:text-white">
              Related Policies
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/terms-of-services"
                className="flex items-center justify-between rounded-xl border border-zinc-200 p-4 transition-colors hover:border-amber-500 hover:bg-amber-50 dark:border-zinc-800 dark:hover:border-amber-500 dark:hover:bg-amber-500/10"
              >
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    Terms of Service
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Our service terms and conditions
                  </p>
                </div>
                <svg className="h-5 w-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-between rounded-xl border border-zinc-200 p-4 transition-colors hover:border-amber-500 hover:bg-amber-50 dark:border-zinc-800 dark:hover:border-amber-500 dark:hover:bg-amber-500/10"
              >
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    Contact Us
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Questions about our privacy practices?
                  </p>
                </div>
                <svg className="h-5 w-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
