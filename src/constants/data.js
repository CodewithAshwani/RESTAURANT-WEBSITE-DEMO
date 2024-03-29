import images from "./images";

const wines = [
  {
    title: "Kadhaai Paneer",
    price: "(₹)500",
    tags: "AU | Full Plate",
  },
  {
    title: "Veg Biryani",
    price: "(₹)600",
    tags: "AU | Full Plate",
  },
  {
    title: "Chilli Paneer",
    price: "(₹)400",
    tags: "FR | Full Plate",
  },
  {
    title: "Paneer Bhurji",
    price: "(₹)300",
    tags: "CA | Full Plate",
  },
  {
    title: "Soya Chaap",
    price: "(₹)40",
    tags: "IE |Full Plate",
  },
];

const cocktails = [
  {
    title: "Lemon Drop",
    price: "(₹)200",
    tags: "Half Short | 30 ML",
  },
  {
    title: "Malt Julep-Whiskey",
    price: "(₹)300",
    tags: "Half Short | 50 ML",
  },
  {
    title: "Dark & Stormy-Cold",
    price: "(₹)320",
    tags: "Half Short | 60 ML",
  },
  {
    title: "Bloody Mary-Vodka ",
    price: "(₹)350",
    tags: "Half Short | 80 ML",
  },
  {
    title: "Negroni",
    price: "(₹)400",
    tags: "Half Short | 100 ML",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Ernestine Ulmer",
    subtitle: "Life is uncertain. Eat dessert first.",
  },
  {
    imgUrl: images.award01,
    title: "Miss Piggy",
    subtitle: "Never eat more than you can life.",
  },
  {
    imgUrl: images.award05,
    title: "Alan D. Wolfelt",
    subtitle: "Food is symbolic of love when words are inadequate.",
  },
  {
    imgUrl: images.award03,
    title: "W.C. Fields",
    subtitle: "I cook with wine. Sometimes I even add it to the food.",
  },
];
const data = { wines, cocktails, awards };
export default data;
