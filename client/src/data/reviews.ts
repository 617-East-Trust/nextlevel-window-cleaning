// Real Google reviews pulled from the Next Level Window Cleaning GBP
// (business.google.com location 15295731909144938321). Synced 2026-09-26.

export interface GoogleReview {
  id: string;
  author: string;
  rating: 5;
  text: string;
  date: string; // ISO
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "pruitt",
    author: "Carson Pruitt",
    rating: 5,
    date: "2026-09-22",
    text: "What a great company. Miguel was so thorough and professional. Will definitely be using again. Thank you Miguel!!",
  },
  {
    id: "aguilera",
    author: "Guadalupe Aguilera",
    rating: 5,
    date: "2026-09-21",
    text: "Miguel did an amazing job cleaning my windows inside and out and washing the exterior of my house. The windows look absolutely sparkling, and the house looks brand new! He was professional, friendly, and did a great job. I highly recommend Miguel and Next Level Window Cleaning!",
  },
  {
    id: "jimenez",
    author: "Catalina Jimenez",
    rating: 5,
    date: "2026-09-19",
    text: "Attention to detail. My house looks new!",
  },
  {
    id: "boone",
    author: "Kenneth Boone",
    rating: 5,
    date: "2026-06-04",
    text: "1st time getting my house washed in years & they have my house looking like brand new! They're kind, professional and fast!",
  },
  {
    id: "jb",
    author: "Jb thatkid5",
    rating: 5,
    date: "2026-06-04",
    text: "Miguel came & washed my home pretty efficiently & took good care around my plants and garden! Looks good as new i highly recommend using this company.",
  },
  {
    id: "fortin",
    author: "Jenny Fortin",
    rating: 5,
    date: "2026-05-16",
    text: "They did an amazing job cleaning our house. Very respectful, professional, and you can tell they really care about the work they do. The house looks so clean now and they made the whole process easy. Definitely would use them again!",
  },
  {
    id: "steve",
    author: "Steve D",
    rating: 5,
    date: "2026-05-01",
    text: "Next Level Window Cleaning did an amazing job on my home in Apex. They handled the windows, gutters, and even pressure washing. Super professional, on time, and the results speak for themselves. Highly recommend their services!",
  },
];

export const GOOGLE_RATING = "5.0";
export const GOOGLE_REVIEW_COUNT = GOOGLE_REVIEWS.length;

export const GBP_SEARCH_URL =
  "https://www.google.com/search?q=Next+Level+Window+Cleaning+Sanford+NC";
