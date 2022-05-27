import React from "react";
import Image from "next/image";
import styles from "../../styles/components/sections/whatis.module.css";
import { Parallax } from "react-scroll-parallax";
const WhatIs = () => {
  return (
    <div className={styles.whatiscontainer}>
      <h1 className={styles.whatistitle}>What is world of koto?</h1>
      <div className={styles.whatiscontent}>
        <div className={styles.whatiscontentimagebordercontainer}>
          <div className={styles.whatiscontentimage}>
            <Image
              src={"/art.png"}
              alt="Art"
              layout="fill"
              objectFit="contain"
            />
            <Parallax speed={1} startScroll={1000} translateX={200}>
              <div className={styles.whatiscontentblur} />
            </Parallax>
          </div>
        </div>

        <div className={styles.whatiscontenttext}>
          <p className={styles.whatiscontenttitle}>
            The future of art ownership
          </p>
          <p className={styles.whatiscontentparagraph}>
          Every piece of art you own in World of Koto is either 1) an officially licensed NFT from an original work of art or 2) a fractional ownership token of a real work of art.
            <br />
            <br />
            The Koto Gallery is a beautiful digital space that allows you to show off your NFT art collection in a sleek, customizable virtual gallery.
          </p>
        </div>
      </div>

      <div className={styles.whatissubcontentcontainer}>
        <div className={styles.whatiscontentreverse}>
          <div className={styles.whatiscontentimagebordercontainer}>
            <div className={styles.whatiscontentimage}>
              <Image
                src={"/p2e.png"}
                alt="Art"
                layout="fill"
                objectFit="contain"
              />
              <Parallax speed={20}>
                <div className={styles.whatiscontentblur} />
              </Parallax>
            </div>
          </div>

          <div className={styles.whatiscontenttext}>
            <p className={styles.whatiscontenttitle}>Play 2 earn game</p>
            <p className={styles.whatiscontentparagraph}>
              <b>Guardians of Koto</b> is a Play to Earn game platform where the art you own will embody an entirely new utility: coming to life as a playable character in a series of challenging AAA games.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIs;
