import Icon from "@/shared/ui/icon/ui";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

export const Footer = () => {
  const { pathname } = useLocation();

  return (
    <footer className={styles["footer"]}>
      {pathname === "/" && (
        <div className={styles["footer__mailing"]}>
          <p>Luminae Store</p>
          <p>
            Register your email not to miss the last minutes off+ Free delivery
          </p>
          <input placeholder="Enter your email" type="email" name="email" />
        </div>
      )}
      <div className={styles["footer__nav-wrapper"]}>
        <div className={styles["footer__nav"]}>
          <div className={styles["footer__nav-links"]}>
            <div>Company</div>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Our Store</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
            </ul>
          </div>
          <div className={styles["footer__nav-links"]}>
            <div>Career Opportunities</div>
            <ul>
              <li>
                <a href="">Selling Programs</a>
              </li>
              <li>
                <a href="">Advertise</a>
              </li>
              <li>
                <a href="">Cooperation</a>
              </li>
            </ul>
          </div>
          <div className={styles["footer__nav-links"]}>
            <div>How to Buy</div>
            <ul>
              <li>
                <a href="">Making Payments</a>
              </li>
              <li>
                <a href="">Delivery Options</a>
              </li>
              <li>
                <a href="">Buyer Protection</a>
              </li>
              <li>
                <a href="">New User Guide</a>
              </li>
            </ul>
          </div>
          <div className={styles["footer__nav-links"]}>
            <div>Help</div>
            <ul>
              <li>
                <a href="">Contacts Us</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles["footer__info"]}>
        <div className={styles["footer-socials"]}>
          <div className={styles["footer-socials__items"]}>
            <img src="/images/visa.png" alt="" />
            <img src="/images/mastercard.png" alt="" />
            <img src="/images/paypal.png" alt="" />
          </div>
          <div className={styles["footer__lang"]}>
            English
            <Icon name="arrow" className="w-[17px]" />
          </div>
        </div>
        <div className={styles["footer-copyright"]}>
          <span>165-179 Forster Road City of Monash, Melbourne, Australia</span>
          <span>©2023 Copyright in reserved for lumine shop</span>
          <div className={styles["footer-copyright__items"]}>
            <Icon name="inst-outline" />
            <Icon name="fb-outline" />
            <Icon name="tg-outline" />
          </div>
        </div>
      </div>
    </footer>
  );
};
