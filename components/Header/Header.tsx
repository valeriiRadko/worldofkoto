import React from "react";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.root}>
      <h1 className={styles.title}>
        Play and earn in the metaverse with contemporary art
      </h1>
    </header>
  );
};

export default Header;
