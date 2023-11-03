import { useNavigate } from "react-router-dom";
import { ProductProps } from "@/shared/types";
import Icon from "@/shared/ui/icon/ui";
import cartStore from "@/stores/cartStore";
import styles from "./styles.module.scss";

export const ProductToBasket = ({
  product,
  quantity,
}: {
  product: ProductProps;
  quantity: number;
}) => {
  const navigate = useNavigate();
  const store = cartStore();

  const id = store.orders.find((o) => o.id === product.id);

  return (
    <div className={styles["product-to-basket"]}>
      <a
        className={styles["product-to-basket__shop-btn"]}
        href=""
        onClick={() => {
          if (!id) {
            store?.setOrders({ ...product, quantity });
            navigate("/checkout");
          } else {
            navigate("/checkout");
          }
        }}
      >
        Shop now
      </a>
      <a
        className={styles["product-to-basket__to-basket-btn"]}
        href=""
        onClick={() => {
          if (!id) {
            store?.setOrders({ ...product, quantity });
            navigate("/checkout");
          } else {
            navigate("/checkout");
          }
        }}
      >
        <div className="flex items-center gap-1">
          {!id ? (
            <>
              <Icon name="add" />
              Add to basket
            </>
          ) : (
            <>Go to basket</>
          )}
        </div>
      </a>
    </div>
  );
};
