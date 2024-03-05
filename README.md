# A SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe 
<img width="1509" alt="Screenshot 2024-03-05 at 11 56 57 AM" src="https://github.com/athrala/AI-SaaS-Content-Generation-Platform/assets/110925591/39ae035b-fc04-4332-835b-39507db0fedb">


This is a repository for Build a SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe.


Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Clerk Authentication (Email, Google, 9+ Social Logins)
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Image Generation Tool (Open AI)
- Video Generation Tool (Replicate AI)
- Conversation Generation Tool (Open AI)
- Music Generation Tool (Replicate AI)
- Page loading state
- Stripe monthly subscription
- Free tier with API limiting
- How to write POST, DELETE, and GET routes in route handlers (app/api)
- How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
- How to handle relations between Server and Child components!
- How to reuse layouts
- Folder structure in Next 13 App Router

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/athrala/AI-SaaS-Content-Generation-Platform.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |

## Feature demos
<img width="1494" alt="Screenshot 2024-03-05 at 11 57 29 AM" src="https://github.com/athrala/AI-SaaS-Content-Generation-Platform/assets/110925591/55b332b5-2ec4-4e41-85ab-74c5b49d9c57">

<img width="1499" alt="Screenshot 2024-03-05 at 11 57 50 AM" src="https://github.com/athrala/AI-SaaS-Content-Generation-Platform/assets/110925591/18f192b1-e8fd-4eef-bcd5-4e5658c2265f"><img width="1500" alt="Screenshot 2024-03-05 at 11 58 16 AM" src="https://github.com/athrala/AI-SaaS-Content-Generation-Platform/assets/110925591/fec8abf5-e46b-4d58-a851-30fac181c527">
<img width="1500" alt="Screenshot 2024-03-05 at 11 59 17 AM" src="https://github.com/athrala/AI-SaaS-Content-Generation-Platform/assets/110925591/3ce482fa-e96d-459c-a1fb-4d0e68ac733c">
<img width="1502" alt="Screenshot 2024-03-05 at 11 58 44 AM" src="https://github.com/athrala/AI-SaaS-Content-Generation-Platform/assets/110925591/77385133-891b-458b-a2a3-86e936a8251b">
<img width="1495" alt="Screenshot 2024-03-05 at 11 58 32 AM" src="https://github.com/athrala/AI-SaaS-Content-Generation-Platform/assets/110925591/13ee77a8-46b1-4201-ab59-8acd2852a9fd">

