"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { quotesService, type EquipmentCategory } from "@/services";

const equipmentCategories = [
  "Generators",
  "Compactors",
  "Air Compressors",
  "Concrete Equipment",
  "Power Tools",
  "Scaffolding",
  "Cleaning Equipment",
  "Pumps",
  "Ladders",
  "Landscaping",
  "Lighting",
  "Other",
];

// UAE Phone validation: +971 XX XXX XXXX, 05X XXX XXXX, 971XXXXXXXXX
const validateUAEPhone = (phone: string): boolean => {
  const cleanPhone = phone.replace(/[\s\-()]/g, "");
  // Patterns: +971XXXXXXXXX, 971XXXXXXXXX, 05XXXXXXXX, 5XXXXXXXX
  const uaePhoneRegex = /^(\+?971|0)?5[0-9]{8}$/;
  return uaePhoneRegex.test(cleanPhone);
};

export function QuoteForm() {
  const searchParams = useSearchParams();
  const machineParam = searchParams.get("machine");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    equipmentCategory: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ phone?: string }>({});

  // Pre-fill the message when arriving from a machinery page deep-link
  // (e.g. /get-quote?machine=perkins-500kva-diesel-generator). This keeps the
  // canonical URL as /get-quote (set in get-quote/layout.tsx) while giving
  // the user a useful prefill.
  useEffect(() => {
    if (!machineParam) return;
    const readable = machineParam.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    setFormData((prev) =>
      prev.message
        ? prev
        : { ...prev, message: `I'd like a quote for the ${readable}.` }
    );
  }, [machineParam]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on input
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const errors: { phone?: string } = {};

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
      await quotesService.create({
        fullName: formData.fullName,
        phone: formData.phone,
        equipmentCategory: formData.equipmentCategory as EquipmentCategory,
        message: formData.message || undefined,
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting quote:", err);
      setError("Failed to submit your quote request. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20">
          <svg
            className="h-10 w-10 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <Badge className="mb-4 bg-green-500/10 text-green-500 hover:bg-green-500/20">
          Quote Request Received
        </Badge>
        <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl">
          Thank You, {formData.fullName}!
        </h2>
        <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
          We&apos;ve received your quote request for {formData.equipmentCategory || "equipment"} rental.
          Our team will call you shortly at <span className="font-semibold text-zinc-900 dark:text-white">{formData.phone}</span>.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-14 bg-amber-500 px-8 text-base font-semibold text-black hover:bg-amber-400"
          >
            <Link href="/machinery">Browse Machinery</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 border-zinc-700 px-8 text-base font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Card className="border-zinc-200 shadow-xl dark:border-zinc-800">
      <CardContent className="p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName">
              Your Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
              className="h-12 border-zinc-300 text-base dark:border-zinc-700"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+971 50 123 4567"
              required
              className={`h-12 border-zinc-300 text-base dark:border-zinc-700 ${fieldErrors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}`}
            />
            {fieldErrors.phone && (
              <p className="text-sm text-red-500">{fieldErrors.phone}</p>
            )}
          </div>

          {/* Equipment Category */}
          <div className="space-y-2">
            <Label htmlFor="equipmentCategory">
              Equipment Needed <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.equipmentCategory}
              onValueChange={(value) =>
                handleSelectChange("equipmentCategory", value)
              }
              required
            >
              <SelectTrigger className="h-12 border-zinc-300 text-base dark:border-zinc-700">
                <SelectValue placeholder="Select equipment type" />
              </SelectTrigger>
              <SelectContent>
                {equipmentCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Message (Optional) */}
          <div className="space-y-2">
            <Label htmlFor="message">
              Additional Details <span className="text-zinc-400">(Optional)</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="E.g., quantity needed, rental duration, project location..."
              rows={3}
              className="border-zinc-300 text-base dark:border-zinc-700"
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

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="h-14 w-full bg-amber-500 text-base font-bold text-black hover:bg-amber-400 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Submitting...
              </span>
            ) : (
              "Get My Free Quote"
            )}
          </Button>

          {/* Trust Text */}
          <p className="text-center text-sm text-zinc-500">
            We&apos;ll call you within 30 minutes during business hours
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
