This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or (recommended)
pnpm dev
# or (experimental)
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Environment Variables

You need the following environment variables:

<b>Cognito</b>

- COGNITO_ID
- COGNITO_CLIENT_ID
- COGNITO_CLIENT_SECRET

<b>NextAuth</b>

- NEXTAUTH_URL
- NEXTAUTH_SECRET

<b>Planetscale DB</b>

- DATABASE_HOST
- DATABASE_USERNAME
- DATABASE_PASSWORD
- DATABASE_URL

## I pulled latest changes and nothing works anymore

Stop the dev server, delete the `.next` folder and restart the dev server.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
