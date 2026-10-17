
import hero_image from './hero_image.jpg'
import exchange from './exchange.jpg'
import customer_support from './24Customer.jpg'
import return_policy from './7days.jpg'
import sonic_logo from './sonic_logo.png'
import google_pay from './google_pay.png'
import phone_pay from './phone_pay.jpg'
import paytm from './paytm.png'
import cards from './cards.avif'
import about_page from './about_page.png'
import contact_us from './contact_us.png'

export const assets = {
  // 1. Oversized T-Shirt Images
  tshirt_1: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
  tshirt_2: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80",
  tshirt_3: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80",

  // 2. Polo T-Shirt Images
  polo_1: "https://m.media-amazon.com/images/I/614efUvSyuL._SX679_.jpg",
  polo_2: "https://images.unsplash.com/photo-1588820059343-43b9d031952e?w=600&q=80",
  polo_3: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",

  // 3. Denim Jacket Images
  denim_1: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600&q=80",
  denim_2: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&q=80",
  denim_3: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&q=80",

  // 4. Winter Sweater Images
  sweater_1: "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=600&q=80",
  sweater_2: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
  sweater_3: "https://images.unsplash.com/photo-1614313264634-118df26eb664?w=600&q=80",

  // 5. Bomber Jacket Images
  bomber_1: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
  bomber_2: "https://images.unsplash.com/photo-1520975954732-57dd22299614?w=600&q=80",
  bomber_3: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",


  hero_image,
  exchange,
  customer_support,
  return_policy,
  sonic_logo,
  google_pay,
  phone_pay,
  paytm,
  cards,
  about_page,
  contact_us

};

// ==========================================
// 2. PRODUCT DATA ARRAY
// ==========================================
export const products = [
  {
    id: "p001",
    name: "Classic Minimalist T-Shirt",
    desc: "A premium 100% cotton oversized t-shirt designed for all-day comfort and a clean, modern aesthetic.",
    price: 599,
    category: "Men",
    subCategory: "Topwear",
    images: [assets.tshirt_1, assets.tshirt_2, assets.tshirt_3], 
    date: 1716634345000,
    bestseller: true,
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: "p002",
    name: "Sonic Signature Polo",
    desc: "A smart-casual polo t-shirt with a structured collar and breathable micro-mesh fabric. Perfect for office or weekend wear.",
    price: 899,
    category: "Men",
    subCategory: "Topwear",
    images: [assets.polo_1, assets.polo_2, assets.polo_3], 
    date: 1716634345001,
    bestseller: false,
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: "p003",
    name: "Vintage Wash Denim Jacket",
    desc: "A rugged, durable denim jacket featuring a classic button front and dual chest pockets. A timeless layering piece.",
    price: 2199,
    category: "Unisex",
    subCategory: "Outerwear",
    images: [assets.denim_1, assets.denim_2, assets.denim_3], 
    date: 1716634345002,
    bestseller: true,
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: "p004",
    name: "Cozy Knit Winter Sweater",
    desc: "A thick, warm knitted sweater made from premium wool blend to keep you comfortable during chilly days.",
    price: 1499,
    category: "Women",
    subCategory: "Winterwear",
    images: [assets.sweater_1, assets.sweater_2, assets.sweater_3], 
    date: 1716634345003,
    bestseller: false,
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: "p005",
    name: "Urban Stealth Bomber Jacket",
    desc: "Sleek, water-resistant bomber jacket with ribbed cuffs and a secure inner pocket for urban utility.",
    price: 2499,
    category: "Men",
    subCategory: "Outerwear",
    images: [assets.bomber_1, assets.bomber_2, assets.bomber_3], 
    date: 1716634345004,
    bestseller: true,
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: "p006",
    name: "Urban Stealth Bomber Jacket",
    desc: "Sleek, water-resistant bomber jacket with ribbed cuffs and a secure inner pocket for urban utility.",
    price: 2499,
    category: "Men",
    subCategory: "Outerwear",
    images: [assets.bomber_1, assets.bomber_2, assets.bomber_3], 
    date: 1716634345004,
    bestseller: true,
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: "p007",
    name: "Urban Stealth Bomber Jacket",
    desc: "Sleek, water-resistant bomber jacket with ribbed cuffs and a secure inner pocket for urban utility.",
    price: 2499,
    category: "Men",
    subCategory: "Outerwear",
    images: [assets.bomber_1, assets.bomber_2, assets.bomber_3], 
    date: 1716634345004,
    bestseller: true,
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: "p008",
    name: "Vintage Wash Denim Jacket",
    desc: "A rugged, durable denim jacket featuring a classic button front and dual chest pockets. A timeless layering piece.",
    price: 2199,
    category: "Unisex",
    subCategory: "Outerwear",
    images: [assets.denim_1, assets.denim_2, assets.denim_3], 
    date: 1716634345002,
    bestseller: true,
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: "p009",
    name: "Vintage Wash Denim Jacket",
    desc: "A rugged, durable denim jacket featuring a classic button front and dual chest pockets. A timeless layering piece.",
    price: 2199,
    category: "Unisex",
    subCategory: "Outerwear",
    images: [assets.denim_1, assets.denim_2, assets.denim_3], 
    date: 1716634345002,
    bestseller: true,
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: "p010",
    name: "Vintage Wash Denim Jacket",
    desc: "A rugged, durable denim jacket featuring a classic button front and dual chest pockets. A timeless layering piece.",
    price: 2199,
    category: "Unisex",
    subCategory: "Outerwear",
    images: [assets.denim_1, assets.denim_2, assets.denim_3], 
    date: 1716634345002,
    bestseller: true,
    sizes: ["M", "L", "XL", "XXL"]
  }

];