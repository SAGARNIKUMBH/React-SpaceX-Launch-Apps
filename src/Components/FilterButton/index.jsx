import React from "react";

import styles from "./FilterButton.module.css";

const FilterButton = ({ children, onClick, isActive, ...rest }) => {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.buttonActive : ""}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default FilterButton;
