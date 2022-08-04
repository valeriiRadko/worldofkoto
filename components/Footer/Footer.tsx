import React from "react";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["terms-and-conditions"]}>
        ®Copyright {new Date().getFullYear()}. The Metaversed Studio Ltd. All
        rights reserved.
      </div>
      <div className={styles.links}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Privacy
        </a>
        •
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
}

export default Footer;
