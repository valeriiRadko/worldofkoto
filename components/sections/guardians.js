import React from "react";
import styles from "../../styles/components/sections/guardians.module.css";
import Image from "next/image";
const Guardians = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.subtitle}>PART 2: the Game</h1>
      <h1 className={styles.title}>Guardians of Koto</h1>
      <div className={styles.guardiansimagecontainer}>
        <div className={styles.imagecont}>
          <Image
            src="/l1.png"
            alt="Art"
            layout="fill"
            className={styles.image}
          />
        </div>
        <div className={styles.imagecont}>
          <Image
            src="/l2.png"
            alt="Art"
            layout="fill"
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.textcont}>
        <div className={styles.lefttextcont}>
          <h1 className={styles.texttitle}>Save the art</h1>
          <h1 className={styles.texttitle}>Save the future</h1>
        </div>
        <div className={styles.righttextcont}>
          <p className={styles.text}>
            The world at the turn of the 22nd century is lush and beautiful, but
            not for long.
          </p>

          <p className={styles.text}>
            After the passing of the Phoenix Act, advertising has replaced all
            art. Galleries for advertisements have popped up in the place of art
            galleries. People keep ever-changing ads on the walls of their
            homes. And Metacorp is behind all of it.
          </p>

          <p className={styles.text}>
            Will you join them, or fight them? Explore the depth of the
            Metaverse, and find the lost crates to save the only pieces of art
            left in the world
          </p>

          <p className={styles.text}>
            <b>
              <i>The future depends on it.</i>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Guardians;
