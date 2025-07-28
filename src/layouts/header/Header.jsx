import styles from "./Header.module.scss";
import { useLocation } from "react-router";

export default function Header() {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  return (
    <div
      className={styles.main}
      style={{
        color: !isHomePage ? "#fffcf0" : "#231918",
        backgroundColor: !isHomePage ? "#231918" : "#fffcf0",
      }}
    >
      <span className={styles.text}>
        <i className="fi fi-rs-box-check" /> LIVRAISON GRATUITE A PARTIR DE 500
        DH
      </span>
    </div>
  );
}
