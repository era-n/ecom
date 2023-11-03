import { useEffect, useState } from "react";
import cartStore from "@/stores/cartStore";
import { ProductProps } from "@/shared/types";
import styles from "./styles.module.scss";

export const CartOrderSummary = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const store = cartStore();

  useEffect(() => {
    let temp: ProductProps;
    temp = store.orders.reduce(
      (prev, curr) => {
        return { ...curr, price: curr.price * curr.quantity! + prev.price };
      },
      { ...store.orders[0], price: 0 },
    );

    setTotalPrice(Math.floor(temp?.price));
  }, [store.orders]);

  return (
    <div className={styles["cart-order-summary-wrapper"]}>
      <div className={styles["cart-order-summary"]}>
        <p className={styles["cart-order-summary__heading"]}>Order Summary</p>
        <div className={styles["cart-order-summary__item"]}>
          <p>Price</p>
          <span>${totalPrice}</span>
        </div>
        <div className={styles["cart-order-summary__item"]}>
          <p>Shipping</p>
          <span>$0</span>
        </div>
        <div className={styles["cart-order-summary__item"]}>
          <p>Tax</p>
          <span>$0</span>
        </div>
        <div className={styles["cart-order-summary__item"]}>
          <p>Discount Price</p>
          <span>$0</span>
        </div>
        <p className={styles["cart-order-summary__total-price"]}>
          Total price
          <span>${totalPrice ? totalPrice : 0}</span>
        </p>
      </div>
      <a className={styles["cart-order-summary__checkout-btn"]}>
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 7.66667H6.5M16.5 7.66667C19.2614 7.66667 21.5 9.65651 21.5 12.1111V16.5556C21.5 19.0102 19.2614 21 16.5 21H6.5C3.73858 21 1.5 19.0102 1.5 16.5556V12.1111C1.5 9.65651 3.73858 7.66667 6.5 7.66667M16.5 7.66667V5.44444C16.5 2.98985 14.2614 1 11.5 1C8.73858 1 6.5 2.98985 6.5 5.44444V7.66667"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Check Out
      </a>
    </div>
  );
};
