export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  accent: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  colors: string[];
  sizes: string[];
  stock: number;
  images: string[];
  featured: boolean;
  description: string;
  material: string;
  isNew?: boolean;
};

export type CartItem = {
  productId: string;
  quantity: number;
  size: string;
  color: string;
};

export type OrderDraft = {
  customer: {
    firstName: string;
    lastName: string;
    phone: string;
    wilaya: string;
    commune: string;
    address: string;
    deliveryMethod: 'home' | 'pickup';
  };
  notes?: string;
};

export type WilayaDelivery = {
  wilaya: string;
  commune: string;
  price: number;
  method: 'delivery' | 'pickup';
};
