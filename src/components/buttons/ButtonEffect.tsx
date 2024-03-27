import styles from "@/styles/buttons.module.css"
import { FaWhatsapp } from "react-icons/fa";

export const ButtonEffect = () => {
  return (
    <button className={styles.cta}>
      <span className={styles.span}>WhatsApp</span>
      {/* <span className={styles.second}>
        <FaWhatsapp className={styles.icon} />
      </span> */}
    </button>
  );
}

