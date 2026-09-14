// ============================================
// Appwrite Database Collection Types
// AL-KABIR Construction Machinery Rentals
// ============================================

// Enum types for consistent values
export type QuoteStatus = "pending" | "contacted" | "quoted" | "closed";
export type ContactStatus = "new" | "in-progress" | "resolved" | "spam";
export type BookingStatus = "pending" | "confirmed" | "active" | "completed" | "cancelled";

export type InquiryType = "rental" | "quote" | "service" | "parts" | "careers" | "other";
export type EquipmentType = "generator" | "compactor" | "compressor" | "concrete" | "power-tool" | "scaffolding" | "other";
export type EquipmentCategory = 
  | "Generators"
  | "Compactors"
  | "Air Compressors"
  | "Concrete Equipment"
  | "Power Tools"
  | "Scaffolding"
  | "Cleaning Equipment"
  | "Pumps"
  | "Ladders"
  | "Landscaping"
  | "Lighting"
  | "Other";

// ============================================
// QUOTES COLLECTION
// For Get Quote form submissions
// ============================================
export interface Quote {
  $id?: string;
  $createdAt?: string;
  $updatedAt?: string;
  fullName: string;
  phone: string;
  equipmentCategory: EquipmentCategory;
  message?: string;
  status: QuoteStatus;
  notes?: string;
}

export interface CreateQuoteDTO {
  fullName: string;
  phone: string;
  equipmentCategory: EquipmentCategory;
  message?: string;
}

// ============================================
// CONTACTS COLLECTION
// For Contact form submissions
// ============================================
export interface Contact {
  $id?: string;
  $createdAt?: string;
  $updatedAt?: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  inquiryType: InquiryType;
  equipmentType?: EquipmentType;
  message: string;
  status: ContactStatus;
  respondedAt?: string;
  notes?: string;
}

export interface CreateContactDTO {
  name: string;
  email: string;
  phone: string;
  company?: string;
  inquiryType: InquiryType;
  equipmentType?: EquipmentType;
  message: string;
}

// ============================================
// SUBSCRIBERS COLLECTION
// For Newsletter subscriptions
// ============================================
export interface Subscriber {
  $id?: string;
  $createdAt?: string;
  $updatedAt?: string;
  email: string;
  source?: string;
  isActive: boolean;
  unsubscribedAt?: string;
}

export interface CreateSubscriberDTO {
  email: string;
  source?: string;
}

// ============================================
// BOOKINGS COLLECTION
// For Equipment booking requests
// ============================================
export interface Booking {
  $id?: string;
  $createdAt?: string;
  $updatedAt?: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  companyName?: string;
  equipmentId: string;
  equipmentName: string;
  startDate: string;
  endDate: string;
  deliveryLocation: string;
  specialRequirements?: string;
  status: BookingStatus;
  totalAmount?: number;
}

export interface CreateBookingDTO {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  companyName?: string;
  equipmentId: string;
  equipmentName: string;
  startDate: string;
  endDate: string;
  deliveryLocation: string;
  specialRequirements?: string;
}
