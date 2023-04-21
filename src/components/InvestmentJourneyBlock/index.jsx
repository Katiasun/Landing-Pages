import React from "react";
import { useIntl } from "gatsby-plugin-react-intl";
import BlockLayout from "../BlockLayout";
import * as styles from "./styles.module.css";
import trainlesLower from "../../images/lowerTrainglesBlock.png";

const InvestmentJourneyBlock = () => {
  const intl = useIntl();

  return (
    <BlockLayout className={styles.wrapper}>
      <div className={styles.contentTittleAndParagraph}>
        <h1 className={styles.tittleReadyFor}>
          {intl.formatMessage({ id: "InvestmentJourneyBlock.GetReadyFor" })}
        </h1>
        <p className={styles.paragraphWithOur}>
          {intl.formatMessage({ id: "InvestmentJourneyBlock.EducationBot" })}
        </p>
      </div>
      <div className={styles.fourCards}>
        <div className={styles.itemCard}>
          <h5 className={styles.titleCard}>
            {intl.formatMessage({ id: "InvestmentJourneyBlock.LearnInHandy" })}
          </h5>
          <p className={styles.textCard}>
            {intl.formatMessage({ id: "InvestmentJourneyBlock.WeKnow" })}
          </p>
        </div>
        <div className={styles.itemCard}>
          <h5 className={styles.titleCard}>
            {intl.formatMessage({
              id: "InvestmentJourneyBlock.BecomeInvestor",
            })}
          </h5>
          <p className={styles.textCard}>
            {intl.formatMessage({ id: "InvestmentJourneyBlock.9Chapters" })}
          </p>
        </div>
        <div className={styles.itemCard}>
          <h5 className={styles.titleCard}>
            {intl.formatMessage({ id: "InvestmentJourneyBlock.GetFreeStock" })}
          </h5>
          <p className={styles.textCard}>
            {intl.formatMessage({
              id: "InvestmentJourneyBlock.KnowledgeIsNotEverything",
            })}
          </p>
        </div>
        <div className={styles.itemCard}>
          <h5 className={styles.titleCard}>
            {intl.formatMessage({ id: "InvestmentJourneyBlock.StartRightNow" })}
          </h5>
          <p className={styles.textCard}>
            {intl.formatMessage({ id: "InvestmentJourneyBlock.AndGetReady" })}
          </p>
        </div>
      </div>
      <img
        className={styles.lowerTriangle}
        src={trainlesLower}
        alt={intl.formatMessage({
          id: "InvestmentJourneyBlock.trianglesLower",
        })}
      />
    </BlockLayout>
  );
};

export default InvestmentJourneyBlock;
