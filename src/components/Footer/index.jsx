import styles from "./Footer.module.scss";
import ULabs from "../../assets/u-labs.png";
import IconInsta from "../../assets/icon-insta.svg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li className={styles.firstItem}>contact us</li>
        <li>faq</li>
        <li>site map</li>
        <li>privacy policy</li>
        <li>cookies policy</li>
        <li>legal notice</li>
      </ul>
      <div>
        <img
          className={styles.IconULabs}
          src={ULabs}
          alt="ícone da U.Labs na cor branca"
        />
        <img src={IconInsta} alt="ícone do instagram na cor branca" />
      </div>
    </footer>
  );
}
