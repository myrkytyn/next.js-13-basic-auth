import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

const options = { users: [{ name: "test", password: "test" }] };
export const middleware = createNextAuthMiddleware(options);

export const config = {
  matcher: ["/(.*)"],
};



// Uncomment this part to use second approach

/*
import { NextResponse } from 'next/server';
import { nextBasicAuthMiddleware } from 'nextjs-basic-auth-middleware'

const options = {users: [{ name: "test", password: "test" }]};
export const middleware = (req: any) => {
    nextBasicAuthMiddleware(options, req)
    return NextResponse.next()
}

export const config = {
    matcher: ['/(.*)'],
}
*/