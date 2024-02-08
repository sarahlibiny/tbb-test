import { Text, Title } from "../../index.jsx";
import styles from "./SecondTextContent.module.scss";

export function SecondTextContent() {
  return (
    <section className={styles.Section}>
      <div className={styles.ContainerTitle}>
        <Title>
          whatever your age. whatever your lifestyle. whatever your interests.
        </Title>
      </div>
      <div className={styles.ContainerText}>
        <Text>
          Co-created with gynaecologists, our revolutionary products have been
          expertly developed to support your intimate microbiome and pH balance,
          and strengthen overall natural health.
        </Text>
        <Text>
          As the experts in intimate hygiene, we want to bring discussion about
          intimate wellness care out of the dark and demystify the taboos that
          surround it.
        </Text>
      </div>
    </section>
  );
}
