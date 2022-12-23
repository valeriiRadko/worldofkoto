import React, { useState, useEffect, useCallback } from "react"
import { NextPage } from "next"
import Head from "next/head"
import { ParallaxProvider } from "react-scroll-parallax"

import Header from "../components/Header"
import WhatIs from "../components/sections/whatis"
import Art from "../components/sections/art"
import ImageContainer from "../components/sections/image"
import Guardians from "../components/sections/guardians"
import SignUp from "../components/sections/signup"
import Team from "../components/sections/Team"
import NavBar from "../components/navbar"
import Mobile from "../components/navbar/mobile"
import Section from "../components/Section"

import styles from "../styles/Home.module.scss"
import Footer from "../components/Footer"
import { useMediaQuery } from "../hooks/useMediaQuery"
import { team, AVALANCHE_MAINNET_PARAMS, menuItem } from "../config"

const Home: NextPage = () => {
  const isBreakpoint = useMediaQuery(768)
  const [showPopUp, setShowPopUp] = useState(false)
  const [web3, setWeb3] = useState(null)
  const [address, setAddress] = useState(null)

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
      <div className={styles.root}>
        <Head>
          <title>World of Koto</title>
          <meta name="description" content="Explore the world of Koto" />
        </Head>

        <main className={styles.main}>
          {/* <PopUp open={showPopUp} setOpen={setShowPopUp} /> */}
          <Mobile items={menuItem} />
          <NavBar items={menuItem} />
          <Header />
          <WhatIs />
          <Section name="gallery">
            <Art isBreakPoint={isBreakpoint} />
          </Section>
          <Section name="art">
            <ImageContainer />
          </Section>
          <Section name="game">
            <Guardians />
          </Section>
          <Section name="signup">
            <SignUp />
          </Section>
          <Section name="team" container>
            <Team team={team} />
          </Section>
          <Footer />
        </main>
      </div>
    </ParallaxProvider>
  )
}

export default Home
