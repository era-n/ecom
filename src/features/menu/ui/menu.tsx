import { Link } from "react-router-dom";
import Icon from "@/shared/ui/icon/ui";
import cartStore from "@/stores/cartStore";
import styles from "./styles.module.scss";

export const Menu = () => {
  const { orders } = cartStore();

  return (
    <div className={styles["menu-wrapper"]}>
      <div className={styles["menu"]}>
        <div className={styles["menu__categories"]}>
          <a className={styles["menu__categories-icon"]}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6H16M10 14H16M10 10H22M10 18H22M3 10H5C5.55228 10 6 9.55228 6 9V7C6 6.44772 5.55228 6 5 6H3C2.44772 6 2 6.44772 2 7V9C2 9.55228 2.44772 10 3 10ZM3 18H5C5.55228 18 6 17.5523 6 17V15C6 14.4477 5.55228 14 5 14H3C2.44772 14 2 14.4477 2 15V17C2 17.5523 2.44772 18 3 18Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Categories
          </a>
          <div className={styles["menu__currencies"]}>
            <span>
              USD <Icon name="arrow-white" />
            </span>
            <span>
              English <Icon name="arrow-white" />
            </span>
          </div>
        </div>
        <div className={styles["menu__sales-wrapper"]}>
          <div className={styles["menu__sales"]}>
            <img src="/images/mencosmetic.png" alt="" />
            <div>
              <p>Weekly Men's Toiletries Coupons.</p>
              <p>We extend exclusive discounts to our male clientele</p>
            </div>
          </div>
        </div>
        <div className={styles["menu__helpers"]}>
          <Link to="/auth">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="12"
                cy="17.5"
                rx="7"
                ry="3.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="7"
                r="4"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <span>Sign in</span>
          </Link>
          <a>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.765 4.70229L12 5.52422L11.2349 4.70229C9.12233 2.43257 5.69709 2.43257 3.58447 4.70229C1.47184 6.972 1.47184 10.6519 3.58447 12.9217L10.4699 20.3191C11.3149 21.227 12.685 21.227 13.5301 20.3191L20.4155 12.9217C22.5282 10.6519 22.5282 6.972 20.4155 4.70229C18.3029 2.43257 14.8777 2.43257 12.765 4.70229Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <span>Favourites</span>
          </a>
          <Link to="/checkout">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.6113 3H8.38836C6.433 3 4.76424 4.41365 4.44278 6.3424L2.77612 16.3424C2.36976 18.7805 4.24994 21 6.72169 21H17.278C19.7498 21 21.6299 18.7805 21.2236 16.3424L19.5569 6.3424C19.2355 4.41365 17.5667 3 15.6113 3Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <span>Cart</span>
            {orders.length > 0 && (
              <div className={styles["cart-count"]}>{orders.length}</div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};
