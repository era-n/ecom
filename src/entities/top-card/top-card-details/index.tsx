import { ProductProps } from "@/shared/types";
import Icon from "@/shared/ui/icon/ui";
import styles from "./style.module.scss";

export const TopCardDetails = ({
  name,
  productType,
  rating,
  price,
  oldPrice,
}: ProductProps) => {
  const discount = (oldPrice! - price) / (oldPrice! / 100);

  return (
    <div className={styles["top-card-details"]}>
      <div>
        <div className={styles["top-card-details__title"]}>
          <div>
            <p>{name}</p>
            <p>{productType}</p>
          </div>
          <div className={styles["top-card-details__icon"]}>
            <Icon name="like" />
          </div>
        </div>
        <div className={styles["top-card-details__rating"]}>
          <Icon name="stars-lg" />
          <span>({rating!.count})</span>
        </div>
        <div>
          <span className={styles["top-card-details__price"]}>${price}</span>
          <span className={styles["top-card-details__old-price"]}>
            $`{oldPrice}
          </span>
          <span className={styles["top-card-details__discount"]}>
            -{discount - (discount % 10)}%
          </span>
        </div>
      </div>
    </div>
  );
};
