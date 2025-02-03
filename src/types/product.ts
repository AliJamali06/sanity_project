
export interface Product {
  _id: string;
  title: string;
  productName: string;
  _type: "product";
  image?: {
    asset: {
      _ref: string;
      _type?: "image"; 
    };
  };
  price: number;
  description?: string;
  category: {
   _type: string;
   _ref: string;
 };
 categoryName: string; 
  rating?: number; 
  availability?: boolean;
}

