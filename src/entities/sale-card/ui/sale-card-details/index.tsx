import { ProductProps } from "@/shared/types";
import Icon from "@/shared/ui/icon/ui";
import styles from "./styles.module.scss";

export const SaleCardDetails = ({
  name,
  productType,
  rating,
  price,
  oldPrice,
}: ProductProps) => {
  const discount = (oldPrice! - price) / (oldPrice! / 100);

  return (
    <div className={styles["sale-card-details-wrapper"]}>
      <div className={styles["sale-card-details"]}>
        <div className={styles["sale-card-details__title"]}>
          <span className={styles["sale-card-details__name"]}>{name}</span>
          <span className={styles["sale-card-details__product-type"]}>
            {productType}
          </span>
        </div>
        <div className={styles["sale-card-details__price-rating"]}>
          <div className={styles["sale-card-details__rating"]}>
            <Icon name="stars-sm" />
            <span>({rating!.count})</span>
          </div>
          <div className={styles["sale-card-details__price"]}>
            <span>${price}</span>
            <span>${oldPrice}</span>
            <span>- {discount - (discount % 10)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
