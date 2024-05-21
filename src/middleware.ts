import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "de"],
  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "as-needed",
});

/*
DONT TRY THIS, IT DOES NOT WORK ATM!

export const config = {
  matcher: ["/", `/(${locales.join("|")})/:path*`],
};
*/

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(de|en)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|api|.*\\..*).*)",
  ],
};
