
// export interface Product {
//     _id: string;
//     title: string;
//     productName: string;
//     _type: "product";
//     image?: {
//       asset: {
//         _ref: string;
//         _type?: "image"; 
//       };
//     };
//     price: number;
//     description?: string;
//   }
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
  category?: string; // Add category
  rating?: number;  // Add rating (out of 5)
  availability?: boolean; // Add availability flag
}
