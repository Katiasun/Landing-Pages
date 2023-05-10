import React from "react";
import { useIntl } from "gatsby-plugin-react-intl";
import BlockLayout from "../BlockLayout";
import * as styles from "./styles.module.css";

const Header = () => {
  const intl = useIntl();

  return <BlockLayout className={styles.wrapper}></BlockLayout>;
};

export default Header;
