import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Rashid",
    role: "Project Manager",
    company: "Gulf Construction Co.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    content:
      "Al Kabir has been our go-to machinery rental partner for over 5 years. Their equipment is always well-maintained and their service is exceptional. The generators we rented performed flawlessly throughout our mega project.",
    rating: 5,
    projectType: "Infrastructure",
  },
  {
    id: 2,
    name: "Mohammed Hassan",
    role: "Site Supervisor",
    company: "Desert Builders LLC",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
    content:
      "The quality of machinery and the professionalism of the team is unmatched. They delivered the equipment right on time and it performed flawlessly. I highly recommend their services to any construction company.",
    rating: 5,
    projectType: "Residential",
  },
  {
    id: 3,
    name: "Khalid Omar",
    role: "Operations Director",
    company: "Oasis Engineering",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    content:
      "Competitive pricing and excellent customer support. They helped us find the perfect generator for our high-rise project within our budget. Their team is available 24/7 for any technical support.",
    rating: 5,
    projectType: "Commercial",
  },
  {
    id: 4,
    name: "Fatima Al-Zahra",
    role: "Procurement Manager",
    company: "Unity Constructions",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
    content:
      "Their extensive fleet and quick response time saved our project from delays. The variety of equipment available and the flexibility in rental terms make them stand out from competitors.",
    rating: 5,
    projectType: "Industrial",
  },
];

const stats = [
  { value: "98%", label: "Customer Satisfaction" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "2000+", label: "Projects Completed" },
  { value: "500+", label: "Repeat Clients" },
];

export function HappyCustomersSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 dark:bg-zinc-950 md:py-28 border-t border-zinc-100 dark:border-zinc-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <Badge className="mb-4 bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 dark:text-amber-500">
            Testimonials
          </Badge>
          <h2 className="mb-4 text-3xl font-bold text-zinc-900 dark:text-white md:text-4xl lg:text-5xl">
            Trusted by Industry Leaders
          </h2>
          <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            See why thousands of construction professionals choose Al Kabir for their machinery rental needs.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="mb-14 grid grid-cols-2 gap-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-800/50 sm:grid-cols-4 lg:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-amber-600 dark:text-amber-500 md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group border border-zinc-200 bg-zinc-50 transition-colors hover:border-amber-500/50 dark:border-zinc-800 dark:bg-zinc-800/50 dark:hover:border-amber-500/50">
              <CardContent className="p-6 lg:p-8">
                {/* Header with avatar and rating */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-14 w-14 border-2 border-amber-500/20">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-amber-500 text-black font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-zinc-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-zinc-600 dark:text-zinc-400">
                        {testimonial.role}
                      </div>
                      <div className="text-sm font-medium text-amber-600 dark:text-amber-500">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
                    {testimonial.projectType}
                  </Badge>
                </div>

                {/* Rating Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-amber-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <div className="relative">
                  <svg className="absolute -left-2 -top-2 h-8 w-8 text-amber-500/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="pl-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {testimonial.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Logos */}
        <div className="mt-14 border-t border-zinc-200 dark:border-zinc-800 pt-10">
          <p className="mb-6 text-center text-sm text-zinc-500 dark:text-zinc-500">
            Trusted by leading construction companies across the UAE
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["EMAAR", "NAKHEEL", "ALDAR", "DAMAC", "ARABTEC"].map((company) => (
              <div key={company} className="text-lg font-bold text-zinc-400 dark:text-zinc-600">{company}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
