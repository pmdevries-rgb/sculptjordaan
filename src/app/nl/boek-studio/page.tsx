import { PageLayout } from "@/components/layout/page-layout";
import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { acuityLinks, acuityPackages, whatsappLinks } from "@/config/acuity";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { MessageCircle, ArrowRight, CreditCard, Eye, Key, Repeat } from "lucide-react";
import Image from "next/image";
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

const steps = [
  {
    icon: Eye,
    title: "Bekijk de studio",
    description: "Boek een gratis proefsessie en test de ruimte en apparatuur zelf.",
  },
  {
    icon: Key,
    title: "Ontvang je deurcode",
    description: "Boek per uur via het systeem. Je krijgt een eigen code via WhatsApp.",
  },
  {
    icon: Repeat,
    title: "Train je klanten",
    description: "Gebruik de studio wanneer het jou uitkomt. Flexibel, zonder vast contract.",
  },
];

const studioImages = [
  { src: "/images/studio/studio-overview.jpeg", alt: "Overzicht van de SculptClub privé studio" },
  { src: "/images/studio/studio-interior-1.jpeg", alt: "SculptClub studio interieur" },
  { src: "/images/studio/power-rack.jpeg", alt: "Power rack in de SculptClub studio" },
  { src: "/images/studio/dumbbell-rack.jpeg", alt: "Dumbbell rack in de SculptClub studio" },
];

const faqs = [
  {
    q: "Wat is inbegrepen bij studio huur?",
    a: "Alle apparatuur, wifi, muziek, klimaatbeheersing en schoonmaak. De studio is volledig privé tijdens je huurtijd.",
  },
  {
    q: "Hoe werkt het boeken?",
    a: "Je boekt online via het boekingssysteem. De avond voor je sessie ontvang je een deurcode via WhatsApp waarmee je de studio kunt betreden.",
  },
  {
    q: "Kan ik de studio eerst uitproberen?",
    a: "Ja, boek een gratis proefsessie. Bekijk de ruimte, test de apparatuur — geen verplichtingen.",
  },
  {
    q: "Heb ik een verzekering nodig?",
    a: "Ja, als ZZP-trainer of fysiotherapeut dien je een geldige beroepsaansprakelijkheidsverzekering te hebben. Dit is je eigen verantwoordelijkheid.",
  },
  {
    q: "Hoe lang zijn pakketten geldig?",
    a: "Alle kortingspakketten zijn 1 jaar geldig. Je kiest zelf wanneer je ze gebruikt.",
  },
  {
    q: "Kan ik betalen per factuur?",
    a: "Ja. Studio huur kan betaald worden met CreditCard, Apple Pay, Google Pay of per factuur.",
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

      {/* Hero — short, drives to pricing below */}
      <Section>
        <SectionHeader
          as="h1"
          overline="Voor Personal Trainers"
          title="Boek de Studio"
          description="Huur een volledig uitgeruste privé studio per uur. Geen contract, geen commissie — 100% van je omzet is voor jou."
        />
        <FadeIn className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <ButtonLink href="#tarieven" size="lg">
            Bekijk tarieven & boek direct
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonLink>
          <ButtonLink href={acuityLinks.studioTrial} size="lg" variant="outline">
            Gratis proefsessie
          </ButtonLink>
        </FadeIn>
      </Section>

      {/* Trust bar */}
      <Section bg="muted">
        <FadeIn>
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-lg font-semibold text-primary">
              Vanaf €12/uur · 0% commissie · Geen contract
            </p>
            <p className="text-sm text-muted-foreground">
              Dagelijks 06:30 – 22:00 · Proefsessie gratis · Vaste trainers huren wekelijks
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* ═══ PRICING TABLE — the core conversion element ═══ */}
      <Section id="tarieven">
        <SectionHeader
          overline="Tarieven"
          title="Uurtarieven"
          description="Boek direct per sessie. Geen abonnement verplicht."
        />

        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <div className="overflow-hidden rounded-xl border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-4 py-3 text-left font-medium">Ruimte</th>
                    <th className="px-4 py-3 text-center font-medium">60 min</th>
                    <th className="px-4 py-3 text-center font-medium">90 min</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3 font-medium">Halve studio (1:1)</td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold">&euro;12</span>
                      <ButtonLink
                        href={acuityLinks.halfStudio60}
                        size="sm"
                        className="ml-3"
                      >
                        Boek
                      </ButtonLink>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold">&euro;17</span>
                      <ButtonLink
                        href={acuityLinks.halfStudio90}
                        size="sm"
                        className="ml-3"
                      >
                        Boek
                      </ButtonLink>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Hele studio (max 6)</td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold">&euro;17</span>
                      <ButtonLink
                        href={acuityLinks.fullStudio60}
                        size="sm"
                        className="ml-3"
                      >
                        Boek
                      </ButtonLink>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="font-semibold">&euro;24</span>
                      <ButtonLink
                        href={acuityLinks.fullStudio90}
                        size="sm"
                        className="ml-3"
                      >
                        Boek
                      </ButtonLink>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CreditCard className="h-4 w-4" />
              <span>Betaal met CreditCard, Apple Pay, Google Pay of per factuur</span>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ═══ DISCOUNT PACKAGES — upsell for regular trainers ═══ */}
      <Section bg="muted">
        <SectionHeader
          overline="Voordeelpakketten"
          title="Meer Trainen, Meer Besparen"
          description="Koop een strippenkaart en bespaar op elke sessie. Pakketten zijn 1 jaar geldig."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {/* Starter */}
          <FadeIn delay={0}>
            <Card className="h-full text-center">
              <CardHeader>
                <CardTitle className="text-xl">Starter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">
                  &euro;99
                </p>
                <p className="text-3xl font-bold">&euro;89</p>
                <p className="mt-2 text-sm text-discount font-medium">
                  Bespaar 10%
                </p>
                <ButtonLink
                  href={acuityPackages.studio.starter}
                  size="sm"
                  className="mt-4"
                >
                  Koop Starter
                </ButtonLink>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Routine */}
          <FadeIn delay={0.1}>
            <Card className="h-full text-center ring-2 ring-primary">
              <CardHeader>
                <Badge className="mx-auto mb-2">Meest gekozen</Badge>
                <CardTitle className="text-xl">Routine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">
                  &euro;234
                </p>
                <p className="text-3xl font-bold">&euro;199</p>
                <p className="mt-2 text-sm text-discount font-medium">
                  Bespaar 15%
                </p>
                <ButtonLink
                  href={acuityPackages.studio.routine}
                  size="sm"
                  className="mt-4"
                >
                  Koop Routine
                </ButtonLink>
              </CardContent>
            </Card>
          </FadeIn>

          {/* Volume */}
          <FadeIn delay={0.2}>
            <Card className="h-full text-center ring-2 ring-primary">
              <CardHeader>
                <Badge className="mx-auto mb-2">Beste deal</Badge>
                <CardTitle className="text-xl">Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-through">
                  &euro;713
                </p>
                <p className="text-3xl font-bold">&euro;549</p>
                <p className="mt-2 text-sm text-discount font-medium">
                  Bespaar 23%
                </p>
                <ButtonLink
                  href={acuityPackages.studio.volume}
                  size="sm"
                  className="mt-4"
                >
                  Koop Volume
                </ButtonLink>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Geldig 1 jaar. Laagste effectieve tarief:{" "}
            <span className="text-discount font-medium">&euro;9,24/sessie</span>
          </p>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Liever per bankoverschrijving?{" "}
            <a
              href={whatsappLinks.bankTransferNl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Stuur ons een WhatsApp
            </a>
          </p>
        </FadeIn>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeader
          overline="Hoe het werkt"
          title="In 3 Stappen Starten"
        />
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.15}>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Studio gallery */}
      <Section bg="muted">
        <SectionHeader overline="De studio" title="Bekijk de Ruimte" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {studioImages.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.1}>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Social proof */}
      <Section>
        <SectionHeader overline="Trainers over SculptClub" title="Wat Collega-Trainers Zeggen" />
        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
          <FadeIn>
            <div className="rounded-xl border bg-card p-6">
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
          <FadeIn delay={0.1}>
            <div className="rounded-xl border bg-card p-6">
              <p className="text-[1.05rem] leading-relaxed">
                &ldquo;Ik huur hier nu wekelijks. Mijn klanten waarderen de rust en
                privacy. Het boekingssysteem werkt soepel en de deurcode is altijd
                op tijd.&rdquo;
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                — Fysiotherapeut, SculptClub
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="muted">
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
              Probeer de studio gratis uit of boek direct een sessie.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="#tarieven" size="lg">
                Boek een sessie
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
