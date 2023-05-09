import * as React from "react";
import { useIntl } from "gatsby-plugin-react-intl";
import BlockLayout from "../BlockLayout";
import * as styles from "./styles.module.css";

const Footer = () => {
  const intl = useIntl();

  return (
    <BlockLayout className={styles.wrapper}>
      <div class="bakksy-info">
        <div class="logo-and-path-finder">
          <img src="./footer-logo.png" alt="red logo" />
          <div class="path-finder">
            <a href="#">Education</a>
            <a href="#">Giveaway</a>
            <a href="https://www.notion.so/bakksy/81494ba2bdd143a2b44ca6db9125b720?v=6e95eba989f14d60bcef570211645a05">
              Roadmap
            </a>
          </div>
        </div>

        <div class="socials">
          <p>Stay up to date</p>
          <div class="media-links">
            <a href=" https://www.instagram.com/bakksy_app/">
              <img src="./instagram-logo.png" alt="instagram" />
            </a>
            <a href="https://www.linkedin.com/company/bakksy">
              <img src="./linkedin.png" alt="linkedin" />
            </a>
            <a href=" https://www.facebook.com/get.bakksy">
              <img src="./facebook.png" alt="facebook" />
            </a>
            <a href="https://twitter.com/Bakksy_app">
              <img src="./twitter.png" alt="twitter" />
            </a>
            <a href="https://bakksy.medium.com/">
              <img src="./carbon_logo-medium.png" alt="carbon" />
            </a>
          </div>
        </div>
      </div>
      <div class="bakksy-copyright">
        <div class="two-paragraps-and-br">
          <p>© Bakksy 2023. All rights reserved.</p>
          <br />
          <p>
            Bakksy is a trading name of Bakksy Finance OÜ, which is a registered
            in Estonia by address Tornimäe 3, Tallinn 10145 (No. 16575205).
          </p>
        </div>
        <div class="clear-connect">
          <a href=" https://www.notion.so/bakksy/Terms-Conditions-b1d08d75489b44e8b108b7d20fa396ca">
            Terms
          </a>
          <a href="https://www.notion.so/bakksy/Privacy-Policy-99c5b60ef58c48e093c48a9a86cfaeee">
            Privacy
          </a>
          <a href="https://www.notion.so/bakksy/Cookie-Policy-0a66c17ab9b64d4f8ca221bb3c51fed3">
            Cookies
          </a>
        </div>
      </div>
    </BlockLayout>
  );
};

export default Footer;
