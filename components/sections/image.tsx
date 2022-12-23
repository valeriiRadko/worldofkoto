import React from "react"
import styles from "../../styles/components/sections/image.module.css"
import Image from "next/legacy/image";
const ImageContainer = () => {
  return (
    <div className={styles.imagecontainer}>
      <div className={styles.imagesubcont}>
        <Image src="/l1.png" alt="Art" layout="fill" className={styles.image} />
      </div>
      <div className={styles.imagesubcont}>
        <Image src="/l2.png" alt="Art" layout="fill" className={styles.image} />
      </div>
      <div className={styles.imagesubcont2}>
        <Image
          src="/l3.png"
          alt="Art"
          layout="fill"
          className={styles.image2}
        />
      </div>
    </div>
  )
}

export default ImageContainer
