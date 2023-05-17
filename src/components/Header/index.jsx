import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-react-intl";
import BlockLayout from "../BlockLayout";
import * as styles from "./styles.module.css";
import Button from "../Button";
import Logo from "../../images/logo.png";
import ArrowDown from "../../images/arrwoDown.png";

const Header = () => {
  const intl = useIntl();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <BlockLayout className={styles.header}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          padding: "20px 10px",
        }}
      >
        <div className={styles.logo}>
          <img
            src={Logo}
            alt={intl.formatMessage({ id: "header.bakksyLogo" })}
          />
        </div>

        <div className={styles.languageSwitch}>
          <img
            src={ArrowDown}
            alt={intl.formatMessage({ id: "header.arrowIcon" })}
          />
          <button className={styles.languageSwitchBtn}>EN</button>
        </div>

        {/* <Button className={styles.leaveInvestmentButton} type="primary">
          Leave investment
        </Button> */}

        <nav
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? "active" : ""}`}
        >
          <div className={styles.burgerButton} onClick={handleBurgerClick}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
          <ul className={styles.mobileMenuItems} style={{ display: "none" }}>
            <li>Giveaway</li>
            <li>Education Bot</li>
            <li>FAQ</li>
          </ul>
        </nav>
      </div>
    </BlockLayout>
  );
};

export default Header;
