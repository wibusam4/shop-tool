import { NextRequest, NextResponse } from "next/server";

function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const role = request.cookies.get("role");
  if (startsWith("/auth", request) && token && role) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (startsWith("/admin", request) && (!token || !role || role?.value != "ADMIN")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if ((startsWith("/user", request) || startsWith("/recharge", request)) && (!token || !role)) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export default middleware;

const startsWith = (pathname: string, request: NextRequest) => {
  return request.nextUrl.pathname.startsWith(pathname);
};
