import React from "react";

import {
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
} from "pure-react-carousel";
import styles from './carousel.module.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type SlideProps = {
  index: number,
  url: string,
  alt: string
}

type Props = {
  slides: SlideProps[]
}

export const Carousel = (props: Props) => {
  return (
    <div className={styles.carouselContainer}>
      <CarouselProvider
        naturalSlideWidth={0}
        naturalSlideHeight={0}
        totalSlides={5}
      >
        <Slider classNameTray={styles.Slider}>
          {props.slides.map((slide: SlideProps, key: number) => (
            <Slide key={key} index={slide.index}>
              <p className={styles.slideTitle}>{slide.alt}</p>
              <img
                className={styles.img}
                src={slide.url}
                alt={slide.alt}
              />
            </Slide>
          ))}
        </Slider>
        <DotGroup className={styles.dot}/>
        <ButtonBack className={styles.slideBack}>
          <ArrowBackIosIcon  className={styles.arrow}/>
        </ButtonBack>
        <ButtonNext className={styles.slideNext}>
          <ArrowForwardIosIcon className={styles.arrow}/>
        </ButtonNext>
      </CarouselProvider>
    </div>
  );
}
