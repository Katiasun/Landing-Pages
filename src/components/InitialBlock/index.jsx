import React from "react";
import { useIntl } from "gatsby-plugin-react-intl";
import BlockLayout from "../BlockLayout";
import * as styles from "./styles.module.css";
import YellowMan from "../../images/yellowMan.png";
import Button from "../Button";

const InitialBlock = () => {
  const intl = useIntl();

  return (
    <BlockLayout className={styles.wrapper}>
      <div className={styles.invest10Steps}>
        <h2 className={styles.invest10StepsTitle}>
          {intl.formatMessage({ id: "initialBlock.becomeInvestorTitle" })}
          <span>
            &nbsp;
            {intl.formatMessage({
              id: "initialBlock.becomeInvestorTitleSteps",
            })}
          </span>
        </h2>
        <p className={styles.freeEducation}>
          {intl.formatMessage({ id: "initialBlock.becomeInvestorSubtitle" })}
        </p>
        <p className={styles.usefulness100}>
          {intl.formatMessage({ id: "initialBlock.youFind" })}&nbsp;
          <span>
            {intl.formatMessage({ id: "initialBlock.usefulness100" })}
          </span>
          &nbsp;
          {intl.formatMessage({ id: "initialBlock.youGet" })}&nbsp;
          <span>{intl.formatMessage({ id: "initialBlock.freeStock" })}</span>
          &nbsp;
          {intl.formatMessage({ id: "initialBlock.startYourPortfolio" })}
        </p>
        <Button type="primary" className={styles.buttonSortOut}>
          {intl.formatMessage({ id: "initialBlock.sortOutInvesting" })}
        </Button>
      </div>
      <div className={styles.bukksyCoinImgContainer}>
        <img
          src={YellowMan}
          className={styles.bukksyCoinImg}
          alt={intl.formatMessage({ id: "initialBlock.imageAltYellowMan" })}
        />
      </div>
    </BlockLayout>
  );
};

export default InitialBlock;
