import React from 'react';
import * as styles from './styles.module.css';

const MainWrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
}

export default MainWrapper;