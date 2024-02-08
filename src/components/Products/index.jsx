import styles from "./Products.module.scss";
import { Title } from "../../index.jsx";
import { Carousel } from "react-responsive-carousel";
import ImageBlue from "../../assets/image-blue.png";
import ImageGreen from "../../assets/image-green.png";
import ImagePink from "../../assets/image-pink.png";

export function Products() {
  const isMobile = window.innerWidth <= 600;

  return (
    <>
      <section className={styles.Section}>
        <div className={styles.ContainerTitle}>
          <Title>our products</Title>
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
              <img src={ImageBlue} alt="Produto 1: wellness" />
              <p>intibiome wellness daily intimate wash</p>
              <span className={styles.Blue}>wellness</span>
            </div>
            <div className={styles.CarouselItem}>
              <img src={ImageGreen} alt="Product 2: active" />
              <p>intibiome active extra protection intimate wash</p>
              <span className={styles.Green}>active</span>
            </div>
            <div className={styles.CarouselItem}>
              <img src={ImagePink} alt="Product 3: agecare" />
              <p>intibiome agecare dryness relief intimate wash</p>
              <span className={styles.Pink}>agecare</span>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
}
