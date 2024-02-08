import styles from "./Discoveries.module.scss";
import { Button, Title } from "../../index.jsx";
import { Carousel } from "react-responsive-carousel";
import Slide1 from "../../assets/img-slide1.png";
import Slide2 from "../../assets/img-slide2.png";
import Slide3 from "../../assets/img-slide3.png";

export function Discoveries() {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <div className={styles.ContainerTitle}>
        <Title>keep up to date with our discoveries</Title>
      </div>
      <div className={styles.CarouselWrapper}>
        <Carousel
          className={styles.Carrossel}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          swipeable={isMobile}
        >
          <div className={styles.CarouselItem}>
            <img src={Slide1} alt="Imagem de uma mulher sorrindo" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={styles.CarouselItem}>
            <img
              src={Slide2}
              alt="Imagem de uma mulher de mais idade sorrindo"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={styles.CarouselItem}>
            <img src={Slide3} alt="Imagem simulando gotas de água" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Carousel>
      </div>
      <div className={styles.ContainerButton}>
        <Button />
      </div>
    </>
  );
}
