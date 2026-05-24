const truckSearch = document.querySelector("#truck-search");
const truckCitySearch = document.querySelector("#truck-city-search");
const truckCuisineFilter = document.querySelector("#truck-cuisine-filter");
const truckDirectorySummary = document.querySelector("#truck-directory-summary");
const truckDirectoryGrid = document.querySelector("#truck-directory-grid");

const truckProfileKey = "foodTruckAiTruckProfiles";

const sampleTruckProfiles = [
  {
    id: "lowell-bites-lowell-ma",
    truckName: "Lowell Bites",
    city: "Lowell, MA",
    cuisine: "Tacos",
    vendorType: "Food truck",
    ownerName: "Maria Lopez",
    contactUrl: "https://example.com/book-lowell-bites",
    socialLinks: ["Instagram: https://example.com/lowell-bites"],
    tagline: "Bold street tacos, made from family recipes.",
    description: "Street tacos, rice bowls, and private event catering across northern Massachusetts and southern New Hampshire.",
    uniqueDetails: "Family recipes, slow-braised meats, and locally sourced tortillas.",
    dailySpecial: "Birria taco trio with street corn for $16",
    signatureDishes: ["Birria tacos", "Chicken verde bowl", "Street corn cups"],
    dietaryOptions: ["Vegetarian options", "Gluten-free bowls"],
    priceRange: "$$",
    menuUrl: "https://example.com/book-lowell-bites/menu",
    calendarItems: ["Friday 5-9 PM - Mill City Night Market", "Saturday 12-4 PM - Brewery Patio Series"],
    imageUrls: ["https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=900&q=80"],
    deliveryLinks: ["Uber Eats: https://example.com/uber-lowell-bites"],
    paymentTypes: ["Cash", "Credit cards", "Apple Pay"],
    publishedAt: new Date().toISOString()
  },
  {
    id: "seacoast-smokehouse-portsmouth-nh",
    truckName: "Seacoast Smokehouse",
    city: "Portsmouth, NH",
    cuisine: "BBQ",
    vendorType: "Trailer",
    contactUrl: "https://example.com/seacoast-smokehouse",
    tagline: "Seacoast smoke, low and slow.",
    description: "Smoked brisket, pulled pork, ribs, and event catering for breweries, private parties, and waterfront festivals.",
    uniqueDetails: "Wood-fired smoke, scratch sauces, and coastal New England comfort food.",
    dailySpecial: "Pulled pork mac bowl with cornbread for $15",
    signatureDishes: ["Brisket sandwich", "Pulled pork mac bowl", "Smoked wings"],
    dietaryOptions: ["Gluten-free sauces"],
    priceRange: "$$",
    menuUrl: "https://example.com/seacoast-smokehouse/menu",
    calendarItems: ["Thursday 4-8 PM - Portsmouth Brewery Row", "Saturday 11 AM-5 PM - Seacoast Market"],
    imageUrls: ["https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=80"],
    deliveryLinks: ["DoorDash: https://example.com/doordash-seacoast"],
    paymentTypes: ["Cash", "Credit cards", "Google Pay"],
    publishedAt: new Date().toISOString()
  },
  {
    id: "granite-coffee-manchester-nh",
    truckName: "Granite Coffee Cart",
    city: "Manchester, NH",
    cuisine: "Coffee",
    vendorType: "Food cart",
    contactUrl: "https://example.com/granite-coffee",
    tagline: "Small cart, serious espresso.",
    description: "Mobile espresso, cold brew, pastries, and morning event service for offices, markets, and festivals.",
    uniqueDetails: "Locally roasted beans, fast morning service, and custom drink specials.",
    dailySpecial: "Maple latte and lemon scone combo for $9",
    signatureDishes: ["Maple latte", "Cold brew", "Breakfast hand pies"],
    dietaryOptions: ["Dairy-free milks"],
    priceRange: "$",
    menuUrl: "https://example.com/granite-coffee/menu",
    calendarItems: ["Wednesday 7-11 AM - Elm Street Offices", "Sunday 9 AM-1 PM - Farmers Market"],
    imageUrls: ["https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80"],
    deliveryLinks: [],
    paymentTypes: ["Credit cards", "Apple Pay", "Venmo"],
    publishedAt: new Date().toISOString()
  }
];

function getSavedTruckProfiles() {
  try {
    const savedProfiles = JSON.parse(window.localStorage.getItem(truckProfileKey) || "[]");
    return Array.isArray(savedProfiles) ? savedProfiles : [];
  } catch (error) {
    return [];
  }
}

function getTruckProfiles() {
  const savedProfiles = getSavedTruckProfiles();
  return savedProfiles.length ? savedProfiles : sampleTruckProfiles;
}

function normalizeText(value) {
  return String(value || "").toLowerCase().trim();
}

function profileMatches(profile) {
  const query = normalizeText(truckSearch.value);
  const cityQuery = normalizeText(truckCitySearch.value);
  const cuisine = truckCuisineFilter.value;
  const searchText = [
    profile.truckName,
    profile.city,
    profile.cuisine,
    profile.vendorType,
    profile.tagline,
    profile.description,
    profile.uniqueDetails,
    (profile.signatureDishes || []).join(" "),
    (profile.dietaryOptions || []).join(" "),
    (profile.keywords || []).join(" "),
    (profile.hashtags || []).join(" "),
    profile.menuUrl,
    profile.menuFileName,
    (profile.deliveryLinks || []).join(" "),
    (profile.paymentTypes || []).join(" "),
    (profile.calendarItems || []).join(" ")
  ]
    .join(" ")
    .toLowerCase();
  const matchesQuery = !query || searchText.includes(query);
  const matchesCity = !cityQuery || normalizeText(profile.city).includes(cityQuery);
  const matchesCuisine = cuisine === "all" || normalizeText(profile.cuisine).includes(normalizeText(cuisine));

  return matchesQuery && matchesCity && matchesCuisine;
}

function renderImages(profile) {
  const imageUrls = (profile.imageUrls || []).slice(0, 3);
  const imageFileNames = (profile.imageFileNames || []).slice(0, 3);

  if (imageUrls.length === 0) {
    return imageFileNames.length
      ? `<div class="truck-photo-placeholder">Photos added: ${imageFileNames.join(", ")}</div>`
      : `<div class="truck-photo-placeholder">No photos yet</div>`;
  }

  return `
    <div class="truck-photo-strip">
      ${imageUrls.map((url) => `<img src="${url}" alt="${profile.truckName} food truck photo">`).join("")}
    </div>
  `;
}

function renderList(title, items, emptyText) {
  const visibleItems = (items || []).slice(0, 5);

  return `
    <div class="profile-mini-list">
      <span>${title}</span>
      ${visibleItems.length ? visibleItems.map((item) => `<p>${item}</p>`).join("") : `<p>${emptyText}</p>`}
    </div>
  `;
}

function renderLinks(title, items, emptyText) {
  const visibleItems = (items || []).slice(0, 5);

  return `
    <div class="profile-mini-list">
      <span>${title}</span>
      ${
        visibleItems.length
          ? visibleItems.map((item) => {
              const parts = String(item).split(": ");
              const href = parts.length > 1 ? parts.slice(1).join(": ") : item;
              const label = parts.length > 1 ? parts[0] : item;
              return href.startsWith("http") ? `<a class="source-link" href="${href}" target="_blank">${label}</a>` : `<p>${item}</p>`;
            }).join("")
          : `<p>${emptyText}</p>`
      }
    </div>
  `;
}

function renderTruckDirectory() {
  const profiles = getTruckProfiles().filter(profileMatches);

  truckDirectorySummary.textContent = `${profiles.length} food truck${profiles.length === 1 ? "" : "s"} found.`;
  truckDirectoryGrid.innerHTML = profiles.length
    ? profiles
        .map(
          (profile) => `
            <article class="truck-directory-card">
              ${renderImages(profile)}
              <div class="truck-card-body">
                <div class="truck-card-badges">
                  <span>${profile.vendorType || "Food truck"}</span>
                  <span>${profile.priceRange || "$$"}</span>
                  <span>${profile.eventsAvailable || "Events"}</span>
                </div>
                <p class="eyebrow">${profile.cuisine || "Food truck"}</p>
                <h2>${profile.truckName}</h2>
                ${profile.tagline ? `<p><strong>${profile.tagline}</strong></p>` : ""}
                <p><strong>${profile.city || "New England"}</strong></p>
                ${profile.dailySpecial ? `<div class="daily-special-card"><span>Daily Special</span><strong>${profile.dailySpecial}</strong></div>` : ""}
                <p>${profile.description || "No service description added yet."}</p>
                ${profile.uniqueDetails ? `<p>${profile.uniqueDetails}</p>` : ""}
                ${renderList("Signature Dishes", profile.signatureDishes, "No signature dishes posted yet.")}
                <div class="profile-mini-list">
                  <span>Menu</span>
                  ${profile.menuUrl ? `<a class="source-link" href="${profile.menuUrl}" target="_blank">Open menu</a>` : `<p>${profile.menuFileName || "No menu posted yet."}</p>`}
                </div>
                ${renderList("Dietary Options", profile.dietaryOptions, "Dietary options not listed yet.")}
                ${renderList("Upcoming Stops", profile.calendarItems, "No public calendar posted yet.")}
                ${profile.liveLocationUrl ? `<a class="source-link" href="${profile.liveLocationUrl}" target="_blank">Real-time location</a>` : ""}
                ${profile.eventsAvailable ? `<p><strong>Events:</strong> ${profile.eventsAvailable}${profile.eventTypes ? ` - ${profile.eventTypes}` : ""}</p>` : ""}
                ${renderList("Delivery", profile.deliveryLinks, "No delivery links posted yet.")}
                ${renderList("Payments", profile.paymentTypes, "Payment types not listed yet.")}
                ${profile.preorderOptions ? `<p><strong>Pre-order:</strong> ${profile.preorderOptions}</p>` : ""}
                ${renderLinks("Social", profile.socialLinks, "No social links posted yet.")}
                ${profile.promotions ? `<div class="daily-special-card"><span>Offer</span><strong>${profile.promotions}</strong></div>` : ""}
                ${renderList("Seasonal Specials", profile.seasonalSpecials, "No seasonal specials posted yet.")}
                ${renderList("Reviews", profile.testimonials, "No testimonials posted yet.")}
                ${profile.videoUrl ? `<a class="source-link" href="${profile.videoUrl}" target="_blank">Video intro</a>` : ""}
                ${profile.cateringMenuUrl ? `<a class="source-link" href="${profile.cateringMenuUrl}" target="_blank">Catering menu</a>` : ""}
                ${profile.phone ? `<p><strong>Phone:</strong> ${profile.phone}</p>` : ""}
                ${profile.email ? `<p><strong>Email:</strong> ${profile.email}</p>` : ""}
                ${profile.contactUrl ? `<a class="primary button-link" href="${profile.contactUrl}" target="_blank">Book or Contact</a>` : ""}
              </div>
            </article>
          `
        )
        .join("")
    : `<article class="feature-panel"><h2>No trucks found</h2><p>Try a different city, food type, or menu search.</p></article>`;
}

[truckSearch, truckCitySearch, truckCuisineFilter].forEach((control) => {
  control.addEventListener("input", renderTruckDirectory);
  control.addEventListener("change", renderTruckDirectory);
});

renderTruckDirectory();
