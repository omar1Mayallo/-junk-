import { NextRequest, NextResponse } from "next/server";
import { PagesURLs } from "@/shared/constants/pagesUrls";
const { LOGIN_URL, REGISTER_URL, LOGGED_IN_URL, UNAUTHORIZED_URL } = PagesURLs;

export default function middleware(req: NextRequest) {
  // _________________ AUTH_MIDDLEWARES _________________ //
  // @AUTH&URLs_STATE
  // User State
  const isLoggedIn = true; // ! Replace with your actual authentication check
  const hasPermission = true; // ! Replace with your actual permission check
  // Path State
  const path = req.nextUrl.pathname;
  const lastPath = req.nextUrl.searchParams.get("redirect") || "/";

  // @LOGIC
  // Case[1]: Redirect non-logged-in users trying to access other pages to login
  if (!isLoggedIn && ![LOGIN_URL, REGISTER_URL].includes(path)) {
    return NextResponse.redirect(new URL(LOGIN_URL, req.url));
  }

  // Case[2]: Redirect logged-in users trying to access login or register to logged-in page
  if (isLoggedIn && [LOGIN_URL, REGISTER_URL].includes(path)) {
    return NextResponse.redirect(new URL(LOGGED_IN_URL, req.url));
  }

  // Case[3]: Redirect logged-in users without permission, excluding the unauthorized page itself
  if (isLoggedIn && !hasPermission && path !== UNAUTHORIZED_URL) {
    const url = req.nextUrl.clone();
    url.pathname = UNAUTHORIZED_URL;
    url.searchParams.set("redirect", path); // set searchParams.redirect to the last path
    return NextResponse.redirect(url);
  }

  // Case[4]: Redirect logged-in users with permission, prevent the unauthorized page itself to home page
  if (isLoggedIn && hasPermission && path === UNAUTHORIZED_URL) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Continue to next middleware
  return NextResponse.next();
}

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   * - nextui (next ui library)
   * - meta (website meta data)
   */
  matcher: ["/((?!api|_next/static|_next/image|public|styles|nextui|meta).*)"],
};
