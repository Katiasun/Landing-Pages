import React from "react";
import * as styles from "./styles.module.css";
import { useIntl } from "gatsby-plugin-react-intl";
import BlockLayout from "../BlockLayout";

const AboutBakksyBlock = () => {
  const intl = useIntl();

  return <BlockLayout className={styles.wrapper}></BlockLayout>;
};

export default AboutBakksyBlock;
