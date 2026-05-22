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
    contactUrl: "https://example.com/book-lowell-bites",
    description: "Street tacos, rice bowls, and private event catering across northern Massachusetts and southern New Hampshire.",
    dailySpecial: "Birria taco trio with street corn for $16",
    menuItems: ["Birria tacos", "Chicken verde bowl", "Street corn cups", "Agua fresca"],
    calendarItems: ["Friday 5-9 PM - Mill City Night Market", "Saturday 12-4 PM - Brewery Patio Series"],
    imageUrls: ["https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=900&q=80"],
    publishedAt: new Date().toISOString()
  },
  {
    id: "seacoast-smokehouse-portsmouth-nh",
    truckName: "Seacoast Smokehouse",
    city: "Portsmouth, NH",
    cuisine: "BBQ",
    contactUrl: "https://example.com/seacoast-smokehouse",
    description: "Smoked brisket, pulled pork, ribs, and event catering for breweries, private parties, and waterfront festivals.",
    dailySpecial: "Pulled pork mac bowl with cornbread for $15",
    menuItems: ["Brisket sandwich", "Pulled pork mac bowl", "Smoked wings", "Cornbread"],
    calendarItems: ["Thursday 4-8 PM - Portsmouth Brewery Row", "Saturday 11 AM-5 PM - Seacoast Market"],
    imageUrls: ["https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=80"],
    publishedAt: new Date().toISOString()
  },
  {
    id: "granite-coffee-manchester-nh",
    truckName: "Granite Coffee Cart",
    city: "Manchester, NH",
    cuisine: "Coffee",
    contactUrl: "https://example.com/granite-coffee",
    description: "Mobile espresso, cold brew, pastries, and morning event service for offices, markets, and festivals.",
    dailySpecial: "Maple latte and lemon scone combo for $9",
    menuItems: ["Maple latte", "Cold brew", "Breakfast hand pies", "Lemon scones"],
    calendarItems: ["Wednesday 7-11 AM - Elm Street Offices", "Sunday 9 AM-1 PM - Farmers Market"],
    imageUrls: ["https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80"],
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
    profile.description,
    (profile.menuItems || []).join(" "),
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

  if (imageUrls.length === 0) {
    return `<div class="truck-photo-placeholder">No photos yet</div>`;
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
                  <span>Menu</span>
                  <span>Schedule</span>
                  <span>Booking</span>
                </div>
                <p class="eyebrow">${profile.cuisine || "Food truck"}</p>
                <h2>${profile.truckName}</h2>
                <p><strong>${profile.city || "New England"}</strong></p>
                ${profile.dailySpecial ? `<div class="daily-special-card"><span>Daily Special</span><strong>${profile.dailySpecial}</strong></div>` : ""}
                <p>${profile.description || "No service description added yet."}</p>
                ${renderList("Menu", profile.menuItems, "No menu posted yet.")}
                ${renderList("Upcoming Stops", profile.calendarItems, "No public calendar posted yet.")}
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
