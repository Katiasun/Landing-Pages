import React from "react";
import { useIntl } from "gatsby-plugin-react-intl";
import BlockLayout from "../BlockLayout";
import * as styles from "./styles.module.css";
import Button from "../Button";
import Certificate from "../../images/Certificate.png";

const CertificateBlock = () => {
  const intl = useIntl();

  return (
    <BlockLayout className={styles.wrapper}>
      <div className={styles.contentYouGet}>
        <h1>{intl.formatMessage({ id: "CertificateBlock.whatGet" })} 🤩</h1>
        <h6>{intl.formatMessage({ id: "CertificateBlock.investors" })}</h6>
        <p>{intl.formatMessage({ id: "CertificateBlock.weWantLearn" })}</p>
        <Button type="primary" className={styles.secretFree}>
          {intl.formatMessage({ id: "CertificateBlock.whyWeGive" })}
        </Button>
        <p>{intl.formatMessage({ id: "CertificateBlock.itWillBecome" })}</p>
      </div>
      <div className={styles.certificate}>
        <img
          src={Certificate}
          alt={intl.formatMessage({ id: "CertificateBlock.certificate" })}
        />
      </div>
    </BlockLayout>
  );
};

export default CertificateBlock;
