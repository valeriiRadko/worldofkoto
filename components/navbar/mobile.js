import React from "react";
import styles from "../../styles/components/navbar/mobile.module.css";
import { animated, useSpring } from "react-spring";
import { Fade as Hamburger } from "hamburger-react";
import Image from "next/image";
import { scroller } from "react-scroll";
import Link from "next/link";

const Mobile = () => {
  const [isOpen, setOpen] = React.useState(false);
  const containerstyle = useSpring({
    height: isOpen ? "100vh" : "7vh",
    width: isOpen ? "100vw" : "22.5vw",
    backgroundColor: isOpen ? "white" : "transparent",
    borderBottomRightRadius: isOpen ? "0px" : "100px",
    marginTop: 10,
  });

  const linkcontainer = useSpring({
    height: isOpen ? "100%" : "0%",
    overflow: "hidden",
  });

  const headercontainer = useSpring({
    width: isOpen ? "0vh" : "80vw",
    height: "7vh",
    display: "flex",
  });

  const scroll = (element) => {
    scroller.scrollTo(element, {
      duration: 1000,
      delay: 100,
      smooth: true,
    });
  };
  return (
    <div className={styles.container}>
      <animated.div style={containerstyle}>
        <Hamburger
          color="#012626"
          size={30}
          toggled={isOpen}
          toggle={setOpen}
        />
        <animated.div style={linkcontainer}>
          <h1 className={styles.mobilelink} onClick={() => scroll("gallery")}>
            Gallery
          </h1>
          <h1 className={styles.mobilelink} onClick={() => scroll("gallery")}>
            Art
          </h1>
          <h1 className={styles.mobilelink} onClick={() => scroll("game")}>
            Game
          </h1>
          <h1 className={styles.mobilelink} onClick={() => scroll("signup")}>
            Sign Up
          </h1>
          <Link replace href="/">
            <a className={styles.mobilelink}>Whitepaper</a>
          </Link>

          <div
            style={{
              width: 200,
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: 30,
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
        </animated.div>

        <div></div>
      </animated.div>
      <animated.div style={headercontainer}>
        {/* <div className={styles.imagecontainer}>
          <Image
            src="/logo.png"
            alt="Art"
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
        </div> */}
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image alt="Art" src="/logo.svg" layout="fill" objectFit="contain" />
        </div>
        <div className={styles.whitepapercontainer}>
          <div className={styles.whitepaperimage}>
            <Image
              src="/Union.svg"
              alt="Art"
              layout="fill"
              // className={styles.whitepaperimage}
            />
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Mobile;
