import styles from "./IconsBanner.module.scss";
import Icons from "../../assets/icons-banner.png";

export function IconsBanner() {
  return <img className={styles.Image} src={Icons} alt="" />;
}
