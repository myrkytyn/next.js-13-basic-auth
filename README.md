# Next.JS 13 basic auth test

## About
Basic Authentication is a method for an HTTP user agent (e.g., a web browser) to provide a username and password when making a request. 

There is a next.js project created with create-next-app to test basic  auth functionality using middleware function.

What was modified or added:
- Added [nextjs-basic-auth-middleware](https://github.com/labd/nextjs-basic-auth-middleware) module
- Added middlware.ts file.

## Getting Started


```bash
# install dependencies 
npm i 

# run development server
npm run dev
```
Go to your browser to [localhost:3000/](localhost:3000/) and you will see pop-up asking credentials like this
image.png

Username - test,
Password - test

## Problem
I need to have bigger middleware function with additional rules. So I tried to use nextBasicAuthMiddleware function. But with this function basic auth doesn't work.

Check out middleware.ts for more details.

How to achieve basic auth with nextBasicAuthMiddleware function?
