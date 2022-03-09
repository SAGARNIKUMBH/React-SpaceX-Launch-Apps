import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <h4 className={styles.FooterStyle}>
          Developed By : &copy; Weoto.TechLab.Pvt.Ltd.
          <p>GitHub Link Id : SAGAR NIKUMBH</p>
          <ul className="socials">
            <span className={styles.icon}>
              <i className="fab fa-facebook"></i>
            </span>
            <span className={styles.icon}>
              <i className="fab fa-twitter"></i>
            </span>
            <span className={styles.icon}>
              <i className="fab fa-google-plus"></i>
            </span>
            <span className={styles.icon}>
              <i className="fab fa-youtube"></i>
            </span>
          </ul>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
