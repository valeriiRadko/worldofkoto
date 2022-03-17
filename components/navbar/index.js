import React from "react";
import styles from "../../styles/components/navbar/index.module.css";
import Image from "next/image";
import Link from "next/link";
import { scroller } from "react-scroll";
const NavBar = () => {
  const scroll = (element) => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset:-100
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
        <Image
          src="/logo.png"
          alt="Art"
          layout="fill"
          className={styles.image}
        />
      </div>
      <div className={styles.linkcontainer}>
        <button
          className={styles.button}
          onClick={() => {
            scroll("gallery");
          }}
        >
          Gallery
        </button>
        <button className={styles.button} onClick={() => scroll("gallery")}>
          Art
        </button>
        <button className={styles.button} onClick={() => scroll("game")}>
          Game
        </button>

        <Link replace href="https://whitepaper.metasandmortals.com">
          <a target="_blank" className={styles.link}>
            Whitepaper
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
