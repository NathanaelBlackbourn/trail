import Header from "../Header/Header";
import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <div className={styles.container}>
      <div className={`row ${styles.top}`}>
        <div className={`column ${styles.menuColumn}`}>
          <h3>HIKE</h3>
          <h3>RUN</h3>
        </div>
        <div className={`column ${styles.menuColumn}`}>
          <h4>Product Care</h4>
          <h4>Order & Shipping</h4>
          <h4>Return Policy</h4>
          <h4>Terms & Coniditions</h4>
          <h4>Privacy Policy</h4>
          <h4>Cookie Policy</h4>
          <h4>Advertising Cookies</h4>
          <h4>Preferences</h4>
        </div>
        <div className={`column ${styles.menuColumn}`}>
          <p>+46 712345678</p>
          <p>email@trail.eu</p>
        </div>
      </div>
      <Header variant="menu" />
    </div>
  );
}
