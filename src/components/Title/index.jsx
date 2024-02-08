import styles from "./Title.module.scss";

export function Title({ children }) {
  return <h1 className={styles.Title}>{children}</h1>;
}
