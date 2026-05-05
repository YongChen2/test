const brands = [
  "Vsechny",
  "Skoda",
  "Volkswagen",
  "BMW",
  "Audi",
  "Mercedes-Benz",
  "Toyota",
  "Ford",
  "Hyundai",
  "Kia",
  "Peugeot",
  "Renault",
  "Volvo",
];

const fuels = ["Vse", "Benzin", "Nafta", "Hybrid", "Elektro", "LPG"];
const transmissions = ["Vse", "Manual", "Automat"];
const bodies = ["Hatchback", "Kombi", "Sedan", "SUV", "Coupe", "MPV", "Dodavka"];
const regions = [
  "Vse",
  "Praha",
  "Stredocesky kraj",
  "Jihocesky kraj",
  "Plzensky kraj",
  "Karlovarsky kraj",
  "Ustecky kraj",
  "Liberecky kraj",
  "Kralovehradecky kraj",
  "Pardubicky kraj",
  "Vysocina",
  "Jihomoravsky kraj",
  "Olomoucky kraj",
  "Moravskoslezsky kraj",
  "Zlinsky kraj",
];

const stockPhotos = [
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80",
];

const demoListings = [
  {
    id: "demo-1",
    brand: "Skoda",
    model: "Octavia Combi 2.0 TDI",
    year: 2021,
    price: 429000,
    mileage: 86500,
    fuel: "Nafta",
    transmission: "Automat",
    body: "Kombi",
    region: "Praha",
    power: 110,
    color: "Seda metaliza",
    inspection: "2027-03",
    vin: "TMBJG7NE9M0123456",
    owners: 1,
    vat: true,
    crashed: false,
    phone: "+420 777 123 456",
    email: "prodej@automarket.cz",
    description:
      "Servisni historie, adaptivni tempomat, LED svetla, vyhrivane sedačky a sada zimnich kol.",
    photos: [stockPhotos[0], stockPhotos[2], stockPhotos[5]],
    createdAt: "2026-05-04T09:00:00.000Z",
  },
  {
    id: "demo-2",
    brand: "BMW",
    model: "320d xDrive",
    year: 2020,
    price: 639000,
    mileage: 112000,
    fuel: "Nafta",
    transmission: "Automat",
    body: "Sedan",
    region: "Jihomoravsky kraj",
    power: 140,
    color: "Cerna",
    inspection: "2026-11",
    vin: "WBA5V71020B123456",
    owners: 2,
    vat: false,
    crashed: false,
    phone: "+420 606 555 111",
    email: "bmw@automarket.cz",
    description:
      "Pohon 4x4, sportovni sedadla, navigace, automaticka klimatizace a pravidelny servis.",
    photos: [stockPhotos[1], stockPhotos[3]],
    createdAt: "2026-05-03T10:30:00.000Z",
  },
  {
    id: "demo-3",
    brand: "Toyota",
    model: "Corolla Touring Sports Hybrid",
    year: 2022,
    price: 519000,
    mileage: 48200,
    fuel: "Hybrid",
    transmission: "Automat",
    body: "Kombi",
    region: "Stredocesky kraj",
    power: 90,
    color: "Bila",
    inspection: "2027-08",
    vin: "SB1K93BE10E123456",
    owners: 1,
    vat: true,
    crashed: false,
    phone: "+420 725 900 300",
    email: "toyota@automarket.cz",
    description:
      "Usporny hybrid, kamera, CarPlay, asistent jizdnich pruhu a velmi pekny interier.",
    photos: [stockPhotos[4], stockPhotos[2]],
    createdAt: "2026-05-02T15:15:00.000Z",
  },
  {
    id: "demo-4",
    brand: "Volkswagen",
    model: "Golf 1.5 TSI",
    year: 2019,
    price: 329000,
    mileage: 73500,
    fuel: "Benzin",
    transmission: "Manual",
    body: "Hatchback",
    region: "Plzensky kraj",
    power: 96,
    color: "Modra",
    inspection: "2026-09",
    vin: "",
    owners: 2,
    vat: false,
    crashed: false,
    phone: "+420 731 222 333",
    email: "golf@automarket.cz",
    description: "Pekny stav, nizka spotreba, parkovaci senzory, digitalni radio a letni kola.",
    photos: [stockPhotos[3], stockPhotos[0]],
    createdAt: "2026-05-01T12:00:00.000Z",
  },
];

const state = {
  listings: load("automarketListings", demoListings),
  saved: load("automarketSaved", []),
  user: load("automarketUser", null),
  selectedPhotos: [],
  filters: {},
};

const currency = new Intl.NumberFormat("cs-CZ", {
  style: "currency",
  currency: "CZK",
  maximumFractionDigits: 0,
});

const number = new Intl.NumberFormat("cs-CZ");

function load(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function byId(id) {
  return document.getElementById(id);
}

function fillSelect(select, values, includePlaceholder = false) {
  select.innerHTML = "";
  values.forEach((value, index) => {
    const option = document.createElement("option");
    option.value = includePlaceholder && index === 0 ? "" : value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function initSelects() {
  ["quickBrand", "brandFilter"].forEach((id) => fillSelect(byId(id), brands, true));
  fillSelect(byId("brandInput"), brands.slice(1));
  fillSelect(byId("fuelFilter"), fuels, true);
  fillSelect(byId("fuelInput"), fuels.slice(1));
  fillSelect(byId("transmissionFilter"), transmissions, true);
  fillSelect(byId("transmissionInput"), transmissions.slice(1));
  fillSelect(byId("bodyInput"), bodies);
  fillSelect(byId("regionFilter"), regions, true);
  fillSelect(byId("regionInput"), regions.slice(1));
}

function getFilteredListings() {
  const f = state.filters;
  let listings = [...state.listings].filter((car) => {
    const matchesBrand = !f.brand || car.brand === f.brand;
    const matchesModel = !f.model || car.model.toLowerCase().includes(f.model.toLowerCase());
    const matchesPriceMin = !f.priceMin || car.price >= f.priceMin;
    const matchesPriceMax = !f.priceMax || car.price <= f.priceMax;
    const matchesYearMin = !f.yearMin || car.year >= f.yearMin;
    const matchesYearMax = !f.yearMax || car.year <= f.yearMax;
    const matchesMileage = !f.mileageMax || car.mileage <= f.mileageMax;
    const matchesFuel = !f.fuel || car.fuel === f.fuel;
    const matchesTransmission = !f.transmission || car.transmission === f.transmission;
    const matchesRegion = !f.region || car.region === f.region;
    const matchesCrash = !f.noCrash || !car.crashed;
    return (
      matchesBrand &&
      matchesModel &&
      matchesPriceMin &&
      matchesPriceMax &&
      matchesYearMin &&
      matchesYearMax &&
      matchesMileage &&
      matchesFuel &&
      matchesTransmission &&
      matchesRegion &&
      matchesCrash
    );
  });

  const sort = byId("sortSelect").value;
  listings.sort((a, b) => {
    if (sort === "priceAsc") return a.price - b.price;
    if (sort === "priceDesc") return b.price - a.price;
    if (sort === "yearDesc") return b.year - a.year;
    if (sort === "mileageAsc") return a.mileage - b.mileage;
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return listings;
}

function renderListings() {
  const listings = getFilteredListings();
  const grid = byId("listingGrid");
  grid.innerHTML = listings.map(renderCard).join("");
  byId("emptyState").hidden = listings.length > 0;
  byId("resultCount").textContent = `${listings.length} aut v nabidce`;
  byId("totalListings").textContent = state.listings.length;
}

function renderSaved() {
  const savedListings = state.listings.filter((listing) => state.saved.includes(listing.id));
  const grid = byId("savedGrid");
  grid.innerHTML = savedListings.map(renderCard).join("");
  byId("savedEmpty").hidden = savedListings.length > 0;
}

function renderCard(car) {
  const isSaved = state.saved.includes(car.id);
  const image = car.photos[0] || stockPhotos[0];
  return `
    <article class="car-card">
      <div class="car-image">
        <img src="${image}" alt="${car.brand} ${car.model}" />
        <button class="save-button ${isSaved ? "active" : ""}" data-save="${car.id}" type="button" aria-label="Ulozit inzerat">
          ${isSaved ? "♥" : "♡"}
        </button>
      </div>
      <div class="car-body">
        <div class="car-title-row">
          <h3>${car.brand} ${car.model}</h3>
          <span class="price">${currency.format(car.price)}</span>
        </div>
        <div class="meta-list">
          <span>${car.year}</span>
          <span>${number.format(car.mileage)} km</span>
          <span>${car.fuel}</span>
          <span>${car.transmission}</span>
        </div>
        <div class="tag-row">
          <span class="tag">${car.body}</span>
          <span class="tag">${car.region}</span>
          ${car.vat ? '<span class="tag">Odpocet DPH</span>' : ""}
          ${!car.crashed ? '<span class="tag">Nebourane</span>' : ""}
        </div>
        <div class="card-actions">
          <button class="ghost-button" data-detail="${car.id}" type="button">Detail</button>
          <a class="primary-button" href="tel:${phoneHref(car.phone)}">Volat</a>
        </div>
      </div>
    </article>
  `;
}

function collectFilters() {
  state.filters = {
    brand: byId("brandFilter").value,
    model: byId("modelFilter").value.trim(),
    priceMin: readNumber("priceMinFilter"),
    priceMax: readNumber("priceMaxFilter"),
    yearMin: readNumber("yearMinFilter"),
    yearMax: readNumber("yearMaxFilter"),
    mileageMax: readNumber("mileageMaxFilter"),
    fuel: byId("fuelFilter").value,
    transmission: byId("transmissionFilter").value,
    region: byId("regionFilter").value,
    noCrash: byId("noCrashFilter").checked,
  };
}

function readNumber(id) {
  const value = Number(byId(id).value);
  return Number.isFinite(value) && value > 0 ? value : null;
}

function resetFilters() {
  byId("filtersForm").reset();
  state.filters = {};
  renderListings();
}

function toggleSave(id) {
  if (!state.user) {
    openAccount();
    toast("Nejdrive se prihlaste demo uctem.");
    return;
  }
  state.saved = state.saved.includes(id)
    ? state.saved.filter((savedId) => savedId !== id)
    : [...state.saved, id];
  save("automarketSaved", state.saved);
  renderListings();
  renderSaved();
}

function showDetail(id) {
  const car = state.listings.find((listing) => listing.id === id);
  if (!car) return;

  const thumbs = car.photos
    .slice(1, 6)
    .map((photo) => `<img src="${photo}" alt="${car.brand} ${car.model}" />`)
    .join("");

  byId("detailContent").innerHTML = `
    <div class="detail-hero">
      <div class="detail-gallery">
        <img src="${car.photos[0] || stockPhotos[0]}" alt="${car.brand} ${car.model}" />
        <div class="thumb-row">${thumbs}</div>
      </div>
      <div class="detail-info">
        <p class="eyebrow">${car.region}</p>
        <h2>${car.brand} ${car.model}</h2>
        <span class="price">${currency.format(car.price)}</span>
        <div class="spec-grid">
          ${spec("Rok", car.year)}
          ${spec("Najeto", `${number.format(car.mileage)} km`)}
          ${spec("Palivo", car.fuel)}
          ${spec("Prevodovka", car.transmission)}
          ${spec("Karoserie", car.body)}
          ${spec("Vykon", car.power ? `${car.power} kW` : "Neuvedeno")}
          ${spec("Barva", car.color || "Neuvedeno")}
          ${spec("STK", car.inspection || "Neuvedeno")}
          ${spec("Majitele", car.owners || "Neuvedeno")}
          ${spec("VIN", car.vin || "Neuvedeno")}
        </div>
        <p>${car.description}</p>
        <div class="tag-row">
          ${car.vat ? '<span class="tag">Mozny odpocet DPH</span>' : ""}
          ${car.crashed ? '<span class="tag">Bourane / opravovane</span>' : '<span class="tag">Nebourane</span>'}
        </div>
        <a class="primary-button" href="tel:${phoneHref(car.phone)}">Volat ${car.phone}</a>
        <a class="ghost-button" href="mailto:${car.email}">${car.email}</a>
      </div>
    </div>
  `;
  byId("detailModal").showModal();
}

function spec(label, value) {
  return `<div><span>${label}</span><strong>${value}</strong></div>`;
}

function phoneHref(phone) {
  return phone.replace(/\s/g, "");
}

function makeId() {
  return crypto.randomUUID?.() || `listing-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function openAccount() {
  byId("accountModal").showModal();
}

function updateAccountButton() {
  const button = byId("accountButton");
  button.textContent = state.user ? state.user.email : "Prihlasit";
}

function handleAccountSubmit(event) {
  event.preventDefault();
  state.user = {
    phone: byId("loginPhone").value.trim(),
    email: byId("loginEmail").value.trim(),
  };
  save("automarketUser", state.user);
  updateAccountButton();
  byId("accountModal").close();
  toast("Demo ucet je pripraveny.");
}

async function handlePhotos(event) {
  const files = [...event.target.files].slice(0, 15);
  if (event.target.files.length > 15) {
    toast("Vybral jste vic nez 15 fotek, pouziji prvnich 15.");
  }
  state.selectedPhotos = await Promise.all(files.map(fileToDataUrl));
  renderPhotoPreview();
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function renderPhotoPreview() {
  byId("photoPreview").innerHTML = state.selectedPhotos
    .map((photo, index) => `<img src="${photo}" alt="Nahrana fotka ${index + 1}" />`)
    .join("");
}

function handleListingSubmit(event) {
  event.preventDefault();
  if (!state.user) {
    openAccount();
    toast("Pro pridani inzeratu se nejdrive prihlaste demo uctem.");
    return;
  }

  const listing = {
    id: makeId(),
    brand: byId("brandInput").value,
    model: byId("modelInput").value.trim(),
    year: Number(byId("yearInput").value),
    price: Number(byId("priceInput").value),
    mileage: Number(byId("mileageInput").value),
    power: Number(byId("powerInput").value) || null,
    fuel: byId("fuelInput").value,
    transmission: byId("transmissionInput").value,
    body: byId("bodyInput").value,
    region: byId("regionInput").value,
    color: byId("colorInput").value.trim(),
    inspection: byId("inspectionInput").value,
    vin: byId("vinInput").value.trim().toUpperCase(),
    owners: Number(byId("ownersInput").value) || null,
    vat: byId("vatInput").checked,
    crashed: byId("crashedInput").checked,
    phone: byId("phoneInput").value.trim(),
    email: byId("emailInput").value.trim(),
    description: byId("descriptionInput").value.trim(),
    photos: state.selectedPhotos.length ? state.selectedPhotos : [stockPhotos[5]],
    createdAt: new Date().toISOString(),
  };

  state.listings = [listing, ...state.listings];
  save("automarketListings", state.listings);
  event.target.reset();
  state.selectedPhotos = [];
  renderPhotoPreview();
  resetFilters();
  renderSaved();
  toast("Inzerat byl zverejneny v demo nabidce.");
  location.hash = "#nabidka";
}

function toast(message) {
  const element = byId("toast");
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => element.classList.remove("show"), 2600);
}

function bindEvents() {
  byId("filtersForm").addEventListener("submit", (event) => {
    event.preventDefault();
    collectFilters();
    renderListings();
  });
  byId("resetFilters").addEventListener("click", resetFilters);
  byId("sortSelect").addEventListener("change", renderListings);
  byId("quickSearchForm").addEventListener("submit", (event) => {
    event.preventDefault();
    byId("brandFilter").value = byId("quickBrand").value;
    byId("priceMaxFilter").value = byId("quickPrice").value;
    collectFilters();
    renderListings();
    location.hash = "#nabidka";
  });
  byId("accountButton").addEventListener("click", openAccount);
  byId("accountForm").addEventListener("submit", handleAccountSubmit);
  byId("closeAccount").addEventListener("click", () => byId("accountModal").close());
  byId("photosInput").addEventListener("change", handlePhotos);
  byId("listingForm").addEventListener("submit", handleListingSubmit);
  byId("closeDetail").addEventListener("click", () => byId("detailModal").close());

  document.addEventListener("click", (event) => {
    const saveButton = event.target.closest("[data-save]");
    const detailButton = event.target.closest("[data-detail]");
    if (saveButton) toggleSave(saveButton.dataset.save);
    if (detailButton) showDetail(detailButton.dataset.detail);
  });
}

function boot() {
  initSelects();
  bindEvents();
  updateAccountButton();
  renderListings();
  renderSaved();
}

boot();
