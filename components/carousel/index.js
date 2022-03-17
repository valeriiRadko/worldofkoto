import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
// import { mediaByIndex } from "../media";
import Image from "next/image";
import styles from "../../styles/components/sections/art.module.css";
const slidecontent = [
  {title:"Jim Naughten",image:"/jn.png"},
  {title:"Confidential",image:"/confidential1.png"},
  {title:"Confidential",image:"/confidential2.png"},
  {title:"Confidential",image:"/confidential3.png"},
]

const EmblaCarousel = () => {
  const SLIDE_COUNT = 4;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 2,
    skipSnaps: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

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
              <h1 className={styles.artgalleryboxtitle}>{slidecontent[index].title}</h1>
            </div>
          ))}
        </div>
      </div>
      {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
    </div>
  );
};

export default EmblaCarousel;

// import React from 'react';
// import Slider from "react-slick";
// import NoSSR from 'react-no-ssr';

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Carousel = () => {
//     const settings = {
//       dots: true,
//       infinite: false,
//       speed: 500,
//       slidesToShow: 2,
//       slidesToScroll: 1,
//       initialSlide: 0,
//       horizontal:true
//     //   responsive: [
//     //     {
//     //       breakpoint: 1024,
//     //       settings: {
//     //         slidesToShow: 3,
//     //         slidesToScroll: 3,
//     //         infinite: true,
//     //         dots: true
//     //       }
//     //     },
//     //     {
//     //       breakpoint: 600,
//     //       settings: {
//     //         slidesToShow: 2,
//     //         slidesToScroll: 2,
//     //         initialSlide: 2
//     //       }
//     //     },
//     //     {
//     //       breakpoint: 480,
//     //       settings: {
//     //         slidesToShow: 1,
//     //         slidesToScroll: 1
//     //       }
//     //     }
//     //   ]
//     };
//     return (
//       <div style={{position:'relative',backgroundColor:'red'}}>

//         <h2>Responsive</h2>
//         <Slider {...settings}>

//             <h3 style={{
//                 backgroundColor: "hotpink",
//                 color: "white",
//                 height:'50vh',
//                 width:'50vh'
//               }}>1</h3>
// <h3 style={{
//                 backgroundColor: "hotpink",
//                 color: "white",
//                 height:'50vh',
//                 width:'50vh'
//               }}>2</h3>
//               <h3 style={{
//                 backgroundColor: "hotpink",
//                 color: "white",
//                 height:'50vh',
//                 width:'50vh'
//               }}>3</h3>
//               <h3 style={{
//                 backgroundColor: "hotpink",
//                 color: "white",
//                 height:'50vh',
//                 width:'50vh'
//               }}>4</h3>
//         </Slider>
//       </div>
//     );
//   };

// export default Carousel;
