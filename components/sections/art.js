import React from "react";
import styles from "../../styles/components/sections/art.module.css";
import Image from "next/image";
const Art = () => {
  return (
    <div className={styles.artcontainer}>
      <div className={styles.artsubcontainer}>
        <h1 className={styles.artsubtitle}>PART 1: The Art</h1>
        <h1 className={styles.arttitle}>gallery of koto</h1>
        <div className={styles.artgalleryrowcontainer}>
          <div>
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
          </div>
          <div>
            <div className={styles.artgallerybox}>
              <div className={styles.artgalleryimagecont}>
                <Image
                  src={"/kaws.png"}
                  alt="Art"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <h1 className={styles.artgalleryboxtitle}>KAWS</h1>
          </div>
          <div>
            <div className={styles.artgallerybox}>
              <div
                className={styles.artgalleryimagecont}
                style={{ backgroundColor: "#f6eccf" }}
              ></div>
            </div>
            <h1 className={styles.artgalleryboxtitle}>BANKSY</h1>
          </div>
          <div>
            <div className={styles.artgallerybox}>
              <div
                className={styles.artgalleryimagecont}
                style={{ backgroundColor: "#ccacac" }}
              ></div>
            </div>
            <h1 className={styles.artgalleryboxtitle}>Pablo Picasso</h1>
          </div>
        </div>
        <div className={styles.artgalleryrowcontainer}>
          <div>
            <div className={styles.artgallerybox}>
              <div
                className={styles.artgalleryimagecont}
                style={{ backgroundColor: "#cdf3bc" }}
              ></div>
            </div>
            <h1 className={styles.artgalleryboxtitle}>Shepard Fairy</h1>
          </div>
          <div>
            <div className={styles.artgallerybox}>
              <div
                className={styles.artgalleryimagecont}
                style={{ backgroundColor: "#dae4fd" }}
              ></div>
            </div>
            <h1 className={styles.artgalleryboxtitle}>David Carson</h1>
          </div>
          <div>
            <div className={styles.artgallerybox}>
              <div
                className={styles.artgalleryimagecont}
                style={{ backgroundColor: "#ddcce5" }}
              ></div>
            </div>
            <h1 className={styles.artgalleryboxtitle}>Peter Max</h1>
          </div>
          <div>
            <div className={styles.artgallerybox}>
              <div
                className={styles.artgalleryimagecont}
                style={{ backgroundColor: "#acccca" }}
              ></div>
            </div>
            <h1 className={styles.artgalleryboxtitle}>Tom Everhart</h1>
          </div>
        </div>

        <div className={styles.arttextcontainer}>
          <div className={styles.arttextleftcontainer}>
            <h1 className={styles.arttextlefttitle}>Artist revenue share</h1>
            <p className={styles.arttextlefttext}>
              We're designing a framework that fairly compensate artists who
              contributes to the project, every step of the way.
            </p>
          </div>
          <div className={styles.arttextrightcontainer}>
            <div className={styles.artpercentagecontainer}>
              <div className={styles.artpercentagebox}>
                <h1 className={styles.artpercentagetitle}>
                  50<span className={styles.artpercentage}>%</span>
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

            <div className={styles.artistjoincontainer}>
              <h1 className={styles.artistjointitle}>Are you an artist?</h1>
              <button className={styles.artistjoinbutton}>
                Apply to Join KOTO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
