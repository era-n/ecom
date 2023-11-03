import styles from "./styles.module.scss";

export const SaleCountDown = () => {
  return (
    <div className={styles["sale-countdown-wrapper"]}>
      <span className={styles["sale-countdown__title"]}>Deal of the day</span>
      <div className={styles["sale-countdown"]}>
        <div className={styles["sale-countdown__number"]}>
          12
          <p>hour</p>
        </div>
        <span>:</span>
        <div className={styles["sale-countdown__number"]}>
          43
          <p>min</p>
        </div>
        <span>:</span>
        <div className={styles["sale-countdown__number"]}>
          12
          <p>sec</p>
        </div>
      </div>
    </div>
  );
};
