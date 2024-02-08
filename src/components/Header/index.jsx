import styles from "./Header.module.scss";
import IntibiomeLogoSmall from "../../assets/intibiome-logo-small.png";
import SearchLogo from "../../assets/icon-search.svg";
import { FaChevronDown } from "react-icons/fa";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img
          src={IntibiomeLogoSmall}
          alt="Logo da intibiome: co-develop with gynaecologists"
        />
        <div className={styles.ContainerSearchLogo}>
          <img src={SearchLogo} alt="ícone de uma lupa para pesquisa" />
        </div>
      </div>
      <nav>
        <ul>
          <div>
            <li>about us</li>
            <FaChevronDown alt="ícone seta para baixo" />
          </div>
          <div>
            <li>our products</li>
            <FaChevronDown alt="ícone seta para baixo" />
          </div>
          <div>
            <li>intimate health</li>
            <FaChevronDown alt="ícone seta para baixo" />
          </div>
          <li>contact us</li>
        </ul>
      </nav>
    </header>
  );
}
