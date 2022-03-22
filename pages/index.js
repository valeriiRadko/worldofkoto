import React, { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import WhatIs from "../components/sections/whatis";
import Art from "../components/sections/art";
import ImageContainer from "../components/sections/image";
import Guardians from "../components/sections/guardians";
import SignUp from "../components/sections/signup";
import NavBar from "../components/navbar";
import Mobile from "../components/navbar/mobile";
import { Element } from "react-scroll";
import { ParallaxProvider } from "react-scroll-parallax";
import PopUp from "../components/popup";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

export default function Home() {
  const isBreakpoint = useMediaQuery(768);
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    if (showPopUp === false) {
      setTimeout(() => {
        setShowPopUp(true);
      }, 5000);
    }
  }, [showPopUp]);
  return (
    <ParallaxProvider>
      <div className={styles.container}>
        <Head>
          <title>World of Koto</title>
          <meta
            name="viewport"
            content="width=device-width,minimum-scale=1,initial-scale=1"
          />

          <meta name="description" content="Explore the world of Koto" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/css?family=Ubuntu"
          />
        </Head>

        <main className={styles.main}>
          <PopUp open={showPopUp} setOpen={setShowPopUp} />
          <Mobile />

          <NavBar />

          <Header />
          <WhatIs />
          <Element name="gallery">
            <Art isBreakPoint={isBreakpoint} />
          </Element>
          <ImageContainer />
          <Element name="game">
            <Guardians />
          </Element>
          <Element name="signup">
            <SignUp />
          </Element>
        </main>

        <footer className={styles.footer}>
          {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
        </footer>
      </div>
    </ParallaxProvider>
  );
}
