# Food Truck Route Planner

Food Truck Route Planner is a browser-based MVP for food truck operators. It helps owners find event spaces, track check-ins and sales, monitor weather risk, plan weekly routes, manage applications, search suppliers, and collect public space listings.

## Current Testing Build

This build is a static web app. It can run from a local folder, a local server, Netlify, Vercel, Cloudflare Pages, or any static host.

Core files:

- `index.html` - app screens and forms
- `styles.css` - layout and responsive styles
- `app.js` - app behavior, local storage, Supabase calls, weather API, seed data
- `server.js` - optional local server
- `supabase-schema.sql` - database schema for the hosted test version
- `supabase-opportunities-seed.sql` - initial opportunity/location seed rows
- `TESTING.md` - tester instructions and feedback checklist

## Local Preview

From this folder, run:

```powershell
node server.js
```

Then open:

```text
http://localhost:3000
```

If Node is unavailable, opening `index.html` directly still works for most prototype features, but a local or hosted server is better for testing browser APIs and deployment behavior.

## Deployment

The fastest test deployment is Netlify:

1. Create a GitHub repository with these files.
2. Connect the repo to Netlify.
3. Use the project root as the publish directory.
4. No build command is needed.
5. Share the generated Netlify URL with testers.

This is also compatible with Vercel or Cloudflare Pages as a static site.

## Data Storage

The app currently uses two layers:

- Browser storage for immediate prototype features.
- Supabase for account/profile, locations, weekly plans, and sales check-ins where tables are available.

Before a real multi-user test, run `supabase-schema.sql` in Supabase, then run `supabase-opportunities-seed.sql`.

## External Services

- Supabase: authentication and database
- Open-Meteo: live weather and geocoding

Open-Meteo does not require an API key for this prototype.

## Tester Goal

Ask testers to behave like food truck owners:

- Find a location.
- Check weather.
- Save or check in at a spot.
- Track sales, costs, best sellers, and competitors.
- Review location history.
- Create a weekly plan.
- Add a supplier partner or public space listing.
- Report anything confusing or missing.
