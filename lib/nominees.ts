/**
 * AFIA 2026 nominees.
 * Source: "AFIA 2026 Nominees: Final List", sent by Joy Gabriel (Jury Secretary) on 16 November 2026.
 * Announced publicly on 12 November 2026.
 *
 * Names and countries are reproduced exactly as the approved list spells them.
 * Contact details, social handles and research sources are deliberately NOT carried over
 * (Kevin, 18 November 2026). `photo` stays undefined until real portraits arrive; the UI
 * then shows a marked placeholder rather than a stock face.
 */
export type Nominee2026 = {
  name: string;
  /** Shown as the tag at the end of the row. */
  country: string;
  /** One or two plain sentences. Fact only, no adjectives we cannot stand behind. */
  bio: string;
  /** A brand or an organisation rather than a person: changes the placeholder shape. */
  brand?: boolean;
  /** File in /public/img/nominees. Undefined means "placeholder, awaiting photograph". */
  photo?: string;
};

export type Category2026 = {
  n: number;
  name: string;
  track: "culinary" | "media" | "brands" | "legacy";
  /** The line AFN publishes for this award. */
  line: string;
  nominees: Nominee2026[];
};

export const CATEGORIES_2026: Category2026[] = [
  {
    n: 1, name: "Chef of the Year", track: "culinary",
    line: "For the chef whose cooking moved African food forward this year.",
    nominees: [
      { name: "Anto Cocagne", country: "Gabon", bio: "Known as Chef Anto, she was named FERRANDI Paris's ambassador in Africa in October 2026, with a first mission training young people in Gabon. She presents on Canal+ Afrique and co-founded the We Eat Africa festival." },
      { name: "Tólùlọ́pé Eros", country: "Nigeria", bio: "Chef Eros judged the first season of MasterChef Nigeria, which ran on Africa Magic through 2026. He founded Ìlè Eros in Lekki, Lagos, and is known for reimagining traditional Nigerian dishes through contemporary presentation." },
      { name: "Najat Kaanache", country: "Morocco", bio: "Chef-owner of Nur in the medina of Fez. In February 2026 Fagor Professional named her a brand ambassador, describing her as the leading ambassador of Moroccan cuisine worldwide." },
      { name: "Vusi Ndlovu", country: "South Africa", bio: "His roaming restaurant EDGE ran a Cape Town residency through April 2025, followed by a pan-African heritage residency at Carousel in London in June 2026." },
    ],
  },
  {
    n: 2, name: "Restaurant of the Year", track: "culinary",
    line: "For the restaurant that set the standard for African dining.",
    nominees: [
      { name: "Bintü Atelier", country: "Senegal", brand: true, bio: "A Charleston restaurant whose chef-owner Bintou N'Daw was a 2026 James Beard Award semifinalist for Best Chef: Southeast." },
      { name: "Shwen Shwen by Maria Bradford", country: "Sierra Leone", brand: true, bio: "In February 2026 it won a Michelin Bib Gourmand and the Michelin Guide Great Britain and Ireland Opening of the Year award." },
      { name: "Akoko", country: "Nigeria", brand: true, bio: "The Fitzrovia, London restaurant kept its Michelin star in the 2026 Michelin Guide Great Britain and Ireland, its third consecutive starred year." },
      { name: "La Grande Table Marocaine", country: "Morocco", brand: true, bio: "The Royal Mansour restaurant ranked 19th on MENA's 50 Best Restaurants 2026 and won the Art of Hospitality Award." },
      { name: "Khufu's", country: "Egypt", brand: true, bio: "La Liste named it the best restaurant in Africa in September 2025. In February 2026 it became the first Egyptian restaurant to rank first on MENA's 50 Best Restaurants." },
      { name: "Zooba, Zamalek", country: "Egypt", brand: true, bio: "The Zamalek branch ranked 32nd on MENA's 50 Best Restaurants 2026, holding its place on the list for another year." },
    ],
  },
  {
    n: 3, name: "Street Food Champion", track: "culinary",
    line: "For the street food that feeds a city and keeps a tradition alive.",
    nominees: [
      { name: "The Rolex Guy", country: "Uganda", brand: true, bio: "Founded by Emmanuel Jonathan Okello around Uganda's rolex, the egg and chapati roll, with branches in Kampala and Entebbe. CNN featured it in May 2026." },
      { name: "Gatundu Street Food", country: "Kenya", brand: true, bio: "Kenyan street food including kachumbari chips, githeri, sukuma wiki and pili pili fried chicken, served from an outlet in Leicester holding a top food hygiene rating." },
      { name: "Saffa Soul", country: "South Africa", brand: true, bio: "Overall Champion at the British Street Food Awards 2025 final. The Manchester trader fed Marathon finishers free of charge in April 2026." },
      { name: "Aunties Street Food", country: "Ghana", brand: true, bio: "West African and Ghanaian street food for UK diners, including boxed rice and stew, a vegan rainbow box and a small chops platter of bofrot, smoked lamb and plantain." },
    ],
  },
  {
    n: 4, name: "Food Influencer of the Year", track: "media",
    line: "For the influencer who got the most people cooking and talking about African food.",
    nominees: [
      { name: "Abena Amoakoa Sintim-Aboagye", country: "Ghana", bio: "Chef Abbys was named on TIME's 2025 list of the 100 most influential creators and recognised at the TikTok Awards Sub-Saharan Africa in December 2025." },
      { name: "Obakeng Mahlangu", country: "South Africa", bio: "Malum Foodie won Food Creator of the Year at the TikTok Awards Sub-Saharan Africa in December 2025, for comic videos built on township dishes." },
      { name: "Raja'atu Muhammed Ibrahim", country: "Nigeria", bio: "Diary of a Northern Cook won overall Creator of the Year at the TikTok Awards Sub-Saharan Africa in December 2025, the night's top title. She brings Northern Nigerian food to a wide audience." },
      { name: "George Tumaini", country: "Tanzania", bio: "George's Kitchen was nominated for Food Creator of the Year at the TikTok Awards Sub-Saharan Africa 2025, for cooking videos that carry Swahili culture." },
    ],
  },
  {
    n: 5, name: "Plant-Based Influencer of the Year", track: "media",
    line: "For the influencer showing how much of African food was plant-based all along.",
    nominees: [
      { name: "Ngwafu Tansie", country: "Cameroon", bio: "Gwafuvegan ran a Cameroonian plant-based supper club at Bridge 5 Mill, Manchester, in July 2026. Her business cooks West African plant-based food for events of up to 200 people." },
      { name: "Jane Nshuti", country: "Rwanda", bio: "Her debut cookbook, Tamu: A Journey Through Africa's Plant-Based Cuisine, was published by Prestel in March 2026 with more than seventy recipes arranged by African region." },
      { name: "Afia Amoako", country: "Ghana", bio: "Eat with Afia, her cookbook of plant-based Ghanaian food, was published by Avery in 2026. She is the largest African plant-based food voice on the list." },
      { name: "Tomi Makanjuola", country: "Nigeria", bio: "The Vegan Nigerian has run since 2013, and her cookbook Vegan Nigerian Kitchen carries more than a hundred recipes. She has posted plant-based Nigerian food steadily through 2025 and 2026." },
    ],
  },
  {
    n: 6, name: "Culinary Storyteller Award", track: "media",
    line: "For the writer, journalist or filmmaker telling African food's story best.",
    nominees: [
      { name: "Omer Al Tijani", country: "Sudan", bio: "The Sudanese Kitchen won Gourmand Best First Cookbook in the World 2025 and the Fortnum and Mason Debut Cookery Book award 2026. It preserves a food culture at risk during Sudan's war." },
      { name: "Hawa Hassan", country: "Somalia", bio: "Setting a Place for Us, published in 2025, gathers recipes and stories from countries hit by war. Her first book, In Bibi's Kitchen, won a James Beard award in 2022." },
      { name: "Michael W. Twitty", country: "USA", bio: "A culinary historian of African and African-American food. He published Recipes from the American South in 2025 and gave a Dalhousie lecture in October 2026." },
      { name: "Yemisí Aríbisálà", country: "Nigeria", bio: "Winner of Food Writer of the Year at the Fortnum and Mason Food and Drink Awards 2026. Her book Longthroat Memoirs reads Nigerian food culture through memory and story." },
    ],
  },
  {
    n: 7, name: "African Diaspora Food Voice", track: "media",
    line: "For the voice carrying African food to the rest of the world.",
    nominees: [
      { name: "Kwame Onwuachi", country: "Nigeria", bio: "His restaurant Dogon topped Yelp's Best New Restaurants of 2025 and made the New York Times best restaurants list. He opened Maroon in Las Vegas in April 2026." },
      { name: "Adejoké Bakare", country: "Nigeria", bio: "Chef-owner of Chishuru in London, a Michelin-starred restaurant. She spoke on the LSE Festival panel on the future of food in Africa and cooked a Lagos dinner series in November 2026." },
      { name: "Mory Sacko", country: "Mali", bio: "A Michelin one-star chef whose cooking carries his West African heritage, profiled by the Michelin Guide in 2025. He became Air France's signature chef in January 2026." },
      { name: "Nana Araba Wilmot", country: "Ghana", bio: "Cast on Bravo's Top Chef in March 2026, bringing Ghanaian cooking to a national American audience. She runs the Love That I Knead West African supper club." },
      { name: "Eric Adjepong", country: "Ghana", bio: "In 2025 he opened Elmina, a Ghanaian restaurant in Washington DC, and published Ghana to the World." },
    ],
  },
  {
    n: 8, name: "African Food Brand of the Year", track: "brands",
    line: "For the food brand that grew and made Africa proud.",
    nominees: [
      { name: "Edita Food Industries", country: "Egypt", brand: true, bio: "Full-year 2025 revenue rose about 29 per cent to EGP 20.9 billion and net profit rose 72.6 per cent, with exports and a Moroccan arm both growing." },
      { name: "'57 Chocolate", country: "Ghana", brand: true, bio: "Turns Ghanaian cocoa into a finished product rather than exporting the bean. An April 2026 profile reports it now sells to American customers through its own US site." },
      { name: "Le Chocolatier Ivoirien", country: "Côte d'Ivoire", brand: true, bio: "Winner of two Gourmet Medals at the 2025 Salon du Chocolat in Paris. Its founder has trained more than two thousand women farmers." },
      { name: "Moppet Foods", country: "Nigeria", brand: true, bio: "Launched on Walmart USA in July 2025, described as the first Nigerian children's food brand made from natural ingredients to reach those shelves." },
      { name: "Terra Delyssa", country: "Tunisia", brand: true, bio: "A Tunisian olive oil brand sold through Walmart, Costco and Amazon, listing gold medals at several international competitions in 2025." },
      { name: "Mina", country: "Morocco", brand: true, bio: "A Moroccan sauces and pantry brand founded in 2010 and named after the founder's mother, who was born and raised in Casablanca. Whole Foods Market is among its stockists." },
    ],
  },
  {
    n: 9, name: "African Drinks Brand of the Year", track: "brands",
    line: "For the drinks brand putting African flavour in more glasses.",
    nominees: [
      { name: "Matugga Rum", country: "Uganda", brand: true, bio: "In April 2026 the Guardian named Matugga mocha rum, infused with Ugandan coffee and cocoa beans, its best flavoured rum. The distillery was founded in 2018 by Paul and Jacine Rutasikwa." },
      { name: "Aslina Wines", country: "South Africa", brand: true, bio: "Built by winemaker Ntsiki Biyela since 2016. It showed at the Africa Food Show and Local Wine Expo in 2025, and reached a Harlem wine list in July 2026." },
      { name: "Kasapreko", country: "Ghana", brand: true, bio: "Listed on the Ghana Stock Exchange in June 2026 after an oversubscribed IPO. Its Alomo Bitters sells across West Africa and diaspora markets." },
      { name: "Sidi Ali", country: "Morocco", brand: true, bio: "Les Eaux Minérales d'Oulmès reported 2025 revenue up 11.2 per cent and net income up 94 per cent. Sidi Ali was the official water of the 2025 Africa Cup of Nations." },
    ],
  },
  {
    n: 10, name: "Food Innovation and Entrepreneurship Award", track: "brands",
    line: "For the founder building something new in African food.",
    nominees: [
      { name: "Mostafa Amin", country: "Egypt", bio: "Breadfast, the grocery delivery business he co-founded, raised a 50 million dollar pre-Series C in February 2026, after 10 million dollars from the EBRD in 2025." },
      { name: "Femi Aluko", country: "Nigeria", bio: "Chowdeck raised a 9 million dollar Series A in August 2025 and passed two million users by December 2025, across fourteen cities in Nigeria and Ghana." },
      { name: "Louis de Kock", country: "South Africa", bio: "Nile raised 200 million rand in June 2025 to grow its farm produce marketplace across Southern Africa." },
      { name: "Desmond Koney", country: "Ghana", bio: "Complete Farmer was selected into the Endeavor network in August 2026, a year after securing 2.5 million dollars from the EU AgriFI facility." },
      { name: "Diana Orembe", country: "Tanzania", bio: "NovFeed, which turns organic waste into fish feed and fertiliser, won the 300,000 dollar grand prize at Africa's Business Heroes 2025." },
      { name: "Tresor Gashonga", country: "Rwanda", bio: "Winner of the AYuTE Challenge 2025. Incuti Foods reports bottle output rising from 5,000 to 30,000 a month and farmer partners doubling to a hundred." },
    ],
  },
  {
    n: 11, name: "Sustainability Champion Award", track: "legacy",
    line: "For the work making African food systems last.",
    nominees: [
      { name: "Nnaemeka Ikegwuonu", country: "Nigeria", bio: "ColdHubs marked ten years in July 2025 with 58 solar cold rooms across 28 Nigerian states, cutting food loss for farmers and traders." },
      { name: "Abalobi", country: "South Africa", brand: true, bio: "A fisher-led platform. A February 2026 report puts nearly 8,000 fishers reached and over 2 million dollars returned to fishing communities." },
      { name: "SEKEM", country: "Egypt", brand: true, bio: "In 2025 its network reached 40,146 biodynamic farmers, a 150 per cent rise in a year, and planted over 145,000 trees." },
      { name: "Farmers, Marrakech", country: "Morocco", brand: true, bio: "Winner of the Sustainable Restaurant Award at MENA's 50 Best Restaurants 2026. Its produce comes from a permaculture farm outside Marrakech." },
      { name: "Leah Penniman", country: "USA", bio: "Co-founder of Soul Fire Farm, which describes itself as an Afro-Indigenous centred community farm. She gave a keynote at Bioneers 2026." },
    ],
  },
  {
    n: 12, name: "Community Impact Award", track: "legacy",
    line: "For using food to look after people.",
    nominees: [
      { name: "Emergency Response Rooms", country: "Sudan", brand: true, bio: "The network received both the Right Livelihood Award and the Rafto Prize in 2025, for running community kitchens that feed people through Sudan's war." },
      { name: "Lagos Food Bank Initiative", country: "Nigeria", brand: true, bio: "Led by Dr Michael Sunbola, it marked ten years in February 2026. A June 2026 drive gave out a thousand food boxes across four Lagos areas, reaching about five thousand people." },
      { name: "Isabelle Kamariza", country: "Rwanda", bio: "Solid'Africa marked fifteen years in July 2026 with over twelve million meals served to hospital patients and school children." },
      { name: "Wawira Njiru", country: "Kenya", bio: "Food4Education now says it feeds 700,000 children a day. She was due to receive the German Africa Prize in Berlin in November 2026." },
      { name: "FoodForward SA", country: "South Africa", brand: true, bio: "In April 2026 it reported 20,000 tonnes of food distributed over the past financial year, roughly 82 million meals." },
      { name: "Gabi Odebode", country: "Ghana", bio: "In 2026 she set up the Afromeals Foundation for cooking classes, nutrition education and food distribution in Ohio and Indiana." },
    ],
  },
  {
    n: 13, name: "Rising Star in Food and Drinks", track: "legacy",
    line: "For the newcomer everyone will be talking about next year.",
    nominees: [
      { name: "Akwasi Brenya-Mensa", country: "Ghana", bio: "He took Tatale Provisions to New York for a month-long residency at Hannah Traore Gallery in 2026, its first run in the United States." },
      { name: "Luckson Mare", country: "South Africa", bio: "He represented Africa, the Middle East and South Asia at the S.Pellegrino Young Chef Academy Grand Finale in Milan in October 2025." },
      { name: "Odwour Midigo", country: "Kenya", bio: "Ndalo Heritage won the Mandela Rhodes Foundation's 2026 Äänit Prize for sorghum and nutrition work with about two thousand farmers." },
      { name: "Favour Epiphany Bessan", country: "Nigeria", bio: "Chef Favy was crowned the first MasterChef Nigeria champion in July 2026. The judges singled out her menu's creativity, flavour, presentation and storytelling." },
    ],
  },
  {
    n: 14, name: "Lifetime Achievement Award", track: "legacy",
    line: "For a lifetime of work for African food.",
    nominees: [
      { name: "Christian Abégan", country: "Cameroon", bio: "The World Food Programme named him its Chef Advocate for West and Central Africa in 2025, after years of work with the agency against hunger. He speaks of forty years in kitchens." },
      { name: "Mohamed Fedal", country: "Morocco", bio: "Chef Moha is a pioneer of modern Moroccan food. He leads Dar Moha in Marrakech and Bab Al Mansour in Dubai." },
      { name: "Ruth Khasaya Oniang'o", country: "Kenya", bio: "Nearly five decades of work on African nutrition. She remains editor-in-chief of the African Journal of Food, Agriculture, Nutrition and Development, which she founded." },
      { name: "Gebisa Ejeta", country: "Ethiopia", bio: "World Food Prize winner for drought-tolerant sorghum. He was inducted into the United States National Inventors Hall of Fame in May 2026." },
    ],
  },
];

export const TOTAL_NOMINEES = CATEGORIES_2026.reduce((n, c) => n + c.nominees.length, 0);
export const TOTAL_COUNTRIES = new Set(CATEGORIES_2026.flatMap((c) => c.nominees.map((x) => x.country))).size;
