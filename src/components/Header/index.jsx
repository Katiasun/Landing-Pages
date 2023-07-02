import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-react-intl";
import BlockLayout from "../BlockLayout";
import * as styles from "./styles.module.css";
import Button from "../Button";
import Logo from "../../images/logo.png";
import ArrowDown from "../../images/arrwoDown.png";
import Menu from "../Menu";

const Header = () => {
  const intl = useIntl();

  return (
    <BlockLayout className={styles.header}>
      <div className={styles.menuBar}>
        <div className={styles.logo}>
          <img
            src={Logo}
            alt={intl.formatMessage({ id: "header.bakksyLogo" })}
          />
        </div>
        {/* <div className={styles.blockSwitchMenu}></div> */}
        <div className={styles.languageSwitch}>
          <img
            src={ArrowDown}
            alt={intl.formatMessage({ id: "header.arrowIcon" })}
          />
          <button className={styles.languageSwitchBtn}>EN</button>
        </div>

        <Menu />

        <Button className={styles.leaveInvestmentButton} type="primary">
          Leave investment
        </Button>
      </div>
    </BlockLayout>
  );
};

export default Header;
