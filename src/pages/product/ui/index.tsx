import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "@/widgets/footer";
import Header from "@/widgets/header";
import { ProductInfo } from "@/widgets/product-info/ui";
import { ProductDetails } from "@/widgets/product-details/ui";
import Icon from "@/shared/ui/icon/ui";
import { getProduct } from "../lib/product";
import styles from "./styles.module.scss";

export const Product = () => {
  const { productId } = useParams();
  const product = getProduct(productId!);
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div>
      <Header />
      {!product ? (
        <div className={styles["loader"]}>
          <div></div>
        </div>
      ) : (
        <div className={styles["product-wrapper"]}>
          <div className={styles["product-breadcrumb"]}>
            <Link to="/">Homepage</Link>
            <Icon name="right-arrow" />
            <Link to="/" className={styles["product-breadcrumb__category"]}>
              {product?.category}
            </Link>
            <Icon name="right-arrow" />
            <Link to="/">{product?.productType}</Link>
          </div>
          <ProductInfo
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <ProductDetails product={product!} quantity={quantity} />
        </div>
      )}
      <Footer />
    </div>
  );
};
