import styles from "./SecondBanner.module.scss";
import secondBanner from "../../assets/second-banner.png";
import secondBannerMobile from "../../assets/second-banner-mobile.png";

export function SecondBanner() {
  return (
    <div className={styles.secondBanner}>
      <img className={styles.Image} src={secondBanner} alt="" />
      <img className={styles.ImageMobile} src={secondBannerMobile} alt="" />
    </div>
  );
}
