import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { acuityLinks, whatsappLinks } from "@/config/acuity";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Personal Trainer — Free Introduction | SculptClub Amsterdam",
  description:
    "Book your free introduction with a personal trainer at SculptClub in the Jordaan. From €45/session, no membership, always free cancellation.",
  alternates: {
    canonical: "/en/book-trainer",
    languages: {
      nl: "/nl/boek-trainer",
      en: "/en/book-trainer",
    },
  },
};

const benefits = [
  "Free 30-minute introduction — no obligation",
  "Personal training plan based on your goals",
  "Private studio — just you and your trainer",
  "No membership, no contract",
  "Always free cancellation",
];

const faqs = [
  {
    q: "How much does a session cost?",
    a: "From €45 per session. Each trainer sets their own rate. The first introduction is always free and no-obligation.",
  },
  {
    q: "Am I locked into a contract?",
    a: "No. No membership, no contract. You book per session and can always cancel for free. Stop whenever you want.",
  },
  {
    q: "Do I need experience?",
    a: "No. All trainers work with beginners to advanced athletes. During your free intro you'll discuss your level and goals.",
  },
];

const faqJsonLdData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function BookTrainerPageEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Book Trainer", url: "/en/book-trainer" },
        ]}
      />
      <ServiceJsonLd
        name="Personal Training"
        description="Book a free introduction with a personal trainer at SculptClub in the Jordaan, Amsterdam."
        url="/en/book-trainer"
        priceRange="From €45 per session"
      />
      <FaqJsonLd faqs={faqJsonLdData} />

      <Section>
        <SectionHeader
          as="h1"
          overline="Personal Training"
          title="Book Your Personal Trainer"
          description="Free 30-minute introduction. Choose your trainer and book directly — no commitment required."
        />
        <FadeIn className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ButtonLink href={acuityLinks.generic} size="lg">
            Book free intro
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/en/find-personal-trainer" size="lg" variant="outline">
            Meet our trainers
          </ButtonLink>
        </FadeIn>
      </Section>

      <Section bg="muted">
        <FadeIn>
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-lg font-semibold text-primary">
              ★ 5.0 on Google — 100% satisfied clients
            </p>
            <p className="text-sm text-muted-foreground">
              From €45/session · No membership · Always free cancellation
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <SectionHeader
          overline="What you get"
          title="Personal Training from €45"
          description="Everything you need to get started."
        />
        <FadeIn>
          <div className="mx-auto max-w-lg">
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="mt-8 flex justify-center">
          <ButtonLink href={acuityLinks.generic} size="lg">
            Book free intro
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
        </FadeIn>
      </Section>

      <Section bg="muted">
        <SectionHeader overline="Clients" title="What Clients Say" />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <FadeIn>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                &ldquo;I felt comfortable from the start. No crowded gym, just a
                quiet studio with a trainer who actually listens.&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground">— Google Review, ★★★★★</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                &ldquo;Personal attention without a membership. My trainer adjusts
                the schedule to fit my busy work week.&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground">— Google Review, ★★★★★</p>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <SectionHeader overline="Common questions" title="Got a Question?" />
        <FadeIn>
          <Accordion className="mx-auto max-w-2xl">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={i}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>
                  <p>{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </Section>

      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to start?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Book your free intro — we usually respond within an hour.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={acuityLinks.generic} size="lg">
                Book free intro
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={whatsappLinks.en}
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
                external
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp us
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
