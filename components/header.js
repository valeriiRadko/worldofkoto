import React from "react";
import styles from "../styles/components/header.module.css";
import Background from "./background.png";
const Header = () => {
  return (
    <div className={styles.headercontainer}>
      <h1 className={styles.headertitle}>
        Play and earn in the metaverse with contemporary art
      </h1>
    </div>
  );
};

export default Header;
