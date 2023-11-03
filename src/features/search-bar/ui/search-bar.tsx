import { Link } from "react-router-dom";
import Icon from "@/shared/ui/icon/ui";
import cartStore from "@/stores/cartStore";
import { Cart } from "@/features/cart/ui/cart";
import styles from "./styles.module.scss";

export const SearchBar = () => {
  const { orders } = cartStore();

  return (
    <div className={styles["search-bar"]}>
      <div className={styles["search-bar__logo-wrapper"]}>
        <div className={styles["mobile-menu"]}>
          <a href="#">
            <Icon name="hamburger" />
          </a>
        </div>
        <div>
          <Link to="/" className={styles["search-bar__logo"]}>
            <img src="/images/logo.png" alt="logo" className={styles["logo"]} />
            <span>Luminae</span>
          </Link>
        </div>
        <Cart orders={orders} />
      </div>
      <div className={styles["search-input-wrapper"]}>
        <input
          type="search"
          className={styles["search-input"]}
          placeholder="Search Products"
        />
        <div className={styles["search-input__categories-wrapper"]}>
          <div className={styles["search-input__categories"]}>
            All categories
            <Icon name="arrow" />
          </div>
          <div className={styles["search-input__search-icon-wrapper"]}>
            <Icon name="search" />
          </div>
        </div>
      </div>
    </div>
  );
};
