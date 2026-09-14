"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { contactsService, type InquiryType, type EquipmentType } from "@/services";
import { MapPin } from "lucide-react";
import { SeoContentSection } from "@/components/sections/seo-content-section";

const contactInfo = [
  {
    title: "Head Office - Dubai",
    address: "Shop No. 6, Saih Al Salam Street, Marmoom, Al Lisaili, Dubai, UAE",
    phone: "+971 55 455 5786",
    email: "contact@alkabirmachineryrentals.ae",
    hours: "Mon-Sat: 7:00 AM - 7:00 PM",
  },
  {
    title: "Sales Office",
    address: "Shop No. 6, Saih Al Salam Street, Marmoom, Al Lisaili, Dubai, UAE",
    phone: "+971 50 484 5636",
    email: "sales@alkabirmachineryrentals.ae",
    hours: "Mon-Sat: 7:00 AM - 7:00 PM",
  },
  {
    title: "Operations Office",
    address: "Shop No. 6, Saih Al Salam Street, Marmoom, Al Lisaili, Dubai, UAE",
    phone: "+971 55 534 1166",
    email: "info@alkabirmachineryrentals.ae",
    hours: "Mon-Sat: 7:00 AM - 7:00 PM",
  },
];

const inquiryTypes = [
  { value: "rental", label: "Equipment Rental" },
  { value: "quote", label: "Request a Quote" },
  { value: "service", label: "Service Inquiry" },
  { value: "parts", label: "Spare Parts" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Other" },
];

const equipmentTypes = [
  { value: "generator", label: "Generators" },
  { value: "compactor", label: "Compactors" },
  { value: "compressor", label: "Air Compressors" },
  { value: "concrete", label: "Concrete Equipment" },
  { value: "power-tool", label: "Power Tools" },
  { value: "scaffolding", label: "Scaffolding" },
  { value: "other", label: "Other Equipment" },
];

const faqs = [
  {
    question: "What are your rental terms?",
    answer: "We offer flexible rental terms from daily to yearly. Minimum rental period varies by equipment type. Contact us for specific terms.",
  },
  {
    question: "Do you provide operators with equipment?",
    answer: "Yes, we provide certified operators for all our equipment. Operator services can be added to any rental package.",
  },
  {
    question: "What areas do you deliver to?",
    answer: "We deliver throughout all Emirates in the UAE including Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. Contact us for a delivery quote.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, credit cards, and corporate accounts. Large rentals may require a security deposit.",
  },
];

// UAE Phone validation: +971 XX XXX XXXX, 05X XXX XXXX, 971XXXXXXXXX
const validateUAEPhone = (phone: string): boolean => {
  const cleanPhone = phone.replace(/[\s\-()]/g, "");
  // Patterns: +971XXXXXXXXX, 971XXXXXXXXX, 05XXXXXXXX, 5XXXXXXXX
  const uaePhoneRegex = /^(\+?971|0)?5[0-9]{8}$/;
  return uaePhoneRegex.test(cleanPhone);
};

// Email validation
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    equipmentType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; phone?: string }>({});

  const validateForm = (): boolean => {
    const errors: { email?: string; phone?: string } = {};

    // Validate email
    if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    // Validate UAE phone number
    if (!validateUAEPhone(formData.phone)) {
      errors.phone = "Please enter a valid UAE phone number (e.g., +971 50 123 4567)";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validate before submitting
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Submit to Appwrite database
      await contactsService.create({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || undefined,
        inquiryType: formData.inquiryType as InquiryType,
        equipmentType: formData.equipmentType ? (formData.equipmentType as EquipmentType) : undefined,
        message: formData.message,
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setError("Failed to send your message. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field error on input
    if (fieldErrors[field as keyof typeof fieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-900 py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
            alt="Contact AL-KABIR Construction Machinery Rentals Dubai UAE"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/95 to-zinc-900/80" />
        </div>

        <div className="container relative mx-auto px-4 text-center">
          <Badge className="mb-6 bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">
            Dubai&apos;s Trusted Equipment Rental Partner
          </Badge>
          <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Contact <span className="text-amber-500">AL-KABIR Construction</span> Machinery Rentals
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
            Ready to rent generators, compactors, air compressors or any construction equipment in Dubai? 
            Contact AL-KABIR Construction for competitive rates, same-day delivery, and 24/7 support across UAE.
          </p>
          
          {/* Quick Contact */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group h-14 bg-amber-500 px-8 text-base font-semibold text-black hover:bg-amber-400"
            >
              <Link href="/get-quote" className="flex items-center justify-center gap-2">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
                Get a Quote
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 border-zinc-700 bg-zinc-900/50 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-zinc-800"
            >
              <Link href="tel:+971554555786" className="flex items-center justify-center gap-2">
                <svg
                  className="h-5 w-5 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="border-zinc-200 dark:border-zinc-800">
                <CardContent className="p-8">
                  <h2 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-white">
                    Request Equipment Quote Dubai
                  </h2>
                  <p className="mb-8 text-zinc-600 dark:text-zinc-400">
                    Tell us about your construction project and machinery needs. AL-KABIR responds within 2 hours during business hours.
                  </p>

                  {submitted ? (
                    <div className="rounded-xl bg-green-50 p-8 text-center dark:bg-green-500/10">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-500/20">
                        <svg className="h-8 w-8 text-green-600 dark:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-green-800 dark:text-green-400">
                        Message Sent Successfully!
                      </h3>
                      <p className="mb-6 text-green-700 dark:text-green-300">
                        Thank you for contacting us. Our team will respond within 24 hours.
                      </p>
                      <Button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            company: "",
                            inquiryType: "",
                            equipmentType: "",
                            message: "",
                          });
                        }}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                            className={fieldErrors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                          />
                          {fieldErrors.email && (
                            <p className="text-sm text-red-500">{fieldErrors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+971 XX XXX XXXX"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                            className={fieldErrors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}
                          />
                          {fieldErrors.phone && (
                            <p className="text-sm text-red-500">{fieldErrors.phone}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            placeholder="Your Company Ltd."
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="inquiryType">Inquiry Type *</Label>
                          <Select
                            value={formData.inquiryType}
                            onValueChange={(value) => handleInputChange("inquiryType", value)}
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              {inquiryTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="equipmentType">Equipment Type</Label>
                          <Select
                            value={formData.equipmentType}
                            onValueChange={(value) => handleInputChange("equipmentType", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select equipment" />
                            </SelectTrigger>
                            <SelectContent>
                              {equipmentTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project requirements, rental duration, or any questions you have..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          required
                        />
                      </div>

                      {/* Error Message */}
                      {error && (
                        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600 dark:bg-red-500/10 dark:text-red-400">
                          <div className="flex items-center gap-2">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {error}
                          </div>
                        </div>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-amber-500 text-black hover:bg-amber-400"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          "Send Message"
                        )}
                      </Button>

                      <p className="text-center text-xs text-zinc-500">
                        By submitting this form, you agree to our{" "}
                        <Link href="/terms-of-services" className="text-amber-600 hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy-policy" className="text-amber-600 hover:underline">
                          Privacy Policy
                        </Link>
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Quick Response Card */}
                <Card className="border-amber-200 bg-amber-50 dark:border-amber-500/30 dark:bg-amber-500/10">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-black">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-zinc-900 dark:text-white">
                      Quick Response Guaranteed
                    </h3>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300">
                      Our team responds to all inquiries within 2-4 business hours during working days.
                    </p>
                  </CardContent>
                </Card>

                {/* Office Locations */}
                <div>
                  <h3 className="mb-4 text-lg font-bold text-zinc-900 dark:text-white">
                    Our Offices
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((office) => (
                      <Card key={office.title} className="border-zinc-200 dark:border-zinc-800">
                        <CardContent className="p-5">
                          <h4 className="mb-3 font-semibold text-zinc-900 dark:text-white">
                            {office.title}
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                              <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {office.address}
                            </div>
                            <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                              <svg className="h-4 w-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              <a href={`tel:${office.phone}`} className="hover:text-amber-600">
                                {office.phone}
                              </a>
                            </div>
                            <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                              <svg className="h-4 w-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              <a href={`mailto:${office.email}`} className="hover:text-amber-600">
                                {office.email}
                              </a>
                            </div>
                            <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                              <svg className="h-4 w-4 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {office.hours}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <Card className="border-zinc-200 dark:border-zinc-800">
                  <CardContent className="p-5">
                    <h4 className="mb-4 font-semibold text-zinc-900 dark:text-white">
                      Follow Us
                    </h4>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition-colors hover:bg-amber-500 hover:text-black dark:bg-zinc-800 dark:text-zinc-400"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition-colors hover:bg-amber-500 hover:text-black dark:bg-zinc-800 dark:text-zinc-400"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition-colors hover:bg-amber-500 hover:text-black dark:bg-zinc-800 dark:text-zinc-400"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition-colors hover:bg-amber-500 hover:text-black dark:bg-zinc-800 dark:text-zinc-400"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 transition-colors hover:bg-amber-500 hover:text-black dark:bg-zinc-800 dark:text-zinc-400"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-white">
              Find Us
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Visit our office at Shop No. 6, Saih Al Salam Street, Marmoom, Al Lisaili, Dubai
            </p>
          </div>
          <div className="aspect-[16/6] overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800">
            {/* Placeholder for map - in production, integrate Google Maps */}
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-500">
                  <MapPin className="h-8 w-8" />
                </div>
                <p className="font-medium text-zinc-600 dark:text-zinc-400">
                  Interactive map would be displayed here
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-amber-600 hover:underline"
                >
                  Open in Google Maps
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <SeoContentSection
        title="The fastest way to reach AL-KABIR Construction Machinery Rentals"
        intro={
          <>
            Whether you need a same-day generator delivery, a long-term framework agreement covering an
            entire UAE infrastructure programme, or a quick technical answer about a specific machine,
            AL-KABIR has multiple direct channels staffed by people empowered to make decisions. Our
            head office, sales office and operations centre all share the same Saih Al Salam corridor
            address in Marmoom (Al Lisaili, Dubai), and our phone lines are answered seven days a week.
            Below is a quick guide to which channel matches which kind of request, so you reach the
            right person on the first call.
          </>
        }
        blocks={[
          {
            heading: "Phone &mdash; the fastest channel",
            paragraphs: [
              <>
                Our main rental and dispatch line is <a href="tel:+971554555786" className="text-amber-600 hover:underline dark:text-amber-500">+971 55 455 5786</a>{" "}
                &mdash; for same-day quotes, urgent equipment, replacement units and emergency
                breakdowns this is the right number. The sales line on{" "}
                <a href="tel:+971504845636" className="text-amber-600 hover:underline dark:text-amber-500">+971 50 484 5636</a>{" "}
                handles framework agreements, multi-machine packages and long-term project rentals.
                Operations queries (delivery scheduling, gate-pass coordination, fuel management) go
                through <a href="tel:+971555341166" className="text-amber-600 hover:underline dark:text-amber-500">+971 55 534 1166</a>.
                During business hours every line is normally answered inside three rings; outside
                hours, the main number rolls to an on-call coordinator for emergencies.
              </>,
            ],
          },
          {
            heading: "Email &mdash; for documentation and tenders",
            paragraphs: [
              <>
                For purchase-order requests, signed quotations, tender submissions and document
                exchanges, please email <a href="mailto:contact@alkabirmachineryrentals.ae" className="text-amber-600 hover:underline dark:text-amber-500">contact@alkabirmachineryrentals.ae</a>.
                Sales-team inquiries can also use{" "}
                <a href="mailto:sales@alkabirmachineryrentals.ae" className="text-amber-600 hover:underline dark:text-amber-500">sales@alkabirmachineryrentals.ae</a>{" "}
                and operations is{" "}
                <a href="mailto:info@alkabirmachineryrentals.ae" className="text-amber-600 hover:underline dark:text-amber-500">info@alkabirmachineryrentals.ae</a>.
                We acknowledge all emails inside two business hours and provide a substantive response
                inside one working day.
              </>,
            ],
          },
          {
            heading: "Online &mdash; the quote form for new projects",
            paragraphs: [
              <>
                For most new rental projects the fastest path is the{" "}
                <Link href="/get-quote" className="text-amber-600 hover:underline dark:text-amber-500">online quote form</Link>{" "}
                &mdash; you provide name, phone number and a brief description of what you need, and
                a sales engineer calls back inside thirty minutes during business hours. The form
                accepts deep-links from machinery pages, so if you have already identified the exact
                model you want, the request will arrive pre-tagged with the machine details.
              </>,
            ],
          },
          {
            heading: "Visit &mdash; the head office and yard",
            paragraphs: [
              <>
                Customers are welcome to visit the head office and inspection yard at Shop No. 6,
                Saih Al Salam Street, Marmoom, Al Lisaili, Dubai. We recommend booking a slot in
                advance so a sales engineer can walk you through the available fleet, run live
                demonstrations of generators or compactors you are evaluating, and discuss commercial
                terms in person. The yard is on the Al Lisaili / Saih Al Salam corridor, roughly
                40&ndash;50 minutes drive from Downtown Dubai depending on traffic.
              </>,
            ],
          },
          {
            heading: "Working hours and response times",
            paragraphs: [
              <>
                Standard office hours are Monday to Saturday, 7:00 AM to 7:00 PM. The dispatch line
                is staffed for emergencies twenty-four hours a day. Public-holiday cover is provided
                for active customers on a rotating basis. Typical response times: phone &mdash;
                under three rings during business hours; quote-form submissions &mdash; under thirty
                minutes during business hours; emails &mdash; under two business hours; tender
                responses &mdash; one working day for confirmation and one to three working days
                for the priced submission.
              </>,
            ],
          },
        ]}
        relatedLinks={[
          { href: "/get-quote", label: "Get an instant quote" },
          { href: "/services", label: "Services we offer" },
          { href: "/machinery", label: "Equipment fleet" },
          { href: "/locations", label: "UAE service areas" },
          { href: "/about", label: "About AL-KABIR" },
          { href: "/team", label: "Our team" },
        ]}
      />

      {/* FAQ Section */}
      <section className="bg-white py-16 dark:bg-zinc-950 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
              FAQ
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-zinc-600 dark:text-zinc-400">
              Find quick answers to common questions about our services
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-zinc-200 dark:border-zinc-800">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="mb-4 text-zinc-600 dark:text-zinc-400">
              Still have questions?
            </p>
            <Button asChild className="bg-amber-500 text-black hover:bg-amber-400">
              <Link href="tel:+971554555786">Call Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
