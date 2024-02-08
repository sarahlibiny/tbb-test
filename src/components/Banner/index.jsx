import styles from "./Banner.module.scss";
import PrincipalBanner from "../../assets/banner-hero.png";
import MobileBanner from "../../assets/banner-mobile.png";

export function Banner() {
  return (
    <div className={styles.banner}>
      <img
        className={styles.ImageDesktop}
        src={PrincipalBanner}
        alt="Imagens mostrando os produtos e sua descrição, e fotos de mulheres"
      />
      <img
        className={styles.ImageMobile}
        src={MobileBanner}
        alt="Imagens mostrando os produtos e sua descrição, e fotos de mulheres"
      />
    </div>
  );
}
