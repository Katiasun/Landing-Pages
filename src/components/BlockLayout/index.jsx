import React from 'react';
import * as styles from './styles.module.css';

const BlockLayout = ({ children, className: wrapperClass }) => {
  return (<div className={wrapperClass}>
    <div className={styles.block16px}>
      {children}
    </div>
  </div>);
}

export default BlockLayout;