import { databases, DATABASE_ID, COLLECTIONS, ID, Query } from "./appwrite";
import type {
  Quote,
  CreateQuoteDTO,
  Contact,
  CreateContactDTO,
  Subscriber,
  CreateSubscriberDTO,
  Booking,
  CreateBookingDTO,
  QuoteStatus,
  ContactStatus,
  BookingStatus,
} from "./types";

// ============================================
// QUOTES SERVICE
// ============================================
export const quotesService = {
  // Create a new quote request
  async create(data: CreateQuoteDTO): Promise<Quote> {
    const quote = await databases.createDocument(
      DATABASE_ID,
      COLLECTIONS.QUOTES,
      ID.unique(),
      {
        ...data,
        status: "pending" as QuoteStatus,
      }
    );
    return quote as unknown as Quote;
  },

  // Get a quote by ID
  async getById(id: string): Promise<Quote> {
    const quote = await databases.getDocument(
      DATABASE_ID,
      COLLECTIONS.QUOTES,
      id
    );
    return quote as unknown as Quote;
  },

  // List all quotes with optional filters
  async list(
    queries: string[] = [Query.orderDesc("$createdAt"), Query.limit(25)]
  ): Promise<{ documents: Quote[]; total: number }> {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.QUOTES,
      queries
    );
    return {
      documents: response.documents as unknown as Quote[],
      total: response.total,
    };
  },

  // Update quote status
  async updateStatus(id: string, status: QuoteStatus, notes?: string): Promise<Quote> {
    const quote = await databases.updateDocument(
      DATABASE_ID,
      COLLECTIONS.QUOTES,
      id,
      { status, ...(notes && { notes }) }
    );
    return quote as unknown as Quote;
  },

  // Delete a quote
  async delete(id: string): Promise<void> {
    await databases.deleteDocument(DATABASE_ID, COLLECTIONS.QUOTES, id);
  },
};

// ============================================
// CONTACTS SERVICE
// ============================================
export const contactsService = {
  // Create a new contact message
  async create(data: CreateContactDTO): Promise<Contact> {
    const contact = await databases.createDocument(
      DATABASE_ID,
      COLLECTIONS.CONTACTS,
      ID.unique(),
      {
        ...data,
        status: "new" as ContactStatus,
      }
    );
    return contact as unknown as Contact;
  },

  // Get a contact by ID
  async getById(id: string): Promise<Contact> {
    const contact = await databases.getDocument(
      DATABASE_ID,
      COLLECTIONS.CONTACTS,
      id
    );
    return contact as unknown as Contact;
  },

  // List all contacts with optional filters
  async list(
    queries: string[] = [Query.orderDesc("$createdAt"), Query.limit(25)]
  ): Promise<{ documents: Contact[]; total: number }> {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.CONTACTS,
      queries
    );
    return {
      documents: response.documents as unknown as Contact[],
      total: response.total,
    };
  },

  // Update contact status
  async updateStatus(
    id: string,
    status: ContactStatus,
    respondedAt?: string,
    notes?: string
  ): Promise<Contact> {
    const contact = await databases.updateDocument(
      DATABASE_ID,
      COLLECTIONS.CONTACTS,
      id,
      {
        status,
        ...(respondedAt && { respondedAt }),
        ...(notes && { notes }),
      }
    );
    return contact as unknown as Contact;
  },

  // Delete a contact
  async delete(id: string): Promise<void> {
    await databases.deleteDocument(DATABASE_ID, COLLECTIONS.CONTACTS, id);
  },
};

// ============================================
// SUBSCRIBERS SERVICE
// ============================================
export const subscribersService = {
  // Subscribe to newsletter
  async subscribe(data: CreateSubscriberDTO): Promise<Subscriber> {
    // Check if already subscribed
    const existing = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.SUBSCRIBERS,
      [Query.equal("email", data.email)]
    );

    if (existing.total > 0) {
      const existingSubscriber = existing.documents[0] as unknown as Subscriber;
      // Reactivate if previously unsubscribed
      if (!existingSubscriber.isActive) {
        return this.resubscribe(existingSubscriber.$id!);
      }
      throw new Error("Email already subscribed");
    }

    const subscriber = await databases.createDocument(
      DATABASE_ID,
      COLLECTIONS.SUBSCRIBERS,
      ID.unique(),
      {
        ...data,
        isActive: true,
      }
    );
    return subscriber as unknown as Subscriber;
  },

  // Unsubscribe from newsletter
  async unsubscribe(email: string): Promise<void> {
    const existing = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.SUBSCRIBERS,
      [Query.equal("email", email)]
    );

    if (existing.total === 0) {
      throw new Error("Email not found");
    }

    await databases.updateDocument(
      DATABASE_ID,
      COLLECTIONS.SUBSCRIBERS,
      existing.documents[0].$id,
      {
        isActive: false,
        unsubscribedAt: new Date().toISOString(),
      }
    );
  },

  // Resubscribe
  async resubscribe(id: string): Promise<Subscriber> {
    const subscriber = await databases.updateDocument(
      DATABASE_ID,
      COLLECTIONS.SUBSCRIBERS,
      id,
      {
        isActive: true,
        unsubscribedAt: null,
      }
    );
    return subscriber as unknown as Subscriber;
  },

  // List active subscribers
  async listActive(
    queries: string[] = [
      Query.equal("isActive", true),
      Query.orderDesc("$createdAt"),
      Query.limit(100),
    ]
  ): Promise<{ documents: Subscriber[]; total: number }> {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.SUBSCRIBERS,
      queries
    );
    return {
      documents: response.documents as unknown as Subscriber[],
      total: response.total,
    };
  },

  // Check if email is subscribed
  async isSubscribed(email: string): Promise<boolean> {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.SUBSCRIBERS,
      [Query.equal("email", email), Query.equal("isActive", true)]
    );
    return response.total > 0;
  },
};

// ============================================
// BOOKINGS SERVICE
// ============================================
export const bookingsService = {
  // Create a new booking
  async create(data: CreateBookingDTO): Promise<Booking> {
    const booking = await databases.createDocument(
      DATABASE_ID,
      COLLECTIONS.BOOKINGS,
      ID.unique(),
      {
        ...data,
        status: "pending" as BookingStatus,
      }
    );
    return booking as unknown as Booking;
  },

  // Get a booking by ID
  async getById(id: string): Promise<Booking> {
    const booking = await databases.getDocument(
      DATABASE_ID,
      COLLECTIONS.BOOKINGS,
      id
    );
    return booking as unknown as Booking;
  },

  // List all bookings with optional filters
  async list(
    queries: string[] = [Query.orderDesc("$createdAt"), Query.limit(25)]
  ): Promise<{ documents: Booking[]; total: number }> {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.BOOKINGS,
      queries
    );
    return {
      documents: response.documents as unknown as Booking[],
      total: response.total,
    };
  },

  // Update booking status
  async updateStatus(
    id: string,
    status: BookingStatus,
    totalAmount?: number
  ): Promise<Booking> {
    const booking = await databases.updateDocument(
      DATABASE_ID,
      COLLECTIONS.BOOKINGS,
      id,
      {
        status,
        ...(totalAmount !== undefined && { totalAmount }),
      }
    );
    return booking as unknown as Booking;
  },

  // Get bookings by customer email
  async getByCustomerEmail(email: string): Promise<Booking[]> {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTIONS.BOOKINGS,
      [Query.equal("customerEmail", email), Query.orderDesc("$createdAt")]
    );
    return response.documents as unknown as Booking[];
  },

  // Delete a booking
  async delete(id: string): Promise<void> {
    await databases.deleteDocument(DATABASE_ID, COLLECTIONS.BOOKINGS, id);
  },
};
