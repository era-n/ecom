import { ProductSizes } from "@/features/product";
import { ProductFinalPrice } from "@/features/product";
import { ProductQuantity } from "@/features/product";
import { ProductToBasket } from "@/features/product";
import { ImageCarousel } from "@/features/image-carousel/ui";
import { ProductTitle } from "@/entities/product-title/ui";
import { ProductProps } from "@/shared/types";
import styles from "./styles.module.scss";

export const ProductInfo = ({
  product,
  quantity,
  setQuantity,
}: {
  product: ProductProps;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className={styles["product-wrapper"]}>
      <ImageCarousel images={product?.images!} />
      <div className={styles["product"]}>
        <ProductTitle name={product?.name!} price={product?.price!} />
        <div className={styles["product-info"]}>
          <ProductSizes details={product?.details!} />
          <div>
            <p>Shipping</p>
            <p>Free Shipping to Victoria teritory</p>
          </div>
          <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
        </div>
        <div className={styles["desktop"]}>
          <ProductFinalPrice price={product?.price!} />
          <ProductToBasket product={product} quantity={quantity} />
        </div>
      </div>
    </div>
  );
};
