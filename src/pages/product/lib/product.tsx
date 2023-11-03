import { db } from "@/firebaseConfig";
import { ProductProps } from "@/shared/types";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export const getProduct = (id: string) => {
  const [product, setProduct] = useState<ProductProps>();

  useEffect(() => {
    const getProduct = async () => {
      const snap = await getDoc(doc(db, "cards", id!));
      const data = snap.data();

      if (!data) return;
      const res: any = {
        id: snap.id,
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
      setProduct(res);
    };
    getProduct();
  }, []);

  return product;
};
