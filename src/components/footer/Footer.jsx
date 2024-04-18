import React from "react";
import styles from "./footer.module.css";

export default function Footer(props) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.text}>Creative thoughts agency</div>
    </div>
  );
}
