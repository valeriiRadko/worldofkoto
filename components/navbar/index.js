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
      offset: -100,
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
        <Image
          src="/logo.svg"
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

        <Link replace href="/">
          <a target="_blank" className={styles.link}>
            Whitepaper
          </a>
        </Link>

        <div
          style={{
            width: 200,
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Link replace href="https://twitter.com/WorldofKoto">
            <a target="_blank">
              <Image
                src="/twitter.svg"
                alt="twitter"
                layout="fixed"
                height={30}
                width={30}
              />
            </a>
          </Link>
          <Link replace href="https://www.instagram.com/worldofkoto/">
            <a target="_blank">
              <Image
                src="/instagram.svg"
                alt="instagram"
                layout="fixed"
                height={30}
                width={30}
              />
            </a>
          </Link>
          <Link replace href="/">
            <a target="_blank">
              <Image
                src="/discord.svg"
                alt="discord"
                layout="fixed"
                height={30}
                width={30}
              />
            </a>
          </Link>
          <Link replace href="https://medium.com/@worldofkoto">
            <a target="_blank">
              <Image
                src="/medium.svg"
                alt="medium"
                layout="fixed"
                height={30}
                width={30}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
