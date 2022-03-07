import React from "react";
import styles from "../../styles/components/navbar/index.module.css";
import Image from "next/image";
import Link from "next/link";
const NavBar = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.imagecontainer}
      >
        <Image
          src="/logo.png"
          alt="Art"
          layout="fill"
          className={styles.image}
        />


      </div>
      <div className={styles.linkcontainer}>
            
            <button className={styles.button}>Gallery</button>
            <button className={styles.button}>Art</button>
            <button className={styles.button}>Game</button>

            <Link replace  href="https://whitepaper.metasandmortals.com"><a className={styles.link}>Whitepaper</a></Link>
            </div>
    </div>
  );
};

export default NavBar;
