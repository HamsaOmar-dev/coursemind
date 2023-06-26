import { NextRequest, NextResponse } from "next/server";

async function apiAccess(req: NextRequest, res: NextResponse) {
  const authorizedOrigins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://coursemind-blush.vercel.app",
  ];
  if (
    req.nextUrl.pathname.startsWith("/api") &&
    !authorizedOrigins.includes(req.nextUrl.origin)
  ) {
    console.log("Origin Unauthorized");
    return NextResponse.json("Origin Unauthorized");
  }
  return NextResponse.next();
}

export default apiAccess;
