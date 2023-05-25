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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "20px 10px",
        }}
      >
        <div className={styles.logo}>
          <img
            src={Logo}
            alt={intl.formatMessage({ id: "header.bakksyLogo" })}
          />
        </div>
        <div className={styles.blockSwitchMenu}>
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
          <Menu />
        </div>
      </div>
    </BlockLayout>
  );
};

export default Header;
