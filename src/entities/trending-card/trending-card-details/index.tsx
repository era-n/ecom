import { ProductProps } from "@/shared/types";
import styles from "./styles.module.scss";

export const TrendingCardDetails = ({
  name,
  productType,
  price,
}: ProductProps) => {
  return (
    <div className={styles["trending-card-details-wrapper"]}>
      <div className={styles["trending-card-details"]}>
        <div>
          <p>{name} </p>
          <span className={styles["trending-card-details__product-type"]}>
            {productType}
          </span>
        </div>
        <div className={styles["trending-card-details__button"]}>
          <span>${price}</span>
          Shop now
        </div>
      </div>
    </div>
  );
};
