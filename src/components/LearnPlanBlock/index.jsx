import React from "react";
import { useIntl } from "gatsby-plugin-react-intl";
import BlockLayout from "../BlockLayout";
import * as styles from "./styles.module.css";
import RunMan from "../../images/runMan.png";

const LearnPlanBlock = () => {
  const intl = useIntl();

  return (
    <BlockLayout className={styles.wrapper}>
      <div className={styles.itemsLearn}>
        <h1 className={styles.tittleLearn}>
          {intl.formatMessage({ id: "LearnPlanBlock.whatWillYou" })} 🎓
        </h1>
        <div className={styles.investmentAdviceBlock}>
          <p>
            <span>
              {intl.formatMessage({ id: "LearnPlanBlock.whyInvest" })}
            </span>
            &nbsp; {intl.formatMessage({ id: "LearnPlanBlock.fromAmount" })}
          </p>
          <p>
            <span>{intl.formatMessage({ id: "LearnPlanBlock.theBoss" })}</span>
            &nbsp;
            {intl.formatMessage({ id: "LearnPlanBlock.mainPlayers" })}
          </p>
          <p>
            <span>{intl.formatMessage({ id: "LearnPlanBlock.investIn" })}</span>
            &nbsp;
            {intl.formatMessage({ id: "LearnPlanBlock.StocksBonds" })}
          </p>
          <p>
            <span>{intl.formatMessage({ id: "LearnPlanBlock.doPrices" })}</span>
            &nbsp;
            {intl.formatMessage({ id: "LearnPlanBlock.newsTweets" })}
          </p>
          <p>
            <span>
              {intl.formatMessage({ id: "LearnPlanBlock.youTheNext" })}
            </span>
            &nbsp;
            {intl.formatMessage({ id: "LearnPlanBlock.typesRisk" })}
          </p>
        </div>

        <div className={styles.longTermInvestmentGuide}>
          {intl.formatMessage({ id: "LearnPlanBlock.ourGoal" })}
        </div>
      </div>
      <div className={styles.runMan}>
        <img
          src={RunMan}
          alt={intl.formatMessage({ id: "LearnPlanBlock.personRunning" })}
        />
      </div>
    </BlockLayout>
  );
};

export default LearnPlanBlock;
