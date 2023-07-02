import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-react-intl";
import * as styles from "./styles.module.css";

const Menu = () => {
  const intl = useIntl();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.mobileMenu} ${isMobileMenuOpen ? "active" : ""}`}>
      <ul className={styles.mobileMenuItems}>
        <li>
          <a href="#">{intl.formatMessage({ id: "menu.giveaway" })}</a>
        </li>
        <li>
          <a href="#">{intl.formatMessage({ id: "menu.educationBot" })}</a>
        </li>
        <li>
          <a href="#">{intl.formatMessage({ id: "menu.faq" })}</a>
        </li>
      </ul>

      <div className={styles.burgerButton} onClick={handleBurgerClick}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </nav>
  );
};

export default Menu;
