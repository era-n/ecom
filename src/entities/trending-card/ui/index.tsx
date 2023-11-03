import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { ProductProps } from "@/shared/types";
import { TrendingCardDetails } from "../trending-card-details";

export const TrendingCard = (card: ProductProps) => {
  const { id, category, thumb } = card;

  return (
    <Link
      to={`/category/${category}/product/${id}`}
      className={styles["trending-card-wrapper"]}
    >
      <div className={styles["trending-card__thumb"]}>
        <div className={styles["trending-card__notif"]}>New Arrivals</div>
        <img src={thumb} alt="" />
      </div>
      <TrendingCardDetails {...card} />
    </Link>
  );
};
