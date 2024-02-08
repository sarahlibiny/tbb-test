import { Title, Text } from "../../index.jsx";
import styles from "./TextContent.module.scss";

export function TextContent() {
  return (
    <section className={styles.Section}>
      <div className={styles.ContainerTitle}>
        <Title>we're here to help</Title>
      </div>
      <div>
        <Text>
          When it comes to caring for our most intimate areas, we’ve lost our
          connection.
        </Text>
        <Text>
          Embarrassed, unwilling, or unable to communicate with others, we’re
          needlessly neglecting the parts of our bodies that need it most.
        </Text>
        <Text>
          We’re here to help. Providing you with the expertise, knowledge and
          products you need to feel confident in your personal care.
        </Text>
      </div>
    </section>
  );
}
