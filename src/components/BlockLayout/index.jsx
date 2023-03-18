import * as React from "react"

import * as styles from "./styles.module.css"

const BlockLayout = ({ children }) => {
  return <div className={styles.blockLayoutStyle}>{children}</div>
}

export default BlockLayout;