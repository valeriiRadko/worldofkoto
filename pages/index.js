import React, { useState, useEffect, useCallback } from "react";
import Head from "next/head";
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
// const AVALANCHE_MAINNET_PARAMS = {
//   chainId: "0xA86A",
//   chainName: "Avalanche Mainnet C-Chain",
//   nativeCurrency: {
//     name: "Avalanche",
//     symbol: "AVAX",
//     decimals: 18,
//   },
//   rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
//   blockExplorerUrls: ["https://snowtrace.io/"],
// };
export default function Home() {
  const isBreakpoint = useMediaQuery(768);
  // const [showPopUp, setShowPopUp] = useState(false);
  // const [web3, setWeb3] = useState(null);
  // const [address, setAddress] = useState(null);

  // useEffect(() => {}, []);

  // useEffect(() => {
  //   console.log(window.ethereum)
  //   window.ethereum ?
  //     ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
  //       setAddress(accounts[0])
  //       let w3 = new Web3(ethereum)
  //       w3.givenProvider.request({
  //         method: 'wallet_addEthereumChain',
  //         params: [AVALANCHE_MAINNET_PARAMS]
  //       })
  //       console.log(w3.givenProvider.request)
  //       setWeb3(w3)
  //     }).catch((err) => console.log(err))
  //   : console.log("Please install MetaMask")
  // }, [])
  // if (showPopUp === false) {
  //   setTimeout(() => {
  //     setShowPopUp(true);
  //   }, 5000);

  // }

  return (
    <ParallaxProvider>
      <div className={styles.container}>
        <Head>
          <title>World of Koto</title>
          <meta name="description" content="Explore the world of Koto" />
        </Head>

        <main className={styles.main}>
          {/* <PopUp open={showPopUp} setOpen={setShowPopUp} /> */}
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
          <span className={styles.footersubcontainer}>
            <p className={styles.termsandconditions}>
              ®Copyright 2022. The Metaversed Studio Ltd. All rights reserved
            </p>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                // href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerlink}
              >
                Privacy
              </a>
              •
              <a
                // href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerlink}
              >
                Terms & Conditions
              </a>
            </span>
          </span>
        </footer>
      </div>
    </ParallaxProvider>
  );
}
