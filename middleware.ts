import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  locales,
  defaultLocale,
  languageCodeToLocale,
} from "@/config/languages";

// Get the preferred locale from the request
function getLocale(request: NextRequest): string {
  // Check if the path already has a locale
  const pathname = request.nextUrl.pathname;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return pathname.split("/")[1];

  // Check the Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") || "";

  // First check specifically for Brazilian Portuguese
  if (acceptLanguage.includes("pt-BR") || acceptLanguage.includes("pt")) {
    return "pt";
  }

  // Then check for other supported languages
  const preferredLanguage = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim())
    .find((lang) => languageCodeToLocale[lang]);

  if (preferredLanguage) {
    return languageCodeToLocale[preferredLanguage];
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip if the request is for static files or API routes
  if (
    pathname.includes(".") || // Static files
    pathname.startsWith("/api/") || // API routes
    pathname.startsWith("/_next/") // Next.js internal routes
  ) {
    return NextResponse.next();
  }

  // Check if the path already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Get the locale based on user's language preference
  const locale = getLocale(request);

  // For Portuguese users at the root path, rewrite to /pt without changing the URL
  if (locale === "pt" && pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/pt";
    return NextResponse.rewrite(url);
  }

  // For all other cases, redirect to the locale path
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc)
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
