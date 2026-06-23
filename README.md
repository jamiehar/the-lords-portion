# The Lord's Portion

A Father's Day field-dossier escape room, built with Next.js 14 (App Router) and Tailwind CSS. Players read scripture-based clues, decode ciphers, and unlock five sequential chapters until the final vault opens with a personalized family tribute.

There is no backend — every answer is checked client-side against hardcoded strings, and chapter-unlock progress is persisted to `localStorage` so players can close the tab and resume later.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The dossier starts at `/` and proceeds through `/briefing` → `/wall` → `/merchant` → `/test` → `/escape`. Locked chapters redirect to a "chamber not yet open" notice until the prior puzzle is solved.

To reset progress during testing, use the small "reset" link in the footer of any page (clears all `unlocked_*` keys from `localStorage`).

## Deploying to Vercel

1. Push this repository to GitHub (already done if you're reading this from the deployed repo).
2. Go to [vercel.com/new](https://vercel.com/new) and import the `the-lords-portion` repository.
3. Leave the default Next.js build settings as-is — no environment variables are required.
4. Deploy. Vercel will rebuild automatically on every push to `main`.

## Game Master page

`/gm` is a hidden, password-protected page (not linked from any navigation, sitemap, or `robots.txt`) containing every puzzle answer, the unlock logic, and the full hint text for the person running the event. The password is gated by a prompt, and the authenticated session is stored in `sessionStorage`, so reopening the page in a new tab requires re-entering the password.
