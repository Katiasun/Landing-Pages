import React from "react";
import * as styles from "./styles.module.css";
import { useIntl } from "gatsby-plugin-react-intl";
import BlockLayout from "../BlockLayout";
import Button from "../Button";
import threeMobile from "../../images/threeMobile.png";
import whiteArrowOut from "../../images/whiteArrowOutward.png";

const AboutBakksyBlock = () => {
  const intl = useIntl();

  return (
    <BlockLayout className={styles.wrapper}>
      <div className={styles.threeImgMobile}>
        <img
          src={threeMobile}
          alt={intl.formatMessage({ id: "aboutBakksyBlock.threeMobile" })}
        />
      </div>
      <div className={styles.wrapperWhatBukksy}>
        <div className={styles.contentBakksy}>
          <div className={styles.bakksyInvestmentApp}>
            <h1>{intl.formatMessage({ id: "aboutBakksyBlock.whatBakksy" })}</h1>
            <p>{intl.formatMessage({ id: "aboutBakksyBlock.bakksyIsAn" })}</p>
          </div>
          <div className={styles.twoParagraphsOfBakksy}>
            <p>{intl.formatMessage({ id: "aboutBakksyBlock.atBakksyWe" })}</p>
            <ul>
              <li>
                {intl.formatMessage({ id: "aboutBakksyBlock.teachPeople" })}
              </li>
              <li>
                {intl.formatMessage({ id: "aboutBakksyBlock.createTheApp" })}
              </li>
            </ul>
            <p>
              {intl.formatMessage({ id: "aboutBakksyBlock.BecauseOnlyBy" })}
            </p>
          </div>
        </div>
        <Button className={styles.btnInvestment}>
          {intl.formatMessage({ id: "aboutBakksyBlock.LearnInvestment" })}
          <img
            src={whiteArrowOut}
            alt={intl.formatMessage({ id: "aboutBakksyBlock.arrow" })}
          />
        </Button>
      </div>
    </BlockLayout>
  );
};

export default AboutBakksyBlock;
