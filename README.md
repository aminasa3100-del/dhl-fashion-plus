# DHL FASHION+

This project is a production-ready starter for the storefront. It includes RTL storefront pages, cart and checkout UI, admin routes, and Supabase-ready database schema.

## Prerequisites

- Node.js 18+
- NPM or PNPM
- A Supabase project

## Install

```bash
npm install
cp .env.example .env.local
```

## Required environment variables

Fill in your real values in `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
NEXT_PUBLIC_ADMIN_EMAIL=admin@example.com
```

## Supabase database setup

1. Create a Supabase project.
2. Open the SQL editor.
3. Run the SQL from `supabase/schema.sql`.
4. Create a login for the admin in Supabase Auth.
5. Ensure row-level security is enabled and configured for admin-only updates.

## Run locally

```bash
npm run dev
```

## Notes

- This project is designed to be safe and configurable for a real production deployment.
- Do not expose secrets in the frontend.
- The starter storefront products are examples; replace with real item data after uploading actual product photos and inventory.
- The checkout and admin flows require valid Supabase credentials and a configured database.
