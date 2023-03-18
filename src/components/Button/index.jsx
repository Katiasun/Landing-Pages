import React from 'react';
import * as styles from './styles.module.css';

const Button = ({ type, children, className: parentClassName }) => {
  const buttonClass = type === 'primary' ? styles.primary : styles.secondary;
  return <button className={`${buttonClass} ${parentClassName}`}>{children}</button>
}

export default Button;
