// import { createNextAuthMiddleware } from "nextjs-basic-auth-middleware";

// const options = { users: [{ name: "test1", password: "test1" }] };
// export const middleware = createNextAuthMiddleware(options);

// export const config = {
//   matcher: ["/(.*)"],
// };

// Uncomment this part to use second approach

import { NextResponse } from 'next/server';
import { nextBasicAuthMiddleware } from 'nextjs-basic-auth-middleware';

const options = { users: [{ name: 'test2', password: 'test2' }] };
export const middleware = (req: any) => {
  const NextResponse = nextBasicAuthMiddleware(options, req);

  // if (NextResponse.status === 401) {
  //   return NextResponse;
  // }
  return NextResponse;

  // Your other middleware functions here
  // return NextResponse.next();
};

export const config = {
  matcher: ['/(.*)'],
};
