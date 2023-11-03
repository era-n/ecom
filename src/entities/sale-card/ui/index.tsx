import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { ProductProps } from "@/shared/types";
import { SaleCountDown } from "./sale-countdown";
import { SaleCardDetails } from "./sale-card-details";

export const SaleCard = (card: ProductProps) => {
  const { id, category, thumb } = card;

  return (
    <div className={styles["sale-card-wrapper"]}>
      <Link to={`/category/${category}/product/${id}`}>
        <div className={styles["sale-card"]}>
          <SaleCountDown />
          <div className={styles["sale-card__thumb"]}>
            <img src={thumb} alt="" />
          </div>
          <SaleCardDetails {...card} />
        </div>
      </Link>
    </div>
  );
};
