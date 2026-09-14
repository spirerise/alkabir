import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  alternates: { canonical: "/terms-of-services" },
  title: "Terms of Service",
  description:
    "Terms of service for AL-KABIR Construction Machinery Rentals — conditions for renting generators and construction equipment in Dubai and across the UAE.",
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By accessing and using Al Kabir Heavy Equipment Rental services, website, and related platforms, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.

These terms apply to all visitors, users, customers, and others who access or use our services. We reserve the right to update or modify these terms at any time without prior notice. Your continued use of our services following any changes constitutes acceptance of those changes.`,
  },
  {
    id: "services",
    title: "2. Services Description",
    content: `Al Kabir provides construction equipment and machinery rental services for construction, industrial, and commercial purposes. Our services include:

• Equipment rental (daily, weekly, monthly, and long-term)
• Operator services and trained personnel
• Equipment transportation and delivery
• Maintenance and technical support
• Spare parts supply
• Training and certification programs

All equipment is subject to availability. We reserve the right to substitute equipment of similar specifications if the originally requested equipment is unavailable.`,
  },
  {
    id: "rental-agreement",
    title: "3. Rental Agreement",
    content: `Each rental transaction is governed by a separate Rental Agreement that specifies:

• Equipment details and specifications
• Rental period and rates
• Delivery and pickup arrangements
• Security deposit requirements
• Insurance requirements
• Operator requirements (if applicable)

The Rental Agreement, together with these Terms of Service, constitutes the complete agreement between you and Al Kabir. In case of conflict, the specific Rental Agreement terms shall prevail.`,
  },
  {
    id: "customer-obligations",
    title: "4. Customer Obligations",
    content: `As a customer, you agree to:

• Provide accurate and complete information during registration and rental requests
• Use equipment only for its intended purpose and in accordance with manufacturer guidelines
• Ensure all operators are properly licensed and trained
• Maintain equipment in good working condition during the rental period
• Report any damage, malfunction, or accident immediately
• Return equipment on time and in the same condition as received (normal wear excepted)
• Comply with all applicable laws, regulations, and safety standards
• Not sublease or transfer equipment to third parties without written consent
• Provide suitable access for delivery and pickup of equipment`,
  },
  {
    id: "payment",
    title: "5. Payment Terms",
    content: `Payment terms are as follows:

• Rental rates are quoted in UAE Dirhams (AED)
• A security deposit is required before equipment release
• Payment is due according to the agreed billing cycle (advance, weekly, or monthly)
• Accepted payment methods include bank transfer, credit card, and approved corporate accounts
• Late payments are subject to a 2% monthly interest charge
• Security deposits are refundable upon satisfactory return of equipment
• Prices do not include VAT unless otherwise stated

We reserve the right to suspend services for accounts with overdue payments.`,
  },
  {
    id: "insurance",
    title: "6. Insurance & Liability",
    content: `Insurance requirements:

• Customers must maintain comprehensive insurance coverage for rented equipment
• Minimum coverage must equal the replacement value of the equipment
• Proof of insurance must be provided before equipment release
• Al Kabir offers optional equipment insurance at additional cost

Liability provisions:

• Customer is responsible for all damage to equipment during the rental period
• Customer is liable for third-party claims arising from equipment use
• Al Kabir is not liable for project delays, lost profits, or consequential damages
• Force majeure events release both parties from liability for non-performance`,
  },
  {
    id: "cancellation",
    title: "7. Cancellation & Termination",
    content: `Cancellation policy:

• Cancellations made 48+ hours before scheduled delivery: Full refund of deposits
• Cancellations made 24-48 hours before delivery: 50% cancellation fee
• Cancellations made less than 24 hours before delivery: 100% of first day rental charge

Early termination:

• Long-term rentals may be terminated with 7 days written notice
• Early termination may result in rate adjustment to short-term rates
• No refunds for unused rental periods unless otherwise agreed

Al Kabir may terminate rental agreements immediately for:
• Misuse or abuse of equipment
• Non-payment or breach of terms
• Safety violations
• Illegal activities`,
  },
  {
    id: "maintenance",
    title: "8. Maintenance & Repairs",
    content: `Maintenance responsibilities:

• Al Kabir provides equipment in good working condition
• Routine maintenance during long-term rentals is Al Kabir's responsibility
• Customer must perform daily operational checks as instructed
• Customer must use only approved fuels, lubricants, and consumables

Repair provisions:

• Report all malfunctions immediately to our 24/7 support line
• Do not attempt unauthorized repairs
• Repairs due to misuse or negligence are charged to the customer
• Replacement equipment may be provided during extended repairs`,
  },
  {
    id: "safety",
    title: "9. Safety Requirements",
    content: `Safety is our top priority. Customers must:

• Ensure only trained and authorized personnel operate equipment
• Follow all safety guidelines and manufacturer instructions
• Use required personal protective equipment (PPE)
• Conduct pre-operation safety inspections
• Maintain safe working conditions at the job site
• Report all accidents and incidents immediately
• Comply with local safety regulations and requirements

Al Kabir provides safety orientation for all equipment. Additional training is available upon request.`,
  },
  {
    id: "intellectual-property",
    title: "10. Intellectual Property",
    content: `All content on the Al Kabir website and materials, including but not limited to logos, trademarks, text, images, and software, is the property of Al Kabir or its licensors and is protected by intellectual property laws.

You may not:
• Copy, reproduce, or distribute our content without permission
• Use our trademarks or branding without written authorization
• Reverse engineer or decompile any software or systems
• Create derivative works based on our proprietary materials`,
  },
  {
    id: "dispute-resolution",
    title: "11. Dispute Resolution",
    content: `In the event of a dispute:

1. Parties shall first attempt to resolve disputes through good-faith negotiation
2. If unresolved within 30 days, disputes may be referred to mediation
3. Binding arbitration in accordance with UAE arbitration rules
4. Courts of Dubai, UAE shall have exclusive jurisdiction

The prevailing party in any dispute shall be entitled to recover reasonable legal fees and costs.`,
  },
  {
    id: "governing-law",
    title: "12. Governing Law",
    content: `These Terms of Service are governed by:

• The laws of the United Arab Emirates and the Emirate of Dubai

All parties agree to comply with all applicable local, national, and international laws and regulations.`,
  },
  {
    id: "contact",
    title: "13. Contact Information",
    content: `For questions about these Terms of Service, please contact:

Al Kabir Heavy Equipment Rental
Legal Department
Shop No. 6, Saih Al Salam Street, Marmoom, Al Lisaili, Dubai, UAE

Email: contact@alkabirmachineryrentals.ae
Phone: +971 55 455 5786

Business Hours: Monday - Saturday, 7:00 AM - 7:00 PM (GST)`,
  },
];

export default function TermsOfServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="bg-zinc-900 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">
            Legal
          </Badge>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Terms of Service
          </h1>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Please read these terms carefully before using our services. By using Al Kabir 
            services, you agree to be bound by these terms and conditions.
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            Last updated: December 30, 2025
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="border-b border-zinc-200 bg-white py-8 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
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
                href="/privacy-policy"
                className="flex items-center justify-between rounded-xl border border-zinc-200 p-4 transition-colors hover:border-amber-500 hover:bg-amber-50 dark:border-zinc-800 dark:hover:border-amber-500 dark:hover:bg-amber-500/10"
              >
                <div>
                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    Privacy Policy
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    How we collect and use your data
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
                    Questions about our terms?
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
