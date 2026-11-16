# Food Truck → The Street Bite app review

Reviewed against repository baseline `74b0045512949181c38d0a312ee06c5bf91f81eb`, its README, TESTING guide, original index.html, app.js and retained posting function. The original index is retained as owner.html. All original screen IDs, input IDs, data-screen destinations and inline fallback behavior are preserved. Added navigation entries make public-site and calendar reachable; no owner feature implementation was removed.

The public feature matrix is `/app-features`; see it for individual links and the distinction between working browser tools and original demo/integration limits. Live social posting, Square/Toast, AI menu conversion, calendar export, global community syncing and full database syncing are not newly claimed complete.

## App delivery

The PWA uses the existing Netlify project and database. `/app` rewrites to the retained owner shell. Homepage navigation and a dedicated app section link to open/install. `/install-app` supplies platform instructions, a native install prompt when supported, and browser fallback. Manifest has stable ID, standalone display, start URL, icons and shortcuts. It is an installable web app, not a store listing.

Service worker precaches only the public owner HTML and static assets. It does not intercept cross-origin requests, POSTs, Supabase, sign-in, reviews or public listing API requests. The existing Supabase browser SDK is vendored from the exact CDN URL previously used by the owner page (resolved 2.119.0) so the owner shell can load without an external script connection. The existing default local-storage keys and database remain unchanged.

Offline owner launch requires a successful first online visit and service-worker installation. Browser-local records are available on that same origin/device; server-backed actions need internet. Do not claim automatic background sync or data migration between hostnames. Cache version must be bumped whenever cached shell/assets change in a future release.

No new hosting project, database, paid search API, app-store account or subscription was added.

Browser validation found a pre-existing missing `truck-profile-special` field that stopped startup inside `loadTruckProfileForm`, before reports, community and calendar initialization. Restored the daily-special input expected by the existing script. Calendar and public-space navigation were also restored.
