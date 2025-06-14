import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpeg";
import nails1 from "../assets/nails1.jpg";
import nails2 from "../assets/nails2.jpg";
import nails3 from "../assets/nails3.jpg";
import nails4 from "../assets/nails4.jpg";
import nails5 from "../assets/nails5.jpg";
import nails6 from "../assets/nails6.jpg";
import nails7 from "../assets/nails7.png";
import nails8 from "../assets/nails8.jpeg";
import nails9 from "../assets/nails9.jpeg";
import lash1 from "../assets/lash1.jpg";
import lash2 from "../assets/lash2.jpg";
import lash3 from "../assets/lash3.jpg";
import lash4 from "../assets/lash4.jpg";
import lash5 from "../assets/lash5.jpg";
import lash6 from "../assets/lash6.jpg";
import lash7 from "../assets/lash7.jpg";
import lash8 from "../assets/lash8.jpg";
import lash9 from "../assets/lash9.jpg";
import lash10 from "../assets/lash10.jpg";

const customerFeedbacks = [
  {
    id: 1,
    name: "Emily Johnson",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    comment:
      "Absolutely love the service at Aivy Beauty! My nails have never looked better. The technicians are so skilled, and they take the time to ensure every detail is perfect. I always leave feeling pampered and happy with my nails!",
  },
  {
    id: 2,
    name: "Sophia Nguyen",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    comment:
      "The staff is so friendly and professional. The atmosphere is relaxing and clean, making it a perfect place to unwind after a long day. They always make sure I’m comfortable and happy with the results. I wouldn’t go anywhere else!",
  },
  {
    id: 3,
    name: "Jessica Lee",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    comment:
      "Aivy Beauty is my go-to nail salon! The quality of work is unmatched, and the nail technicians are true artists. They always listen to my requests and bring my nail designs to life perfectly. Highly recommended!",
  },
  {
    id: 4,
    name: "Mia Robinson",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    comment:
      "Highly recommend this place! The level of care and attention to detail here is amazing. From the moment you walk in, you’re greeted warmly, and the team ensures you leave with beautiful nails that last for weeks.",
  },
  {
    id: 5,
    name: "Olivia Martinez",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    comment:
      "My nails always last so long after visiting Aivy Beauty. They use top-quality products and techniques, and it really shows! The salon is also very hygienic, and I always feel confident that I’m getting the best service possible.",
  },
  {
    id: 6,
    name: "Hannah Wilson",
    avatar: "https://randomuser.me/api/portraits/women/74.jpg",
    comment:
      "Best nail salon in town! The work is absolutely stunning, and the staff is incredibly kind and accommodating. They always take the time to ensure my nails are exactly how I want them. Definitely my favorite place to get my nails done!",
  },
];

const galleryImages = [
  {
    id: 1,
    src: gallery1,
    alt: "Beautiful nail design with soft pink polish",
    description: "A classic pink nail style with elegant details.",
  },

  {
    id: 3,
    src: gallery3,
    alt: "Stunning glitter nail design",
    description: "Sparkling nails for a glamorous look.",
  },
  {
    id: 4,
    src: gallery4,
    alt: "Minimalist nude nail design",
    description: "Simple yet elegant nude nails.",
  },
  {
    id: 5,
    src: gallery5,
    alt: "Bold red nails with an artistic finish",
    description: "A striking red nail style for confident looks.",
  },
  {
    id: 6,
    src: gallery6,
    alt: "Creative nail art with unique patterns",
    description: "Trendy nail art perfect for any occasion.",
  },
];
const nailMenu = {
  title: "NAILS",
  subtitle: "Aivy Beauty",
  categories: [
    {
      name: "Manicures",
      services: [
        { name: "File & Paint", price: "$20" },
        { name: "File & Paint Gel", price: "$40" },
        { name: "Mani", price: "$30" },
        { name: "Mani Gel", price: "$50" },
      ],
    },
    {
      name: "Pedicures",
      services: [
        { name: "File & Paint", price: "$20" },
        { name: "File & Paint Gel", price: "$40" },
        { name: "Pedi", price: "$40" },
        { name: "Pedi Gel", price: "$60" },
      ],
    },
    {
      name: "Enhancements",
      services: [
        { name: "Gelx Tips (Soft gel tips)", price: "$75" },
        { name: "SNS", price: "$60" },
        { name: "SNS Tips", price: "$75" },
        { name: "Polygel", price: "$70" },
        { name: "Polygel Tips", price: "$85" },
        { name: "BuilderGel", price: "$70" },
        { name: "BuilderGel Tips", price: "$85" },
      ],
    },
    {
      name: "Others",
      services: [
        { name: "Cut & File", price: "$15" },
        { name: "Nail Removal", price: "$20" },
        { name: "Nail Repair", price: "From $7" },
        { name: "Nail Arts", price: "From $5" },
        { name: "French Tips", price: "Extra $7" },
      ],
    },
  ],
};

const lashBrowMenu = {
  title: "LASH & BROW",
  subtitle: "Aivy Beauty",
  categories: [
    {
      name: "Classic Lash",
      services: [
        { name: "New set", price: "$80" },
        { name: "Infill", price: "From $50" },
      ],
    },
    {
      name: "Hybrid Lash",
      services: [
        { name: "New set", price: "$90" },
        { name: "Infill", price: "From $60" },
      ],
    },
    {
      name: "Volume Lash",
      services: [
        { name: "New set", price: "$105" },
        { name: "Infill", price: "From $80" },
      ],
    },
    {
      name: "Mega Volume Lash",
      services: [
        { name: "New set", price: "$140" },
        { name: "Infill", price: "From $95" },
      ],
    },
    {
      name: "Design Lash",
      services: [
        { name: "New set", price: "$85 - $140" },
        { name: "Infill", price: "$55 - $120" },
      ],
    },
    {
      name: "Brows",
      services: [
        { name: "Shape", price: "$15" },
        { name: "Tint", price: "$15" },
        { name: "Shape & Tint", price: "$25" },
      ],
    },
    {
      name: "Others",
      services: [
        { name: "Lash Lift & Tint", price: "$65" },
        { name: "Lash Tint", price: "$15" },
        { name: "Lash Removal", price: "$15" },
      ],
    },
  ],
};
const nailImages = [
  { url: gallery1, category: "Nails", title: "French Tips" },
  { url: nails1, category: "Nails", title: "Glitter Ombre" },
  { url: nails2, category: "Nails", title: "Marble Effect" },
  { url: nails3, category: "Nails", title: "Chrome Nails" },
  { url: nails4, category: "Nails", title: "Natural Nude" },
  { url: nails5, category: "Nails", title: "Pastel Matte" },
  { url: nails6, category: "Nails", title: "Floral Art" },
  { url: nails7, category: "Nails", title: "Gold Foil Design" },
  { url: nails8, category: "Nails", title: "Matte Burgundy" },
  { url: nails9, category: "Nails", title: "Neon Tips" },
];
const lashImages = [
  { url: lash1, category: "Lash", title: "Classic Lash Set" },
  { url: lash2, category: "Lash", title: "Hybrid Lashes" },
  { url: lash3, category: "Lash", title: "Volume Lashes" },
  { url: lash4, category: "Lash", title: "Wispy Lash" },
  { url: lash5, category: "Lash", title: "Mega Volume" },
  { url: lash6, category: "Lash", title: "Natural Lash Look" },
  { url: lash7, category: "Lash", title: "Cat Eye Style" },
  { url: lash8, category: "Lash", title: "Doll Eye Style" },
  { url: lash9, category: "Lash", title: "Russian Volume" },
  { url: lash10, category: "Lash", title: "Angel Lash Set" },
];

const browImages = [
  { url: gallery6, category: "Brow", title: "Brow Shaping" },
  { url: gallery6, category: "Brow", title: "Brow Tint" },
  { url: gallery6, category: "Brow", title: "Microblading" },
  { url: gallery6, category: "Brow", title: "Ombre Brows" },
  { url: gallery6, category: "Brow", title: "Feather Brows" },
  { url: gallery6, category: "Brow", title: "Brow Lamination" },
  { url: gallery6, category: "Brow", title: "Henna Brows" },
  { url: gallery6, category: "Brow", title: "Soft Arch" },
  { url: gallery6, category: "Brow", title: "Defined Brows" },
  { url: gallery6, category: "Brow", title: "Natural Look" },
];

export {
  customerFeedbacks,
  galleryImages,
  nailMenu,
  lashBrowMenu,
  nailImages,
  lashImages,
  browImages,
};
