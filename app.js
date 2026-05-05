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

const brandModels = {
  Skoda: ["Fabia", "Octavia", "Superb", "Kamiq", "Karoq", "Kodiaq", "Enyaq"],
  Volkswagen: ["Golf", "Passat", "Tiguan", "Touareg", "Touran", "Transporter", "ID.4"],
  BMW: ["i3", "320d", "330i", "520d", "X1", "X3", "X5"],
  Audi: ["A3", "A4", "A6", "Q3", "Q5", "Q7", "e-tron"],
  "Mercedes-Benz": ["A", "C", "E", "GLA", "GLC", "GLE", "Vito"],
  Toyota: ["Yaris", "Corolla", "C-HR", "RAV4", "Camry", "Proace"],
  Ford: ["Fiesta", "Focus", "Mondeo", "Kuga", "Puma", "Transit"],
  Hyundai: ["i20", "i30", "Kona", "Tucson", "Santa Fe", "IONIQ 5"],
  Kia: ["Ceed", "Sportage", "Sorento", "Niro", "EV6", "Stonic"],
  Peugeot: ["208", "308", "508", "2008", "3008", "5008"],
  Renault: ["Clio", "Megane", "Captur", "Kadjar", "Kangoo", "Trafic"],
  Volvo: ["V60", "V90", "XC40", "XC60", "XC90", "EX30"],
};

const fuels = ["Vse", "Benzin", "Nafta", "Hybrid", "Elektro", "LPG"];
const transmissions = ["Vse", "Manual", "Automat"];
const bodies = ["Hatchback", "Kombi", "Sedan", "SUV", "Coupe", "MPV", "Dodavka"];
const conditions = ["Vse", "Nove", "Predvadeci", "Ojete", "Veteran"];
const tachometerStates = ["Vse", "Overeny", "Po servisu", "Neovereny"];
const drivetrains = ["Vse", "Predni", "Zadni", "4x4"];
const equipmentOptions = ["Navigace", "LED svetla", "Tempomat", "Parkovaci kamera", "Tazne zarizeni", "Vyhrivana sedadla"];
const acOptions = ["Vse", "Bez klimatizace", "Manualni", "Automaticka", "Dvouzónova"];
const salePlaces = ["Vse", "Praha", "Brno", "Ostrava", "Plzen", "Hradec Kralove", "Olomouc"];
const originCountries = ["Vse", "Ceska republika", "Nemecko", "Rakousko", "Italie", "Francie"];
const sellerTypes = ["Vse", "Soukromy prodejce", "Autobazar", "Dealer"];
const verificationPrograms = ["Overeny telefon", "Overeny e-mail", "Overeny prodejce", "Kontrola VIN"];
const vehicleHistoryOptions = ["Servisni historie", "Nehavarovane", "Po prvnim majiteli", "Garance puvodu"];
const listingAgeOptions = ["Vse", "Dnes", "Do 3 dnu", "Do 7 dnu", "Do 30 dnu"];
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
  "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1617814076668-3dfc1f18ef5a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=900&q=80",
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
    vin: "TMBJG7NE9M0K8R4P2",
    owners: 1,
    vat: true,
    crashed: false,
    phone: "+420 608 742 519",
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
    vin: "WBA5V71020B7N4L8X",
    owners: 2,
    vat: false,
    crashed: false,
    phone: "+420 725 318 604",
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
    vin: "SB1K93BE10E6T2H7M",
    owners: 1,
    vat: true,
    crashed: false,
    phone: "+420 739 582 416",
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
    phone: "+420 731 864 205",
    email: "golf@automarket.cz",
    description: "Pekny stav, nizka spotreba, parkovaci senzory, digitalni radio a letni kola.",
    photos: [stockPhotos[3], stockPhotos[0]],
    createdAt: "2026-05-01T12:00:00.000Z",
  },
  {
    id: "demo-5",
    brand: "Audi",
    model: "A4 Avant 40 TDI quattro",
    year: 2021,
    price: 749000,
    mileage: 94100,
    fuel: "Nafta",
    transmission: "Automat",
    body: "Kombi",
    region: "Liberecky kraj",
    power: 150,
    color: "Stribrna",
    inspection: "2027-01",
    vin: "WAUZZZF49MA8C5R7L",
    owners: 1,
    vat: true,
    crashed: false,
    phone: "+420 604 927 381",
    email: "audi@automarket.cz",
    description:
      "Quattro, Matrix LED, virtual cockpit, tazne zarizeni, servis pouze Audi a dva klice.",
    photos: [stockPhotos[6], stockPhotos[1], stockPhotos[12]],
    createdAt: "2026-04-30T13:20:00.000Z",
  },
  {
    id: "demo-6",
    brand: "Mercedes-Benz",
    model: "GLC 300de 4MATIC",
    year: 2022,
    price: 1129000,
    mileage: 52200,
    fuel: "Hybrid",
    transmission: "Automat",
    body: "SUV",
    region: "Praha",
    power: 225,
    color: "Cerna metaliza",
    inspection: "2027-05",
    vin: "W1N2539A71F9K6D3S",
    owners: 1,
    vat: true,
    crashed: false,
    phone: "+420 777 429 685",
    email: "mercedes@automarket.cz",
    description:
      "Plug-in hybrid, vzduchovy podvozek, panoramaticka strecha, Burmester a kompletni servisni historie.",
    photos: [stockPhotos[9], stockPhotos[10], stockPhotos[14]],
    createdAt: "2026-04-29T08:45:00.000Z",
  },
  {
    id: "demo-7",
    brand: "Ford",
    model: "Focus 1.0 EcoBoost",
    year: 2018,
    price: 229000,
    mileage: 126000,
    fuel: "Benzin",
    transmission: "Manual",
    body: "Hatchback",
    region: "Ustecky kraj",
    power: 92,
    color: "Cervena",
    inspection: "2026-10",
    vin: "WF0NXXGCHNJA7M2P9",
    owners: 2,
    vat: false,
    crashed: false,
    phone: "+420 602 748 913",
    email: "ford@automarket.cz",
    description:
      "Udrzovany Focus po vymene rozvodu, vyhrivane celni sklo, tempomat a nove brzdy.",
    photos: [stockPhotos[7], stockPhotos[11]],
    createdAt: "2026-04-28T16:10:00.000Z",
  },
  {
    id: "demo-8",
    brand: "Hyundai",
    model: "Tucson 1.6 T-GDI 4x4",
    year: 2023,
    price: 789000,
    mileage: 31800,
    fuel: "Benzin",
    transmission: "Automat",
    body: "SUV",
    region: "Moravskoslezsky kraj",
    power: 132,
    color: "Seda",
    inspection: "2027-12",
    vin: "TMAJ381AANJ4V8C2R",
    owners: 1,
    vat: true,
    crashed: false,
    phone: "+420 720 936 574",
    email: "hyundai@automarket.cz",
    description:
      "V zaruce, pohon 4x4, automat, adaptivni tempomat, kamera, LED a pravidelny servis.",
    photos: [stockPhotos[8], stockPhotos[4]],
    createdAt: "2026-04-27T11:25:00.000Z",
  },
  {
    id: "demo-9",
    brand: "Kia",
    model: "Ceed SW 1.5 T-GDi",
    year: 2021,
    price: 385000,
    mileage: 69000,
    fuel: "Benzin",
    transmission: "Manual",
    body: "Kombi",
    region: "Olomoucky kraj",
    power: 118,
    color: "Bila",
    inspection: "2027-04",
    vin: "U5YH881AAML6B3K8D",
    owners: 1,
    vat: false,
    crashed: false,
    phone: "+420 734 681 295",
    email: "kia@automarket.cz",
    description:
      "Cesky puvod, jeste v tovarni zaruce, CarPlay, asistent jizdnich pruhu a zimni sada.",
    photos: [stockPhotos[13], stockPhotos[2]],
    createdAt: "2026-04-26T14:40:00.000Z",
  },
  {
    id: "demo-10",
    brand: "Peugeot",
    model: "3008 1.6 PureTech GT",
    year: 2020,
    price: 459000,
    mileage: 84000,
    fuel: "Benzin",
    transmission: "Automat",
    body: "SUV",
    region: "Zlinsky kraj",
    power: 133,
    color: "Modra metaliza",
    inspection: "2026-12",
    vin: "VF3M45GFRLS9W2R6K",
    owners: 2,
    vat: false,
    crashed: false,
    phone: "+420 739 452 807",
    email: "peugeot@automarket.cz",
    description:
      "Vyssi vybava GT, masazni sedadla, kamera 360, bezklicove startovani a velmi dobry stav.",
    photos: [stockPhotos[15], stockPhotos[5]],
    createdAt: "2026-04-25T09:30:00.000Z",
  },
  {
    id: "demo-11",
    brand: "Renault",
    model: "Megane Grandtour 1.5 dCi",
    year: 2017,
    price: 189000,
    mileage: 151000,
    fuel: "Nafta",
    transmission: "Manual",
    body: "Kombi",
    region: "Jihocesky kraj",
    power: 81,
    color: "Seda",
    inspection: "2026-07",
    vin: "VF1RFB00358D7K4S2",
    owners: 3,
    vat: false,
    crashed: true,
    phone: "+420 605 918 342",
    email: "renault@automarket.cz",
    description:
      "Prakticke kombi, nizka spotreba, po kosmeticke oprave praveho blatniku, technicky v poradku.",
    photos: [stockPhotos[11], stockPhotos[6]],
    createdAt: "2026-04-24T17:55:00.000Z",
  },
  {
    id: "demo-12",
    brand: "Volvo",
    model: "XC60 B4 AWD Momentum",
    year: 2021,
    price: 869000,
    mileage: 77400,
    fuel: "Hybrid",
    transmission: "Automat",
    body: "SUV",
    region: "Kralovehradecky kraj",
    power: 145,
    color: "Tmave modra",
    inspection: "2027-02",
    vin: "YV1UZK5V2M1P8L3D7",
    owners: 1,
    vat: true,
    crashed: false,
    phone: "+420 777 284 631",
    email: "volvo@automarket.cz",
    description:
      "Bezpecnostni asistenti, AWD, kozeny interier, nezavisle topeni a servis Volvo.",
    photos: [stockPhotos[12], stockPhotos[8]],
    createdAt: "2026-04-23T10:05:00.000Z",
  },
  {
    id: "demo-13",
    brand: "Skoda",
    model: "Superb 2.0 TSI Laurin & Klement",
    year: 2020,
    price: 589000,
    mileage: 98000,
    fuel: "Benzin",
    transmission: "Automat",
    body: "Sedan",
    region: "Vysocina",
    power: 200,
    color: "Cerna",
    inspection: "2026-08",
    vin: "TMBJE9NP7L0R6V8H4",
    owners: 1,
    vat: true,
    crashed: false,
    phone: "+420 721 936 408",
    email: "superb@automarket.cz",
    description:
      "Top vybava L&K, DCC, Canton, ventilovana sedadla, nezavisle topeni a pekny lak.",
    photos: [stockPhotos[10], stockPhotos[0], stockPhotos[14]],
    createdAt: "2026-04-22T12:35:00.000Z",
  },
  {
    id: "demo-14",
    brand: "Volkswagen",
    model: "Transporter 2.0 TDI",
    year: 2019,
    price: 499000,
    mileage: 139000,
    fuel: "Nafta",
    transmission: "Manual",
    body: "Dodavka",
    region: "Karlovarsky kraj",
    power: 110,
    color: "Bila",
    inspection: "2026-06",
    vin: "WV1ZZZ7HZKH5C9M2P",
    owners: 2,
    vat: true,
    crashed: false,
    phone: "+420 604 358 719",
    email: "transporter@automarket.cz",
    description:
      "Dlouha verze, tazne zarizeni, servisni kniha, nove pneumatiky a pripraveno k praci.",
    photos: [stockPhotos[5], stockPhotos[9]],
    createdAt: "2026-04-21T15:50:00.000Z",
  },
  {
    id: "demo-15",
    brand: "BMW",
    model: "i3 120 Ah",
    year: 2019,
    price: 399000,
    mileage: 54000,
    fuel: "Elektro",
    transmission: "Automat",
    body: "Hatchback",
    region: "Praha",
    power: 125,
    color: "Bila / cerna",
    inspection: "2027-09",
    vin: "WBY8P210XK7E4T9N6",
    owners: 1,
    vat: false,
    crashed: false,
    phone: "+420 777 615 230",
    email: "bmwi3@automarket.cz",
    description:
      "Elektricke mestske auto, dobra kapacita baterie, rychlonabijeni, tepelne cerpadlo a servis BMW.",
    photos: [stockPhotos[14], stockPhotos[1]],
    createdAt: "2026-04-20T09:15:00.000Z",
  },
  {
    id: "demo-16",
    brand: "Audi",
    model: "Q7 50 TDI quattro",
    year: 2019,
    price: 999000,
    mileage: 121000,
    fuel: "Nafta",
    transmission: "Automat",
    body: "SUV",
    region: "Pardubicky kraj",
    power: 210,
    color: "Seda metaliza",
    inspection: "2026-11",
    vin: "WAUZZZ4M1KD8H6P3X",
    owners: 2,
    vat: true,
    crashed: false,
    phone: "+420 735 849 126",
    email: "q7@automarket.cz",
    description:
      "Sedmimistne SUV, vzduchovy podvozek, Matrix LED, tazne zarizeni a pravidelny servis.",
    photos: [stockPhotos[6], stockPhotos[10], stockPhotos[13]],
    createdAt: "2026-04-19T18:00:00.000Z",
  },
];

const state = {
  listings: mergeDemoListings(load("automarketListings", [])),
  saved: load("automarketSaved", []),
  compare: load("automarketCompare", []),
  history: load("automarketHistory", []),
  alerts: load("automarketAlerts", []),
  messages: load("automarketMessages", []),
  notes: load("automarketNotes", []),
  user: load("automarketUser", null),
  selectedPhotos: [],
  filters: {},
  activeTab: "saved",
};

function mergeDemoListings(storedListings) {
  const customListings = storedListings.filter((listing) => !String(listing.id).startsWith("demo-"));
  return [...demoListings, ...customListings].map(enrichListing);
}

function enrichListing(listing) {
  const seed = Math.abs(hashCode(listing.id));
  const pick = (values) => values[seed % values.length];
  const equipment = equipmentOptions.filter((_, index) => (seed + index) % 2 === 0).slice(0, 4);
  const verification = [
    listing.verifiedPhone !== false ? "Overeny telefon" : null,
    listing.verifiedEmail !== false ? "Overeny e-mail" : null,
    listing.vin ? "Kontrola VIN" : null,
    listing.sellerType === "Dealer" || listing.sellerType === "Autobazar" ? "Overeny prodejce" : null,
  ].filter(Boolean);
  const history = [
    listing.serviceBook ? "Servisni historie" : null,
    !listing.crashed ? "Nehavarovane" : null,
    listing.owners === 1 ? "Po prvnim majiteli" : null,
    listing.vin ? "Garance puvodu" : null,
  ].filter(Boolean);

  return {
    condition: listing.year >= 2023 ? "Predvadeci" : listing.year <= 1995 ? "Veteran" : "Ojete",
    tachometerState: listing.vin ? "Overeny" : "Neovereny",
    drivetrain: listing.model?.toLowerCase().includes("4x4") || listing.model?.toLowerCase().includes("quattro") || listing.model?.toLowerCase().includes("xdrive") ? "4x4" : pick(["Predni", "Zadni"]),
    engineVolume: listing.fuel === "Elektro" ? 0 : pick([999, 1498, 1598, 1968, 1998, 2993]),
    equipment,
    consumption: listing.fuel === "Elektro" ? 0 : pick([4.6, 5.1, 5.8, 6.4, 7.2, 8.1]),
    ac: pick(["Manualni", "Automaticka", "Dvouzónova"]),
    airbags: pick([4, 6, 7, 8, 10]),
    seats: listing.body === "Dodavka" ? 3 : listing.body === "SUV" && seed % 3 === 0 ? 7 : 5,
    doors: listing.body === "Coupe" ? 3 : listing.body === "Dodavka" ? 4 : 5,
    salePlace: listing.region === "Praha" ? "Praha" : pick(salePlaces.slice(1)),
    originCountry: pick(originCountries.slice(1)),
    sellerType: listing.sellerType || pick(["Soukromy prodejce", "Autobazar", "Dealer"]),
    verificationPrograms: verification,
    vehicleHistory: history,
    disabledAccess: listing.body === "MPV" || listing.body === "Dodavka",
    ...listing,
  };
}

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
  if (!select) return;
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
  fillSelect(byId("alertBrand"), brands, true);
  fillSelect(byId("brandInput"), brands.slice(1));
  fillSelect(byId("fuelFilter"), fuels, true);
  fillSelect(byId("fuelInput"), fuels.slice(1));
  fillSelect(byId("transmissionFilter"), transmissions, true);
  fillSelect(byId("transmissionInput"), transmissions.slice(1));
  fillSelect(byId("bodyInput"), bodies);
  fillSelect(byId("bodyFilter"), ["Vse", ...bodies], true);
  fillSelect(byId("regionFilter"), regions, true);
  fillSelect(byId("regionInput"), regions.slice(1));
  fillSelect(byId("conditionFilter"), conditions, true);
  fillSelect(byId("tachometerFilter"), tachometerStates, true);
  fillSelect(byId("drivetrainFilter"), drivetrains, true);
  fillSelect(byId("acFilter"), acOptions, true);
  fillSelect(byId("salePlaceFilter"), salePlaces, true);
  fillSelect(byId("originCountryFilter"), originCountries, true);
  fillSelect(byId("sellerTypeFilter"), sellerTypes, true);
  fillSelect(byId("listingAgeFilter"), listingAgeOptions, true);
  updateModelSuggestions("brandFilter", "modelSuggestions");
  updateModelSuggestions("brandInput", "sellerModelSuggestions");
}

function updateModelSuggestions(brandSelectId, datalistId) {
  const brandSelect = byId(brandSelectId);
  const datalist = byId(datalistId);
  if (!brandSelect || !datalist) return;
  const brand = brandSelect.value;
  const models = brandModels[brand] || Object.values(brandModels).flat();
  datalist.innerHTML = models.map((model) => `<option value="${model}"></option>`).join("");
}

function getFilteredListings() {
  const f = state.filters;
  let listings = [...state.listings].filter((car) => {
    const searchable = `${car.brand} ${car.model} ${car.description} ${car.color} ${listingCode(car)}`.toLowerCase();
    const matchesBrand = !f.brand || car.brand === f.brand;
    const matchesModel = !f.model || car.model.toLowerCase().includes(f.model.toLowerCase());
    const matchesSearch = !f.search || searchable.includes(f.search.toLowerCase());
    const matchesPriceMin = !f.priceMin || car.price >= f.priceMin;
    const matchesPriceMax = !f.priceMax || car.price <= f.priceMax;
    const matchesYearMin = !f.yearMin || car.year >= f.yearMin;
    const matchesYearMax = !f.yearMax || car.year <= f.yearMax;
    const matchesMileage = !f.mileageMax || car.mileage <= f.mileageMax;
    const matchesFuel = !f.fuel || car.fuel === f.fuel;
    const matchesBody = !f.body || car.body === f.body;
    const matchesTransmission = !f.transmission || car.transmission === f.transmission;
    const matchesRegion = !f.region || car.region === f.region;
    const matchesCrash = !f.noCrash || !car.crashed;
    const matchesCondition = !f.condition || car.condition === f.condition;
    const matchesTachometer = !f.tachometer || car.tachometerState === f.tachometer;
    const matchesDrivetrain = !f.drivetrain || car.drivetrain === f.drivetrain;
    const matchesPowerMin = !f.powerMin || car.power >= f.powerMin;
    const matchesPowerMax = !f.powerMax || car.power <= f.powerMax;
    const matchesEngineMin = !f.engineMin || car.engineVolume >= f.engineMin;
    const matchesEngineMax = !f.engineMax || car.engineVolume <= f.engineMax;
    const matchesEquipment = !f.equipment.length || f.equipment.every((item) => car.equipment.includes(item));
    const matchesConsumption = !f.consumptionMax || car.consumption <= f.consumptionMax;
    const matchesAc = !f.ac || car.ac === f.ac;
    const matchesAirbags = !f.airbagsMin || car.airbags >= f.airbagsMin;
    const matchesSeats = !f.seatsMin || car.seats >= f.seatsMin;
    const matchesDoors = !f.doorsMin || car.doors >= f.doorsMin;
    const matchesColor = !f.color || car.color.toLowerCase().includes(f.color.toLowerCase());
    const matchesSalePlace = !f.salePlace || car.salePlace === f.salePlace;
    const matchesOrigin = !f.originCountry || car.originCountry === f.originCountry;
    const matchesSellerType = !f.sellerType || car.sellerType === f.sellerType;
    const matchesVerification = !f.verification.length || f.verification.every((item) => car.verificationPrograms.includes(item));
    const matchesHistory = !f.history.length || f.history.every((item) => car.vehicleHistory.includes(item));
    const matchesAge = matchesListingAge(car, f.listingAge);
    const matchesDisabled = !f.disabledAccess || car.disabledAccess;
    return (
      matchesBrand &&
      matchesModel &&
      matchesSearch &&
      matchesPriceMin &&
      matchesPriceMax &&
      matchesYearMin &&
      matchesYearMax &&
      matchesMileage &&
      matchesFuel &&
      matchesBody &&
      matchesTransmission &&
      matchesRegion &&
      matchesCrash &&
      matchesCondition &&
      matchesTachometer &&
      matchesDrivetrain &&
      matchesPowerMin &&
      matchesPowerMax &&
      matchesEngineMin &&
      matchesEngineMax &&
      matchesEquipment &&
      matchesConsumption &&
      matchesAc &&
      matchesAirbags &&
      matchesSeats &&
      matchesDoors &&
      matchesColor &&
      matchesSalePlace &&
      matchesOrigin &&
      matchesSellerType &&
      matchesVerification &&
      matchesHistory &&
      matchesAge &&
      matchesDisabled
    );
  });

  const sort = byId("sortSelect")?.value || "newest";
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
  if (!byId("listingGrid")) return;
  applyUrlFilters();
  const listings = getFilteredListings();
  const grid = byId("listingGrid");
  grid.innerHTML = listings.map(renderCard).join("");
  byId("emptyState").hidden = listings.length > 0;
  byId("resultCount").textContent = `${listings.length} aut v nabidce`;
  if (byId("totalListings")) byId("totalListings").textContent = state.listings.length;
}

function applyUrlFilters() {
  const params = new URLSearchParams(window.location.search);
  if (!params.size || state.urlFiltersApplied) return;
  state.urlFiltersApplied = true;
  if (params.get("brand") && byId("brandFilter")) byId("brandFilter").value = params.get("brand");
  if (params.get("priceMax") && byId("priceMaxFilter")) byId("priceMaxFilter").value = params.get("priceMax");
  updateModelSuggestions("brandFilter", "modelSuggestions");
  collectFilters();
}

function renderSaved() {
  if (!byId("savedGrid")) return;
  const savedListings = state.listings.filter((listing) => state.saved.includes(listing.id));
  const grid = byId("savedGrid");
  grid.innerHTML = savedListings.map(renderCard).join("");
  byId("savedEmpty").hidden = savedListings.length > 0;
}

function renderAccount() {
  if (!byId("accountSummary")) return;
  renderAccountSummary();
  renderSaved();
  renderCompare();
  renderAlerts();
  renderMessages();
  renderNotes();
  renderHistory();
  renderSellerListings();
}

function renderAccountSummary() {
  if (!byId("accountSummary")) return;
  const mine = getMyListings();
  const views = mine.reduce((sum, car) => sum + listingStats(car).views, 0);
  byId("accountSummary").innerHTML = `
    <article>
      <span>Profil</span>
      <strong>${state.user ? state.user.email : "Neprihlasen"}</strong>
    </article>
    <article>
      <span>Ulozene</span>
      <strong>${state.saved.length}</strong>
    </article>
    <article>
      <span>Porovnani</span>
      <strong>${state.compare.length}</strong>
    </article>
    <article>
      <span>Hlidani</span>
      <strong>${state.alerts.length}</strong>
    </article>
    <article>
      <span>Moje inzeraty</span>
      <strong>${mine.length}</strong>
    </article>
    <article>
      <span>Zobrazeni</span>
      <strong>${number.format(views)}</strong>
    </article>
  `;
}

function renderCompare() {
  if (!byId("compareGrid")) return;
  const cars = state.compare.map(findListing).filter(Boolean);
  const grid = byId("compareGrid");
  grid.innerHTML = cars
    .map(
      (car) => `
        <article class="compare-card">
          <button class="text-button mini-action" data-compare-remove="${car.id}" type="button">Odebrat</button>
          <h3>${car.brand} ${car.model}</h3>
          <strong class="price">${currency.format(car.price)}</strong>
          <div class="spec-grid compact">
            ${spec("Rok", car.year)}
            ${spec("Najeto", `${number.format(car.mileage)} km`)}
            ${spec("Palivo", car.fuel)}
            ${spec("Vykon", car.power ? `${car.power} kW` : "Neuvedeno")}
            ${spec("Kraj", car.region)}
            ${spec("STK", car.inspection || "Neuvedeno")}
          </div>
        </article>
      `,
    )
    .join("");
  byId("compareEmpty").hidden = cars.length > 0;
}

function renderAlerts() {
  if (!byId("alertsList")) return;
  byId("alertsList").innerHTML =
    state.alerts
      .map((alert) => {
        const count = state.listings.filter((car) => {
          const brand = !alert.brand || car.brand === alert.brand;
          const price = !alert.priceMax || car.price <= alert.priceMax;
          const mileage = !alert.mileageMax || car.mileage <= alert.mileageMax;
          return brand && price && mileage;
        }).length;
        return `
          <article class="list-item">
            <div>
              <h3>${alert.name}</h3>
              <p>${alert.brand || "Vsechny znacky"} · do ${alert.priceMax ? currency.format(alert.priceMax) : "libovolne ceny"} · ${count} shod</p>
            </div>
            <button class="text-button" data-alert-delete="${alert.id}" type="button">Smazat</button>
          </article>
        `;
      })
      .join("") || `<div class="empty-state"><h3>Zatim zadne hlidani</h3><p>Vytvorte si filtr a AutoMarket vam v realne verzi posle upozorneni.</p></div>`;
}

function renderMessages() {
  if (!byId("messagesList")) return;
  byId("messagesList").innerHTML = state.messages
    .map((message) => {
      const car = findListing(message.listingId);
      return `
        <article class="list-item">
          <div>
            <h3>${car ? `${car.brand} ${car.model}` : "Inzerat"}</h3>
            <p>${message.text}</p>
            <small>${message.createdAt}</small>
          </div>
          <button class="text-button" data-message-delete="${message.id}" type="button">Smazat</button>
        </article>
      `;
    })
    .join("");
  byId("messagesEmpty").hidden = state.messages.length > 0;
}

function renderNotes() {
  if (!byId("notesList")) return;
  byId("notesList").innerHTML = state.notes
    .map((note) => {
      const car = findListing(note.listingId);
      return `
        <article class="list-item">
          <div>
            <h3>${car ? `${car.brand} ${car.model}` : "Inzerat"}</h3>
            <p>${note.text}</p>
            <small>${note.createdAt}</small>
          </div>
          <button class="text-button" data-note-delete="${note.id}" type="button">Smazat</button>
        </article>
      `;
    })
    .join("");
  byId("notesEmpty").hidden = state.notes.length > 0;
}

function renderHistory() {
  if (!byId("historyGrid")) return;
  const cars = state.history.map(findListing).filter(Boolean);
  byId("historyGrid").innerHTML = cars.map(renderCard).join("");
  byId("historyEmpty").hidden = cars.length > 0;
}

function renderSellerListings() {
  if (!byId("sellerListings")) return;
  const mine = getMyListings();
  byId("sellerListings").innerHTML = mine
    .map((car) => {
      const stats = listingStats(car);
      return `
        <article class="seller-item">
          <img src="${car.photos[0] || stockPhotos[0]}" alt="${car.brand} ${car.model}" />
          <div>
            <div class="seller-item-head">
              <h3>${car.brand} ${car.model}</h3>
              <span class="tag">${car.status === "sold" ? "Prodano" : car.promoted ? "TOP" : "Aktivni"}</span>
            </div>
            <p>${listingCode(car)} · ${currency.format(car.price)} · ${car.region}</p>
            <div class="metric-row">
              <span>${number.format(stats.views)} zobrazeni</span>
              <span>${number.format(stats.saves)} ulozeni</span>
              <span>${number.format(stats.calls)} kliknuti na telefon</span>
            </div>
            <div class="seller-actions">
              <button class="ghost-button" data-detail="${car.id}" type="button">Detail</button>
              <button class="ghost-button" data-discount="${car.id}" type="button">Zlevnit</button>
              <button class="ghost-button" data-photo-manage="${car.id}" type="button">Fotky</button>
              <button class="ghost-button" data-promote="${car.id}" type="button">Topovat</button>
              <button class="ghost-button" data-sold="${car.id}" type="button">${car.status === "sold" ? "Znovu aktivovat" : "Prodano"}</button>
              <button class="text-button" data-delete-listing="${car.id}" type="button">Smazat</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
  byId("sellerEmpty").hidden = mine.length > 0;
}

function renderCard(car) {
  const isSaved = state.saved.includes(car.id);
  const isCompared = state.compare.includes(car.id);
  const image = car.photos[0] || stockPhotos[0];
  const trust = trustLevel(car);
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
          <span>${car.drivetrain}</span>
          <span>${car.power} kW</span>
        </div>
        <div class="tag-row">
          <span class="tag">${listingCode(car)}</span>
          ${car.status === "sold" ? '<span class="tag sold">Prodano</span>' : ""}
          ${car.promoted ? '<span class="tag top">TOP</span>' : ""}
          <span class="tag trust">${trust}</span>
          <span class="tag">${car.body}</span>
          <span class="tag">${car.region}</span>
          <span class="tag">${car.sellerType}</span>
          ${car.vat ? '<span class="tag">Odpocet DPH</span>' : ""}
          ${!car.crashed ? '<span class="tag">Nebourane</span>' : ""}
        </div>
        <div class="card-actions">
          <button class="ghost-button" data-detail="${car.id}" type="button">Detail</button>
          <button class="ghost-button ${isCompared ? "active-outline" : ""}" data-compare="${car.id}" type="button">
            ${isCompared ? "V porovnani" : "Porovnat"}
          </button>
          <a class="primary-button" href="tel:${phoneHref(car.phone)}">Volat</a>
        </div>
      </div>
    </article>
  `;
}

function collectFilters() {
  state.filters = {
    search: byId("listingSearchFilter")?.value.trim() || "",
    brand: byId("brandFilter")?.value || "",
    model: byId("modelFilter")?.value.trim() || "",
    priceMin: readNumber("priceMinFilter"),
    priceMax: readNumber("priceMaxFilter"),
    yearMin: readNumber("yearMinFilter"),
    yearMax: readNumber("yearMaxFilter"),
    mileageMax: readNumber("mileageMaxFilter"),
    fuel: byId("fuelFilter")?.value || "",
    body: byId("bodyFilter")?.value || "",
    transmission: byId("transmissionFilter")?.value || "",
    region: byId("regionFilter")?.value || "",
    condition: byId("conditionFilter")?.value || "",
    tachometer: byId("tachometerFilter")?.value || "",
    drivetrain: byId("drivetrainFilter")?.value || "",
    powerMin: readNumber("powerMinFilter"),
    powerMax: readNumber("powerMaxFilter"),
    engineMin: readNumber("engineMinFilter"),
    engineMax: readNumber("engineMaxFilter"),
    equipment: checkedValues("equipmentFilter"),
    consumptionMax: readNumber("consumptionMaxFilter"),
    ac: byId("acFilter")?.value || "",
    airbagsMin: readNumber("airbagsMinFilter"),
    seatsMin: readNumber("seatsMinFilter"),
    doorsMin: readNumber("doorsMinFilter"),
    color: byId("colorFilter")?.value.trim() || "",
    salePlace: byId("salePlaceFilter")?.value || "",
    originCountry: byId("originCountryFilter")?.value || "",
    sellerType: byId("sellerTypeFilter")?.value || "",
    verification: checkedValues("verificationFilter"),
    history: checkedValues("historyFilter"),
    listingAge: byId("listingAgeFilter")?.value || "",
    disabledAccess: byId("disabledAccessFilter")?.checked || false,
    noCrash: byId("noCrashFilter")?.checked || false,
  };
}

function checkedValues(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)].map((input) => input.value);
}

function matchesListingAge(car, value) {
  if (!value) return true;
  const ageDays = (Date.now() - new Date(car.createdAt).getTime()) / 86400000;
  if (value === "Dnes") return ageDays <= 1;
  if (value === "Do 3 dnu") return ageDays <= 3;
  if (value === "Do 7 dnu") return ageDays <= 7;
  if (value === "Do 30 dnu") return ageDays <= 30;
  return true;
}

function readNumber(id) {
  const value = Number(byId(id).value);
  return Number.isFinite(value) && value > 0 ? value : null;
}

function resetFilters() {
  byId("filtersForm")?.reset();
  state.filters = {};
  renderListings();
}

function findListing(id) {
  return state.listings.find((listing) => listing.id === id);
}

function getMyListings() {
  if (!state.user) return [];
  return state.listings.filter((listing) => listing.ownerEmail === state.user.email);
}

function listingStats(car) {
  const seed = Math.abs(hashCode(car.id));
  return {
    views: car.views ?? 80 + (seed % 940),
    saves: state.saved.includes(car.id) ? 1 + (seed % 18) : seed % 18,
    calls: 2 + (seed % 36),
  };
}

function trustLevel(car) {
  let score = 0;
  if (car.verifiedPhone !== false) score += 1;
  if (car.verifiedEmail !== false) score += 1;
  if (car.vin) score += 1;
  if (car.inspection) score += 1;
  if (car.serviceBook) score += 1;
  if (!car.crashed) score += 1;
  if (score >= 5) return "Vysoka duvera";
  if (score >= 3) return "Overovano";
  return "Zakladni kontrola";
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
  renderAccount();
}

function toggleCompare(id) {
  if (!state.user) {
    openAccount();
    toast("Nejdrive se prihlaste demo uctem.");
    return;
  }
  if (state.compare.includes(id)) {
    state.compare = state.compare.filter((compareId) => compareId !== id);
  } else {
    if (state.compare.length >= 4) state.compare.shift();
    state.compare = [...state.compare, id];
  }
  save("automarketCompare", state.compare);
  renderListings();
  renderAccount();
}

function showDetail(id) {
  const car = state.listings.find((listing) => listing.id === id);
  if (!car) return;
  addToHistory(id);

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
          ${spec("Cislo inzeratu", listingCode(car))}
          ${spec("Rok", car.year)}
          ${spec("Najeto", `${number.format(car.mileage)} km`)}
          ${spec("Palivo", car.fuel)}
          ${spec("Prevodovka", car.transmission)}
          ${spec("Karoserie", car.body)}
          ${spec("Pohon", car.drivetrain)}
          ${spec("Vykon", car.power ? `${car.power} kW` : "Neuvedeno")}
          ${spec("Objem", car.engineVolume ? `${number.format(car.engineVolume)} ccm` : "Elektro")}
          ${spec("Spotreba", car.consumption ? `${car.consumption} l/100 km` : "0")}
          ${spec("Klimatizace", car.ac)}
          ${spec("Airbagy", car.airbags)}
          ${spec("Mista / dvere", `${car.seats} / ${car.doors}`)}
          ${spec("Barva", car.color || "Neuvedeno")}
          ${spec("Zeme puvodu", car.originCountry)}
          ${spec("Typ prodejce", car.sellerType)}
          ${spec("STK", car.inspection || "Neuvedeno")}
          ${spec("Majitele", car.owners || "Neuvedeno")}
          ${spec("VIN", car.vin || "Neuvedeno")}
        </div>
        <p>${car.description}</p>
        <div class="tag-row">
          <span class="tag trust">${trustLevel(car)}</span>
          ${car.verifiedPhone !== false ? '<span class="tag">Overeny telefon</span>' : ""}
          ${car.verifiedEmail !== false ? '<span class="tag">Overeny e-mail</span>' : ""}
          ${car.serviceBook ? '<span class="tag">Servisni historie</span>' : ""}
          ${car.vat ? '<span class="tag">Mozny odpocet DPH</span>' : ""}
          ${car.crashed ? '<span class="tag">Bourane / opravovane</span>' : '<span class="tag">Nebourane</span>'}
        </div>
        <button class="text-button report-button" data-report="${car.id}" type="button">Nahlasit podezrely inzerat</button>
        <a class="primary-button" href="tel:${phoneHref(car.phone)}">Volat ${car.phone}</a>
        <a class="ghost-button" href="mailto:${car.email}">${car.email}</a>
        <div class="detail-actions">
          <button class="ghost-button" data-compare="${car.id}" type="button">Porovnat</button>
          <button class="ghost-button" data-message="${car.id}" type="button">Poslat demo zpravu</button>
        </div>
        <form class="note-form" data-note-form="${car.id}">
          <label>
            Poznamka k autu
            <textarea rows="3" name="note" required placeholder="Volat v patek, proverit STK..."></textarea>
          </label>
          <button class="primary-button" type="submit">Ulozit poznamku</button>
        </form>
      </div>
    </div>
  `;
  byId("detailModal").showModal();
}

function addToHistory(id) {
  state.history = [id, ...state.history.filter((historyId) => historyId !== id)].slice(0, 12);
  save("automarketHistory", state.history);
  renderHistory();
  renderAccountSummary();
}

function spec(label, value) {
  return `<div><span>${label}</span><strong>${value}</strong></div>`;
}

function listingCode(car) {
  const demoNumber = String(car.id).match(/^demo-(\d+)$/)?.[1];
  if (demoNumber) return `AM-${String(4200 + Number(demoNumber)).padStart(5, "0")}`;
  return `AM-${String(Math.abs(hashCode(car.id))).slice(0, 5).padStart(5, "0")}`;
}

function hashCode(value) {
  return String(value)
    .split("")
    .reduce((hash, char) => (hash << 5) - hash + char.charCodeAt(0), 0);
}

function phoneHref(phone) {
  return phone.replace(/\s/g, "");
}

function makeId() {
  return crypto.randomUUID?.() || `listing-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function openAccount() {
  byId("accountModal")?.showModal();
}

function updateAccountButton() {
  const button = byId("accountButton");
  if (!button) return;
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
  renderAccount();
  byId("accountModal")?.close();
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
  if (!byId("photoPreview")) return;
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
    sellerName: byId("sellerNameInput").value.trim(),
    sellerType: byId("sellerTypeInput").value,
    description: byId("descriptionInput").value.trim(),
    photos: state.selectedPhotos.length ? state.selectedPhotos : [stockPhotos[5]],
    ownerEmail: state.user.email,
    ownerPhone: state.user.phone,
    verifiedPhone: byId("verifiedPhoneInput").checked,
    verifiedEmail: byId("verifiedEmailInput").checked,
    serviceBook: byId("serviceBookInput").checked,
    status: "active",
    promoted: false,
    views: 0,
    createdAt: new Date().toISOString(),
  };

  state.listings = [listing, ...state.listings];
  saveCustomListings();
  event.target.reset();
  state.selectedPhotos = [];
  renderPhotoPreview();
  resetFilters();
  renderAccount();
  toast("Inzerat byl zverejneny v demo nabidce.");
  window.location.href = "nabidka.html";
}

function saveCustomListings() {
  save(
    "automarketListings",
    state.listings.filter((listing) => !String(listing.id).startsWith("demo-")),
  );
}

function handleAlertSubmit(event) {
  event.preventDefault();
  if (!state.user) {
    openAccount();
    toast("Nejdrive se prihlaste demo uctem.");
    return;
  }
  state.alerts = [
    {
      id: makeId(),
      name: byId("alertName").value.trim(),
      brand: byId("alertBrand").value,
      priceMax: readNumber("alertPrice"),
      mileageMax: readNumber("alertMileage"),
      createdAt: new Date().toLocaleString("cs-CZ"),
    },
    ...state.alerts,
  ];
  save("automarketAlerts", state.alerts);
  event.target.reset();
  renderAccount();
  toast("Hlidani bylo vytvoreno.");
}

function sendDemoMessage(id) {
  if (!state.user) {
    openAccount();
    toast("Nejdrive se prihlaste demo uctem.");
    return;
  }
  const car = findListing(id);
  state.messages = [
    {
      id: makeId(),
      listingId: id,
      text: `Dobry den, mam zajem o ${car ? `${car.brand} ${car.model}` : "vas inzerat"}. Je auto jeste k dispozici?`,
      createdAt: new Date().toLocaleString("cs-CZ"),
    },
    ...state.messages,
  ];
  save("automarketMessages", state.messages);
  renderAccount();
  toast("Demo zprava je ulozena v uctu.");
}

function addNote(id, text) {
  if (!state.user) {
    openAccount();
    toast("Nejdrive se prihlaste demo uctem.");
    return;
  }
  state.notes = [
    { id: makeId(), listingId: id, text, createdAt: new Date().toLocaleString("cs-CZ") },
    ...state.notes,
  ];
  save("automarketNotes", state.notes);
  renderAccount();
  toast("Poznamka ulozena.");
}

function deleteById(collection, id, storageKey) {
  state[collection] = state[collection].filter((item) => item.id !== id);
  save(storageKey, state[collection]);
  renderAccount();
}

function toggleSold(id) {
  const car = findListing(id);
  if (!car) return;
  car.status = car.status === "sold" ? "active" : "sold";
  saveCustomListings();
  renderListings();
  renderAccount();
}

function promoteListing(id) {
  const car = findListing(id);
  if (!car) return;
  car.promoted = true;
  saveCustomListings();
  renderListings();
  renderAccount();
  toast("Inzerat je v demo rezimu oznaceny jako TOP.");
}

function discountListing(id) {
  const car = findListing(id);
  if (!car) return;
  car.price = Math.max(0, car.price - 10000);
  saveCustomListings();
  renderListings();
  renderAccount();
  toast("Cena inzeratu byla v demo rezimu snizena o 10 000 Kc.");
}

function deleteListing(id) {
  state.listings = state.listings.filter((listing) => listing.id !== id);
  state.saved = state.saved.filter((savedId) => savedId !== id);
  state.compare = state.compare.filter((compareId) => compareId !== id);
  state.history = state.history.filter((historyId) => historyId !== id);
  saveCustomListings();
  save("automarketSaved", state.saved);
  save("automarketCompare", state.compare);
  save("automarketHistory", state.history);
  renderListings();
  renderAccount();
}

function createDemoMine() {
  if (!state.user) {
    openAccount();
    toast("Nejdrive se prihlaste demo uctem.");
    return;
  }
  const demoMine = {
    ...demoListings[0],
    id: makeId(),
    model: "Octavia Combi 2.0 TDI Style",
    price: 449000,
    ownerEmail: state.user.email,
    ownerPhone: state.user.phone,
    status: "active",
    promoted: false,
    views: 126,
    createdAt: new Date().toISOString(),
  };
  state.listings = [demoMine, ...state.listings];
  saveCustomListings();
  renderListings();
  renderAccount();
  toast("Demo inzerat byl pridan do sekce Moje inzeraty.");
}

function toast(message) {
  const element = byId("toast");
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => element.classList.remove("show"), 2600);
}

function switchTab(tab) {
  state.activeTab = tab;
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tab);
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === tab);
  });
}

function on(id, eventName, handler) {
  byId(id)?.addEventListener(eventName, handler);
}

function bindEvents() {
  on("filtersForm", "submit", (event) => {
    event.preventDefault();
    collectFilters();
    renderListings();
    document.body.classList.remove("filters-open");
  });
  on("resetFilters", "click", () => {
    resetFilters();
    document.body.classList.remove("filters-open");
  });
  on("sortSelect", "change", renderListings);
  on("brandFilter", "change", () => updateModelSuggestions("brandFilter", "modelSuggestions"));
  on("brandInput", "change", () => updateModelSuggestions("brandInput", "sellerModelSuggestions"));
  on("mobileFilterButton", "click", () => {
    document.body.classList.toggle("filters-open");
  });
  on("quickSearchForm", "submit", (event) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (byId("quickBrand")?.value) params.set("brand", byId("quickBrand").value);
    if (byId("quickPrice")?.value) params.set("priceMax", byId("quickPrice").value);
    window.location.href = `nabidka.html${params.toString() ? `?${params}` : ""}`;
  });
  on("accountButton", "click", openAccount);
  on("accountPanelButton", "click", openAccount);
  on("accountForm", "submit", handleAccountSubmit);
  on("closeAccount", "click", () => byId("accountModal")?.close());
  on("photosInput", "change", handlePhotos);
  on("listingForm", "submit", handleListingSubmit);
  on("alertForm", "submit", handleAlertSubmit);
  on("createDemoMine", "click", createDemoMine);
  on("fakeInvoice", "click", () => toast("Demo faktura AM-2026-001 je pripravena."));
  on("closeDetail", "click", () => byId("detailModal")?.close());

  document.addEventListener("click", (event) => {
    const saveButton = event.target.closest("[data-save]");
    const detailButton = event.target.closest("[data-detail]");
    const compareButton = event.target.closest("[data-compare]");
    const compareRemove = event.target.closest("[data-compare-remove]");
    const messageButton = event.target.closest("[data-message]");
    const tabButton = event.target.closest("[data-tab]");
    const alertDelete = event.target.closest("[data-alert-delete]");
    const messageDelete = event.target.closest("[data-message-delete]");
    const noteDelete = event.target.closest("[data-note-delete]");
    const soldButton = event.target.closest("[data-sold]");
    const promoteButton = event.target.closest("[data-promote]");
    const discountButton = event.target.closest("[data-discount]");
    const photoManageButton = event.target.closest("[data-photo-manage]");
    const deleteButton = event.target.closest("[data-delete-listing]");
    const reportButton = event.target.closest("[data-report]");
    if (saveButton) toggleSave(saveButton.dataset.save);
    if (detailButton) showDetail(detailButton.dataset.detail);
    if (compareButton) toggleCompare(compareButton.dataset.compare);
    if (compareRemove) toggleCompare(compareRemove.dataset.compareRemove);
    if (messageButton) sendDemoMessage(messageButton.dataset.message);
    if (tabButton) switchTab(tabButton.dataset.tab);
    if (alertDelete) deleteById("alerts", alertDelete.dataset.alertDelete, "automarketAlerts");
    if (messageDelete) deleteById("messages", messageDelete.dataset.messageDelete, "automarketMessages");
    if (noteDelete) deleteById("notes", noteDelete.dataset.noteDelete, "automarketNotes");
    if (soldButton) toggleSold(soldButton.dataset.sold);
    if (promoteButton) promoteListing(promoteButton.dataset.promote);
    if (discountButton) discountListing(discountButton.dataset.discount);
    if (photoManageButton) toast("Sprava fotek bude v realne verzi menit poradi a mazat snimky.");
    if (deleteButton) deleteListing(deleteButton.dataset.deleteListing);
    if (reportButton) toast("Dekuji, v realne verzi pujde inzerat ke kontrole podpory.");
  });

  document.addEventListener("submit", (event) => {
    const noteForm = event.target.closest("[data-note-form]");
    if (!noteForm) return;
    event.preventDefault();
    addNote(noteForm.dataset.noteForm, new FormData(noteForm).get("note").trim());
    noteForm.reset();
  });
}

function boot() {
  initSelects();
  bindEvents();
  updateAccountButton();
  if (byId("totalListings")) byId("totalListings").textContent = state.listings.length;
  renderListings();
  renderAccount();
  switchTab(state.activeTab);
}

boot();
