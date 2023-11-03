import { ProductProps } from "@/shared/types";
import styles from "./styles.module.scss";

export const ProductFinalPrice = ({
  price,
}: {
  price: ProductProps["price"];
}) => {
  return (
    <div className={styles["product-final-price"]}>
      <p>${price}</p>
      <div className={styles["product-final-price__info"]}>
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 19.939C5.02944 19.939 1 15.9095 1 10.939C1 5.9684 5.02944 1.93896 10 1.93896C14.9706 1.93896 19 5.9684 19 10.939C19 15.9095 14.9706 19.939 10 19.939ZM11 9.93896V5.93896C11 5.38668 10.5523 4.93896 10 4.93896C9.44771 4.93896 9 5.38668 9 5.93896V9.93896H5C4.44772 9.93896 4 10.3867 4 10.939C4 11.4913 4.44772 11.939 5 11.939H9V15.939C9 16.4913 9.44771 16.939 10 16.939C10.5523 16.939 11 16.4913 11 15.939V11.939H15C15.5523 11.939 16 11.4913 16 10.939C16 10.3867 15.5523 9.93896 15 9.93896H11Z"
            fill="#C4C4C4"
          />
        </svg>
        <p>
          Add shipping insurance for $9( declared value only if the package gets
          lost, stolen or damaged.)
        </p>
      </div>
    </div>
  );
};
