import p9_img from "./p9_image.jpg";
import p13_img from "./p13_image.jpg";
import p24_img from "./p24_image.jpg";
import p43_img from "./p43_image.jpg";
import p51_img from "./p51_image.jpg";
import p60_img from "./p60_image.jpg";
import p30_img from "./p30_img.jpg";
import p26_img from "./p26_image.jpg";

let new_collections = [
  {
    "id": 9,
    "name": "Tomatoes",
    "category_id": 1,
    "description": "Ripe and juicy tomatoes.",
    "new_price": 199,
    "old_price": 250,
    "unit": "kg",
    "stock": 100,
    "image": p9_img,
  },
  {
    "id": 13,
    "name": "Cheddar Cheese",
    "category_id": 2,
    "description": "A block of sharp cheddar cheese.",
    "new_price": 599,
    "old_price": 615,
    "unit": "block",
    "stock": 90,
    "image": p13_img,
  },
  {
    "id": 24,
    "name": "Croissants",
    "category_id": 3,
    "description": "Flaky and buttery croissants.",
    "new_price": 499,
    "old_price": 520,
    "unit": "pack",
    "stock": 90,
    "image":p24_img,
  },
  {
    "id": 43,
    "name": "Cola",
    "category_id": 5,
    "description": "A 2-liter bottle of cola.",
    "new_price": 199,
    "old_price": 330,
    "unit": "2 liters",
    "stock": 150,
    "image": p43_img,
  },
  {
    "id": 51,
    "name": "Pasta",
    "category_id": 6,
    "description": "A pack of dried spaghetti pasta.",
    "new_price": 149,
    "old_price": 200,
    "unit": "pack",
    "stock": 150,
    "image": p51_img,
  },
  {
    "id": 60,
    "name": "Honey",
    "category_id": 6,
    "description": "A 500g bottle of pure honey.",
    "new_price": 499,
    "old_price": 700,
    "unit": "bottle",
    "stock": 70,
    "image": p60_img,
  },
  {
    "id": 30,
    "name": "Dinner Rolls",
    "category_id": 3,
    "description": "A pack of soft dinner rolls.",
    "new_price": 349,
    "old_price": 373,
    "unit": "pack",
    "stock": 90,
    "image": p30_img,
  },
  {
    "id": 26,
    "name": "English Muffins",
    "category_id": 3,
    "description": "A pack of English muffins.",
    "new_price": 349,
    "old_price": 440,
    "unit": "pack",
    "stock": 100,
    "image": p26_img,
  }
];

export default new_collections;
