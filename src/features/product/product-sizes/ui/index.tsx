import { ProductProps } from "@/shared/types";
import styels from "./styles.module.scss";

export const ProductSizes = ({
  details,
}: {
  details: ProductProps["details"];
}) => {
  return (
    <div className={styels["sizes-wrapper"]}>
      <p>Size</p>
      <div className={styels["sizes"]}>
        {details.size?.map((s) => <div key={s}>{s}</div>)}
      </div>
    </div>
  );
};
