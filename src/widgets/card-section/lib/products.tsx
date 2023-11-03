import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { db } from "@/firebaseConfig";
import { ProductProps } from "@/shared/types";

export const getProducts = (sectionType: string): ProductProps[] => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  getDocs(
    query(collection(db, "cards"), where("type", "==", sectionType)),
  ).then(({ docs }) => {
    const res: any = docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        category: data.category,
        oldPrice: data?.oldPrice,
        price: data.price,
        details: data.details,
        reviews: data.reviews,
        thumb: data.thumb,
        images: data.images,
        productType: data.productType,
        rating: data.rating,
      };
    });
    setProducts(res);
  });

  return products;
};
