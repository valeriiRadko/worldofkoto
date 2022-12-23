import React from "react"
import styles from "../../styles/components/sections/art.module.css"
import Image from "next/legacy/image"
import Carousel from "../carousel"
import Link from "next/link"

interface ArtProps {
  isBreakPoint: boolean
}

const Art = ({ isBreakPoint }: ArtProps) => {
  return (
    <div className={styles.artcontainer}>
      <div className={styles.artsubcontainer}>
        <h1 className={styles.artsubtitle}>PART 1: THE ART</h1>
        <h1 className={styles.arttitle}>gallery of koto</h1>
        {isBreakPoint && <Carousel />}
        <div className={styles.artgalleryrowcontainer}>
          {/* <div>
            <div className={styles.artgallerybox}>
              <div className={styles.artgalleryimagecont}>
                <Image
                  src={"/jn.png"}
                  alt="Art"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <h1 className={styles.artgalleryboxtitle}>Jim Naughten</h1>
          </div> */}
          <div>
            <div className={styles.artgallerybox}>
              <div className={styles.artgalleryimagecont}>
                <Image
                  src={"/confidential1.png"}
                  alt="Art"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <h1 className={styles.artgalleryboxtitle}>Confidential</h1>
          </div>
          <div>
            <div className={styles.artgallerybox}>
              <div className={styles.artgalleryimagecont}>
                <Image
                  src={"/confidential2.png"}
                  alt="Art"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <h1 className={styles.artgalleryboxtitle}>Confidential</h1>
          </div>
          <div>
            <div className={styles.artgallerybox}>
              <div className={styles.artgalleryimagecont}>
                <Image
                  src={"/confidential3.png"}
                  alt="Art"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <h1 className={styles.artgalleryboxtitle}>Condifential</h1>
          </div>
        </div>

        <div className={styles.arttextcontainer}>
          <div className={styles.arttextleftcontainer}>
            <h1 className={styles.arttextlefttitle}>Artist revenue share</h1>
            <p className={styles.arttextlefttext}>
              We’re building an ecosystem that fairly compensates artists who
              contribute to the project through revenue sharing via smart
              contracts.
            </p>
          </div>
          <div className={styles.arttextrightcontainer}>
            <div className={styles.artpercentagecontainer}>
              <div className={styles.artpercentagebox}>
                <h1 className={styles.artpercentagetitle}>
                  20<span className={styles.artpercentage}>%</span>
                </h1>
                <h1 className={styles.artpercentagetext}>Crate Sales</h1>
              </div>
              <div className={styles.artpercentagebox}>
                <h1 className={styles.artpercentagetitle}>
                  30<span className={styles.artpercentage}>%</span>
                </h1>
                <h1 className={styles.artpercentagetext}>Marketplace Fees</h1>
              </div>
              <div className={styles.artpercentagebox}>
                <h1 className={styles.artpercentagetitle}>
                  20<span className={styles.artpercentage}>%</span>
                </h1>
                <h1 className={styles.artpercentagetext}>Bounty Pool</h1>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                width: "90%",
                marginLeft: "5%",
                height: 50,
                display: "flex",
              }}
            >
              <Image
                src="/line.png"
                alt="line"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className={styles.artistjoincontainer}>
              <h1 className={styles.artistjointitle}>Are you an artist?</h1>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSeiv-g8iBu-yjfJDELQMYRyUCtDti0rUA_YfeXFF7tlgufoJw/viewform"
                target="_blank"
                className={styles.artistjoinbutton}
              >
                Apply to Join KOTO
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Art
