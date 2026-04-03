"use client";

import { Section, SectionHeader, FadeIn } from "@/components/sections/section";
import type { Locale } from "@/config/site";

const steps = {
  nl: [
    {
      step: "01",
      title: "Boek online",
      description:
        "Kies een trainer, een Open Gym slot of een studiosessie. Boek in 2 minuten via onze website.",
    },
    {
      step: "02",
      title: "Krijg je deurcode",
      description:
        "De avond ervoor ontvang je een unieke deurcode via WhatsApp. Geen receptie, geen wachten.",
    },
    {
      step: "03",
      title: "Train privé",
      description:
        "Loop naar binnen en begin. Alleen jij, je trainer of je training. Annuleren kan altijd gratis.",
    },
  ],
  en: [
    {
      step: "01",
      title: "Book online",
      description:
        "Choose a trainer, an Open Gym slot or a studio session. Book in 2 minutes via our website.",
    },
    {
      step: "02",
      title: "Get your door code",
      description:
        "The evening before, you receive a unique door code via WhatsApp. No reception, no waiting.",
    },
    {
      step: "03",
      title: "Train privately",
      description:
        "Walk in and start. Just you, your trainer or your workout. Cancellation is always free.",
    },
  ],
};

export function HowItWorks({ locale }: { locale: Locale }) {
  const items = steps[locale];
  const t =
    locale === "nl"
      ? { overline: "Hoe het werkt", title: "In 3 stappen aan de slag" }
      : { overline: "How it works", title: "Get started in 3 steps" };

  return (
    <Section>
      <SectionHeader overline={t.overline} title={t.title} />
      <div className="grid sm:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <FadeIn key={item.step} delay={i * 0.1}>
            <div className="relative">
              <span className="text-6xl font-heading font-bold text-border/60 leading-none">
                {item.step}
              </span>
              <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
