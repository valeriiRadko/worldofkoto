import React from "react";
import styles from "../../styles/components/popup/index.module.css";
import { animated, useSpring } from "react-spring";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
const PopUp = ({ open, setOpen }) => {
  console.log(open);
  const styles1 = useSpring({ top: open ? "25vh" : "100vh" });
  const styles2 = useSpring({ top: open ? "0vh" : "100vh" });

  return (
    <animated.div className={styles.popupcontainer} style={styles1}>
      <div
        onClick={() => {
          setOpen(false);
        }}
        style={{ width: 50, height: 50, display: "flex" }}
      >
        <FontAwesomeIcon icon={faClose} color="black" />
      </div>

      <h1 style={{ fontFamily: "Ubuntu" }}>Join the whitelist</h1>
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLScV9iER8pXjQn57Agfman85MO7AVLOHJ3W0Bbu0qgtxs8oyGg/viewform">
        <a className={styles.artistjoinbutton} target="_blank">
          Join Whitelist
        </a>
      </Link>
    </animated.div>
  );
};

export default PopUp;
