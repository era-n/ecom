import { CardSection } from "@/widgets/card-section/";
import { Hero } from "@/widgets/hero/";
import styles from "./styles.module.scss";
import { Footer } from "@/widgets/footer";
import Header from "@/widgets/header";

export const Landing = () => {
  return (
    <div>
      <Header />
      <div>
        <div className={styles.cards}>
          <Hero />
          <CardSection title={"Flash Sales"} sectionType="sales" />
          <CardSection title={"Trending must have"} sectionType="trending" />
          <CardSection title={"Top 100"} sectionType="top" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
