import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { NextResponse } from 'next/server'

export function proxy(request) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
export const config = {
  matcher: '/about',
}