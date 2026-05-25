# Check In & Broadcast MVP

The first tester version should be a simple 3-screen mobile web app:

1. Daily Recommendation
2. Social Media Preview
3. Success Dashboard

## Screen 1: Daily Recommendation

This is the first screen the truck owner sees at the start of a shift.

- Dynamic greeting, such as "Good morning, Lowell Bites!"
- AI suggestion card with the recommended location, weather summary, best time, and score
- Alternative dropdown for saved locations
- Primary CTA: "Accept & Generate Posts"

Behind the scenes:

- Fetch weather by zip code or home city.
- If weather is good, recommend the primary outdoor spot.
- If weather is bad, recommend the backup indoor, brewery, or covered spot.
- Send weather, location, and truck profile into an OpenAI prompt to create a friendly recommendation summary.

## Screen 2: Social Media Preview

This appears after the owner accepts the recommendation.

- Editable Instagram caption
- Editable Facebook caption
- Editable Google Business Profile / Maps update
- Optional food photo upload
- Primary CTA: "Approve & Blast Socials"

Behind the scenes:

- Send selected location, date, time, weather, menu, and truck profile to OpenAI.
- Return clean JSON with three captions:
  - Instagram: casual, hashtag-heavy, owner-friendly
  - Facebook: clear, informational, cross-street/location friendly
  - Google: short, direct, focused on address and hours

## Screen 3: Success Dashboard

This appears after the owner approves the posts.

- Green success check
- "Truck Status: Broadcasted!"
- Live links to social profiles
- Current active location and service window
- Secondary action to close early or change location

Behind the scenes:

- Send the approved posts and optional image to Ayrshare or Buffer.
- Let the middleware handle Instagram, Facebook, and Google Business authentication.
- Save the current live location to the database.
- Show the success dashboard only after the posting API returns success.

## Technical Architecture Checklist

- Frontend: Mobile-first responsive web app. Next.js / React or Tailwind CSS is preferred for rapid styling. No native app wrapper is needed for the MVP.
- Backend: Node.js or Python serverless functions to handle API routing.
- Database: Supabase or Firebase to store basic user profiles, truck menu themes, saved baseline locations, current live location, and broadcast history.
- Authentication: Clerk or Supabase Auth. Magic Link or Google Login is preferred for effortless mobile onboarding.
- Weather: OpenWeatherMap API.
- GenAI: OpenAI API using a fast, affordable model such as `gpt-4o-mini`.
- Social posting pipeline: Ayrshare API or Buffer API. Do not build individual social OAuth connections from scratch for the MVP.

## Current Prototype Status

The current static prototype includes the full 3-screen UI and local demo behavior:

- It recommends a location from the existing location data.
- It generates editable captions in the browser.
- It saves broadcast status locally.
- It does not yet call OpenAI, OpenWeatherMap, Ayrshare, or Buffer.
