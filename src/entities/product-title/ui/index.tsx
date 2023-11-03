import Icon from "@/shared/ui/icon/ui";
import styles from "./styles.module.scss";

export const ProductTitle = ({
  name,
  price,
}: {
  name: string;
  price: number;
}) => {
  return (
    <div className={styles["product-title-wrapper"]}>
      <p className={styles["product-title"]}>{name}</p>
      <p className={styles["product-title__price"]}>${price}</p>
      <div className={styles["product-title__icon"]}>
        <Icon name="heart" />
      </div>
    </div>
  );
};
