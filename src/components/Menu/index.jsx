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
      <div className={styles.burgerButton} onClick={handleBurgerClick}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      <ul className={styles.mobileMenuItems}>
        <li>{intl.formatMessage({ id: "menu.giveaway" })}</li>
        <li>{intl.formatMessage({ id: "menu.educationBot" })}</li>
        <li>{intl.formatMessage({ id: "menu.faq" })}</li>
      </ul>
    </nav>
  );
};

export default Menu;
