"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Globe, CalendarCheck, Users, Dumbbell, Building2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { mainNav, secondaryNav } from "@/config/navigation";
import { getLocaleFromPath, getAlternatePath, getAlternateLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";

const bookingMenu = {
  nl: {
    label: "Boek",
    categories: [
      {
        icon: Users,
        title: "Personal Trainer",
        description: "Gratis kennismakingsgesprek",
        href: "/nl/vind-jouw-personal-trainer",
        accent: "text-blue-600 bg-blue-50",
      },
      {
        icon: Dumbbell,
        title: "Open Gym",
        description: "Boek sessie of kies een plan",
        href: "/nl/open-gym",
        accent: "text-emerald-600 bg-emerald-50",
      },
      {
        icon: Building2,
        title: "Studio Huren",
        description: "Boek per uur of koop een pakket",
        href: "/nl/studio-huren",
        accent: "text-purple-600 bg-purple-50",
      },
    ],
  },
  en: {
    label: "Book",
    categories: [
      {
        icon: Users,
        title: "Personal Trainer",
        description: "Free consultation",
        href: "/en/find-personal-trainer",
        accent: "text-blue-600 bg-blue-50",
      },
      {
        icon: Dumbbell,
        title: "Open Gym",
        description: "Book a session or pick a plan",
        href: "/en/open-gym",
        accent: "text-emerald-600 bg-emerald-50",
      },
      {
        icon: Building2,
        title: "Studio Rental",
        description: "Book by the hour or buy a pack",
        href: "/en/studio-rental",
        accent: "text-purple-600 bg-purple-50",
      },
    ],
  },
} as const;

export function Header() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const altLocale = getAlternateLocale(locale);
  const altPath = getAlternatePath(pathname);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = mainNav[locale];
  const moreItems = secondaryNav[locale];
  const booking = bookingMenu[locale];

  // Close menus when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
        setBookOpen(false);
      }
    }
    if (menuOpen || bookOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, bookOpen]);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setBookOpen(false);
  }, [pathname]);

  function handleBookClick() {
    setBookOpen(!bookOpen);
    setMenuOpen(false);
  }

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
    setBookOpen(false);
  }

  return (
    <header ref={menuRef} className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      <nav
        className={cn(
          "flex items-center justify-between px-4 py-2.5 sm:px-6",
          "rounded-[1.5rem] border border-border/50",
          "bg-background/82 backdrop-blur-xl",
          "shadow-brand-md transition-all duration-300"
        )}
      >
        {/* Logo */}
        <Link
          href={locale === "nl" ? "/" : "/en"}
          className="flex items-center"
        >
          <Image
            src="/images/logo-sculptclub.png"
            alt="SculptClub"
            width={120}
            height={9}
            className="h-3 sm:h-4 w-auto dark:invert"
            priority
          />
        </Link>

        {/* Right side: nav links + BOOK + language + hamburger */}
        <div className="flex items-center gap-1">
          {/* Desktop primary nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                  "hover:bg-accent",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* BOOK button — always visible, prominent */}
          <button
            onClick={handleBookClick}
            className={cn(
              "ml-1 px-4 py-1.5 rounded-full text-sm font-bold transition-all",
              "min-h-[36px] flex items-center gap-1.5",
              bookOpen
                ? "bg-foreground text-background"
                : "bg-brand text-white hover:bg-brand-dark"
            )}
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            {booking.label}
          </button>

          {/* Language toggle — desktop only */}
          <Link
            href={altPath}
            className="hidden md:flex items-center gap-1.5 ml-1 px-3 py-1.5 rounded-full bg-secondary border border-border/50 text-xs font-semibold text-muted-foreground hover:text-foreground hover:border-border transition-all"
            aria-label={altLocale === "en" ? "Switch to English" : "Schakel naar Nederlands"}
          >
            <Globe className="w-3.5 h-3.5" />
            {locale.toUpperCase()}
          </Link>

          {/* Hamburger menu */}
          <button
            onClick={handleMenuClick}
            className="p-2 -mr-2 ml-1 rounded-lg hover:bg-accent transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* ─── BOOK dropdown ─── */}
      <AnimatePresence>
        {bookOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "mt-2 rounded-[1.5rem] border border-border/50",
              "bg-background/95 backdrop-blur-xl",
              "shadow-brand-lg overflow-hidden"
            )}
          >
            <div className="p-2">
              {booking.categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-accent transition-colors group"
                >
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", cat.accent)}>
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground">{cat.title}</p>
                    <p className="text-xs text-muted-foreground">{cat.description}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground transition-colors shrink-0" />
                </Link>
              ))}
            </div>

            {/* Returning client link */}
            <div className="border-t border-border/50 px-5 py-3">
              <a
                href="https://secure.acuityscheduling.com/login/36720238"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-brand transition-colors"
              >
                <CalendarCheck className="w-3 h-3" />
                {locale === "nl" ? "Al lid? Mijn boekingen →" : "Already a member? My bookings →"}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Hamburger dropdown ─── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "mt-2 rounded-[1.5rem] border border-border/50",
              "bg-background/95 backdrop-blur-xl",
              "shadow-brand-lg p-4"
            )}
          >
            <div className="flex flex-col gap-1">
              {/* On mobile: show main nav items too */}
              <div className="md:hidden">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-3 py-2.5 rounded-lg text-base font-medium transition-colors",
                      "hover:bg-accent min-h-[44px] flex items-center",
                      pathname === item.href
                        ? "text-foreground bg-accent"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="my-2 border-t border-border/50" />
              </div>

              {/* Secondary nav — always visible in dropdown */}
              {moreItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2.5 rounded-lg text-sm transition-colors min-h-[44px] flex items-center",
                    "hover:bg-accent",
                    pathname === item.href
                      ? "text-foreground font-medium bg-accent"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <div className="my-2 border-t border-border/50" />

              {/* Language switch */}
              <Link
                href={altPath}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-accent transition-colors min-h-[44px] flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                {locale === "nl" ? "Nederlands" : "English"} → {altLocale === "en" ? "English" : "Nederlands"}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
