import Image from "next/image";
import React from "react";

import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.root}>
      <div className={styles["powered-by-container"]}>
        <span className={styles["powered-by"]}>Powered by</span>
        <span className={styles["image-wrapper"]}>
          <Image
            src="/images/powered-by/cubiq.jpeg"
            alt="cubiq"
            width={178}
            height={87}
          />
        </span>
        <span className={styles["image-wrapper"]}>
          <Image
            src="/images/powered-by/avalanche.png"
            alt="avalanche"
            width={80}
            height={80}
          />
        </span>
      </div>
      <div className={styles.footer}>
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
      </div>
    </footer>
  );
}

export default Footer;
