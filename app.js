const screens = document.querySelectorAll(".screen");
const navItems = document.querySelectorAll(".nav-item");
const navToggle = document.querySelector("#nav-toggle");
const resultList = document.querySelector("#results-list");
const zipCode = document.querySelector("#zip-code");
const findStartDate = document.querySelector("#find-start-date");
const findEndDate = document.querySelector("#find-end-date");
const showAllLocations = document.querySelector("#show-all-locations");
const showSavedLocations = document.querySelector("#show-saved-locations");
const accountStatus = document.querySelector("#account-status");
const planStatus = document.querySelector("#plan-status");
const weeklyPlanBody = document.querySelector("#weekly-plan-body");
const routePlanPeriod = document.querySelector("#route-plan-period");
const routePlanStart = document.querySelector("#route-plan-start");
const routePlanEnd = document.querySelector("#route-plan-end");
const planRouteMapTitle = document.querySelector("#plan-route-map-title");
const planRouteMap = document.querySelector("#plan-route-map");
const planRouteMileageTotal = document.querySelector("#plan-route-mileage-total");
const planRouteLegList = document.querySelector("#plan-route-leg-list");
const planRouteVendorList = document.querySelector("#plan-route-vendor-list");
const databaseStatus = document.querySelector("#database-status");
const resultsSummary = document.querySelector("#results-summary");
const checkinLocation = document.querySelector("#checkin-location");
const checkinDate = document.querySelector("#checkin-date");
const checkinStart = document.querySelector("#checkin-start");
const checkinEnd = document.querySelector("#checkin-end");
const checkinSales = document.querySelector("#checkin-sales");
const checkinCosts = document.querySelector("#checkin-costs");
const checkinBestSellers = document.querySelector("#checkin-best-sellers");
const checkinCompetitors = document.querySelector("#checkin-competitors");
const checkinNotes = document.querySelector("#checkin-notes");
const checkinVisible = document.querySelector("#checkin-visible");
const checkinContact = document.querySelector("#checkin-contact");
const checkinStatus = document.querySelector("#checkin-status");
const checkinHistoryBody = document.querySelector("#checkin-history-body");
const timerElapsed = document.querySelector("#timer-elapsed");
const timerRate = document.querySelector("#timer-rate");
const customLocationName = document.querySelector("#custom-location-name");
const customLocationCity = document.querySelector("#custom-location-city");
const customLocationType = document.querySelector("#custom-location-type");
const customLocationTime = document.querySelector("#custom-location-time");
const customLocationScore = document.querySelector("#custom-location-score");
const customLocationSource = document.querySelector("#custom-location-source");
const customLocationNotes = document.querySelector("#custom-location-notes");
const customLocationStatus = document.querySelector("#custom-location-status");
const supplierQuery = document.querySelector("#supplier-query");
const supplierCategory = document.querySelector("#supplier-category");
const supplierSummary = document.querySelector("#supplier-summary");
const supplierList = document.querySelector("#supplier-list");
const partnerName = document.querySelector("#partner-name");
const partnerCategory = document.querySelector("#partner-category");
const partnerCity = document.querySelector("#partner-city");
const partnerProducts = document.querySelector("#partner-products");
const partnerLink = document.querySelector("#partner-link");
const partnerCommission = document.querySelector("#partner-commission");
const partnerNotes = document.querySelector("#partner-notes");
const partnerStatus = document.querySelector("#partner-status");
const publicListingSummary = document.querySelector("#public-listing-summary");
const publicListingGrid = document.querySelector("#public-listing-grid");
const publicSpaceName = document.querySelector("#public-space-name");
const publicSpaceCity = document.querySelector("#public-space-city");
const publicSpaceType = document.querySelector("#public-space-type");
const publicSpaceTime = document.querySelector("#public-space-time");
const publicSpaceFee = document.querySelector("#public-space-fee");
const publicSpaceLink = document.querySelector("#public-space-link");
const publicSpaceNotes = document.querySelector("#public-space-notes");
const publicListingStatus = document.querySelector("#public-listing-status");
const truckProfileName = document.querySelector("#truck-profile-name");
const truckProfileCity = document.querySelector("#truck-profile-city");
const truckProfileCuisine = document.querySelector("#truck-profile-cuisine");
const truckProfileLink = document.querySelector("#truck-profile-link");
const truckProfileDescription = document.querySelector("#truck-profile-description");
const truckProfileSpecial = document.querySelector("#truck-profile-special");
const truckProfileMenu = document.querySelector("#truck-profile-menu");
const truckProfileMenuFile = document.querySelector("#truck-profile-menu-file");
const truckMenuToolsStatus = document.querySelector("#truck-menu-tools-status");
const truckProfileCalendar = document.querySelector("#truck-profile-calendar");
const truckProfileImages = document.querySelector("#truck-profile-images");
const truckProfileStatus = document.querySelector("#truck-profile-status");
const truckProfilePreview = document.querySelector("#truck-profile-preview");
const homeBase = document.querySelector("#home-base");
const routePeriod = document.querySelector("#route-period");
const aiWeekTitle = document.querySelector("#ai-week-title");
const aiWeekCopy = document.querySelector("#ai-week-copy");
const routeEstimateTitle = document.querySelector("#route-estimate-title");
const routeEstimateCopy = document.querySelector("#route-estimate-copy");
const calendarList = document.querySelector("#calendar-list");
const routeMapTitle = document.querySelector("#route-map-title");
const routeMap = document.querySelector("#route-map");
const routeMileageTotal = document.querySelector("#route-mileage-total");
const routeLegList = document.querySelector("#route-leg-list");
const routeVendorList = document.querySelector("#route-vendor-list");
const opsLocation = document.querySelector("#ops-location");
const opsStatus = document.querySelector("#ops-status");
const opsDeadline = document.querySelector("#ops-deadline");
const opsFee = document.querySelector("#ops-fee");
const opsWebpage = document.querySelector("#ops-webpage");
const opsDocuments = document.querySelector("#ops-documents");
const opsDocumentUpload = document.querySelector("#ops-document-upload");
const opsPhotoUpload = document.querySelector("#ops-photo-upload");
const opsNotes = document.querySelector("#ops-notes");
const opsDetailTitle = document.querySelector("#ops-detail-title");
const opsAiSummary = document.querySelector("#ops-ai-summary");
const opsAiSummaryOutput = document.querySelector("#ops-ai-summary-output");
const opsReminderTitle = document.querySelector("#ops-reminder-title");
const opsReminderDate = document.querySelector("#ops-reminder-date");
const opsStatusMessage = document.querySelector("#ops-status-message");
const opsPipelineList = document.querySelector("#ops-pipeline-list");
const showHiddenPipeline = document.querySelector("#show-hidden-pipeline");
const hideOpsLocation = document.querySelector("#hide-ops-location");
const removeOpsLocation = document.querySelector("#remove-ops-location");
const pipelineStepInputs = {
  form: document.querySelector("#ops-step-form"),
  insurance: document.querySelector("#ops-step-insurance"),
  documents: document.querySelector("#ops-step-documents"),
  fee: document.querySelector("#ops-step-fee"),
  confirmation: document.querySelector("#ops-step-confirmation")
};
const opsMarketingChecklist = document.querySelector("#ops-marketing-checklist");
const opsMarketingStatus = document.querySelector("#ops-marketing-status");
const reminderTitle = document.querySelector("#reminder-title");
const reminderDate = document.querySelector("#reminder-date");
const reminderLocation = document.querySelector("#reminder-location");
const reminderList = document.querySelector("#reminder-list");
const squareStatusTitle = document.querySelector("#square-status-title");
const squareStatusCopy = document.querySelector("#square-status-copy");
const squareConnectionBadge = document.querySelector("#square-connection-badge");
const squareImportLocation = document.querySelector("#square-import-location");
const squareTransactionList = document.querySelector("#square-transaction-list");
const squareImportStatus = document.querySelector("#square-import-status");
const squareSyncHistory = document.querySelector("#square-sync-history");
const reportTotalSales = document.querySelector("#report-total-sales");
const reportTotalProfit = document.querySelector("#report-total-profit");
const reportAvgProfit = document.querySelector("#report-avg-profit");
const reportBestLocation = document.querySelector("#report-best-location");
const reportLocationFilter = document.querySelector("#report-location-filter");
const reportSelectedLocation = document.querySelector("#report-selected-location");
const reportLocationPerformance = document.querySelector("#report-location-performance");
const reportMenuDemand = document.querySelector("#report-menu-demand");
const reportWeatherImpact = document.querySelector("#report-weather-impact");
const reportPipelineValue = document.querySelector("#report-pipeline-value");
const reportSupplierCosts = document.querySelector("#report-supplier-costs");
const reportPosSummary = document.querySelector("#report-pos-summary");
const reportGrossHour = document.querySelector("#report-gross-hour");
const reportLowPerformers = document.querySelector("#report-low-performers");
const reportUntestedOpportunities = document.querySelector("#report-untested-opportunities");
const reportRouteMileage = document.querySelector("#report-route-mileage");
const reportRouteVendors = document.querySelector("#report-route-vendors");
const marketplaceQuery = document.querySelector("#marketplace-query");
const marketplaceZip = document.querySelector("#marketplace-zip");
const marketplaceCategory = document.querySelector("#marketplace-category");
const marketplaceTitleInput = document.querySelector("#marketplace-title-input");
const marketplaceListingCategory = document.querySelector("#marketplace-listing-category");
const marketplaceCity = document.querySelector("#marketplace-city");
const marketplaceListingZip = document.querySelector("#marketplace-listing-zip");
const marketplacePrice = document.querySelector("#marketplace-price");
const marketplaceContact = document.querySelector("#marketplace-contact");
const marketplaceAffiliate = document.querySelector("#marketplace-affiliate");
const marketplaceDescription = document.querySelector("#marketplace-description");
const marketplaceImages = document.querySelector("#marketplace-images");
const marketplaceVideo = document.querySelector("#marketplace-video");
const marketplaceStatus = document.querySelector("#marketplace-status");
const marketplaceSummary = document.querySelector("#marketplace-summary");
const marketplaceGrid = document.querySelector("#marketplace-grid");
const settingsBusinessName = document.querySelector("#settings-business-name");
const settingsHomeBase = document.querySelector("#settings-home-base");
const settingsFoodType = document.querySelector("#settings-food-type");
const settingsRadius = document.querySelector("#settings-radius");
const settingsStatus = document.querySelector("#settings-status");
const feedbackArea = document.querySelector("#feedback-area");
const feedbackMessage = document.querySelector("#feedback-message");
const feedbackEmail = document.querySelector("#feedback-email");
const feedbackList = document.querySelector("#feedback-list");
const dataToolsStatus = document.querySelector("#data-tools-status");
const forumTopic = document.querySelector("#forum-topic");
const forumTitle = document.querySelector("#forum-title");
const forumMessage = document.querySelector("#forum-message");
const forumList = document.querySelector("#forum-list");
const salesInsightTitle = document.querySelector("#sales-insight-title");
const salesInsightCopy = document.querySelector("#sales-insight-copy");
const bestSalesLocation = document.querySelector("#best-sales-location");
const lowestSalesLocation = document.querySelector("#lowest-sales-location");

const dashboardBestName = document.querySelector("#dashboard-best-name");
const dashboardBestScore = document.querySelector("#dashboard-best-score");
const dashboardBestTime = document.querySelector("#dashboard-best-time");
const dashboardBestReason = document.querySelector("#dashboard-best-reason");
const dashboardSales = document.querySelector("#dashboard-sales");
const dashboardLearningTitle = document.querySelector("#dashboard-learning-title");
const dashboardLearningCopy = document.querySelector("#dashboard-learning-copy");
const weatherSummary = document.querySelector("#weather-summary");
const weatherDetail = document.querySelector("#weather-detail");

const detailName = document.querySelector("#detail-name");
const detailReason = document.querySelector("#detail-reason");
const detailScore = document.querySelector("#detail-score");
const detailTraffic = document.querySelector("#detail-traffic");
const detailEvents = document.querySelector("#detail-events");
const detailCompetition = document.querySelector("#detail-competition");
const detailWeather = document.querySelector("#detail-weather");
const detailParking = document.querySelector("#detail-parking");
const detailHistoryTitle = document.querySelector("#detail-history-title");
const detailHistoryList = document.querySelector("#detail-history-list");

const SUPABASE_URL = "https://vyjquxjxjywhrtihpzwk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_dnU2ePpleMBcl5Qt3kJriw_AFTeDa1w";
const LIVE_SITE_URL = "https://myfoodtruck.netlify.app/";
const AUTH_REDIRECT_URL = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost"
  ? LIVE_SITE_URL
  : `${window.location.origin}/`;

function createSafeStorage() {
  const memoryStorage = new Map();

  try {
    const testKey = "__food_truck_ai_storage_test__";
    window.localStorage.setItem(testKey, testKey);
    window.localStorage.removeItem(testKey);
    return {
      isPersistent: true,
      getItem: (key) => window.localStorage.getItem(key),
      setItem: (key, value) => window.localStorage.setItem(key, value),
      removeItem: (key) => window.localStorage.removeItem(key)
    };
  } catch (error) {
    return {
      isPersistent: false,
      getItem: (key) => memoryStorage.get(key) || null,
      setItem: (key, value) => memoryStorage.set(key, value),
      removeItem: (key) => memoryStorage.delete(key)
    };
  }
}

const appStorage = createSafeStorage();
const dbClient = window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
      auth: {
        storage: appStorage,
        persistSession: true,
        autoRefreshToken: true
      }
    })
  : null;

const storageKeys = {
  profile: "foodTruckAiProfile",
  weeklyPlan: "foodTruckAiWeeklyPlan",
  checkins: "foodTruckAiCheckins",
  customLocations: "foodTruckAiCustomLocations",
  pipeline: "foodTruckAiPipeline",
  prices: "foodTruckAiPrices",
  reminders: "foodTruckAiReminders",
  savedLocations: "foodTruckAiSavedLocations",
  supplierPartners: "foodTruckAiSupplierPartners",
  publicListings: "foodTruckAiPublicListings",
  truckProfiles: "foodTruckAiTruckProfiles",
  posConnection: "foodTruckAiPosConnection",
  squareImports: "foodTruckAiSquareImports",
  squareDemoTransactions: "foodTruckAiSquareDemoTransactions",
  marketplaceListings: "foodTruckAiMarketplaceListings",
  settings: "foodTruckAiSettings",
  feedback: "foodTruckAiFeedback",
  forumPosts: "foodTruckAiForumPosts",
  homeBase: "foodTruckAiHomeBase",
  activeBusinessProfileId: "foodTruckAiBusinessProfileId",
  activeUserId: "foodTruckAiUserId"
};

const locations = [
  {
    id: "downtown-lowell",
    name: "Downtown Lowell",
    city: "Lowell, MA",
    opportunityType: "Street service",
    score: "87",
    bestTime: "11 AM - 2 PM",
    events: "Canalway Lunch Market",
    competition: "Low",
    weather: "Low",
    traffic: "High",
    competitors: "2",
    parking: "Metered curb spots",
    sales: "$850 - $1,250",
    reason: "Office workers, courthouse traffic, and low lunch competition make this the strongest midday stop."
  },
  {
    id: "umass-lowell",
    name: "UMass Lowell Area",
    city: "Lowell, MA",
    opportunityType: "Campus area",
    score: "82",
    bestTime: "5 PM - 8 PM",
    events: "Evening campus game",
    competition: "Medium",
    weather: "Low",
    traffic: "High",
    competitors: "4",
    parking: "Use marked vendor curb zones",
    sales: "$700 - $1,050",
    reason: "Student foot traffic rises before the evening game, especially for fast dinner options."
  },
  {
    id: "brewery-district",
    name: "Brewery District",
    city: "Lowell, MA",
    opportunityType: "Nightlife district",
    score: "91",
    bestTime: "6 PM - 10 PM",
    events: "Patio music night",
    competition: "Medium",
    weather: "Moderate",
    traffic: "Very high",
    competitors: "3",
    parking: "Confirm brewery loading lane",
    sales: "$950 - $1,400",
    reason: "The patio event creates a strong dinner window with customers already staying nearby."
  },
  {
    id: "lowell-farmers-market",
    name: "Lowell Farmers Market",
    city: "Lowell, MA",
    opportunityType: "Farmers market",
    score: "86",
    bestTime: "2 PM - 6 PM",
    events: "Seasonal Thursday market",
    competition: "Medium",
    weather: "Moderate",
    traffic: "High",
    competitors: "3",
    parking: "Limited truck/tent spaces; assigned vendor setup",
    sales: "$650 - $1,050",
    sourceUrl: "https://www.discoverlowell.org/wp-content/uploads/2026/01/2026-Seasonal-Farmers-Market-Application-form.pdf",
    reason: "The 2026 market application says food trucks/tents are allowed during a defined Thursday window, making this a direct vendor opportunity."
  },
  {
    id: "navigation-brewing",
    name: "Navigation Brewing Company",
    city: "Lowell, MA",
    opportunityType: "Brewery",
    score: "84",
    bestTime: "5 PM - 9 PM",
    events: "Taproom food truck rotation",
    competition: "Medium",
    weather: "Low",
    traffic: "Medium",
    competitors: "2",
    parking: "Truck parking out front; confirm brewery schedule",
    sales: "$600 - $950",
    sourceUrl: "https://merrimackvalley.org/listing/navigation-brewing-company-hosts-food-trucks/",
    reason: "The brewery listing says there is usually a food truck parked out front or a vendor set up inside when the taproom is open."
  },
  {
    id: "western-ave-open-studios",
    name: "Western Ave Open Studios",
    city: "Lowell, MA",
    opportunityType: "Arts/event venue",
    score: "83",
    bestTime: "12 PM - 4 PM",
    events: "Open studios visitor traffic",
    competition: "Medium",
    weather: "Low",
    traffic: "Medium",
    competitors: "2",
    parking: "Managed through event or Best Food Trucks booking",
    sales: "$550 - $900",
    sourceUrl: "https://www.bestfoodtrucks.com/lots/boston-122-western-avenue-626cc162-7ca3-493d-8e72-c5ec53def854",
    reason: "The location is listed as a food-truck lot for Western Ave Open Studios, which makes it a recurring booking target."
  },
  {
    id: "dutton-street-market",
    name: "Dutton Street Market",
    city: "Lowell, MA",
    opportunityType: "Pop-up market",
    score: "79",
    bestTime: "4 PM - 8 PM",
    events: "Friday and Saturday pop-up village",
    competition: "Medium",
    weather: "Low",
    traffic: "Medium",
    competitors: "3",
    parking: "Pop-up vendor setup; confirm monthly food vendor needs",
    sales: "$450 - $800",
    sourceUrl: "https://project-pop-up.com/popups/dutton-street-market",
    reason: "The market promotes a rotating mix of creative entrepreneurs and food vendors on Fridays and Saturdays."
  },
  {
    id: "topsfield-fair",
    name: "Topsfield Fair",
    city: "Topsfield, MA",
    opportunityType: "County fair",
    score: "96",
    bestTime: "11 AM - 9 PM",
    events: "2026 fair concessions",
    competition: "High",
    weather: "Moderate",
    traffic: "Very high",
    competitors: "Many",
    parking: "Electricity and water access; no generators",
    sales: "$1,800 - $4,000",
    sourceUrl: "https://www.topsfieldfair.org/about/concessions-vendors/",
    reason: "Topsfield Fair actively publishes vendor information and says new applications are accepted on a rolling basis."
  },
  {
    id: "marshfield-fair",
    name: "Marshfield Fair",
    city: "Marshfield, MA",
    opportunityType: "County fair",
    score: "92",
    bestTime: "12 PM - 10 PM",
    events: "August 21-30, 2026 fair",
    competition: "High",
    weather: "Moderate",
    traffic: "Very high",
    competitors: "Many",
    parking: "Vendor setup and fairground access rules apply",
    sales: "$1,500 - $3,500",
    sourceUrl: "https://marshfieldfair.org/wp-content/uploads/2026/01/complete-vendor-info-2026.pdf",
    reason: "The 2026 vendor packet explains the new-vendor application process and food-vendor permit requirements."
  },
  {
    id: "bolton-fair",
    name: "Bolton Fair",
    city: "Lancaster, MA",
    opportunityType: "County fair",
    score: "88",
    bestTime: "11 AM - 8 PM",
    events: "August 14-16, 2026 fair",
    competition: "High",
    weather: "Moderate",
    traffic: "High",
    competitors: "Many",
    parking: "Contact fair for food concessions placement",
    sales: "$1,000 - $2,400",
    sourceUrl: "https://www.boltonfair.org/concessions",
    reason: "Bolton Fair asks interested food concessions vendors to contact the fair directly for more information."
  },
  {
    id: "spencer-fair",
    name: "Spencer Fair",
    city: "Spencer, MA",
    opportunityType: "County fair",
    score: "89",
    bestTime: "10 AM - 9 PM",
    events: "September 4-7, 2026 fair",
    competition: "High",
    weather: "Moderate",
    traffic: "High",
    competitors: "Many",
    parking: "Fairground vendor setup; request 2026 vendor info",
    sales: "$1,100 - $2,600",
    sourceUrl: "https://www.spencerfair.org/",
    reason: "The fair site advertises a request path to become a 2026 vendor and lists fairground rental/contact information."
  },
  {
    id: "belchertown-fair",
    name: "Belchertown Fair",
    city: "Belchertown, MA",
    opportunityType: "County fair",
    score: "86",
    bestTime: "12 PM - 8 PM",
    events: "167th Belchertown Fair vendor space",
    competition: "Medium",
    weather: "Moderate",
    traffic: "High",
    competitors: "Many",
    parking: "Vendor check-in and inspection required",
    sales: "$900 - $2,100",
    sourceUrl: "https://www.btownfair.com/vendor-space/",
    reason: "The fair publishes vendor-space steps plus mobile food, Board of Health, checklist, and fire permit documents."
  },
  {
    id: "littleville-fair",
    name: "Littleville Fair",
    city: "Chester, MA",
    opportunityType: "County fair",
    score: "80",
    bestTime: "11 AM - 7 PM",
    events: "August 7-9, 2026 fair",
    competition: "Medium",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Food vendor form available",
    sales: "$600 - $1,500",
    sourceUrl: "https://littlevillefair.com/forms/",
    reason: "The 2026 fair forms page includes a specific food vendor form and published fair dates and hours."
  },
  {
    id: "mass-sheep-woolcraft-fair",
    name: "Massachusetts Sheep & Woolcraft Fair",
    city: "Cummington, MA",
    opportunityType: "Specialty fair",
    score: "78",
    bestTime: "10 AM - 4 PM",
    events: "Food vendor online application",
    competition: "Medium",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Outdoor food vendor application",
    sales: "$500 - $1,200",
    sourceUrl: "https://masheepwool.org/vendors/vendor-information/",
    reason: "The vendor page includes a food vendor online application and rolling consideration for complete applications."
  },
  {
    id: "peabody-international-festival",
    name: "Peabody International Festival",
    city: "Peabody, MA",
    opportunityType: "Festival",
    score: "82",
    bestTime: "11 AM - 5 PM",
    events: "2026 food vendor application",
    competition: "Medium",
    weather: "Moderate",
    traffic: "High",
    competitors: "Several",
    parking: "15 x 10 booth standard; festival approval required",
    sales: "$700 - $1,600",
    sourceUrl: "https://ifestpeabody.com/vendor-application/",
    reason: "The festival publishes a 2026 food vendor application and booth requirements for approved food sellers."
  },
  {
    id: "harvard-square-mayfair",
    name: "Harvard Square MayFair",
    city: "Cambridge, MA",
    opportunityType: "Street festival",
    score: "90",
    bestTime: "12 PM - 6 PM",
    events: "2026 food truck application",
    competition: "High",
    weather: "Moderate",
    traffic: "Very high",
    competitors: "Many",
    parking: "Food truck application deadline applies",
    sales: "$1,200 - $3,000",
    sourceUrl: "https://harvardsquare.com/wp-content/uploads/2026/03/NEW-MayFair-Food-Truck-Application-2026.pdf",
    reason: "The 2026 MayFair materials include a food truck vendor application for event participation."
  },
  {
    id: "the-big-e",
    name: "The Big E",
    city: "West Springfield, MA",
    opportunityType: "Regional fair",
    score: "98",
    bestTime: "11 AM - 10 PM",
    events: "17-day New England fair",
    competition: "High",
    weather: "Moderate",
    traffic: "Very high",
    competitors: "Many",
    parking: "2026 food vendor locations filled; track future openings",
    sales: "$2,500 - $6,000",
    sourceUrl: "https://www.thebige.com/p/get-involved/vendor-information/vendor-exhibitor-info",
    reason: "The Big E vendor page says 2026 food spaces are filled, but it remains a major future opportunity with over 1.5 million visitors."
  },
  {
    id: "wachusett-festivals",
    name: "Wachusett Mountain Festivals",
    city: "Princeton, MA",
    opportunityType: "Festival series",
    score: "87",
    bestTime: "11 AM - 5 PM",
    events: "2026 festival vendor registration",
    competition: "Medium",
    weather: "Moderate",
    traffic: "High",
    competitors: "Several",
    parking: "Food truck spaces for concession vendors",
    sales: "$900 - $2,000",
    sourceUrl: "https://www.wachusett.com/2026-festival-vendor-registration-2/",
    reason: "Wachusett's 2026 registration page specifically describes food truck spaces for concession vendors."
  },
  {
    id: "durham-fair",
    name: "Durham Fair",
    city: "Durham, CT",
    opportunityType: "County fair",
    score: "94",
    bestTime: "11 AM - 9 PM",
    events: "Connecticut's largest agricultural fair",
    competition: "High",
    weather: "Moderate",
    traffic: "Very high",
    competitors: "Many",
    parking: "Fairground vendor/concession setup",
    sales: "$1,600 - $3,800",
    sourceUrl: "https://www.durhamfair.com/index",
    reason: "Durham Fair is a major Connecticut agricultural fair with significant fairground food traffic."
  },
  {
    id: "norwalk-oyster-festival",
    name: "Norwalk Oyster Festival",
    city: "Norwalk, CT",
    opportunityType: "Festival",
    score: "90",
    bestTime: "12 PM - 8 PM",
    events: "2026 food vendor inquiry",
    competition: "High",
    weather: "Moderate",
    traffic: "High",
    competitors: "Many",
    parking: "Food vendor inquiry form required",
    sales: "$1,200 - $3,000",
    sourceUrl: "https://www.seaport.org/vendor-applications",
    reason: "The Norwalk Seaport Association publishes a 2026 food vendor inquiry form for the Oyster Festival."
  },
  {
    id: "connecticut-garlic-harvest",
    name: "Connecticut Garlic & Harvest Festival",
    city: "Bethlehem, CT",
    opportunityType: "Food festival",
    score: "85",
    bestTime: "10 AM - 5 PM",
    events: "October 10-11, 2026 festival",
    competition: "Medium",
    weather: "Moderate",
    traffic: "High",
    competitors: "Several",
    parking: "Food concessionaire application process",
    sales: "$800 - $2,000",
    sourceUrl: "https://garlicfestct.com/vendor-application/",
    reason: "The festival vendor page invites 2026 applications and references food concessionaires."
  },
  {
    id: "connecticut-renaissance-faire",
    name: "Connecticut Renaissance Faire",
    city: "Lebanon, CT",
    opportunityType: "Festival",
    score: "84",
    bestTime: "11 AM - 6 PM",
    events: "2026 food vendor application",
    competition: "Medium",
    weather: "Moderate",
    traffic: "High",
    competitors: "Several",
    parking: "Eventeny food vendor application",
    sales: "$750 - $1,900",
    sourceUrl: "https://www.eventeny.com/events/vendor/?id=38038",
    reason: "The 2026 Connecticut Renaissance Faire has a dedicated food vendor application."
  },
  {
    id: "common-ground-country-fair",
    name: "Common Ground Country Fair",
    city: "Unity, ME",
    opportunityType: "Agricultural fair",
    score: "91",
    bestTime: "10 AM - 5 PM",
    events: "MOFGA fair vendor resources",
    competition: "High",
    weather: "Moderate",
    traffic: "Very high",
    competitors: "Many",
    parking: "MOFGA food vendor resources and carryover forms",
    sales: "$1,300 - $3,200",
    sourceUrl: "https://www.mofga.org/the-fair/vendor-resources/",
    reason: "MOFGA publishes vendor resources for the fair, including food carryover/vendor materials."
  },
  {
    id: "pittston-fair",
    name: "Pittston Fair",
    city: "Pittston, ME",
    opportunityType: "County fair",
    score: "77",
    bestTime: "11 AM - 8 PM",
    events: "2026 agricultural fair",
    competition: "Medium",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Fair vendor/contact follow-up needed",
    sales: "$500 - $1,300",
    sourceUrl: "https://www.pittstonfair.com/",
    reason: "Pittston Fair advertises its 2026 agricultural fair season and food/fair activities."
  },
  {
    id: "maine-potato-blossom-festival",
    name: "Maine Potato Blossom Festival",
    city: "Fort Fairfield, ME",
    opportunityType: "Festival",
    score: "82",
    bestTime: "11 AM - 7 PM",
    events: "2026 vendor application",
    competition: "Medium",
    weather: "Moderate",
    traffic: "High",
    competitors: "Several",
    parking: "Food court vehicle movement rules",
    sales: "$700 - $1,700",
    sourceUrl: "https://www.mainepotatoblossomfestival.com/wp-content/uploads/2026/03/2026-MPBF-Vendor-application.pdf",
    reason: "The 2026 vendor packet includes food court operations and vendor requirements."
  },
  {
    id: "maine-needham-festival",
    name: "Maine Needham Festival",
    city: "Maine",
    opportunityType: "Food festival",
    score: "74",
    bestTime: "10 AM - 4 PM",
    events: "2026 vendor application",
    competition: "Low",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Food truck vendor application",
    sales: "$450 - $1,100",
    sourceUrl: "https://www.meneedhamfest.com/event-details-registration/maine-needham-festival-vendor-application-2026",
    reason: "The 2026 application asks for Maine artisans and food trucks."
  },
  {
    id: "league-nh-craftsmen-fair",
    name: "League of NH Craftsmen Fair",
    city: "Newbury, NH",
    opportunityType: "Craft fair",
    score: "86",
    bestTime: "10 AM - 5 PM",
    events: "August 1-9, 2026 fair",
    competition: "Medium",
    weather: "Moderate",
    traffic: "High",
    competitors: "Several",
    parking: "Guest food vendor contract",
    sales: "$800 - $2,000",
    sourceUrl: "https://nhcrafts.org/guest-food-vendor-application/",
    reason: "The League of NH Craftsmen has a 2026 guest food vendor application and contract for its annual fair."
  },
  {
    id: "joyces-nh-craft-fairs",
    name: "Joyce's Craft Shows",
    city: "New Hampshire",
    opportunityType: "Craft fair series",
    score: "73",
    bestTime: "10 AM - 4 PM",
    events: "2026 vendor application",
    competition: "Low",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Vendor application required",
    sales: "$400 - $1,000",
    sourceUrl: "https://www.joycescraftshows.com/nh-craft-fairs-vendors",
    reason: "The craft fair organizer publishes a 2026 vendor application for New Hampshire fair events."
  },
  {
    id: "autumnfest-ri",
    name: "Autumnfest",
    city: "Woonsocket, RI",
    opportunityType: "Festival",
    score: "86",
    bestTime: "12 PM - 8 PM",
    events: "2026 food vendor applications",
    competition: "Medium",
    weather: "Moderate",
    traffic: "High",
    competitors: "Several",
    parking: "Applications open May 1",
    sales: "$800 - $2,100",
    sourceUrl: "https://www.autumnfest.org/vendors",
    reason: "Autumnfest says 2026 food vendor applications become available starting May 1."
  },
  {
    id: "hartford-vt-parks-food-truck",
    name: "Hartford VT Parks Food Truck Permit",
    city: "Hartford, VT",
    opportunityType: "Municipal permit",
    score: "80",
    bestTime: "11 AM - 7 PM",
    events: "Designated park vending sites",
    competition: "Low",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Varies",
    parking: "Permit allows designated town park/facility vending",
    sales: "$450 - $1,300",
    sourceUrl: "https://www.hartford-vt.org/m/newsflash/Home/Detail/923",
    reason: "Hartford, VT announced 2026 mobile food vendor applications for designated parks and public facilities."
  },
  {
    id: "burlington-farmers-market",
    name: "Burlington Farmers Market",
    city: "Burlington, VT",
    opportunityType: "Farmers market",
    score: "85",
    bestTime: "9 AM - 2 PM",
    events: "Every Saturday May 9 - October 31, 2026",
    competition: "Medium",
    weather: "Moderate",
    traffic: "High",
    competitors: "Several",
    parking: "Vendor application process",
    sales: "$700 - $1,700",
    sourceUrl: "https://burlingtonfarmersmarket.org/",
    reason: "The market publishes its 2026 schedule and vendor application path."
  },
  {
    id: "garlic-town-usa",
    name: "Garlic Town USA",
    city: "Bennington, VT",
    opportunityType: "Food festival",
    score: "84",
    bestTime: "10 AM - 5 PM",
    events: "September 5, 2026 festival",
    competition: "Medium",
    weather: "Moderate",
    traffic: "High",
    competitors: "Several",
    parking: "Curated food truck/vendor waitlist",
    sales: "$750 - $1,800",
    sourceUrl: "https://www.garlictownusa.com/vendors",
    reason: "Garlic Town USA says it selects food trucks and specialty food vendors for the 2026 festival."
  },
  {
    id: "quechee-balloon-festival",
    name: "Quechee Balloon Festival",
    city: "Quechee, VT",
    opportunityType: "Festival",
    score: "87",
    bestTime: "11 AM - 8 PM",
    events: "Food and beverage vendor application",
    competition: "Medium",
    weather: "Moderate",
    traffic: "High",
    competitors: "Several",
    parking: "Manual vendor review",
    sales: "$900 - $2,200",
    sourceUrl: "https://quecheeballoonfestival.com/vendor/",
    reason: "The Quechee Balloon Festival vendor page includes food and beverage vendor information."
  },
  {
    id: "om-festival-vermont",
    name: "The OM Festival Vermont",
    city: "Arlington, VT",
    opportunityType: "Festival",
    score: "76",
    bestTime: "11 AM - 7 PM",
    events: "July 30 - August 2, 2026",
    competition: "Low",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Vendor application",
    sales: "$500 - $1,400",
    sourceUrl: "https://theomfestival.com/vendor-opportunities-in-new-england/",
    reason: "The OM Festival advertises 2026 vendor opportunities and references food truck participation."
  },
  {
    id: "gilfeather-turnip-festival",
    name: "Gilfeather Turnip Festival",
    city: "Wardsboro, VT",
    opportunityType: "Food/farm festival",
    score: "72",
    bestTime: "10 AM - 2 PM",
    events: "October 24, 2026 marketplace",
    competition: "Low",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Outdoor or 10 x 10 pop-up vendor spaces",
    sales: "$350 - $900",
    sourceUrl: "https://www.gilfeatherturnip.org/vendor-info",
    reason: "The festival vendor page seeks food and farm product vendors for the marketplace."
  }
];

const newHampshireOpportunityLocations = [
  {
    id: "deerfield-fair",
    name: "Deerfield Fair",
    city: "Deerfield, NH",
    opportunityType: "Agricultural fair",
    score: "96",
    bestTime: "10 AM - 9 PM",
    events: "2026 vendor/concession application",
    competition: "High",
    weather: "Moderate",
    traffic: "Very high",
    competitors: "Many",
    parking: "Food concessions charged by linear foot; application reviewed as space opens",
    sales: "$1,800 - $4,200",
    sourceUrl: "https://deerfieldfair.com/vendors/",
    reason: "Deerfield Fair publishes 2026 vendor/concession information and accepts applications for new vendors as space becomes available."
  },
  {
    id: "hopkinton-state-fair",
    name: "Hopkinton State Fair",
    city: "Contoocook, NH",
    opportunityType: "State fair",
    score: "95",
    bestTime: "10 AM - 10 PM",
    events: "Labor Day weekend fair concessions",
    competition: "High",
    weather: "Moderate",
    traffic: "Very high",
    competitors: "Many",
    parking: "Premium and standard frontage pricing; food concessions accepted",
    sales: "$1,700 - $4,000",
    sourceUrl: "https://www.hsfair.org/vendor-information/",
    reason: "Hopkinton State Fair invites food concessions and publishes vendor applications, pricing, check-in, insurance, and fire safety information."
  },
  {
    id: "lancaster-fair-nh",
    name: "Lancaster Fair",
    city: "Lancaster, NH",
    opportunityType: "Agricultural fair",
    score: "91",
    bestTime: "10 AM - 10 PM",
    events: "September 3-7, 2026 fair",
    competition: "High",
    weather: "Moderate",
    traffic: "High",
    competitors: "Many",
    parking: "Inside and outside concession contracts available",
    sales: "$1,200 - $3,000",
    sourceUrl: "https://lancasterfair.com/pages/vendor-registration",
    reason: "Lancaster Fair publishes 2026 inside and outside concession registration for vendors."
  },
  {
    id: "cornish-fair",
    name: "Cornish Fair",
    city: "Cornish, NH",
    opportunityType: "Agricultural fair",
    score: "89",
    bestTime: "10 AM - 8 PM",
    events: "2026 food vendor applications",
    competition: "High",
    weather: "Moderate",
    traffic: "High",
    competitors: "Dozens",
    parking: "Food vendors must meet NH fire safety requirements",
    sales: "$1,000 - $2,500",
    sourceUrl: "https://www.cornishfair.org/vendors",
    reason: "Cornish Fair says 2026 applications are open and notes dozens of local and regional food vendors at the fair."
  },
  {
    id: "sandwich-fair-nh",
    name: "Sandwich Fair",
    city: "Sandwich, NH",
    opportunityType: "Agricultural fair",
    score: "90",
    bestTime: "9 AM - 8 PM",
    events: "October 10-12, 2026 fair",
    competition: "High",
    weather: "Moderate",
    traffic: "High",
    competitors: "Many",
    parking: "Vendor application and visible food permit required",
    sales: "$1,100 - $2,800",
    sourceUrl: "https://www.sandwichfair.com/faireventschedule/vendors/",
    reason: "Sandwich Fair maintains vendor headquarters with an application process and food permit requirements."
  },
  {
    id: "cheshire-fair",
    name: "Cheshire Fair",
    city: "Swanzey, NH",
    opportunityType: "Agricultural fair",
    score: "88",
    bestTime: "11 AM - 9 PM",
    events: "2026 food and merchandise vendor application",
    competition: "High",
    weather: "Moderate",
    traffic: "High",
    competitors: "Many",
    parking: "Food and merchandise vendor application",
    sales: "$1,000 - $2,400",
    sourceUrl: "https://www.cheshirefair.org/fair-vendor-information",
    reason: "Cheshire Fair publishes 2026 concession applications for both food and merchandise vendors."
  },
  {
    id: "belknap-county-fair",
    name: "Belknap County Fair",
    city: "Belmont, NH",
    opportunityType: "County fair",
    score: "84",
    bestTime: "10 AM - 8 PM",
    events: "2026 concession application",
    competition: "Medium",
    weather: "Moderate",
    traffic: "High",
    competitors: "Several",
    parking: "Belmont fire inspection required for concessions",
    sales: "$800 - $2,000",
    sourceUrl: "https://www.bcfairnh.org/uploads/1/0/1/8/101863520/2026_concession_application.pdf",
    reason: "The 2026 Belknap County Fair concession application covers food and beverage vendor compliance and inspection needs."
  },
  {
    id: "north-haverhill-fair",
    name: "North Haverhill Fair",
    city: "North Haverhill, NH",
    opportunityType: "Agricultural fair",
    score: "85",
    bestTime: "10 AM - 9 PM",
    events: "2026 concessionaire contracts",
    competition: "Medium",
    weather: "Moderate",
    traffic: "High",
    competitors: "Several",
    parking: "Inside and outside concessionaire contracts",
    sales: "$800 - $2,100",
    sourceUrl: "https://www.nohaverhillfair.com/forms-rules",
    reason: "North Haverhill Fair posts 2026 inside and outside concessionaire contracts and NH fair health regulations."
  },
  {
    id: "granite-state-fair",
    name: "Granite State Fair",
    city: "Rochester, NH",
    opportunityType: "Fair",
    score: "86",
    bestTime: "11 AM - 9 PM",
    events: "Vendor application",
    competition: "High",
    weather: "Moderate",
    traffic: "High",
    competitors: "Many",
    parking: "Vendor application asks for water, electricity, and setup location",
    sales: "$900 - $2,300",
    sourceUrl: "https://www.granitestatefair.com/vendors/",
    reason: "Granite State Fair has an online vendor application with setup, water, and electricity requirements."
  },
  {
    id: "hillsborough-county-agricultural-fair",
    name: "Hillsborough County Agricultural Fair",
    city: "New Boston, NH",
    opportunityType: "County fair",
    score: "82",
    bestTime: "10 AM - 7 PM",
    events: "September 11-13, 2026 fair",
    competition: "Medium",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Contact fair directly for vendor space",
    sales: "$650 - $1,600",
    sourceUrl: "https://www.hcafair.org/",
    reason: "The fair publishes its 2026 dates and contact path for fair information."
  },
  {
    id: "new-hampshire-sheep-wool-festival",
    name: "New Hampshire Sheep & Wool Festival",
    city: "Deerfield, NH",
    opportunityType: "Specialty fair",
    score: "80",
    bestTime: "9 AM - 5 PM",
    events: "May 9-10, 2026 festival",
    competition: "Medium",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Held at Deerfield Fairgrounds",
    sales: "$550 - $1,400",
    sourceUrl: "https://nhswga.org/festival/online-tickets/",
    reason: "The New Hampshire Sheep & Wool Festival is a vendor-oriented specialty event at the Deerfield Fairgrounds."
  },
  {
    id: "new-hampshire-book-festival",
    name: "New Hampshire Book Festival",
    city: "Concord, NH",
    opportunityType: "Cultural festival",
    score: "82",
    bestTime: "9 AM - 6 PM",
    events: "October 3, 2026 food truck category",
    competition: "Medium",
    weather: "Low",
    traffic: "High",
    competitors: "Several",
    parking: "Food truck fee listed at $400",
    sales: "$700 - $1,700",
    sourceUrl: "https://www.nhbookfestival.org/vendors",
    reason: "The 2026 vendor page includes Food Trucks as a category and lists food truck pricing."
  },
  {
    id: "smuttynose-food-truck-festival",
    name: "Smuttynose Food Truck Festival",
    city: "Hampton, NH",
    opportunityType: "Food truck festival",
    score: "88",
    bestTime: "11 AM - 5 PM",
    events: "May 30, 2026 festival",
    competition: "High",
    weather: "Moderate",
    traffic: "High",
    competitors: "Food trucks",
    parking: "Designated truck and vendor parking",
    sales: "$900 - $2,400",
    sourceUrl: "https://www.eventeny.com/events/vendor/?id=39030",
    reason: "The 2026 Smuttynose Food Truck Festival listing includes vendor application details for the Hampton event."
  },
  {
    id: "southern-nh-food-truck-festival",
    name: "Southern NH Food Truck Festival",
    city: "Milford, NH",
    opportunityType: "Food truck festival",
    score: "89",
    bestTime: "11 AM - 6 PM",
    events: "August 1-2, 2026 festival",
    competition: "High",
    weather: "Moderate",
    traffic: "High",
    competitors: "Food trucks",
    parking: "Great New England Food Truck Festival application",
    sales: "$1,000 - $2,600",
    sourceUrl: "https://www.gnefoodtruckfest.com/",
    reason: "Great New England Food Truck Festivals says 2026 applications are live for the Southern NH Food Truck Festival in Milford."
  },
  {
    id: "milford-pumpkin-festival",
    name: "Milford Pumpkin Festival",
    city: "Milford, NH",
    opportunityType: "Festival",
    score: "87",
    bestTime: "11 AM - 8 PM",
    events: "2026 vendor application release",
    competition: "High",
    weather: "Moderate",
    traffic: "High",
    competitors: "Many",
    parking: "Food truck safety memo referenced",
    sales: "$900 - $2,200",
    sourceUrl: "https://www.milfordpumpkinfestival.org/vendors",
    reason: "Milford Pumpkin Festival's vendor page references 2026 availability and food truck safety materials."
  },
  {
    id: "sunapee-farmers-market",
    name: "Sunapee Farmers Market",
    city: "Sunapee, NH",
    opportunityType: "Farmers market",
    score: "78",
    bestTime: "8 AM - 12 PM",
    events: "2026 farm/food vendor application",
    competition: "Medium",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Prepared food spots full with waitlist",
    sales: "$450 - $1,100",
    sourceUrl: "https://sunapeefarmersmarket.com/vendor/",
    reason: "Sunapee Farmers Market publishes a 2026 Farm/Food vendor application and notes prepared food spots are waitlisted."
  },
  {
    id: "salem-nh-farmers-market",
    name: "Salem NH Farmers Market",
    city: "Salem, NH",
    opportunityType: "Farmers market",
    score: "79",
    bestTime: "10 AM - 2 PM",
    events: "Summer 2026 vendor application",
    competition: "Medium",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Producer-only market application review",
    sales: "$450 - $1,150",
    sourceUrl: "https://salemnhfarmersmarket.org/become-a-vendor/",
    reason: "The Salem NH Farmers Market publishes a Summer 2026 vendor application and review process."
  },
  {
    id: "wolfeboro-farmers-market",
    name: "Wolfeboro Area Farmers Market",
    city: "Wolfeboro, NH",
    opportunityType: "Farmers market",
    score: "76",
    bestTime: "11:30 AM - 2:30 PM",
    events: "Thursdays May 14 - October 8, 2026",
    competition: "Medium",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Limited 2026 applications",
    sales: "$350 - $950",
    sourceUrl: "https://www.wolfeborofarmersmarket.com/vendor-application",
    reason: "Wolfeboro's 2026 outdoor market application is live, with a Thursday lunch window at The Nick."
  },
  {
    id: "candia-farmers-market",
    name: "Candia Farmers Market",
    city: "Candia, NH",
    opportunityType: "Farmers market",
    score: "74",
    bestTime: "9 AM - 12 PM",
    events: "Third Saturdays June-October 2026",
    competition: "Low",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Certificate of insurance and vendor approval required",
    sales: "$300 - $850",
    sourceUrl: "https://candiafarmersmarket.org/vendor-application-2026/",
    reason: "Candia Farmers Market publishes 2026 policies, schedule, vendor types, and application requirements."
  },
  {
    id: "derry-homegrown",
    name: "Derry Homegrown Farm & Artisan Market",
    city: "Derry, NH",
    opportunityType: "Farmers market",
    score: "77",
    bestTime: "3 PM - 7 PM",
    events: "2026 online vendor application",
    competition: "Medium",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Vendor policies and booth rental rates apply",
    sales: "$400 - $1,000",
    sourceUrl: "https://www.derryhomegrown.org/vendors",
    reason: "Derry Homegrown links its 2026 online application and vendor policies for market participation."
  },
  {
    id: "hampton-falls-farmers-market",
    name: "Hampton Falls Farmers Market",
    city: "Hampton Falls, NH",
    opportunityType: "Farmers market",
    score: "76",
    bestTime: "10 AM - 2 PM",
    events: "2026 vendor application",
    competition: "Medium",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Application opens February 1, 2026",
    sales: "$350 - $950",
    sourceUrl: "https://www.hamptonfallsfarmersmarket.com/become-a-vendor",
    reason: "Hampton Falls Farmers Market publishes a 2026 vendor application path."
  },
  {
    id: "concord-farmers-market",
    name: "Concord Farmers Market",
    city: "Concord, NH",
    opportunityType: "Farmers market",
    score: "80",
    bestTime: "8:30 AM - 12 PM",
    events: "2026 guest vendor application",
    competition: "Medium",
    weather: "Moderate",
    traffic: "High",
    competitors: "Several",
    parking: "Guest vendor application",
    sales: "$500 - $1,300",
    sourceUrl: "https://concordfarmersmarket.com/wp-content/uploads/2026/01/Concord-Farmers-Market-Application-2026-v4.pdf",
    reason: "Concord Farmers Market publishes a 2026 guest vendor application."
  },
  {
    id: "chester-town-fair",
    name: "Chester Town Fair",
    city: "Chester, NH",
    opportunityType: "Town fair",
    score: "77",
    bestTime: "11 AM - 5 PM",
    events: "2026 food vendor application",
    competition: "Low",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Food vendor application due by August 15, 2026",
    sales: "$400 - $1,100",
    sourceUrl: "https://www.chesternh.org/town-fair-committee/files/town-fair-food-vendor",
    reason: "Chester Town Fair publishes a 2026 food vendor application."
  },
  {
    id: "apple-pie-crafts-fair",
    name: "Apple Pie Crafts Fair",
    city: "Newport, NH",
    opportunityType: "Craft fair",
    score: "81",
    bestTime: "9 AM - 3 PM",
    events: "August 22, 2026 food vendor application",
    competition: "Medium",
    weather: "Moderate",
    traffic: "High",
    competitors: "Several",
    parking: "Food-vendor-only application",
    sales: "$600 - $1,500",
    sourceUrl: "https://events.humanitix.com/food-vendor-application-apple-pie-crafts-fair-2026",
    reason: "The 2026 Apple Pie Crafts Fair has a dedicated food vendor application for the Newport Town Common event."
  },
  {
    id: "sandwich-nh-farmers-market",
    name: "Sandwich Farmers Market",
    city: "Sandwich, NH",
    opportunityType: "Farmers market",
    score: "73",
    bestTime: "9 AM - 12 PM",
    events: "2026 vendor application",
    competition: "Low",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Local producer market application",
    sales: "$300 - $850",
    sourceUrl: "https://www.sandwichnhfarmersmarket.com/",
    reason: "Sandwich Farmers Market publishes a 2026 vendor application for market participation."
  },
  {
    id: "rochester-harvest-market",
    name: "Rochester Harvest Market",
    city: "Rochester, NH",
    opportunityType: "Farmers market",
    score: "74",
    bestTime: "3 PM - 6 PM",
    events: "Every Tuesday in September",
    competition: "Low",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Become a Vendor path available",
    sales: "$300 - $900",
    sourceUrl: "https://rochesterharvest.org/",
    reason: "Rochester Harvest Market promotes ready-made foods and has a Become a Vendor path."
  },
  {
    id: "seacoast-eat-local-winter-markets",
    name: "Seacoast Eat Local Winter Markets",
    city: "Stratham & Rollinsford, NH",
    opportunityType: "Winter farmers market",
    score: "78",
    bestTime: "10 AM - 2 PM",
    events: "Winter market prepared food vendors",
    competition: "Medium",
    weather: "Low",
    traffic: "Medium",
    competitors: "Several",
    parking: "Indoor/outdoor winter market setup varies",
    sales: "$450 - $1,100",
    sourceUrl: "https://seacoasteatlocal.org/winter-farmers-markets/",
    reason: "Seacoast Eat Local says its winter markets include hot prepared food, baked goods, and value-added food vendors."
  },
  {
    id: "nh-outdoor-expo",
    name: "New Hampshire Outdoor Expo",
    city: "Milford, NH",
    opportunityType: "Expo",
    score: "79",
    bestTime: "10 AM - 5 PM",
    events: "2026 Hampshire Dome expo",
    competition: "Medium",
    weather: "Low",
    traffic: "Medium",
    competitors: "Several",
    parking: "Vendor contract for expo participation",
    sales: "$500 - $1,300",
    sourceUrl: "https://nhoutdoorexpo.com/wp-content/uploads/2025/08/2026-NH-Outdoor-Expo-Contract-FILLABLE.pdf",
    reason: "The 2026 New Hampshire Outdoor Expo contract covers vendor participation at the Hampshire Dome in Milford."
  }
];

newHampshireOpportunityLocations.forEach((location) => {
  if (!locations.some((existingLocation) => existingLocation.id === location.id)) {
    locations.push(location);
  }
});

const scrapedNewHampshireOpportunityLocations = [
  {
    id: "nh-sunflower-festival",
    name: "NH Sunflower Festival",
    city: "Lee, NH",
    opportunityType: "Farm festival",
    score: "84",
    bestTime: "10 AM - 5 PM",
    events: "July 25 - August 2, 2026 craft and food vendor spots",
    competition: "Medium",
    weather: "Moderate",
    traffic: "High",
    competitors: "Several",
    parking: "Craft and food vendor applications listed",
    sales: "$700 - $1,700",
    sourceUrl: "https://www.nhsunflower.com/",
    reason: "The 2026 NH Sunflower Festival page says craft and food vendor applications are available and food vendors are on site during the festival."
  },
  {
    id: "warner-fall-foliage-festival",
    name: "Warner Fall Foliage Festival",
    city: "Warner, NH",
    opportunityType: "Fall festival",
    score: "86",
    bestTime: "10 AM - 6 PM",
    events: "October 9-11, 2026 festival",
    competition: "High",
    weather: "Moderate",
    traffic: "High",
    competitors: "Many",
    parking: "Food trucks and 100+ vendors promoted",
    sales: "$900 - $2,200",
    sourceUrl: "https://wfff.org/",
    reason: "Warner Fall Foliage Festival promotes food trucks and says 2026 crafter/vendor applications are open."
  },
  {
    id: "farm-and-country-festival",
    name: "Farm and Country Festival",
    city: "Kensington, NH",
    opportunityType: "Farm festival",
    score: "78",
    bestTime: "10 AM - 5 PM",
    events: "August 8-9, 2026 vendor application",
    competition: "Medium",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Vendor application at James R Rosencrantz",
    sales: "$500 - $1,300",
    sourceUrl: "https://farmandcountryfestival.com/",
    reason: "The festival page invites vendors and promotes local food and family festival traffic."
  },
  {
    id: "white-mountains-pride",
    name: "White Mountains Pride Festival",
    city: "North Conway, NH",
    opportunityType: "Pride festival",
    score: "79",
    bestTime: "11 AM - 5 PM",
    events: "2026 food vendor signup",
    competition: "Medium",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Online and PDF vendor applications",
    sales: "$500 - $1,300",
    sourceUrl: "https://www.whitemountainspride.com/vendors",
    reason: "White Mountains Pride says 2026 vendor signup is open and lists food vendors as a category."
  },
  {
    id: "keene-pride-fest",
    name: "Keene Pride Fest",
    city: "Keene, NH",
    opportunityType: "Pride festival",
    score: "80",
    bestTime: "12 PM - 6 PM",
    events: "September 20, 2026 food truck license",
    competition: "Medium",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Food truck license listed at $300",
    sales: "$550 - $1,400",
    sourceUrl: "https://www.keenepride.org/vendor",
    reason: "Keene Pride's 2026 vendor page includes a specific Food Truck License option."
  },
  {
    id: "nashua-pride",
    name: "Nashua Pride Festival",
    city: "Nashua, NH",
    opportunityType: "Pride festival",
    score: "81",
    bestTime: "3 PM - 6 PM",
    events: "June 20, 2026 food vendor interest form",
    competition: "Medium",
    weather: "Moderate",
    traffic: "High",
    competitors: "Several",
    parking: "City health process after acceptance",
    sales: "$500 - $1,400",
    sourceUrl: "https://form.jotform.com/260396185335159",
    reason: "The 2026 Nashua Pride food vendor form includes food vendor licensing notes and city health requirements."
  },
  {
    id: "maxt-night-market",
    name: "MAXT Night Market",
    city: "Peterborough, NH",
    opportunityType: "Night market",
    score: "78",
    bestTime: "5 PM - 9 PM",
    events: "August 7, 2026 vendor application",
    competition: "Medium",
    weather: "Low",
    traffic: "Medium",
    competitors: "Several",
    parking: "Noone Falls vendor setup",
    sales: "$450 - $1,200",
    sourceUrl: "https://maxtmakerspace.org/night-market",
    reason: "MAXT Night Market says 2026 vendor applications are open and welcomes vendors, food, and activities."
  },
  {
    id: "chocolate-expo-nh",
    name: "The Chocolate Expo New Hampshire",
    city: "Manchester, NH",
    opportunityType: "Food expo",
    score: "83",
    bestTime: "9 AM - 6 PM",
    events: "October 11, 2026 food vendor application",
    competition: "High",
    weather: "Low",
    traffic: "High",
    competitors: "Many",
    parking: "Manchester temporary food permit required",
    sales: "$800 - $2,000",
    sourceUrl: "https://www.eventeny.com/events/vendor/?id=41071",
    reason: "The Chocolate Expo 2026 NH vendor page is specifically for food/beverage vendors and references Manchester temporary food permits."
  },
  {
    id: "team-arts-fests-exeter",
    name: "TEAM Arts Fests",
    city: "Exeter, NH",
    opportunityType: "Arts festival series",
    score: "76",
    bestTime: "10 AM - 4 PM",
    events: "2026 Saturday food vendor applications",
    competition: "Medium",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Food vendor application PDF",
    sales: "$400 - $1,100",
    sourceUrl: "https://www.teamexeter.com/uploads/5/1/6/0/51609435/2026_team_fest_food_vendor_app.pdf",
    reason: "TEAM Exeter publishes a 2026 food vendor application for Saturday arts festivals."
  },
  {
    id: "lilac-family-fun-festival",
    name: "Lilac Family Fun Festival",
    city: "Rochester, NH",
    opportunityType: "Family festival",
    score: "75",
    bestTime: "11 AM - 4 PM",
    events: "2026 vendor packet",
    competition: "Low",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Several",
    parking: "Sales-food vendor fee listed",
    sales: "$350 - $1,000",
    sourceUrl: "https://www.rochesternh.gov/sites/g/files/vyhlif9211/f/pages/vendor_info_packet_2026_3.27.25_update.pdf",
    reason: "The 2026 Rochester vendor packet includes a Sales-Food fee category for the Lilac Family Fun Festival."
  },
  {
    id: "concord-market-days",
    name: "Market Days Festival",
    city: "Concord, NH",
    opportunityType: "Downtown festival",
    score: "88",
    bestTime: "11 AM - 8 PM",
    events: "2026 food vendor pricing",
    competition: "High",
    weather: "Moderate",
    traffic: "Very high",
    competitors: "Many",
    parking: "Food vendor spaces priced by frontage/depth",
    sales: "$1,000 - $2,700",
    sourceUrl: "https://intownconcord-new.growthzoneapp.com/ap/CloudFile/Download/rAAvlnvr",
    reason: "The 2026 Market Days vendor application lists food vendor categories and pricing for downtown Concord."
  },
  {
    id: "nh-jewish-festival",
    name: "New Hampshire Jewish Festival",
    city: "Newington, NH",
    opportunityType: "Cultural festival",
    score: "70",
    bestTime: "12 PM - 3 PM",
    events: "Kosher food vendor exception",
    competition: "Low",
    weather: "Moderate",
    traffic: "Medium",
    competitors: "Few",
    parking: "Food vendors only if kosher",
    sales: "$250 - $800",
    sourceUrl: "https://thejewishfestival.com/vendor/",
    reason: "The vendor page excludes food vendors unless kosher, making it a niche opportunity for qualifying trucks."
  }
];

scrapedNewHampshireOpportunityLocations.forEach((location) => {
  if (!locations.some((existingLocation) => existingLocation.id === location.id)) {
    locations.push(location);
  }
});

const suppliers = [
  {
    name: "NH Wholesale Producer Directory",
    category: "Local directory",
    city: "Statewide NH",
    products: "Wholesale-ready NH farms, food businesses, meat, eggs, dairy, maple, honey, produce, value-added goods",
    ordering: "Directory download and buyer assistance form",
    bestFor: "Finding local ingredients and farm-direct wholesale sources",
    sourceUrl: "https://www.nhfoodalliance.org/wholesale-producer-directory",
    notes: "Produced by NH Food Alliance and NH Department of Agriculture; updated at least annually."
  },
  {
    name: "Associated Grocers of New England",
    category: "Broadline",
    city: "Pembroke, NH",
    products: "Grocery, perishables, frozen, meat, deli, produce, store supplies",
    ordering: "Account-based wholesale distribution",
    bestFor: "Broadline restocking and regional grocery-style supply",
    sourceUrl: "https://agne.com/",
    notes: "New England distributor headquartered in New Hampshire."
  },
  {
    name: "Favorite Foods",
    category: "Broadline",
    city: "Somersworth, NH",
    products: "Frozen, refrigerated, dry groceries, meats, seafood, produce, dairy, bakery, beverages, cleaning supplies",
    ordering: "Foodservice account/distribution",
    bestFor: "Food truck core inventory and recurring delivery",
    sourceUrl: "https://www.favoritefoods.com/",
    notes: "Independent New England foodservice distributor based in New Hampshire."
  },
  {
    name: "BJ's Wholesale Club - Manchester",
    category: "Broadline",
    city: "Manchester, NH",
    products: "Bulk grocery, snacks, beverages, paper goods, cleaning supplies, propane exchange and club-size restocking",
    ordering: "Membership warehouse pickup",
    bestFor: "Fast route restock near Manchester events",
    sourceUrl: "https://www.bjs.com/cl/manchester/0220",
    notes: "Warehouse club option for emergency restocking and bulk packaged items."
  },
  {
    name: "BJ's Wholesale Club - Nashua",
    category: "Broadline",
    city: "Nashua, NH",
    products: "Bulk pantry, drinks, paper goods, cleaning supplies, snacks and event restock items",
    ordering: "Membership warehouse pickup",
    bestFor: "Southern NH route restock",
    sourceUrl: "https://www.bjs.com/cl/nashua/0039",
    notes: "Warehouse club option near Nashua and Massachusetts border routes."
  },
  {
    name: "Costco Wholesale - Nashua",
    category: "Broadline",
    city: "Nashua, NH",
    products: "Bulk grocery, beverages, disposable goods, business member supplies and route restock items",
    ordering: "Membership warehouse pickup",
    bestFor: "Bulk buying for high-volume service days",
    sourceUrl: "https://www.costco.com/warehouse-locations/nashua-NH-307.html",
    notes: "Costco lists a Nashua warehouse location with business member hours."
  },
  {
    name: "Colony Foods",
    category: "Broadline",
    city: "Serves NH",
    products: "Restaurant foodservice distribution and wholesale supply options",
    ordering: "Wholesale restaurant distributor",
    bestFor: "Flexible foodservice supply for small operators",
    sourceUrl: "https://www.colonyfoods.com/food-distributor/new-hampshire-food-supplier",
    notes: "Markets New Hampshire-specific restaurant supply support."
  },
  {
    name: "Muzzarelli Farms",
    category: "Produce",
    city: "Serves NH",
    products: "Sweet potatoes, yams, greens, kale, peppers, tomatoes, cucumbers, seasonal produce",
    ordering: "Wholesale produce distribution",
    bestFor: "Fresh produce and seasonal vegetables",
    sourceUrl: "https://muzzarellifarms.com/muzzarelli-farms-wholesale-produce-new-hampshire.html",
    notes: "Wholesale produce page specifically references New Hampshire customers."
  },
  {
    name: "Sal's Fresh Seafood",
    category: "Seafood",
    city: "Meredith, NH",
    products: "Fresh New England seafood, retail and wholesale",
    ordering: "Wholesale and retail seafood supply",
    bestFor: "Seafood specials and Lakes Region sourcing",
    sourceUrl: "https://www.salsfreshseafood.com/",
    notes: "Public site describes wholesale and retail seafood supply."
  },
  {
    name: "Seaport Fish",
    category: "Seafood",
    city: "Rye, NH",
    products: "Fresh seafood for restaurants and public retail",
    ordering: "Wholesale and retail",
    bestFor: "Seacoast seafood sourcing",
    sourceUrl: "https://www.seaportfish.com/",
    notes: "Site says it supplies restaurants across the Seacoast."
  },
  {
    name: "Captain Marden's Seafood",
    category: "Seafood",
    city: "Delivers to NH",
    products: "Fresh seafood, fish, shellfish, wholesale delivery",
    ordering: "Wholesale delivery route",
    bestFor: "Restaurant-grade seafood deliveries",
    sourceUrl: "https://www.captainmardens.com/wholesale/",
    notes: "Wholesale division says trucks deliver daily to restaurants and supermarkets from RI to NH."
  },
  {
    name: "Lemay & Sons Beef",
    category: "Meat",
    city: "Goffstown, NH",
    products: "Wholesale and retail meats, beef, BBQ-focused supply",
    ordering: "Wholesale and retail meat market",
    bestFor: "Beef, burger, BBQ, and steak menu items",
    sourceUrl: "https://lemayandsonsbeef-bbq.com/",
    notes: "Site describes more than 60 years in the wholesale and retail meat market in New Hampshire."
  },
  {
    name: "GoFoodservice",
    category: "Equipment",
    city: "Ships to Manchester/NH",
    products: "Commercial equipment, refrigeration, ranges, smallwares, trash bags, restaurant supplies",
    ordering: "Online wholesale pricing",
    bestFor: "Equipment, disposables, and replacement supplies",
    sourceUrl: "https://www.gofoodservice.com/local/manchester-nh",
    notes: "Manchester page says 60,000+ products ship to New Hampshire operators."
  },
  {
    name: "RestaurantSupply.com",
    category: "Equipment",
    city: "Ships to Manchester/NH",
    products: "Commercial cooking equipment, refrigeration, smallwares, disposables, storage and prep supplies",
    ordering: "Online restaurant supply",
    bestFor: "Smallwares, replacement gear, and online equipment ordering",
    sourceUrl: "https://www.restaurantsupply.com/pages/new-hampshire-manchester-restaurant-supply-store",
    notes: "Manchester restaurant supply page targets New Hampshire foodservice operators."
  },
  {
    name: "KaTom Restaurant Supply",
    category: "Equipment",
    city: "Ships to Manchester/NH",
    products: "Restaurant equipment, tools, supplies, smallwares, refrigeration",
    ordering: "Online restaurant supply",
    bestFor: "Large equipment catalog and quick ordering",
    sourceUrl: "https://www.katom.com/location/nh/manchester",
    notes: "Manchester page targets NH restaurant operators."
  },
  {
    name: "Summit Supply",
    category: "Equipment",
    city: "Brentwood, NH",
    products: "Restaurant, kitchen, and bakery equipment",
    ordering: "Local supplier contact",
    bestFor: "Kitchen and bakery equipment sourcing",
    sourceUrl: "https://summitsupply.us/site-content/uploads/2023/07/Summit-Supply-Overview.pdf",
    notes: "Public overview lists Brentwood, NH location and restaurant/kitchen/bakery equipment focus."
  },
  {
    name: "CASCO Food Equipment Service",
    category: "Repair",
    city: "Manchester, NH",
    products: "Commercial food equipment repairs, refrigeration, HVAC, gas, electric, steam, replacement parts",
    ordering: "Request service",
    bestFor: "Truck equipment repair and emergency service",
    sourceUrl: "https://www.cascosvc.com/",
    notes: "Manchester-based provider serving New Hampshire foodservice equipment repair needs."
  },
  {
    name: "Johnstone Supply Manchester",
    category: "Refrigeration",
    city: "Manchester, NH",
    products: "HVACR parts, supplies, equipment",
    ordering: "Wholesale account required",
    bestFor: "Refrigeration and HVAC parts through licensed trade accounts",
    sourceUrl: "https://www.johnstonesupply.com/store581/request-account",
    notes: "Wholesale only; useful for refrigeration/HVAC support through qualified professionals."
  },
  {
    name: "CCM Supply",
    category: "Paper and cleaning",
    city: "Manchester, NH",
    products: "Janitorial supplies, cleaning products, equipment repair",
    ordering: "Local distributor contact",
    bestFor: "Cleaning and sanitation supplies",
    sourceUrl: "https://ccmsupply.weebly.com/",
    notes: "Manchester janitorial supply distributor serving Southern New Hampshire."
  },
  {
    name: "Alternative Sales",
    category: "Equipment",
    city: "Kingston, NH",
    products: "Restaurant equipment and supplies",
    ordering: "Local equipment supplier",
    bestFor: "Used or local commercial equipment sourcing",
    sourceUrl: "https://nhsaves.com/wp-content/uploads/2021/10/NH-Foodservice-Dealer-List.pdf",
    notes: "Listed in NH foodservice dealer resources as a Kingston, NH equipment dealer."
  }
];

const starterMarketplaceListings = [
  {
    id: "starter-step-van",
    title: "2017 step van food truck shell",
    category: "Food truck",
    city: "Manchester, NH",
    price: 52000,
    zip: "03101",
    description: "Starter truck shell with serving window, generator compartment, and room for custom buildout.",
    contactUrl: "https://www.commercialtrucktrader.com/food-truck/trucks-for-sale",
    affiliateUrl: "",
    imageUrls: ["https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=900&q=80"],
    videoUrl: "",
    sellerType: "Directory lead"
  },
  {
    id: "starter-trailer",
    title: "16 foot concession trailer",
    category: "Trailer",
    city: "New England",
    price: 28500,
    zip: "",
    description: "Concession trailer style listing for startup operators comparing truck versus trailer costs.",
    contactUrl: "https://www.usedvending.com/food-trailers/",
    affiliateUrl: "",
    imageUrls: ["https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80"],
    videoUrl: "",
    sellerType: "Directory lead"
  },
  {
    id: "starter-generator",
    title: "Quiet commercial generator",
    category: "Power",
    city: "Ships to NH",
    price: 4200,
    zip: "",
    description: "Power listing example for trucks needing event-ready generator capacity.",
    contactUrl: "https://www.gofoodservice.com/",
    affiliateUrl: "",
    imageUrls: [],
    videoUrl: "",
    sellerType: "Supplier lead"
  },
  {
    id: "starter-griddle",
    title: "36 inch flat top griddle",
    category: "Cooking equipment",
    city: "New Hampshire",
    price: 1800,
    zip: "",
    description: "Common food truck cooking equipment listing for burgers, tacos, breakfast, and festival menus.",
    contactUrl: "https://www.katom.com/",
    affiliateUrl: "",
    imageUrls: [],
    videoUrl: "",
    sellerType: "Supplier lead"
  },
  {
    id: "starter-refrigeration",
    title: "Undercounter refrigeration unit",
    category: "Refrigeration",
    city: "New England",
    price: 2300,
    zip: "",
    description: "Cold storage equipment listing example for prep and service line upgrades.",
    contactUrl: "https://www.gofoodservice.com/",
    affiliateUrl: "",
    imageUrls: [],
    videoUrl: "",
    sellerType: "Supplier lead"
  }
];

const cityCoordinates = {
  "lowell, ma": { x: 42, y: 70 },
  "manchester, nh": { x: 43, y: 55 },
  "concord, nh": { x: 44, y: 43 },
  "nashua, nh": { x: 40, y: 65 },
  "milford, nh": { x: 35, y: 60 },
  "hampton, nh": { x: 58, y: 60 },
  "portsmouth, nh": { x: 60, y: 52 },
  "deerfield, nh": { x: 52, y: 47 },
  "contocook, nh": { x: 38, y: 42 },
  "lancaster, nh": { x: 37, y: 11 },
  "keene, nh": { x: 24, y: 54 },
  "rochester, nh": { x: 58, y: 45 },
  "newbury, nh": { x: 33, y: 36 },
  "north conway, nh": { x: 63, y: 25 },
  "sunapee, nh": { x: 31, y: 38 },
  "wolfeboro, nh": { x: 57, y: 38 },
  "salem, nh": { x: 45, y: 67 },
  "derry, nh": { x: 46, y: 62 },
  "peterborough, nh": { x: 30, y: 57 },
  "exeter, nh": { x: 56, y: 58 },
  "bennington, vt": { x: 9, y: 59 },
  "burlington, vt": { x: 12, y: 22 },
  "quechee, vt": { x: 20, y: 37 },
  "west springfield, ma": { x: 20, y: 78 },
  "topsfield, ma": { x: 52, y: 74 },
  "cambridge, ma": { x: 47, y: 80 },
  "marshfield, ma": { x: 57, y: 88 },
  "durham, ct": { x: 22, y: 93 },
  "norwalk, ct": { x: 28, y: 98 },
  "unity, me": { x: 86, y: 20 },
  "new england": { x: 48, y: 50 }
};

const zipLookup = {
  "01852": "Lowell, MA",
  "03101": "Manchester, NH",
  "03301": "Concord, NH",
  "03060": "Nashua, NH",
  "03055": "Milford, NH",
  "03842": "Hampton, NH",
  "03801": "Portsmouth, NH",
  "03037": "Deerfield, NH",
  "03229": "Contoocook, NH",
  "03584": "Lancaster, NH",
  "03431": "Keene, NH",
  "03867": "Rochester, NH",
  "03860": "North Conway, NH",
  "03255": "Newbury, NH",
  "03782": "Sunapee, NH",
  "03894": "Wolfeboro, NH",
  "03079": "Salem, NH",
  "03038": "Derry, NH",
  "03458": "Peterborough, NH",
  "03833": "Exeter, NH"
};

const defaultWeeklyPlan = [
  {
    day: "Monday",
    location: "Downtown Lowell",
    bestTime: "11-2",
    score: "87"
  },
  {
    day: "Tuesday",
    location: "UMass Lowell Area",
    bestTime: "5-8",
    score: "82"
  },
  {
    day: "Friday",
    location: "Brewery District",
    bestTime: "6-10",
    score: "91"
  }
];

let selectedLocation = locations[0];
let selectedPipelineLocationId = "";
let serviceTimerId = null;
let serviceStartTime = null;
let serviceElapsedMilliseconds = 0;
let showSavedLocationsOnly = false;
const weatherCache = new Map();

const weatherCodeLabels = {
  0: "Clear",
  1: "Mostly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Rime fog",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Heavy drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  71: "Light snow",
  73: "Snow",
  75: "Heavy snow",
  80: "Rain showers",
  81: "Rain showers",
  82: "Heavy showers",
  95: "Thunderstorm",
  96: "Thunderstorm with hail",
  99: "Thunderstorm with hail"
};

const stateNamesByAbbreviation = {
  CT: "Connecticut",
  MA: "Massachusetts",
  ME: "Maine",
  NH: "New Hampshire",
  RI: "Rhode Island",
  VT: "Vermont"
};

function getWeatherLabel(code) {
  return weatherCodeLabels[code] || "Weather update";
}

function getWeatherRisk(weather) {
  if (!weather) {
    return "Unknown";
  }

  if (weather.precipitationProbability >= 60 || weather.windSpeed >= 25 || weather.weatherCode >= 95) {
    return "High";
  }

  if (weather.precipitationProbability >= 35 || weather.precipitation > 0 || weather.windSpeed >= 15) {
    return "Moderate";
  }

  return "Low";
}

function getWeatherCity(location = selectedLocation) {
  return location && location.city ? location.city : document.querySelector("#city").value || "Lowell, MA";
}

async function geocodeCity(city) {
  const [cityName, stateAbbreviation] = city.split(",").map((part) => part.trim());
  const expectedState = stateNamesByAbbreviation[stateAbbreviation] || stateAbbreviation;
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName || city)}&count=10&language=en&format=json`
  );
  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error(`Weather location not found for ${city}.`);
  }

  return (
    data.results.find((result) => result.country_code === "US" && result.admin1 === expectedState) ||
    data.results.find((result) => result.country_code === "US") ||
    data.results[0]
  );
}

async function fetchWeatherForCity(city) {
  const cacheKey = city.toLowerCase();
  const cachedWeather = weatherCache.get(cacheKey);

  if (cachedWeather && Date.now() - cachedWeather.fetchedAt < 15 * 60 * 1000) {
    return cachedWeather;
  }

  const place = await geocodeCity(city);
  const forecastUrl = new URL("https://api.open-meteo.com/v1/forecast");

  forecastUrl.search = new URLSearchParams({
    latitude: place.latitude,
    longitude: place.longitude,
    current: "temperature_2m,precipitation,weather_code,wind_speed_10m",
    hourly: "precipitation_probability",
    forecast_days: "1",
    timezone: "auto",
    temperature_unit: "fahrenheit",
    wind_speed_unit: "mph",
    precipitation_unit: "inch"
  });

  const response = await fetch(forecastUrl);
  const data = await response.json();
  const currentHour = new Date(data.current.time).getHours();
  const precipitationProbability = data.hourly && data.hourly.precipitation_probability
    ? data.hourly.precipitation_probability[currentHour] || 0
    : 0;
  const weather = {
    city,
    placeName: `${place.name}${place.admin1 ? `, ${place.admin1}` : ""}`,
    temperature: Math.round(data.current.temperature_2m),
    precipitation: data.current.precipitation,
    precipitationProbability,
    windSpeed: Math.round(data.current.wind_speed_10m),
    weatherCode: data.current.weather_code,
    fetchedAt: Date.now()
  };

  weather.risk = getWeatherRisk(weather);
  weatherCache.set(cacheKey, weather);
  return weather;
}

function renderWeather(weather) {
  if (!weather) {
    weatherSummary.textContent = "Weather not loaded";
    weatherDetail.textContent = "Refresh weather to check service risk for the selected city.";
    return;
  }

  weatherSummary.textContent = `${weather.temperature}°F, ${getWeatherLabel(weather.weatherCode)}`;
  weatherDetail.textContent = `${weather.placeName}: ${weather.precipitationProbability}% rain chance, ${weather.windSpeed} mph wind, ${weather.risk.toLowerCase()} service risk.`;

  if (selectedLocation && getWeatherCity(selectedLocation).toLowerCase() === weather.city.toLowerCase()) {
    selectedLocation.weather = weather.risk;
    renderDetail();
    renderResults();
  }
}

async function refreshWeather(location = selectedLocation) {
  const city = getWeatherCity(location);

  weatherSummary.textContent = "Checking weather...";
  weatherDetail.textContent = `Looking up forecast for ${city}.`;

  try {
    const weather = await fetchWeatherForCity(city);
    renderWeather(weather);
  } catch (error) {
    weatherSummary.textContent = "Weather unavailable";
    weatherDetail.textContent = error.message;
  }
}

function formatTimerDuration(milliseconds) {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

function formatTimeInput(date) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function getServiceMilliseconds() {
  if (serviceStartTime) {
    return Date.now() - serviceStartTime.getTime();
  }

  if (serviceElapsedMilliseconds > 0) {
    return serviceElapsedMilliseconds;
  }

  if (!checkinStart.value || !checkinEnd.value) {
    return 0;
  }

  const [startHour, startMinute] = checkinStart.value.split(":").map(Number);
  const [endHour, endMinute] = checkinEnd.value.split(":").map(Number);
  const start = new Date();
  const end = new Date();

  start.setHours(startHour, startMinute, 0, 0);
  end.setHours(endHour, endMinute, 0, 0);

  if (end < start) {
    end.setDate(end.getDate() + 1);
  }

  return end - start;
}

function updateTimerReadout() {
  const elapsedMilliseconds = getServiceMilliseconds();
  const elapsedHours = elapsedMilliseconds / 3600000;
  const sales = Number(checkinSales.value) || 0;
  const hourlyRate = elapsedHours > 0 ? Math.round(sales / elapsedHours) : 0;

  timerElapsed.textContent = formatTimerDuration(elapsedMilliseconds);
  timerRate.textContent = `$${hourlyRate.toLocaleString()}/hr`;
}

function startServiceTimer() {
  serviceStartTime = new Date();
  serviceElapsedMilliseconds = 0;
  checkinDate.value = serviceStartTime.toISOString().slice(0, 10);
  checkinStart.value = formatTimeInput(serviceStartTime);
  checkinEnd.value = "";
  checkinStatus.textContent = "Service timer is running. Update sales as orders come in.";
  updateTimerReadout();

  clearInterval(serviceTimerId);
  serviceTimerId = setInterval(updateTimerReadout, 1000);
}

function stopServiceTimer() {
  const stoppedAt = new Date();

  if (!serviceStartTime) {
    checkinStatus.textContent = "Start the service timer first, or enter times manually.";
    updateTimerReadout();
    return;
  }

  serviceElapsedMilliseconds = stoppedAt - serviceStartTime;
  checkinEnd.value = formatTimeInput(stoppedAt);
  clearInterval(serviceTimerId);
  serviceTimerId = null;
  serviceStartTime = null;
  updateTimerReadout();
  checkinStatus.textContent = "Service stopped. Review sales, then save the check-in.";
}

function showScreen(id) {
  screens.forEach((screen) => {
    screen.classList.toggle("active", screen.id === id);
  });

  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.screen === id);
  });

  document.querySelector(".sidebar").classList.remove("nav-open");
}

function getSalesStats() {
  const stats = new Map();

  getSavedCheckins().forEach((checkin) => {
    const current = stats.get(checkin.location) || { location: checkin.location, total: 0, count: 0 };
    current.total += Number(checkin.sales);
    current.count += 1;
    current.average = Math.round(current.total / current.count);
    stats.set(checkin.location, current);
  });

  return [...stats.values()].sort((a, b) => b.average - a.average);
}

function getLocationScore(location) {
  const stat = getSalesStats().find((item) => item.location === location.name);
  let baseScore = Number(location.score);

  if (location.weather === "High") {
    baseScore -= 6;
  } else if (location.weather === "Moderate") {
    baseScore -= 2;
  }

  if (!stat) {
    return Math.max(1, Math.min(100, baseScore));
  }

  if (stat.average >= 1000) {
    return Math.min(100, baseScore + 6);
  }

  if (stat.average >= 750) {
    return Math.min(100, baseScore + 3);
  }

  if (stat.average < 500) {
    return Math.max(1, baseScore - 5);
  }

  return Math.max(1, Math.min(100, baseScore));
}

function getTopLocation() {
  return [...locations].sort((a, b) => getLocationScore(b) - getLocationScore(a))[0] || locations[0];
}

function setSelectedLocation(locationId) {
  selectedLocation = locations.find((location) => location.id === locationId) || selectedLocation || locations[0];
  renderDashboard();
  renderDetail();
  refreshWeather(selectedLocation);
}

function renderDashboard() {
  const topLocation = getTopLocation();
  const salesStats = getSalesStats();

  dashboardBestName.textContent = `${topLocation.name} - ${topLocation.bestTime}`;
  dashboardBestScore.textContent = `${getLocationScore(topLocation)}/100`;
  dashboardBestTime.textContent = topLocation.bestTime;
  dashboardBestReason.textContent = topLocation.reason;
  dashboardSales.textContent = topLocation.sales;

  if (salesStats.length > 0) {
    dashboardLearningTitle.textContent = `${salesStats[0].location}: $${salesStats[0].average} avg`;
    dashboardLearningCopy.textContent = "Recommendations now include your recorded sales history.";
  } else {
    dashboardLearningTitle.textContent = "No sales logged yet";
    dashboardLearningCopy.textContent = "Check in after a service to teach the planner which spots actually perform.";
  }
}

function renderDetail() {
  if (!selectedLocation) {
    return;
  }

  const history = getLocationHistorySummary(selectedLocation.name);

  detailName.textContent = selectedLocation.name;
  detailReason.textContent = selectedLocation.reason;
  detailScore.textContent = `${getLocationScore(selectedLocation)}/100`;
  detailTraffic.textContent = selectedLocation.traffic;
  detailEvents.textContent = selectedLocation.events;
  detailCompetition.textContent = selectedLocation.competitors;
  detailWeather.textContent = `${selectedLocation.weather} risk`;
  detailParking.textContent = selectedLocation.parking;

  if (!history) {
    detailHistoryTitle.textContent = "No history yet";
    detailHistoryList.innerHTML = `<p class="helper-text">Check in at this location to start building visit history.</p>`;
    return;
  }

  detailHistoryTitle.textContent = `${history.count} visit${history.count === 1 ? "" : "s"} - $${history.averageSales.toLocaleString()} avg sales, $${history.averageProfit.toLocaleString()} avg profit`;
  detailHistoryList.innerHTML = `
    ${renderHistoryRows(history.checkins)}
    <div class="owner-roster">
      <p class="eyebrow">Owners Checked In Here</p>
      ${renderOwnerRoster(selectedLocation.name)}
    </div>
  `;
}

function getSavedPlan() {
  const savedPlan = appStorage.getItem(storageKeys.weeklyPlan);

  try {
    return savedPlan ? JSON.parse(savedPlan) : defaultWeeklyPlan;
  } catch (error) {
    return defaultWeeklyPlan;
  }
}

function savePlan(plan) {
  appStorage.setItem(storageKeys.weeklyPlan, JSON.stringify(plan));
}

function getSavedLocationIds() {
  return getSavedCollection(storageKeys.savedLocations);
}

function saveLocationIds(locationIds) {
  saveCollection(storageKeys.savedLocations, locationIds);
}

function isLocationTracked(locationId) {
  return getSavedLocationIds().includes(locationId);
}

function toggleTrackedLocation(locationId) {
  const savedIds = getSavedLocationIds();
  const isTracked = savedIds.includes(locationId);
  const nextIds = isTracked ? savedIds.filter((id) => id !== locationId) : [locationId, ...savedIds];

  saveLocationIds(nextIds);
  renderResults();
}

function trackLocation(locationId) {
  const savedIds = getSavedLocationIds();

  if (!savedIds.includes(locationId)) {
    saveLocationIds([locationId, ...savedIds]);
  }
}

function isLocationOnRoute(locationName) {
  return getSavedPlan().some((item) => item.location === locationName);
}

function getSavedCheckins() {
  const savedCheckins = appStorage.getItem(storageKeys.checkins);

  try {
    return savedCheckins ? JSON.parse(savedCheckins) : [];
  } catch (error) {
    return [];
  }
}

function saveCheckins(checkins) {
  appStorage.setItem(storageKeys.checkins, JSON.stringify(checkins));
}

function getSavedCollection(key) {
  const savedItems = appStorage.getItem(key);

  try {
    return savedItems ? JSON.parse(savedItems) : [];
  } catch (error) {
    return [];
  }
}

function saveCollection(key, items) {
  appStorage.setItem(key, JSON.stringify(items));
}

function getPipelineRecords() {
  return getSavedCollection(storageKeys.pipeline);
}

function savePipelineRecords(records) {
  saveCollection(storageKeys.pipeline, records);
}

function getPriceRecords() {
  return getSavedCollection(storageKeys.prices);
}

function savePriceRecords(records) {
  saveCollection(storageKeys.prices, records);
}

function getReminderRecords() {
  return getSavedCollection(storageKeys.reminders);
}

function saveReminderRecords(records) {
  saveCollection(storageKeys.reminders, records);
}

function getSquareImports() {
  return getSavedCollection(storageKeys.squareImports);
}

function saveSquareImports(imports) {
  saveCollection(storageKeys.squareImports, imports);
}

function getSquareDemoTransactions() {
  return getSavedCollection(storageKeys.squareDemoTransactions);
}

function saveSquareDemoTransactions(transactions) {
  saveCollection(storageKeys.squareDemoTransactions, transactions);
}

function getMarketplaceListings() {
  return getSavedCollection(storageKeys.marketplaceListings);
}

function saveMarketplaceListings(listings) {
  saveCollection(storageKeys.marketplaceListings, listings);
}

function getFeedbackRecords() {
  return getSavedCollection(storageKeys.feedback);
}

function saveFeedbackRecords(records) {
  saveCollection(storageKeys.feedback, records);
}

function getForumPosts() {
  return getSavedCollection(storageKeys.forumPosts);
}

function saveForumPosts(posts) {
  saveCollection(storageKeys.forumPosts, posts);
}

function getSupplierPartners() {
  return getSavedCollection(storageKeys.supplierPartners);
}

function saveSupplierPartners(partners) {
  saveCollection(storageKeys.supplierPartners, partners);
}

function getPublicListings() {
  return getSavedCollection(storageKeys.publicListings);
}

function savePublicListings(listings) {
  saveCollection(storageKeys.publicListings, listings);
}

function getTruckProfiles() {
  return getSavedCollection(storageKeys.truckProfiles);
}

function saveTruckProfiles(profiles) {
  saveCollection(storageKeys.truckProfiles, profiles);
}

function getPipelineForLocation(locationName) {
  return getPipelineRecords().find((record) => record.location === locationName);
}

function getPipelineForLocationId(locationId) {
  return getPipelineRecords().find((record) => record.locationId === locationId);
}

function addLocationToPipeline(locationId, status = "Interested") {
  const location = locations.find((item) => item.id === locationId);

  if (!location) {
    return null;
  }

  const existing = getPipelineForLocationId(location.id);
  const record = {
    location: location.name,
    locationId: location.id,
    status: existing?.status || status,
    deadline: existing?.deadline || "",
    fee: existing?.fee || 0,
    webpage: existing?.webpage || location.sourceUrl || "",
    documents: existing?.documents || "",
    documentFiles: existing?.documentFiles || [],
    photoFiles: existing?.photoFiles || [],
    steps: existing?.steps || getDefaultPipelineSteps(),
    notes: existing?.notes || location.ownerNotes || "",
    aiSummary: existing?.aiSummary || "",
    hidden: false,
    updatedAt: new Date().toISOString()
  };
  const records = getPipelineRecords().filter((item) => item.locationId !== location.id);

  savePipelineRecords([record, ...records]);
  trackLocation(location.id);
  renderOpsLocationOptions();
  renderPipelineList();
  renderResults();
  renderCalendar();
  renderReports();
  return record;
}

function getLocationCheckins(locationName) {
  return getSavedCheckins().filter((checkin) => checkin.location === locationName);
}

function getLocationHistorySummary(locationName) {
  const checkins = getLocationCheckins(locationName);

  if (checkins.length === 0) {
    return null;
  }

  const totalSales = checkins.reduce((sum, checkin) => sum + Number(checkin.sales || 0), 0);
  const totalCosts = checkins.reduce((sum, checkin) => sum + Number(checkin.costs || 0), 0);
  const totalProfit = totalSales - totalCosts;
  const averageSales = Math.round(totalSales / checkins.length);
  const averageProfit = Math.round(totalProfit / checkins.length);
  const lastVisit = checkins[0];

  return {
    count: checkins.length,
    totalSales,
    totalCosts,
    totalProfit,
    averageSales,
    averageProfit,
    lastVisit,
    checkins
  };
}

function getVisibleOwnersAtLocation(locationName) {
  return getSavedCheckins().filter((checkin) => checkin.location === locationName && checkin.visibleToOwners);
}

function renderOwnerRoster(locationName) {
  const owners = getVisibleOwnersAtLocation(locationName);

  if (owners.length === 0) {
    return `<p class="helper-text">No owners are publicly visible at this location yet.</p>`;
  }

  return owners
    .slice(0, 6)
    .map(
      (owner) => `
        <div class="owner-roster-item">
          <strong>${owner.businessName || "Food truck owner"}</strong>
          <span>${owner.date}, ${owner.startTime}-${owner.endTime}</span>
          <p>${owner.ownerContact ? `Contact: ${owner.ownerContact}` : "No contact shared."}</p>
        </div>
      `
    )
    .join("");
}

function renderHistoryRows(checkins) {
  return checkins
    .slice(0, 3)
    .map(
      (checkin) => `
        <div class="visit-history-item">
          <div>
            <strong>${checkin.date}</strong>
            <span>${checkin.startTime} - ${checkin.endTime}</span>
          </div>
          <strong>$${Number(checkin.sales).toLocaleString()} sales</strong>
          <p>
            $${(Number(checkin.sales || 0) - Number(checkin.costs || 0)).toLocaleString()} profit.
            ${checkin.bestSellers ? `Best sellers: ${checkin.bestSellers}.` : ""}
            ${checkin.competitors !== "" && checkin.competitors !== undefined ? `Competitors: ${checkin.competitors}.` : ""}
            ${checkin.notes || "No notes saved."}
          </p>
        </div>
      `
    )
    .join("");
}

function getSavedCustomLocations() {
  const savedLocations = appStorage.getItem(storageKeys.customLocations);

  try {
    return savedLocations ? JSON.parse(savedLocations) : [];
  } catch (error) {
    return [];
  }
}

function saveCustomLocations(customLocations) {
  appStorage.setItem(storageKeys.customLocations, JSON.stringify(customLocations));
}

function makeLocationId(name, city) {
  return `${name}-${city}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function loadCustomLocations() {
  getSavedCustomLocations().forEach((customLocation) => {
    const existingIndex = locations.findIndex((location) => location.id === customLocation.id);

    if (existingIndex >= 0) {
      locations[existingIndex] = customLocation;
    } else {
      locations.push(customLocation);
    }
  });

  getPublicListings().forEach((listing) => {
    const opportunity = makeLocationFromPublicListing(listing);
    const existingIndex = locations.findIndex((location) => location.id === opportunity.id);

    if (existingIndex >= 0) {
      locations[existingIndex] = opportunity;
    } else {
      locations.push(opportunity);
    }
  });
}

function makeLocationFromPublicListing(listing) {
  return {
    id: listing.id,
    name: listing.name,
    city: listing.city,
    opportunityType: listing.type,
    score: "78",
    bestTime: listing.bestTime || "Host entered",
    events: listing.type,
    competition: "Unknown",
    weather: "Unknown",
    traffic: "Host lead",
    competitors: "Unknown",
    parking: listing.notes || "Host-submitted space",
    sales: "$0 - $0",
    sourceUrl: listing.sourceUrl,
    ownerNotes: listing.notes,
    hostFee: listing.fee,
    reason: `Host-submitted listing. ${listing.notes || "Review contact details and permit needs before booking."}`
  };
}

function saveCustomLocation() {
  const name = customLocationName.value.trim();
  const city = customLocationCity.value.trim() || document.querySelector("#city").value.trim() || "New England";
  const score = Math.max(1, Math.min(100, Number(customLocationScore.value) || 75));

  if (!name) {
    customLocationStatus.textContent = "Add a location name first.";
    return;
  }

  const customLocation = {
    id: makeLocationId(name, city),
    name,
    city,
    opportunityType: customLocationType.value,
    score: String(score),
    bestTime: customLocationTime.value.trim() || "Owner entered",
    events: customLocationType.value,
    competition: "Unknown",
    weather: "Unknown",
    traffic: "Unknown",
    competitors: "Unknown",
    parking: customLocationNotes.value.trim() || "Owner notes saved",
    sales: "$0 - $0",
    sourceUrl: customLocationSource.value.trim(),
    ownerNotes: customLocationNotes.value.trim(),
    reason: customLocationNotes.value.trim()
      ? `Owner note: ${customLocationNotes.value.trim()}`
      : "Owner-added location. Add check-ins to help the planner learn how it performs."
  };
  const savedLocations = getSavedCustomLocations().filter((location) => location.id !== customLocation.id);

  saveCustomLocations([customLocation, ...savedLocations]);
  loadCustomLocations();
  selectedLocation = customLocation;
  renderCheckinLocationOptions();
  renderDashboard();
  renderDetail();
  renderResults();
  customLocationStatus.textContent = `${name} was added to your locations.`;
  customLocationName.value = "";
  customLocationTime.value = "";
  customLocationSource.value = "";
  customLocationNotes.value = "";
  showSavedLocationsOnly = true;
  trackLocation(customLocation.id);
  renderResults();
  showScreen("find");
}

function makePlanItem(location, day) {
  return {
    day,
    location: location.name,
    bestTime: location.bestTime,
    score: String(getLocationScore(location))
  };
}

function getRoutePlanLabels() {
  const start = routePlanStart.value ? new Date(`${routePlanStart.value}T12:00:00`) : new Date();
  const end = routePlanEnd.value ? new Date(`${routePlanEnd.value}T12:00:00`) : null;
  const weekdayLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  if (routePlanPeriod.value === "month") {
    return Array.from({ length: 12 }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index * 2);
      return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
    });
  }

  if (routePlanPeriod.value === "range" && end && end >= start) {
    const labels = [];
    const current = new Date(start);

    while (current <= end && labels.length < 21) {
      labels.push(current.toLocaleDateString(undefined, { month: "short", day: "numeric" }));
      current.setDate(current.getDate() + 1);
    }

    return labels.length ? labels : weekdayLabels;
  }

  return weekdayLabels;
}

function addLocationToPlan(location, day = "Monday") {
  const plan = getSavedPlan();
  const alreadySaved = plan.some((item) => item.location === location.name);

  if (!alreadySaved) {
    plan.unshift(makePlanItem(location, day));
    savePlan(plan);
    renderWeeklyPlan();
    renderCalendar();
  }

  return !alreadySaved;
}

function setDefaultCheckinFields() {
  const now = new Date();

  serviceElapsedMilliseconds = 0;
  checkinDate.value = now.toISOString().slice(0, 10);
  checkinStart.value = "11:00";
  checkinEnd.value = "14:00";
  updateTimerReadout();
}

function setDefaultRoutePlanDates() {
  const start = new Date();
  const end = new Date();

  end.setDate(start.getDate() + 6);
  routePlanStart.value = start.toISOString().slice(0, 10);
  routePlanEnd.value = end.toISOString().slice(0, 10);
  findStartDate.value = routePlanStart.value;
  findEndDate.value = routePlanEnd.value;
}

function renderCheckinLocationOptions() {
  checkinLocation.innerHTML = locations
    .map((location) => `<option value="${location.id}">${location.name}</option>`)
    .join("");

  if (selectedLocation) {
    checkinLocation.value = selectedLocation.id;
  }

  renderOpsLocationOptions();
  renderSquareLocationOptions();
}

function renderSquareLocationOptions() {
  squareImportLocation.innerHTML = locations
    .map((location) => `<option value="${location.id}">${location.name}</option>`)
    .join("");
}

function renderCheckinHistory() {
  const checkins = getSavedCheckins();
  const salesStats = getSalesStats();

  checkinHistoryBody.innerHTML = checkins.length
    ? checkins
        .map(
          (checkin) => `
            <tr>
              <td>${checkin.date}</td>
              <td>${checkin.startTime} - ${checkin.endTime}</td>
              <td>${checkin.location}</td>
              <td>$${Number(checkin.sales).toLocaleString()}</td>
              <td>$${(Number(checkin.sales || 0) - Number(checkin.costs || 0)).toLocaleString()}</td>
              <td>
                ${checkin.bestSellers ? `Best sellers: ${checkin.bestSellers}. ` : ""}
                ${checkin.competitors !== "" && checkin.competitors !== undefined ? `Competitors: ${checkin.competitors}. ` : ""}
                ${checkin.notes || ""}
              </td>
            </tr>
          `
        )
        .join("")
    : `
      <tr>
        <td colspan="5">No check-ins recorded yet.</td>
      </tr>
    `;

  if (salesStats.length === 0) {
    salesInsightTitle.textContent = "Start logging sales";
    salesInsightCopy.textContent = "After a few check-ins, the app can compare average sales by spot and adjust recommendations.";
    bestSalesLocation.textContent = "--";
    lowestSalesLocation.textContent = "--";
    return;
  }

  const best = salesStats[0];
  const lowest = salesStats[salesStats.length - 1];

  salesInsightTitle.textContent = `${best.location} is leading`;
  salesInsightCopy.textContent = `Average sales there are $${best.average}. The planner adds weight to locations with stronger recorded performance.`;
  bestSalesLocation.textContent = `${best.location} $${best.average}`;
  lowestSalesLocation.textContent = `${lowest.location} $${lowest.average}`;
}

async function saveCheckinToDatabase(checkin) {
  if (!dbClient) {
    return false;
  }

  const { data: sessionData } = await dbClient.auth.getSession();

  if (!sessionData.session) {
    return false;
  }

  const { error } = await dbClient.from("sales_checkins").insert({
    user_id: sessionData.session.user.id,
    business_profile_id: appStorage.getItem(storageKeys.activeBusinessProfileId),
    location_name: checkin.location,
    service_date: checkin.date,
    start_time: checkin.startTime,
    end_time: checkin.endTime,
    sales_total: Number(checkin.sales),
    costs_total: Number(checkin.costs || 0),
    best_sellers: checkin.bestSellers,
    competitors: checkin.competitors === "" || checkin.competitors === undefined ? null : Number(checkin.competitors),
    notes: checkin.notes
  });

  return !error;
}

function saveCheckin() {
  const location = locations.find((item) => item.id === checkinLocation.value) || selectedLocation;
  const sales = Number(checkinSales.value);

  if (!location || !checkinDate.value || !checkinStart.value || !checkinEnd.value || !Number.isFinite(sales)) {
    checkinStatus.textContent = "Add a location, date, time, and sales amount.";
    return;
  }

  const checkin = {
    id: `${Date.now()}`,
    location: location.name,
    locationId: location.id,
    date: checkinDate.value,
    startTime: checkinStart.value,
    endTime: checkinEnd.value,
    sales,
    costs: Number(checkinCosts.value) || 0,
    bestSellers: checkinBestSellers.value.trim(),
    competitors: checkinCompetitors.value,
    notes: checkinNotes.value.trim(),
    visibleToOwners: checkinVisible.checked,
    ownerContact: checkinContact.value.trim(),
    businessName: document.querySelector("#business-name").value.trim()
  };
  const checkins = [checkin, ...getSavedCheckins()];

  saveCheckins(checkins);
  clearInterval(serviceTimerId);
  serviceTimerId = null;
  serviceStartTime = null;
  serviceElapsedMilliseconds = 0;
  checkinSales.value = "";
  checkinCosts.value = "";
  checkinBestSellers.value = "";
  checkinCompetitors.value = "";
  checkinNotes.value = "";
  checkinVisible.checked = false;
  checkinContact.value = "";
  updateTimerReadout();
  renderCheckinHistory();
  renderDashboard();
  renderDetail();
  renderResults();
  renderReports();

  saveCheckinToDatabase(checkin).then((savedToDatabase) => {
    checkinStatus.textContent = savedToDatabase
      ? "Check-in saved to Supabase and this browser."
      : "Check-in saved in this browser. Log in or add the Supabase table to sync it.";
  });
}

function clearCheckins() {
  saveCheckins([]);
  renderCheckinHistory();
  renderDashboard();
  renderDetail();
  renderResults();
  renderReports();
  checkinStatus.textContent = "Sales log cleared from this browser.";
}

function generateWeeklyPlan() {
  const days = getRoutePlanLabels();
  const rankedLocations = [...locations].sort((a, b) => getLocationScore(b) - getLocationScore(a));
  const plan = days.map((day, index) => makePlanItem(rankedLocations[index % rankedLocations.length], day));

  savePlan(plan);
  renderWeeklyPlan();
  planStatus.textContent = "Route plan built from your highest-scoring locations.";
  showScreen("plan");
}

function downloadWeeklyPlanCsv() {
  const headers = ["Date / Day", "Best Location", "Best Time", "Score"];
  const rows = getSavedPlan().map((item) => [item.day, item.location, item.bestTime, item.score]);
  const csv = [headers, ...rows]
    .map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "food-truck-route-plan.csv";
  link.click();
  URL.revokeObjectURL(url);
  planStatus.textContent = "Route plan exported as a CSV file.";
}

function getPlanStops() {
  return getSavedPlan()
    .map((item) => {
      const location = locations.find((spot) => spot.name === item.location);
      return location || { name: item.location, city: homeBase.value || "New England", score: item.score, bestTime: item.bestTime };
    })
    .slice(0, 24);
}

function getRouteMapSvg(stops, baseCity) {
  const mapStops = [{ name: "Home", city: baseCity, isHome: true }, ...stops];
  const points = mapStops.map((stop) => ({
    ...stop,
    coords: getCityCoordinates(stop.city)
  }));
  const polyline = points.map((point) => `${point.coords.x},${point.coords.y}`).join(" ");

  return `
    <svg viewBox="0 0 100 100" role="img" aria-label="Route map">
      <rect x="0" y="0" width="100" height="100" rx="4" class="map-bg"></rect>
      <path d="M 12 18 C 28 22, 34 18, 46 28 S 75 34, 84 20" class="map-road soft"></path>
      <path d="M 15 80 C 30 70, 42 82, 55 70 S 78 65, 86 78" class="map-road soft"></path>
      <polyline points="${polyline}" class="route-line"></polyline>
      ${points
        .map(
          (point, index) => `
            <g>
              <circle cx="${point.coords.x}" cy="${point.coords.y}" r="${point.isHome ? 3.5 : 2.8}" class="${point.isHome ? "home-dot" : "stop-dot"}"></circle>
              <text x="${Math.min(92, point.coords.x + 3)}" y="${Math.max(8, point.coords.y - 3)}">${index === 0 ? "Home" : index}</text>
            </g>
          `
        )
        .join("")}
    </svg>
  `;
}

function renderRoutePlanMap() {
  const baseCity = homeBase.value.trim() || "Lowell, MA";
  const stops = getPlanStops();
  const legs = getRouteLegs(stops, baseCity);
  const vendors = getSupplierRouteMatches(stops, baseCity);
  const totalMiles = legs.reduce((sum, leg) => sum + leg.miles, 0);

  planRouteMapTitle.textContent = `${routePlanPeriod.options[routePlanPeriod.selectedIndex].text} route plan`;
  planRouteMap.innerHTML = getRouteMapSvg(stops, baseCity);
  planRouteMileageTotal.textContent = `${totalMiles.toLocaleString()} miles`;
  planRouteLegList.innerHTML = legs.length
    ? legs
        .map(
          (leg) => `
            <div class="mini-list-item">
              <strong>${leg.from} to ${leg.to}</strong>
              <span>${leg.fromCity || "Unknown"} to ${leg.toCity || "Unknown"} - ${leg.miles} miles</span>
            </div>
          `
        )
        .join("")
    : `<p class="helper-text">Build a route plan to see mileage.</p>`;
  planRouteVendorList.innerHTML = vendors.length
    ? vendors
        .slice(0, 6)
        .map(
          (vendor) => `
            <div class="mini-list-item">
              <strong>${vendor.name}</strong>
              <span>${vendor.category} - ${vendor.city} - about ${vendor.routeMiles} miles from route</span>
            </div>
          `
        )
        .join("")
    : `<p class="helper-text">No suppliers matched this route yet.</p>`;
  routeEstimateTitle.textContent = `${baseCity} route estimates`;
  routeEstimateCopy.textContent = `${routePlanPeriod.options[routePlanPeriod.selectedIndex].text} route plan covering ${stops.length} stop${stops.length === 1 ? "" : "s"} and ${totalMiles.toLocaleString()} estimated miles.`;
}

function renderWeeklyPlan() {
  weeklyPlanBody.innerHTML = getSavedPlan()
    .map(
      (item) => `
        <tr>
          <td>${item.day}</td>
          <td>${item.location}</td>
          <td>${item.bestTime}</td>
          <td>${item.score}</td>
        </tr>
      `
    )
    .join("");
  renderRoutePlanMap();
}

function saveProfile() {
  const profile = {
    email: document.querySelector("#email").value,
    businessName: document.querySelector("#business-name").value,
    city: document.querySelector("#profile-city").value
  };

  appStorage.setItem(storageKeys.profile, JSON.stringify(profile));
  document.querySelector("#city").value = profile.city;
  accountStatus.textContent = `${profile.businessName} is saved.`;
  showScreen("dashboard");
}

function readProfileForm() {
  return {
    email: document.querySelector("#email").value.trim(),
    password: document.querySelector("#password").value,
    businessName: document.querySelector("#business-name").value.trim(),
    city: document.querySelector("#profile-city").value.trim()
  };
}

function syncProfileToForm(profile) {
  document.querySelector("#email").value = profile.email || "";
  document.querySelector("#business-name").value = profile.businessName || profile.business_name || "";
  document.querySelector("#profile-city").value = profile.city || "";
  document.querySelector("#city").value = profile.city || "";
}

function saveProfileLocally(profile) {
  appStorage.setItem(storageKeys.profile, JSON.stringify(profile));
  syncProfileToForm(profile);
}

async function saveBusinessProfile(userId, profile) {
  const payload = {
    user_id: userId,
    business_name: profile.businessName,
    city: profile.city,
    food_type: document.querySelector("#food-type").value
  };

  const { data: existingProfile, error: readError } = await dbClient
    .from("business_profiles")
    .select("id")
    .eq("user_id", userId)
    .limit(1)
    .maybeSingle();

  if (readError) {
    throw readError;
  }

  if (existingProfile) {
    const { data, error } = await dbClient
      .from("business_profiles")
      .update(payload)
      .eq("id", existingProfile.id)
      .select("id, business_name, city, food_type")
      .single();

    if (error) {
      throw error;
    }

    return data;
  }

  const { data, error } = await dbClient
    .from("business_profiles")
    .insert(payload)
    .select("id, business_name, city, food_type")
    .single();

  if (error) {
    throw error;
  }

  return data;
}

async function loadBusinessProfile(userId, email) {
  const { data, error } = await dbClient
    .from("business_profiles")
    .select("id, business_name, city, food_type")
    .eq("user_id", userId)
    .limit(1)
    .maybeSingle();

  if (error) {
    throw error;
  }

  if (!data) {
    return null;
  }

  const profile = {
    email,
    businessName: data.business_name,
    city: data.city
  };

  appStorage.setItem(storageKeys.activeBusinessProfileId, data.id);
  saveProfileLocally(profile);
  return profile;
}

async function createAccount() {
  if (!dbClient) {
    saveProfile();
    databaseStatus.textContent = "Database library did not load, so this was saved in the browser.";
    return;
  }

  const profile = readProfileForm();
  saveProfileLocally(profile);
  accountStatus.textContent = "Creating account...";

  const { data, error } = await dbClient.auth.signUp({
    email: profile.email,
    password: profile.password,
    options: {
      emailRedirectTo: AUTH_REDIRECT_URL
    }
  });

  if (error) {
    accountStatus.textContent = error.message;
    return;
  }

  if (!data.session) {
    accountStatus.textContent = "Account created. Check your inbox and spam folder for the Supabase verification email, then log in.";
    databaseStatus.textContent = `Confirmation links should open ${AUTH_REDIRECT_URL}. If they still open localhost, update Supabase Auth URL settings.`;
    return;
  }

  const businessProfile = await saveBusinessProfile(data.user.id, profile);
  appStorage.setItem(storageKeys.activeUserId, data.user.id);
  appStorage.setItem(storageKeys.activeBusinessProfileId, businessProfile.id);
  accountStatus.textContent = `${profile.businessName} is saved to Supabase.`;
  databaseStatus.textContent = "Connected to Supabase.";
  showScreen("dashboard");
}

async function resendVerificationEmail() {
  if (!dbClient) {
    accountStatus.textContent = "Verification email needs Supabase to be connected.";
    return;
  }

  const profile = readProfileForm();

  if (!profile.email) {
    accountStatus.textContent = "Enter the email address first.";
    return;
  }

  accountStatus.textContent = "Sending verification email...";
  const { error } = await dbClient.auth.resend({
    type: "signup",
    email: profile.email,
    options: {
      emailRedirectTo: AUTH_REDIRECT_URL
    }
  });

  if (error) {
    accountStatus.textContent = error.message;
    return;
  }

  accountStatus.textContent = "Verification email resent. Check inbox and spam.";
  databaseStatus.textContent = `Confirmation links should open ${AUTH_REDIRECT_URL}.`;
}

async function logIn() {
  if (!dbClient) {
    saveProfile();
    databaseStatus.textContent = "Database library did not load, so this was saved in the browser.";
    return;
  }

  const profile = readProfileForm();
  accountStatus.textContent = "Logging in...";

  const { data, error } = await dbClient.auth.signInWithPassword({
    email: profile.email,
    password: profile.password
  });

  if (error) {
    accountStatus.textContent = error.message;
    return;
  }

  const businessProfile = await saveBusinessProfile(data.user.id, profile);
  appStorage.setItem(storageKeys.activeUserId, data.user.id);
  appStorage.setItem(storageKeys.activeBusinessProfileId, businessProfile.id);
  saveProfileLocally(profile);
  await loadLocationsFromDatabase();
  await loadWeeklyPlanFromDatabase(data.user.id);
  accountStatus.textContent = `Logged in as ${profile.businessName}.`;
  databaseStatus.textContent = "Connected to Supabase.";
  showScreen("dashboard");
}

function loadProfile() {
  const savedProfile = appStorage.getItem(storageKeys.profile);

  if (!savedProfile) {
    return;
  }

  let profile;

  try {
    profile = JSON.parse(savedProfile);
  } catch (error) {
    return;
  }

  document.querySelector("#email").value = profile.email;
  document.querySelector("#business-name").value = profile.businessName;
  document.querySelector("#profile-city").value = profile.city;
  document.querySelector("#city").value = profile.city;
  accountStatus.textContent = `Welcome back, ${profile.businessName}.`;
}

async function loadCurrentSession() {
  if (!dbClient) {
    databaseStatus.textContent = "Browser storage mode.";
    return;
  }

  databaseStatus.textContent = appStorage.isPersistent
    ? "Supabase connection ready."
    : "Supabase connection ready. Browser storage is temporary on this page.";

  const { data, error } = await dbClient.auth.getSession();

  if (error || !data.session) {
    return;
  }

  const user = data.session.user;
  appStorage.setItem(storageKeys.activeUserId, user.id);
  const profile = await loadBusinessProfile(user.id, user.email);

  if (profile) {
    accountStatus.textContent = `Welcome back, ${profile.businessName}.`;
  }

  await loadLocationsFromDatabase();
  await loadWeeklyPlanFromDatabase(user.id);
}

async function loadLocationsFromDatabase() {
  if (!dbClient) {
    return false;
  }

  const city = document.querySelector("#city").value || "Lowell, MA";
  const { data, error } = await dbClient
    .from("locations")
    .select("location_name, score, best_time, nearby_events, competition_level, weather_risk")
    .eq("city", city)
    .order("score", { ascending: false });

  if (error || !data || data.length === 0) {
    return false;
  }

  locations.splice(
    0,
    locations.length,
    ...data.map((location) => ({
      name: location.location_name,
      id: location.location_name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
      score: String(location.score),
      bestTime: location.best_time,
      events: location.nearby_events,
      competition: location.competition_level,
      weather: location.weather_risk,
      traffic: "High",
      competitors: location.competition_level === "Low" ? "2" : "4",
      parking: "Check curb and permit notes before service",
      sales: "$700 - $1,300",
      reason: `${location.location_name} is ranking well because current signals show ${location.nearby_events} nearby, ${location.competition_level.toLowerCase()} competition, and ${location.weather_risk.toLowerCase()} weather risk.`
    }))
  );

  loadCustomLocations();
  selectedLocation = getTopLocation();
  renderDashboard();
  renderDetail();
  renderCheckinLocationOptions();
  renderResults();
  return true;
}

async function findBestSpots() {
  const city = document.querySelector("#city").value.trim() || "your area";

  resultsSummary.textContent = `Searching best spots near ${city}...`;
  showSavedLocationsOnly = false;

  try {
    const loadedFromDatabase = await loadLocationsFromDatabase();

    if (!loadedFromDatabase) {
      renderResults();
      resultsSummary.textContent = `Showing built-in and saved recommendations for ${city}. Database-specific results were not available.`;
    } else {
      resultsSummary.textContent = `Showing database recommendations for ${city}.`;
    }
  } catch (error) {
    renderResults();
    resultsSummary.textContent = `Showing built-in recommendations for ${city}. Database search is unavailable right now.`;
  }
}

async function loadWeeklyPlanFromDatabase(userId) {
  if (!dbClient) {
    return;
  }

  const { data: plan, error: planError } = await dbClient
    .from("weekly_plans")
    .select("id")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (planError || !plan) {
    return;
  }

  const { data: items, error: itemError } = await dbClient
    .from("weekly_plan_items")
    .select("plan_day, best_location, best_time, score")
    .eq("weekly_plan_id", plan.id);

  if (itemError || !items || items.length === 0) {
    return;
  }

  const savedPlan = items.map((item) => ({
    day: item.plan_day,
    location: item.best_location,
    bestTime: item.best_time,
    score: String(item.score)
  }));

  savePlan(savedPlan);
  renderWeeklyPlan();
}

async function saveLocationToDatabase() {
  if (!dbClient) {
    return false;
  }

  const { data: sessionData } = await dbClient.auth.getSession();

  if (!sessionData.session) {
    return false;
  }

  const userId = sessionData.session.user.id;
  const businessProfileId = appStorage.getItem(storageKeys.activeBusinessProfileId);
  const weekStartDate = new Date().toISOString().slice(0, 10);

  const { data: plan, error: planError } = await dbClient
    .from("weekly_plans")
    .insert({
      user_id: userId,
      business_profile_id: businessProfileId,
      week_start_date: weekStartDate
    })
    .select("id")
    .single();

  if (planError) {
    planStatus.textContent = planError.message;
    return false;
  }

  const rows = getSavedPlan().map((item) => ({
    weekly_plan_id: plan.id,
    plan_day: item.day,
    best_location: item.location,
    best_time: item.bestTime,
    score: Number(item.score)
  }));

  const { error: itemError } = await dbClient.from("weekly_plan_items").insert(rows);

  if (itemError) {
    planStatus.textContent = itemError.message;
    return false;
  }

  return true;
}

function renderResults() {
  const savedLocationIds = getSavedLocationIds();
  const visibleLocations = locations.filter(
    (location) => locationMatchesZip(location, zipCode.value) && (!showSavedLocationsOnly || savedLocationIds.includes(location.id))
  );
  const dateLabel = findStartDate.value && findEndDate.value
    ? ` for ${findStartDate.value} to ${findEndDate.value}`
    : "";

  showAllLocations.classList.toggle("active", !showSavedLocationsOnly);
  showSavedLocations.classList.toggle("active", showSavedLocationsOnly);
  resultsSummary.textContent = showSavedLocationsOnly
    ? `${visibleLocations.length} saved spot${visibleLocations.length === 1 ? "" : "s"} you are tracking${dateLabel}.`
    : `${visibleLocations.length} recommended spot${visibleLocations.length === 1 ? "" : "s"} sorted by opportunity score${dateLabel}.`;
  resultList.innerHTML = visibleLocations
    .sort((a, b) => getLocationScore(b) - getLocationScore(a))
    .map((location) => {
      const history = getLocationHistorySummary(location.name);
      const pipeline = getPipelineForLocation(location.name);
      const visibleOwners = getVisibleOwnersAtLocation(location.name);
      const tracked = savedLocationIds.includes(location.id);
      const onRoute = isLocationOnRoute(location.name);

      return `
        <article class="result-card${selectedLocation && selectedLocation.id === location.id ? " selected" : ""}">
          <div>
            <button class="link-button result-detail-action" type="button" data-location-id="${location.id}">${location.name}</button>
            <span>${location.opportunityType || "Location"} - ${location.city || "Massachusetts"}</span>
          </div>
          <div>
            <strong>${getLocationScore(location)}/100</strong>
            <span>Score</span>
          </div>
          <div>
            <strong>${location.bestTime}</strong>
            <span>Best time</span>
          </div>
          <div>
            <strong>${location.events}</strong>
            <span>Nearby events</span>
          </div>
          <div>
            <strong>${location.competition}</strong>
            <span>Competition level</span>
          </div>
          <div>
            <strong>${location.weather}</strong>
            <span>Weather risk</span>
          </div>
          ${getStaticMapPreview(location.city, location.name)}
          <div>
            <strong>${pipeline ? pipeline.status : "Interested"}</strong>
            <span>${pipeline && pipeline.deadline ? `Deadline ${pipeline.deadline}` : "Pipeline"}</span>
          </div>
          <div>
            <strong>${visibleOwners.length}</strong>
            <span>Owners visible</span>
          </div>
          ${
            history
              ? `
                <div class="result-history">
                  <strong>Visited ${history.count} time${history.count === 1 ? "" : "s"}</strong>
                  <span>Avg $${history.averageSales.toLocaleString()} sales, $${history.averageProfit.toLocaleString()} profit - last ${history.lastVisit.date}, ${history.lastVisit.startTime}-${history.lastVisit.endTime}</span>
                  <p>
                    ${history.lastVisit.bestSellers ? `Best sellers: ${history.lastVisit.bestSellers}. ` : ""}
                    ${history.lastVisit.competitors !== "" && history.lastVisit.competitors !== undefined ? `Competitors: ${history.lastVisit.competitors}. ` : ""}
                    ${history.lastVisit.notes || "No notes saved for last visit."}
                  </p>
                </div>
              `
              : `
                <div class="result-history muted-history">
                  <strong>No visits yet</strong>
                  <span>Check in here to save notes and sales history.</span>
                </div>
              `
          }
          <div class="result-actions">
            <button class="secondary result-detail-action" type="button" data-location-id="${location.id}">Details</button>
            <button class="secondary result-track-action${tracked ? " active" : ""}" type="button" data-location-id="${location.id}">
              ${tracked ? "Saved" : "Track"}
            </button>
            ${
              onRoute
                ? `<button class="secondary result-calendar-action" type="button" data-location-id="${location.id}">On Route: Plan</button>`
                : `<button class="secondary result-add-route-action" type="button" data-location-id="${location.id}">Add to Route</button>`
            }
            <button class="secondary result-pipeline-action" type="button" data-location-id="${location.id}">
              ${pipeline ? `Pipeline: ${pipeline.status}` : "Add to Pipeline"}
            </button>
            ${
              location.sourceUrl
                ? `<a class="source-link" href="${location.sourceUrl}" target="_blank" rel="noreferrer">Source</a>`
                : ""
            }
          </div>
        </article>
      `;
    })
    .join("");

  if (visibleLocations.length === 0) {
    resultList.innerHTML = `
      <article class="feature-panel">
        <h3>No saved locations yet</h3>
        <p class="helper-text">Use Track on a search result to save locations you want to watch.</p>
      </article>
    `;
  }

  document.querySelectorAll(".result-detail-action").forEach((button) => {
    button.addEventListener("click", () => {
      setSelectedLocation(button.dataset.locationId);
      showScreen("detail");
      renderResults();
    });
  });
  document.querySelectorAll(".result-track-action").forEach((button) => {
    button.addEventListener("click", () => {
      toggleTrackedLocation(button.dataset.locationId);
    });
  });
  document.querySelectorAll(".result-add-route-action").forEach((button) => {
    button.addEventListener("click", () => {
      const location = locations.find((item) => item.id === button.dataset.locationId);

      if (location) {
        addLocationToPlan(location);
        renderResults();
      }
    });
  });
  document.querySelectorAll(".result-calendar-action").forEach((button) => {
    button.addEventListener("click", () => {
      const location = locations.find((item) => item.id === button.dataset.locationId);

      if (location) {
        setSelectedLocation(location.id);
      }

      showScreen("plan");
    });
  });
  document.querySelectorAll(".result-pipeline-action").forEach((button) => {
    button.addEventListener("click", () => {
      const record = addLocationToPipeline(button.dataset.locationId);

      if (record) {
        opsLocation.value = record.locationId;
        loadPipelineRecordIntoForm(record.locationId);
        showScreen("operations");
      }
    });
  });
}

function getFilteredSuppliers() {
  const query = supplierQuery.value.trim().toLowerCase();
  const category = supplierCategory.value;

  return [...getSupplierPartners(), ...suppliers].filter((supplier) => {
    const matchesCategory = category === "all" || supplier.category === category;
    const searchText = [
      supplier.name,
      supplier.category,
      supplier.city,
      supplier.products,
      supplier.bestFor,
      supplier.notes
    ]
      .join(" ")
      .toLowerCase();

    return matchesCategory && (!query || searchText.includes(query));
  });
}

function renderSuppliers() {
  const filteredSuppliers = getFilteredSuppliers();

  supplierSummary.textContent = `${filteredSuppliers.length} supplier${filteredSuppliers.length === 1 ? "" : "s"} found.`;
  supplierList.innerHTML = filteredSuppliers
    .map(
      (supplier) => `
        <article class="supplier-card">
          <div>
            <p class="eyebrow">${supplier.category}</p>
            <h3>${supplier.name}</h3>
            <p class="helper-text">${supplier.city}</p>
          </div>
          <div class="supplier-detail">
            <span>Products</span>
            <strong>${supplier.products}</strong>
          </div>
          <div class="supplier-detail">
            <span>Best For</span>
            <strong>${supplier.bestFor}</strong>
          </div>
          <div class="supplier-detail">
            <span>Ordering</span>
            <strong>${supplier.ordering}</strong>
          </div>
          <p>${supplier.notes}</p>
          ${supplier.commission ? `<p class="affiliate-note">${supplier.commission}</p>` : ""}
          <a class="source-link supplier-source${supplier.isPartner ? " affiliate-link" : ""}" href="${supplier.sourceUrl}" target="_blank" rel="noreferrer">
            ${supplier.isPartner ? "Shop partner link" : "Open supplier source"}
          </a>
        </article>
      `
    )
    .join("");
}

function saveSupplierPartner() {
  if (!partnerName.value.trim() || !partnerLink.value.trim()) {
    partnerStatus.textContent = "Add a vendor name and affiliate link.";
    return;
  }

  const partner = {
    id: makeLocationId(partnerName.value.trim(), partnerCity.value.trim() || "supplier"),
    name: partnerName.value.trim(),
    category: partnerCategory.value,
    city: partnerCity.value.trim() || "Service area not set",
    products: partnerProducts.value.trim() || "Supplier products",
    ordering: "Affiliate/referral link",
    bestFor: partnerNotes.value.trim() || "Partner supplier listing",
    sourceUrl: partnerLink.value.trim(),
    commission: partnerCommission.value.trim(),
    notes: partnerNotes.value.trim() || "Partner supplier added by the app owner.",
    isPartner: true
  };
  const partners = getSupplierPartners().filter((item) => item.id !== partner.id);

  saveSupplierPartners([partner, ...partners]);
  partnerStatus.textContent = `${partner.name} was added as a supplier partner.`;
  partnerName.value = "";
  partnerCity.value = "";
  partnerProducts.value = "";
  partnerLink.value = "";
  partnerCommission.value = "";
  partnerNotes.value = "";
  renderSuppliers();
}

function getAllMarketplaceListings() {
  return [...getMarketplaceListings(), ...starterMarketplaceListings];
}

function getFilteredMarketplaceListings() {
  const query = marketplaceQuery.value.trim().toLowerCase();
  const category = marketplaceCategory.value;
  const zip = marketplaceZip.value.trim();
  const zipCity = cityFromZip(zip);

  return getAllMarketplaceListings().filter((listing) => {
    const matchesCategory = category === "all" || listing.category === category;
    const matchesZip = !zip || (zipCity && normalizeCity(listing.city).includes(normalizeCity(zipCity).split(",")[0])) || listing.zip === zip;
    const searchText = [listing.title, listing.category, listing.city, listing.description, listing.sellerType]
      .join(" ")
      .toLowerCase();

    return matchesCategory && matchesZip && (!query || searchText.includes(query));
  });
}

function renderMarketplaceMedia(listing) {
  const images = (listing.imageUrls || []).slice(0, 10);

  if (images.length === 0 && !listing.videoUrl) {
    return getStaticMapPreview(listing.city, listing.title);
  }

  return `
    <div class="marketplace-media">
      ${
        images.length
          ? images
              .map((url) => `<img src="${url}" alt="${listing.title} photo" loading="lazy">`)
              .join("")
          : ""
      }
      ${listing.videoUrl ? `<a class="source-link supplier-source" href="${listing.videoUrl}" target="_blank" rel="noreferrer">Watch video</a>` : ""}
    </div>
  `;
}

function renderMarketplace() {
  const listings = getFilteredMarketplaceListings();

  marketplaceSummary.textContent = `${listings.length} marketplace listing${listings.length === 1 ? "" : "s"} found.`;
  marketplaceGrid.innerHTML = listings
    .map(
      (listing) => `
        <article class="marketplace-card">
          ${renderMarketplaceMedia(listing)}
          <p class="eyebrow">${listing.category}</p>
          <h3>${listing.title}</h3>
          <p class="helper-text">${listing.city}</p>
          <div class="marketplace-price">$${Number(listing.price || 0).toLocaleString()}</div>
          <p>${listing.description}</p>
          ${getStaticMapPreview(listing.city, listing.title)}
          <p class="helper-text">${listing.sellerType || "Seller listing"}</p>
          <div class="button-row">
            ${
              listing.contactUrl
                ? `<a class="source-link supplier-source" href="${listing.contactUrl}" target="_blank" rel="noreferrer">Contact seller</a>`
                : ""
            }
            ${
              listing.affiliateUrl
                ? `<a class="source-link supplier-source affiliate-link" href="${listing.affiliateUrl}" target="_blank" rel="noreferrer">Partner deal</a>`
                : ""
            }
          </div>
        </article>
      `
    )
    .join("");
}

function loadSettings() {
  const savedSettings = appStorage.getItem(storageKeys.settings);
  let settings = {};

  try {
    settings = savedSettings ? JSON.parse(savedSettings) : {};
  } catch (error) {
    settings = {};
  }

  const savedProfile = appStorage.getItem(storageKeys.profile);
  let profile = {};

  try {
    profile = savedProfile ? JSON.parse(savedProfile) : {};
  } catch (error) {
    profile = {};
  }

  settingsBusinessName.value = settings.businessName || profile.businessName || document.querySelector("#business-name").value;
  settingsHomeBase.value = settings.homeBase || appStorage.getItem(storageKeys.homeBase) || homeBase.value;
  settingsFoodType.value = settings.foodType || document.querySelector("#food-type").value;
  settingsRadius.value = settings.radius || 50;
}

function saveSettings() {
  const settings = {
    businessName: settingsBusinessName.value.trim(),
    homeBase: settingsHomeBase.value.trim(),
    foodType: settingsFoodType.value,
    radius: Number(settingsRadius.value) || 50
  };

  appStorage.setItem(storageKeys.settings, JSON.stringify(settings));
  document.querySelector("#business-name").value = settings.businessName;
  document.querySelector("#city").value = settings.homeBase;
  homeBase.value = settings.homeBase;
  document.querySelector("#food-type").value = settings.foodType;
  appStorage.setItem(storageKeys.homeBase, settings.homeBase);
  settingsStatus.textContent = "Settings saved for this browser.";
  renderCalendar();
  if (getTruckProfiles().length === 0) {
    loadTruckProfileForm();
  }
}

function saveFeedback() {
  if (!feedbackMessage.value.trim()) {
    return;
  }

  const record = {
    id: `${Date.now()}`,
    area: feedbackArea.value.trim() || "General",
    message: feedbackMessage.value.trim(),
    email: feedbackEmail.value.trim(),
    createdAt: new Date().toLocaleString()
  };

  saveFeedbackRecords([record, ...getFeedbackRecords()]);
  feedbackArea.value = "";
  feedbackMessage.value = "";
  feedbackEmail.value = "";
  renderFeedback();
}

function renderFeedback() {
  const feedback = getFeedbackRecords();

  feedbackList.innerHTML = feedback.length
    ? feedback
        .slice(0, 5)
        .map(
          (item) => `
            <div class="mini-list-item">
              <strong>${item.area}</strong>
              <span>${item.message} ${item.email ? `- ${item.email}` : ""}</span>
            </div>
          `
        )
        .join("")
    : `<p class="helper-text">Feedback saved here will be included in exported tester data.</p>`;
}

function collectDemoData() {
  return {
    profile: appStorage.getItem(storageKeys.profile),
    settings: appStorage.getItem(storageKeys.settings),
    checkins: getSavedCheckins(),
    weeklyPlan: getSavedPlan(),
    savedLocations: getSavedLocationIds(),
    customLocations: getSavedCustomLocations(),
    pipeline: getPipelineRecords(),
    prices: getPriceRecords(),
    reminders: getReminderRecords(),
    supplierPartners: getSupplierPartners(),
    publicListings: getPublicListings(),
    truckProfiles: getTruckProfiles(),
    marketplaceListings: getMarketplaceListings(),
    squareImports: getSquareImports(),
    feedback: getFeedbackRecords(),
    exportedAt: new Date().toISOString()
  };
}

function exportDemoData() {
  const blob = new Blob([JSON.stringify(collectDemoData(), null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "food-truck-planner-demo-data.json";
  link.click();
  URL.revokeObjectURL(url);
  dataToolsStatus.textContent = "Demo data exported.";
}

function resetDemoData() {
  [
    storageKeys.weeklyPlan,
    storageKeys.savedLocations,
    storageKeys.checkins,
    storageKeys.customLocations,
    storageKeys.pipeline,
    storageKeys.prices,
    storageKeys.reminders,
    storageKeys.supplierPartners,
    storageKeys.publicListings,
    storageKeys.truckProfiles,
    storageKeys.squareImports,
    storageKeys.squareDemoTransactions,
    storageKeys.marketplaceListings,
    storageKeys.feedback,
    storageKeys.forumPosts
  ].forEach((key) => appStorage.removeItem(key));

  dataToolsStatus.textContent = "Demo data reset in this browser.";
  loadCustomLocations();
  renderAllDataViews();
}

function renderAllDataViews() {
  renderDashboard();
  renderDetail();
  renderResults();
  renderSuppliers();
  renderMarketplace();
  renderPublicListings();
  loadTruckProfileForm();
  renderMarketingChecklist();
  renderPipelineList();
  renderReminders();
  renderCalendar();
  renderSquareTransactions();
  renderSquareHistory();
  renderReports();
  renderWeeklyPlan();
  renderCheckinHistory();
  renderFeedback();
}

function saveForumPost() {
  if (!forumTitle.value.trim() || !forumMessage.value.trim()) {
    return;
  }

  const post = {
    id: `${Date.now()}`,
    topic: forumTopic.value,
    title: forumTitle.value.trim(),
    message: forumMessage.value.trim(),
    author: settingsBusinessName.value || document.querySelector("#business-name").value || "Food truck owner",
    createdAt: new Date().toLocaleString(),
    replies: []
  };

  saveForumPosts([post, ...getForumPosts()]);
  forumTitle.value = "";
  forumMessage.value = "";
  renderForum();
}

function renderForum() {
  const starterPosts = [
    {
      id: "starter-need",
      topic: "Need / Buy / Borrow",
      title: "Example: Anyone have extra mustard I can buy?",
      message: "Use this topic for quick needs during service: condiments, propane, cups, ice, generator help, staff, or spare ingredients.",
      author: "Food Truck AI",
      createdAt: "Starter tip"
    },
    {
      id: "starter-permits",
      topic: "Permits",
      title: "What permits should I check before a fair?",
      message: "Ask for health permit requirements, fire inspection rules, insurance certificate needs, booth fees, and setup hours.",
      author: "Food Truck AI",
      createdAt: "Starter tip"
    },
    {
      id: "starter-routes",
      topic: "Routes",
      title: "How do I decide if an event is too far?",
      message: "Compare expected profit per hour against fuel, labor, prep time, and the chance of repeat bookings.",
      author: "Food Truck AI",
      createdAt: "Starter tip"
    }
  ];
  const posts = [...getForumPosts(), ...starterPosts];

  forumList.innerHTML = posts
    .map(
      (post) => `
        <article class="forum-post">
          <div>
            <p class="eyebrow">${post.topic}</p>
            <h3>${post.title}</h3>
            <p>${post.message}</p>
            <span>${post.author} - ${post.createdAt}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function saveMarketplaceListing() {
  if (!marketplaceTitleInput.value.trim()) {
    marketplaceStatus.textContent = "Add a listing title first.";
    return;
  }

  const listing = {
    id: makeLocationId(marketplaceTitleInput.value.trim(), marketplaceCity.value.trim() || "marketplace"),
    title: marketplaceTitleInput.value.trim(),
    category: marketplaceListingCategory.value,
    city: marketplaceCity.value.trim() || "New England",
    price: Number(marketplacePrice.value) || 0,
    zip: marketplaceListingZip.value.trim(),
    description: marketplaceDescription.value.trim() || "Seller did not add a description yet.",
    contactUrl: marketplaceContact.value.trim(),
    affiliateUrl: marketplaceAffiliate.value.trim(),
    imageUrls: marketplaceImages.value
      .split(/\r?\n/)
      .map((url) => url.trim())
      .filter(Boolean)
      .slice(0, 10),
    videoUrl: marketplaceVideo.value.trim(),
    sellerType: marketplaceAffiliate.value.trim() ? "Partner listing" : "Seller listing",
    createdAt: new Date().toISOString()
  };
  const listings = getMarketplaceListings().filter((item) => item.id !== listing.id);

  saveMarketplaceListings([listing, ...listings]);
  marketplaceStatus.textContent = `${listing.title} was published to the marketplace.`;
  marketplaceTitleInput.value = "";
  marketplaceCity.value = "";
  marketplacePrice.value = "";
  marketplaceListingZip.value = "";
  marketplaceContact.value = "";
  marketplaceAffiliate.value = "";
  marketplaceDescription.value = "";
  marketplaceImages.value = "";
  marketplaceVideo.value = "";
  renderMarketplace();
}

function splitProfileLines(value) {
  return value
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function draftMenuFromUpload() {
  const file = truckProfileMenuFile.files[0];
  const cuisine = truckProfileCuisine.value.trim() || "food truck";
  const fileHint = file ? file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ") : cuisine;
  const draftItems = [
    `${fileHint} signature plate`,
    `${cuisine} combo with side`,
    "Chef daily special",
    "Kids meal",
    "House drink"
  ];

  truckProfileMenu.value = [...new Set([...splitProfileLines(truckProfileMenu.value), ...draftItems])].join("\n");
  truckMenuToolsStatus.textContent = file
    ? `AI drafted menu items from ${file.name}. Review before publishing.`
    : "AI drafted sample menu items. Upload a menu picture or PDF for a better draft later.";
}

function connectToastMenuSandbox() {
  appStorage.setItem("foodTruckAiToastMenuConnected", "true");
  truckMenuToolsStatus.textContent = "Toast sandbox connected for testing. Real Toast menu sync will need Toast API approval.";
}

function getActiveTruckProfile() {
  const profile = getTruckProfiles()[0];
  let settings = {};

  try {
    settings = JSON.parse(appStorage.getItem(storageKeys.settings) || "{}");
  } catch (error) {
    settings = {};
  }

  return (
    profile || {
      truckName: settings.businessName || document.querySelector("#business-name").value || "Your Food Truck",
      city: settings.homeBase || homeBase.value || "New England",
      cuisine: settings.foodType || document.querySelector("#food-type").value || "Street food",
      contactUrl: "",
      description: "Add your services, catering details, and best public stops.",
      dailySpecial: "",
      menuItems: [],
      menuSource: "Manual",
      toastConnected: false,
      calendarItems: [],
      imageUrls: []
    }
  );
}

function renderTruckProfilePreview() {
  const profile = getActiveTruckProfile();
  const image = (profile.imageUrls || [])[0];
  const menuItems = (profile.menuItems || []).slice(0, 5);
  const calendarItems = (profile.calendarItems || []).slice(0, 5);

  truckProfilePreview.innerHTML = `
    ${image ? `<img src="${image}" alt="${profile.truckName} food truck preview">` : ""}
    <p class="eyebrow">${profile.cuisine || "Food truck"}</p>
    <h3>${profile.truckName}</h3>
    <p><strong>${profile.city}</strong></p>
    ${profile.dailySpecial ? `<p class="daily-special-preview"><strong>Daily special:</strong> ${profile.dailySpecial}</p>` : ""}
    <p>${profile.description || "Add a description so customers know what you serve and where you go."}</p>
    <p class="helper-text">Menu source: ${profile.menuSource || "Manual"}${profile.toastConnected ? " + Toast sandbox" : ""}</p>
    <div class="profile-mini-list">
      <span>Menu</span>
      ${menuItems.length ? menuItems.map((item) => `<p>${item}</p>`).join("") : "<p>No menu added yet.</p>"}
    </div>
    <div class="profile-mini-list">
      <span>Calendar</span>
      ${calendarItems.length ? calendarItems.map((item) => `<p>${item}</p>`).join("") : "<p>No public schedule added yet.</p>"}
    </div>
    ${profile.contactUrl ? `<a class="source-link supplier-source" href="${profile.contactUrl}" target="_blank">Booking link</a>` : ""}
  `;
}

function renderMarketingChecklist() {
  const profile = getActiveTruckProfile();
  const checks = [
    ["Truck name", Boolean(profile.truckName && profile.truckName !== "Your Food Truck")],
    ["Services description", Boolean(profile.description && !profile.description.includes("Add your services"))],
    ["Menu items", Boolean((profile.menuItems || []).length)],
    ["Daily special", Boolean(profile.dailySpecial)],
    ["Public calendar", Boolean((profile.calendarItems || []).length)],
    ["Photos", Boolean((profile.imageUrls || []).length)],
    ["Booking link", Boolean(profile.contactUrl)],
    ["Toast sandbox", Boolean(profile.toastConnected)]
  ];
  const completeCount = checks.filter(([, complete]) => complete).length;

  opsMarketingChecklist.innerHTML = checks
    .map(
      ([label, complete]) => `
        <div class="mini-list-item marketing-check ${complete ? "complete" : ""}">
          <strong>${complete ? "Done" : "Needed"}: ${label}</strong>
          <span>${complete ? "Ready for the public Truck Finder." : "Add this to improve the public listing."}</span>
        </div>
      `
    )
    .join("");
  opsMarketingStatus.textContent = `${completeCount} of ${checks.length} marketing items complete.`;
}

function loadTruckProfileForm() {
  const profile = getActiveTruckProfile();

  truckProfileName.value = profile.truckName || "";
  truckProfileCity.value = profile.city || "";
  truckProfileCuisine.value = profile.cuisine || "";
  truckProfileLink.value = profile.contactUrl || "";
  truckProfileDescription.value = profile.description || "";
  truckProfileSpecial.value = profile.dailySpecial || "";
  truckProfileMenu.value = (profile.menuItems || []).join("\n");
  truckProfileCalendar.value = (profile.calendarItems || []).join("\n");
  truckProfileImages.value = (profile.imageUrls || []).join("\n");
  renderTruckProfilePreview();
  renderMarketingChecklist();
}

function saveTruckProfile() {
  if (!truckProfileName.value.trim()) {
    truckProfileStatus.textContent = "Add the truck name first.";
    return;
  }

  const profile = {
    id: makeLocationId(truckProfileName.value.trim(), truckProfileCity.value.trim() || "truck"),
    truckName: truckProfileName.value.trim(),
    city: truckProfileCity.value.trim() || "New England",
    cuisine: truckProfileCuisine.value.trim() || "Food truck",
    contactUrl: truckProfileLink.value.trim(),
    description: truckProfileDescription.value.trim() || "Owner has not added a service description yet.",
    dailySpecial: truckProfileSpecial.value.trim(),
    menuItems: splitProfileLines(truckProfileMenu.value),
    menuSource: truckProfileMenuFile.files[0] ? `AI draft from ${truckProfileMenuFile.files[0].name}` : "Manual",
    toastConnected: appStorage.getItem("foodTruckAiToastMenuConnected") === "true",
    calendarItems: splitProfileLines(truckProfileCalendar.value),
    imageUrls: splitProfileLines(truckProfileImages.value).slice(0, 10),
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  const profiles = getTruckProfiles().filter((item) => item.id !== profile.id);

  saveTruckProfiles([profile, ...profiles]);
  truckProfileStatus.textContent = `${profile.truckName} is published on the truck finder site.`;
  renderTruckProfilePreview();
  renderMarketingChecklist();
}

function getDirectoryListings() {
  const researchedListings = locations
    .filter((location) => location.sourceUrl)
    .slice(0, 12)
    .map((location) => ({
      id: location.id,
      name: location.name,
      city: location.city || "New England",
      type: location.opportunityType || "Food truck space",
      bestTime: location.bestTime,
      fee: location.hostFee || "Ask host",
      sourceUrl: location.sourceUrl,
      notes: location.reason
    }));

  return [...getPublicListings(), ...researchedListings];
}

function renderPublicListings() {
  const listings = getDirectoryListings();

  publicListingSummary.textContent = `${listings.length} public space listing${listings.length === 1 ? "" : "s"} shown.`;
  publicListingGrid.innerHTML = listings
    .map(
      (listing) => `
        <article class="public-listing-card">
          <p class="eyebrow">${listing.type}</p>
          <h3>${listing.name}</h3>
          <p class="helper-text">${listing.city}</p>
          <div class="supplier-detail">
            <span>Best Window</span>
            <strong>${listing.bestTime || "Ask host"}</strong>
          </div>
          <div class="supplier-detail">
            <span>Fee / Rent</span>
            <strong>${listing.fee || "Ask host"}</strong>
          </div>
          <p>${listing.notes || "Truck-friendly listing submitted for review."}</p>
          ${
            listing.sourceUrl
              ? `<a class="source-link supplier-source" href="${listing.sourceUrl}" target="_blank" rel="noreferrer">Contact or apply</a>`
              : ""
          }
        </article>
      `
    )
    .join("");
}

function savePublicListing() {
  if (!publicSpaceName.value.trim() || !publicSpaceCity.value.trim()) {
    publicListingStatus.textContent = "Add a space name and city.";
    return;
  }

  const listing = {
    id: makeLocationId(publicSpaceName.value.trim(), publicSpaceCity.value.trim()),
    name: publicSpaceName.value.trim(),
    city: publicSpaceCity.value.trim(),
    type: publicSpaceType.value,
    bestTime: publicSpaceTime.value.trim() || "Ask host",
    fee: publicSpaceFee.value.trim() || "Ask host",
    sourceUrl: publicSpaceLink.value.trim(),
    notes: publicSpaceNotes.value.trim(),
    submittedAt: new Date().toISOString()
  };
  const listings = getPublicListings().filter((item) => item.id !== listing.id);

  savePublicListings([listing, ...listings]);
  loadCustomLocations();
  renderPublicListings();
  renderResults();
  renderCheckinLocationOptions();
  renderCalendar();
  publicListingStatus.textContent = `${listing.name} was listed and added to operator opportunities.`;
  publicSpaceName.value = "";
  publicSpaceCity.value = "";
  publicSpaceTime.value = "";
  publicSpaceFee.value = "";
  publicSpaceLink.value = "";
  publicSpaceNotes.value = "";
}

function renderOpsLocationOptions() {
  const options = locations
    .map((location) => `<option value="${location.id}">${location.name}</option>`)
    .join("");

  opsLocation.innerHTML = options;
  reminderLocation.innerHTML = `<option value="">General reminder</option>${options}`;
}

function getDefaultPipelineSteps() {
  return {
    form: false,
    insurance: false,
    documents: false,
    fee: false,
    confirmation: false
  };
}

function getPipelineStepsFromForm() {
  return Object.fromEntries(
    Object.entries(pipelineStepInputs).map(([key, input]) => [key, Boolean(input?.checked)])
  );
}

function applyPipelineStepsToForm(steps = {}) {
  Object.entries(pipelineStepInputs).forEach(([key, input]) => {
    if (input) {
      input.checked = Boolean(steps[key]);
    }
  });
}

function getPipelineStepProgress(steps = {}) {
  const total = Object.keys(getDefaultPipelineSteps()).length;
  const complete = Object.values({ ...getDefaultPipelineSteps(), ...steps }).filter(Boolean).length;

  return { complete, total };
}

function getPipelineFileNames(input, existingFiles = []) {
  const selectedFiles = Array.from(input?.files || []).map((file) => file.name);

  return selectedFiles.length ? selectedFiles : existingFiles;
}

function loadPipelineRecordIntoForm(locationId) {
  const location = locations.find((item) => item.id === locationId);
  const record = getPipelineForLocationId(locationId);

  if (!location) {
    return;
  }

  selectedPipelineLocationId = location.id;
  opsLocation.value = location.id;
  opsDetailTitle.textContent = record ? `${location.name} reservation details` : `${location.name} new reservation`;
  opsStatus.value = record?.status || "Interested";
  opsDeadline.value = record?.deadline || "";
  opsFee.value = record?.fee || "";
  opsWebpage.value = record?.webpage || location.sourceUrl || "";
  opsDocuments.value = record?.documents || "";
  opsNotes.value = record?.notes || location.ownerNotes || "";
  opsAiSummaryOutput.value = record?.aiSummary || "";
  applyPipelineStepsToForm(record?.steps || getDefaultPipelineSteps());
  hideOpsLocation.textContent = record?.hidden ? "Show In List" : "Hide From List";
  opsReminderTitle.value = "";
  opsReminderDate.value = "";
  opsStatusMessage.textContent = record ? `${location.name} loaded.` : `${location.name} ready to add.`;
}

function renderPipelineList() {
  const records = getPipelineRecords();
  const visibleRecords = showHiddenPipeline?.checked ? records : records.filter((record) => !record.hidden);

  opsPipelineList.innerHTML = visibleRecords.length
    ? visibleRecords
        .map((record) => {
          const location = locations.find((item) => item.id === record.locationId);
          const reminders = getReminderRecords().filter((item) => item.locationId === record.locationId);
          const webpage = record.webpage || location?.sourceUrl || "";
          const files = record.documentFiles || [];
          const photos = record.photoFiles || [];
          const progress = getPipelineStepProgress(record.steps);
          const selectedClass = record.locationId === selectedPipelineLocationId ? " selected" : "";
          const hiddenClass = record.hidden ? " hidden" : "";

          return `
            <article class="pipeline-list-card${selectedClass}${hiddenClass}">
              <div>
                <p class="eyebrow">${record.status}</p>
                <h4>${record.location}</h4>
                <p>${location?.city || "Location"} ${record.deadline ? `- deadline ${record.deadline}` : ""}</p>
                <p><strong>Reservation steps:</strong> ${progress.complete} of ${progress.total} complete</p>
              </div>
              <div class="pipeline-card-actions">
                <button type="button" class="secondary pipeline-edit-action" data-location-id="${record.locationId}">Details</button>
                ${
                  webpage
                    ? `<a class="source-link" href="${webpage}" target="_blank" rel="noreferrer">Webpage</a>`
                    : `<span class="helper-text">No webpage added</span>`
                }
                <button type="button" class="secondary pipeline-hide-action" data-location-id="${record.locationId}">${record.hidden ? "Show" : "Hide"}</button>
                <button type="button" class="secondary danger-button pipeline-remove-action" data-location-id="${record.locationId}">Remove</button>
              </div>
              <p><strong>Documents:</strong> ${record.documents || "None listed"}${files.length ? ` - uploaded: ${files.join(", ")}` : ""}</p>
              <p><strong>Photos:</strong> ${photos.length ? photos.join(", ") : "None yet."}</p>
              <p><strong>Notes:</strong> ${record.notes || "No notes yet."}</p>
              <p><strong>Reminders:</strong> ${reminders.length ? reminders.map((item) => `${item.dueDate}: ${item.title}`).join("; ") : "None yet."}</p>
            </article>
          `;
        })
        .join("")
    : `<p class="helper-text">${records.length ? "Hidden pipeline items are filtered out. Turn on Show hidden to view them." : "No pipeline locations yet. Add one from Search Locations."}</p>`;

  document.querySelectorAll(".pipeline-edit-action").forEach((button) => {
    button.addEventListener("click", () => {
      loadPipelineRecordIntoForm(button.dataset.locationId);
      renderPipelineList();
    });
  });
  document.querySelectorAll(".pipeline-hide-action").forEach((button) => {
    button.addEventListener("click", () => {
      togglePipelineHidden(button.dataset.locationId);
    });
  });
  document.querySelectorAll(".pipeline-remove-action").forEach((button) => {
    button.addEventListener("click", () => {
      removePipelineRecord(button.dataset.locationId);
    });
  });
}

function togglePipelineHidden(locationId) {
  const activeRecord = getPipelineForLocationId(locationId);
  const records = getPipelineRecords().map((record) =>
    record.locationId === locationId ? { ...record, hidden: !record.hidden, updatedAt: new Date().toISOString() } : record
  );

  savePipelineRecords(records);
  if (opsLocation.value === locationId) {
    hideOpsLocation.textContent = activeRecord?.hidden ? "Hide From List" : "Show In List";
  }
  renderPipelineList();
  renderResults();
}

function removePipelineRecord(locationId) {
  const location = locations.find((item) => item.id === locationId);
  const records = getPipelineRecords().filter((record) => record.locationId !== locationId);

  savePipelineRecords(records);
  if (selectedPipelineLocationId === locationId) {
    selectedPipelineLocationId = "";
    opsDetailTitle.textContent = "Select a pipeline item";
    opsStatusMessage.textContent = `${location?.name || "Pipeline item"} removed.`;
  }
  renderPipelineList();
  renderResults();
  renderCalendar();
  renderReports();
}

function generatePipelineSummary() {
  const location = locations.find((item) => item.id === opsLocation.value);

  if (!location) {
    opsStatusMessage.textContent = "Choose a pipeline location before summarizing.";
    return;
  }

  const steps = getPipelineStepsFromForm();
  const progress = getPipelineStepProgress(steps);
  const files = [
    ...getPipelineFileNames(opsDocumentUpload, getPipelineForLocationId(location.id)?.documentFiles || []),
    ...getPipelineFileNames(opsPhotoUpload, getPipelineForLocationId(location.id)?.photoFiles || [])
  ];
  const needs = Object.entries({
    form: "vendor request form",
    insurance: "insurance / permit review",
    documents: "supporting documents",
    fee: "fee payment",
    confirmation: "venue confirmation"
  })
    .filter(([key]) => !steps[key])
    .map(([, label]) => label);

  opsAiSummaryOutput.value = [
    `${location.name} is currently marked ${opsStatus.value}.`,
    `Reservation progress is ${progress.complete} of ${progress.total} steps complete.`,
    needs.length ? `Next focus: ${needs.join(", ")}.` : "All reservation steps are marked complete.",
    opsDeadline.value ? `Application deadline: ${opsDeadline.value}.` : "No deadline has been entered yet.",
    opsFee.value ? `Estimated fee: $${Number(opsFee.value).toLocaleString()}.` : "No fee has been entered yet.",
    files.length ? `Attached files/photos listed: ${files.join(", ")}.` : "No files or photos are listed yet.",
    opsNotes.value.trim() ? `Notes: ${opsNotes.value.trim()}` : "Add notes from the application, venue page, or phone call for a stronger summary."
  ].join("\n");
  opsStatusMessage.textContent = "Summary drafted. Save details to keep it with this pipeline item.";
}

function savePipelineRecord() {
  const location = locations.find((item) => item.id === opsLocation.value);

  if (!location) {
    opsStatusMessage.textContent = "Choose a location first.";
    return;
  }

  const existing = getPipelineForLocationId(location.id);
  const record = {
    location: location.name,
    locationId: location.id,
    status: opsStatus.value,
    deadline: opsDeadline.value,
    fee: Number(opsFee.value) || 0,
    webpage: opsWebpage.value.trim() || location.sourceUrl || "",
    documents: opsDocuments.value.trim(),
    documentFiles: getPipelineFileNames(opsDocumentUpload, existing?.documentFiles || []),
    photoFiles: getPipelineFileNames(opsPhotoUpload, existing?.photoFiles || []),
    steps: getPipelineStepsFromForm(),
    notes: opsNotes.value.trim(),
    aiSummary: opsAiSummaryOutput.value.trim(),
    hidden: existing?.hidden || false,
    updatedAt: new Date().toISOString()
  };
  const records = getPipelineRecords().filter((item) => item.locationId !== location.id);

  savePipelineRecords([record, ...records]);
  selectedPipelineLocationId = location.id;
  if (opsReminderTitle.value.trim() && opsReminderDate.value) {
    saveReminderRecords([
      {
        id: `${Date.now()}`,
        title: opsReminderTitle.value.trim(),
        dueDate: opsReminderDate.value,
        location: location.name,
        locationId: location.id,
        completed: false
      },
      ...getReminderRecords()
    ]);
    opsReminderTitle.value = "";
    opsReminderDate.value = "";
  }
  opsStatusMessage.textContent = `${location.name} pipeline saved.`;
  renderPipelineList();
  renderReminders();
  renderCalendar();
  renderDashboard();
  renderResults();
  renderReports();
}

function savePriceRecord() {
  if (!priceItem.value.trim() || !priceSupplier.value.trim() || !priceValue.value) {
    return;
  }

  const record = {
    id: `${Date.now()}`,
    item: priceItem.value.trim(),
    supplier: priceSupplier.value.trim(),
    price: Number(priceValue.value),
    unit: priceUnit.value.trim() || "unit",
    date: new Date().toISOString().slice(0, 10)
  };

  savePriceRecords([record, ...getPriceRecords()]);
  priceItem.value = "";
  priceSupplier.value = "";
  priceValue.value = "";
  priceUnit.value = "";
  renderPrices();
  renderReports();
}

function renderPrices() {
  const priceList = document.querySelector("#price-list");
  const prices = getPriceRecords();

  if (!priceList) {
    return;
  }

  priceList.innerHTML = prices.length
    ? prices
        .slice(0, 6)
        .map(
          (item) => `
            <div class="mini-list-item">
              <strong>${item.item}</strong>
              <span>$${item.price.toFixed(2)} / ${item.unit} - ${item.supplier}</span>
            </div>
          `
        )
        .join("")
    : `<p class="helper-text">Track ingredient and supply prices here.</p>`;
}

function saveReminderRecord() {
  if (!reminderTitle.value.trim() || !reminderDate.value) {
    return;
  }

  const location = locations.find((item) => item.id === reminderLocation.value);
  const record = {
    id: `${Date.now()}`,
    title: reminderTitle.value.trim(),
    dueDate: reminderDate.value,
    location: location ? location.name : "",
    locationId: location ? location.id : "",
    completed: false
  };

  saveReminderRecords([record, ...getReminderRecords()]);
  reminderTitle.value = "";
  reminderDate.value = "";
  renderReminders();
  renderCalendar();
  renderReports();
}

function renderReminders() {
  const reminders = getReminderRecords().sort((a, b) => a.dueDate.localeCompare(b.dueDate));

  reminderList.innerHTML = reminders.length
    ? reminders
        .slice(0, 8)
        .map(
          (item) => `
            <div class="mini-list-item">
              <strong>${item.dueDate}: ${item.title}</strong>
              <span>${item.location || "General"}</span>
            </div>
          `
        )
        .join("")
    : `<p class="helper-text">Add deadlines for permits, applications, payments, and inspections.</p>`;
}

function estimateDistanceMiles(fromCity, toCity) {
  if (!fromCity || !toCity || fromCity.toLowerCase() === toCity.toLowerCase()) {
    return 0;
  }

  const fromCoords = getCityCoordinates(fromCity);
  const toCoords = getCityCoordinates(toCity);

  if (fromCoords && toCoords) {
    return Math.round(Math.hypot(toCoords.x - fromCoords.x, toCoords.y - fromCoords.y) * 3.6);
  }

  const knownDistances = {
    "lowell, ma|manchester, nh": 34,
    "lowell, ma|concord, nh": 58,
    "lowell, ma|portsmouth, nh": 55,
    "lowell, ma|deerfield, nh": 55,
    "lowell, ma|milford, nh": 30,
    "lowell, ma|hampton, nh": 45,
    "lowell, ma|nashua, nh": 18,
    "lowell, ma|keene, nh": 75,
    "lowell, ma|lancaster, nh": 155
  };
  const key = `${fromCity.toLowerCase()}|${toCity.toLowerCase()}`;
  const reverseKey = `${toCity.toLowerCase()}|${fromCity.toLowerCase()}`;

  return knownDistances[key] || knownDistances[reverseKey] || Math.max(15, Math.min(180, Math.round(toCity.length * 4.5)));
}

function normalizeCity(city) {
  return (city || "New England").split("&")[0].trim().toLowerCase();
}

function getCityCoordinates(city) {
  const normalized = normalizeCity(city);

  return cityCoordinates[normalized] || cityCoordinates[normalized.replace(/\s+/g, " ")] || cityCoordinates["new england"];
}

function cityFromZip(zip) {
  return zipLookup[(zip || "").trim()] || "";
}

function locationMatchesZip(location, zip) {
  const city = cityFromZip(zip);

  if (!zip || !city) {
    return true;
  }

  return normalizeCity(location.city).includes(normalizeCity(city).split(",")[0]);
}

function getMapEmbedUrl(city) {
  return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent("-73,41,-69,45")}&layer=mapnik&marker=${encodeURIComponent(city || "New England")}`;
}

function getStaticMapPreview(city, label) {
  const coords = getCityCoordinates(city);

  return `
    <div class="mini-map" aria-label="Map preview for ${label}">
      <svg viewBox="0 0 100 70">
        <rect x="0" y="0" width="100" height="70" rx="6" class="map-bg"></rect>
        <path d="M 10 18 C 28 8, 45 18, 60 12 S 84 16, 92 8" class="map-road soft"></path>
        <path d="M 8 50 C 25 44, 42 60, 55 48 S 79 44, 92 56" class="map-road soft"></path>
        <circle cx="${coords.x}" cy="${Math.min(64, coords.y * 0.7)}" r="4" class="stop-dot"></circle>
        <text x="${Math.min(82, coords.x + 5)}" y="${Math.max(8, coords.y * 0.7 - 5)}">${label.slice(0, 18)}</text>
      </svg>
      <a href="https://www.openstreetmap.org/search?query=${encodeURIComponent(city || label)}" target="_blank" rel="noreferrer">Open map</a>
    </div>
  `;
}

function getRouteStopCount() {
  if (routePeriod.value === "year") {
    return 24;
  }

  if (routePeriod.value === "month") {
    return 12;
  }

  return 5;
}

function getRouteStops() {
  return [...locations]
    .sort((a, b) => getLocationScore(b) - getLocationScore(a))
    .slice(0, getRouteStopCount());
}

function getRouteLegs(stops, baseCity) {
  const routePoints = [{ name: "Home Base", city: baseCity }, ...stops];

  return routePoints.slice(0, -1).map((stop, index) => {
    const nextStop = routePoints[index + 1];

    return {
      from: stop.name,
      to: nextStop.name,
      fromCity: stop.city,
      toCity: nextStop.city,
      miles: estimateDistanceMiles(stop.city, nextStop.city)
    };
  });
}

function getSupplierRouteMatches(stops, baseCity) {
  const routeCities = new Set([baseCity, ...stops.map((stop) => stop.city || "")].map((city) => normalizeCity(city)));
  const routePoints = [baseCity, ...stops.map((stop) => stop.city || "")];

  return suppliers
    .map((supplier) => {
      const nearestMiles = Math.min(...routePoints.map((city) => estimateDistanceMiles(city, supplier.city)));
      const normalizedSupplierCity = normalizeCity(supplier.city);
      const cityMatch = [...routeCities].some(
        (city) => normalizedSupplierCity.includes(city.split(",")[0]) || supplier.city.includes("NH") || supplier.city.includes("Statewide")
      );

      return {
        ...supplier,
        routeMiles: nearestMiles,
        routeMatch: cityMatch || nearestMiles <= 65
      };
    })
    .filter((supplier) => supplier.routeMatch)
    .sort((a, b) => a.routeMiles - b.routeMiles)
    .slice(0, 8);
}

function renderRouteMap(stops, baseCity) {
  routeMapTitle.textContent = `${routePeriod.value[0].toUpperCase()}${routePeriod.value.slice(1)} route`;
  routeMap.innerHTML = getRouteMapSvg(stops, baseCity);
}

function renderRoutePlanning() {
  const baseCity = homeBase.value.trim() || "Lowell, MA";
  const stops = getRouteStops();
  const legs = getRouteLegs(stops, baseCity);
  const totalMiles = legs.reduce((sum, leg) => sum + leg.miles, 0);
  const vendors = getSupplierRouteMatches(stops, baseCity);

  renderRouteMap(stops, baseCity);
  routeMileageTotal.textContent = `${totalMiles.toLocaleString()} miles`;
  routeLegList.innerHTML = legs
    .map(
      (leg) => `
        <div class="mini-list-item">
          <strong>${leg.from} to ${leg.to}</strong>
          <span>${leg.fromCity || "Unknown"} to ${leg.toCity || "Unknown"} - ${leg.miles} miles</span>
        </div>
      `
    )
    .join("");
  routeVendorList.innerHTML = vendors.length
    ? vendors
        .map(
          (vendor) => `
            <div class="mini-list-item">
              <strong>${vendor.name}</strong>
              <span>${vendor.category} - ${vendor.city} - about ${vendor.routeMiles} miles from route</span>
            </div>
          `
        )
        .join("")
    : `<p class="helper-text">No suppliers matched this route yet.</p>`;
}

function getOpportunityDate(location) {
  const dateMatch = location.events && location.events.match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2}/i);

  return dateMatch ? `${dateMatch[0]}, 2026` : "Date TBD";
}

function renderCalendar() {
  const records = getPipelineRecords();
  const reminders = getReminderRecords();
  const base = homeBase.value.trim() || "Lowell, MA";
  const planNames = new Set(getSavedPlan().map((item) => item.location));
  const topLocations = [...locations]
    .filter((location) => planNames.has(location.name) || getLocationScore(location) >= 85)
    .sort((a, b) => getLocationScore(b) - getLocationScore(a))
    .slice(0, 10);

  appStorage.setItem(storageKeys.homeBase, base);
  calendarList.innerHTML = topLocations
    .map((location) => {
      const pipeline = records.find((item) => item.locationId === location.id);
      const distance = estimateDistanceMiles(base, location.city || "");
      const reminder = reminders.find((item) => item.locationId === location.id);

      return `
        <article class="calendar-card">
          <div>
            <p class="eyebrow">${pipeline ? pipeline.status : "Interested"}</p>
            <h3><button class="link-button calendar-detail-action" type="button" data-location-id="${location.id}">${location.name}</button></h3>
            <p>${location.city || "New England"} - ${getOpportunityDate(location)}</p>
          </div>
          <div class="metric"><span>Distance</span><strong>${distance} mi</strong></div>
          <div class="metric"><span>Fee</span><strong>${pipeline && pipeline.fee ? `$${pipeline.fee}` : "TBD"}</strong></div>
          <div class="metric"><span>Deadline</span><strong>${pipeline && pipeline.deadline ? pipeline.deadline : reminder ? reminder.dueDate : "TBD"}</strong></div>
        </article>
      `;
    })
    .join("");
  document.querySelectorAll(".calendar-detail-action").forEach((button) => {
    button.addEventListener("click", () => {
      setSelectedLocation(button.dataset.locationId);
      showScreen("detail");
    });
  });
}

function generateAiWeek() {
  const records = getPipelineRecords();
  const ranked = [...locations]
    .filter((location) => {
      const pipeline = records.find((item) => item.locationId === location.id);
      return !pipeline || !["Rejected", "Completed"].includes(pipeline.status);
    })
    .sort((a, b) => getLocationScore(b) - getLocationScore(a))
    .slice(0, 5);

  const plan = ranked.map((location, index) => makePlanItem(location, ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"][index]));

  savePlan(plan);
  renderWeeklyPlan();
  renderCalendar();
  showScreen("plan");
  aiWeekTitle.textContent = `${ranked[0].name} anchors the route`;
  aiWeekCopy.textContent = `Suggested ${ranked.length} stops using score, weather risk, sales history, and pipeline status.`;
}

function renderSquareStatus() {
  const status = appStorage.getItem(storageKeys.posConnection);

  if (status === "square-sandbox") {
    const connectedAt = appStorage.getItem(`${storageKeys.posConnection}ConnectedAt`);
    squareStatusTitle.textContent = "Square sandbox connected";
    squareStatusCopy.textContent = `Tester mode is active${connectedAt ? ` since ${connectedAt}` : ""}. Demo imports will create sales history as if Square synced them.`;
    squareConnectionBadge.textContent = "Connected to Square Sandbox";
    squareConnectionBadge.classList.add("connected");
  } else {
    squareStatusTitle.textContent = "Not connected";
    squareStatusCopy.textContent = "This tester build includes a Square connection placeholder. Real OAuth will be added before production.";
    squareConnectionBadge.textContent = "Disconnected";
    squareConnectionBadge.classList.remove("connected");
  }
}

function connectSquareSandbox() {
  const connectedAt = new Date().toLocaleString();

  appStorage.setItem(storageKeys.posConnection, "square-sandbox");
  appStorage.setItem(`${storageKeys.posConnection}ConnectedAt`, connectedAt);
  renderSquareStatus();
  squareImportStatus.textContent = "Square sandbox connected. Import a demo sale to test the sync flow.";
  document.querySelector("#square-import-panel").scrollIntoView({ behavior: "smooth", block: "start" });
}

function disconnectSquare() {
  appStorage.removeItem(storageKeys.posConnection);
  appStorage.removeItem(`${storageKeys.posConnection}ConnectedAt`);
  renderSquareStatus();
  squareImportStatus.textContent = "Square sandbox disconnected.";
}

function createDemoSquareTransactions() {
  const items = [
    { item: "Street tacos", sales: 286, costs: 92 },
    { item: "Loaded fries", sales: 174, costs: 58 },
    { item: "Lemonade", sales: 132, costs: 24 },
    { item: "Chicken rice bowl", sales: 218, costs: 76 },
    { item: "Churros", sales: 96, costs: 26 },
    { item: "Burger special", sales: 242, costs: 94 }
  ];

  return items.map((item, index) => ({
    id: `sq-demo-${Date.now()}-${index}`,
    time: `${11 + Math.floor(index / 2)}:${index % 2 === 0 ? "15" : "45"}`,
    item: item.item,
    sales: item.sales,
    costs: item.costs,
    selected: true
  }));
}

function ensureSquareDemoTransactions() {
  if (getSquareDemoTransactions().length === 0) {
    saveSquareDemoTransactions(createDemoSquareTransactions());
  }
}

function renderSquareTransactions() {
  ensureSquareDemoTransactions();
  squareTransactionList.innerHTML = getSquareDemoTransactions()
    .map(
      (transaction) => `
        <label class="transaction-row">
          <input type="checkbox" class="square-transaction-check" value="${transaction.id}" ${transaction.selected ? "checked" : ""}>
          <span>${transaction.time}</span>
          <strong>${transaction.item}</strong>
          <span>$${transaction.sales.toLocaleString()}</span>
          <span>$${(transaction.sales - transaction.costs).toLocaleString()} profit</span>
        </label>
      `
    )
    .join("");

  document.querySelectorAll(".square-transaction-check").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const updatedTransactions = getSquareDemoTransactions().map((transaction) => ({
        ...transaction,
        selected: transaction.id === checkbox.value ? checkbox.checked : transaction.selected
      }));

      saveSquareDemoTransactions(updatedTransactions);
    });
  });
}

function setSquareTransactionSelection(selected) {
  saveSquareDemoTransactions(
    getSquareDemoTransactions().map((transaction) => ({
      ...transaction,
      selected
    }))
  );
  renderSquareTransactions();
}

function refreshSquareDemoBatch() {
  saveSquareDemoTransactions(createDemoSquareTransactions());
  renderSquareTransactions();
  squareImportStatus.textContent = "Loaded a fresh Square demo transaction batch.";
}

function importSquareDemoSale() {
  const location = locations.find((item) => item.id === squareImportLocation.value) || selectedLocation;
  const today = new Date().toISOString().slice(0, 10);
  const selectedTransactions = getSquareDemoTransactions().filter((transaction) => transaction.selected);

  if (selectedTransactions.length === 0) {
    squareImportStatus.textContent = "Select at least one Square transaction to import.";
    return;
  }

  const sales = selectedTransactions.reduce((sum, transaction) => sum + transaction.sales, 0);
  const costs = selectedTransactions.reduce((sum, transaction) => sum + transaction.costs, 0);
  const items = selectedTransactions.map((transaction) => transaction.item).join(", ");
  const importRecord = {
    id: `${Date.now()}`,
    syncedDate: today,
    location: location.name,
    locationId: location.id,
    sales,
    costs,
    items,
    transactionCount: selectedTransactions.length
  };
  const checkin = {
    id: `square-${importRecord.id}`,
    location: location.name,
    locationId: location.id,
    date: today,
    startTime: "11:00",
    endTime: "14:00",
    sales,
    costs,
    bestSellers: items,
    competitors: "",
    notes: `Imported ${selectedTransactions.length} Square demo transactions.`
  };

  saveSquareImports([importRecord, ...getSquareImports()]);
  saveCheckins([checkin, ...getSavedCheckins()]);
  saveSquareDemoTransactions(getSquareDemoTransactions().filter((transaction) => !transaction.selected));
  squareImportStatus.textContent = `Imported ${selectedTransactions.length} transactions totaling $${sales.toLocaleString()} into ${location.name}.`;
  renderSquareTransactions();
  renderSquareHistory();
  renderCheckinHistory();
  renderDashboard();
  renderDetail();
  renderResults();
  renderReports();
}

function renderSquareHistory() {
  const imports = getSquareImports();

  squareSyncHistory.innerHTML = imports.length
    ? imports
        .slice(0, 8)
        .map(
          (item) => `
            <tr>
              <td>${item.syncedDate}</td>
              <td>${item.location}</td>
              <td>$${Number(item.sales).toLocaleString()}</td>
              <td>$${(Number(item.sales || 0) - Number(item.costs || 0)).toLocaleString()}</td>
              <td>${item.items || ""}</td>
            </tr>
          `
        )
        .join("")
    : `
      <tr>
        <td colspan="5">No Square demo imports yet.</td>
      </tr>
    `;
}

function groupBy(items, keyFn) {
  return items.reduce((groups, item) => {
    const key = keyFn(item);
    groups[key] = groups[key] || [];
    groups[key].push(item);
    return groups;
  }, {});
}

function renderReportList(element, rows, emptyText) {
  element.innerHTML = rows.length
    ? rows
        .map(
          (row) => `
            <div class="mini-list-item">
              <strong>${row.title}</strong>
              <span>${row.detail}</span>
            </div>
          `
        )
        .join("")
    : `<p class="helper-text">${emptyText}</p>`;
}

function renderReportLocationOptions(byLocation) {
  const currentValue = reportLocationFilter.value;
  const options = byLocation.map((item) => `<option value="${item.location}">${item.location}</option>`).join("");

  reportLocationFilter.innerHTML = `<option value="all">All venues</option>${options}`;
  if ([...reportLocationFilter.options].some((option) => option.value === currentValue)) {
    reportLocationFilter.value = currentValue;
  } else if (byLocation[0]) {
    reportLocationFilter.value = byLocation[0].location;
  } else {
    reportLocationFilter.value = "all";
  }
}

function renderSelectedLocationReport(locationName, checkins, byLocation) {
  const selectedName = locationName === "all" ? byLocation[0]?.location : locationName;

  if (!selectedName) {
    reportSelectedLocation.innerHTML = `<p class="helper-text">Save check-ins or import POS sales to unlock venue reports.</p>`;
    return;
  }

  const visits = checkins.filter((checkin) => checkin.location === selectedName);
  const summary = byLocation.find((item) => item.location === selectedName);
  const recentNotes = visits
    .slice(0, 4)
    .map((visit) => ({
      title: `${visit.date || "No date"} - $${Number(visit.sales || 0).toLocaleString()} sales`,
      detail: `${visit.bestSellers ? `Best sellers: ${visit.bestSellers}. ` : ""}${visit.notes || "No notes saved."}`
    }));

  renderReportList(
    reportSelectedLocation,
    [
      {
        title: selectedName,
        detail: `${summary.visits} visits, $${summary.sales.toLocaleString()} sales, $${summary.profit.toLocaleString()} profit, $${summary.avgProfit.toLocaleString()} avg profit`
      },
      ...recentNotes
    ],
    "No history for this venue yet."
  );
}

function getCheckinHours(checkin) {
  if (!checkin.startTime || !checkin.endTime) {
    return 0;
  }

  const [startHour, startMinute] = checkin.startTime.split(":").map(Number);
  const [endHour, endMinute] = checkin.endTime.split(":").map(Number);
  const start = new Date();
  const end = new Date();

  start.setHours(startHour || 0, startMinute || 0, 0, 0);
  end.setHours(endHour || 0, endMinute || 0, 0, 0);

  if (end < start) {
    end.setDate(end.getDate() + 1);
  }

  return Math.max(0, (end - start) / 3600000);
}

function renderExpandedDecisionReports(checkins, byLocation) {
  const routeBase = homeBase.value.trim() || "Lowell, MA";
  const routeStops = getRouteStops();
  const routeLegs = getRouteLegs(routeStops, routeBase);
  const routeVendors = getSupplierRouteMatches(routeStops, routeBase);
  const testedLocations = new Set(checkins.map((checkin) => checkin.location));
  const averageProfit = byLocation.length
    ? byLocation.reduce((sum, item) => sum + item.avgProfit, 0) / byLocation.length
    : 0;

  renderReportList(
    reportGrossHour,
    checkins
      .map((checkin) => {
        const hours = getCheckinHours(checkin);
        const rate = hours > 0 ? Math.round(Number(checkin.sales || 0) / hours) : 0;

        return { ...checkin, hours, rate };
      })
      .filter((checkin) => checkin.rate > 0)
      .sort((a, b) => b.rate - a.rate)
      .slice(0, 6)
      .map((checkin) => ({
        title: checkin.location,
        detail: `$${checkin.rate.toLocaleString()}/hr on ${checkin.date || "unknown date"} over ${checkin.hours.toFixed(1)} hours`
      })),
    "No timed check-ins yet. Use Sales Log start/stop times to unlock this report."
  );

  renderReportList(
    reportLowPerformers,
    byLocation
      .filter((item) => item.avgProfit < averageProfit || item.profit < 0)
      .sort((a, b) => a.avgProfit - b.avgProfit)
      .slice(0, 6)
      .map((item) => ({
        title: item.location,
        detail: `$${item.avgProfit.toLocaleString()} avg profit over ${item.visits} visits. Review notes, weather, competition, or rent.`
      })),
    "No weak spots yet. More check-ins will reveal locations to improve or avoid."
  );

  renderReportList(
    reportUntestedOpportunities,
    locations
      .filter((location) => !testedLocations.has(location.name))
      .sort((a, b) => getLocationScore(b) - getLocationScore(a))
      .slice(0, 6)
      .map((location) => ({
        title: `${location.name} - ${getLocationScore(location)}/100`,
        detail: `${location.city} - ${location.bestTime || "Time TBD"} - ${location.opportunityType || "Opportunity"}`
      })),
    "Every current opportunity has at least one check-in."
  );

  renderReportList(
    reportRouteMileage,
    routeLegs
      .sort((a, b) => b.miles - a.miles)
      .slice(0, 6)
      .map((leg) => ({
        title: `${leg.from} to ${leg.to}`,
        detail: `${leg.miles} estimated miles from ${leg.fromCity || "unknown"} to ${leg.toCity || "unknown"}`
      })),
    "No route mileage available yet."
  );

  renderReportList(
    reportRouteVendors,
    routeVendors.slice(0, 6).map((vendor) => ({
      title: vendor.name,
      detail: `${vendor.category} in ${vendor.city}. About ${vendor.routeMiles} miles from route. Best for ${vendor.bestFor}.`
    })),
    "No route vendor matches yet."
  );
}

function renderReports() {
  const checkins = getSavedCheckins();
  const totalSales = checkins.reduce((sum, checkin) => sum + Number(checkin.sales || 0), 0);
  const totalCosts = checkins.reduce((sum, checkin) => sum + Number(checkin.costs || 0), 0);
  const totalProfit = totalSales - totalCosts;
  const avgProfit = checkins.length ? Math.round(totalProfit / checkins.length) : 0;
  const byLocation = Object.entries(groupBy(checkins, (checkin) => checkin.location)).map(([location, visits]) => {
    const sales = visits.reduce((sum, visit) => sum + Number(visit.sales || 0), 0);
    const profit = visits.reduce((sum, visit) => sum + Number(visit.sales || 0) - Number(visit.costs || 0), 0);

    return { location, visits: visits.length, sales, profit, avgProfit: Math.round(profit / visits.length) };
  }).sort((a, b) => b.profit - a.profit);
  const best = byLocation[0];
  const menuCounts = {};

  checkins.forEach((checkin) => {
    (checkin.bestSellers || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
      .forEach((item) => {
        menuCounts[item] = (menuCounts[item] || 0) + 1;
      });
  });

  reportTotalSales.textContent = `$${totalSales.toLocaleString()}`;
  reportTotalProfit.textContent = `$${totalProfit.toLocaleString()}`;
  reportAvgProfit.textContent = `$${avgProfit.toLocaleString()}`;
  reportBestLocation.textContent = best ? best.location : "--";
  renderReportLocationOptions(byLocation);
  renderSelectedLocationReport(reportLocationFilter.value, checkins, byLocation);
  renderReportList(
    reportLocationPerformance,
    byLocation.slice(0, 6).map((item) => ({
      title: item.location,
      detail: `${item.visits} visits, $${item.sales.toLocaleString()} sales, $${item.profit.toLocaleString()} profit`
    })),
    "No location sales history yet."
  );
  renderReportList(
    reportMenuDemand,
    Object.entries(menuCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([item, count]) => ({ title: item, detail: `${count} check-in mention${count === 1 ? "" : "s"}` })),
    "No best-seller data yet."
  );
  renderReportList(
    reportWeatherImpact,
    ["Low", "Moderate", "High", "Unknown"].map((risk) => {
      const riskLocations = locations.filter((location) => location.weather === risk);
      const avgScore = riskLocations.length
        ? Math.round(riskLocations.reduce((sum, location) => sum + getLocationScore(location), 0) / riskLocations.length)
        : 0;

      return { title: `${risk} risk`, detail: `${riskLocations.length} locations, ${avgScore || "--"} avg score` };
    }),
    "No weather data yet."
  );
  renderReportList(
    reportPipelineValue,
    getPipelineRecords().slice(0, 6).map((record) => ({
      title: `${record.status}: ${record.location}`,
      detail: `${record.deadline || "No deadline"} - fee ${record.fee ? `$${record.fee}` : "TBD"}`
    })),
    "No pipeline records yet."
  );
  renderReportList(
    reportSupplierCosts,
    getPriceRecords().slice(0, 6).map((price) => ({
      title: price.item,
      detail: `$${price.price.toFixed(2)} / ${price.unit} from ${price.supplier}`
    })),
    "No supplier prices tracked yet."
  );
  renderReportList(
    reportPosSummary,
    getSquareImports().slice(0, 6).map((item) => ({
      title: `${item.transactionCount || 1} Square transaction${item.transactionCount === 1 ? "" : "s"}`,
      detail: `${item.location}: $${item.sales.toLocaleString()} sales, $${(item.sales - item.costs).toLocaleString()} profit`
    })),
    "No POS imports yet."
  );
  renderExpandedDecisionReports(checkins, byLocation);
}

navItems.forEach((item) => {
  item.addEventListener("click", () => showScreen(item.dataset.screen));
});

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.next));
});

document.querySelector("#create-account").addEventListener("click", () => {
  createAccount().catch((error) => {
    accountStatus.textContent = error.message;
  });
});

document.querySelector("#log-in").addEventListener("click", () => {
  logIn().catch((error) => {
    accountStatus.textContent = error.message;
  });
});
document.querySelector("#resend-verification").addEventListener("click", () => {
  resendVerificationEmail().catch((error) => {
    accountStatus.textContent = error.message;
  });
});

document.querySelector("#find-spots").addEventListener("click", () => {
  findBestSpots();
});
zipCode.addEventListener("input", () => {
  const city = cityFromZip(zipCode.value);

  if (city) {
    document.querySelector("#city").value = city;
  }

  renderResults();
});
showAllLocations.addEventListener("click", () => {
  showSavedLocationsOnly = false;
  renderResults();
});
showSavedLocations.addEventListener("click", () => {
  showSavedLocationsOnly = true;
  renderResults();
});

document.querySelector("#save-custom-location").addEventListener("click", saveCustomLocation);
document.querySelector("#search-suppliers").addEventListener("click", renderSuppliers);
supplierQuery.addEventListener("input", renderSuppliers);
supplierCategory.addEventListener("change", renderSuppliers);
document.querySelector("#save-partner").addEventListener("click", saveSupplierPartner);
document.querySelector("#search-marketplace").addEventListener("click", renderMarketplace);
marketplaceQuery.addEventListener("input", renderMarketplace);
marketplaceZip.addEventListener("input", renderMarketplace);
marketplaceCategory.addEventListener("change", renderMarketplace);
document.querySelector("#save-marketplace-listing").addEventListener("click", saveMarketplaceListing);
document.querySelector("#save-public-listing").addEventListener("click", savePublicListing);
document.querySelector("#browse-public-listings").addEventListener("click", renderPublicListings);
document.querySelector("#save-truck-profile").addEventListener("click", saveTruckProfile);
document.querySelector("#convert-menu-ai").addEventListener("click", draftMenuFromUpload);
document.querySelector("#connect-toast-menu").addEventListener("click", connectToastMenuSandbox);
document.querySelector("#jump-list-space").addEventListener("click", () => {
  document.querySelector("#list-space-panel").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelector("#save-ops-location").addEventListener("click", savePipelineRecord);
opsLocation.addEventListener("change", () => loadPipelineRecordIntoForm(opsLocation.value));
showHiddenPipeline.addEventListener("change", renderPipelineList);
opsAiSummary.addEventListener("click", generatePipelineSummary);
hideOpsLocation.addEventListener("click", () => {
  if (opsLocation.value) {
    togglePipelineHidden(opsLocation.value);
  }
});
removeOpsLocation.addEventListener("click", () => {
  if (opsLocation.value) {
    removePipelineRecord(opsLocation.value);
  }
});
document.querySelector("#open-truck-marketing").addEventListener("click", () => {
  showScreen("public-site");
  document.querySelector(".marketing-layout").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelector("#save-reminder").addEventListener("click", saveReminderRecord);
document.querySelector("#generate-ai-week").addEventListener("click", generateAiWeek);
document.querySelector("#connect-square").addEventListener("click", connectSquareSandbox);
document.querySelector("#disconnect-square").addEventListener("click", disconnectSquare);
document.querySelector("#import-square-demo").addEventListener("click", importSquareDemoSale);
document.querySelector("#select-all-square").addEventListener("click", () => setSquareTransactionSelection(true));
document.querySelector("#clear-square-selection").addEventListener("click", () => setSquareTransactionSelection(false));
document.querySelector("#refresh-square-demo").addEventListener("click", refreshSquareDemoBatch);
document.querySelector("#save-settings").addEventListener("click", saveSettings);
document.querySelector("#save-feedback").addEventListener("click", saveFeedback);
document.querySelector("#export-demo-data").addEventListener("click", exportDemoData);
document.querySelector("#reset-demo-data").addEventListener("click", resetDemoData);
document.querySelector("#save-forum-post").addEventListener("click", saveForumPost);
reportLocationFilter.addEventListener("change", renderReports);
navToggle.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("nav-open");
});
homeBase.addEventListener("input", renderCalendar);
routePeriod.addEventListener("change", renderCalendar);

document.querySelector("#dashboard-view-details").addEventListener("click", () => {
  setSelectedLocation(getTopLocation().id);
  showScreen("detail");
});

document.querySelector("#generate-plan").addEventListener("click", generateWeeklyPlan);
document.querySelector("#refresh-route-plan").addEventListener("click", () => {
  generateWeeklyPlan();
  planStatus.textContent = "Route plan refreshed.";
});
routePlanPeriod.addEventListener("change", () => {
  generateWeeklyPlan();
});
routePlanStart.addEventListener("change", renderWeeklyPlan);
routePlanEnd.addEventListener("change", renderWeeklyPlan);
findStartDate.addEventListener("change", () => {
  routePlanStart.value = findStartDate.value;
  renderResults();
});
findEndDate.addEventListener("change", () => {
  routePlanEnd.value = findEndDate.value;
  renderResults();
});
document.querySelector("#refresh-weather").addEventListener("click", () => refreshWeather(selectedLocation));

document.querySelector("#add-to-plan").addEventListener("click", () => {
  const added = addLocationToPlan(selectedLocation);

  planStatus.textContent = added
    ? `${selectedLocation.name} was added to your route plan.`
    : `${selectedLocation.name} is already in your route plan.`;
  showScreen("plan");
});

document.querySelector("#check-in-location").addEventListener("click", () => {
  renderCheckinLocationOptions();
  checkinLocation.value = selectedLocation.id;
  showScreen("checkins");
});

document.querySelector("#save-location").addEventListener("click", () => {
  addLocationToPlan(selectedLocation);
  saveLocationToDatabase().then((savedToDatabase) => {
    planStatus.textContent = savedToDatabase
      ? `${selectedLocation.name} was saved to your Supabase route plan.`
      : `${selectedLocation.name} was saved in this browser route plan. Log in to save it to Supabase.`;
  });

  showScreen("plan");
});

document.querySelector("#export-plan").addEventListener("click", downloadWeeklyPlanCsv);

document.querySelector("#send-calendar").addEventListener("click", () => {
  planStatus.textContent = "Calendar export is coming soon. For now, use Export Plan or view this map in Route Plan.";
});

document.querySelector("#save-checkin").addEventListener("click", saveCheckin);
document.querySelector("#clear-checkins").addEventListener("click", clearCheckins);
document.querySelector("#start-service").addEventListener("click", startServiceTimer);
document.querySelector("#stop-service").addEventListener("click", stopServiceTimer);
checkinSales.addEventListener("input", updateTimerReadout);
checkinStart.addEventListener("input", () => {
  serviceElapsedMilliseconds = 0;
  updateTimerReadout();
});
checkinEnd.addEventListener("input", () => {
  serviceElapsedMilliseconds = 0;
  updateTimerReadout();
});

loadProfile();
loadCurrentSession().catch((error) => {
  databaseStatus.textContent = error.message;
});
loadCustomLocations();
homeBase.value = appStorage.getItem(storageKeys.homeBase) || homeBase.value;
loadSettings();
renderDashboard();
renderDetail();
setDefaultCheckinFields();
setDefaultRoutePlanDates();
renderCheckinLocationOptions();
renderResults();
renderSuppliers();
renderMarketplace();
renderPublicListings();
loadTruckProfileForm();
renderMarketingChecklist();
renderPipelineList();
renderReminders();
renderCalendar();
renderSquareStatus();
renderSquareTransactions();
renderSquareHistory();
renderReports();
renderWeeklyPlan();
renderCheckinHistory();
renderFeedback();
renderForum();
refreshWeather(selectedLocation);
