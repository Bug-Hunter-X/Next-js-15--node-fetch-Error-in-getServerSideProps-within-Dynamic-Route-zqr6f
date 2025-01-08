# Next.js 15 - node-fetch Issue in getServerSideProps

This repository demonstrates a bug encountered when using `node-fetch` within `getServerSideProps` in a Next.js 15 application, specifically within a dynamic route. The issue stems from `node-fetch` attempting to access a global object that isn't available in the serverless function environment.

## Steps to Reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.  You'll observe an error indicating a missing global object.

## Solution

The solution involves using the `next/server` API's `NextResponse` object and replacing `node-fetch` with the browser's built-in `fetch` function.