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
  title: "Book Open Gym — Train Independently in a Private Studio | SculptClub Amsterdam",
  description:
    "Book an Open Gym session at SculptClub in the Jordaan. From €29/4 weeks, no membership required, private studio. Start with a free trial.",
  alternates: {
    canonical: "/en/book-gym",
    languages: {
      nl: "/nl/boek-gym",
      en: "/en/book-gym",
    },
  },
};

const benefits = [
  "Free trial session — try it with no obligation",
  "Private studio all to yourself — no waiting for equipment",
  "Membership from €29 per 4 weeks (1x/week)",
  "No long-term contract — cancel anytime",
  "Door code via WhatsApp, start right away",
];

const faqs = [
  {
    q: "How much does an Open Gym session cost?",
    a: "Membership from €29 per 4 weeks (1x/week). The most popular plan is 2x/week for €49. You can always upgrade or downgrade.",
  },
  {
    q: "Do I need a membership?",
    a: "It works with a 4-week membership, but you can cancel at any time. No long-term contract.",
  },
  {
    q: "Is it really just for me?",
    a: "Yes. You have the entire studio to yourself during your booked 60-minute time slot. No other gym-goers.",
  },
];

const faqJsonLdData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function BookGymPageEN() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/en" },
          { name: "Book Open Gym", url: "/en/book-gym" },
        ]}
      />
      <ServiceJsonLd
        name="Open Gym"
        description="Train independently in a private studio in the Jordaan, Amsterdam. Book 60-minute sessions."
        url="/en/book-gym"
        priceRange="€29 - €89 per 4 weeks"
      />
      <FaqJsonLd faqs={faqJsonLdData} />

      <Section>
        <SectionHeader
          as="h1"
          overline="Open Gym"
          title="Book an Open Gym Session"
          description="Train independently in a private studio. No membership required — start with a free trial."
        />
        <FadeIn className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ButtonLink href={acuityLinks.openGymTrial} size="lg">
            Start free trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/en/open-gym" size="lg" variant="outline">
            View all plans
          </ButtonLink>
        </FadeIn>
      </Section>

      <Section bg="muted">
        <FadeIn>
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-lg font-semibold text-primary">
              From €29/4 weeks · Private studio · No contract
            </p>
            <p className="text-sm text-muted-foreground">
              60-minute sessions · Daily 06:30 – 22:00
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section>
        <SectionHeader
          overline="What you get"
          title="Train Independently in a Private Studio"
          description="Everything you need for a complete workout."
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
          <ButtonLink href={acuityLinks.openGymTrial} size="lg">
            Start free trial
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
        </FadeIn>
      </Section>

      <Section bg="muted">
        <SectionHeader overline="Members" title="What Members Say" />
        <FadeIn>
          <div className="mx-auto max-w-lg rounded-xl border bg-card p-6">
            <p className="text-[1.05rem] leading-relaxed">
              &ldquo;No crowds, no waiting. I book an hour, do my workout and
              I&apos;m done. Exactly what I was looking for as an alternative to
              the packed gym.&rdquo;
            </p>
            <p className="mt-3 text-sm text-muted-foreground">— Google Review, ★★★★★</p>
          </div>
        </FadeIn>
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
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to train?</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Book your free trial — you could start tomorrow.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={acuityLinks.openGymTrial} size="lg">
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={whatsappLinks.openGymEn}
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
