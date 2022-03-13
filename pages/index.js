import React from "react";
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
export default function Home() {
  const [mobile, setMobile] = React.useState(true);

  return (
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
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <main className={styles.main}>
        <Mobile />

        <NavBar />

        <Header />
        <WhatIs />
        <Art />
        <ImageContainer />
        <Guardians />
        <SignUp />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
