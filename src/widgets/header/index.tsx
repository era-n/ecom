import { Navigation } from "@/features/navigation";
import { Menu } from "@/features/menu/ui/menu";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <Navigation />
      <Menu />
    </header>
  );
}
