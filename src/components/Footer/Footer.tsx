import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={`row ${styles.container}`}>
      <div className="column">
        <h4></h4>
      </div>
      <div className={`column ${styles.middleContainer}`}>
        <h5>HIKE</h5>
        <h5>RUN</h5>
      </div>
      <div className="column">
        <h5>BACK TO TOP</h5>
      </div>
    </div>
  );
}
