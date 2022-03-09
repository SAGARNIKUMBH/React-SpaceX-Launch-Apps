import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <h1 className={styles.headerTitle}>SpaceX Launch Programs</h1>
      </div>
    </header>
  );
};

export default Header;
