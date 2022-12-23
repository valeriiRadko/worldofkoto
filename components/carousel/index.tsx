import React, { useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/legacy/image";
import styles from "../../styles/components/sections/art.module.css"
const slidecontent = [
  { title: "Confidential", image: "/confidential1.png" },
  { title: "Confidential", image: "/confidential2.png" },
  { title: "Confidential", image: "/confidential3.png" },
]

const EmblaCarousel = () => {
  const SLIDE_COUNT = 3
  const slides = Array.from(Array(SLIDE_COUNT).keys())
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 2,
    skipSnaps: false,
  })
  // const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  // const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  // const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  // const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return
    // setPrevBtnEnabled(embla.canScrollPrev());
    // setNextBtnEnabled(embla.canScrollNext());
  }, [embla])

  useEffect(() => {
    if (!embla) return
    embla.on("select", onSelect)
    onSelect()
  }, [embla, onSelect])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div style={{ marginRight: 50 }} key={index}>
              <div className={styles.artgallerybox}>
                <div className={styles.artgalleryimagecont}>
                  <Image
                    src={slidecontent[index].image}
                    alt="Art"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <h1 className={styles.artgalleryboxtitle}>
                {slidecontent[index].title}
              </h1>
            </div>
          ))}
        </div>
      </div>
      {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
    </div>
  )
}

export default EmblaCarousel
