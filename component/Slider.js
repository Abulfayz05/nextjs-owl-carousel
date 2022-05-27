import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import Image from "next/image";


const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Slider() {
  return (
    <div className={styles.main}>
      <OwlCarousel
        className={styles.slider}
        loop
        margin={10}
        autoplay
        autoplayTimeout={2500}
      >
        <div className={styles.item}>
          <Image src="/slider1.jpg" width={400} height={250} alt="goal-1" />
          <div className={styles.text}>
            <h4>Slider 1</h4>
            <h5>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </h5>
          </div>
        </div>
        <div className={styles.item}>
          <Image src="/slider2.jpg" width={400} height={250} alt="goal-2" />

          <div className={styles.text}>
            <h4>Slider 2</h4>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </h5>
          </div>
        </div>
        <div className={styles.item}>
          <Image src="/slider3.jpg" width={400} height={250} alt="goal-3" />
          <div className={styles.text}>
            <h4>Slider 3</h4>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </h5>
          </div>
        </div>
        <div className={styles.item}>
          <Image src="/slider2.jpg" width={400} height={250} alt="goal-4" />
          <div className={styles.text}>
            <h4>Slider 4</h4>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </h5>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}
