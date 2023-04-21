import React from "react";
import { useIntl } from "gatsby-plugin-react-intl";
import BlockLayout from "../BlockLayout";
import * as styles from "./styles.module.css";
import Button from "../Button";
import whiteArrowOutward from "../../images/whiteArrowOutward.png";
import checkArrow from "../../images/checkArrow.png";
import moonMan from "../../images/moonMan.png";

const AboutBotBlock = () => {
  const intl = useIntl();

  return (
    <BlockLayout className={styles.wrapper}>
      <div className={styles.moonManImg}>
        <img
          src={moonMan}
          alt={intl.formatMessage({ id: "aboutBotBlock.MoonMan" })}
        />
      </div>
      <div className={styles.contentYouNeed}>
        <h1 className={styles.tittleYouNeed}>
          {intl.formatMessage({ id: "aboutBotBlock.youNeedThis" })}
        </h1>
        <div className={styles.checkList}>
          <div className={styles.checkArrowAndText}>
            <img
              className={styles.checkArrow}
              src={checkArrow}
              alt={intl.formatMessage({ id: "aboutBotBlock.checkArrow" })}
            />
            <p>
              {intl.formatMessage({ id: "aboutBotBlock.toStartInvesting" })}
              &nbsp;
              <span>
                {intl.formatMessage({ id: "aboutBotBlock.tooAfraid" })}
              </span>
              &nbsp;
              {intl.formatMessage({ id: "aboutBotBlock.toDo" })}
            </p>
          </div>
          <div className={styles.checkArrowAndText}>
            <img
              className={styles.checkArrow}
              src={checkArrow}
              alt={intl.formatMessage({ id: "aboutBotBlock.checkArrow" })}
            />
            <p>
              {intl.formatMessage({ id: "aboutBotBlock.wantTo" })} &nbsp;
              <span>
                {intl.formatMessage({ id: "aboutBotBlock.saveGrow" })}
              </span>
              &nbsp; {intl.formatMessage({ id: "aboutBotBlock.money" })}
            </p>
          </div>
          <div className={styles.checkArrowAndText}>
            <img
              className={styles.checkArrow}
              src={checkArrow}
              alt={intl.formatMessage({ id: "aboutBotBlock.checkArrow" })}
            />
            <p>
              {intl.formatMessage({ id: "aboutBotBlock.toBecome" })}&nbsp;
              <span>
                {intl.formatMessage({ id: "aboutBotBlock.independent" })}
              </span>
            </p>
          </div>
          <div className={styles.checkArrowAndText}>
            <img
              className={styles.checkArrow}
              src={checkArrow}
              alt={intl.formatMessage({ id: "aboutBotBlock.checkArrow" })}
            />
            <p>
              <span>
                {intl.formatMessage({ id: "aboutBotBlock.doNotKnow" })}{" "}
              </span>
              &nbsp;
              {intl.formatMessage({ id: "aboutBotBlock.differenceBetween" })}
            </p>
          </div>
          <div className={styles.checkArrowAndText}>
            <img
              className={styles.checkArrow}
              src={checkArrow}
              alt={intl.formatMessage({ id: "aboutBotBlock.checkArrow" })}
            />
            <p>
              {intl.formatMessage({ id: "aboutBotBlock.ReadyTo" })} &nbsp;
              <span>
                {" "}
                {intl.formatMessage({ id: "aboutBotBlock.longTerm" })}
              </span>
              &nbsp;
              {intl.formatMessage({ id: "aboutBotBlock.investor" })}
            </p>
          </div>
          <div className={styles.checkArrowAndText}>
            <img
              className={styles.checkArrow}
              src={checkArrow}
              alt={intl.formatMessage({ id: "aboutBotBlock.checkArrow" })}
            />
            <p>
              {intl.formatMessage({ id: "aboutBotBlock.wantToLook" })} &nbsp;
              <span>
                {intl.formatMessage({ id: "aboutBotBlock.illusions" })}
              </span>
            </p>
          </div>
          <div className={styles.checkArrowAndText}>
            <img
              className={styles.checkArrow}
              src={checkArrow}
              alt={intl.formatMessage({ id: "aboutBotBlock.checkArrow" })}
            />
            <p>
              {intl.formatMessage({ id: "aboutBotBlock.wantTo" })}&nbsp;
              <span>
                {intl.formatMessage({ id: "aboutBotBlock.confident" })}
              </span>
              &nbsp;
              {intl.formatMessage({ id: "aboutBotBlock.yourInvestment" })}
            </p>
          </div>
        </div>
        <Button type="primary" className={styles.btnReady}>
          {intl.formatMessage({ id: "aboutBotBlock.IAmReady" })}
          <img
            src={whiteArrowOutward}
            alt={intl.formatMessage({ id: "aboutBotBlock.whiteArrow" })}
          />
        </Button>
      </div>
    </BlockLayout>
  );
};

export default AboutBotBlock;
