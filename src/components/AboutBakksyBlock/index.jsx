import React from "react";
import * as styles from "./styles.module.css";
import { useIntl } from "gatsby-plugin-react-intl";
import BlockLayout from "../BlockLayout";
import Button from "../Button";
import whiteArrowOut from "../../images/whiteArrowOutward.png";

const AboutBakksyBlock = () => {
  const intl = useIntl();

  return (
    <BlockLayout className={styles.wrapper}>
      <div className={styles.threeImgMobile}>
        <img src="./threeMobile.png" alt="three mobile" />
      </div>
      <div className={styles.wrapperWhatBukksy}>
        <div className={styles.contentBakksy}>
          <div className={styles.bakksyInvestmentApp}>
            <h1>What's Bakksy?</h1>
            <p>
              Bakksy is an investment app for novices that is about to rock the
              world of finance and investment.
            </p>
          </div>
          <div className={styles.twoParagraphsOfBakksy}>
            <p>
              At Bakksy, we truly believe that all people should have access to
              financial freedom. To do that, we have to deal with two essential
              tasks:
            </p>
            <ul>
              <li>Teach people how to invest</li>
              <li>Create the app with the best investment experience</li>
            </ul>
            <p>
              Because only by making wise and conscious investment decisions can
              you win in the long-term and receive financial independence. So
              use our educational bot to get started and prepare for the
              greatest investment journey with Bakksy!
            </p>
          </div>
        </div>
        <Button className={styles.btnInvestment}>
          Learn investment
          <img src={whiteArrowOut} alt="arrow" />
        </Button>
      </div>
    </BlockLayout>
  );
};

export default AboutBakksyBlock;
