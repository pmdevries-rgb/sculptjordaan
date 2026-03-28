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
  title: "Boek de Studio — Privé Trainingsruimte Huren | SculptClub Amsterdam",
  description:
    "Huur een volledig uitgeruste privé studio in de Jordaan. Vanaf €12/uur, geen contract, gratis proefsessie. Professionele apparatuur, flexibel per uur.",
  alternates: {
    canonical: "/nl/boek-studio",
    languages: {
      nl: "/nl/boek-studio",
      en: "/en/book-studio",
    },
  },
};

const benefits = [
  "Gratis proefsessie — bekijk de studio zonder verplichtingen",
  "Halve studio (1:1) vanaf €12/uur, hele studio vanaf €17/uur",
  "Professionele apparatuur: powerrack, kabelmachine, Concept2, dumbbells",
  "Geen contract, geen commissie — jij bepaalt je tarieven",
  "Deurcode via WhatsApp, geen receptie",
];

const faqs = [
  {
    q: "Wat kost het om de studio te huren?",
    a: "Halve studio (1:1) vanaf €12 per 60 minuten. Hele studio (max 6 personen) vanaf €17 per 60 minuten. Bespaar 10-23% met een kortingspakket.",
  },
  {
    q: "Welke apparatuur is er?",
    a: "Powerrack, kabelmachine, Concept2 roeier, verstelbare bank, dumbbells tot 40kg, kettlebells, resistance bands en meer. Alles voor een complete sessie.",
  },
  {
    q: "Kan ik de studio eerst uitproberen?",
    a: "Ja, boek een gratis proefsessie. Bekijk de ruimte, test de apparatuur — geen verplichtingen.",
  },
];

const faqJsonLdData = faqs.map((f) => ({ question: f.q, answer: f.a }));

export default function BoekStudioPageNL() {
  return (
    <PageLayout>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Boek Studio", url: "/nl/boek-studio" },
        ]}
      />
      <ServiceJsonLd
        name="Studio Verhuur"
        description="Huur een privé personal training studio in de Jordaan, Amsterdam. Professionele apparatuur, flexibel per uur."
        url="/nl/boek-studio"
        priceRange="Vanaf €12 per uur"
      />
      <FaqJsonLd faqs={faqJsonLdData} />

      {/* Hero */}
      <Section>
        <SectionHeader
          as="h1"
          overline="Studio Verhuur"
          title="Boek de Studio"
          description="Huur een volledig uitgeruste privé studio per uur. Direct beschikbaar, geen vast contract."
        />
        <FadeIn className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ButtonLink href={acuityLinks.studioTrial} size="lg">
            Boek gratis proefsessie
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/nl/studio-huren#tarieven" size="lg" variant="outline">
            Bekijk tarieven
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Trust bar */}
      <Section bg="muted">
        <FadeIn>
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-lg font-semibold text-primary">
              Vanaf €12/uur · Geen commissie · Geen contract
            </p>
            <p className="text-sm text-muted-foreground">
              Dagelijks beschikbaar 06:30 – 22:00, ook in het weekend
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* What you get */}
      <Section>
        <SectionHeader
          overline="Wat je krijgt"
          title="Volledig Uitgeruste Privé Studio"
          description="Alles wat je nodig hebt om je klanten professioneel te trainen."
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
          <ButtonLink href={acuityLinks.studioTrial} size="lg">
            Boek gratis proefsessie
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Social proof */}
      <Section bg="muted">
        <SectionHeader overline="Trainers" title="Wat Trainers Zeggen" />
        <FadeIn>
          <div className="mx-auto max-w-lg rounded-xl border bg-card p-6">
            <p className="text-[1.05rem] leading-relaxed">
              &ldquo;Eindelijk een studio waar ik mijn klanten in alle rust kan
              trainen. Goede apparatuur, mooie locatie, geen gedoe met
              abonnementen.&rdquo;
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              — Personal trainer, SculptClub
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader overline="Veelgestelde vragen" title="Heb je een Vraag?" />
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

      {/* Bottom CTA */}
      <Section bg="dark">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Klaar om je klanten hier te trainen?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Probeer de studio gratis uit. Geen verplichtingen.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={acuityLinks.studioTrial} size="lg">
                Boek gratis proefsessie
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={whatsappLinks.studioNl}
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
                external
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp ons
              </ButtonLink>
            </div>
          </div>
        </FadeIn>
      </Section>
    </PageLayout>
  );
}
