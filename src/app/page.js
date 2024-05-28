"use client";

import Image from "next/image";
import styles from "./page.module.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SearchBar from './SearchBar'; // Import the SearchBar component
import ProductCardView from "./ProductCardView";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData1 } from "./data1";
import { productData2 } from "./data2";

export default function Home() {
  const responsiveC = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomLeftArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className={`${styles.customArrow} ${styles.customLeftArrow}`}
    >
      &lt; {/* Unicode for left arrow */}
    </button>
  );

  const CustomRightArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className={`${styles.customArrow} ${styles.customRightArrow}`}
    >
      &gt; {/* Unicode for right arrow */}
    </button>
  );

  const product1 = productData1.map((item) => (
    <ProductCardView
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  const product2 = productData2.map((item) => (
    <ProductCardView
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <main className={styles.main}>
    
      <div style={{ width: '100%', backgroundColor: 'white' }}>

        <div style={{ marginBottom: 80 }}>
          <SearchBar />
        </div>

        <div style={{ marginBottom: 30 }}>
          <Carousel responsive={responsiveC} containerClass={styles.carouselContainer}>
            {product1}
          </Carousel>
        </div>

        <div style={{ marginBottom: 30 }}>
          <Carousel responsive={responsiveC} containerClass={styles.carouselContainer}>
            {product2}
          </Carousel>
        </div>

      </div>

    </main>
  );
}
