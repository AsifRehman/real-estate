interface properties {
  id: string;
  userId: string;
  transactionType: "Sale" | "Rent" | "Airbnb" | null;
  title: string;
  Thumbnail: string;
  images: string[] | null;
  size: string;
  location: string;
  description: string;
  price: number;
  rooms: number;
  bathroom: number;
  parking: number;
  createdAt: Date | null;
}

interface company {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  role: "user" | "admin" | "company" | null;
  emailVerified: Date | null;
  createdAt: Date | null;
}
