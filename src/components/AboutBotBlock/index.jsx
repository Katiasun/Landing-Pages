import React from "react";
import { useIntl } from "gatsby-plugin-react-intl";
import BlockLayout from "../BlockLayout";
import * as styles from "./styles.module.css";
import Button from "../Button";
import whiteArrowOutward from "../../images/whiteArrowOutward";
import checkArrow from "../../images/checkArrow.png";
import moonMan from "../../images/moonMan.png";

const AboutBotBlock = () => {
  const intl = useIntl();

  return (
    <BlockLayout className={styles.wrapper}>
      <div className={styles.moonManImg}>
        <img
          src={moonMan}
          alt={intl.formatMessage({ id: "AboutBotBlock.MoonMan" })}
        />
      </div>
      <div className={styles.contentYouNeed}>
        <h1 className={styles.tittleYouNeed}>
          {intl.formatMessage({ id: "AboutBotBlock.youNeedThis" })}
        </h1>
        <div className={styles.checkList}>
          <div className={styles.checkArrowAndText}>
            <img
              className={styles.checkArrow}
              src={checkArrow}
              alt={intl.formatMessage({ id: "AboutBotBlock.checkArrow" })}
            />
            <p>
              {intl.formatMessage({ id: "AboutBotBlock.toStartInvesting" })}
              &nbsp;
              <span>
                {intl.formatMessage({ id: "AboutBotBlock.tooAfraid" })}
              </span>
              &nbsp;
              {intl.formatMessage({ id: "AboutBotBlock.toDo" })}
            </p>
          </div>
          <div className={styles.checkArrowAndText}>
            <img
              className={styles.checkArrow}
              src={checkArrow}
              alt={intl.formatMessage({ id: "AboutBotBlock.checkArrow" })}
            />
            <p>
              {intl.formatMessage({ id: "AboutBotBlock.wantTo" })} &nbsp;
              <span>
                {intl.formatMessage({ id: "AboutBotBlock.saveGrow" })}
              </span>
              &nbsp; {intl.formatMessage({ id: "AboutBotBlock.money" })}
            </p>
          </div>
          <div className={styles.checkArrowAndText}>
            <img
              className={styles.checkArrow}
              src={checkArrow}
              alt={intl.formatMessage({ id: "AboutBotBlock.checkArrow" })}
            />
            <p>
              {intl.formatMessage({ id: "AboutBotBlock.toBecome" })}&nbsp;
              <span>
                {intl.formatMessage({ id: "AboutBotBlock.independent" })}
              </span>
            </p>
          </div>
          <div className={styles.checkArrowAndText}>
            <img
              className={styles.checkArrow}
              src={checkArrow}
              alt={intl.formatMessage({ id: "AboutBotBlock.checkArrow" })}
            />
            <p>
              <span>
                {intl.formatMessage({ id: "AboutBotBlock.doNotKnow" })}{" "}
              </span>
              &nbsp;
              {intl.formatMessage({ id: "AboutBotBlock.differenceBetween" })}
            </p>
          </div>
          <div className={styles.checkArrowAndText}>
            <img
              className={styles.checkArrow}
              src={checkArrow}
              alt={intl.formatMessage({ id: "AboutBotBlock.checkArrow" })}
            />
            <p>
              {intl.formatMessage({ id: "AboutBotBlock.ReadyTo" })} &nbsp;
              <span>
                {" "}
                {intl.formatMessage({ id: "AboutBotBlock.longTerm" })}
              </span>
              &nbsp;
              {intl.formatMessage({ id: "AboutBotBlock.investor" })}
            </p>
          </div>
          <div className={styles.checkArrowAndText}>
            <img
              className={styles.checkArrow}
              src={checkArrow}
              alt={intl.formatMessage({ id: "AboutBotBlock.checkArrow" })}
            />
            <p>
              {intl.formatMessage({ id: "AboutBotBlock.wantToLook" })} &nbsp;
              <span>
                {intl.formatMessage({ id: "AboutBotBlock.illusions" })}
              </span>
            </p>
          </div>
          <div className={styles.checkArrowAndText}>
            <img
              className={styles.checkArrow}
              src={checkArrow}
              alt={intl.formatMessage({ id: "AboutBotBlock.checkArrow" })}
            />
            <p>
              {intl.formatMessage({ id: "AboutBotBlock.wantTo" })}&nbsp;
              <span>
                {intl.formatMessage({ id: "AboutBotBlock.confident" })}
              </span>
              &nbsp;
              {intl.formatMessage({ id: "AboutBotBlock.yourInvestment" })}
            </p>
          </div>
        </div>
        <Button type="primary" className={styles.btnReady}>
          {intl.formatMessage({ id: "AboutBotBlock.IAmReady" })}
          <img
            src={whiteArrowOutward}
            alt={intl.formatMessage({ id: "AboutBotBlock.whiteArrow" })}
          />
        </Button>
      </div>
    </BlockLayout>
  );
};

export default AboutBotBlock;
