# The Street Bite launch — 2026-11-15

The existing MyFoodTruck project is retained. No new Netlify project, Render service, database, paid search API, or subscription is required.

## Public and owner entry points

- `/`: The Street Bite dining directory; exact five-digit US ZIP, text and place-type filters.
- `/list-business.html`: existing Supabase account sign-in/signup, public listing creation, editing and hiding.
- `/owner.html`: retained operator dashboard, planning and browser-local records.
- `/public-trucks.html`: redirects to the real directory. Sample profiles in the previous local directory are not published as real businesses.

Listings and reviews use `streetbite_listings` and `streetbite_reviews` in the existing project `vyjquxjxjywhrtihpzwk`. Existing tables and accounts are unchanged. The additive schema is recorded in `streetbite-directory.sql`; it was applied through Supabase migration `streetbite_public_directory`.

Public address, business description, website, reviewer display name and review text are public by design. Account email is not included in directory records. Owners can hide their own listing; reviews for hidden listings are unreadable through the public API. Owners cannot set ratings, create reviews of their own listings, or change listing ownership. Each signed-in diner can submit one review per place. No sample reviews or invented ratings are seeded.

## Validation

- JavaScript syntax checks for new directory script and retained owner script.
- Live database transaction test: owner listing creation; public read; authenticated diner review; rejected self-review; rejected second review; cross-owner edit affects zero rows; anonymous insert denied. All fixtures rolled back.
- Public Data API: ZIP search returned HTTP 200 with an empty array before any real listings were created.
- Browser: homepage, exact ZIP search empty state and business sign-in entry inspected.
- Database security advisor: no findings for the two new tables. Existing unrelated notices remain for `locations` (RLS enabled without policies) and disabled leaked-password protection.

## Hosting and preservation

Keep `myfoodtruck.netlify.app` as the technical project address and attach `thestreetbite.com` / `www.thestreetbite.com` as custom domains. This preserves the GoDaddy CNAME target, old links, deploy identity and retained hosting capacity. Consumer-facing branding is The Street Bite.

The previously scheduled team Free downgrade must remain in place. A new domain or listing alone is not additional verified savings. Free usage remains bounded by Netlify's account limits.

Browser storage and sign-in sessions are scoped to the website origin. Existing local-only owner records remain on `myfoodtruck.netlify.app`; changing domains cannot automatically transfer them. The retained owner app's existing export/import tools can transfer local records. Keep the old hostname accessible rather than forcing it to redirect to the new domain. Supabase account records stay in the same database.

Catalog / AVAVIC365 shared chat and email integration is a separate existing consolidation workstream. This directory does not claim those acceptance gates are complete.
