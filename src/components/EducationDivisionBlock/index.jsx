import React from "react";
import { useIntl } from "gatsby-plugin-react-intl";
import BlockLayout from "../BlockLayout";
import * as styles from "./styles.module.css";
import Phones from "../../images/telephones.png";
import ArrowBlue from "../../images/arrow.png";
import Button from "../Button";

const EducationDivisionBlock = () => {
  const intl = useIntl();

  return (
    <BlockLayout className={styles.wrapper}>
      <div className={styles.blockTelephones}>
        <img
          src={Phones}
          alt={intl.formatMessage({ id: "EducationDivisionBlock.phones" })}
        />
      </div>
      <div className={styles.blockBukksyEducation}>
        <h2>
          {intl.formatMessage({
            id: "EducationDivisionBlock.bukksyEducationDevision",
          })}
          ✨
        </h2>
        <p>
          {intl.formatMessage({
            id: "EducationDivisionBlock.takledWithNovice",
          })}
        </p>
        <p className={styles.learningCanHard}>
          {intl.formatMessage({ id: "EducationDivisionBlock.learnCanHard" })}
        </p>
        <div className={styles.simpleInvestmentHelper}>
          <p>
            {intl.formatMessage({
              id: "EducationDivisionBlock.createdBotForYou",
            })}
          </p>
        </div>
        <Button type="secondary" className={styles.btnOpenBot} href="#">
          {intl.formatMessage({ id: "EducationDivisionBlock.openTheBot" })}{" "}
          <img
            src={ArrowBlue}
            alt={intl.formatMessage({ id: "EducationDivisionBlock.arrowImg" })}
          />
        </Button>
      </div>
    </BlockLayout>
  );
};

export default EducationDivisionBlock;
