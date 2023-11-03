import Icon from "@/shared/ui/icon/ui";
import styles from "./styles.module.scss";
import { SearchBar } from "@/features/search-bar";

export const Navigation = () => {
  return (
    <div className={styles["navigation"]}>
      <SearchBar />
      <nav className={styles["nav"]}>
        <div className={styles["nav__links"]}>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact us</a>
          <a href="#">Help & Support</a>
        </div>
        <div className={styles["nav__socials"]}>
          <Icon name="inst" />
          <Icon name="fb" />
          <Icon name="tg" />
        </div>
      </nav>
    </div>
  );
};
