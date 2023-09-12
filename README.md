## Friends chat app

I created this application out of curiosity to try the latest version of next js and use websocket
Here the user can add other users, write them a message.

## Getting Started

#### Installation

First of all, clone app from here to you device:

```bash
  git clone https://github.com/GedasIncirauskas/chat-app.git
```

Install dependencies

```bash
  npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- Next js,
- TypeScript
- TailwindCSS,
- Redis

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`UPSTASH_REDIS_REST_URL`

`UPSTASH_REDIS_REST_TOKEN`

`GOOGLE_CLIENT_ID`

`GOOGLE_CLIENT_SECRET`

`NEXTAUTH_SECRET`

`PUSHER_APP_ID`

`NEXT_PUBLIC_PUSHER_APP_KEY`

`PUSHER_APP_SECRET`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
