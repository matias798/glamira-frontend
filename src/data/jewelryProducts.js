// Luxury Jewelry Product Data
export const jewelryProducts = [
  {
    id: 1,
    title: "Eternal Diamond Solitaire",
    price: 2450,
    description: "A timeless 1.5 carat round brilliant diamond set in 18k white gold. The epitome of classic elegance, perfect for engagements or milestone celebrations.",
    category: "rings",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80"
  },
  {
    id: 2,
    title: "Rose Gold Infinity Band",
    price: 1280,
    description: "Delicate rose gold band adorned with pavé diamonds in an infinity pattern. Symbolizing eternal love and commitment.",
    category: "rings",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&q=80"
  },
  {
    id: 3,
    title: "Sapphire Halo Pendant",
    price: 3200,
    description: "A stunning Ceylon blue sapphire surrounded by brilliant-cut diamonds, suspended on an 18k white gold chain.",
    category: "necklaces",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80"
  },
  {
    id: 4,
    title: "Pearl Drop Earrings",
    price: 890,
    description: "South Sea pearls suspended from delicate 14k gold settings with diamond accents. Timeless sophistication.",
    category: "earrings",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80"
  },
  {
    id: 5,
    title: "Diamond Tennis Bracelet",
    price: 4850,
    description: "Classic tennis bracelet featuring 3 carats of round brilliant diamonds set in platinum. The ultimate statement of luxury.",
    category: "bracelets",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80"
  },
  {
    id: 6,
    title: "Emerald Cut Engagement Ring",
    price: 5200,
    description: "A breathtaking 2 carat emerald-cut diamond in a vintage-inspired platinum setting with side baguettes.",
    category: "rings",
    image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=600&q=80"
  },
  {
    id: 7,
    title: "Gold Chain Necklace",
    price: 1650,
    description: "Handcrafted 18k Italian gold chain with a modern link design. Versatile elegance for everyday luxury.",
    category: "necklaces",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80"
  },
  {
    id: 8,
    title: "Ruby Stud Earrings",
    price: 2100,
    description: "Natural Burmese rubies set in 18k yellow gold with secure screw-back closures. Passionate and refined.",
    category: "earrings",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80"
  },
  {
    id: 9,
    title: "Vintage Art Deco Ring",
    price: 3800,
    description: "Estate-inspired design featuring geometric patterns, milgrain detailing, and a center princess-cut diamond.",
    category: "rings",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80"
  },
  {
    id: 10,
    title: "Layered Gold Chains",
    price: 980,
    description: "Set of three graduated 14k gold chains designed to be worn together or separately. Modern minimalism.",
    category: "necklaces",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80"
  },
  {
    id: 11,
    title: "Diamond Huggie Hoops",
    price: 1450,
    description: "Small hoops encrusted with brilliant diamonds in 14k white gold. Perfect for everyday elegance.",
    category: "earrings",
    image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&q=80"
  },
  {
    id: 12,
    title: "Bangle Bracelet Set",
    price: 2200,
    description: "Trio of 18k gold bangles with textured, polished, and diamond-studded finishes. Stack for impact.",
    category: "bracelets",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80"
  }
];

export const getProductsByCategory = (category) => {
  if (!category || category === 'all') return jewelryProducts;
  return jewelryProducts.filter(p => p.category === category);
};

export const getProductById = (id) => {
  return jewelryProducts.find(p => p.id === parseInt(id));
};
