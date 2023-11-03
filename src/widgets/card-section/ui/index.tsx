import Icon from "@/shared/ui/icon/ui";
import { TopCard } from "@/entities/top-card/ui";
import { SaleCard } from "@/entities/sale-card/ui";
import { TrendingCard } from "@/entities/trending-card/ui";
import { getProducts } from "../lib/products";
import styles from "./styles.module.scss";

export const CardSection = ({
  sectionType,
  title,
}: {
  sectionType: string;
  title: string;
}) => {
  const products = getProducts(sectionType);
  const sectionClass =
    sectionType === "trending"
      ? "trending-card-list"
      : sectionType === "top"
      ? "top-card-list"
      : "sales-card-list";

  return (
    <div>
      <div className={styles["card-section-title"]}>
        <span>{title}</span>
        <span>
          View all <Icon name="right-arrow" />
        </span>
      </div>

      <div className={styles[sectionClass]}>
        {products?.map((p) => {
          if (sectionType === "trending") {
            return <TrendingCard key={p.id} {...p} />;
          } else if (sectionType === "top") {
            return <TopCard key={p.id} {...p} />;
          } else {
            return <SaleCard key={p.id} {...p} />;
          }
        })}
      </div>
    </div>
  );
};
