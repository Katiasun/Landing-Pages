import React from "react";
import { useIntl } from "gatsby-plugin-react-intl";
import BlockLayout from "../BlockLayout";
import * as styles from "./styles.module.css";
import FooterLogo from "../../images/footerLogo.png";
import Instagram from "../../images/instagram.png";
import Linkedin from "../../images/linkedin.png";
import Facebook from "../../images/facebook.png";
import Twitter from "../../images/twitter.png";
import Carbon from "../../images/carbonLogoMedium.png";

const Footer = () => {
  const intl = useIntl();

  return (
    <BlockLayout className={styles.wrapper}>
      <div className={styles.bakksyInfo}>
        <div className={styles.logoAndPathFinder}>
          <img
            src={FooterLogo}
            alt={intl.formatMessage({ id: "footer.redLogo" })}
          />
          <div className={styles.pathFinder}>
            <a href="#">{intl.formatMessage({ id: "footer.education" })}</a>
            <a href="#">{intl.formatMessage({ id: "footer.giveaway" })}</a>
            <a href="https://www.notion.so/bakksy/81494ba2bdd143a2b44ca6db9125b720?v=6e95eba989f14d60bcef570211645a05">
              {intl.formatMessage({ id: "footer.roadmap" })}
            </a>
          </div>
        </div>

        <div className={styles.socials}>
          <p>{intl.formatMessage({ id: "footer.stayUp" })}</p>
          <div className={styles.mediaLinks}>
            <a href=" https://www.instagram.com/bakksy_app/">
              <img
                src={Instagram}
                alt={intl.formatMessage({ id: "footer.instagram" })}
              />
            </a>
            <a href="https://www.linkedin.com/company/bakksy">
              <img
                src={Linkedin}
                alt={intl.formatMessage({ id: "footer.linkedin" })}
              />
            </a>
            <a href=" https://www.facebook.com/get.bakksy">
              <img
                src={Facebook}
                alt={intl.formatMessage({ id: "footer.facebook" })}
              />
            </a>
            <a href="https://twitter.com/Bakksy_app">
              <img
                src={Twitter}
                alt={intl.formatMessage({ id: "footer.twitter" })}
              />
            </a>
            <a href="https://bakksy.medium.com/">
              <img
                src={Carbon}
                alt={intl.formatMessage({ id: "footer.carbon" })}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bakksyCopyright}>
        <div className={styles.twoParagrapsAndBr}>
          <p>{intl.formatMessage({ id: "footer.bakksy2023" })}</p>
          <br />
          <p>{intl.formatMessage({ id: "footer.bakksyIsTrading" })}</p>
        </div>
        <div className={styles.clearConnect}>
          <a href=" https://www.notion.so/bakksy/Terms-Conditions-b1d08d75489b44e8b108b7d20fa396ca">
            {intl.formatMessage({ id: "footer.terms" })}
          </a>
          <a href="https://www.notion.so/bakksy/Privacy-Policy-99c5b60ef58c48e093c48a9a86cfaeee">
            {intl.formatMessage({ id: "footer.privacy" })}
          </a>
          <a href="https://www.notion.so/bakksy/Cookie-Policy-0a66c17ab9b64d4f8ca221bb3c51fed3">
            {intl.formatMessage({ id: "footer.cookies" })}
          </a>
        </div>
      </div>
    </BlockLayout>
  );
};

export default Footer;
