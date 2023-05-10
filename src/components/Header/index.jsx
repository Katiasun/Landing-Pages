import React from "react";
import { useIntl } from "gatsby-plugin-react-intl";
import BlockLayout from "../BlockLayout";
import * as styles from "./styles.module.css";
import Button from "../Button";
import Logo from "../../images/logo.png";
import ArrowDown from "../../images/arrwoDown.png";

const Header = () => {
  const intl = useIntl();

  return (
    <BlockLayout className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={Logo} alt={intl.formatMessage({ id: "header.bakksyLogo" })} />
      </div>
      <nav>
        <ul className={styles.listHeader}>
          <li className={styles.item}>
            <a href="#">{intl.formatMessage({ id: "header.roadmap" })}</a>
          </li>
          <li className={styles.item}>
            <a href="#">{intl.formatMessage({ id: "header.aboutBakksy" })}</a>
          </li>
          <li className={styles.item}>
            <a href="#">{intl.formatMessage({ id: "header.waitlist" })}</a>
          </li>
          <li className={styles.item}>
            <a href="#">{intl.formatMessage({ id: "header.faq" })}</a>
          </li>
        </ul>
      </nav>
      <div className={styles.frameButtons}>
        <img
          src={ArrowDown}
          alt={intl.formatMessage({ id: "header.arrowIcon" })}
        />
        <Button
          className={styles.languageSwitcher}
          aria-label={intl.formatMessage({ id: "header.languageSwitcher" })}
        >
          EN
        </Button>
        <Button className={styles.investmentBtn}>
          {intl.formatMessage({ id: "header.learnInvestment" })}
        </Button>
        <div className={styles.burgerMenu} aria-label="Mobile Menu">
          <span className={(`${styles.line}`, `${styles.line1}`)}></span>
          <span className={(`${styles.line}`, `${styles.line2}`)}></span>
          <span className={(`${styles.line}`, `${styles.line3}`)}></span>
        </div>
      </div>
    </BlockLayout>
  );
};

export default Header;
