import React from "react";
import * as styles from "./styles.module.css";
import { useIntl } from "gatsby-plugin-react-intl";
import BlockLayout from "../BlockLayout";

const QuizBlock = () => {
  const intl = useIntl();

  return (
    <BlockLayout className={styles.wrapper}>
      <div className={styles.informativeBlock}>
        <h1>{intl.formatMessage({ id: "quizBlock.stillHave" })}</h1>
        <p>{intl.formatMessage({ id: "quizBlock.ifYouThink" })}</p>
      </div>
      <div className={styles.mobileCard}>
        <h1 className={styles.mobileTittle}>
          {intl.formatMessage({ id: "quizBlock.whatIsDiversification" })}
        </h1>
        <div className={styles.cardInteractive}>
          <div className={styles.answersMobile}>
            <p className={styles.answerItem}>
              <span>1</span>&nbsp;
              {intl.formatMessage({ id: "quizBlock.theVariability" })}
            </p>
            <p className={"${styles.answerItem} ${styles.midleAnswer}"}>
              <span>2</span>&nbsp;
              {intl.formatMessage({ id: "quizBlock.aPriceDecrease" })}
            </p>
            <p className={styles.answerItem}>
              <span>3</span>&nbsp;
              {intl.formatMessage({ id: "quizBlock.dividingTheMoney" })}
            </p>
          </div>
          <button className={styles.btnNext}>
            {intl.formatMessage({ id: "quizBlock.next" })}
          </button>
        </div>
      </div>
    </BlockLayout>
  );
};

export default QuizBlock;
