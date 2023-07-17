import React from "react";
import { useIntl } from "gatsby-plugin-react-intl";
import BlockLayout from "../BlockLayout";
import * as styles from "./styles.module.css";
import Certificate from "../../images/Certificate.png";
import Button from "../Button";

const CertificateBlock = () => {
  const intl = useIntl();

  return (
    <BlockLayout className={styles.wrapper}>
      <div className={styles.contentYouGet}>
        <h1>{intl.formatMessage({ id: "certificateBlock.whatGet" })} 🤩</h1>
        <h6>{intl.formatMessage({ id: "certificateBlock.investors" })}</h6>
        <p>{intl.formatMessage({ id: "certificateBlock.weWantLearn" })}</p>
        <Button type="primary" className={styles.secretFree}>
          {intl.formatMessage({ id: "certificateBlock.whyWeGive" })}
        </Button>
        <p>{intl.formatMessage({ id: "certificateBlock.itWillBecome" })}</p>
      </div>
      <div className={styles.certificate}>
        <img
          src={Certificate}
          alt={intl.formatMessage({ id: "certificateBlock.certificate" })}
        />
      </div>
    </BlockLayout>
  );
};

export default CertificateBlock;
