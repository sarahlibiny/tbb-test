import styles from "./Text.module.scss";

export function Text({ children }) {
  return <p className={styles.Text}>{children}</p>;
}
