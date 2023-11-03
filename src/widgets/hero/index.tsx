import styles from "./styles.module.scss";

export const Hero = () => {
  return (
    <>
      <div className={styles["sales"]}>
        <div className={`${styles["sales__item"]} ${styles["bg-red"]}`}>
          <div className={styles["sales__item-inner"]}>
            <p>Never-Ending Summer</p>
            <p>Throwback Shirts & all-day dressed</p>
            <p>Exlopre all category</p>
          </div>
          <img className="" src="/images/rec.png" alt="" />
        </div>
        <div className={`${styles["sales__item"]} ${styles["bg-blue"]}`}>
          <div className={styles["sales__item-inner"]}>
            <p>Best Lovin Sellers</p>
            <p>Bikini & Poolside glam include</p>
            <p>Exlopre all category</p>
          </div>
          <img src="/images/rec1.png" alt="" />
        </div>
      </div>
      <div className={styles["categories"]}>
        <a href="#">Woman</a>
        <a href="#">Male</a>
        <a href="#">Shoes</a>
        <a href="#">Bags</a>
        <a href="#">Kids</a>
        <a href="#">Cosmetics</a>
      </div>
      <div className={styles["hero"]}>
        <img
          src="https://www.ferragamo.com/BWStaticContent/152000/1176d1f0-87a6-400c-a902-0b2e24f9aa57_gallery-horizontal-desktop-12.jpg"
          alt=""
          loading="lazy"
        />
        <div className={styles["hero-inner"]}>
          <a href="#" className={styles["hero-inner__title"]}>
            Ferragamo: a new vision
          </a>
          <p>
            The classicism, the elegance, the drama — the house’s renaissance
            draws on inspiration from the arts and its archives. Cue amped-up
            proportions and signature scarlet red.
          </p>
          <a href="#" className={styles["hero-inner__button"]}>
            Explore now
          </a>
        </div>
      </div>
    </>
  );
};
