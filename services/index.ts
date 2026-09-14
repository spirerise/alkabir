// Main Appwrite client and utilities
export { 
  client, 
  account, 
  databases, 
  storage, 
  ID, 
  Query, 
  DATABASE_ID, 
  COLLECTIONS, 
  BUCKETS 
} from "./appwrite";

// Database services
export { 
  quotesService, 
  contactsService, 
  subscribersService, 
  bookingsService 
} from "./database.service";

// Types
export type {
  // Quote types
  Quote,
  CreateQuoteDTO,
  QuoteStatus,
  
  // Contact types
  Contact,
  CreateContactDTO,
  ContactStatus,
  
  // Subscriber types
  Subscriber,
  CreateSubscriberDTO,
  
  // Booking types
  Booking,
  CreateBookingDTO,
  BookingStatus,
  
  // Enum types
  InquiryType,
  EquipmentType,
  EquipmentCategory,
} from "./types";
