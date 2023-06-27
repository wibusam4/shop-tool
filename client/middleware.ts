import { NextRequest, NextResponse } from "next/server";

function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const role = request.cookies.get("role");
  if (request.nextUrl.pathname.startsWith("/auth") && token && role) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    (!token || !role || role?.value != "ADMIN")
  ) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export default middleware;
