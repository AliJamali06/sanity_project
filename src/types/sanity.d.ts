export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  image: SanityImage;
  description?: string;
}

export interface Category {
  _id: string;
  name: string;
  image: SanityImage;
} 