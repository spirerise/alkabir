import { Client, Account, Databases, Storage, ID, Query } from "appwrite";

// Environment variables for Appwrite configuration
const APPWRITE_ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1";
const APPWRITE_PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "";
const APPWRITE_DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "";

// Collection IDs
export const COLLECTIONS = {
  QUOTES: process.env.NEXT_PUBLIC_APPWRITE_QUOTES_COLLECTION_ID || "quotes",
  CONTACTS: process.env.NEXT_PUBLIC_APPWRITE_CONTACTS_COLLECTION_ID || "contacts",
  BOOKINGS: process.env.NEXT_PUBLIC_APPWRITE_BOOKINGS_COLLECTION_ID || "bookings",
  SUBSCRIBERS: process.env.NEXT_PUBLIC_APPWRITE_SUBSCRIBERS_COLLECTION_ID || "subscribers",
} as const;

// Bucket IDs
export const BUCKETS = {
  UPLOADS: process.env.NEXT_PUBLIC_APPWRITE_UPLOADS_BUCKET_ID || "uploads",
  DOCUMENTS: process.env.NEXT_PUBLIC_APPWRITE_DOCUMENTS_BUCKET_ID || "documents",
} as const;

// Initialize the Appwrite client
const client = new Client();

client
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT_ID);

// Initialize services
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

// Export utilities
export { ID, Query };

// Export client for advanced usage
export { client };

// Export database ID for convenience
export const DATABASE_ID = APPWRITE_DATABASE_ID;
