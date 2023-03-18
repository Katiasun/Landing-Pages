import React from 'react';
import * as styles from './styles.module.css';

const BlockLayout = ({ children }) => {
  return (<div className={styles.initialBlock}>
    <div className={styles.block16px}>
      {children}
    </div>
  </div>);
}

export default BlockLayout;