import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ru", "uz", "oz"],

  // Used when no locale matches
  defaultLocale: "ru",
  // localePrefix: "never",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|ru|uz|oz)/:path*"],
};
