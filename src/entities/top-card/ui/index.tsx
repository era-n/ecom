import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { ProductProps } from "@/shared/types";
import { TopCardDetails } from "../top-card-details";

export const TopCard = (card: ProductProps) => {
  const { id, category, thumb } = card;
  return (
    <Link
      state={card}
      to={`/category/${category}/product/${id}`}
      className={styles["top-card-wrapper"]}
    >
      <div className={styles["top-card__thumb"]}>
        <div>
          <img src={thumb} alt="" />
        </div>
      </div>
      <TopCardDetails {...card} />
    </Link>
  );
};
