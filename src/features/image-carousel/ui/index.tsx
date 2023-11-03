import { useState } from "react";
import styles from "./styles.module.scss";

export const ImageCarousel = ({ images }: { images: [] }) => {
  const [activeImg, setActiveImg] = useState<number>(0);

  return (
    <>
      <div className={styles["image"]}>
        <img src={images[activeImg]} alt="" className="image__active" />
        <div className={styles["image__selector"]}>
          {images.map((_, i) => (
            <div
              key={i}
              style={{
                backgroundColor: i === activeImg ? "#262626" : "unset",
              }}
              onClick={() => setActiveImg(i)}
            ></div>
          ))}
        </div>
      </div>
      <div className={styles["images"]}>
        <div>
          {images.map((src, i) => (
            <img src={src} key={i} onClick={() => setActiveImg(i)} />
          ))}
        </div>
      </div>
    </>
  );
};
