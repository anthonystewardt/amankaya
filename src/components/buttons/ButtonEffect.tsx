import styles from "@/styles/buttons.module.css"
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

interface Props {
  title: string;
  path: string;
  color: string;
}

export const ButtonEffect = ({title, path, color}: Props) => {
  return (
    <Link href={path} className={`${styles.cta} ${color}`} target="_blank">
      <span className={styles.span}>{ title }</span>
      {/* <span className={styles.second}>
        <FaWhatsapp className={styles.icon} />
      </span> */}
    </Link>
  );
}

