# Tester Guide

Use this checklist to test the Food Truck Route Planner MVP.

## Suggested Test Flow

1. Open the app.
2. Start on **Dashboard**.
3. Review the best recommendation.
4. Click **Start Broadcast** to open the full flow, or **Accept & Generate Posts** to jump straight to caption review.
5. Pick another saved location if the recommendation is not right.
6. Review and edit the Instagram, Facebook, and Google Business captions.
7. Optionally attach a food photo.
8. Click **Approve & Blast Socials**.
9. Confirm the success screen shows the truck as active at the location.
10. Use **Close up early / Change location** and repeat the flow.

## Secondary Test Flow

After testing the core broadcast flow:

1. Go to **Find Locations**.
2. Review a few opportunities.
3. Open a location detail page.
4. Add a location to the route plan.
5. Go to **Sales Log**.
6. Start the service timer.
7. Enter sales, costs, best sellers, competitors, and notes.
8. Stop and save the check-in.
9. Return to **Find Locations** and confirm the location history appears.
10. Go to **Reports** and confirm the sales data appears.

## Feedback Questions

- What screen felt most useful?
- What screen felt confusing?
- Could you understand why a location was recommended?
- Was the check-in timer clear?
- Would you use profit per hour while working?
- What supplier categories are missing?
- What permit/application fields are missing?
- Would you trust the weekly recommendation?
- What would stop you from using this weekly?
- What would you pay for, if anything?

## Known MVP Limits

- Route distance is an estimate, not live map routing yet.
- Some data is still browser-local until all Supabase syncing is completed.
- Weather uses city-level current weather, not exact truck coordinates.
- Public listings are saved locally in this prototype.
- Affiliate links are owner-entered and not validated yet.

## Bug Report Format

Please collect:

- Device and browser
- Page/screen
- What you clicked or typed
- What you expected
- What happened
- Screenshot if possible
