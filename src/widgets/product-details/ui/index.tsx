import { useState } from "react";
import { ProductToBasket } from "@/features/product";
import { ProductFinalPrice } from "@/features/product";
import { ProductProps } from "@/shared/types";
import styles from "./styles.module.scss";

export const ProductDetails = ({
  product,
  quantity,
}: {
  product: ProductProps;
  quantity: number;
}) => {
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <div className={styles["product-details"]}>
      <div>
        <div className={styles["product-details__tabs"]}>
          <span
            style={{
              color: activeTab === 1 ? "#262626" : "",
            }}
            onClick={() => setActiveTab(1)}
          >
            Product details
          </span>
          <span
            style={{
              color: activeTab === 2 ? "#262626" : "",
            }}
            onClick={() => setActiveTab(2)}
          >
            Reviews ({product?.reviews})
          </span>
          <span
            style={{
              color: activeTab === 3 ? "#262626" : "",
            }}
            onClick={() => setActiveTab(3)}
          >
            Shipping & Payment
          </span>
        </div>
        <div
          style={{
            display: activeTab !== 1 ? "none" : "",
          }}
          className={styles["product-details__tab"]}
        >
          <div>
            <p className={styles["heading"]}>Product Description</p>
            <p className={styles["text"]}>{product?.details.description}</p>
          </div>
          <div>
            <p className={styles["heading"]}>Composition</p>
            <p className={styles["text"]}>{product?.details.composition}</p>
          </div>
        </div>
      </div>
      <div className={styles["mobile"]}>
        <ProductFinalPrice price={product.price} />
        <ProductToBasket product={product} quantity={quantity} />
      </div>
    </div>
  );
};
