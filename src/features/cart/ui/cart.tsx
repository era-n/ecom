import { Link } from "react-router-dom";
import Icon from "@/shared/ui/icon/ui";
import styles from "./styles.module.scss";

export const Cart = ({ orders }: { orders: any }) => {
  return (
    <div className={styles["cart"]}>
      <Link to="/checkout">
        <Icon name="cards" />
      </Link>
      {orders.length > 0 && (
        <div className={styles["cart-count"]}>{orders.length}</div>
      )}
    </div>
  );
};
