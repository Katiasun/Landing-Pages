import React from "react";
import * as styles from "./styles.module.css";
import { useIntl } from "gatsby-plugin-react-intl";
import BlockLayout from "../BlockLayout";

const QuizBlock = () => {
  const intl = useIntl();

  return (
    <BlockLayout className={styles.wrapper}>
      <div className={styles.informativeBlock}>
        <h1>Still have doubts whether you need this?</h1>
        <p>
          If you think that you already know everything you need, take our
          investment test.
        </p>
      </div>
      <div className={styles.mobileCard}>
        <h1 className={styles.mobileTittle}>What is diversification?</h1>
        <div className={styles.cardInteractive}>
          <div className={styles.answersMobile}>
            <p className={styles.answerItem}>
              <span>1</span> It's the variability of the price on the market
            </p>
            <p className={"${styles.answerItem} ${styles.midleAnswer}"}>
              <span>2</span> A price decrease
            </p>
            <p className={styles.answerItem}>
              <span>3</span> Dividing the money between different assets
            </p>
          </div>
          <button className={styles.btnNext}>Next</button>
        </div>
      </div>
    </BlockLayout>
  );
};
