"use client";

import { useSearchParams } from "next/navigation";

import type { Locale } from "./config";
import { i18n } from "./config";

/**
 * Get current locale from URL search params (Client Component hook)
 * @returns Locale
 * 
 * @example
 * "use client";
 * function MyComponent() {
 *   const locale = useLocale();
 *   // Use locale...
 * }
 */
export function useLocale(): Locale {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang");

  if (lang && i18n.locales.includes(lang as Locale)) {
    return lang as Locale;
  }

  return i18n.defaultLocale;
}
