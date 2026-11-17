# Creator release — November 16, 2026

Uses the retained Supabase database/authentication and Netlify site. No new paid services.

Public profiles are opt-in. The directory and recent feed contain only published profiles and public reviews; there are no seeded creators, fabricated endorsements or follower rankings. Existing reviews remain public if a profile is hidden, until the author hides each review separately. Studio explains this distinction.

Dish-specific Heat and Richness are optional integers 0–5, separate from overall stars. These are subjective descriptions, not allergy or dietary guarantees. One review per account/business and no self-reviews remain enforced. Authors can edit or withdraw reviews. Hidden reviews are excluded from nearby rating aggregates, including for their authors.

TikTok/Instagram URLs are restricted to supported HTTPS profile/post shapes, query parameters are stripped, and links open the original platform. No embedded trackers, scraping or automated cross-posting. Public profiles are self-managed, not independently verified. Disclosure distinguishes no benefit, complimentary food and paid partnerships.

Apply streetbite-creators.sql after the existing discovery/live-location schema. Hosted migrations applied with Supabase apply_migration. scripts/test-creators.sql uses transaction-scoped fixtures and rolls back; passed privacy, role, range, URL, ownership and withdrawal checks. Frontend URL normalization and JS syntax checks passed. Full sign-in/email delivery with a real creator account was not exercised.

Existing advisor notices remain: legacy locations table has RLS with no policy (deny by default); leaked-password protection is disabled. No new creator-table security advisories.
