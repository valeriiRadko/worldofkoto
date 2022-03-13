import React from "react";
import styles from "../../styles/components/navbar/mobile.module.css";
import { animated, useSpring } from "react-spring";
import { Fade as Hamburger } from "hamburger-react";
import Image from "next/image";

const Mobile = () => {
  const [isOpen, setOpen] = React.useState(false);
  const containerstyle = useSpring({
    height: isOpen ? "100vh" : "10vh",
    width: isOpen ? "100vw" : "22.5vw",
    backgroundColor: isOpen ? "white" : "transparent",
    borderBottomRightRadius: isOpen ? "0px" : "100px",
  });

  const linkcontainer = useSpring({
    height: isOpen ? "100%" : "0%",
    overflow: "hidden",
  });

  const headercontainer = useSpring({
    width: isOpen ? "0vh" : "80vw",
    height: "10vh",
    display: "flex",
  });
  return (
    <div className={styles.container}>
      <animated.div style={containerstyle}>
        <Hamburger color="#012626" size={30} toggled={isOpen} toggle={setOpen} />
        <animated.div style={linkcontainer}>
          <h1 className={styles.mobilelink}>Gallery</h1>
          <h1 className={styles.mobilelink}>Art</h1>
          <h1 className={styles.mobilelink}>Game</h1>
          <h1 className={styles.mobilelink}>Sign Up</h1>
          <h1 className={styles.mobilelink}>Whitepaper</h1>
        </animated.div>

        <div></div>
      </animated.div>
      <animated.div style={headercontainer}>
        <div className={styles.imagecontainer}>
          <Image
            src="/logo.png"
            alt="Art"
            layout="fill"
            className={styles.image}
          />
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