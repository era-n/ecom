import styles from "./styles.module.scss";

export const ProductQuantity = ({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className={styles["product-quantity-wrapper"]}>
      <p>Quantity</p>
      <div className={styles["product-quantity"]}>
        <div onClick={() => setQuantity((prev) => (prev < 2 ? 1 : prev - 1))}>
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="9.93896"
              width="14"
              height="2"
              rx="1"
              fill="#C4C4C4"
            />
          </svg>
        </div>
        <span>{quantity}</span>
        <div onClick={() => setQuantity((prev) => prev + 1)}>
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
              d="M11 9.93896H16C16.5523 9.93896 17 10.3867 17 10.939C17 11.4912 16.5523 11.939 16 11.939H11V16.939C11 17.4913 10.5523 17.939 10 17.939C9.44772 17.939 9 17.4913 9 16.939V11.939H4C3.44772 11.939 3 11.4912 3 10.939C3 10.3867 3.44772 9.93896 4 9.93896H9V4.93896C9 4.38668 9.44772 3.93896 10 3.93896C10.5523 3.93896 11 4.38668 11 4.93896V9.93896Z"
              fill="#C4C4C4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
